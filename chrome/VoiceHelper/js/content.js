function on_load(){

    window.setTimeout(function (){
	    before_next();
	}, 3000);
	
}


function before_next(){
    var msga={id:"on_load"};
    chrome.runtime.sendMessage(msga, function(response){
        tipCase({msg:"onload From onepage: "+response.state});
		if("ok" == response.state){
			get_state();
		}
    });
}
function get_state(){
    var msga={id:"get_state"};
    chrome.runtime.sendMessage(msga, function(response){
        tipCase({msg:"get_state From onepage: "+response.state});
		if("ok" == response.state){
			to_next();
		}else{
			window.setTimeout(function (){
				get_state();
			}, 1000);
		}
    });
}
function to_next(){
    tipCase({msg:"to_next ...... "});
}

on_load();