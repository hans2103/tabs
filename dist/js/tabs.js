!function(){var a,o,r=document.querySelectorAll('[role="tablist"]')[0],n=function(){var e=r.hasAttribute("data-delay"),t=0;if(e){var n=r.getAttribute("data-delay");t=n||300}return t}();function d(){a=document.querySelectorAll('[role="tab"]'),o=document.querySelectorAll('[role="tabpanel"]')}d();var u={end:35,home:36,left:37,up:38,right:39,down:40,delete:46},l={37:-1,38:-1,39:1,40:1};for(i=0;i<a.length;++i)e(i);function e(e){a[e].addEventListener("click",c),a[e].addEventListener("keydown",f),a[e].addEventListener("keyup",s),a[e].index=e}function c(e){v(e.target,!1)}function f(e){switch(e.keyCode){case u.end:e.preventDefault(),v(a[a.length-1]);break;case u.home:e.preventDefault(),v(a[0]);break;case u.up:case u.down:g(e)}}function s(e){var t,n,r;switch(e.keyCode){case u.left:case u.right:g(e);break;case u.delete:t=e,target=t.target,null!==target.getAttribute("data-deletable")&&(target,n=t.target,r=document.getElementById(n.getAttribute("aria-controls")),n.parentElement.removeChild(n),r.parentElement.removeChild(r),d(),target.index-1<0?v(a[0]):v(a[target.index-1]))}}function g(e){var t=e.keyCode,n=!1;"vertical"==r.getAttribute("aria-orientation")?t!==u.up&&t!==u.down||(e.preventDefault(),n=!0):t!==u.left&&t!==u.right||(n=!0),n&&function(e){var t=e.keyCode;for(x=0;x<a.length;x++)a[x].addEventListener("focus",b);if(l[t]){var n=e.target;void 0!==n.index&&(a[n.index+l[t]]?a[n.index+l[t]].focus():t===u.left||t===u.up?a[a.length-1].focus():t!==u.right&&t!=u.down||a[0].focus())}}(e)}function v(e,n){n=n||!0,function(){for(t=0;t<a.length;t++)a[t].setAttribute("tabindex","-1"),a[t].setAttribute("aria-selected","false"),a[t].removeEventListener("focus",b);for(p=0;p<o.length;p++)o[p].setAttribute("hidden","hidden")}(),e.removeAttribute("tabindex"),e.setAttribute("aria-selected","true");var r=e.getAttribute("aria-controls");document.getElementById(r).removeAttribute("hidden"),n&&e.focus()}function b(e){var t=e.target;setTimeout(h,n,t)}function h(e){focused=document.activeElement,e===focused&&v(e,!1)}}();