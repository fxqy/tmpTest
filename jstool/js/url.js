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
	//A
	_$G("taba_btn1").onclick=function(){
		var edtxt=_$G("edcpt_txt");
		var edpwd=_$G("edcpt_pwd").value;
        edtxt.value=ecpt(edtxt.value,edpwd);
	};
	_$G("taba_btn2").onclick=function(){
		var edtxt=_$G("edcpt_txt");
		var edpwd=_$G("edcpt_pwd").value;
        edtxt.value=dcpt(edtxt.value,edpwd);
	};
	_$G("taba_btnec64a").onclick=function(){
		var edtxt=_$G("edcpt_txt");
		var edpwd=_$G("edcpt_pwd").value;
        enc64(edtxt.value, krct(edpwd), function(res){
            edtxt.value=res;
        })
	};
	_$G("taba_btnec64b").onclick=function(){
		var edtxt=_$G("edcpt_txt");
		var edpwd=_$G("edcpt_pwd").value;
        dec64(edtxt.value, krct(edpwd),function(res){
            edtxt.value=res;
        });
	};
	_$G("taba_btn3").onclick=function(){
		var edtxt=_$G("edcpt_txt");
		var edpwd=_$G("edcpt_pwd").value;
        edtxt.value=aesEcpt(edtxt.value,edpwd);
	};
	_$G("taba_btn4").onclick=function(){
		var edtxt=_$G("edcpt_txt");
		var edpwd=_$G("edcpt_pwd").value;
        edtxt.value=aesDcpt(edtxt.value,edpwd);
	};
	_$G("taba_btn5").onclick=function(){
		var edtxt=_$G("edcpt_txt");
		var edpwd=_$G("edcpt_pwd").value;
        edtxt.value=strEnc(edtxt.value,edpwd);
	};
	_$G("taba_btn6").onclick=function(){
		var edtxt=_$G("edcpt_txt");
		var edpwd=_$G("edcpt_pwd").value;
        edtxt.value=strDec(edtxt.value,edpwd);
	};
	_$G("taba_btnprivate").onclick=function(){
        var ctt = '<div style="display:inline-block;width:50px;text-align:right;padding-right:5px;">密码: </div><input id="ecdcrptPwd" type="text" style="width:240px;height:24px;"/>';
		ctt+='<br/><div style="display:inline-block;width:50px;text-align:right;padding-right:5px;">类型: </div>'+
		'<select id="pri_dtp" type="text" style="width:240px;height:24px;">'+
			'<option value="lyjs">lyjs</option>'+
			'<option value="neo" selected>neo</option>'+
		'</select>';
        panelCaseA({ width:360,title: '私有解密', content:ctt, btn1:"确定", btn2: "取消",
            fun1: function(mbdy){
                var ecdpwd=_$Q("#ecdcrptPwd",mbdy).value;
                var dtp=_$Q("#pri_dtp",mbdy).value;
                var edtxt=_$G("edcpt_txt");
				var prvtes=pri_data_fun(dtp);
				dec64(prvtes, krct(ecdpwd),function(res){
					edtxt.value=res;
				});
				return true;
            }
        });
	};
	_$G("taba_btnspecial").onclick=function(){
        var ctt = '<div style="display:inline-block;width:50px;text-align:right;padding-right:5px;">密码: </div><input id="ecdcrptPwd" type="text" style="width:240px;height:24px;"/>';
        ctt+='<br/><div style="display:inline-block;width:50px;text-align:right;padding-right:5px;">类型: </div>'+
		'<select id="spcl_dtp" type="text" style="width:240px;height:24px;">'+
			'<option value="st" selected>st</option>'+
			'<option value="lt">lt</option>'+
		'</select>';
		panelCaseA({ width:320,title: '专用解密', content:ctt, btn1:"确定", btn2: "取消",
            fun1: function(mbdy){
                var ecdpwd=_$Q("#ecdcrptPwd",mbdy).value;
				var dtp=_$Q("#spcl_dtp",mbdy).value;
                var edtxt=_$G("edcpt_txt");
				var spcled=spcl_data_fun(dtp);
				dec64(spcled, krct(ecdpwd),function(res){
					edtxt.value=res;
				});
                return true;
            }
        });
	};
	
	_$G("taba_btnencu").onclick=function(){
		var edtxt=_$G("edcpt_txt");
		var edpwd=_$G("edcpt_pwd").value;
		edtxt.value=enc64u(str2arr(edtxt.value), krct(edpwd));
	};
	_$G("taba_btndecu").onclick=function(){
		var edtxt=_$G("edcpt_txt");
		var edpwd=_$G("edcpt_pwd").value;
		var darr = dec64u(edtxt.value, krct(edpwd));
        edtxt.value=arr2str(darr);
	};
	
	//B
	var espBtn = _$G("tabb_esp");
	espBtn.onclick=function(){
		var txtb=_$G("tabb_txts");
		var tt=escape(txtb.value);
		txtb.value=tt;
	};
	var unespBtn = _$G("tabb_unesp");
	unespBtn.onclick=function(){
		var txtb=_$G("tabb_txts");
		var tt=unescape(txtb.value);
		txtb.value=tt;
	};
	var eurBtn = _$G("tabb_encodeURI");
	eurBtn.onclick=function(){
		var txtb=_$G("tabb_txts");
		var tt=encodeURI(txtb.value);
		txtb.value=tt;
	};
	var durBtn = _$G("tabb_decodeURI");
	durBtn.onclick=function(){
		var txtb=_$G("tabb_txts");
		var tt=decodeURI(txtb.value);
		txtb.value=tt;
	};
	var eucBtn = _$G("tabb_encodeURIComponent");
	eucBtn.onclick=function(){
		var txtb=_$G("tabb_txts");
		var tt=encodeURIComponent(txtb.value);
		txtb.value=tt;
	};
	var uucBtn = _$G("tabb_decodeURIComponent");
	uucBtn.onclick=function(){
		var txtb=_$G("tabb_txts");
		var tt=decodeURIComponent(txtb.value);
		txtb.value=tt;
	};
	//testC...
	_$G("tabc_btn0").onclick=function(){
		var txtv=_$G("tabc_txts");
        txtv.value=strCharactCode(txtv.value);
	};
	_$G("tabc_btn1").onclick=function(){
		var txtv=_$G("tabc_txts");
        txtv.value=hex_md5(txtv.value);
	};
	_$G("tabc_btn2").onclick=function(){
		var txtv=_$G("tabc_txts");
        txtv.value=b64_md5(txtv.value);
	};
	_$G("tabc_btn3").onclick=function(){
		var txtv=_$G("tabc_txts");
        txtv.value=sha256_digest(txtv.value);
	};
	//4
	_$G("tabd_btn1").onclick=function(){
		var imgbs="data:image/gif;base64,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";
		var tip = tipCase({code:"A",msg:'<img src="'+imgbs+'" style="width:26px;height:26px;"/>',cover:1,abs:1});
		window.setTimeout(function(){tip.close();},5000)
	};
	_$G("tabd_btn2").onclick=function(){
		panelCaseA({ title:'Test22...........', content:"I am test22 Dialog", width:280, btn1:"确定", btn2:"取消", btn3:"忽略",
			fun1: function(mbdy){
                tipCase({msg:"确定"});
				//return true;
			},closed: function(){
				tipCase({msg:"FROM: "+this.innerHTML,cover:1,abs: 1});
			}
		});
	};
    //5
    _$G("tabe_btn1").onclick=function(){
        _$G("qrcode").innerHTML="";
		var qrcode = new QRCode(document.getElementById("qrcode"), {
            text: _$G("qrcode_txts").value,
            width: 600,
            height: 600,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        });
	};
    _$G("tabe_btn2").onclick=function(){
		_$G("qrcode").innerHTML="";
	};
    //6
    _$G("tabf_btn1").onclick=function(){
        var ctt = '<div style="display:inline-block;width:60px;text-align:right;padding-right:5px;">起始ID: </div><input id="rowregbid" type="text" style="width:270px;"/>';
        panelCaseA({ width:360,title: 'IP2R', content:ctt, btn1:"确定", btn2: "取消",
            fun1: function(mbdy){
                var bid=_$Q("#rowregbid",mbdy).value;
                var txtv=_$G("rowreg_txts");
                var str="[\n";
                var reg = new RegExp("(.*\..*)","g");
                var result =null;
                var i=0;
                do{
                    result=reg.exec(txtv.value);
                    if(result!=null){
                        var gp1=result[1];
                        var addr=gp1;
                        var ts=gp1.split(".",4).length;
                        if(ts==2)addr=gp1+'.1.1-'+gp1+'.255.255';
                        else if(ts==3)addr=gp1+'.1-'+gp1+'.255';
                        else if(ts==4)addr=gp1;
                        else continue;
                        if(i>0)str+=',\n';
                        str+='    {\n        "id":"'+(parseInt(bid)+i)+'",\n        "memo":"禁wr",\n        "raddr":"'+addr+'"\n    }';
                        i++;
                    }
                }while(result!=null)
                str+="\n]"

                txtv.value=str;

                return true;
            }
        });

	};
}

