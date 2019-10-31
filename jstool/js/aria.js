$AriaParams={};
$CurrentList=[];
$MultiSelectMap=[];
$LastSelected=-1;
var $bnmr=["全部","进行","暂停","等待","完成","错误"];
window.onload=function(){
	initDatas();
    initWebSocket();
	_$G("setting_btn").onclick=function(){
		aria2Setting();
	};
};
function initDatas(){
	Date.prototype.toStr =dateFmt;
    $AriaParams={
		ariaUrl:_getStorage("ariaUrl"),
		downFdir:_getStorage("downFdir"),
		downFnme:_getStorage("downFnme"),
		downHead:_getStorage("downHead"),
		dnorSufx:_getStorage("dnorSufx"),
        dnorFdir:_getStorage("dnorFdir"),
		dnorHead:_getStorage("dnorHead"),
		taskFilt:_getStorage("taskFilt"),
		asParamCdm:_getStorage("asParamCdm"),
		asParamMtn:_getStorage("asParamMtn"),
		asParamTrk:_getStorage("asParamTrk")
	};
	_$G("filter_btn").innerHTML=$bnmr[_$Ava($AriaParams.taskFilt)?$AriaParams.taskFilt:0];
}
function initEvents(){
	_$G("add_btn").onclick=function(){
		aria2Add();
	};
	$AddOrderBtn=_$G("addorder_btn");
	$AddOrderBtn.onclick=function(){
		aria2AddOrder();
	};
	_$G("addredn_btn").onclick=function(){
		aria2Redn();
	};
	_$G("removeSel_btn").onclick=function(){
		aria2RemoveMulti();
	};
	_$G("refresh_btn").onclick=function(){
		var thiz=this;
		if(window.refreshIndx){
			clearInterval(window.refreshIndx);
			window.refreshIndx=null;
			thiz.className="btn";
			tipCase({msg:"自动刷新已关闭！"});
		}else{
			window.refreshIndx=setInterval(function(){refreshLs();},1000);
			thiz.className="btn btn-green";
			tipCase({msg:"自动刷新已开启！"});
		}
		refreshLs();
	};
	_$G("filter_btn").onclick=function(){
		if(_$Null($AriaParams.taskFilt)){
			$AriaParams.taskFilt=1;
		}else if($AriaParams.taskFilt==$bnmr.length-1){
			$AriaParams.taskFilt=0;
		}else{
			$AriaParams.taskFilt++;
		}
		this.innerHTML=$bnmr[$AriaParams.taskFilt];
		_setStorage("taskFilt",$AriaParams.taskFilt);
		generateGrid($CurrentList);
	};

}
function initWebSocket(){
    window.aria2Cbk = {};
	var rpcUrl=_$Null($AriaParams.ariaUrl)?"ws://localhost:6800/jsonrpc":$AriaParams.ariaUrl;
	$AriaParams.ariaUrl=rpcUrl;
    $Wskt=new WebSocket(rpcUrl);
    $Wskt.onopen = function(){
		initEvents();
		refreshLs();
		var asta=_$G("aria2State");
		asta.innerHTML="已连接";
		asta.style.color="#00C8C9";
    };
    $Wskt.onclose = function(){
        $Wskt=null;
		var msg="aria2 连接失败! "
        tipCase({msg:msg});
		var asta=_$G("aria2State");
		asta.innerHTML=msg;
		asta.style.color="#EC7600";
    };
    $Wskt.onmessage  = function(m){
        var r=JSON.parse(m.data);
        var cbkfun=aria2Cbk[r.id];
        if (typeof cbkfun === 'function') {
            cbkfun.call(null,r);
        }
		delete aria2Cbk[r.id];
    };
}
function aria2Send(method,arr,cbk){
    if(!$Wskt)return;
    var nid = randomCode(10,3);
    var obj={id:nid,jsonrpc:"2.0",params:arr,method:method};
    if (typeof cbk === 'function') {
        window.aria2Cbk[nid] = cbk;
    }
    $Wskt.send(JSON.stringify(obj));
}
function aria2Add(){
	var stdownFnme=_$Ava($AriaParams.downFnme)?$AriaParams.downFnme:"";
	var stdownFdir=_$Ava($AriaParams.downFdir)?$AriaParams.downFdir:"";
	var stdownHead=_$Ava($AriaParams.downHead)?$AriaParams.downHead:"";
	var ctt = '<textarea id="aaParamUrl" type="text" rows="4" placeholder="地址" style="width:490px;resize:none;margin:5px;"></textarea>'+
		'<textarea id="aaParamFname" type="text" rows="1" placeholder="文件名" style="width:490px;resize:none;margin:5px;">'+stdownFnme+'</textarea>'+
		'<textarea id="aaParamDpath" type="text" rows="1" placeholder="路径" style="width:490px;resize:none;margin:5px;">'+stdownFdir+'</textarea>'+
		'<textarea id="aaParamHeader" type="text" rows="4" placeholder="请求头" style="width:490px;resize:none;margin:5px;">'+stdownHead+'</textarea>';
	panelCaseA({ width:510,title: '添加任务', content:ctt, cttInBody: 1, btn1:"添加", btn2: "取消",
		fun1: function(mbdy){
			var aaurl=_$Q("#aaParamUrl",mbdy).value;
			var aafnm=_$Q("#aaParamFname",mbdy).value;
			var aapth=_$Q("#aaParamDpath",mbdy).value;
			var aahed=_$Q("#aaParamHeader",mbdy).value;
			var aaopt={};
			if(_$Ava(aafnm)){
				aaopt.out=aafnm;
				$AriaParams.downFnme=aafnm;
				_setStorage("downFnme",aafnm);
			}
			if(_$Ava(aapth)){
				aaopt.dir=aapth;
				$AriaParams.downFdir=aapth;
				_setStorage("downFdir",aapth);
			}			
			if(_$Ava(aahed)){
				aaopt.header=aahed;
				$AriaParams.downHead=aahed;
				_setStorage("downHead",aahed);
			}	
			
			aria2Send(
				"aria2.addUri",
				[[aaurl],aaopt],
				function(m){
					tipCase({msg:"添加成功! "});
					refreshLs();
				}
			);			
			return true;
		}
	});

}
function aria2AddOrder(){
	var stdnorSufx=_$Ava($AriaParams.dnorSufx)?$AriaParams.dnorSufx:"";
	var stdnorFdir=_$Ava($AriaParams.dnorFdir)?$AriaParams.dnorFdir:"";
	var stdnorHead=_$Ava($AriaParams.dnorHead)?$AriaParams.dnorHead:"";
	var ctt = '<textarea id="aaParamUrl" type="text" rows="4" placeholder="地址" style="width:490px;resize:none;margin:5px;"></textarea>'+
		'<textarea id="aaParamSufx" type="text" rows="1" placeholder="后缀名" style="width:490px;resize:none;margin:5px;">'+stdnorSufx+'</textarea>'+
		'<textarea id="aaParamDpath" type="text" rows="1" placeholder="路径" style="width:490px;resize:none;margin:5px;">'+stdnorFdir+'</textarea>'+
		'<textarea id="aaParamHeader" type="text" rows="4" placeholder="请求头" style="width:490px;resize:none;margin:5px;">'+stdnorHead+'</textarea>';
	panelCaseA({ width:510,title: '添加顺序任务', content:ctt, cttInBody: 1, btn1:"添加", btn2: "取消",
		fun1: function(mbdy){
			var aaurl=_$Q("#aaParamUrl",mbdy).value;
			var aasfx=_$Q("#aaParamSufx",mbdy).value;
			var aapth=_$Q("#aaParamDpath",mbdy).value;
			var aahed=_$Q("#aaParamHeader",mbdy).value;
			var aaopt={};
			if(_$Ava(aasfx)){
				aaopt.suffix=aasfx;
				$AriaParams.dnorSufx=aasfx;
				_setStorage("dnorSufx",aasfx);
			}
			if(_$Ava(aapth)){
				aaopt.dir=aapth;
				$AriaParams.dnorFdir=aapth;
				_setStorage("dnorFdir",aapth);
			}			
			if(_$Ava(aahed)){
				aaopt.header=aahed;
				$AriaParams.dnorHead=aahed;
				_setStorage("dnorHead",aahed);
			}	
			
			var reg = new RegExp("^((http)[s]*://.*)(\\[(\\d+)\-(\\d+)#(\\d)\\])(.*)$");
			var group = reg.exec(aaurl);
			if(!_$Ava(group)||group[2]!="http"){
				tipCase({msg:"请输入包含通配符的url,如:http://imagescdn.com/1897/[1-23#2].jpg"});
				return;
			}
			var lenInt=parseInt(group[6]);
			var startInt=parseInt(group[4]);
			var endInt=parseInt(group[5]);
			if(endInt<startInt){
				tipCase({msg:"通配符不正确，如：[1-23#2]"});
				return;
			}
			var now = new Date();
			aaopt.dwnFolder=now.toStr('yyyy-MM-dd');
			aaopt.dwnSubFolder=now.toStr('hh_mm_ss');
			orderDowner(group[1],group[7],startInt,endInt,lenInt,aaopt);
			$AddOrderBtn.onclick=null;			
			return true;
		}
	});

}
function orderDowner(urlpre,urlsuf,now,end,lenInt,opt){
	if(now>end){
		$AddOrderBtn.onclick=function(){
			aria2AddOrder();
		};
		$AddOrderBtn.innerHTML="顺序任务";
        alertCase("顺序任务添加完成！");
		refreshLs();
		return;
	}
	$AddOrderBtn.innerHTML=now+" / "+end;
	var rindx=(lenInt>1)?prefixInteger(now, lenInt):now;
	var dwnFname=rindx+urlsuf;
	var dnurl=urlpre+dwnFname;
	aria2Send(
		"aria2.addUri",
		[[dnurl],{
			header:opt.header,
			dir:opt.dir+"/"+opt.dwnFolder+"/"+opt.dwnSubFolder,
			out:rindx+opt.suffix
		}],
		function(m){
			window.setTimeout(function(){
				orderDowner(urlpre,urlsuf,now+1,end,lenInt,opt);
			},600);
		}
	);
}
function aria2Redn(){
   	var rdarr=[];
	for(var gid in $MultiSelectMap){
		var itm=$MultiSelectMap[gid];
		rdarr.push({gid:gid,status:itm.status});
	}
	if(rdarr.length<1){
		tipCase({msg:"请先使用 Shift/Ctrl+鼠标左键 选择要重新下载的任务！"});
		return;
	}else if(rdarr.length>1){
		tipCase({msg:"不支持重新下载多个任务！"});
		return;
	}
	aria2Send(
		"aria2.getFiles",
		[rdarr[0].gid],
		function(m){
			var ret=m.result[0];
			var rpath=ret.path;
			var rurl=ret.uris[0].uri;
			var lxi=rpath.lastIndexOf("/");
			var rdir=rpath.substring(0,lxi)
			var rout=rpath.substr(lxi+1);
			aria2Send(
				"aria2.addUri",
				[[rurl],{dir:rdir,out:rout}],
				function(m){
					tipCase({msg:"已重新下载! "});
					refreshLs();
				}
			);
		}
	);
	
}

