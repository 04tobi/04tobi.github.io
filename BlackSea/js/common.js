$(document).ready(function() {

//анимирование элементов
	$(".review_item h2").animated("fadeInDown", "fadeOutDown");
	$(".review_item .link_box").animated("fadeInUp", "fadeOutUp");
	$(".text_wrap h3").animated("fadeInUp", "fadeOutUp");
	$(".dhavan_wrap ").animated("fadeInRight", "fadeOutRight");
	$(".photo_wrap ").animated("fadeInLeft", "fadeOutLeft");
	$(".contact_box ").animated("flipInY", "flipOutY");

//плавная прокрутка
$("a[href*='#']").mPageScroll2id();
//popup
$(".popup").magnificPopup({type:"image"});

//cлайдер
	$(".owl-carousel").owlCarousel({
		loop : true,
		items : 1
});

//адаптация шапки
$(".main_mnu_button").click(function(){
	$(".top_menu ul").slideToggle();
});

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function(e) {
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
	});
	
});