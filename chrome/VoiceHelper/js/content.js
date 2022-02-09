function runOnDocEnd(){
    
    initView();
    initEvents();
    
}

function initView(){
    var eid="_start";
    var mctt,mtbox;
	mtbox = _$C("a");
	mtbox.id="mtbox"+eid;
	mtbox.className="mtbox";
    mtbox.style.color="#fff"
    mtbox.style.backgroundColor="#222";
    mtbox.style.paddingLeft="16px";
    mtbox.style.paddingRight="16px";
    mtbox.style.paddingTop="10px";
    mtbox.style.paddingBottom="10px";
    mtbox.style.borderRadius="4px";
    mtbox.innerText="开始";
    mtbox.onclick=onOnlyBtnClk;
    
	mctt=_$C("div");
	mctt.id="mctt"+eid;
	mctt.style.position="fixed";
	mctt.style.zIndex="99999";
    mctt.style.top="11px"
    mctt.style.left="0px"
	_$A(mtbox,mctt);
	_$A(mctt,document.body);
}

function initEvents(){
    //alert("content initEvents...");
     
   
}

function onOnlyBtnClk(){
        var txta=_$Q(".tts>.tts-content>.item-left >.ace-input>textarea");
        txta.focus();
        
        onNeedNext();
}

function onNeedNext(){
    var smsg={id:"content_page", data:"Message from content page!"};
    chrome.runtime.sendMessage(smsg, function(response){
        //alert(response.msg);
        procTextItem(response.text);
    });
}

function procTextItem(text){
    //navigator.clipboard.writeText("而其中一些特别出色的武魂却可以用来修炼并进行战斗");
    var txta=_$Q(".tts>.tts-content>.item-left >.ace-input>textarea");
    txta.value=text;
    var evt = document.createEvent('HTMLEvents');
	evt.initEvent('input', true, true);
	txta .dispatchEvent(evt);

    var btna=_$Q(".tts>.tts-content>.item-right  .play-button ");
    btna.click();
    
    window.setTimeout(function(){
        
        var sldh=_$Q(".nc_wrapper>.nc_scale");
        var rect =sldh.getBoundingClientRect();

        var slder=_$Q(".nc_wrapper>.nc_scale .nc-lang-cnt");
        var reca =slder.getBoundingClientRect();
        
        var ox=15, oy=15;
        autoDrag(slder,
            rect.left+ox, rect.top+oy,
            rect.left+rect.width, 
            rect.top+oy, 
            ox, oy);
        
    },1000);
    
    
}

function autoDrag(tele, bx, by, ex, ey, ox, oy){
    var kdn = document.createEvent('MouseEvents');
    kdn.initMouseEvent('mousedown',true,true,window,0,  
            bx, by, ox, oy,false,false,false,false,0,null);
    tele.dispatchEvent(kdn);
            
    var dx = 0;
    var dy = 0;
    var  tindex = setInterval(function(){
        
        var mmv = document.createEvent('MouseEvents');
        var cx = bx + dx;
        var cy = by + dy;
        console.log("--------->"+cx+", "+cy);
        mmv.initMouseEvent('mousemove',true,true,window,0,  
                cx, cy, ox, oy,false,false,false,false,0,null);
        tele.dispatchEvent(mmv);


        if(cx>ex+100){
            clearInterval(tindex);
            var mup = document.createEvent('MouseEvents');
            mup.initMouseEvent('mouseup',true,true,window,0,  
            cx, cy, ox, oy,false,false,false,false,0,null);
            tele.dispatchEvent(mup);
            

        }else{
            dx += Math.ceil(Math.random() * 30);
        }
        
    }, 60); 
}



runOnDocEnd();