// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 9.0
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_blinds(m,l,a){var g=jQuery;var k=g(this);var c=m.parts||3;var j=g(".ws_list",a);var h=g("<div>").addClass("ws_effect ws_blinds").css({position:"absolute",width:"100%",height:"100%",left:0,top:0,"z-index":8}).hide().appendTo(a);var d=g("<div>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"}).appendTo(h);var e=[];var b=document.addEventListener;for(var f=0;f<c;f++){e[f]=g("<div>").css({position:b?"relative":"absolute",display:b?"inline-block":"block",height:"100%",width:(100/c+0.001).toFixed(3)+"%",border:"none",margin:0,overflow:"hidden",top:0,left:b?0:((100*f/c).toFixed(3)+"%")}).appendTo(h)}this.go=function(r,p,o){if(o==undefined){o=p>r?1:0}h.find("img").stop(true,true);h.show();var s=g(l[p]);var t={width:s.width()||m.width,height:s.height()||m.height};var u=s.clone().css(t).appendTo(d);u.from={left:0};u.to={left:(!o?1:-1)*u.width()*0.5};if(m.support.transform){u.from={translate:[u.from.left,0,0]};u.to={translate:[u.to.left,0,0]}}j.hide();wowAnimate(u,u.from,u.to,m.duration,m.duration*0.1,"swing");for(var q=0;q<e.length;q++){var n=e[q];var v=g(l[r]).clone().css({position:"absolute",top:0}).css(t).appendTo(n);v.from={left:(!o?-1:1)*v.width()-n.position().left};v.to={left:-n.position().left};if(m.support.transform){v.from={translate:[v.from.left,0,0]};v.to={translate:[v.to.left,0,0]}}wowAnimate(v,v.from,v.to,(m.duration/(e.length+1))*(o?(e.length-q+1):(q+2)),"swing",((!o&&q==e.length-1||o&&!q)?function(){k.trigger("effectEnd");h.hide().find("img").remove();u.remove()}:false))}}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 9.0
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery("#wowslider-container0").wowSlider({effect:"blinds",prev:"",next:"",duration:20*100,delay:20*100,width:1280,height:720,autoPlay:true,autoPlayVideo:false,playPause:true,stopOnHover:false,loop:false,bullets:1,caption:true,captionEffect:"parallax",controls:true,controlsThumb:false,responsive:1,fullScreen:false,gestures:2,onBeforeStep:0,images:0});