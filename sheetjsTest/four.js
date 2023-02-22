window.onload=function(){
	console.info("-----------onload-----------");
};

/**
*生成excel导出数据
*/
function getExportJson(jarray){
	if(!Array.isArray(jarray)){
		alert("sheet datas error!");
		return;
	}
	var shtnms=[];
	var theshts={};
	var addr = [];
	var m = 0;
	for (var p=0,lenp=jarray.length;p<lenp;p++) {
		var dat = jarray[p];
		var cols = dat.columns;
		var ds = dat.datas;
		if(!Array.isArray(cols)){
			alert("colums data error!");
			return;
		}
		var sht = notNull(dat.sheetName) ? dat.sheetName: "sheet" + m;
		shtnms.push(sht);
		var ph = {};
		var mgs = [];
		var flds = [];
		var tmpdata={};
		var i = 1, j = 0, k = 1;
		var minR=i,minC=k;
		var maxR=i,maxC=k;
		for (var q=0,lenq=cols.length;q<lenq;q++) {
			var ces=cols[q];
			if(!Array.isArray(ces)){
				alert("colums item data error!");
				return;
			}
			var a = 1, b = 1;
			for (var r=0,lenr=ces.length;r<lenr;r++) {
				var cmo=ces[r];
				var tit = cmo.title;
				var fld = cmo.field;
				var ali = cmo.align;
				var cp = cmo.colspan;
				var rp = cmo.rowspan;
				a = notNull(rp)? parseInt(rp) : 1;
				b = notNull(cp)? parseInt(cp) : 1;
				if (notNull(fld)) {
					var mp = {};
					mp.field=fld;
					if (notNull(ali)){
						mp.align=ali;
					}
					flds.push(mp);
				}
				for (var y = 0; y < a; y++) {
					for (var x = 0; x < b; x++) {
						var xo = ph[i + y];
						var xp = notNull(xo) ? xo : 0;
						if (x == 0 && y == 0) {
							j = xp;
						}
						ph[i + y]=++xp;
					}
				}
				mgs.push({s: { c: j + k, r: i },e: { c: j + k + b - 1, r: i + a - 1 },val:tit});
				tmpdata[getCharCol(j + k)+(i+1)]={v:tit,s:headStyle()};
				if(j+k>maxC)maxC=j+k;
				j += b;
			}
			i += a;
		}
		var datas = ds;
		var x = 0, y;
		for (var s=0,lens=datas.length;s<lens;s++) {
			var dmo=datas[s];
			var yo = ph[i + x];
			y = notNull(yo) ? yo : 0;
			for (var t=0,lent=flds.length;t<lent;t++) {
				var map=flds[t];
				var fld = map.field;
				var ali = map.align;
				var valu = dmo[fld];
				var vale = notNull(valu) ? valu : "";
				var cely =cellStyle();
				cely.alignment.horizontal=ali;
				tmpdata[getCharCol(y + k)+(i + x+1)]={v:vale,s:cely};
				y++;
			}
			x++;
		}
		maxR=i + x;
		for (var u=0,lenu=mgs.length;u<lenu;u++) {
			var cra=mgs[u];
			var fr = cra.s.r;
			var lr = cra.e.r;
			var fc = cra.s.c;
			var lc = cra.e.c;
			for(var l = fr; l <= lr; l++) {
				for (var g = fc; g <= lc; g++) {
					if (!(l == fr && g == fc)) {
						tmpdata[getCharCol(g)+(l+1)]={v:"",s:headStyle()};
						if(g>maxC)maxC=g;
					}
				}
			}
		}
		var wpxarr=[];
		for (var v=0,lenv=maxC+1;v<lenv;v++) {
			if(v>=minC){
				wpxarr.push({wpx: 90});
			}else{
				wpxarr.push({});
			}
		}
		tmpdata["!cols"] = wpxarr;
		tmpdata["!ref"] = getCharCol(minC)+(minR+1)+":"+getCharCol(maxC)+(maxR);
		tmpdata["!merges"] = mgs;
		theshts[sht]=tmpdata;
		m++;
	}
	return {
		SheetNames: shtnms,
		Sheets: theshts
	}; 
}

