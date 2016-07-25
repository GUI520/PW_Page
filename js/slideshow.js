function SlideShow(c) {
	var a = document.getElementById("slideContainer"),
		f = document.getElementById("slidesImgs").getElementsByTagName("li"),
		h = document.getElementById("slideBar"),
		n = h.getElementsByTagName("li"),
		d = f.length,
		c = c || 3000,
		e = lastI = 0,
		j, m;

	function b() {
		m = setInterval(function() {
			e = e + 1 >= d ? e + 1 - d : e + 1;
			g()
		}, c)
	}

	function k() {
		clearInterval(m)
	}

	function g() {
		f[lastI].style.display = "none";
		n[lastI].className = "";
		f[e].style.display = "block";
		n[e].className = "on";
		lastI = e
	}
	f[e].style.display = "block";
	a.onmouseover = k;
	a.onmouseout = b;
	h.onmouseover = function(i) {
		j = i ? i.target : window.event.srcElement;
		if(j.nodeName === "LI") {
			e = parseInt(j.innerHTML, 10) - 1;
			g()
		}
	};
	b()
};
var scrollElem;
var stopscroll;
var stoptime;
var preTop;
var leftElem;
var currentTop;
var marqueesHeight

function marque(width, height, marqueName, marqueCName) {

	try {
		marqueesHeight = height;
		stopscroll = false;

		scrollElem = document.getElementById(marqueName);
		with(scrollElem) {
			style.width = width;
			style.height = marqueesHeight;
			style.overflow = 'hidden';
			noWrap = true;
		}

		scrollElem.onmouseover = new Function('stopscroll = true');
		scrollElem.onmouseout = new Function('stopscroll = false');

		preTop = 0;
		currentTop = 0;
		stoptime = 0;

		leftElem = document.getElementById(marqueCName);
		scrollElem.appendChild(leftElem.cloneNode(true));

		init_srolltext();

	} catch(e) {}
};

function init_srolltext() {
	scrollElem.scrollTop = 0;
	setInterval('scrollUp()', 10);
}

function scrollUp() {
	if(stopscroll) return;
	currentTop += 1;
	if(currentTop == marqueesHeight + 1) {
		stoptime += 1;
		currentTop -= 1;
		if(stoptime == (marqueesHeight) * 4) { //停顿时间
			currentTop = 0;
			stoptime = 0;
		}
	} else {

		preTop = scrollElem.scrollTop;
		scrollElem.scrollTop += 1;
		if(preTop == scrollElem.scrollTop) {
			scrollElem.scrollTop = marqueesHeight;
			scrollElem.scrollTop += 1;
		}
	}
}
// 导航兰的改变
			window.onload = function() {
				var oUl2 = document.getElementById("nav_one").getElementsByTagName("a");
				var oUl = document.getElementById("nav_two").getElementsByTagName("a");

				for(var i = 0; i < oUl2.length; i++) {

					oUl2[i].onclick = function() {
						for(var n = 0; n < oUl2.length; n++) oUl2[n].className = "";
						this.className = "current a";
					}
				}
				
			   for(var i = 0; i < oUl.length; i++) {

					oUl[i].onclick = function() {
						for(var n = 0; n < oUl.length; n++) oUl[n].className = "";
						this.className = "current_one";
					}
				}
			}
			
			
			
function pop_up() {
	document.getElementById('light').style.display = 'block';
	document.getElementById('fade').style.display = 'block'
}

function Close_pop_up() {
	document.getElementById('light').style.display = 'none';
	document.getElementById('fade').style.display = 'none'
}
function login_up() {
	document.getElementById('light_one').style.display = 'block';
	document.getElementById('fade_one').style.display = 'block'
}

function login_pop_up() {
	document.getElementById('light_one').style.display = 'none';
	document.getElementById('fade_one').style.display = 'none'
}