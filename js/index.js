var a = document.getElementById("arrow");


//disable or enable scroll
var keys = {32: 1, 33: 1, 34: 1, 35: 1, 36: 1, 37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.addEventListener('touchmove', preventDefault, wheelOpt);
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

//check where user came from, enables/disables scroll if not from article page/s
function checkLoc() {
	var identifier = localStorage.getItem("identifier");
	console.log(identifier)
	if (identifier==null) {
		var reloadamt = 0;
		window.location.href = '#header';
		if (reloadamt=0) {
			location.reload();
			reloadamt++;
		}
		disableScroll();
		localStorage.setItem("identifier", 0);
	}
	else if (identifier==1) {
		window.location.href = "#home";
		localStorage.setItem("identifier", 0);
	}
	else if (identifier==2) {
		window.location.href = "#articles"
		localStorage.setItem("identifier", 0);
	}
	else if (identifier==3) {
		window.location.href = "#aboutme";
		localStorage.setItem("identifier", 0);
	}
	else {
		var reloadamt = 0;
		window.location.href = '#header';
		if (reloadamt=0) {
			location.reload();
			reloadamt++;
		}
		disableScroll();
		localStorage.setItem("identifier", 0);
	}
}

window.onload = checkLoc();

//re-enables scroll when pressing arrow button below logo
a.onclick =
	function enableScroll() {
	  window.removeEventListener('DOMMouseScroll', preventDefault, false);
	  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
	  window.removeEventListener('touchmove', preventDefault, wheelOpt);
	  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
	}

//fade in navbar in #intro
var div = document.querySelector(".fade");
var btn = document.querySelector(".fadeButton");
btn.addEventListener("click", function(){
	div.classList.add("anim");
 	window.location.href = '#intro';
	setTimeout(function(){div.classList.remove("elementToFadeInAndOut");}, 1000);
});