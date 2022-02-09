
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

        //var txtarea = _$G("pgctt_txts");
		//txtarea.value=JSON.stringify(newarr);
        tipCase({msg:"taba_btn2 Clicked..."});
        
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
		if(message.id=="content_page"){
                sendResponse({text:"唐门外门弟子唐三，因偷学内门绝学为唐门所不容，跳崖明志时却发现没有死，反而以另外一个身份来到了另一个世界，一个属于武魂的世界，名叫斗罗大陆。这里没有魔法，没有斗气，没有武术，却有神奇的武魂。这里的每个人，在自己六岁的时候，都会在武魂殿中令武魂觉醒。武魂有动物，有植物，有器物，武魂可以辅助人们的日常生活。而其中一些特别出色的武魂却可以用来修炼并进行战斗，这个职业，是斗罗大陆上最为强大也是最荣耀的职业魂师当唐门暗器来到斗罗大陆，当唐三武魂觉醒，他能否在这片武魂的世界再铸唐门的辉煌他能否成为这个世界的主宰"});
                
		}
	});
    
}