function aria2RemoveMulti(){
	var rmarr=[];
	for(var gid in $MultiSelectMap){
		var itm=$MultiSelectMap[gid];
		rmarr.push({"methodName":itm.type==2?"aria2.removeDownloadResult":"aria2.remove","params":[gid]});
	}
	if(rmarr.length<1){
		tipCase({msg:"请先使用 Shift/Ctrl+鼠标左键 选择要删除的任务！"});
		return;
	}
	confirmCase("确认要删除选中的任务吗？",function(){
		aria2Send(
			"system.multicall",
			[rmarr],
			function(m){
				tipCase({msg:"已删除! "});
				$MultiSelectMap={};
				refreshLs();
			}
		);
		return true;
	});
}
function aria2Start(gid,b){
	aria2Send(
		b?"aria2.unpause":"aria2.pause",
		[gid],
		function(m){
			tipCase({msg:"已"+(b?"开始":"暂停")+"! "});
			refreshLs();
		}
	);    
}

function generateGrid(arr){
	var bstr=[null,"active","paused","waiting","complete","error"];
	var dnbd=_$G('dnls');
	var html='';
    var len=arr.length;
	var j=0;
    for(var i=0;i<len;i++){
        var itm=arr[i];
		var stat=bstr[$AriaParams.taskFilt];
		if(stat!=null&&stat!=itm.status)continue;
		var bol=i%2==0;
		var tbor=j==0?"1px":0;
		var bkgcolor=itm.status=='complete'?'#00C8C9':(itm.status=='error'?'#EC7600':'#73ADEF');
		var brdcolor=itm.status=='error'?'#E28D8D':'#ddd';
		var trbkg=_$Ava($MultiSelectMap[itm.gid])?"#DEEBFA":(bol?'#fafafa':'');
        html+='<tr onclick="multiSelect('+i+')" style="background:'+trbkg+';text-align:center;">'
				+'<td style="margin:0;padding:0;border-color:#ccc;border-width:'+tbor+' 1px 1px 1px;border-style:dotted;width:40px;">'+(i+1)+'</td>'
				+'<td style="margin:0;padding:0;border-color:#ccc;border-width:'+tbor+' 1px 1px 0px;border-style:dotted;width:50%;">'+itm.name+'</td>'
				+'<td style="margin:0;padding:0;border-color:#ccc;border-width:'+tbor+' 1px 1px 0;border-style:dotted;width:140px;">'+itm.speed+'</td>'
				+'<td style="margin:0;padding:0;border-color:#ccc;border-width:'+tbor+' 1px 1px 0;border-style:dotted;">'
					+'<div style="position:relative;height:26px;line-height:26px;background:#eee;border-radius:4px;border:1px solid '+brdcolor+';">'
						+'<div style="position:absolute;width:'+itm.percent+'%;height:26px;line-height:26px;background:'+bkgcolor+';border-radius:4px;"></div>'
						+'<div style="position:absolute;width:100%;height:26px;line-height:26px;">'+itm.percent+'%</div>'
					+'</div>'
				+'</td>'
				+'<td style="margin:0;padding:0;border-color:#ccc;border-width:'+tbor+' 1px 1px 0;border-style:dotted;width:60px;">';
		if(itm.status=='active'){
			html+='<a id="add_btn" class="btn btn-mini" style="margin:2px 3px;padding:2px 8px;" onclick="aria2Start(\''+itm.gid+'\',0)">暂停</a>';
		}else if(itm.status=='paused'){
			html+='<a id="add_btn" class="btn btn-mini" style="margin:2px 3px;padding:2px 8px;" onclick="aria2Start(\''+itm.gid+'\',1)">开始</a>';
		}
		html+='</td>'
        html+="</tr>";
		j++;
    }
	dnbd.innerHTML=html;
    
}
function refreshLs(){
	aria2Send(
		"system.multicall",
		[[
			{"methodName":"aria2.tellActive","params":[]},
			{"methodName":"aria2.tellWaiting","params":[0,1000]},
			{"methodName":"aria2.tellStopped","params":[0,1000]},
			{"methodName":"aria2.getGlobalStat","params":[]}
		]],
		function(m){
			var arr=[];
			var result=m.result;
			for(var i=0;i<3;i++){
			    var itm=result[i][0];
				itm.reverse();
				var len1=itm.length;
				for(var j=0;j<len1;j++){
					var itn=itm[j];
					var itp=itn.files[0];
					var spd=Math.round(itn.downloadSpeed/1024);
					if(spd>1024)spd=(itn.downloadSpeed/1048576).toFixed(3)+"Mbs";
					else spd+="Kbs";
					var pct=(itn.completedLength*100/itn.totalLength).toFixed(2);
					arr.push({
						gid:itn.gid,
						name:itp.path.substr(itp.path.lastIndexOf("/")+1),
						type:i,
						status:itn.status,
						speed:spd,
						percent:isNum(pct+"")?pct:0
					});
					
				}
			}
			generateGrid(arr);
			$CurrentList=arr;
			var asta=result[3][0];
			var dspd=Math.round(asta.downloadSpeed/1024);
			if(dspd>1024)dspd=(asta.downloadSpeed/1048576).toFixed(3)+"Mbs";
			else dspd+="Kbs";
			var uspd=Math.round(asta.uploadSpeed/1024);
			if(uspd>1024)uspd=(asta.uploadSpeed/1048576).toFixed(3)+"Mbs";
			else uspd+="Kbs";
			var ast=_$G("aria2State");
			ast.innerHTML="↓ "+dspd+"  ↑ "+uspd;
			ast.title="下载速度:"+dspd+"\n上传速度:"+uspd+"\n进行任务:"+asta.numActive+"个\n等待任务:"+asta.numWaiting+"个\n停止任务:"+asta.numStoppedTotal+"个";
			document.title="↓ "+dspd+"  ↑ "+uspd;
			ast.style.color="#00C8C9";
		}
       );
	
}
function aria2Setting(){
    var asParamUrl=_$Ava($AriaParams.ariaUrl)?$AriaParams.ariaUrl:"";
	var asParamCdm=_$Ava($AriaParams.asParamCdm)?$AriaParams.asParamCdm:"";
	var asParamMtn=_$Ava($AriaParams.asParamMtn)?$AriaParams.asParamMtn:"";
	var asParamTrk=_$Ava($AriaParams.asParamTrk)?$AriaParams.asParamTrk:"";
	var ctt = '<textarea id="asParamUrl" type="text" rows="1" placeholder="Aria2 JsonRpc URL" style="width:490px;resize:none;margin:5px;">'+asParamUrl+'</textarea>'+
    		'<textarea id="asParamCdm" type="text" rows="1" placeholder="同时下载数量" style="width:490px;resize:none;margin:5px;">'+asParamCdm+'</textarea>'+
    		'<textarea id="asParamMtn" type="text" rows="1" placeholder="最大重试次数" style="width:490px;resize:none;margin:5px;">'+asParamMtn+'</textarea>'+
            '<textarea id="asParamTrk" type="text" rows="4" placeholder="bt tracker服务器" style="width:490px;resize:none;margin:5px;">'+asParamTrk+'</textarea>';
	panelCaseA({ width:510,title: '设置', content:ctt, cttInBody: 1, btn1:"保存", btn2: "取消",
		fun1: function(mbdy){
			var aspUrl=_$Q("#asParamUrl",mbdy).value;
			var aspCdm=_$Q("#asParamCdm",mbdy).value;
			var aspMtn=_$Q("#asParamMtn",mbdy).value;
			var aspTrk=_$Q("#asParamTrk",mbdy).value;
            if(_$Ava(aspUrl)&&$AriaParams.ariaUrl!=aspUrl){
                $AriaParams.ariaUrl = aspUrl;
                _setStorage("ariaUrl",aspUrl);
                if($Wskt!=null)$Wskt.close();
                initWebSocket();
            }
            var k=0;
            if(isInt(aspCdm)&&$AriaParams.asParamCdm!=aspCdm){
                $AriaParams.asParamCdm = aspCdm;
                _setStorage("asParamCdm",aspCdm);
                k++;
            }            
            if(isInt(aspMtn)&&$AriaParams.asParamMtn!=aspMtn){
                $AriaParams.asParamMtn = aspMtn;
                _setStorage("asParamMtn",aspMtn);
                k++;
            }
            if(_$Ava(aspTrk)&&$AriaParams.asParamTrk!=aspTrk){
                $AriaParams.asParamTrk = aspTrk;
                _setStorage("asParamTrk",aspTrk);
                k++;
            }
            if(k>0){
                aria2Send(
                    "aria2.changeGlobalOption",
                    ["token:",
                        {
                            "max-concurrent-downloads":$AriaParams.asParamCdm,
                            "max-resume-failure-tries":$AriaParams.asParamMtn,
                            "bt-tracker":$AriaParams.asParamTrk.replace(/[\n\r\s\t]/g,",").replace(/,{2,}/g,",")
                        }
                    ],
                    function(m){
                        console.log(m);
                        tipCase({msg:"设置成功! "});
                        // aria2Send(
                            // "aria2.getGlobalOption",
                            // [],
                            // function(m1){
                                // console.log(m1);
                                // console.log(JSON.stringify(m1));
                            // }
                        // );
                    }
                );
            }
			return true;
		}
	});

}
function multiSelect(indx){
	var e = this.event;
	if(e.shiftKey){
		if($LastSelected>-1){
			var len=$CurrentList.length;
			var a=indx>$LastSelected?$LastSelected:indx;
			var b=indx>$LastSelected?indx:$LastSelected;
			for(var i=a;i<=b;i++){
			    var itm=$CurrentList[i];
			    $MultiSelectMap[itm.gid]={type:itm.type,status:itm.status};
			}
			$LastSelected=-1;
		}else{
			$LastSelected=indx;
			var itm=$CurrentList[indx];
			if(_$Null($MultiSelectMap[itm.gid])){
				$MultiSelectMap[itm.gid]={type:itm.type,status:itm.status};
			}else{
				delete $MultiSelectMap[itm.gid];
			}
		}
	}else if(e.ctrlKey){
		var itm=$CurrentList[indx];
		if(_$Null($MultiSelectMap[itm.gid])){
			$MultiSelectMap[itm.gid]={type:itm.type,status:itm.status};
		}else{
			delete $MultiSelectMap[itm.gid];
		}
	}else{
		$MultiSelectMap={};
		$LastSelected=-1;
	}
	generateGrid($CurrentList)
}

