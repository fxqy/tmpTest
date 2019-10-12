var marr=[];
var len=0;

var provs=_$P(".provincetable .provincetr a");
len=provs.length;
for(var i=0;i<len;i++){
	var itm=provs[i];
	marr.push({name: itm.innerHTML.replace(/<[^<>]*>/g,""),code: "0",href: itm.href,level: 1});
}

var citys=_$P(".citytable .citytr");
len=citys.length;
for(var i=0;i<len;i++){
	var itm=citys[i];
	var tds=_$P("a",itm);
	marr.push({name: tds[1].innerHTML,code: tds[0].innerHTML,href: tds[0].href,level: 2});
}

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

var towns=_$P(".towntable .towntr");
len=towns.length;
for(var i=0;i<len;i++){
	var itm=towns[i];
	var tds=_$P("a",itm);
	marr.push({name: tds[1].innerHTML,code: tds[0].innerHTML,href: tds[0].href,level: 4});
}

var vilgs=_$P(".villagetable .villagetr");
len=vilgs.length;
for(var i=0;i<len;i++){
	var itm=vilgs[i];
	var tds=_$P("td",itm);
	marr.push({name: tds[2].innerHTML,code: tds[0].innerHTML,href: null,level: 5});
}


var smsg={id:"content",data:marr};
chrome.runtime.sendMessage(smsg, function(response){
   window.setTimeout(function(){
	   window.location.href=response.href;
   },10000);
});