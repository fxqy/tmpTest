window.onload=function(){
	initEvents();
    initWebSocket();
};
function initEvents(){
	_$G("add_btn").onclick=function(){//http://pic37.nipic.com/20140106/7487939_080621297000_2.jpg
		aria2Add([["https://csdnimg.cn/pubfooter/images/edu-QR.png"],{header:"Referer: ","out":"qrcode.jpg" ,"dir":"d:/"}],
            function(m){
                alertCase("download task started!<br/>"+JSON.stringify(m));
            }
        );
	};
	_$G("stop_btn").onclick=function(){
        aria2Status([""],function(m){
                alertCase(JSON.stringify(m));
        });
	};
}
function initWebSocket(){
    window.aria2Cbk = {};
    $Wskt=new WebSocket("ws://localhost:6800/jsonrpc");
    $Wskt.onopen = function(){
        tipCase({msg:"WebSocket open! "});
    };
    $Wskt.onclose = function(){
        $Wskt=null;
        tipCase({msg:"WebSocket closed! "});
    };
    $Wskt.onmessage  = function(m){
        var r=JSON.parse(m.data);
        var cbkfun=aria2Cbk[r.id];
        if (typeof cbkfun === 'function') {
            cbkfun.call(null,r);
        }
    };
}
function aria2Add(arr,cbk){
    aria2Send(arr,cbk,"aria2.addUri");
}
function aria2AddTorrent(arr,cbk){
    aria2Send(arr,cbk,"aria2.addTorrent");
}
function aria2Pause(arr,cbk){
    aria2Send(arr,cbk,"aria2.pause");
}
function aria2ForcePause(arr,cbk){
    aria2Send(arr,cbk,"aria2.forcePause");
}
function aria2PauseAll(arr,cbk){
    aria2Send(arr,cbk,"aria2.pauseAll");
}
function aria2ForcePauseAll(arr,cbk){
    aria2Send(arr,cbk,"aria2.forcePauseAll");
}
function aria2Remove(arr,cbk){
    aria2Send(arr,cbk,"aria2.remove");
}
function aria2ForceRemove(arr,cbk){
    aria2Send(arr,cbk,"aria2.forceRemove");
}
function aria2Status(arr,cbk){
    aria2Send(arr,cbk,"aria2.tellStatus");
}
function aria2GlobalStatus(arr,cbk){
    aria2Send(arr,cbk,"aria2.getGlobalStat");
}
function aria2Files(arr,cbk){
    aria2Send(arr,cbk,"aria2.getFiles");
}
function aria2Uris(arr,cbk){
    aria2Send(arr,cbk,"aria2.getUris");
}
function aria2Send(arr,cbk,method){
    if(!$Wskt)return;
    var nid = uuid();
    var obj={id:nid,jsonrpc:"2.0",params:arr,method:method};
    if (typeof cbk === 'function') {
        window.aria2Cbk[nid] = cbk;
    }
    $Wskt.send(JSON.stringify(obj));

}