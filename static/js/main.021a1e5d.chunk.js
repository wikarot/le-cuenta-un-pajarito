(window["webpackJsonple-cuenta-un-pajarito"]=window["webpackJsonple-cuenta-un-pajarito"]||[]).push([[0],{25:function(e,a,t){e.exports=t(36)},35:function(e,a,t){},36:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(17),i=t(5),o=t.n(i),c=t(9),l=t(18),u=t(19),d=t(23),p=t(20),m=t(10),b=t(24),w=t(11),f=t(6),g=function(e){function a(){var e;return Object(l.a)(this,a),(e=Object(d.a)(this,Object(p.a)(a).call(this))).updateData=e.updateData.bind(Object(m.a)(e)),e.state={remoteData:{ip:"un mont\xf3n de n\xfameros",isp:"una entidad desconocida",district:"un barrio",city:"de una cuidad",country:"posiblemente de un pa\xeds"},localData:{isMobile:!1,browser:"un nido",os:"un arbol",usedScreen:"un pedacito",colorDepth:"algunos",colors:"un mont\xf3n"}},e}return Object(b.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(c.a)(o.a.mark(function e(){var a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:a=e.sent,this.setState({remoteData:{ip:a.ip,isp:a.isp,district:a.district,city:a.state_prov,country:a.country_name}}),this.updateData();case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"updateData",value:function(){var e=Object(c.a)(o.a.mark(function e(){var a,t,n,r,s,i,c;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:for(a=e.sent,t=Math.pow(2,a.colorDepth),n=t.toString().length,r=t.toString(),s=[],i=2,c=n-1;c>=0;c--)0<=i?(s.unshift(r.slice(c,c+1)),i--):(s.unshift("."),i=2,c++);this.setState({localData:{isMobile:a.isMobile,browser:a.browser,os:a.os,usedScreen:a.usedScreen,colorDepth:a.colorDepth,colors:s.concat("")}}),requestAnimationFrame(this.updateData);case 11:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement(w.a,null,r.a.createElement("div",{className:"Pajarito"},r.a.createElement(f.a,{exact:!0,path:"/le-cuenta-un-pajarito/",render:function(a){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"img-box"},r.a.createElement("img",{src:"/le-cuenta-un-pajarito/Final_alpha.png",alt:"A bird.",className:"Pajarito_img--home",draggable:"false"}),r.a.createElement("img",{src:"/le-cuenta-un-pajarito/Final_happy_alpha_alt.png",alt:"A blinking bird.",className:"Pajarito_img-blink--home",draggable:"false"})),r.a.createElement("section",{className:"Pajarito_text--home"},r.a.createElement("div",{className:"text-holder--home"},r.a.createElement("p",null,"Pio."),r.a.createElement("p",null,"Le cuento:"),r.a.createElement("p",null,"Trino desde"," ",e.state.localData.isMobile&&r.a.createElement(r.a.Fragment,null,"un dispositivo movil, en"),r.a.createElement("span",{className:"data"}," ",e.state.localData.browser," "),"sobre",r.a.createElement("span",{className:"data"}," ",e.state.localData.os),"."),r.a.createElement("p",null,"Su IP es",r.a.createElement("span",{className:"data"}," ",e.state.remoteData.ip),",",r.a.createElement("span",{className:"data"},' "',e.state.remoteData.isp,'" '),"es su proveedor de internet, con sede en",r.a.createElement("span",{className:"data"}," ",e.state.remoteData.district),",",r.a.createElement("span",{className:"data"}," ",e.state.remoteData.city),",",r.a.createElement("span",{className:"data"}," ",e.state.remoteData.country),"."),r.a.createElement("p",null,e.state.localData.usedScreen<50&&r.a.createElement(r.a.Fragment,null,"Le ",r.a.createElement("em",null,"pio")," por favor agrande la ventana, ocupo apenas un",r.a.createElement("span",{className:"data"}," ",e.state.localData.usedScreen,"% ")),e.state.localData.usedScreen>=50&&r.a.createElement(r.a.Fragment,null,"Parece que tengo ",r.a.createElement("em",null,"pio"),"ridad, cubro",r.a.createElement("span",{className:"data"}," ",e.state.localData.usedScreen,"% ")),"de su pantalla, un componente con profundidad de color de",r.a.createElement("span",{className:"data"}," ",e.state.localData.colorDepth," bits (",e.state.localData.colors," colores)"),"."),r.a.createElement("p",null,"Por su seguridad! Lea mi ",r.a.createElement(w.b,{to:"/le-cuenta-un-pajarito/piolitica/"},r.a.createElement("em",null,"pio"),"l\xedtica de privacidad")," y si\xe9ntase m\xe1s tranquilo."))))}}),r.a.createElement(f.a,{path:"/le-cuenta-un-pajarito/piolitica/",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.b,{className:"back_btn",to:"/le-cuenta-un-pajarito/"},"<"),r.a.createElement("img",{src:"/le-cuenta-un-pajarito/Piolitica.png",alt:"A piolitic bird.",className:"Pajarito_img--piolitica",draggable:"false"}),r.a.createElement("section",{className:"Pajarito_text--piolitica"},r.a.createElement("div",{className:"text-holder--piolitica"},r.a.createElement("p",null,"No dir\xe9 nada n.n"))))}})))}}]),a}(n.Component);function h(){return E.apply(this,arguments)}function E(){return(E=Object(c.a)(o.a.mark(function e(){var a,t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.ipgeolocation.io/ipgeo?apiKey=15d8e57eb4aa4015bb32a04d73b67b19");case 2:if(!((a=e.sent).status>200)){e.next=7;break}return e.abrupt("return",a.status);case 7:return e.next=9,a.json();case 9:return t=e.sent,e.abrupt("return",{ip:t.ip,isp:t.isp,district:t.district,state_prov:t.state_prov,country_name:t.country_name});case 11:case"end":return e.stop()}},e)}))).apply(this,arguments)}function O(){return v.apply(this,arguments)}function v(){return(v=Object(c.a)(o.a.mark(function e(){var a,t,n,r,s,i,c,l,u,d,p,m,b,w,f,g;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=window.navigator.userAgent,t=window.navigator.appVersion,n=navigator.appName,r=""+parseFloat(navigator.appVersion),s=parseInt(navigator.appVersion,10),i=void 0,c=void 0,l=void 0,-1!==(i=a.indexOf("Opera"))&&(n="Opera",r=a.substring(i+6),-1!==(i=a.indexOf("Version"))&&(r=a.substring(i+8))),-1!==(i=a.indexOf("OPR"))?(n="Opera",r=a.substring(i+4)):-1!==(i=a.indexOf("Edge"))?(n="Microsoft Edge",r=a.substring(i+5)):-1!==(i=a.indexOf("MSIE"))?(n="Microsoft Internet Explorer",r=a.substring(i+5)):-1!==(i=a.indexOf("Chrome"))?(n="Chrome",r=a.substring(i+7)):-1!==(i=a.indexOf("Safari"))?(n="Safari",r=a.substring(i+7),-1!==(i=a.indexOf("Version"))&&(r=a.substring(i+8))):-1!==(i=a.indexOf("Firefox"))?(n="Firefox",r=a.substring(i+8)):-1!==a.indexOf("Trident/")?(n="Microsoft Internet Explorer",r=a.substring(a.indexOf("rv:")+3)):(l=a.lastIndexOf(" ")+1)<(i=a.lastIndexOf("/"))&&(n=a.substring(l,i),r=a.substring(i+1),n.toLowerCase()===n.toUpperCase()&&(n=navigator.appName)),-1!==(c=r.indexOf(";"))&&(r=r.substring(0,c)),-1!==(c=r.indexOf(" "))&&(r=r.substring(0,c)),-1!==(c=r.indexOf(")"))&&(r=r.substring(0,c)),s=parseInt(""+r,10),isNaN(s)&&(r=""+parseFloat(navigator.appVersion),s=parseInt(navigator.appVersion,10)),u=/Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(t),d=void 0,p=[{s:"Windows 10",r:/(Windows 10.0|Windows NT 10.0)/},{s:"Windows 8.1",r:/(Windows 8.1|Windows NT 6.3)/},{s:"Windows 8",r:/(Windows 8|Windows NT 6.2)/},{s:"Windows 7",r:/(Windows 7|Windows NT 6.1)/},{s:"Windows Vista",r:/Windows NT 6.0/},{s:"Windows Server 2003",r:/Windows NT 5.2/},{s:"Windows XP",r:/(Windows NT 5.1|Windows XP)/},{s:"Windows 2000",r:/(Windows NT 5.0|Windows 2000)/},{s:"Windows ME",r:/(Win 9x 4.90|Windows ME)/},{s:"Windows 98",r:/(Windows 98|Win98)/},{s:"Windows 95",r:/(Windows 95|Win95|Windows_95)/},{s:"Windows NT 4.0",r:/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},{s:"Windows CE",r:/Windows CE/},{s:"Windows 3.11",r:/Win16/},{s:"Android",r:/Android/},{s:"Open BSD",r:/OpenBSD/},{s:"Sun OS",r:/SunOS/},{s:"Linux",r:/(Linux|X11)/},{s:"iOS",r:/(iPhone|iPad|iPod)/},{s:"Mac OS X",r:/Mac OS X/},{s:"Mac OS",r:/(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},{s:"QNX",r:/QNX/},{s:"UNIX",r:/UNIX/},{s:"BeOS",r:/BeOS/},{s:"OS/2",r:/OS\/2/},{s:"Search Bot",r:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}],e.t0=o.a.keys(p);case 19:if((e.t1=e.t0()).done){e.next=27;break}if(m=e.t1.value,!(b=p[m]).r.test(a)){e.next=25;break}return d=b.s,e.abrupt("break",27);case 25:e.next=19;break;case 27:w=void 0,/Windows/.test(d)&&(w=/Windows (.*)/.exec(d)[1],d="Windows"),e.t2=d,e.next="Mac OS X"===e.t2?32:"Android"===e.t2?34:"iOS"===e.t2?36:39;break;case 32:return w=/Mac OS X (10[._\d]+)/.exec(a)[1],e.abrupt("break",40);case 34:return w=/Android ([._\d]+)/.exec(a)[1],e.abrupt("break",40);case 36:return w=(w=/OS (\d+)_(\d+)_?(\d+)?/.exec(t))[1]+"."+w[2]+"."+(0|w[3]),e.abrupt("break",40);case 39:return e.abrupt("break",40);case 40:return f=window.screen.width*window.screen.height,g=window.innerWidth*window.innerHeight,e.abrupt("return",{isMobile:u,browser:n+" "+s+" (".concat(r,")"),os:d+" "+w,usedScreen:Math.round(g/f*100),colorDepth:window.screen.colorDepth});case 43:case"end":return e.stop()}},e)}))).apply(this,arguments)}t(35);Object(s.render)(r.a.createElement(g,null),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.021a1e5d.chunk.js.map