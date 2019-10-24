window.onload=function(){
	initEvents();
    initWebSocket();
};
function initEvents(){
	_$G("add_btn").onclick=function(){
		aria2Send(
            "aria2.addUri",
            [["http://pic37.nipic.com/20140106/7487939_080621297000_2.jpg"],{header:"Referer: ","out":"good_view.jpg" ,"dir":"d:/"}],
            function(m){
                alertCase(JSON.stringify(m));
            }
        );
	};
	_$G("stop_btn").onclick=function(){
        aria2Send(
            "aria2.tellStopped",
            [0,1000],
            function(m){
                    alertCase(JSON.stringify(m));
            }
        );
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
function aria2Send(method,arr,cbk){
    if(!$Wskt)return;
    var nid = uuid();
    var obj={id:nid,jsonrpc:"2.0",params:arr,method:method};
    if (typeof cbk === 'function') {
        window.aria2Cbk[nid] = cbk;
    }
    $Wskt.send(JSON.stringify(obj));

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
 *
 **/