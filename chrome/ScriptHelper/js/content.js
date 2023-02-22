function intiView(){
	var btna=btn({html:'script',style:'position:fixed;left:0px;top:0px;z-index:99999;',
		onclick:function(){
			openDialog()
		}
	});
	document.body.appendChild(btna);
}
function openDialog(){
	var ctt=textarea({style:'width:489px;height:188px;resize:none;'});
	pnlCase({title:'Run script',content:ctt, btns:['Run','Cancle'],
		fun1:function(p){
			var spt=script({type:'text/javascript',html:ctt.value});
			document.body.appendChild(spt);
			tipCase({msg:'finished!'});
		}
	})
}
intiView();