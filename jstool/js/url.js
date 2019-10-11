window.onload=function(){
	initTabs();
	initEvents();
};
function initTabs(){
	var mtabs = _$P(".mtabb");
	for(var i=0;i<mtabs.length;i++){
		var itm = mtabs[i];
		itm.onclick=function(){
			if(this.className.indexOf("mtab_titgry")>-1){
				var mtbs = _$P(".mtabb");
				for(var j=0;j<mtbs.length;j++){
					var im = mtbs[j];
					if(this!=im){
						 im.className="mtabb mtab_titgry";
						 _$G("tabctt_"+im.id).style.display="none";
					}else{
						im.className="mtabb mtab_tit";
						_$G("tabctt_"+im.id).style.display="block";
					}
				}	
			}
		}
	}
}
function initEvents(){

	var espBtn = _$G("taba_esp");
	espBtn.onclick=function(){
		var txta=_$G("texta_url");
		var tt=escape(txta.value);
		txta.value=tt;
	};
	var unespBtn = _$G("taba_unesp");
	unespBtn.onclick=function(){
		var txta=_$G("texta_url");
		var tt=unescape(txta.value);
		txta.value=tt;
	};
	var eurBtn = _$G("taba_encodeURI");
	eurBtn.onclick=function(){
		var txta=_$G("texta_url");
		var tt=encodeURI(txta.value);
		txta.value=tt;
	};
	var durBtn = _$G("taba_decodeURI");
	durBtn.onclick=function(){
		var txta=_$G("texta_url");
		var tt=decodeURI(txta.value);
		txta.value=tt;
	};
	var eucBtn = _$G("taba_encodeURIComponent");
	eucBtn.onclick=function(){
		var txta=_$G("texta_url");
		var tt=encodeURIComponent(txta.value);
		txta.value=tt;
	};
	var uucBtn = _$G("taba_decodeURIComponent");
	uucBtn.onclick=function(){
		var txta=_$G("texta_url");
		var tt=decodeURIComponent(txta.value);
		txta.value=tt;
	};
	
	//testC...
	_$G("tabc_btn1").onclick=function(){
		var tip = tipCase({code:"A",msg:'<img src="../imgs/loading.gif" style="width:26px;height:26px;"/>',cover:1,abs:1});
		window.setTimeout(function(){tip.close();},5000)
	};
	_$G("tabc_btn2").onclick=function(){
		panelCaseA({ title:'Test22...........', content:"I am test22 Dialog", width:280, btn1:"确定", btn2:"取消", btn3:"忽略",
			fun1: function(mbdy){
				return true;
			},closed: function(){
				tipCase({msg:"FROM: "+this.innerHTML,cover:1});
			}
		});
	};
	_$G("tabc_btn3").onclick=function(){
		
	};
	//4
	_$G("tabd_btn1").onclick=function(){
		tipCase({msg:"Done"});
	};
	_$G("tabd_btn2").onclick=function(){

	};
}