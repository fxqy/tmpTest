$ReqUrl="";
window.onload=function(){
	initTabs();
	initEvents();
	initListener();
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
		tipCase({msg:"Done"});
	};
	_$G("taba_btn2").onclick=function(){

        var txtarea = _$G("pgctt_txts");
		txtarea.value=$ReqUrl;
        //tipCase({msg:"taba_btn2 Clicked..."});
        
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

    
}

function initListener(){

    chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
		switch(message.id){
		    case "on_load":
		        on_ctt_load();
				sendResponse({state:"ok"});
		        break;
		    case "get_state":
		        sendResponse({state:"ok"});
		        break;
		    default:  
				sendResponse({text:""});
		}
	});
	
	chrome.webRequest.onBeforeRequest.addListener(//https://audiopay.cos.tx.xmcdn.com/download/1.0.0/group2/M07/08/E0/wKgLdFw1gXOSvj3gAKIwSfXmO0U608.m4a
		onBeforeSendRequest,
		{urls:["*://audiopay.cos.tx.xmcdn.com/download/*"]},
		["blocking"]
	);
}
function on_ctt_load(){
    
}



function onBeforeSendRequest(dtl){
	if("media"==dtl.type && dtl.url.indexOf(".m4a")>-1){
		$ReqUrl=dtl.url;
	}
	
	
	/**
	if(dtl.url.indexOf("qq.com")>-1){
		return {cancel: true};
	}
	*/
}