/** test datas **/
var expJson0 = "{\"sheetName\":\"电源投资\",\"datas\":[{\"timep\":\"2016年\",\"VAL01\":\"0\",\"VAR01\":\"0.0\",\"VAL02\":\"0\",\"VAR02\":\"0.0\",\"VAL03\":\"0\",\"VAR03\":\"0.0\",\"VAL04\":\"0\",\"VAR04\":\"0.0\",\"VAL05\":\"0\",\"VAR05\":\"0.0\",\"VAL06\":\"0\",\"VAR06\":\"0.0\"},{\"timep\":\"2017年\",\"VAL01\":\"2400\",\"VAR01\":\"0.0\",\"VAL02\":\"700\",\"VAR02\":\"0.0\",\"VAL03\":\"800\",\"VAR03\":\"0.0\",\"VAL04\":\"900\",\"VAR04\":\"0.0\",\"VAL05\":\"0\",\"VAR05\":\"0.0\",\"VAL06\":\"0\",\"VAR06\":\"0.0\"},{\"timep\":\"2018年\",\"VAL01\":\"6000\",\"VAR01\":\"150.0\",\"VAL02\":\"1000\",\"VAR02\":\"42.86\",\"VAL03\":\"2000\",\"VAR03\":\"150.0\",\"VAL04\":\"3000\",\"VAR04\":\"233.33\",\"VAL05\":\"0\",\"VAR05\":\"0.0\",\"VAL06\":\"0\",\"VAR06\":\"0.0\"}],\"columns\":[[{\"title\":\"电源投资\",\"align\":\"center\",\"colspan\":13}],[{\"title\":\"时间\",\"align\":\"center\",\"field\":\"timep\",\"rowspan\":\"2\"},{\"title\":\"全部\",\"align\":\"center\",\"colspan\":\"2\"},{\"title\":\"火电\",\"align\":\"center\",\"colspan\":\"2\"},{\"title\":\"水电\",\"align\":\"center\",\"colspan\":\"2\"},{\"title\":\"核电\",\"align\":\"center\",\"colspan\":\"2\"},{\"title\":\"风电\",\"align\":\"center\",\"colspan\":\"2\"},{\"title\":\"光伏\",\"align\":\"center\",\"colspan\":\"2\"}],[{\"field\":\"VAL01\",\"title\":\"电源投资\",\"align\":\"right\"},{\"field\":\"VAR01\",\"title\":\"同比增速\",\"align\":\"left\"},{\"field\":\"VAL02\",\"title\":\"电源投资\",\"align\":\"right\"},{\"field\":\"VAR02\",\"title\":\"同比增速\",\"align\":\"right\"},{\"field\":\"VAL03\",\"title\":\"电源投资\",\"align\":\"right\"},{\"field\":\"VAR03\",\"title\":\"同比增速\",\"align\":\"right\"},{\"field\":\"VAL04\",\"title\":\"电源投资\",\"align\":\"right\"},{\"field\":\"VAR04\",\"title\":\"同比增速\",\"align\":\"right\"},{\"field\":\"VAL05\",\"title\":\"电源投资\",\"align\":\"right\"},{\"field\":\"VAR05\",\"title\":\"同比增速\",\"align\":\"right\"},{\"field\":\"VAL06\",\"title\":\"电源投资\",\"align\":\"right\"},{\"field\":\"VAR06\",\"title\":\"同比增速\",\"align\":\"right\"}]]}";

