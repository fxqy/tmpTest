function jsvw(j,p){
	var e=document.createElement(j.t);
	if(j.z)e.className=j.z;
	if(j.s)e.style=j.s;
	if(j.h)e.innerHTML=j.h;
	for(var i in j){
		var it=j[i];
	    if(i=='c'){
			for(var k=0;k<it.length;k++){
			    var c=it[k];
			    jsvw(c,e);
			}
		}else{
			e.setAttribute(i,j[i]);
		}
	}
	if(p)p.appendChild(e);
	if(j.init)j.init.call(e);
	if(j.clk)e.onclick=j.clk;
	return e;
}
var ara={
	alnk: null
};
window.onload=function(){
	jsvw({
		t: 'div',z: 'f_div',s: 'background:grey;',
		c: [
			{
				t: 'span',z: 's_sp',s: 'background:green;',h: 'AAA',clk: function(){alert("AAA")}
			},
			{
				t: 'a',z: 's_a',s: 'color:blue',h: 'BBB',title: 'BBB',
				init: function(){
					ara.alnk=this;
				}
			},
			subVw()
		]
		
	},document.body);
}
function subVw(){
	return {
		t: 'p',
		s: 'color:red;',
		h: 'cccccccccc',
		c: [
			{
				t: 'span',z: 's_spc',s: 'background:green;',h: 'CCC',clk: function(){alert("CCC")}
			}
		]
	};
}