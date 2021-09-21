$(document).ready(function () {
	$('.carrousel').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		autoplay: true,
		arrows: false,
		autoplaySpeed: 5000,
	});
});

AOS.init();

// Abrir/Cerrar el menú desplegable
function toggleMenu(state) {
	const menu = document.querySelector('.menu');
	if (state == true) {
		menu.classList.remove('animate__slideOutLeft');
		menu.classList.add('animate__slideInLeft');
		menu.classList.add('open');
	} else {
		menu.classList.remove('animate__slideInLeft');
		menu.classList.add('animate__slideOutLeft');
	}
}

// Cookies
const cookie = document.getElementById('cookies');

if (localStorage.getItem('cart')) {
	cookie.classList.add('cookies-hidden');
} else {
	// Poner baner de cookies
	cookie.classList.remove('cookies-hidden');
}

function cookiesAlert() {
	// Quitar baner de cookies
	cookie.classList.add('cookies-hidden');
	localStorage.setItem('cart', true);
}

// search
const searchBar = document.getElementById('barra-busqueda');
const categories = document.querySelectorAll('#categorias a');
const products = document.querySelectorAll('#grid .feed__product');

searchBar.addEventListener('keyup', (input) => {
	products.forEach((product) => {
		const productLabel = product.dataset.etiquetas;
		const compare = productLabel.indexOf(input.target.value.toLowerCase());
		if (compare >= 0) {
			product.classList.remove('hidden');
		} else {
			product.classList.add('hidden');
		}
	});
});

categories.forEach((element) => {
	element.addEventListener('click', (event) => {
		event.preventDefault();
		categories.forEach((category) => {
			category.classList.remove('activo');
		});
		event.target.classList.add('activo');

		const category = event.target.innerHTML;

		products.forEach((product) => {
			if (product.dataset.categoria == category) {
				product.classList.remove('hidden');
			} else {
				product.classList.add('hidden');
			}

			if (category == 'Todos') {
				product.classList.remove('hidden');
			}
		});
	});
});
