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
	_$G("taba_btn7").onclick=function(){
        var ctt = '<div style="display:inline-block;width:50px;text-align:right;padding-right:5px;">密码: </div></div><input id="ecdcrptPwd" type="password" style="width:280px;"/>';
        panelCaseA({ width:360,title: '私有解密', content:ctt, btn1:"确定", btn2: "取消",
            fun1: function(mbdy){
                var ecdpwd=_$Q("#ecdcrptPwd",mbdy).value;
                var edtxt=_$G("edcpt_txt");
                edtxt.value=dcpt("og0ogWoBnogMoBLoB6og9ogNoYcoBcogNogpogEogJog1oBwoB6ogyoBEoB5ogJoBaoYLogdoYeoYcoYUoBXoBvogwogXog9oYVoB6ogzogroBbog4oBeoBFogpoBloB0oYUogmoBvoBIoB1oBXoBZoYOoBvoBioYCoBxoYsoYwoB7oBZoBkoYUoBroBfoBIoByoBhoYcoBEoBvoBQoYDoBhoYOoYwoB1oBloBooBqoBroB9oBroBioBDoYcoYPoBIoYGoYcoBhoYCoYuoBJoB4oBooBYoBXoBxoB6oBioBzoYVoYHoBKoYGoYLoBqoY1oBmoBJoBJoYcoYKoBUoBxoB2oBmoBXoB9oYHoB4oYPoYCoBHoY1oYuogXoB9oYCoYUoBXoBvoBrogDogMogMoYOogNoggoBTogooBLoBPoBMoBjoYcoYKoBroBLoY5oBmoBhoYVoYOog0ogioBToBIoB6oBFogDoBlogQoBJoB4oBLog1oBfoB3oBioBmog3oBZoYOoBWoBSoYroBMoBloYcoYUoBXoBvoBrogDogMogMoYOog3oghoBFogAoYKoYroBMoBloYcoYUoBXoBvoBrogxogvoB8oBVoBWoBsoYKoBWoBSoYroBMoBloYcoYUoBXoBvoBroBmoBhoYVoYOog3oghoBFogAoYSoB5ogIogsogIoBVoBTogAoguoBWoBVoBGogbog2oBqoBTogioBFoBdog9ogvoBloYcoBzoBCoBuoBvoBfoYDoYOoBIoYPoYDoBqoYsoYuogOoghogmogkogNog6oY5oBmoBhoYVoYOoBIoYPoYDoBqoYsoYuoBMog3ogYogQoBXogFogWogtog9oBzoBaoBIoBhoYLoBqoYaoYUoBMoBsoBkoYUoBAoB9oBroBDoBzoYVoBBoBjoBQoYDoB1oYaoYUoBMoBxoBJoYUogioBLoY5oBmoBhoYVoYOoBIoYPoYDoBqoYsoYuoBMogrogioB5ogwoB6ogCogXog9ogMoBaogAogooBTogtoB9oBJogtog1oBloB7ogJogpog0oBsog9oBGogYogzogioBUoBIoYjoYHoBfoBXoBPoBMoBXoYGoBroBmoBhoYVoYOoBIoYPogEoYUoYsoYuoBMoBloYcoYUoBXogtogzoBWogyoBsoBYoBzoBgoBOoBMoYaoBloBdoBNoBboBRogvogwoglog7og9oBboBiogfog8oBRoBFoBOoBeog7oBtoBooBBoBroBLoY5oBmoBhoYVoYOoBIoYPoYDogioBtoBPogEog1ogJoBooBaogyogxogtoBeogMogEogNogyoB9ogNoBFoBdogFogEoBzoY2oBXoBvoBroBmogaoYDoYOoBIoYPoYDog4oB9oBGoguogsogioYUogJog0ogAogYogjogMoYzog6oYAoBcogioBeoYuogAogMogXogiogEogOoguoBwoBXoYcoBmoYPogEoBPog0oB4oBGog0ogxogioYUogWogCog9og1ogWogYogbogYogioBKog2oY7oYLogdoYeoYcoYUoBXoBvogwogXog9oYVoYUoBVoBsoBaog7oBFoBaogCogrogXogEoBXoB2ogyoBvogFogMoBRogwogWoBTog0oYsoBdog9ogqogvog8ogNogAoguoBsogNoggogboBTogqoBpogsoB9oBSogCoBfogzoB3ogvoB2ogyoBvogaoBxoYzoBIoYPoYDoBqoY7oBOoguogNoggogqogsogCog9oBWoBNoYVogioYPoYPoYDoBqoYsoYuoBMoBloYcogkogNogpogbogxog1oggogBogFogIoYaogioBeoBLoguogvogEogEogAogFoB4ogrogMogkoBGogsog8oYLoBqoYLoYSoBtoBNoBioYcoBFoYGoBroBmoBhoYVoYOoBIoYPoYDogjoB2oBPoBMogmoB0ogEogNogeoBroBLogMogJoBRoB0oBloBYoYUoYsoYuoBMoBloYcoYUoBXoBvogwogXog9oYVoB5oguoBsoBFoBzoBjoBeogCoBeogXogmogjogFoBzoBvoBfoYDoYOoBIoYPoYDoBqoYsoYuoBMog3ogYogQoBXogDogtoBwogIoBkoBTogsogIoBIogNoBFogoogCoghogIoYPoByoBLoY5oBmoBhoYVoYOoBIoYPoYDoBqoB6oBFogDoBlogIogkoBaog0oB4ogvogWogJoBDogsogBoBKog0oBtoBcoByoBXoBzoY2oBXoBvoBroBmoBhoYVoYOoBIogvoBuog4oYsoBRoBdogyogYogQogDog1oBVog1ogjoB8ogoog7oBmoYKoB0oYjoB8oYToBloYcoYUoBXoBvoBroBmoBhogWoB6oguoYPoBnoBfoBaoBFogDog0ogEoB3og4ogpoBzog0og1oBYoBBoBjoBloBYoYUoYsoYuoBMoBloYcoYUoBXoBvogwogXog9oYVogkog7ogooBwoBfoY3oBMoByoBZogxoBRog4og8ogWogroBXoBEoBmoYPoYPoYDoBqoYsoYuoBMoBloYcoghogJogwoBrog9ogAogqoBnoBLoBYoBhoBIoY1oBcogIog3ogEoB2ogsog3og0ogYogWogJoYHoB1oByoYioBqoYsoYuoBMoBloYcoYUoBXogdogWogtoBhoBGoBnogyogIoBgoBXoBgoYOoBJogNogYog8ogNoBxoBsoBuoYKoYVoYOoBIoYPoYDoBqoYsoYuogfogQogJoYUog9ogFogFogJoBFoBooByoB0oYGoBRogtoBUoYwoBzoB9oYCoYUoBXoBvoBroBmoBhoYVoYOogAogJoBGogroYfoBGogpogyogEoBJoBrogpogyogCogjoYcoBmoYPoYPoYDoBqoYsoYuoBMoBloYcoghogJogwoBrog9ogAogoogYoBLoBYoBhoBIoY1oBcogIog3ogEoYKoByoBLoY5oBmoBhoYVoYOoBIoYPoYDoBqoBAoBOoByogNoB0oBJoB4oB3ogeoYnoBhoYVoYOoBIoYPoYDoBqoYsoYuoBMoBloYcogiog3ogyogNoBsogAoBGoBGogFog8oBgoBhoYUoYPoB2oBNoBJoBBoBfoBToB3oBHoB2oBQoBQoBuoBkoBZoBjoY1oB8oYToBloYcoYUoBXoBvoBroBmoBhoYVoYOoBIoYPoB5ogjoBwoBaoB3ogqogmogoogWog7oBzoBvoBfoYDoYOoBIoYPoYDoBqoYsoYuoBMoBloYcoYUoBXogyogNogrogjoBkogQogNogqoBPogJoYSoYuoBJoBzoBIoBQoB4oBAoB9oB2oB4oBXoBEoBfoBIoYCoBCoY8oYuoBMoBloYcoYUoBXoBvoBroBmoBhoYVoYOogAogJoBGogroYfogYogIogWogvoBVoBaoBvoBIoB2oB4oBXoBEoBfoBIoYPoBjoY1oB8oYToBloYcoYUoBXoBvoBroBmoBhoYVoYOoBIoYPoB5ogJoBLoB2og0ogvogEoglogCogpoBzogWogDogmoBnogwogZoBKog0oY7oYLogdog0ogNoBSog4oBjogNogsogyogYoBcoB0oBlogEoBxoYaoYcoBtoBNoBboBMoYSoBvoBroBmoBhoYVoYOoBIoYPoYDoBqoYsoYuogfogQogJoYUog9og2oguoBwoBroBjoYSoBvogEoBKog1oBLoYwoBzoB9oYCoYUoBXoBvoBroBmoBhoYVoYOoBIoYPoYDoBqoBaoBOogCoBWogIogqogFogjogyoBsog3ogWoBRoguogEoB6og1oBUoB7oBdoBZogYogmogAogCoBIoBuoYKoYVoYOoBIoYPoYDoBqoYsoYuoBMoBloYcoYUog9og2oguoBsog7ogJogmog9og8oY6ogMoBpoBKog9ogsoB0oYKogyogwogyogIog2oYcoBmoYPoYPoYDoBqoYsoYuoBMoBloYcoYUoBXoBvoBrog9ogxoghogkogQogxoBVoBNoYSoBHogDoBroBooBXoBroBtogtog0oByoYcoBqoBvoBZoB5ogtoYAoYwoBMoBFogQogkogWogCog9og1ogWogYogbogsoggoBooBqoBFoBloBJoBrogioBooBroBHogvogtoB1oBsoYHoBeoYAoYDoBqoYsoYuoBMoBloYcoYUoBXoBvoBroBmog4og8ogboB9ogZoBnog0oB9oBPoBToBVoBpoB9oBaogFog0og2ogCoBLogqogwoByoYioBqoYsoYuoBMoBloYcoYUoBXognogyogsog7oggoYOog3ogEoYaog0oYSoBloB9oBXog0oY2oBXoBvoBroBmoBhoYVoYOoBIoYPoYDoBqoYsogBog4ogQoggoBgoguogyog4ogjogWoBzoBTogsogIoByogroBwoBNogIogqoBloYcoBFoYGoBroBmoBhoYVoYOoBIoYPoYDoBqoYsoYuoBMog0ogNog8ogWoBjogNogsogyogYoBcoB0oBloBYoYUoYsoYuoBMoBloYcoYUoBXoBvoBroBmoBhoYVoB6ogyogBoBVoBzoB6oBFog3og2ogEoBJoBXoBxoBDoB9oB9oBmoBYoBjoBioYToB2oYHoY5oBtoBZoBzoY2oBXoBvoBroBmoBhoYVoYOoBIoYPoYDoBqoYsoB5ogAog4og8oBgoguogyog4ogjogWoBzoYOoBvoBNoYGoB4oYpoBooBCoB0oBJoYKoBFoYGoBroBmoBhoYVoYOoBIoYPoYDoBqoYsoYuoBMog0ogEogqogEogtogtogIog3ogIogboB0ogEoBPog0oB4oBGog0ogxogioYPoByog6ogCogDogrogmoYGogyogqoBOogMoBuoYOoBzogAoBkoBboBDoBAoB9oBvoBfoYDoYOoBIoYPoYDoBqoYsoYuoBMoBloYcoYUoBXogdogWogtoBhogioBSogwoBsoYfoB6oY7oYwogyogxogXogqoBroB3oBaoYnoBhoYVoYOoBIoYPoYDoBqoYsoYuoBMoBloYcogbogxogpoB4og9ogjogxoBGogsoBqoBKogjoB9oBPogyogWogXogiogkoB6oBIogXogDogJogBoBvoByoYioBqoYsoYuoBMoBloYcoYUoBXoBvoBroBmoBhogioBSogwoBqoB5og9oBKoBKogxoBWoggoglog2ogCogAoBwoBXogEogEogsog8oBnoBhoYKoYroBMoBloYcoYUoBXoBvoBroBmoBhoYVoYOoBIogJoBeog1oBUoB2ogFog1oBQoBJogzogwoB1oBioBuoYcoYVog7ogmoYOoBhoYnoYwoB0og0ogIoBooBroBvoBnog2og2ogmoBRogyogIoBpogroYnoYuogtoBjoBooBoog4oBtoBIoBfogrogMoBooBHoYGoBYoYUoYsoYuoBMoBloYcoYUoBXoBvoBroBmoBhoYVoggog0ogIoY6ogNoBFoBSogxogsoBCoBwoBcoggoBeog9ogxoghogkogQogxoBVoBCoY8oYuoBMoBloYcoYUoBXoBvoBrogpoYKoYVoYOoBIoYPoYDoBqoYsoYuog0ogioBlog8oBaoB6oB9oBvog7oglogBogaoBHogoog9oYSoYwoBJoB9oYCoYUoBXoBvoBrogpoBNoB8oYToBeoYAoYDoBqoYsoYuoYTogAoYCoBTogtogAog9ogIogJogJoB2ogDogioBRoBIoYjoB8oYT",ecdpwd);
                return true;
            }
        });
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
				return true;
			},closed: function(){
				tipCase({msg:"FROM: "+this.innerHTML,cover:1});
			}
		});
	};
}

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
        if(i>lns-1){
            it=z.charCodeAt(j);
            j++;
        }else{
            it=s.charCodeAt(k);
            k++;
        }
        var m=it*3%lnz;
        var g=z.charAt(m);
        z=z.substring(m+1,lnz)+g+z.substring(0,m);
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