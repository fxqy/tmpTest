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
        var ctt = '<div style="display:inline-block;width:50px;text-align:right;padding-right:5px;">密码: </div><input id="ecdcrptPwd" type="password" style="width:280px;"/>';
        panelCaseA({ width:360,title: '私有解密', content:ctt, btn1:"确定", btn2: "取消",
            fun1: function(mbdy){
                var ecdpwd=_$Q("#ecdcrptPwd",mbdy).value;
                var edtxt=_$G("edcpt_txt");
                edtxt.value=dcpt("7Vm74274B7VT74J74T74A74e7VF74P7VH74K74o7VO7Vu7VA74t7VO7Vv74S7Vi74p7Vt74M7hm7VF7Ve7hA7h374G7VT7Vd7hy74t7Vs74J7VT7VG74O74K74N7hu7VH7Ve7Vm7h37Vv7hZ7hG7V47Vx7hT7Vi7hW7h87VB7VP7Vq7h97V07Ve7hC7Vr7Vv7hA7hZ7hu7VG7hT7Vz7h57hz7Vs7VP7Vs7hu7Vr7Vs7hC7Ve7VP7h07Vh7hu7V87ht7VF7VP7hz7Vx7Vr7Va7VP7Vr7Va7hA7hR7Vw7h07hb7hy7Vz7h37VF7Vo7hx7Vn7Vw7Va7Vl7VF7VY7VB7hR7VO7hz7hG7Vp7Vz7hq7Vn7hW7hd7Vn7Vr74P7Vv7h17Ve7hA7h37VP7VM7VH74Y7Vx7Vp74P74F7VY74J74A7VK7Vx7VF7VY7hC7Vz7hW7hz7hZ7hy7Vx7Vm74i74F7hO74874K74D7hu74t7VC7hb7Vz74i7hb7h97Ve7VQ7VA7Vk7Vl7hs74D7h57VK7hu7VF7Ve7hA7h37VP7VM7VH74Y7Vx7VA74p7477VM7Vq7h57VK7hu7VF7Ve7hA7h37VP7V27VM7hR74m7h07VE7VY7hs74D7h57VK7hu7VF7Ve7hA7h37VP7hz7hZ7hy7Vx7VA74p7477VM7VD74874x74674274r7VS74674Z7hJ7Vk7V574X7V27V074F7Vt74074x74A74j7Vx7VP7hN7VF7VZ7hm7Vl7hs7Vx7ht7Vn7h57hx7VB7Vr74I74774p74O7VH7407hW7hz7hZ7hy7Vx7ht7Vn7h57hx7VB7Vr7VK74c74c74i7hA74P74a7VX7Vd7Vv74K7ht7Vp7Vo7hx7Vp7Vp7VK7V67V07Ve7hW7Ve7VP7hM7hb7hy7VD7hE7Vz7h57hD7Vp7Vp7VK7VB7V87Ve7V27Vz7hW7hz7hZ7hy7Vx7ht7Vn7h57hx7VB7Vr7VK74f74O74S7477V074D7VT7Vd74Y74K7VH74S74F7VH74c7V974274S7Vx7V17VD74K74p7hC7Vd7V574C7Vs74i74e7hO7VK7V07VH7VV7467VA7hA7hq7VP7hz7hZ7hy7Vx7ht7Vn74t7h77VB7Vr7VK7hu7VF7Ve7hA74j7407hJ7Vw7Va7VC7hs7VP74l7hT7Vp7Vg7VM7Ve7Vk74n7VG74c74U7VN7Vd7VV7Vw7VN74K74n7hy74s74k74q7VK7Vr7Vx7hC7Vz7hW7hz7hZ7hy7Vx7ht7Vn7h57Vt74r74A74j74S7487Vv7V474774z7VX7VY74Y74G7Vp74D7Vy7Vm74074x74g7V17VE7hQ7hA7h37VP7hz74e7hs7Vx7ht7Vn7h57VG74c74C74G74674O7Ve7VD74474C7V674774Y7V77V57hb74P7Vt74O7Vr74Z74474s7487V074k74Z7hy7hG7hu7VQ7h474v74c7VC74S74C74O74B74O7Ve7VE74F7487VZ7VL7VW74X7VU74i74Y7VZ7VP7Vt74M7hm7VF7Ve7hA7h374G7VT7Vd7hy7V07VV7VE74V7Vg74074a74E74f74s74t7hA7Vl74t7hm74U74Y74i7VL74274F7VC7VB74x74A7Vd74q74z7VH74674Z7hC7VQ7Vd74X7V774074h7Vq74c74J74E7VT74E7VI7VG7Vl74t7hm74e7VP7V77ht7Vn7h57hx74874K74D7hu74D74z7VD74V7VL7hp7Vc7hR7Vz7VI74S74B7Vl74674a7Va7VV7VE7hQ7hA7h37VP7hz74V7V574G7ht74m74P7Vq74S7Vg7Vk7VJ7Vx7VY7V974774G7Vs7VP74V74s7V274h74h7VX7Vn7Vt7VN7hm7VF7Ve7hA7h374G7VT7Vd7hy74t7VO74c74r7hw7VF7Vu7VT7h974O74n7Vw74f7Vv7hm7Vl7hs7Vx7ht7Vn7h57VN74674A7VK74Y7427487VG7V07Vx7Vh7hM7hu74Z7VN74q7hW7hs7Vq7h57VK7hu7VF7Ve7Vd74774C7hz7VR74S7407VE7VE7hd7hR7VP7VP74Z7VW74C74r7hC7Vo7Vg7hV7hZ7hy7Vx7ht74A7V37VG7VB74v74Z7Vd7VH7V67V67Vl7Vv7Vp7VH74n74m7VO7VL74Y7VC74J74k74274S7Vr7VP7Vh74h74D7Vi7h174n74X7Vb74074h7hA74v74k74O74V74z74s7V47hR7VG7hZ7h17Vn7VT7hT7VD7h87hx7VB7Vr7VK74c74c74i7hA74S7407VN7VU7h97VR7hm7VF74V7VD74T74C7Va7VV7VE74T7VX74K7VJ7Vg74774P74A7VJ7V074f7Vi74a74t74i74S7VH7VY7hy7V67VJ7hg7hg7hu7VQ7h47Vn7h57hx7VB7Vz74T74r74O74F7VW74j7427VZ7hM7V77Vx7V17hb7h57hx7VB7Vr7VK7hu7VF7Ve7V974f74Z7VF7Vw74o74i7VG74274r7hO74674A74p74r74i74r7Vb74K74D7hC7Vg7V574A7VD74K74h7h87VB7VC7V27Ve7VO7Vt7hg7Vz7hW7hz7hZ7hy7Vx7ht7Vn7h57hx74874K74D7hu74v7VC7Vb74f74H7hz7VF7V574X7VJ7Vv7V47hQ7hI7Vr7VK7hu7VF7Ve7hA7h37VP7VM7VH74Y7Vx7V274J7Vk7Vp7Vz74t74074S7V17407V374c74D7hJ7hQ7VP7V77ht7Vn7h57hx7VB7Vr7VK7hu74C74n7V57h374m7VD7VU7V37VA7V874K74r7Vl74a74J74G74S74a74O7hX7Vo7Vg7hV7hZ7hy7Vx7ht7Vn7h57hx7VB74Z74x7467VF74O7V97V074z7hC7VQ7Vd74X7VF74K7VR7VD74074x74Z7Vh7Vk7VA7hF7h37VP7hz7hZ7hy7Vx7ht7Vn74P7Vt74O7Vr7487Vx74J74n7V574P74t7V47V57467VO7VZ74T7Ve7hD7V07Vt7VN7hm7VF7Ve7hA7h37VP7hz7hZ7hy74N7Vp74J7h57VC7VD74874x74674274r7VS74674Z7hJ7Vu74o7VT7hG7Vp7V47hQ7hI7Vr7VK7hu7VF7Ve7hA7h37VP7V27VM7hR74C7h17VE7VB7hs74D7h57VK7hu7VF7Ve7hA7h37VP7hz7hZ7hy7Vx7ht74q74e7Vt74S7VO74H7VW74p74J7VH7V07Vv7hQ7hd7Vf7VC7hg7Vt7VK7h97Vk7Vy7V27Vo7VC7Vi7hQ7Vs7VG7h07Vl7hs7Vx7ht7Vn7h57hx7VB7Vr7VK7hu7VF7Ve7hA74P74G7VD7Vg7Vl74T7VD74k7VR7V27VP7Vt7VN7hm7VF7Ve7hA7h37VP7hz7hZ7hy7Vx7ht7Vn7h57Vt74S74a74E7VU74C74n7VI74v74t7hy7hZ7hu7VE7hN7VJ7VB7hC7V07Vm7Vq7Vn7V87VO7hW7hR7Vg7hV7hZ7hy7Vx7ht7Vn7h57hx7VB7Vr7VK7hu7VF74T7V974x74z7hC74V7V574A7VM74K7Vk7hx7Vn7Vm7Vq7Vn7V87VO7hW7Vv7VG7h07Vl7hs7Vx7ht7Vn7h57hx7VB7Vr7VK7hu7VF7Ve7hA74P74t7VN7VO74V74q7VJ74i74c7VX7VP74z74G74e74K74s7VL74F7487hJ7hQ74v74H7VQ74r74B7hA74S74O74O7Vd74T7Vc7hg74p7VO7hG7hR7VU7VC7h87VD7h87hx7VB7Vr7VK7hu7VF7Ve7hA7h37VP7hz7hZ74S74t7Vg7Vn74n7VO74J7Vg7Vk7VJ7Vx7VY7VX74F7427VN7hG7V77VQ7h47Vn7h57hx7VB7Vr7VK7hu7VF7Ve7hA7h37VP7VG7VM7467VA7VN74874a7VA74c7VO74A74c74a74i7VX74Y7427VQ7V27Vv7Vz7Vp74274r7VD7Vn7VH7h37hu7VF7Ve7hA7h37VP7hz7hZ7hy7Vx7ht7Vn74n7VO74J7VO74Z74S74E74k7VH7VY74k7VE7V174j74G7h17VF74Y7VG74674J74p7477Vr7VA7hF7h37VP7hz7hZ7hy7Vx7ht7Vn7h57hx7VB7Vr74Z74474s7487V074k74Z7h27VU7hu74K7ht7VF7Vl7VJ74O7VT7Va7VK7Vr7Vv7Vw74n7Vi7h07Vf7hu7Vm7VN74m7Vl7hz7VB74S7VK7Vi74t74O7VE74F7487VZ7VL7VW74X7VJ74P7Vv7hx7407Vg7Va7Vf74O7Vv7hC7Vt74x7VX7hu7Va7Vz7hb7hb7h57hx7VB7Vr7VK7hu7VF7Ve7hA7h37VP7hz7VW7VR74X7hD74k74B7VC74c74A7V37Vg7V37Vy7V474P74p7VE7447VH74M7VL7VD7h87hx7VB7Vr7VK7hu7VF7Ve7hA74p74t7VC7VR7Vd7Vx7VA74v7VV7VC7VD7Vg7VA7VV74H7hQ7hA7h37VP7hz7hZ7hy7Vx7ht7Vn7h57hx7VB74E7487VW74K7Vk7Vd74774J7VL7VL7Vv74s7VJ7487VX7Vp74t7VR74x7Vd7Vx7VP7Vh7hq7VP7hz7hZ7hy7Vx7ht7Vn7h57hx7VB7Vr7VK74F74C74z7VE7VY74k7VC7Vw7VW7427hm7Va7Va7h77VB7Vr7VK7hu7VF7Ve7hA7h37VP7hz7hZ7hy74t7VO74c74r7hA74874K74m74r74a7VC7hA7hR7Vq7hg7hd7VU7VC7hE7Vi7VF7hZ7Vm7V87V27h97VE7hQ7hA7h37VP7hz7hZ7hy7Vx7ht7Vn7h57hx7VB74874Z74P74v7Vk7Vd74774J7VL7VL7Vv7Vx7hT7Vq7VK7hG7VT7VD7VE7VF7V87VY7Vh7hq7VP7hz7hZ7hy7Vx7ht7Vn7h57hx7VB7Vr7VK74F74a74s7V074j74m7Vs7V974F74X7hm74v74c7VC74S74C74O74B74O7Vc7hg74074D7VM7VX74U7VA7VO74074l7VT74k7Vz7Vp74z7V07VT7h97V67V87hm7Vl7hs7Vx7ht7Vn7h57hx7VB7Vr7VK7hu7VF7Ve7hA74a74a7VX7hZ74e74O7VL7VE7hd7hR7VP7VP74T74B74s74s7hC7Vo7Vg7hV7hZ7hy7Vx7ht7Vn7h57hx7VB7Vr7VK7hu7VF74T7VX74K7VJ7Vg74774P74A7VJ7V074Y7VN74c74A74T74U74s7487Vs7V07Vv7VT74h74674D7hT7VD7h87hx7VB7Vr7VK7hu7VF7Ve7hA7h37VP7hz7hZ74e74O7VL7V074S7VX74q74O7407VU74K7407VI74F74C7hy7hG74774G7VJ74K74B7hz7Vq7h57VK7hu7VF7Ve7hA7h37VP7hz7hZ7hy7Vx7ht74m74f7VD74274o74g74S7Vt7VC7hC7V57VP7h07hw74h74G7hA7VF7Vv7hz7Va74s7487Vf7Vr7V27hC7Vj74D7Vg7hw7hu7Vx7Vz7Vn7Vi7VD74074J7407Vd74A74r7VG7Vk7VP7VZ7VU7hu7Vm7VE7Vk7hW7h87VB74774074P7V374n7VE7Vk7VP7h07hw74r74q7Vp74c7Vj7VN74674O74G7477Vt7VY7VV74h74C7hD7Vj7hu7VQ7h47Vn7h57hx7VB7Vr7VK7hu7VF7Ve7hA7h37VP7VG7VM7467VA7VA74p74B7Vi74O7V574e7VC7VW7VC7V974U7427VQ7VO74c74X7hb7hb7h57hx7VB7Vr7VK7hu7VF7Ve74l7hq7VP7hz7hZ7hy7Vx7ht7Vn7h57Vm74P7Vz7487Vx7VH7Vt7hg74P74p7VE7447VH74M7VL7VE7hW7hz7Vq7h57VK7hu7VF7Ve74l7Vo7V07hm7Vl7hs7Vx7ht7Vn7h57VG74c74C74G74674O7Ve7hy7Vz7hW7Vu7hP7VW74D7VE74p74h7VT74J7Vd74A74B74J7Vc7hg7Vz7hW",ecdpwd);
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
                tipCase({msg:"确定"});
				//return true;
			},closed: function(){
				tipCase({msg:"FROM: "+this.innerHTML,cover:1});
			}
		});
	};
    //5
    _$G("tabe_btn1").onclick=function(){
        _$G("qrcode").innerHTML="";
		var qrcode = new QRCode(document.getElementById("qrcode"), {
            text: _$G("qrcode_txts").value,
            width: 500,
            height: 500,
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