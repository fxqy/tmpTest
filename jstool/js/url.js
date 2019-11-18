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
                edtxt.value=dcpt("3tG32M3273tF32132i32w3tQ3ns32432u32a3tj3tC32h32032i3tw3tz32j32a3t73nT3tb3nT3n73t43tq3tv3223tU32A3nq3to32o32m3nb32j32F32V32n3ns3tM3t03t93nf3nM3td3tv3tF3n63tF3t83t33nR3nA3nq3tp3n93tO3tq3tG3nS3nC3t93nq3n63t13tq3n83ti3tB3t83n13nI3tN3td3ta3nA3nc3nr3tv3tj3nF3tH3tu3t33nU3nQ3nj3tk3n93tU3tw3tY3nM3nC32n3nw3nO3ts3tq3nD3ts3t53tK3n13nb3tV3tZ3nC3nA3tE3nx3tp3tE3nF3tS3t53td3nP3nQ3t33t43n732Z3tb3ta3nM3ne3tI3nq3tC32432m3nZ32k32K32z3tF3t73283t03tN3nf3nM3nx3tQ3nb3n63t63tu3nS3tI32a3tm3tv32t32o32U3tv3tQ3td3tU3nb3t83tU3tM3n13te32i3tP3ny3nv32M3nf3nC3nf3nY3nr3tF3tE3n632y32s32s3nP3tL3t732F32l3tf3tl3tv3nM3ne3tI3nq3n43ts32H3tw3to32i3tN3t23nH3t432p3n63nf3nY3nr3tF3tE3n63t63tu3nS3nP3nA3tH32H3tU32y3tW32C3tm32n32c3tO3t332R32U3nw3tL32032O3tU3n832832K3tL3tD3tr32h3tO3tP3nO3t73tp3tB3nX3nw3no3tk3n73t43tq3tv3nM32N32p3t73t932F32b33S3ti3ta3tK3nj3ns3tN3t03nC3nf3nY3nr32X32i3te3t632j32n3t93203nb32i3n73tp3t13tv3nT3nW3tI3nU3nO3ts3tU3n83ti3tG3t63nj3nH3tw3tZ3nC3t23nJ3tg3tF3tI3ne3t632V3tF3n33nA3no3tk3n73t43tq3tv3nM3ne3tI3nq3t832R32I3tU3tC32q32V3tr3t132h32q3tf32g3tS32n32l32G3tC3tz3tS32n3tm3tS3n132Y3te32p32832m3tr3nc3tY3nj3nC3tv3263ny3ti3nC3tK3nj3ns3tN3t03nC3nf3203nR3tF3tE3n63t63tu3nS3nP3tL3t83tv3tc3tc3t93tO3ny3tD3tH3nm3nA3ty3t73nG32k32K32z3tF3t73283tk3tN32B3tU32N3tr32R3tI32M3tM3t33nH3nQ3nc3nT3n73t43tq3tv3nM3ne3tI3tG3tv32132E3t932j3ti3t73tY3to3283tM32232g3t932432P32o3tY32G32M3tT3nX3nw3no3tk3n73t432J3ta3nM3ne3tI3nq3tM32F32U3te32j3243tK3tY3to3283tT32a32g3n532F3t232p3tq32e3tu32k3t832a3tX32h32l32e3tW3tG3ne3t03t03tR3tm32R32G3t932v32P32v3nj3t632G32o3tL3tW3tm32i32B32I3t732M3t63tB3tc3nw3no3tk3n73t432A32I3tL3ne3tR3t23nA32q32y3tj32432v32P3tb3tR3tN3ti3tQ3nJ32g32V32832H3tU32e32z3nS3tw32a3tG3293tW32w32932X3nW3tQ32p3tf3nx32832z3tH32632432O3t03tC3tb32V3nb3tW3nf32F3tQ3nb3n63t63tu3nS3nI3tx3ty32H3tC32e32p32m3tJ3nc3tY3nq3tA3nx3to3nZ3ti3ta3tK3nj3ns3tN32G3tQ3203tG32a32732Z3t732U32p3tg3tF3203tO3293tW32w32932X3233nJ32H3tG3tH32832z3tv3tw3ta3tO3nQ3nR3tw3to3nD3tE3n53nr3tF3tE3n63t63tu3nS3nP32N3tv32Y3n732v3tW32e3tf32g3tI3t33to32732z3nw3tF3t83nc3nj3ns3tN3t03nC3nf3nY3nr32X32i3te3t632F32s3nc3tr3n132w3ty32e32l32m32t32n32c3nR3nI3tC3tt3nZ3ti3ta3tK3nj3ns3tN3t032B3tc3tT3nr32732w3nQ32G3tG32B3tG32d3tB32I3tr32m32f32R3233nc3tY3nb33L3ts3to3nZ3ti3ta3tK3nj3ns32j32K3223nf3tS32u3tD32k3np32832P32Z3tK3tJ3tG32j3tr32v32y3tH3nA3t03t03nq3n43ts3to3nZ3ti3ta3tK3tS3t43283t03tS3tu3tJ3tT32C32R3tI32t32z32Z3nI3223tY3tR3nJ3tp3tH3tD3nk3ne3tI3nq3n43ts3to3nZ3ti32G32V3tr3ns32w3tp32n3tc3tT32u3283tD3tY32C3t632E3tp3nW3nM3tH3nX3tf3tl3tv3nM3ne3tI3nq3n43ts3to3tm32k32F3tK3tL3tO32u32E3tN3nQ3ti3tt3tv3213tq32Y3tS32n3tv3nQ3nO3tU3ns3t43tq3tv3nM3ne3tI3nq3n432932v3t73ti32q32H3tc3t63tM3tN3tP3nr3nM32u32w32p3tI32n32q32B3t83tY3tz32M3n93tI3tb3ta3nM3ne3tI3nq3n43ts3to3nZ32732032z3nj3t432532E32a3tu3ne3tO3tO3tu3tY32q32I32a3no3nT3nc3nT3n73t43tq3tv3nM3ne3tI3nq3tC32432m3nZ32R32q32j3t93ny3ti3ty3nb3nA3tJ32u32A3tu3n83tA3nW3nS3nP3nA3no3tk3n73t43tq32C32332g32j3n73te32C3293tv3tC3tB32O3te3tm32R3td3td3nq3nY3nr3tF3tE3n63t63tu3nS3tU3tb3tm3tk3tL32C32I32e3t03ny32B3nR3n632Y32v3tm3263tB3tZ3tn33x3tN3t03nC3nf3nY3nr3tF3tE3tR32z3t632V3nc3t53n73tw32B3nL3tq3tv3nM3ne3tI3nq3n43ts3to3nZ3ti3ta32j3tc3t43253tP32B3tc3tb3253283t93nF3tf3tH3tK3n13t03np3tm3tE3tR32n3te3nD3ta3tA3nY3nW3t93tq3ny3nr3ta3tK3nj3ns3tN3t03nC3nf3nY3nr3tF3tE3tm32y32I3223nj3tW3t132I3tC32R3tR3tj3tg3n43tI3nq3n43ts3to3nZ3ti3ta3tK3nj3ns3tN32K3tA3tb3tL3t032X32i3tp32U32P3tv3nP3nQ3ne3t73nS3tp3t93te3nx3nL3tX3nU3n93t73tq3ny3nr3ta3tK3nj3ns3tN3t03nC3nf3nY3nr3tF3tE3tM32m32732l3nj32N3tv32O32n32w3tW3tv3ne3nS3tf3nC3nM3tY3tU3ne3t73tB3t13nV3ns3tN3t03nC3nf3nY3nr3tF3tE3n63t63tu32k3tG32d3tV32I3tW32w32e32A32n3nc3213tX3tp32632U3tz32O3243tk3nC3ty32O3283tX32t3nb3tL32Y32o3tw32j3t63tB3tb3t33n93t73nr3tp3tH3tD3nk3ne3tI3nq3n43ts3to3nZ3ti3ta3tK3nj3ns32j32K3223nf3tJ32t32y3t93nv3233t63t33tI32a3tM32M3n93tI3tb3ta3nM3ne3tI3nq3n43ts3to3nZ3ti3ta3tK3nj3tj32Z32I3nT32B3tL32432Y32Z3np32732Y32a3t93tx3t132j32232i3tW3tG3tm32l32Q3te3n63tC3tt3nZ3ti3ta3tK3nj3ns3tN3t03nC3nf3nY3nr32e3243tC3tp32j32Z3tX32t3tz3tO3tC32132732m3tL3td3t83tH3tM32F32z3tj3ts3t83nc3nj3ns3tN3t03nC3nf3nY3nr3tF3tE3n63t632j3203tY32E3tV32C3233t83tW32p3tL3nD3t83nQ3n63tG32Y3tH3tv3tB3tp3n13nG32O32G3nr3nA3nY3tI32j32R3tw32732z32V3tG3tW3tU32q3tU3ty3tq32e3t03nC3tM3t93n83tZ3tQ3to32j3tZ3tM3n13nC3nQ3t03nC3nf3nY3nr3tF3tE3n63t63tu3nS3nP32g3t832M3nD32832932e3tf32n3203ti3tl3233tb3tM32q32P32j3tq3tm32R3tH3n63nf3nY3nr3tF3tE3n63t63tu32G3tG32t3tC32q3n732832R3tH3tJ3td3tT3ne3nI32y3tt3nZ3ti3ta3tK3nj3ns3tN3t03nC3nf3nY3nr32A32w3tq32w3tG32P3tF32t3ty32q3tB32I32O32X3tG3tX32C3th3to3263t83nG3te3nC3tK3nj3ns3tN3t03nC3nf3nY3nr3tF3tE3n632m32Y32E3tv3tt3tG32O3tc32q32Y3tH3nA3t03t03nq3n43ts3to3nZ3ti3ta3tK3nj3ns3tN3t03tf3tb3tm32i3tY32p3tq32p32132a3nc3nA3nq3t13nL3tM3t93te3nJ3nS3tA3nm3nm3tj3t73nP3te3nC3tK3nj3ns3tN3t03nC3nf3nY3nr3tF3tE3n632M32j3263tw3tt3tf32P3tD32m32O3tr3nM3nC3tW3nc3nM3tH3ty3n93tp3tF3tE3tn33x3tN3t03nC3nf3nY3nr3tF3tE3n63t63tu3nS3te3tJ3tU32h3tc32j32O32m32t3223t13tR3tm32R32G3t932v32P32v3nm3nv32M32G32B3tQ3tW3t032I32v3tR32w32w3tg3nz32k3nj3tp3nL3tp3t93tj3tg3n43tI3nq3n43ts3to3nZ3ti3ta3tK3nj3ns3tN3283tf32g3nY32N32O32H3nQ3tv3tD3tg3no3tx3tM32j3233t63tH3tD3nk3ne3tI3nq3n43ts3to3nZ3ti3ta3tK3nj3ns32I32i32a3t33tS32i32Q32v3tI3tp32832P3tG3203t832O3tJ32U3243tr3ne3tU32b3tf3t13tZ3tc33S3ti3ta3tK3nj3ns3tN3t03nC3nf3nY3nr3tF32z3tz32C3tG32k3tm32u3t132q3nD32q32e32M3tx32n3tT3nw3tI32132z3tv3283tB3t13nV3ns3tN3t03nC3nf3nY3nr3tF3tE3n63t63tu32k3t832a3tX32h32l32e3tp3tr3tc32n3tM3nw3ny3tZ3tH3tH32z3ti3tE3t33nZ3t632G32l3nT3nM3nr3tS32I3tY32Y32P3223tm3tJ3tI3tC3n732p3tW3tG3nQ3tT3tM3nw3nX32P32m3nH3tU3tB3t13nV3ns3tN3t03nC3nf3nY3nr3tF3tE3n63t63tu32i3tI32d3n132I3tr32p32O32y3tk3tO32E3t03nA32Y32R3tp32M3tJ32p3tx3nC3nQ3t03nC3nf3nY3nr3tF3tE3n632D3nW3nS3nP3nA3no3tk3n73t43tq3213tX3nc32C3nW3nA3tR3tO3tM32q32P32j3tq3tm32R3tp3ny3nA3tl3nR3tF3tE3n63t632U3tB3nI3nT3nc3nT3n73t43tq3tv3nk32N3t03tz3t132R3273tv32432v3tW3tb3tH32I3ti3nD3tE3n5",ecdpwd);
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
        txtv.value=str_md5(txtv.value);
	};
	_$G("tabc_btn4").onclick=function(){
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
    p=z.substring(0,33);
    var r="";
    for(var i=0,j=0;i<len;i++,j++){
        if(j==p.length)j=0;
        var itm=s.charCodeAt(i)+p.charCodeAt(j);
        r+=pfxChar(ecpt2Str(itm,z),fxn,z.charAt(0));
    }
    return r;
}
function dcpt(s,p,n){
    var fxn=n?n:3;
    len=s.length;
    p=p?p:"";
    var z=strCharactCode(p);
    p=z.substring(0,33);
    var r="";
    for(var i=0,j=0;i<len;i+=fxn,j++){
        if(j==p.length)j=0;
        var itm=s.substring(i,i+fxn);
        r+=String.fromCharCode(dcpt2Num(itm,0,z)-p.charCodeAt(j));
    }
    return r;
}

function ecpt2Str(o,z){
    var a = Math.floor(o/z.length);
    var b = o%z.length;
    var c = z.charAt(b);
    var r = "";
    if (a > 0)
        r=ecpt2Str(a,z);
    return r + c;
}
function dcpt2Num(s,t,z){
    if(!t)t=0;
    if(t>s.length-1)return 0;
    var a=s.charAt(s.length-t-1);
    var b=z.indexOf(a);
    return b*Math.pow(z.length,t)+dcpt2Num(s,t+1,z);
}
function strCharactCode(s){
    var z="mS2TAVsIhWzLx8ud10g9OtGDC5MqwivBJabRjQrpYlHkZ4PUfKEXcNy6oF3e7n".split("");
    var len=z.length;
    for(var i=0,k=0;i<s.length*3;i++,k++){
        if(k==s.length)k=0;
        var itm=Math.abs(s.charCodeAt(k)-s.charCodeAt(s.length-k-1));
        var md=itm%len;
        z.unshift(z.splice(md,1)[0]);
        z.unshift(z.splice(md,1)[0]);
        z.push(z.splice(md,1)[0]);
        z.push(z.splice(md,1)[0]);
    }
    return z.join("");
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