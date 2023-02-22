function startProc(){
	var marr=procEle();
	if(marr.length<1)return;
	var smsg={id:"content",data:marr};
	chrome.runtime.sendMessage(smsg, function(response){
		if(_$Null(response)||_$Null(response.href))return;
		window.setTimeout(function(){
		   window.location.href=response.href;
		},20000);
	});
}
function procEle(){
	var marr=[];
	var len=0;

	var provs=_$P(".provincetable .provincetr a");
	len=provs.length;
	for(var i=0;i<len;i++){
		var itm=provs[i];
		marr.push({name: itm.innerHTML.replace(/<[^<>]*>/g,""),code: "0",href: itm.href,level: 1});
	}
	if(len>0)return marr;

	var citys=_$P(".citytable .citytr");
	len=citys.length;
	for(var i=0;i<len;i++){
		var itm=citys[i];
		var tds=_$P("a",itm);
		marr.push({name: tds[1].innerHTML,code: tds[0].innerHTML,href: tds[0].href,level: 2});
	}
	if(len>0)return marr;

	var citys=_$P(".countytable .countytr");
	len=citys.length;
	for(var i=0;i<len;i++){
		var itm=citys[i];
		var tds=_$P("a",itm);
		if(tds.length>1){
			marr.push({name: tds[1].innerHTML,code: tds[0].innerHTML,href: tds[0].href,level: 3});
		}else{
			tds=_$P("td",itm);
			marr.push({name: tds[1].innerHTML,code: tds[0].innerHTML,href: null,level: 3});
		}
	}
	if(len>0)return marr;

	var towns=_$P(".towntable .towntr");
	len=towns.length;
	for(var i=0;i<len;i++){
		var itm=towns[i];
		var tds=_$P("a",itm);
		marr.push({name: tds[1].innerHTML,code: tds[0].innerHTML,href: tds[0].href,level: 4});
	}
	if(len>0)return marr;

	var vilgs=_$P(".villagetable .villagetr");
	len=vilgs.length;
	for(var i=0;i<len;i++){
		var itm=vilgs[i];
		var tds=_$P("td",itm);
		marr.push({name: tds[2].innerHTML,code: tds[0].innerHTML,href: null,level: 5});
	}
	
	return marr;
}
startProc();