var expJson1 = "{\"sheetName\":\"发电量\",\"datas\":[{\"timep\":\"2016年\",\"VAL01\":\"1600\",\"VAR01\":\"0.0\",\"VAL02\":\"1700\",\"VAR02\":\"0.0\",\"VAL03\":\"1800\",\"VAR03\":\"0.0\",\"VAL04\":\"1900\",\"VAR04\":\"0.0\",\"VAL05\":\"2000\",\"VAR05\":\"0.0\",\"VAL06\":\"2100\",\"VAR06\":\"0.0\"},{\"timep\":\"2017年\",\"VAL01\":\"1700\",\"VAR01\":\"0.0\",\"VAL02\":\"1800\",\"VAR02\":\"0.0\",\"VAL03\":\"1900\",\"VAR03\":\"0.0\",\"VAL04\":\"2000\",\"VAR04\":\"0.0\",\"VAL05\":\"2100\",\"VAR05\":\"0.0\",\"VAL06\":\"2200\",\"VAR06\":\"0.0\"},{\"timep\":\"2018年\",\"VAL01\":\"2000\",\"VAR01\":\"130.0\",\"VAL02\":\"1000\",\"VAR02\":\"42.86\",\"VAL03\":\"2000\",\"VAR03\":\"120.0\",\"VAL04\":\"3000\",\"VAR04\":\"150.0\",\"VAL05\":\"3100\",\"VAR05\":\"0.0\",\"VAL06\":\"3200\",\"VAR06\":\"0.0\"}],\"columns\":[[{\"title\":\"时间\",\"align\":\"center\",\"field\":\"timep\",\"rowspan\":\"3\"},{\"title\":\"发电量\",\"align\":\"center\",\"colspan\":12}],[{\"title\":\"全部\",\"align\":\"center\",\"colspan\":\"2\"},{\"title\":\"火电\",\"align\":\"center\",\"colspan\":\"2\"},{\"title\":\"水电\",\"align\":\"center\",\"colspan\":\"2\"},{\"title\":\"核电\",\"align\":\"center\",\"colspan\":\"2\"},{\"title\":\"风电\",\"align\":\"center\",\"colspan\":\"2\"},{\"title\":\"光伏\",\"align\":\"center\",\"colspan\":\"2\"}],[{\"field\":\"VAL01\",\"title\":\"发电量\",\"align\":\"right\"},{\"field\":\"VAR01\",\"title\":\"同比增速\",\"align\":\"right\"},{\"field\":\"VAL02\",\"title\":\"发电量\",\"align\":\"right\"},{\"field\":\"VAR02\",\"title\":\"同比增速\",\"align\":\"right\"},{\"field\":\"VAL03\",\"title\":\"发电量\",\"align\":\"right\"},{\"field\":\"VAR03\",\"title\":\"同比增速\",\"align\":\"right\"},{\"field\":\"VAL04\",\"title\":\"发电量\",\"align\":\"right\"},{\"field\":\"VAR04\",\"title\":\"同比增速\",\"align\":\"right\"},{\"field\":\"VAL05\",\"title\":\"发电量\",\"align\":\"right\"},{\"field\":\"VAR05\",\"title\":\"同比增速\",\"align\":\"right\"},{\"field\":\"VAL06\",\"title\":\"发电量\",\"align\":\"right\"},{\"field\":\"VAR06\",\"title\":\"同比增速\",\"align\":\"right\"}]]}";

