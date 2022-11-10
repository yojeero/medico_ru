/* Loader */
setTimeout(function(){$('.loader').css('display', 'none'); }, 300);

/* active menu button color */
$(function(){$('a').each(function(){if($(this).prop('href')==window.location.href){$(this).addClass('active');$(this).parents('li').addClass('active');}});});

/* hamburger animation*/
var menu=document.querySelector(".navicon");menu.addEventListener("click",function(){this.classList.toggle('active');});

/* hamburger open nav */
jQuery(function(){$('.navicon').on('click',function(){$(this).toggleClass('act');$('.menu').toggleClass('open');});$('.nav li a').on('click',function(){$('.menu').removeClass('open');$('.navicon').removeClass('open');});});

/* animate scroll */
jQuery(function(){$('.link_to').click(function(){var scroll_el=$(this).attr('href');if($(scroll_el).length!=0){$('html, body').animate({scrollTop:$(scroll_el).offset().top},1000);} return false;});});

/* scroll up */
$(function(){$(window).scroll(function(){var a=$(window).scrollTop();1200<a&&$(".up").fadeIn("slow");1200>a&&$(".up").fadeOut("slow")});$(".up").click(function(){$("html, body").animate({scrollTop:"0"},500)})});
