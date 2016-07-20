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