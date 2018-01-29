$(document).ready(function() {
    //   handle soon-click
    $(".soon-heading, .soon-tm").on("click", function() {
        var soonlink = "https://www.linkedin.com/in/sławek-pełka-tailordigital/";
        window.location = soonlink;
    });

    //   handle soon scroll class add
    var ci = 0;
    var il = $(".soon-scroll-item").length;
    var cni = 0;
    $(".soon-scroll-item").each(function() {
        $(this).addClass("soon-" + ci);
        ci++;
    });
    $(".soon-scroll-item").first().addClass("soon-first");
    $(".soon-scroll-item").last().addClass("soon-last");

    //   handle soon scrol scroll
    var intervaltime = 4000;
    setInterval(function() {
        $(".soon-scroll-item").removeClass("e");
        setTimeout(function() {
            $(".soon-scroll-item").removeClass("s").addClass("h");
        }, 300);
        setTimeout(function() {
            $(".soon-" + cni).removeClass("h").addClass("s");
            setTimeout(function() {
                $(".soon-scroll-item.s").addClass("e");
            }, 300);
            if (cni == il - 1) {
                cni = 0;
            } else {
                cni++;
            }
        }, 500);
    }, intervaltime);
});