/** ----------------------- ecpt/dcpt ----------------------- **/
function ecpt(s,p,n){
	var fxn=n?n:3;
	len=s.length;
	p=p?p:"";
	var z=strCharactCode(p);
	var r="";
	for(var i=0,j=0;i<len;i++,j++){
		if(j==17)j=0;
		var itm=s.charCodeAt(i)+z.charCodeAt(j);
		r+=pfxChar(ecd2Str(itm,z),fxn,z.charAt(0));
	}
	return r;
}
function dcpt(s,p,n){
	var fxn=n?n:3;
	len=s.length;
	p=p?p:"";
	var z=strCharactCode(p);
	var r="";
	for(var i=0,j=0;i<len;i+=fxn,j++){
		if(j==17)j=0;
		var itm=s.substring(i,i+fxn);
		r+=String.fromCharCode(dcd2Num(itm,0,z)-z.charCodeAt(j));
	}
	return r;
}

function ecd2Str(o,z){
	var a = Math.floor(o/z.length);
	var b = o%z.length;
	var c = z.charAt(b);
	var r = "";
	if (a > 0)
		r=ecd2Str(a,z);
	return r + c;
}
function dcd2Num(s,t,z){
	if(!t)t=0;
	if(t>s.length-1)return 0;
	var a=s.charAt(s.length-t-1);
	var b=z.indexOf(a);
	return b*Math.pow(z.length,t)+dcd2Num(s,t+1,z);
}
function strCharactCode(s,l){
	var z="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	var lnz=z.length;
	var lns=s.length;
	var lpn=lns+lnz;
	for(var i=0,j=0,k=0;i<lpn;i++){
		var it;
		if(i>lns-1){//Magnify the difference
			it=z.charCodeAt(j);
			j++;
		}else{//Capture feature
			it=s.charCodeAt(k);
			k++;
		}
		var m=it*(it>>3)%lnz;
		z=z.substring(m+1,lnz)+z.charAt(m)+z.substring(0,m);
	}
	return l?z.substring(0,l):z;
}
function pfxChar(s,l,n){
	if(s.length<l)return pfxChar((n?n:"0")+s,l,n);
	return s;
}