var expJson2 = "{\"sheetName\":\"跨省区输入输出电量\",\"datas\":[{\"timep\":\"2017年1季度\",\"la\":\"900\",\"ga\":\"900\",\"ra\":\"0.0\",\"lb\":\"1800\",\"gb\":\"1800\",\"rb\":\"0.0\"},{\"timep\":\"2017年2季度\",\"la\":\"0\",\"ga\":\"900\",\"ra\":\"0.0\",\"lb\":\"0\",\"gb\":\"1800\",\"rb\":\"0.0\"},{\"timep\":\"2017年3季度\",\"la\":\"0\",\"ga\":\"900\",\"ra\":\"0.0\",\"lb\":\"0\",\"gb\":\"1800\",\"rb\":\"0.0\"},{\"timep\":\"2017年4季度\",\"la\":\"0\",\"ga\":\"900\",\"ra\":\"0.0\",\"lb\":\"0\",\"gb\":\"1800\",\"rb\":\"0.0\"},{\"timep\":\"2018年1季度\",\"la\":\"2200\",\"ga\":\"3100\",\"ra\":\"144.44\",\"lb\":\"1100\",\"gb\":\"2900\",\"rb\":\"-38.89\"},{\"timep\":\"2018年2季度\",\"la\":\"0\",\"ga\":\"3100\",\"ra\":\"0.0\",\"lb\":\"0\",\"gb\":\"2900\",\"rb\":\"0.0\"}],\"columns\":[[{\"title\":\"跨省区输入输出电量\",\"align\":\"center\",\"colspan\":10}],[{\"title\":\"测试\",\"align\":\"center\",\"rowspan\":\"8\",\"colspan\":\"2\"},{\"title\":\"行合并\",\"align\":\"center\",\"rowspan\":\"8\"},{\"title\":\"时间\",\"align\":\"center\",\"field\":\"timep\",\"rowspan\":\"2\"},{\"title\":\"送入电量\",\"align\":\"center\",\"colspan\":\"3\"},{\"title\":\"送出电量\",\"align\":\"center\",\"colspan\":\"3\"}],[{\"field\":\"la\",\"title\":\"当期值\",\"align\":\"left\"},{\"field\":\"ga\",\"title\":\"累计值\",\"align\":\"left\"},{\"field\":\"ra\",\"title\":\"同比增速\",\"align\":\"left\"},{\"field\":\"lb\",\"title\":\"当期值\",\"align\":\"left\"},{\"field\":\"gb\",\"title\":\"累计值\",\"align\":\"left\"},{\"field\":\"rb\",\"title\":\"同比增速\",\"align\":\"left\"}]]}";

/**
*导出数据
*/
function downloadExl(){
	var json = getExportJson([JSON.parse(expJson0),JSON.parse(expJson1),JSON.parse(expJson2)]);
	tmpDown = new Blob([s2ab(
		XLSX.write(json,
			{ bookType: 'xlsx' , bookSST: false, type: 'binary' }
		)
	)], {type: ""});
	saveAs(tmpDown, 'fourTest.xlsx');
}

function headStyle(){
	return {
		font:{
			name:"Microsoft Yahei",
			color:{rgb:"FF000000"}
			/**,bold:true**/
		},
		border:{
			top: {style:"thin"},
			bottom: {style:"thin"},
			left: {style:"thin"},
			right: {style:"thin"}
		},
		alignment:{
			vertical: "center",
			horizontal: "center"
		}
	}
};
function cellStyle(){
	return {
		font:{name:"Microsoft Yahei",color:{rgb:"FF000000"}},
		border:{
			top: {style:"thin"},
			bottom: {style:"thin"},
			left: {style:"thin"},
			right: {style:"thin"}
		},
		alignment:{
			vertical: "center",
			horizontal: "center"
		}
	}
};
/**获取index的字母值*/
function getCharCol(o) {
	var a = Math.floor(o / 26);
	var b = o % 26;
	var c = String.fromCharCode(b + 65);
	var r = "";
	if (a > 0)
		r = getCharCol(a-1);
	return r + c;
}
function s2ab(s) {
	if (typeof ArrayBuffer !== 'undefined') {
		var buf = new ArrayBuffer(s.length);
		var view = new Uint8Array(buf);
		for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
		return buf;
	} else {
		var buf = new Array(s.length);
		for (var i = 0; i != s.length; ++i) buf[i] = s.charCodeAt(i) & 0xFF;
		return buf;
	}
}
function saveAs(obj, fileName) {
	var tmpa = document.createElement("a");
	tmpa.download = fileName || "下载";
	tmpa.href = URL.createObjectURL(obj);
	tmpa.click();
	setTimeout(function () {
		URL.revokeObjectURL(obj);
	}, 1000);
}

/**common**/
function notNull(str){
    if(str==null||typeof str == "undefined"||str==""){
        return false;
    }
    return true;
}
function isNull(str){
    return !notNull(str);
}