var $ContentStack=[];
var $ContentDatas=[];
var $LastCode="0";
window.onload=function(){
	initTabs();
	initEvents();
};
function initTabs(){
	var mtabs = _$P(".mdlg_tab_head>.mdlg_tab");
	for(var i=0;i<mtabs.length;i++){
		var itm = mtabs[i];
		itm.onclick=function(){
			if(this.className.indexOf("mtab_titgry")>-1){
				var mtbs = this.parentNode.children;
				var cindx=0;
				for(var j=0;j<mtbs.length;j++){
					var itn = mtbs[j];
					if(this!=itn){
						 itn.className="mdlg_tab mtab_titgry";
					}else{
						itn.className="mdlg_tab mtab_tit";
						cindx=j;
					}
				}
				var tbhd=_$Parent(this,"mdlg_tab_hd");
				var ctts = _$Q(".mdlg_tab_ctt",tbhd).children;
				for(var k=0;k<ctts.length;k++){
					var itn = ctts[k];
					if(k!=cindx){
						 itn.style.display="none";
					}else{
						itn.style.display="block";
					}
				}
			}
		}
	}
}
function initEvents(){
	//a
	_$G("taba_btn1").onclick=function(){
		_$G("pgctt_txts").value="";
		$ContentStack=[];
		$ContentDatas=[];
		$LastCode="0";
		tipCase({msg:"Done"});
	};
	_$G("taba_btn2").onclick=function(){
        $ContentDatas.sort(function(a,b){
            if(a.code>b.code) return 1;
            return -1;
        });
		var newarr=[];
		for(var i=0;i<$ContentDatas.length;i++){
			var itm = $ContentDatas[i];
			newarr.push({
				"dictType": "1",
				"dictCode": itm.code,
				"dictName": itm.name,
				"dictDisplayName": "",
				"dictParentCode": itm.pcode,
				"dictStandard": "20191015NO.1",
				"dictComment": "",
				"dictLevel": itm.level,
				"dictPinYin": zh2py(itm.name),
				"dictSimplePy": zh2py(itm.name,1)
			});
		}
        var txtarea = _$G("pgctt_txts");
		txtarea.value=JSON.stringify(newarr);
	};
	//b
	_$G("tabb_btn1").onclick=function(){
		var tip = tipCase({code:"A",msg:'<img src="../imgs/loading.gif" style="width:26px;height:26px;"/>',cover:1,abs:1});
		window.setTimeout(function(){tip.close();},5000)
	};
	_$G("tabb_btn2").onclick=function(){
		panelCaseA({ title:'Test22...........', content:"I am test22 Dialog", width:280, btn1:"确定", btn2:"取消", btn3:"忽略",
			fun1: function(mbdy){
				return true;
			},closed: function(){
				tipCase({msg:"FROM: "+this.innerHTML,cover:1});
			}
		});
	};
	//listeners
	chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
		//console.log(message);
		var mdata=message.data;
		if(message.id=="content"){
			var len=mdata.length;
			if(len<1)return;
			for(var i=0;i<len;i++){
				var itm=mdata[i];
				if(itm.level>1){
					$ContentDatas.push({name: itm.name,code: itm.code,pcode: $LastCode,level: itm.level});
				}
				if(_$Ava(itm.href)){
					$ContentStack.push({name: itm.name,code: itm.code,href: itm.href});
				}
			}
			if($ContentStack.length>0){
				var popstk=$ContentStack.pop();
				$LastCode=popstk.code;
				sendResponse(popstk);
			}else{
				alertCase("Processing completed!");
			}
		}
	});
}