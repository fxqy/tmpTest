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
        var ctt = '<div style="display:inline-block;width:50px;text-align:right;padding-right:5px;">密码: </div><input id="ecdcrptPwd" type="password" style="width:280px;"/>';
        panelCaseA({ width:360,title: '私有解密', content:ctt, btn1:"确定", btn2: "取消",
            fun1: function(mbdy){
                var ecdpwd=_$Q("#ecdcrptPwd",mbdy).value;
                var edtxt=_$G("edcpt_txt");
                edtxt.value=dcpt("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",ecdpwd);
                return true;
            }
        });
	};
	_$G("taba_btnspecial").onclick=function(){
        var ctt = '<div style="display:inline-block;width:50px;text-align:right;padding-right:5px;">密码: </div><input id="ecdcrptPwd" type="text" style="width:240px;"/>';
        panelCaseA({ width:320,title: '专用解密', content:ctt, btn1:"确定", btn2: "取消",
            fun1: function(mbdy){
                var ecdpwd=_$Q("#ecdcrptPwd",mbdy).value;
                var edtxt=_$G("edcpt_txt");
				dec64("OjfF5Er7gACB9z0ZJJf4yq8zWk8BW39YGkG0yZzTaJ3t91CXyUzzGV", krct(ecdpwd),function(res){
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
		var imgbs="data:image/gif;base64,R0lGODlhGAAYAKUAAAQCBISChERCRMTCxCQiJKSipGRiZBQSFJSSlFRSVOTi5DQyNLSytHRydAwKDIyKjExKTMzOzCwqLKyqrBwaHJyanFxaXPz+/Dw6PHx6fGxqbOzq7Ly6vAQGBISGhERGRMzKzCQmJKSmpGRmZBQWFJSWlFRWVDQ2NLS2tHR2dAwODIyOjExOTNTS1CwuLKyurBweHJyenFxeXDw+PHx+fOzu7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCQA2ACwAAAAAGAAYAAAG/kCbcEg8DCIhonJJyXyEH4XCIAxVnsshLQJKRhUjW6d12XSyQkukVbF9qZrLZYAWAl5rwXekqskXSyEZAgA2MxERDF8yCHIxQh0kKkIrHCgIEgAILRESMS8kERc1FAAHBKiFJhysKCkEHiOFQgIMLCqoIQQwQy4lrBwyaB25MAdKABAiKDNoADAEJLM2Khgn1gK8dR0qDt0OACsi4+MZdTbQugQhMCXjE+MB59C5uxR6AhACFOfcKv8qptmgoMFDsywdoDlYosLEgxUrqGTBhYrCmSoeEEBsQECACzvUQhwgsU7XMRsJVjwIgAEAixQNDsxIQGLBjJYJUWkjMYLFUEIKKVJoUGHBwgkJM2YkoUZh0hIZQSU4sCADQ4cZAmYsrOMiRQYL1CyYwIAu68c6EBo04De1qg0AJ24KVHKABSAxMowKUSGBxLklGFjwqxMEACH5BAkJADQALAAAAAAYABgAhQQCBISChERCRMTGxCQiJKSipGRmZBQSFOzu7DQyNJSWlFRSVLSytHR2dNze3AwKDIyKjExKTCwqLGxubBwaHDw6PLy6vMzOzKyqrPz6/JyenFxaXHx+fAQGBISGhERGRCQmJKSmpGxqbBQWFDQ2NJyanLS2tHx6fOTi5AwODIyOjExOTCwuLHRydBweHDw+PLy+vNTS1Pz+/FxeXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAb+QJpwSDwwYCCicjmavISvS2wjJHiey2HLYiLQBJfLjNaxOC6ArHBlsUC+0vEMhcKohR1N+/WKiQ8XDg4sSwQiFWkkbRoffhscdG80CRoiQhwhIQEgABwwFiAKBSMmKBcjFAoZMjIUNCsFmQUGBCcbaUIVJR8iCKwyAx1CEh6ZIQtqLL8ILbhCAAKiJGoHKBkKB0MpLAks3K53KQQpD+QAJyrp6ZZ3LgQgBO8UHCoQ6i13NBTx/C4jFS8qCByRr0OKgweFDaGwoEUCNR0IuMim5MGHBhiRZREXj4JCGi4mnMA4w0WCJEM6jHgw4h08ihdbiEgAoMKGDSkkVDiwzwVOgA7uJAo5sECAsBE3VzzgA6JlUyEpKKTIEuGmi6UCJADg9zELgZsfyAh4keQAPHBqSNwk2GGsBBoA3LnIl6ICyg4vBNyVmm+JBBIU1QQBACH5BAkJADMALAAAAAAYABgAhQQCBISGhERCRMzKzCQiJGRiZKSmpBQSFPz+/DQyNHRydFRSVNza3JyenLy6vAwKDIyOjNTS1CwqLGxqbBwaHDw6PHx6fFxaXExKTKyurOTi5MTCxAQGBIyKjERGRMzOzCQmJGRmZKyqrBQWFDQ2NHR2dFRWVNze3KSipLy+vAwODJSSlNTW1CwuLGxubBweHDw+PHx+fFxeXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAb+wJlwSDw0RASicnkokIQVh2MhfMUqS2LIgHrNog7TjCP6pABZoQdlsHylYtMn0kgLARCDgQQ2qVIRAxJLLxcJaC0iKBAwUgslczFCEhAXQhMQEC4EAAp6BAEQIwYRGwcjAQwaJyMzApkrHSYvLgtoQiSMMhGrGhkcQgQKmRAeaRInqxEywEMAJDEdLWkHGwwBB0MPIBLcEq12BCEXJhcLIyEl6uqWdgMI8PAfEyUKFgolMnYzEfHwDAdaJBjYIpsdWi4STkgy5IAAE4OyAHhB4MGSByQuaISRRgWBjxSazRhRjhyGEQQoEOEw4gFKECAIGMxIDgQAEDAEcKDw4gFOBQIvAHCgCFSICgEtgB3ISeLBxxEvwamgoCJLgpwjboLI+pGAyCwUciaYAeDpjAMxVdrBCaMqBwJbyVL0YueBBLVvCYDbWXWfkhE99wUBACH5BAkJADMALAAAAAAYABgAhQQCBISChERCRMTCxCQiJKSipGRiZBQSFFRSVDQyNLSytOTi5JSWlHRydAwKDExKTMzOzCwqLKyqrBwaHFxaXDw6PLy6vIyKjGxqbPz+/JyenHx6fAQGBERGRMzKzCQmJKSmpBQWFFRWVDQ2NLS2tOTm5JyanHR2dAwODExOTNTS1CwuLKyurBweHFxeXDw+PLy+vIyOjGxubAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAb+wJlwSETFTBOicnlArIQJUOEhbMlGS6IodkmOQCAqx2SRALLCSiyGmUWns5TFEkMLAaf1Kip5oCQWJB9LEw8RQhFrG18FHRgWMA1CHwEiQiInJy4TAAZcLRsbIQwWLAcHGxCqBzMVmScNDyEuAmdCKwEjFDAQKhAFti0uGw0nFWgfvRADFLZ3KxgNg1kHJBAbKEMOLdwtBNl2LRQp5A8HKRTp6R12MwoL8PAKCBQiLuvtFvHwMA4f///AoSHg4p4LES2KrHiRJEuEEgsMOBPC4YOAFwIOZXGRoaOHF0MOVMD4IgGKAwJnOAgRokDHjheEEMBYgVMIAgQ43OQwgUBJCwAvPHQsccbBCgJnOOBsoZQASwIfWHWCQSGLtw8oAHxwCgBqznYocCZpGmLGAbHtbn5V+qEsAG8J7ehkNaNrW4oTUrYTsrNdEAAh+QQJCQA2ACwAAAAAGAAYAIUEAgSEgoREQkTMyswkIiRkYmSkpqTk5uQUEhRUUlQ0MjR0cnSUkpTc2ty0srT8+vwMCgxMSkwsKiwcGhxcWlw8Ojx8enyMjozU0tRsbmysrqzs7uycmpzk4uS8urwEBgSEhoRERkTMzswkJiRkZmSsqqwUFhRUVlQ0NjR0dnTc3ty0trT8/vwMDgxMTkwsLiwcHhxcXlw8Pjx8fnz08vScnpwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG/kCbcEhsWQImonLZCo2EkstFJpwUXktiJLVIvqQCGwBk4ACyQsUidbJFL2GBwWBBCwGFVEryFkAYcwRLCBUwQgR6VwwXFTEGJQWHKS5CIRQUIUkJelYZCAFlLQgZHh4rCG4nMZcoCC4VRBILCi4apR4XH0ImERSqWFkEtxouukMABAknhlktBisZLUMfJtXV0nYTJyERISEIKAIyMgICwGgGGCLqGAYV5OMyCnY2JesD6xofE/z8EPQwfPk6MYHIPgLYlowYMODEGSIATBAgMCJJlhMdVHRwgGIIBIoUYUBAkNAGCg4hLmhUoaKODYkEYEiDSY3AhwEsDiBQ4CDjTIAz1Eyc+Rjzw0QTNViwYCAmgYEEWSaMGNECwAgCJibQYPHgiZ0WEwsaxWrDgtIV9GjaGJsEQgMWG4xloYbNaEUhFRxQoLdEotwsQQAAIfkECQkANgAsAAAAABgAGACFBAIEhIKEREJExMLEJCIkpKKkZGJk5OLkFBIUlJKUNDI0VFJUtLK0dHJ01NLUDAoMjIqMTEpMLCosrKqsbGpsHBocnJqcPDo8zMrM/P78XFpcvLq8fH583NrcBAYEhIaEREZEJCYkpKakZGZk5ObkFBYUlJaUNDY0VFZUdHZ01NbUDA4MjI6MTE5MLC4srK6sbG5sHB4cnJ6cPD48zM7MvL68AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABv5Am3BIfIwoJaJy+TjFhKFUSiEsoSRL4kmjWdlCjdTJBkhBAoAslCv4SscXFouiFgJa3FhU/AiwIE9KKxJJNhUaKC0SYQoLECwaQjEjbTYuAjMKXjNcCAtdDSwBKysGBSIFXjEzmDMSKzMuRCEGEiAWIrloQisKmAKBSzGnIhYgaUQlFzMIaisJBQYPQwAPK9bXdTYlEawzMysxBOMhBBXaCRs1G+wm5OPm2jLs9DIepPge2hUt/f2FQh5UIOAlC4F1C5BRKwEPoJIWDmjQEEEloB4CIWI8QFBQnwsIMwLQiEgDRpVyBLeN8/CCRAQGHWj0EhFxQxoPFRDcHCcuQ0eGAh8OdOBApoWFCFnEhVhBwGeBEiqEhtDGNF4MnyJswDhwQIY2hgT0Nc2Q9UGNDg70qfFQopmNqz+FKJDRQpsSABMOVFITBAAh+QQJCQA1ACwAAAAAGAAYAIUEAgSEgoREQkTEwsQkIiSkpqRkYmTk4uQUEhSUkpRUUlQ0MjTU0tS8urx0dnQMCgyMioxMSkzMyswsKiysrqxsamwcGhycmpxcWlw8Ojz8/vwEBgSEhoRERkTExsQkJiSsqqxkZmTk5uQUFhSUlpRUVlQ0NjTc3ty8vrx8fnwMDgyMjoxMTkzMzswsLiy0srRsbmwcHhycnpxcXlw8PjwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG/sCacEjcsBQqonK5+YyEFgzmI0R0CEviR0B71GLSSQ0wc1QAWShN4KpFS+KFw4FJCwGLNQI8m2xgcxZMI0k1CDQ0GWBTAnMRUCUZUAQEFhs1LlwPNB0PZRUPKgoQKxBJCAQflCMPEzFEBAoENAErtjBoNRsxqh8IaSOkKwE0uUMqMQReWSopEArLY6GhKpd2CAIZJtrIlKmVdjUcBeTkHJSqlIJ2EOXkEBsq8vLWaRYdEQL5v0MPFgSFlsQAUaCDsTsjvD3JEqGBwwRihDzglSqGhQQh7tSYkMKEgxcoHGasMSKdCgAFNGj4cEECjQItUCCYQMJhATQbLCBAQ0PlT4EPJw5ASMGghYMxHSAIWAJAgkoDFg6cSDBiAAMJr+zMUCkBQIygK2oYaMEgQTgZKmm4kWp2w4sWAw4qmUChAhSwQlyseBSOCAASHiTZCQIAIfkECQkANgAsAAAAABgAGACFBAIEhIKEREJExMLEJCIkpKKkZGZk5OLkFBIUNDI0lJKUVFJUtLK0dHZ01NLU9Pb0DAoMjIqMLCosrKqsbG5sHBocPDo8XFpcTEpMzMrM7OrsnJ6cvLq8fH58BAYEhIaEREZEJCYkpKakbGpsFBYUNDY0lJaUVFZUtLa0fHp83N7c/P78DA4MjI6MLC4srK6sdHJ0HB4cPD48XF5czM7M7O7sAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABv5Am3BI9JQsEKJy6SElbQiZoCJklajLIYlA8NhIAlnMBsBcFoBslUuNim2hywmkHsa4LEQ45llcZghMJCxCEAQhMVFTCRcXJUIkGC5CFWxelV0uCR5mJx4sIDANDUkIh1wkTYFaMhUJFA0pDRdpNh4xIYerSySiDSMJtUMsd09LEAYwIMYAECzOLF51CBaaLi4Qd1y5WGoULeAtCjDbXATdWQ3gES0RDZ8s8Xl1XwIW9xa7NiUDDxRqFUwokCGM0oYVCFGokSGiYYAQQwTUQLjCgYAOF4SkCQEjwYgCIiYUOCHEBEINIzwoUKGCQAQOFhRwEMFCQgCQJtJIQNEiUFMJFQcyEKBBIwAFDhwMkJGRwsISAAwOqDhRgYaDDyQYcEAxps4CoAwAVKXxwcYFpGXrtJCawEbVq7Y2cHhRUAkBEzMoEQ0gREIHOvSIAPjA4VGdIAAh+QQJCQA1ACwAAAAAGAAYAIUEAgSEgoREQkTMyswkIiRkYmSkoqTk5uQUEhQ0MjR0cnSUlpRUUlTc2ty0trQMCgyMiozU0tQsKixsamwcGhw8Ojx8enxcWlxMTkysqqycnpzk4uS8vrwEBgSEhoRERkTMzswkJiRkZmSkpqT8/vwUFhQ0NjR0dnScmpxUVlTc3ty8urwMDgyMjozU1tQsLixsbmwcHhw8Pjx8fnxcXlwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG/sCacEgExAgdonLZKT2EjxCBBQ0hlsQSAVl7bKkAk6yCHbK2lBpLSqXIBK/y8Eh4eKedikxGVTb7XiExUVMhbxJCLBUhQhRoSY5IJTEACQIVHQ8mF5xJCARSBCVNV2YSCCEMFykXHwBCHTFSVmUsqzQMIa9ELEdPWB0MKSZJjazHpbUJEiHMDw0k0dEccjU0J9gKJzQH0tED1QXa2BYFBBMw6ROMcggmCfAvfUIvGS4FZSUzMya7QyUQVGxQoaGMiRYtICggMKRChIEbHFQ4wUDIKwIFXlyAgLAFBiEBBIKg0cFDBBAxZmRIEGDEAi8KOM54FULDDCoJBoBYEWPFTooTIkaMuFAjzIQESwCMiBABA4UVDiyw0JDBQBo5GE4aAFDC54kaDAyMUFAtAAgQcbr+rNGhxQgU/pbEaEG0htqvNQgoIFOtyIkRSOUEAQAh+QQJCQA2ACwAAAAAGAAYAIUEAgSEgoREQkTEwsQkIiRkYmSkoqTk4uQUEhRUUlQ0MjR0cnSUkpS0srTMzswMCgyMioxMSkwsKixsamz8+vwcGhxcWlw8Ojx8enzMysysqqycnpy8urwEBgSEhoRERkTExsQkJiRkZmSkpqTk5uQUFhRUVlQ0NjR0dnSUlpTU0tQMDgyMjoxMTkwsLixsbmz8/vwcHhxcXlw8Pjx8fny8vrwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG/kCbcEgExAgdonLZKT2EjxBhJWw+l8MSAWl7bKm2IwE7XG0rtpWUijiTh+KHd2qUJpWnkQXQJYRiUVMlUiVQIWg2AzAwGRc2g0gVFR0VWwAdITMCM0koi4sbJSUIRA8lKxUXmjMKfDYCDp8BZA8zmhcVrlUiJBQJZAAnMyF3jxEtLREmEm99RzExHQMH1NQjzR8W2toRINXUGs0t2iYyFhExMuYyJiHNKxIh8iFXQhIbIBZkCBMiLkslaDhwoIIBGQkoEspAZOPEABUqHGg4MSGCED4x2kVIiGHBDCEYBtYwAQADhwYxXqRwsQBCAEoyFqCYgDHFAlISGtQYEWOETQERJliwaCHEhQV3SgCkqMHhAwINBiasgEC10JsPHDgwAFDCwIgJr4QWaLYgq7sSI77a6ICBRQBdS2LQIGoDQVqwYQooaJb0BQNmb4IAACH5BAkJADYALAAAAAAYABgAhQQCBISChERCRMzKzCQiJGRiZKSipPz6/BQSFFRSVDQyNLSytNza3HRydJSSlAwKDExKTNTS1CwqLGxqbKyqrBwaHFxaXDw6PLy6vIyOjOTi5Hx+fJyanAQGBISGhERGRMzOzCQmJGRmZKSmpPz+/BQWFFRWVDQ2NLS2tNze3HR2dJSWlAwODExOTNTW1CwuLGxubKyurBweHFxeXDw+PLy+vAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAb+QJtwSATICB2icilbmYSPEIEl7JQeSyKHdHjZHoSp8EjIDmEkUs3GklIR4Yq5ykgnwFOjNKl8ORIANhBpKQhuJVIlVSVUNhQpKQsKAAtpIRUVHRVhAAAlYQSBEykakBkSFBuBUFcsMiFSMkMXKKUaMGYdBFJiRSYDDB9mRgQlqzYIHxDKLSFzNpoIJdMdCyAgEdcczwo0At40ChjY5CPcNOACJzImFu0JsnMPMpgVV0QhGQstZggJLWWUIGiAoWAAMzIszLDwQZEQBTEKolihYIYAIYFKQJBxwYJHC15sTMCAIkaLDhNGGKgwY0OIGSomWPngsUUgGR5EUJFgYIRKgxIZHDBUoeKiDQIf4hXxMGIEDQQZMlh40EBFAwTPaDQNAACqVBsniCZ4JkKlM68WoImIeWxJhQbCkEVNa6NCAgnPlACwsCGgmSAAIfkECQkANgAsAAAAABgAGACFBAIEhIKEREJExMLEJCIkZGJkpKKk5OLkFBIUlJKUVFJUNDI01NLUdHJ0tLa0DAoMjIqMTEpMzMrMLCosbGpsHBocnJqcXFpcPDo8/P783NrcfH58vL68BAYEhIaEREZExMbEJCYkZGZkpKak7OrsFBYUlJaUVFZUNDY0dHZ0vLq8DA4MjI6MTE5MzM7MLC4sbG5sHB4cnJ6cXF5cPD483N7cAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABv5Am3BILGlIE6JyWfFEhK1MpiHslB5LouegSSqkKWGMQMgOZ4fayPbNhFfkirnKORw+7RSATOgsX04ANjRpA20NCAQhJVUlK0IWDC4GLwAWaS8qIBVjMQAAJXyCBS4ukgEhJjCCVRUPcIoEMUMLI5IuFGYdZCExj0QACioSAmYAYyWsNgg0AjQ0H2VzACuvDw8AMirbHCoQczZjIbwxI9sO2wngY7yyFS0tCvCzcx0r9/fKNgQbMh9mDzBgYKQEgQgDI0ZQyVLimYAFv2xMsJBwBIQJLTAIEYQARYUJDmlIm5HQggAAF1hAKNGCQowPFxTYW/BMo40KKS5gIcCCxUcGBClSREBx4cICISUWEAQGoycKBA1StHhw4sKJiFlQsEjQgFrQJxOK0gB3QuWsFVGfdGgRU5+SEgVsrvgqhBk9cERa3s0SBAA7";
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

/**------------------------------EC64------------------------------*/

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
    console.log("b="+b+", ?="+(len*3%4));
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
    r.readAsText(b, 'UTF-8');
    r.onload = function (){if(f)f.call(null,r.result)}
}

function str2ab(s,f) {
    var b = new Blob([s],{type:'text/plain,charset=UTF-8'});
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

