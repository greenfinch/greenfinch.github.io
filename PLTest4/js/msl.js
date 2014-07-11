// JavaScript Document
$(window).load(function () {
    //HIDE THE HELP 
    $('.main_contain').hide(0);

    updateOrientation();

    TweenMax.from($('.page'), .75, {
        css: {
            opacity: 0
        },
        delay: 0
    });

    TweenMax.to($('footer'), .75, {
        css: {
            opacity: 1.0
        },
        delay: 0.75
    });

    $(".button").on("touchstart", function () {
        $(this).css("color", "#CCC");

    });

    $(".button").on("touchend", function () {
        $(this).css("color", "#FFF");

    });
});

$(document).ready(function () {
    setOrientationListener();

    document.addEventListener('touchmove', function (e) {
        e.preventDefault();
    }, false);

    var animationArray = new Array($('.bubble_bg'))

    $("#help_btn").on("click", function (event) {
        event.preventDefault();
        document.getElementById('main_contain').style.display = "block";

        TweenMax.to($('.page'), .75, {
            css: {
                opacity: 0
            },
            delay: 0
        });

        TweenMax.to($('.main_contain'), .75, {
            css: {
                opacity: 1
            },
            delay: 0
        });

        TweenMax.to($('.screen_shot_container'), .75, {
            css: {
                opacity: 1,
                scale: 1
            },
            delay: 0.5,
            ease: Strong.easeOut
        });
    });
	
	//ALL NEW - EC
	$("#legal_btn").on("click", function (event) {
        event.preventDefault();

		document.getElementById('alert_overlay').style.display = "block";
		TweenMax.from($('.alert_box'), .5, {
			css: {
				opacity: 0,
				top: 0
			},
			delay: 0.0
		});    
    });
	//ALL NEW - EC

    $("#closeBtn").on("click", function (event) {
        event.preventDefault();

        TweenMax.to($('.page'), .75, {
            css: {
                opacity: 1
            },
            delay: 0.5
        });

        TweenMax.to($('.main_contain'), .75, {
            css: {
                opacity: 0
            },
            delay: 0.5,
            onComplete: killHelpDiv
        });

        TweenMax.to($('.screen_shot_container'), .75, {
            css: {
                opacity: 0,
                scale: 0.25
            },
            delay: 0.2,
            ease: Strong.easeOut
        });
    });
});

function showLegalOverlay() {
    document.getElementById('alert_overlay').style.display = "block";
    TweenMax.from($('.alert_box'), .5, {
        css: {
            opacity: 0,
            top: 0
        },
        delay: 0.0
    });
}

function hideLegalOverlay() {
    document.getElementById('alert_overlay').style.display = "none";
}

function showComingSoonOverlay() {
    document.getElementById('coming_soon_overlay').style.display = "block";
    TweenMax.from($('.alert_box'), .5, {
        css: {
            opacity: 0,
            top: 0
        },
        delay: 0.0
    });
}

function hideComingSoonOverlay() {
    document.getElementById('coming_soon_overlay').style.display = "none";
}

function killHelpDiv() {
    document.getElementById('main_contain').style.display = "none";
}

function changePage(fileName) {
    $('content_container').animate({
        opacity: 0
    }, 500, function () {
        $('.content_loading_container').load('assets/content/' + fileName, function () {
            $('.content_container').delay(250).animate({
                opacity: 1
            }, 500);
        });
    });

}

function setOrientationListener() {
    rotationInterval = setInterval(function () {
        updateOrientation();
    }, 100);
}

function updateOrientation() {
    if ($('body').width() < 2048) {
        $('.page, .main_img, #closeBtn').removeClass('landscape').addClass('portrait');
        $('#box7 .button').css('padding', '');
    } else {
        $('.page, .main_img, #closeBtn').removeClass('portrait').addClass('landscape');
        $('#box7 .button').css('padding', '20px 0px');
    }
}