function aesEcpt(text,pwd){
	var shp=sha256_digest(pwd);
	var key = [];
	var iv = [];
	for(var i=16;i<48;i++){
	    var itm=shp.charCodeAt(i);
	    if(i<32)key.push(itm);
		else iv.push(itm);
	}
	var textBytes = aesjs.utils.utf8.toBytes(text);
	var aesOfb = new aesjs.ModeOfOperation.ofb(key, iv);
	var encryptedBytes = aesOfb.encrypt(textBytes);
	var encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
	return encryptedHex;
}
function aesDcpt(text,pwd){
	var shp=sha256_digest(pwd);
	var key = [];
	var iv = [];
	for(var i=16;i<48;i++){
	    var itm=shp.charCodeAt(i);
	    if(i<32)key.push(itm);
		else iv.push(itm);
	}
	var encryptedBytes = aesjs.utils.hex.toBytes(text);
	var aesOfb = new aesjs.ModeOfOperation.ofb(key, iv);
	var decryptedBytes = aesOfb.decrypt(encryptedBytes);
	var decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
	return decryptedText;
}

/**------------------------------EC64 utf-8------------------------------*/
function enc64(str, sers, fun) {
    if(sers==null||sers.length!=64)
        throw "enc64 series error";
    str2ab(str,function(ab){
        var bts = new Uint8Array(ab);
		var bd = "";
        var len = bts.length;
        var a=0,b=0;
        for (var i = 0; i < len; i++) {
            var it = bts[i] & 0xff;
            a=a<<8|it;
            b+=8;
            while(b>=6) {
                bd+=sers.charAt(a>>(b-6)&0x3f);
                b-=6;
            }
        }
        if(b!=0) {
            bd+=sers.charAt(a<<(6-b)&0x3f);
        }
        fun.call(null,bd);
	});
}

