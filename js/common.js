document.addEventListener("DOMContentLoaded", initUiKit)



function initUiKit() {

	/* Input mask */
	$('input[type="tel"]').mask("+38(999)-999-99-99");

	/* Search hint */
	document.querySelectorAll('.uk-input__search .uk-input__textinfo i').forEach(el => {
		el.addEventListener('click', e => {
			el.closest('.uk-input__search').querySelector('input[type="search"]').value = el.textContent;
		});
	});

	/* Input validation helper */
	document.querySelectorAll(':required').forEach(el => {
		if(el.type == "radio" || el.type == "checkbox") {
			el.addEventListener('click', () => {
				el.classList.add('uk-input--clicked');
				el.parentElement.classList.remove('uk-input__label--error');
				if(!el.checked) {
					el.parentElement.classList.add('uk-input__label--error');
				}
			});
		} else {
			el.addEventListener('keyup', () => {
				el.classList.add('uk-input--touched')
			});
		}
	});

	/* Tabs toggler */
	document.querySelectorAll('.uk-tabs__btn').forEach(btn => {
		btn.addEventListener('click', e => {
			e.preventDefault();
			let childrens = [...btn.parentElement.children];
			childrens.forEach(btn => btn.classList.remove('uk-tabs__btn--active'));
			btn.classList.add('uk-tabs__btn--active');
		});
	});

	/* Dots toggler */
	document.querySelectorAll('.uk-dots__btn').forEach(btn => {
		btn.addEventListener('click', e => {
			e.preventDefault();
			let childrens = [...btn.closest('.uk-dots__list').querySelectorAll('.uk-dots__btn')];
			childrens.forEach(btn => btn.classList.remove('uk-dots__btn--active'));
			btn.classList.add('uk-dots__btn--active');
		});
	});


	/* Show password */
	document.querySelectorAll('.uk-input__password-view').forEach(btn => {
		btn.addEventListener('click', e => {
			e.preventDefault();
			let input = btn.previousElementSibling;
				input.type = input.type == 'password' ? 'text' : 'password';
		});
	});

	 /* Popup`s */
	document.querySelectorAll('[data-popup]').forEach(btn => {
		btn.addEventListener('click', () => {
			document.getElementById(btn.dataset.popup).dataset.visible = true;
		});
	});
  
	document.querySelectorAll('.uk-popup').forEach(popup => {
		popup.addEventListener('click', e => {
		  if(e.target.classList.contains("uk-popup") || e.target.classList.contains("uk-popup__close")) {
			popup.dataset.visible = false;
		  }
		});
	});


	customSelect();
	plusMinusAmount();
	
}

function autoHeight(el) {
	el.style.height = (el.scrollHeight) + "px";
};


function customSelect() {

	$('.uk-select').each(function() {

		let $this = $(this),
			numberOfOptions = $(this).children('option').length;
	
		$this.wrap('<div class="uk-select__wrap"></div>');
		$this.after('<div class="uk-select__val"></div>');

		let $styledSelect = $this.next('.uk-select__val');
			$styledSelect.text($this.children('option').eq(0).text());
	
		let $list = $('<ul />', {
		'class': 'uk-select__options'
		}).insertAfter($styledSelect);
	
		for (let i = 0; i < numberOfOptions; i++) {
			$('<li />', {
				text: $this.children('option').eq(i).text(),
				rel: $this.children('option').eq(i).val()
			}).appendTo($list);
		}
	
		let $listItems = $list.children('li');
	
		$styledSelect.click(function(e) {
			e.stopPropagation();
			$('.uk-select__val--active').each(function() {
				$(this).removeClass('uk-select__val--active');
			});
			$(this).toggleClass('uk-select__val--active');
		});
	

		$listItems.click(function(e) {
			e.stopPropagation();
			$styledSelect.text($(this).text()).removeClass('uk-select__val--active');
			$this.val($(this).attr('rel'));
			$listItems.removeClass('uk-select__li--active');
			$(this).addClass('uk-select__li--active');
		});
	
		$(document).click(function() {
			$styledSelect.removeClass('uk-select__val--active');
		});
	
	});
};


function plusMinusAmount() {
	String.prototype.getDecimals || (String.prototype.getDecimals = function() {
		let a = this,
			b = ("" + a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
		return b ? Math.max(0, (b[1] ? b[1].length : 0) - (b[2] ? +b[2] : 0)) : 0
	});
 	jQuery(document).on("click", ".uk-amount__btn--plus, .uk-amount__btn--minus", function() {
		let a = jQuery(this).closest(".uk-amount__btns").find(".uk-amount__input"),
			b = parseFloat(a.val()),
			c = parseFloat(a.attr("max")),
			d = parseFloat(a.attr("min")),
			e = a.attr("step");
		b && "" !== b && "NaN" !== b || (b = 0), "" !== c && "NaN" !== c || (c = ""), "" !== d && "NaN" !== d || (d = 0), "any" !== e && "" !== e && void 0 !== e && "NaN" !== parseFloat(e) || (e = 1), jQuery(this).is(".uk-amount__btn--plus") ? c && b >= c ? a.val(c) : a.val((b + parseFloat(e)).toFixed(e.getDecimals())) : d && b <= d ? a.val(d) : b > 0 && a.val((b - parseFloat(e)).toFixed(e.getDecimals())), a.trigger("change");
		if(+a.val() >= 2) {
			jQuery(this).closest(".uk-amount").addClass("uk-amount--more")
		} else {
			jQuery(this).closest(".uk-amount").removeClass("uk-amount--more");
		}
	});
	$(".uk-amount__input").focus(function() {
		$(this).closest(".uk-amount").addClass('uk-amount--focused');
	});
	$(".uk-amount__input").blur(function() {
		$(this).closest(".uk-amount").removeClass('uk-amount--focused');
	});
};