/*
 *aria2.addUri; aria2.addTorrent; aria2.pause; aria2.forcePause; aria2.pauseAll; aria2.forcePauseAll; aria2.remove; aria2.forceRemove; aria2.tellStatus; aria2.getFiles; aria2.getUris
 *aria2.unpauseAll; 
 *aria2.getGlobalOption; aria2.getGlobalStat; aria2.tellActive; aria2.tellWaiting; aria2.tellStopped; 
 *aria2.removeDownloadResult; 
 *多个请求合并:
 *  {"jsonrpc":"2.0","id":"Glutton","method":"system.multicall","params":[[{"methodName":"aria2.getGlobalStat","params":[]},{"methodName":"aria2.tellActive","params":[]},{"methodName":"aria2.tellWaiting","params":[0,1000]},{"methodName":"aria2.tellStopped","params":[0,1000]},{"methodName":"aria2.getGlobalOption","params":[]}]]}
 *单个请求:
 *  "aria2.tellActive",[]; "aria2.tellWaiting",[0,1000]; aria2.tellStopped,[0,1000]; 
 *BT tracker: https://stray.love/itshou-zha/wei-aria2-tian-jia-tracker-fu-wu-qi https://github.com/ngosang/trackerslist
 *  {"jsonrpc":"2.0","method":"aria2.changeGlobalOption","id":"cron","params":["token:'$passwd'",{"bt-tracker":"'$tracker'"}]}
 **/