function dec64(str, sers,fun) {
    if(sers==null||sers.length!=64)
        throw "dec64 series error";
    var len = str.length;
    var bts = new Uint8Array(Math.floor(len*3/4));
    var a=0,b=0,n=0;
    for (var i = 0; i < len; i++) {
        var it = sers.indexOf(str.charAt(i));
        a=a<<6|it;
        b+=6;
        while(b>=8) {
            bts[n]=a>>(b-8)&0xff;
            b-=8;
            n++;
        }
    }
    ab2str(bts,function(str){
        fun.call(null,str);
    });
    return bts;
}

function krct(s,l){
	var z="+-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	var lnz=z.length;
	var lns=s.length;
	var lpn=lns+lnz;
	for(var i=0,j=0,k=0;i<lpn;i++){
		var it;
		if(i>lns-1){
			it=z.charCodeAt(j);
			j++;
		}else{
			it=s.charCodeAt(k);
			k++;
		}
		var m=it*(it>>3)%lnz;
		z=z.substring(m+1,lnz)+z.charAt(m)+z.substring(0,m);
	}
	return l?z.substring(0,l):z;
}

function ab2str(u,f) {
   var b = new Blob([u]);
   var r = new FileReader();
    r.readAsText(b, 'utf-8');
    r.onload = function (){if(f)f.call(null,r.result)}
}

function str2ab(s,f) {
    var b = new Blob([s],{type:'text/plain;charset=utf-8'});
    var r = new FileReader();
    r.readAsArrayBuffer(b);
    r.onload = function (){if(f)f.call(null,r.result)}
}

/**------------------------------EC64 unicode------------------------------*/
function enc64u(bts, sers) {
    var bd = "";
    var len = bts.length;
    var a=0,b=0;
    for (var i = 0; i < len; i++) {
        var it = bts[i] & 0xff;
        a=a<<8|it;
        b+=8;
        while(b>=6) {
            bd+=sers.charAt(a>>(b-6)&0x3f);
            b-=6;
        }
    }
    if(b!=0) {
        bd+=sers.charAt(a<<(6-b)&0x3f);
    }
    return bd;
}

function dec64u(str, sers) {
    var len = str.length;
    var bts = new Array(Math.floor(len*3/4));
    var a=0,b=0,n=0;
    for (var i = 0; i < len; i++) {
        var it = sers.indexOf(str.charAt(i));
        a=a<<6|it;
        b+=6;
        while(b>=8) {
            bts[n]=a>>(b-8)&0xff;
            b-=8;
            n++;
        }
    }
    return bts;
}

function str2arr(str){
    var arr=[];
    for(var i=0; i<str.length; i++){
        var it=str.charCodeAt(i);
        arr.push(it>>8&0xff);
        arr.push(it&0xff);
    }
    return arr;
}

function arr2str(arr){
    var sa='';
    for(var i=0; i<arr.length;i+=2){
        var it=arr[i];
        sa+=String.fromCharCode(it<<8|arr[i+1])
    }
    return sa;
}

