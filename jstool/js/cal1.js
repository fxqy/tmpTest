//https://www.cnblogs.com/qintangtao/archive/2013/03/01/2938887.html
var TG = "甲乙丙丁戊己庚辛壬癸";
var DZ = "子丑寅卯辰巳午未申酉戌亥";
var SX = "鼠牛虎兔龙蛇马羊猴鸡狗猪";
var JQ = ["小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至"];
var XQ = "日一二三四五六七八九十";
var NY = ["正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "冬", "腊"];
var NR = "初十廿三";
var CALHOLI={
    "1-1":"元旦","3-8":"妇女节","4-1":"愚人节","5-1":"劳动节","5-4":"青年节",
    "6-1":"儿童节","9-10":"教师节","10-1":"国庆节","12-25":"圣诞节"
};
var LUNHOLI={
    "1-1":"春节","1-15":"元宵节","2-2":"龙抬头","5-5":"端午节","7-7":"七夕节",
    "7-15":"中元节","8-15":"中秋节","9-9":"重阳节","12-8":"腊八节","12-24":"小年"
};
var TF = [0,21208,42467,63836,85337,107014,128867,150921,173149,195551,218072,240693,263343,285989,308563,331033,353350,375494,397447,419210,440795,462224,483532,504758];
var nldt = [
    0xAB500D2,0x4BD0883,0x4AE00DB,0xA5700D0,0x54D0581,0xD2600D8,0xD9500CC,0x655147D,0x56A00D5,0x9AD00CA,
    0x55D027A,0x4AE00D2,0xA5B0682,0xA4D00DA,0xD2500CE,0xD25157E,0xB5500D6,0x56A00CC,0xADA027B,0x95B00D3,
    0x49717C9,0x49B00DC,0xA4B00D0,0xB4B0580,0x6A500D8,0x6D400CD,0xAB5147C,0x2B600D5,0x95700CA,0x52F027B,
    0x49700D2,0x6560682,0xD4A00D9,0xEA500CE,0x6A9157E,0x5AD00D6,0x2B600CC,0x86E137C,0x92E00D3,0xC8D1783,
    0xC9500DB,0xD4A00D0,0xD8A167F,0xB5500D7,0x56A00CD,0xA5B147D,0x25D00D5,0x92D00CA,0xD2B027A,0xA9500D2,
    0xB550781,0x6CA00D9,0xB5500CE,0x535157F,0x4DA00D6,0xA5B00CB,0x457037C,0x52B00D4,0xA9A0883,0xE9500DA,
    0x6AA00D0,0xAEA0680,0xAB500D7,0x4B600CD,0xAAE047D,0xA5700D5,0x52600CA,0xF260379,0xD9500D1,0x5B50782,
    0x56A00D9,0x96D00CE,0x4DD057F,0x4AD00D7,0xA4D00CB,0xD4D047B,0xD2500D3,0xD550883,0xB5400DA,0xB6A00CF,
    0x95A1680,0x95B00D8,0x49B00CD,0xA97047D,0xA4B00D5,0xB270ACA,0x6A500DC,0x6D400D1,0xAF40681,0xAB600D9,
    0x93700CE,0x4AF057F,0x49700D7,0x64B00CC,0x74A037B,0xEA500D2,0x6B50883,0x5AC00DB,0xAB600CF,0x96D0580,
    0x92E00D8,0xC9600CD,0xD95047C,0xD4A00D4,0xDA500C9,0x755027A,0x56A00D1,0xABB0781,0x25D00DA,0x92D00CF,
    0xCAB057E,0xA9500D6,0xB4A00CB,0xBAA047B,0xB5500D2,0x55D0983,0x4BA00DB,0xA5B00D0,0x5171680,0x52B00D8,
    0xA9300CD,0x795047D,0x6AA00D4,0xAD500C9,0x5B5027A,0x4B600D2,0x96E0681,0xA4E00D9,0xD2600CE,0xEA6057E,
    0xD5300D5,0x5AA00CB,0x76A037B,0x96D00D3,0x4AB0B83,0x4AD00DB,0xA4D00D0,0xD0B1680,0xD2500D7,0xD5200CC,
    0xDD4057C,0xB5A00D4,0x56D00C9,0x55B027A,0x49B00D2,0xA570782,0xA4B00D9,0xAA500CE,0xB25157E,0x6D200D6,
    0xADA00CA,0x4B6137B,0x93700D3,0x49F08C9,0x49700DB,0x64B00D0,0x68A1680,0xEA500D7,0x6AA00CC,0xA6C147C,
    0xAAE00D4,0x92E00CA,0xD2E0379,0xC9600D1,0xD550781,0xD4A00D9,0xDA400CD,0x5D5057E,0x56A00D6,0xA6C00CB,
    0x55D047B,0x52D00D3,0xA9B0883,0xA9500DB,0xB4A00CF,0xB6A067F,0xAD500D7,0x55A00CD,0xABA047C,0xA5A00D4,
    0x52B00CA,0xB27037A,0x69300D1,0x7330781,0x6AA00D9,0xAD500CE,0x4B5157E,0x4B600D6,0xA5700CB,0x54E047C,
    0xD1600D2,0xE960882,0xD5200DA,0xDAA00CF,0x6AA167F,0x56D00D7,0x4AE00CD,0xA9D047D,0xA2D00D4,0xD1500C9,
    0xF250279,0xD5200D1];
var calVwo={
    csty:null,
    cstm:null,
    ctbl:null
} 
window.onload=function(){
    
    var now=new Date();
 	var vw=div({},[
        div({clazz:'calhead'},[
            select({init:'calVwo.csty',
                onchange:function(){
                    calVwo.ctbl.innerHTML='';
                    calVwo.ctbl.appendChild(tbody({style:'background:rgba(250,250,250,0.3)'},genCalTrs()));
                }},(function(){
                    var yarr=[];
                    for(var i=1900;i<2101;i++){
                        yarr.push(option({html:i+'年',value:i,selected:i==now.getFullYear()?1:0}));
                    }
                    return yarr;
                })()
            ),
            select({init:'calVwo.cstm',
                onchange:function(){
                    calVwo.ctbl.innerHTML='';
                    calVwo.ctbl.appendChild(tbody({style:'background:rgba(250,250,250,0.3)'},genCalTrs()));
                }},(function(){
                    var marr=[];
                    for(var i=1;i<13;i++){
                        marr.push(option({html:i+'月',value:i,selected:i==now.getMonth()+1?1:0}));
                    }
                    return marr;
                })()
            )
        ]),br(),
        div({clazz:'calbody'},[
            table({init:'calVwo.ctbl',style:'width:auto;border-radius:2px;box-shadow:0px 0px 2px 2px rgba(178,178,178,0.3);'},[
                tbody({style:'background:rgba(240,245,250,0.2)'},genCalTrs())
            ])
        ])
    ]);
	document.body.appendChild(vw);
    /**
     var ndt2=getLunarDate(2020,12,8);
    console.log(ndt2);
    var fd2=parseInt((ndt2.nd+1)/10);
    var xd2=ndt2.nd%10;
    console.log((ndt2.g?'闰':'')+NY[ndt2.nm]+"月"+NR[fd2]+XQ[xd2+1]);
    **/
    /**
    var dt1=new Date();dt1.setFullYear(1988);dt1.setMonth(1);dt1.setDate(17);dt1.setHours(0);
    var dt2=new Date();dt2.setFullYear(1988);dt2.setMonth(3);dt2.setDate(11);dt2.setHours(0);
    console.log((dt2.getTime()-dt1.getTime())/86400000);
    **/
    
}
/**获取日历行*/
function genCalTrs(){
    var cyr=calVwo.csty.value;
    var cmh=calVwo.cstm.value;
    var r=[];
    var it=[];
    for(var i=1;i<8;i++){
        it.push(td({html:XQ[i<7?i:0],style:'height:30px;color:#4279AF;text-align:center;'}));
    }
    r.push(tr({},it));
    var now=new Date();
    var dte=new Date();
    dte.setFullYear(cyr);
    dte.setMonth(cmh-1);
    dte.setDate(1);
    var fwk=dte.getDay();
    fwk=fwk==0?6:fwk-1;
    if(fwk!=0)dte.setTime(dte.getTime()-fwk*86400000);
    var i=0;
    var trar=[];
    var ndt;
    while(true){
       fwk=dte.getDay();
       fwk=fwk==0?6:fwk-1;
       if(fwk==0&&i>0){
           r.push(tr({},trar));
           trar=[];
       }
       if(dte.getMonth()+1!=cmh&&fwk==0&&i>0&&r.length>6){break;}

       ndt=getLunarDate(dte.getFullYear(),dte.getMonth()+1,dte.getDate());
       var nstr=getCalHoliday(dte,ndt);
       if(!nstr){
           var fd=parseInt((ndt.nd+1)/10);
           var xd=ndt.nd%10;
           if(fd==1&&xd==9)fd=0;
           nstr=ndt.nd==0?((ndt.g?'闰':'')+NY[ndt.nm]+"月"):(NR[fd]+XQ[xd+1]);
       }

       var tdcor=cmh-1==dte.getMonth()?'#4279AF':'#ccc';
       var tdsty='width:80px;height:80px;border-radius:35px;text-align:center;border:'+(cmh-1==dte.getMonth()?'1':'0')+'px solid #e0e0e0;color:'+tdcor+';';
       if(now.getFullYear()==dte.getFullYear()&&now.getMonth()==dte.getMonth()&&now.getDate()==dte.getDate())tdsty+='background:#E5F3FF;';
       if(cmh-1==dte.getMonth()){
           tdsty+='box-shadow:0px 0px 1px 1px rgba(222,222,222,0.1);';
       }
       trar.push(td({html:dte.getDate()+'<br/>'+nstr,style:tdsty}));
       dte.setTime(dte.getTime()+86400000);
       i++;
    }
    return r;
}
/**处理节假日显示*/
function getCalHoliday(dte,ndt){
    for(var i=0;i<24;i++){
        var tfday=getLunar24(dte.getFullYear(),i);    
        if(tfday.getMonth()==dte.getMonth()&&tfday.getUTCDate()==dte.getDate()){
            return JQ[i];
        }
    }
    var lkey=(ndt.nm+1)+'-'+(ndt.nd+1);
    var lstr=LUNHOLI[lkey];
    if((ndt.h&&lkey=='12-30')||(ndt.h==0&&lkey=='12-29'))lstr='除夕';
    if(lstr)return lstr;
    var cstr=CALHOLI[(dte.getMonth()+1)+'-'+(dte.getDate())];
    if(cstr)return cstr;
    return null;
}
/**给定公历日期计算农历日期**/
function getLunarDate(yr,mh,dy){
    if(!dy)dy=1;
    var lyi=getLunarInfo(yr);
    if(mh*100+dy<lyi.d){
       lyi=getLunarInfo(yr-1);    
    }
    var x=lyi.e,y=parseInt(lyi.d/100),z=lyi.d%100;
    /**计算相差天数**/
    var dys=0;
    var i=x,j=y,k=z;
    var cmds;
    while(i<yr||(i==yr&&j<=mh)){//开始月份到结束月份所有天数相加
        cmds=getMonthDays(i,j);
        dys+=cmds;
        j++;
        if(j>12){
            i++;
            j=1;
        }
    }
    dys-=z+cmds-dy;//减去开始月份日期前面的天数，再减去结束月份后面的天数，即为相差天数
    /**计算农历**/
    var r={ny:x};
    var nm=0,nd=0,lds,rbl=0;//rbl当前月份是否为闰月
    while(dys>0){//(相差天数 - 各农历月份) 直到溢出
        lds=geLunartMonthDays(nm+1,lyi.a,lyi.b,lyi.c,rbl);
        if(nm+1==lyi.c){//闰月处理
            if(rbl==1){
                rbl=0;
                nm++;
            }else{
                rbl=1;
            } 
        }else{
           nm++;
        }
        dys-=lds;
    }
    if(dys<0){//处理溢出天数
        nm--;
        nd=lds+dys;  
    }
    r.nm=nm;
    r.nd=nd;
    r.g=rbl;
    r.h=lds>29?1:0;
    return r;
}
/**查表获取农历基础信息**/
function getLunarInfo(yr){
    var r={};
    var a=nldt[yr-1899];
    var b=(a>>16).toString(2);
    r.a=pfxChar(b,12);//每月份大小
    r.b=a>>12&0x0F;//1：闰月大
    r.c=a>>8&0x0F;//闰月月份，0：无闰月
    r.d=a&0xFF;//正月初一对应公历日期
    r.e=yr;
    return r;
}
/**农历月份天数**/
function geLunartMonthDays(m,a,b,c,bol){
    var r=29;
    if(a.charAt(m-1)>0)r=30;
    if(c>0&&bol>0){
        if(b>0)r=30;
        else r=29;
    }
    return r;
}
/**获取农历24节气**/
function getLunar24(y,n) {
    return new Date((31556925974.7*(y-1900) + TF[n]*60000)+Date.UTC(1900,0,6,2,5));
}
/**判断公历年是否为闰年**/
function isLeap(year){
    var run=1;
    if (year%4 != 0) run = 0;
    else {
        if (year%100==0 && year%400!=0) run = 0;
        if (year%3200 == 0) run = 0;
    }
    return run;
}
/**公历年月份天数**/
function getMonthDays(y,m){
    if(m==2){
       return isLeap(y)?29:28;
    }else if(m==1||m==3||m==5||m==7||m==8||m==10||m==12){
        return 31;
    }else return 30;
}
/**字符串前缀**/
function pfxChar(s,l,n){
    if(s.length<l)return pfxChar((n?n:"0")+s,l,n);
    return s;
}
/**view***/
function tag(tagName,prop,children){
	var e=document.createElement(tagName);
	for(var i in prop){
		var it=prop[i];
		if(!it)continue;
	    if(i=='clazz'){
			e.className=it;
		}else if(i=='html'){
			e.innerHTML=it;
		}else if(i.indexOf('on')==0){
			e[i]=it;
		}else if(i.indexOf('ele')==0){
			continue;
		}else if(i=='init'){
			eleInit(e,it);
		}else if(i=='watch'){
			valWatch(e,it);
		}else{
			e.setAttribute(i,it);
		}
	}
    e.children=children;
	for(var i in children){
		var it=children[i];
		if(!it)continue;
		e.appendChild(it);
	}
	return e;
}
function eleInit(e,it){
    if(typeof it=='function'){
        it.call(e,e.value);
        return;     
    }
    var s=(typeof it=='string')?it:it.val;
     if(s){
        var m,n;
        var indx=s.lastIndexOf('.');
        if(indx>0){m=s.substring(0,indx);n=s.substring(indx+1,s.length)}
        else{m='window';n=s}
        var obj=eval('('+m+')');
        obj[n]=e;
     }
    if(it.fun)it.fun.call(e,e.value);
}

function valWatch(e,it){
	var s=(typeof it=='string')?it:it.val;
    if(s){
        var m,n;
        var indx=s.lastIndexOf('.');
        if(indx>0){m=s.substring(0,indx);n=s.substring(indx+1,s.length)}
        else{m='window';n=s}
        var obj=eval('('+m+')');
        Object.defineProperty(obj, n, {
            set:function(v){
                e.value=v;
                if(it.fun)it.fun.call(e,v,1);
            },
            get:function(){
                return e.value;
            }
        });
    }
    if(it.fun){
        e.onchange=function(){it.fun.call(this,e.value,2)}
        e.onkeyup=function(){it.fun.call(this,e.value,2)}
    }
}
/**
*impl
*/
function div(prop,children){
	return tag('div',prop,children);
}
function p(prop,children){
	return tag('p',prop,children);
}
function a(prop,children){
	return tag('a',prop,children);
}
function span(prop,children){
	return tag('span',prop,children);
}
function img(prop,children){
	return tag('img',prop,children);
}
function br(prop,children){
	return tag('br');
}
function ul(prop,children){
	return tag('ul',prop,children);
}
function li(prop,children){
	return tag('li',prop,children);
}
function table(prop,children){
	return tag('table',prop,children);
}
function tbody(prop,children){
	return tag('tbody',prop,children);
}
function th(prop,children){
	return tag('th',prop,children);
}
function tr(prop,children){
	return tag('tr',prop,children);
}
function td(prop,children){
	return tag('td',prop,children);
}
function input(prop,children){
	return tag('input',prop,children);
}
function textarea(prop,children){
	return tag('textarea',prop,children);
}
function select(prop,children){
	return tag('select',prop,children);
}
function option(prop,children){
	return tag('option',prop,children);
}
function pgsz(){
	var dmd=document.compatMode=="CSS1Compat";
	var r=new Array();
	var wa=dmd?document.documentElement.clientWidth:document.body.clientWidth;
	var ha=dmd?document.documentElement.clientHeight:document.body.clientHeight;
	r.push(wa);
	r.push(ha);
	return r;
}
