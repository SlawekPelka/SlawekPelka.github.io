$(document).ready(function(){$(".soon-heading, .soon-tm").on("click",function(){window.location="https://www.linkedin.com/in/sławek-pełka-tailordigital/"});var o=0,s=$(".soon-scroll-item").length,n=0;$(".soon-scroll-item").each(function(){$(this).addClass("soon-"+o),o++}),$(".soon-scroll-item").first().addClass("soon-first"),$(".soon-scroll-item").last().addClass("soon-last");setInterval(function(){$(".soon-scroll-item").removeClass("e"),setTimeout(function(){$(".soon-scroll-item").removeClass("s").addClass("h")},300),setTimeout(function(){$(".soon-"+n).removeClass("h").addClass("s"),setTimeout(function(){$(".soon-scroll-item.s").addClass("e")},300),n==s-1?n=0:n++},500)},4e3)});