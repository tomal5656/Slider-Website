function openNav(){document.getElementById("myNav").style.width="100%"}function closeNav(){document.getElementById("myNav").style.width="0%"}$(document).ready(function(){(new WOW).init(),$(".owl-carousel").owlCarousel({items:1,loop:!0,nav:!0,dots:!0,autoplay:!0,autoplaySpeed:1e3,smartSpeed:1500,autoplayHoverPause:!0}),$(".js--sticky-menu").waypoint(function(e){"down"==e?$("nav").addClass("sticky"):$("nav").removeClass("sticky")}),$(".counter").counterUp({delay:10,time:1e3});mixitup(".portfolio-container");$(".portfolio-container").magnificPopup({delegate:"a",type:"image",tLoading:"Loading image #%curr%...",mainClass:"mfp-img-mobile",gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]},image:{tError:'<a href="%url%">The image #%curr%</a> could not be loaded.',titleSrc:function(e){return e.el.attr("title")+"<small>by Mehrab Hossen</small>"}}}),$(".slider").slick({dots:!0,infinite:!0,autoplayTimeou:3e3,autoplay:!0,speed:300,slidesToShow:1,slidesToScroll:1,responsive:[{breakpoint:1024,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".popup-btn").click(function(e){$(".popup-wrap").fadeIn(500),$(".popup-box").removeClass("transform-out").addClass("transform-in"),e.preventDefault()}),$(".popup-close").click(function(e){$(".popup-wrap").fadeOut(500),$(".popup-box").removeClass("transform-in").addClass("transform-out"),e.preventDefault()}),$(window).scroll(function(){$(this).scrollTop()>40?$("#topBtn").fadeIn():$("#topBtn").fadeOut()}),$("#topBtn").click(function(){$("html,body").animate({scrollTop:0},900)}),$("a").on("click",function(e){if(""!==this.hash){e.preventDefault();var t=this.hash;$("html, body").animate({scrollTop:$(t).offset().top},300,function(){window.location.hash=t})}})});let tabHeader=document.getElementsByClassName("tab-header")[0],tabIndicator=document.getElementsByClassName("tab-indicator")[0],tabBody=document.getElementsByClassName("tab-body")[0],tabsPane=tabHeader.getElementsByTagName("div");for(let e=0;e<tabsPane.length;e++)tabsPane[e].addEventListener("click",function(){tabHeader.getElementsByClassName("active")[0].classList.remove("active"),tabsPane[e].classList.add("active"),tabBody.getElementsByClassName("active")[0].classList.remove("active"),tabBody.getElementsByTagName("div")[e].classList.add("active"),tabIndicator.style.left=`calc(calc(100% / 4) * ${e})`});const accordion=document.getElementsByClassName("contentBox");for(i=0;i<accordion.length;i++)accordion[i].addEventListener("click",function(){this.classList.toggle("active")});$(window).on("load",function(){$("#status").fadeOut(),$("#preloader").delay(350).fadeOut("slow"),$("body").delay(350).css({overflow:"visible"})});