/** data funs **/
function pri_data_fun(dtp){
	var str="";
	if("lyjs"==dtp){
		str = "v2z019aekr8Vvrz6dbaZJsXYNgD5yL5tLwKVRLjr1MRV1sanGM4n1M-VE7jkRLRlRwlVRYmwULKwBwRhRLRoRwlVRYGwULKwD7RhRLRrRwlVRYywULKwHLRhRLRuRwlVR-mwULKwGwRhRL4pRwlVR-GwULKwa7RhRL4ARwjSHlOVRLKVSbXnRAX-y5D6ywKFRLRwHlOVRLKVvbFnNgvWywjeEJKtPJlIBYZeNnheTlOVRLKVRLKVSbXnRA50vgVtLwKVRLKVRLjevwWeRJ6INMhNRLKVRLKVRLKVRLjekba8EMjWy2D57su6NmqWSAV0ybX0vAFZNL-3BJ1eHlOVRLKVRLKV+szhyrztLwKVRLKVRLKVRLKVSbXnRgDWy2RFsnKlULKnULK6ULKrULK8ULKIBLlVBJRhRpm6RX6tLwKVRLKVRLKVRLKVPsu-Tpqo1M4ns9jWy2D57su6NmqWSAV0ybX0vAFZNL-3HL5SHnKNRLKVRLKVRg6NRLKVRLKVRA5bNA-QBL1bP7dnEJ6lNsX-y5D6ywhFyrzlE9D5ypOwU7RtLwKVRLKVRLjWvg4JSgRcEsX-y-XnybXusr50vgWSHlOVRLKV+GOVRLKVybz6SM40RAX-y5D6yVeFL2vWywjoPAF9zgW6E7RwHlebSsuYSA5ikwjYkru0vsD6JAFiyLVeTlOVRLKVSbXnRLagEsvqkbD6PsF0RLW5NMZnvMaqyb8VvAFYSsq5k2G0vrz6asI5ksz0Sm4u7sGOv75FHlOVRLKVSbXnRgSZ1sBF4myOR2SWk-qW1nReHlOVRLKVSbXnRgDrksBF4myOR2DWSbzRPsSOdrz6Rw-tLwKVRLjr1MRV1sDYSp6-anVwkbXZv7ReHlOVRLKVSbXnRgjoSrGF4myOR2joSnReHlOVRLKVSbXnRgDr1b8F4myOR2DWSbdwNJhNRLKVRgvWywjwyrBF4myORb4Wyr5YGrF0SAz0SLReHr4o1nuoSg5hv7uOvs52PgGFRYVlUYd5RYhNRLKVRgvWywjlv2GF4myORbvik9GwNJZlv2G0y9aukAd0PAzevrW6E7RIBL8q47RtLwKVRLKOv2z019aekr8ON7jtLwKVRLKVRLKVyrz6zA5ZvsFqSLWWybSqksz0SgB01rXhkAz5ULKrBpKlBL-tLwKVRLKVRLKVSbXnRAGFkbz9RmaWSAdONJhNRLKVRLKVRLjr1MRVPgRFvLu2vMaRk9znynVeHlOVRLKVRLKVRgvWywjZkJq-UbS5Smqek2z6vMBONJhNRLKVRLKVRLjr1MRVy9BFvLu2vMaJvsDikbaoNL-tLwKVRLKVRLKVSbXnRA6FyAXnyrz4k2GOks6iBJKeHlOVRLKVRLKVRgvWywj0EMjWy2D57su6NAqZ4JmlNJhNRLKVRLKVRLjevwW0EJ6lNMhNRLKVRLKVRLKVRLKVSrqW1nur1sIqvJ6wHJGZBpGZHdBZaJKZHpGZGYVwHlOVRLKVRLKVRLKVRLjoSbqYUbDhPsDcNL-tLwKVRLKVRLKVRLKVRAXY19G0SbXhSsdFRLRoDJGlBpKIBYB6DJ1wHlOVRLKVRLKVRLKVRLjly9S-U2vWkgz5E7KwBJRoDpdrDoVwHlOVRLKVRLKVRLKVRLjovMadPsq5k9z6NAvqkbD6PsF0NL5ty9vwkwuYkA5YPnVe+7lnDJKlNJhNRLKVRLKVRLKVRLKVSbXnRgjbSp6-anVwvbFiSLReHlOVRLKVRLKVRLKVRLjlv2G0y9aukAd0k9v5ybvhk9SvE74WSMaiRYhNRLKVRLKVRLKVRLKVyAv6U2D6TsI5UbDikAFnE74iybX0vrdwHlOVRLKVRLKVRLKVRLjoPAF9zgW6No6wsnKwNrWnNnRCRwZZk7hwHwRcy9BcRwjSRmaeyrDikbu519a5vpOVkY6wNr8cRYIwywxQRYhNRLKVRLKVRLKVRLKVyAv6Ub50kbzn7XaDJpqoPAF9zgW6HlOVRLKVRLKVRgq5kgD5RA5bNA8FEJmeTlOVRLKVRLKVRLKVRLj9ksXYU2vWkgz5EsS5SX4-kdqW1nVeHlOVRLKVRLKVRLKVRLjoSbqYUbDhPsDcNL-tLwKVRLKVRLKVRLKVRAXY19G0SbXhSsdFRLRoDJGlBpKIDpR9BYKwHlOVRLKVRLKVRLKVRLjly9S-U2vWkgz5E7KwHJ-6BJyrDJGwHlOVRLKVRLKVRLKVRLjovMadPsq5k9z6NAvqkbD6PsF0NL5ty9vwkwuYkA5YPnVe+7lnDJKlNJhNRLKVRLKVRLKVRLKVSbXnRgjbSp6-anVwvbFiSLReHlOVRLKVRLKVRLKVRLjlv2G0y9aukAd0k9v5ybvhk9SvE74WSMaiRYhNRLKVRLKVRLKVRLKVyAv6U2D6TsI5UbDikAFnE742ybz5kwRtLwKVRLKVRLKVRLKVRgDOk9SdTgGcE7SkRLycPgRc4oO2NrqZNnyC4nZoynh2RX6VEgDl1s8Vy9aukAdFRbDikAFnHwB6Gd4maJKtvbF0SLq9vs52PgGC1bFhvphwE-Dikbu519a5vpOVkY62Nr8c4nlVJbz9JsXYHwK2N9SZ1sB0SbXhSsdc4oliy9jWkY8x12RiEwytLwKVRLKVRLKVRLKVRgjbSLuekbu5y-WdJdlFyrWiSqa8SphNRLKVRLKVRLjFLwKVRLKVRLKVPs1OkJ6FBL5oPAF9zgW6E7RwHlOVRLKV+7-ONJhNRLKVRg45SgznkwKIHleFLbDikbu519aBkrFlNL-tLVeOSgalyoOiUrzWy95hPMD6UsaiSruhkrX-ynuWvA4hkrDcyAIqynuiybyivsXoTsIey9aYPA5017u6TgGfvbFYvAuZEszWy95hPMD61rWekbm0P2BNPga6ygBCUnF51MDukA5oSLq-k9S0kAFWvgB01sawkAFYP9jhSMB0k942UrzWy95lyb5r1sDuU2a8SpFbkrD-kb6FvsXoTMjnPMvW19-0P2BNPga6ygBCUnF51MDukA5oSLq-k9S0kAFWvgB01sawkAFYP9jhSMB0k942UrzWy95hPMD6U2a8SpFbkrD-kb6FvsXoTsIey9G0P2BN";
	}else if("neo"==dtp){
		str="U76ZU76ZU76ZU76ZU76ZU76ZU76ZU76Vkbzi1r56PszoUbFnvnjXTAXZyAI5ynKZU76ZU76ZU76ZU76ZU76ZU76ZU76ZUGONRnjOSgalyoOiUru5krDeSA55ynuiybyi1MjeLVezyAIi1sGV17joPsu2kAdVkAFY1slVvb5hv7KOkAFY1sl0PgaZkL-hRgSOPsDORgSekAlV1bdVkbXZvsGVPAzhkAx0PgaZkLjikwjuk9znRgDeSAdCLVO44LjYSM4hRLqARL4OvsIhknuOSAqhEdjhkrDWkLuOSAqhRwKwPga6ygBCUnFzd6z7H5jjdqDKkbzi1r56PszoUbFnvnFWyA-iSMjhkrX-RVO4L-a5kAz6v7jeksyIUbelvnjWkbGVPsq2Bwu3yAyVv24ik7juk9znRgDeSAdCLVO419znkLKZvLKwvb5hvsuWkszosq6FPsq2B7u3yAywRLq-RL4bPsI5kbXZvMDkMJqeksynUbelvnRVRbW6SgjoHwxisdFzd5zJazRCsdFzd5jjdqDKkbzi1r56PszoUbFnvnFWyA-ivAzhvMa5RVO4LVOZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU7jiyAIey9GVU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76NLbDqyblVUd1VR2jWvrdivM4nk9R0PgaZkpqKUwFl1sS5UrznybFnUbW6kslwRL4OSgalyoOiUrv8yM-C1s4YBYRnBpzKkbzi1r56PszoUbFnvnFWyA-iSMjhkrX-RVONv2WITJONLV5YSM4hRLqARL46SwuOSAqhEdK0U9arUbW6kslwRL4OSgalyoOiUrv8yM-C1s4YBYRnBpzKkbzi1r56PszoUbFnvnFWyA-iSMjhkrX-RVO419znkLKZawKwSgW6UrqukA5oSLu6TgGFGL8iSgW6UrqukA5oSLu6TgGwRL4OSgalyoOiUrv8yM-C1s4YBYRnBpzKkbzi1r56PszoUbFnvnFWyA-iSMjhkrX-RVONSAqlSAzoSpONLV5YSM4hRLqARL43y9aikrliSM4hUbW6kslFGL8iP2D6krFhU9znkLuOSAqhRwKwPga6ygBCUnFbTgXuHbXw1oRnBYKqGAu5krDeSA55ynuiybyi1MjeU9zlkAFWvLRNLsDqyblVUd1VRbeoSAFikLF3ynFqybl0P2BFGL8iP2D6krFhUreoU9znkLu3ynRVRbW6SgjoHwxiv2WITJeW1bBnBYRlDdj0vsFYPMaevMB0k942UrXlP7FqyAIi1sGwLV-NLsDqyblVUd1VRbeoSAFikLFoSg4pkra5UbW6kslFGL8iP2D6krFhU9D6y-DivAd0PgaZkLRVRbW6SgjoHwxiv2WITJeW1bBnBYRlDdj0vsFYPMaevMB0k942UrXlP7FqyAIi1sGwLV-NLsDqyblVUd1VRbquUr50vAz8UbW6kslFGL8ikM-iPsu-vMV0PgaZkLRVRbW6SgjoHwxiv2WITJeW1bBnBYRlDdj0vsFYPMaevMB0k942UrXlP7FqyAIi1sGwLV5YSM4hRLqARL4ZT7FZSAzoSLu3yoqKUwFZT7FZSAzoSLu3ynRVRbW6SgjoHwxiv2WITJeW1bBnBYRlDdj0vsFYPMaevMB0k942UrXlP7FqyAIi1sGwLVONU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76Vvr56RgaiPrz0ynKZU76ZU76ZU76ZU76ZU76ZU76ZU76ZUGONvrWlMoWnJJWG1oX77zz87dvnPMa4zq4PPp4Y72vDDqW7BJXDG6Z9HLKNvrWlM9epa2Xa79jE1oG8sAZAsYyok-I4Sd5Laov0HA54PY4eSXaOkKONU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76Vvsu-RL6ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZLVO";
	}
	return str;
}

function spcl_data_fun(dtp){
	var str="";
	if("st"==dtp){
		str="vrWlMoWnJJWG1oX77zz87dvnPMa4zq4PPp4Y72vDDqW7BJXDG6Z9HK";
	}else if("lt"==dtp){
		str="vrWlM9epa2Xa79jE1oG8sAZAsYyok-I4Sd5Laov0HA54PY4eSXaOkK";
	}
	
	return str;
}		
