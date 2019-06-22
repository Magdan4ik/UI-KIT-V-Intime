document.addEventListener("DOMContentLoaded", initUiKit)



function initUiKit() {
	$('input[type="tel"]').mask("+38(999)-999-99-99");

	document.querySelectorAll('.uk-input__search .uk-input__textinfo i').forEach(el => {
		el.addEventListener('click', e => {
			el.closest('.uk-input__search').querySelector('input[type="search"]').value = el.textContent;
		});
	});

	document.querySelectorAll('.uk-input__search .uk-input__textinfo i').forEach(el => {
		el.addEventListener('click', e => {
			el.closest('.uk-input__search').querySelector('input[type="search"]').value = el.textContent;
		});
	});

	document.querySelectorAll(':required').forEach(el => {
		el.addEventListener('keyup', () => {
			el.classList.add('uk-input--touched')
		});
	});

	customSelect();
	
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