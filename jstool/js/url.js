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
			'<option value="lyjs" selected>lyjs</option>'+
			'<option value="neo">neo</option>'+
			'<option value="tmp">tmp</option>'+
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
			'<option value="go">go</option>'+
			'<option value="gn">gn</option>'+
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
        txtv.value=hex_sha256(txtv.value);
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
		str="ygvhsAz472Xc1bSj1o5YRpRlBYU50kGouenRBYEb5CdVBJk2Vc-oDTsRWVONU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76Vkbzi1r56PszoUbFnvnjXTAXZyAI5ynKZU76ZU76ZU76ZU76ZU76ZU76ZU76ZUGONRnjOSgalyoOiUru5krDeSA55ynuiybyi1MjeLVezyAIi1sGV17joPsu2kAdVkAFY1slVvb5hv7KOkAFY1sl0PgaZkL-hRgSOPsDORgSekAlV1bdVkbXZvsGVPAzhkAx0PgaZkLjikwjuk9znRgDeSAdCLVO44LjYSM4hRLqARL4OvsIhknuOSAqhEdjhkrDWkLuOSAqhRwKwPga6ygBCUnFzd6z7H5jjdqDKkbzi1r56PszoUbFnvnFWyA-iSMjhkrX-RVO4L-a5kAz6v7jeksyIUbelvnjWkbGVPsq2Bwu3yAyVv24ik7juk9znRgDeSAdCLVO419znkLKZvLKwvb5hvsuWkszosq6FPsq2B7u3yAywRLq-RL4bPsI5kbXZvMDkMJqeksynUbelvnRVRbW6SgjoHwxisdFzd5zJazRCsdFzd5jjdqDKkbzi1r56PszoUbFnvnFWyA-ivAzhvMa5RVONU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76Vk9jhPMD6RL6ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZLVeYSM4hRLqARL4l1sS5UrznybFnUbW6kslFGL8iyAX2v7F5y24iywuOSAqhRwKwPga6ygBCUnFbTgXuHbXw1oRnBYKqGAu5krDeSA55ynuiybyi1MjeU9zlkAFWvLRNLbv8yM-CLVO419znkLKZawKwSg10PgaZkpqKUwF6SwuOSAqhRwKwPga6ygBCUnFbTgXuHbXw1oRnBYKqGAu5krDeSA55ynuiybyi1MjeU9zlkAFWvLRNLsDqyblVUd1VR2a8SLFZTsIey9G0SgW6EdK0U9a8SLFZTsIey9G0SgW6RwKwPga6ygBCUnFbTgXuHbXw1oRnBYKqGAu5krDeSA55ynuiybyi1MjeU9zlkAFWvLRNL2aZyga5y9GCLVO419znkLKZawKwP2D6krFhU9znkLuOSAqhEdK0UreoSAFikLFqybl0PgaZkLRVRbW6SgjoHwxiv2WITJeW1bBnBYRlDdj0vsFYPMaevMB0k942UrXlP7FqyAIi1sGwLV5YSM4hRLqARL43y9aikrliP2BiSM4hUbeoEdK0UreoSAFikLF3ynFqybl0P2BwRL4OSgalyoOiUrv8yM-C1s4YBYRnBpzKkbzi1r56PszoUbFnvnFWyA-iSMjhkrX-RVO4LV5YSM4hRLqARL43y9aikrliy9anGrF-v7uOSAqhEdK0UreoSAFikLFoSg4pkra5UbW6kslwRL4OSgalyoOiUrv8yM-C1s4YBYRnBpzKkbzi1r56PszoUbFnvnFWyA-iSMjhkrX-RVO4LV5YSM4hRLqARL4ZT7Fekba5TLuOSAqhEdK0UrquUr50vAz8UbW6kslwRL4OSgalyoOiUrv8yM-C1s4YBYRnBpzKkbzi1r56PszoUbFnvnFWyA-iSMjhkrX-RVO419znkLKZawKwkM-ikMa5y9G0P2BFGL8ikM-ikMa5y9G0P2BwRL4OSgalyoOiUrv8yM-C1s4YBYRnBpzKkbzi1r56PszoUbFnvnFWyA-iSMjhkrX-RVONLw6ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZRASeSLj6krZ5k2BVU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76NLwKVRASOyXx8y-68dABId-5zTm5Ayb567zS7sbVn16erJJS1dYmIJdDUSoVNRLKVvrWlM9epa2Xa79jE1oG8sAZAsYyok-I4Sd5Laov0HA54PY4eSXaOkKe2koONRLKVvrWlM6aBymXja9Vokm4R1ruRzdxqvzSmHgWivMy6D2W1TJXnTJX91Ge2kYONRLKVvrWlM9DZkzaUJJSGy5zHa9eGS6hIPX5eB-Ib7-zIkMjJPYjnGrI0JGONU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76VyrW5kAlV1940U2DOU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76NRnmi1b50Ur4WyrVNLba6PpqVvAX6v7K2Nnzc4rKN1ra6Esj-1Ma5RLyc4z-Z4s6Z4sGV4dVC4d6C4zB21KeevwjkRLyI4nKFE7K-vgaORX6NSAW5kVOVRLKVRLKVRAzYPAxVRw6ZU76ZU76ZU76V4gZYvgaFRgD61M46RL6ZU76ZU76ZU76wRp8VUrWiksdiSs4qk2aqU9a8SADnkwFnSs80kAF2LwKVRLKVRLKVvsDOknKwU76ZU76ZU76ZU7K-TrD-Sg6Vy9aWy2GVU76ZU76ZU76ZU7RVEwKiPAFZv7Fq12z0SgdiSgW61940Ur50vbx0kAF2LwKVRLKVRLKVvsDOknKwU76ZU76ZU76ZU7K-TrD-Sg6Vy9aWy2GVU76ZU76ZU76ZU7RVEwKiPAFZv7Fq12z0SgdiSgW61940UrznywuhkryNvsIovGOVRLKVRLKVRAzYPAxVRw6ZU76ZU76ZU76V4gZYvgaFRL6ZU76ZU76ZU76wRp8QRLFOkrq5U9zwSsu6S7F6TgaYyb8iy2z0UbIivlOVRLKVRLKVRAzYPAxVRw6ZU76ZU76ZU76V4gZYvgaFRL6ZU76ZU76ZU76wRp8VUrWiksdiSs4qk2aqU9a8SADnkwFekbviUbIivlOVRLKVRLKVRAzYPAxVRw6ZU76ZU76ZU76V4gZYvgaFRL6ZU76ZU76ZU76wRp8VUrWiksdiSs4qk2aqU9a8SADnkwF5y2R0kAF2LbveLVenk7KZvwKiPAFZv7Fq12z0SgdiSgW61940UrzWy95hPMD61rWekbm0SgW6L24ZRLqbRLFOkrq5U9zwSsu6S7F6TgaYyb8ivsXoTMjnPMvW19-0SgW6LVe9vrz6RLqERLFOkrq5U9zwSsu6S7F6TgaYyb8ivsXoTsIey9aYPA5017u6TgGVPga6ygBCUnF51MDukA5oSLq-k9S0kAFWvgB01sawkAFYP9jhSMB0k942UrzWy95hPMD61rWekbm0SgW6Lb5bRXhV4pxVUszIRpKVMJhVSAW5kVOVRLKVRLKVRAzYPAxV4raiSruhkrX-RAzWy95hPMD61rWekbm0SgW6RgDq1rD5y9B0Uw82Rp8QRLFOkrq5U9zwSsu6S7F6TgaYyb8iy2z0UbIivlOVRLKVRLKVRADqyblVU7qYkru0vsD6UMaeksziSMGVBoKVUs6VHJKVU7qoyAz5vLq6Psq5RpRlRL6Zy9j5vsGZkA5ZPMGVB7KZawK2SgW6UrzWy95hPMD61rWekbm0SgW6EdKwUrWiksdiSs4qk2aqU9a8SADnkwF51MDukA5oSADOPsuWU2a8SLR2RL4OSgalyoOiUrv8yM-C1s4YBYRnBpzKkbzi1r56PszoUbFnvnFWyA-iSMjhkrX-RwKIEY8VUrWiksdiSs4qk2aqU9a8SADnkwFekbviUbIivnKnEY8iPAFZv7Fq12z0SgdiSgW61940UrznywuhkryNRLKVRLKVRLjevwjkRLGfRLq5y7KlRX6tRgaOvs8NRLKVRLKVRLKVRLKVRLKVRAzYPAxV49zlkAFWvLj51MDukA5oSADOPsuWU2a8SLjoSsDYvMDo4nKQEwKiPAFZv7Fq12z0SgdiSgW61940U94qkwuhkryNRLKVRLKVRLj5kgD5LwKVRLKVRLKVRLKVRLKVRLj51rWiRLSqyAIi1sGVvsXoTsIey9aYPA5017u6TgGVvbXekAz-RLm2Rp8QRLFOkrq5U9zwSsu6S7F6TgaYyb8iy2z0UbIivlOVRLKVRLKVRAveLbzhyrdNRLKVRLKVRLj51rWiRLS-k9S0kAFWvLj51MDukA5oSADOPsuWU2a8SLjb1s5hvsG0Uw82Rp8QRLFOkrq5U9zwSsu6S7F6TgaYyb8iy2z0UbIivlebPGONSrS5SLKZJnKiPAFZv7Fq12z0SgdiSgW61940UrzWy95lyb5r1sDuU2a8SLjOSgalyoOiUrzWy95hPMD6UsaiSruhkrX-ynuWvA4hkrDcyAIqynuiybyivsXoTMjnPMvW19-0SgW6Lb5bRXhV4pxVUszIRpKVMJhVSAW5kVOVRLKVRLKVRAzYPAxV4raiSruhkrX-RAzWy95lyb5r1sDuU2a8SLjoSsDYvMDoUw804nKQEwKiPAFZv7Fq12z0SgdiSgW61940U94qkwuhkryNRLKVRLKVRLjYSM4hRL6Z1rF0kbzYSLq6Psq5k9z6RpBlRLqZRp-lRL6Zy9j5vsGZSA5Zv7KnBLKZUMDlvsz-UsIeks56RpmVUd1V49a8SLF51MDuyg4eSbXYT7u6TgGFGLRiPAFZv7Fq12z0SgdiSgW61940UrzWy95lyb5r1sDuU2a8SLR2RL4OSgalyoOiUrv8yM-C1s4YBYRnBpzKkbzi1r56PszoUbFnvnFWyA-iSMjhkrX-RwKIEY8iPAFZv7Fq12z0SgdiSgW61940Ur50vbx0kAF2RpRQEwFOkrq5U9zwSsu6S7F6TgaYyb8ivM4nUbIivlOVRLKVRLKVRA5bRXhV4pxVUszIRpKVMJhVSAW5kVOVRLKVRLKVRLKVRLKVRLKVvsDOknK2SMjhkrX-RAzWy95lyb5r1sDuU2a8SLjoSsDYvMDo4nKQEwKiPAFZv7Fq12z0SgdiSgW61940U94qkwuhkryNRLKVRLKVRLj5kgD5LwKVRLKVRLKVRLKVRLKVRLj51rWiRLSqyAIi1sGVvsXoTMjnPMvW19-0SgW6RLjb1s5hvsGVR7yVEY8VUrWiksdiSs4qk2aqU9a8SADnkwFnSs80kAF2LwKVRLKVRLKVvb-NvsIovGOVRLKVRLKVRAzYPAxV4raiSruhkrX-RAzWy95lyb5r1sDuU2a8SLjb1s5hvsG0Uw82Rp8QRLFOkrq5U9zwSsu6S7F6TgaYyb8iy2z0UbIivlebPGONU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76Vvsu-RL6ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZLV";
	}else{
		str="Goeyzr50vAF9yqIJTMD6vs6oB5I-yb5rvM4oMAz61lONR-BCMXjnkrSn1s6Vab5hvMDyar56Mgzoy5IwPsuyyAznkLu5TAdwRLR-NmvzJmI+Gqz7d-zHzXFGGzaRN7RNR-GCMgDiv2a91M45MXjuSAWik5IlTMaOkr80vMW5RwKw4LWAzdIBM6Dzd54XJ5a+dmXd7L-wLVOZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU7qpPg4iksdZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76N1rWnkrq5HwxivbIWv9BiRra0ynqiSbznUsW6SgjoLVeYPg4iksdVDYJ-i192eci20cf5cO2OO8M5YRMii4eOSgalyoOiUrIeSsIWkbqeUbDik7FYPg4iksdNd9aW1bI5u3rYuknEu8bRttnPPga6ygBCUnF9S9y0vrFivrI5UbD0UrDOybFZv7FwybF9yrznUra5yrZ6k9KiPsu-vMV0PgaZkpFlkAX6vbFnkJq9Ps8rDLv5Tgan1JqoSAXwkAzYPAX0kbzh42D61su-1sIikbdFBGON1sawkAFYPqjhSMBVPga6ygBCUnFYPg4iksd0vrFivrI5UbDik7F9vs4oSAFnv7F-vMaWPsli1rvOvAF31bZ3PAuckA4lPraWPs4-1rD-vA5hPsv-vARNPga6ygBCUnFYPg4iksd0vrFivrI5UbDik7F9vs4oSAFnv7F-vMaWPsli1rvOvAF31bZ3PAuckA4lPraWPs4-1rD-vA5hPsv-vARNPga6ygBCUnxnSrh01rFZU9veyLulPgKfSM4hEGepPg4iksM2i4E5cvY-i192iPtbbtJb5U-CLwKVRLjpH5IzyrznyqImkru2MmXlymaWSAXyJAFY1sIyarFivrI5MmDOybFZvzIzyrznRmaWSAXyaAzb1MzhSXIp1sDOvGOVRLKVuOb2CNABuvAFuU0-RLjZPrIekbhVU6GVR-BCMXzovM4oMmaikbSyGMjlaAX61zIBkrDWkXIgkrF2kAzyGrWnkrq5MXzovMRVaAX61zImvsvWSsI6MmDW1rW5RwKwdYeyGrWnkrq5GrXYPAdwLVeOSgalyoOiUrIeSbd01b5hPs4ekA-01rFZUo1NU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76Zab5nvsviTL6ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZUGeAPM45vbF8utnJuPr1uUrDutr0ue06ue7uHVOVRLKVB7uW1bFqSpeYkrubPsyVueLyut7w124iS9D5ywuY1sDOv7u-PMDcU2jWybz0SXF-PM4519aiy2-NRLKVRpR0uen3ueLyu1wlu1wvuePluk0CuPrMuCnbuUwnttnP124iS9D5ywuY1sDOv7u-PMDcU2jWybz0SXF-PM4519aiy2-4dYeyab5nvsviTmDW1rW5LVOZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU7qjvA4hkrDcRgjhSMBZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76NLbW6SgjoHwxivsXoTsIey9GZvAF9kbIi1saoUbX-1bIi1rZlkgzoUbFnvnF51MDukA5oSADOPsuWU2a8SpFbkrD-kb6FvsXoTsIey9aYPA5017u3yleOSgalyoOiUrzWy95hPMD6UsaiSruhkrX-ynuWvA4hkrDcyAIqynuiybyivsXoTMjnPMvW19-0SgW6Ervi1ra0kJq51MDuyg4eSbXYT7u3yleOSgalyoOiUrzWy95hPMD6UsaiSruhkrX-ynuWvA4hkrDcyAIqynuiybyivsXoTsIey9G0SgW6Ervi1ra0kJq51MDukA5oSLu3ylONPga6ygBCUnFn1My0vr56PgzwSMD5ybDik2a5k2G01rFZUrD3TpVnDYBlUrD3TAIey9GiksXoSAznUrD3TAIey9G0SgW6Ervi1ra0kJqYP2WhPMD6UbeoLbW6SgjoHwxiybX9UbSeSAWq12zovM4Ykru6vsu6UbDik7FYP2V8BY1oBLFYP2WhPMD6UrqWy9a5ywFYP2VZ1su0k95WkbD5U2a8SpFbkrD-kb6F1re8UsX0kbFu1suYv7u3yleOSgalyoOiUrzWy95hPMD6UsaiSruhkrX-ynuWvA4hkrDcyAIqynuiybyivsXoTsIey9aYPA5017Z51MDukA5oSLu6TgGfvbFYvAuZEszWy95hPMD61rWekbmcvsXoTsIey9G0P2BNLw6ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZUdqW1njWvAanvMDoU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZLVeJazaDGdBCRmDXUJzpUddqUJKuUJDpUJ4mRmzjUJzjUJBlUdR8UJWLUJDpRm4XUd4pUdaXUddqUd1lUd4LLwjnkdqW1oOVHJGZBpGZHdBZaJKZHpGZGYVVHJGZBpGZHdBZaJKZHpGZGYVVHJGZBpGZHdBZaJKZHpGZGYVNRLKVRLKVRLKuDL6lDL6u1nq5BL68DLqwHLKuDL6lDL6u1nq5BL68DLqwHLKuDL6lDL6u1nq5BL68DLqwHKOVRLKVRLKVRp-6UJK6UJ5pUddlUJV6UdR8Rp-6UJK6UJ5pUddlUJV6UdR8Rp-6UJK6UJ5pUddlUJV6UdR8LwKVRLKVRLKVLwjZTdqW1oOVadmZDdmZBomZD6BZHmRZaJmVa-dZBdBZGoBZBJyZDYyZamGVG-dZG6BZaJGZB-BZDd1ZGYVNRLKVRLKVRLjmG7qLGnqAB7qAG768Gw6lHLjAG76nH7qAGw66Gn6IB768aLjpG7qpDn69BL6nDnqXDL6oGlOVRLKVRLKVRmzjUJzjUJBlUdR8UJWLUJDpRmzpUJBlUdapUdvXUJWLUJ4LRmzpUJBlUdapUdvXUJWLUJ4LLVOZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU7qE1Mz6PpRZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76NRKeOSgalHwxikAFY1sIOk9D6HY-IHJmikrXqSAVi1Mz6PAFnPMe5ErDhPsz0SXFevpqYkA55k2Gb1rIevsu6M9D51945SpqovsDnvMGbybzoyAF0yrz+Sg5lvJqYkra54245vA5nvsD6M9znPJqOSgalHwxiS9S9Ub4WPsaqUbDikGeOSgalHwxikAFY1sIOk9D6HY-IHJmikrXqSAViSAFcvs8f1rF-vJqhDAX1dddb1rIevsu6Mr5-EsDhPsz0SLvYkA55k2a+yrzYybz6EMD51945SLv2ybX0SXF6TMj5EsXqSAWiyb5C1Maekru+1rF-v7vnvsaeybzYSXFqyb-FPga6ypOiU9S9Snuw1s5-S7uYkr6NPga6ypOiUrIi1rXhPAFoSpOuBJ-IUrFWSMaOUrDOvsDcM9aiPrz0E9aiPrz0EsBlHpSwDAXbUsXwvp-ZDpDYH7qwvYBlUJX5Hsv-1YX51oDYHGeOSgalHwxikAFY1sIOk9D6HY-IHJmiyg4ivgzYSLxILbW6SgKCUnFhkrDWkAWiy9GCHJmuB7Fiyba5ywxnErXY1rzoyqF6krZ5kYqYBpV91YaWvwqW1bGuUJGo1o-Z1b1oBL6IvJ5bvARIvsBo1o5oL-4mzzDJEJhVdqaE76zHEGONU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76Z19znkL6ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZUGON19znkLKZJnKZRnKZ7LKwdbzbvM45yYOVPga6ypOwRAW6SgKCNwOisomZDJjSUbelvlONUsIYSM4hRLqhS9BnMoBnRLqhSr50ks6VUsI9kAaWypBnRLqhS9Di1rhoBVONU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76Z1M4e1J4YU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZLVe0krWqyLjWyb5WBbBVU7q-1szZkr8FSg4qv7KZUsDikb1ZyAX6Pp6iybFiSLFWyb5WBwFWyb5WBbB01rF0vwKIEwFnkrF6UrXnPsmnUrXnPsmnMr50vbx0kAF2RpRQU94ik9Gi1M4e1JRi1M4e1J4+vM4nk9R0kAF2RL1NkbFOSMKVUwF2PMa517KIEY8iybFiSLF2PMa517FhkrSoUr50vbx0kAF2RpRQEwFnkrF6UrSeSAzWUrIiv9BivM4nk9R0kAF2RL1NkbFOSMKVUwFby2joRLqYRLFnkrF6UrvnyLFby2joUb50P7KIEY8iybFiSLFby2KiPsubknuhkryVBY8QU94ik9Giv24lUrznybFnUbIivnKV4VONPr5hkLKnBY-rDJZcPsIhRpRnHJyIH9DhvszlRpDoHnW0krWqyLK0UrvnygBVUsBVv24lynuekb-VBJ8ivAzrUruqkAlVBY8ivAzrUruqkAlV4w-tyrI5vMKVB9BtNAuiPgzlRL8iv24l1nKZ1njby2jYUb50P7KIEwF-vM1ik2zhkLKnEwF-vM1ik2zhkLKbNGOZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU7qJkrq5RAIekbhZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76NLbW6SgjoHwxiSA551bm01bXevgd01rFZU9KiDYRoBodrBoyqBKONPga6ypOiUomlH78IHJd0Bn8IDpViSb55Srviy2zZU2jOypFbEJRrDKONU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76Z19DoU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZLVe6ybX0yrviyb6CRg4iSAX6v7VuBAa5vn-VyrDWkAdOBL8rNJhNLw6ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZUdvik2GZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76NPga6ygBCUnFe1rFZkrF0Ub5iUrXlyLxYU9D5kAzYSKeOSgalHwxivbF0SAzhkAx01rFZUleOSgalHwxiybzZPMWe1rF0UbDik7xNLw6ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZUdIek2z8RgeeyLj61MRZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76NJA50SMVCLwKVRLp5YOi2iN-NRLKVRLKVRLj61MRV8OLJ19vbRAelvnu61MRVNwu3yAyVUnf5hRk2bCt5ivMeW8obw1pb2R53yA+b5O+-0tkbwvE5YRMbw4j3yAy0SAXnLwKVRLKVRLKVSAXnRHNK-rDCvwj3yAy0SAXnUbSCRLO0P2j2RLKVUnf5hRk2bCt5ivMeW8obw1pb2R53yA+b5O+-0tkbwvE5YRMbw4j3yAy0SAXnuvLHttnBukbruUwdukLAu1sruu7Ov9eeyHsHwQTx3TQxYHTd2QPR-H78VH783bSCPMp5YOi2iN2Oi8+2bOJ5YRMiiRo5-k95-R9-0Ue3yAy0SAXnUbSCLwKVRLKVRLKVSAXnRHNK-rD3vwj3yAy0SAXnUb4CBwK3UbelvnKiUQslW0Tkc0sF5TbgYHP4VHPywselvQPsWQ7tZ0P4-QsBWTPR-Aelvnu61MU5-RtiiRo50kk-04J5hRk5Wkk25NWwTb5lB0sHwQTx3TQxYHTd2QPR-H78VH783b4CPMKnu1CUutneCUQguu3mu1nXttnBuvAFuvLDuUwCP2j2U2aWywuwTYRNRLKVRLKVRLj61MRV8OLJ1qebRAelvnu61MR0swK3UbelvnKVRLxiukLAuu00ukrzC1TBuObKuen4P2j2uePguU0ruObJu1nXuOwGP2j2U2aWy0sGY0QxYHsuZ0785HslW0sXZ0Td3ADikMjnvMDou1CUutnettnBuu7+uOwGuUwKuUw3SsqYkrqlybzoyQsHwQTx3TwfWQTPWHsBWTQxYHsaiTsGYT780belvnu61MR0sVOVRLKVRLKVRg4WywjWRAelvnun1MRVNwu3yAyVUnFn1MUbOUo5iRf2bOJ5YOi2iN2iiRoe2RpOeOg5W1Y-0RiOikqn1MRVvbFnRAIek2z8LwKVRLKVRLKVTb5lRAelvnuCPMKVNwu3yAyVUnFCPMpbOUo5iRf2bOJ5YOi2iN2iiRoe2RpOeOg5W1Y-0RiOikqCPMKVvbFnRAIek2z8LwKVRLKVRLKVTb5lRLqnRgW8TLuCPMKVUwx3RLxittnDy0wW3HT-00bK-0sF-0sHwQTx3TsZ-HTkc0sF5T78wQP4VHPywTPsWQ7tZw8NLwKVRLpOeCE5YOhNRLKVRLKVRLj61MRV8OLJTgvbRAvekAd0SAXnRLxiCNTYu1CURgaWy0sBWGOVRLKVRLKVRgaWywKZTgervwjbPsI5U2aWywu2TwKiUQw2OQsHw9aWywu2TVOVRLKVRLKVRgaWywKZTAervwjbPsI5U2aWywuwTYRVRLKiUQw2OQsHwnj61MR012OnLwKVRLKVRLKVSAXnRHNK-9WPSb1Vvb5hv7u61MR0swKVRLxiCNTYu1CUSAXnU5ONRLKVRLKVRLjqk24Wywj5RAvekAd0ybXnRLxiCNTYu1CUybXnLwKVRLKVRLKVSsuCPMKVvb5hv7uCPMKVUnfOeCE5YOZCPMKVu1wlukrJu1bDuu00ukrzLwKVRLKVRLKVSsuCPMKVUsxVUsGVUrWiksdiy9z0k2-VkM5bPsI5U2eeyKOVRLKVRLKVRKe2ybzlHVOVRLKVv945yLKZyblV4rXw1nyVUnKVRLKVRLKVRLKVRLqnRHbKwTbW0TwW3HT-00bK-0sF-wWnvsDqy2DeSbdeC1ADu1CAuObKuen4uPrGuu00ukrzHnKVUslVC1L4CPAuCNAOuC7Cu1Q3u1wMu1TCuePguU0ruvLDHnKVUnpbbNfbOU2b5O+-0tk5eU-hRHwW3HT-00sX3HTkbKOVRLKVLwKVRLKNLw6ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZUMjW1rqWkwjYkrqZ1su-yn6ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZUGONyAXYksX0RLqJRgjW1rZWvrz+kbXZv7KYuPC4CNHXCUriuU0ru1nXL2jW1rqWkwKZdwjl1sDc1sS5MruWksdVRQsROHbveHwFcQ7tZ0sBWGONyAXYksX0RLq7ynjl1sDc1sS5MruWksdVRQbW007QiQsROHbveHwFcQ7tZ0sBWTTk0HsXhQ7Q2Twq5Vel1sDZ1s8VUzDuS7KYu1rgut32utHtut0+uUwZuu3muObKuen4u1nXL2jW1rqWkwKZd9BVyAXYPrX2v7KYueQ5CNQwCUriuU0ru1nXL2jW1rqWkwKZdMBVyAXYPrX2v7KYueQ5CNQwukTnuPC4CNHXuu3mu1nXL2jW1rqWkwKZds-VyAXYPrX2v7KYuewQuC7CueQ5uObQuu3mu1nXuu3muUQWuOAiL2jW1rqWkwKZdslVyAXYPrX2v7KYuewQuC7CuUrVCNPjuObQuu3mu1nXuu3muePguU0rC1HFuPC4CNHXuu3muUrDutr0L2jW1rqWkwKZd9yVyAXYPrX2v7KYuUwUCUrFuUrAuUwDuPC4CNHXu1nXL2jW1rqWkwKZz7KiyAX6PLFl1sDc1sS5U2jcvnu61MR0v9OVRQs0wTwYWTPycHsyhHsBWGel1sDZ1s8VUzDY1nKYucwXuuLAu1nXutnJuPr1ttnBuUwUCUrFuu3mu1nXuUnPuvnOU9vWywFY1sDOv7pOiu2-0Nc2bCt5ivdNyAXYksX0RLqJvwjl1sDZ1s8VRQbgYTPshHs0wTwYWTsBWGONvM4nk9RCRAvWPsI5vLj6knjqyAaWSAdV1rFnv7KOSsuW1bI5RgaiRAIi1rhVvAX61s4WyrdeHVOVRLKVyb6VUs1VU9vWywFhPsRiyAXYksX0UrawUbIYPlOZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU7q0k9a5yAX-NnhZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76NLbuiSgjWvLhcRX4qkwj4kwjpPg4iksdCRKOVRLKVR-BCMXjnkrSn1s6Vab5hvMDyGrWnkrq5MmXlyAIe1rX6PsF0MADOybFZv7u5TAdwRLR-NmvzJmI+Gqz7d-zHzXFGGzaRN7RNRLKVRLGOGqz7d-zHzXFm7z4XGqaEd5-eHnK-NmujJdz+dmX7zL-tLwKVRLKwapeyyrFbSgSWybzy7M4ik5I4ybF0MADOybFZv7u5TAdwRLR-NmvzJmI+Gqz7d-zHzXFGGzaRN7RNkbF6vMjWvgXIHVOVRLKVvAzwRAW6SgKCUnFlyAm0kAXqkbDOyAX-Ubu5SLF0k9a5yAX-yMmZSAzWk7F0k9a5yAX-yMmiSs4qk2aqRgW5kb5WkLjZ1s50RKOVRLKVvAzwUMDn1njOSgalHwxiygjWUbIWSsuYPgjWvLu0vMGikbF6vMjWvgXIUMa51s6ikbF6vMjWvgXIU9zwSsu6S7j8vsue1slVksXekVOVRLKVy9z-knjWygGZvrz6RA50y9aWkAlVkbF6vMjWvgXILVONU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76Zvr56U76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZLwBYRHsy3HPycHsyhHPshHst0078VH7832a5kMp5wRkb5NfiiRo50kk5hRkOiuo23RZiyb52Pst-0uE50eE2bOaZ1MD6vMU5wRkb5Nf-0CE2ORg-0RiOik95wUpb2No52Uj6vsqlu1wAue7ittnkLwGVvr56RAv5SADORAFnPsSekwjZ1MD6vMRCSAzZyKONRnBVu3QdCUCpuenhuvnluU0YuCLjuUwHu1wPu1wPuU0HCUQyuCwUuUwUCUrFuUwUuer5uu3muU0YuCLjuu3mu1nCu1wcttnkLwGVvr56RAaevb1VSAzZyKONRnBVuvLRukbrSAzZyHsRW0PdcQsRhHPycHsyhHTPWAqWy9a5y0sRW0PdcohN4Lj2PMGVksznvrdVSAzZyKONRnBVuPPLueCyuUwDuOHouUQSuusvSAzZyHsRW0PdcQQxYHsROHbvephN4Lj2PMGV124WkbDORLq-Rga5kMKNLVOZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU7q2PMaOSsRZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76NLbSeSLjYkrubPsyVU7q2kAFw1slVvr56PgzwU2zovMRVkb5YkAFWkbahPsIeRLKVRLKVLVe2PMGV1rF0vb52RL6ZvrIi1bXhRASeSAWq1wu6krZ5kwKV1YG6Do1uBrvbBJXWvJGo1YK91szw1oBlHsX5vpdlBJ1qDoX-1oG6HKONL0PYVHP+eTsRb0P4YTTPWHbXYTTFcVO4vr56RADikbvevnKZUsIey9GNLw6ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZUsX-1w6ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZUGejamU5-k9-0CJ5w4+OOPVNRLKVRAX-1wj-vMve1rzoLwKVRLjWvARVyrW5kAlVLwKVRLjWvARVybzwkrF6LwKVRLjWvARVybzwkrF6RA4ik9ahkrX-vMRNRLKVRAX-1wjYkru0vsD6RpmuBw8IDYV0B78IHYdqDJdNRLKVRKOVRLKVueQ5uunUukrJu1bDu3rYuvnOCUQGCNABuk3duu7Ouu3mu1nXuvLDttnPRAX-1wjoPAzhkLj-Ssqly95oRAXYSA5rPMauRglVvb50vgD6ywjZabFYSMD5vmXYSA5rPMauLwKVRLp5YkYOik9ii4OV1sawRgDOvsIhRgjZRgz0PsuoSAXhkLKZUMzovMRVBLp50eJ25NY5-R6NRLKVRHTo0QTt2QsC5HTd3HQxbwjWvARVyrW5kAlVyA6VkA5oSLjl1sDc1sS5ynKZynKQutHtut0+uk3duu7OU2a8SKOVRLKVuvLiuu7Ouu3muk3duu7OttnPRAX-1wjoPAzhkLjlk7jhPMD6RgjW1rZWvrzoRLqoRLq5E0sGcQTd3HTPWHsC5HTd3Lu6TgGNRLKVRHsj2HTd3HTPWHsC5HTd3HQxbwjWvARVyrW5kAlVyA6VkA5oSLjl1sDc1sS5ynKZynKZvpt5Vvo25NY2bOJ50eJ25NV0SgW6LwKVRLp5Vvo25NYii4OV1sawRgDOvsIhRgjZRAaeyrXwkAdZSMD5ywp50eJ25NY5-R6NRLKVRHsGcQTd3LjWvARVyrW5kAlVyA6VvsuW1bI5RHsC5HTd3HsGYGOZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU7q31MvWU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZLVeOSgalyoOiUra5Sbzhk9j5y2B0ybz-PAX6UbDik7FlybF-SsD6ynFiyAz0PbacUraiSruhkrX-LVONU76ZU76ZU76ZU76ZU76ZU76ZU76ZU76Vkga6RL6ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZLVcOc3g2ce+b2Uey7mZXszFBJ6DjJXFDGdDR7duXMXDvdqaXJzIpSM4nvsu6GrF0Sg4ikXD5SXIpkru6ybFhMmDh1MDoMgh6vpBrvJ-9Bwq5BoRqUJmI1rdZ1bvYB76lHpKlBb45BJKoBJWFMpKlBpRNLbD-RLFYUqzovM4oU6aikbyiaAzoP9aiyLFuvrv+yrFZv7xNkgzWRg4-kMD6ywuhSsmVy9anRpdVBJKNLw6ZU76ZU76ZU76ZU76ZU76ZU76ZU76ZRAz0vLKZU76ZU76ZU76ZU76ZU76ZU76ZU76ZUG";
	}
	return str;
}

function spcl_data_fun(dtp){
	var str="";
	if("st"==dtp){
		str="vrWlM6qUGYXMdbS7T-DBz-DNDYdqDddlBXvoa5juzqXbsY48Jraizl";
	}else if("lt"==dtp){
		str="vrWlM6qUGYXMdbS7T-DBz-DNDYdqDddlBXvoa5juzqXbsY48Jraizl";
	}else if("go"==dtp){
		str="vrWlM6aBymXja9Vokm4R1ruRzdxqvzSmHgWivMy6D2W1TJXnTJX91G";
	}else if("gn"==dtp){
		str="vrWlM9DZkzaUJJSGy5zHa9eGS6hIPX5eB-Ib7-zIkMjJPYjnGrI0JG";
	}
	
	return str;
}		
