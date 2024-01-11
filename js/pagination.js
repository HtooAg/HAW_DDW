// Pagination
const itemsPerPage = 8;
const $cards = $(".card");
const $pagination = $(".pagination");
const pageCount = Math.ceil($cards.length / itemsPerPage);

let currentPage =
	localStorage.getItem("currentPage") === null
		? 1
		: parseInt(localStorage.getItem("currentPage"));

const setActivePage = () => {
	$pagination.find(".page-link").removeClass("active");
	$pagination.find(`.page-link:eq(${currentPage - 1})`).addClass("active");
};

const showPageWithDelay = page => {
	currentPage = page;
	localStorage.setItem("currentPage", page);
	const startIndex = (page - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;

	setActivePage();

	$cards.hide();
	setTimeout(() => {
		$cards.slice(startIndex, endIndex).show();
		refreshAOSWithDelay();
	}, 500);
};

const refreshAOSWithDelay = () => {
	setTimeout(() => {
		AOS.init();
	}, 500);
};

$pagination.on("click", ".page-link", e => {
	e.preventDefault();
	const pageText = $(e.target).text();
	showPageWithDelay(getPageFromText(pageText));
});

$pagination.on("click", ".prev-page", e => {
	e.preventDefault();
	if (currentPage > 1) {
		showPageWithDelay(currentPage - 1);
	}
});

$pagination.on("click", ".next-page", e => {
	e.preventDefault();
	if (currentPage < pageCount) {
		showPageWithDelay(currentPage + 1);
	}
});

showPageWithDelay(currentPage);

const getPageFromText = pageText => {
	switch (pageText) {
		case "Tents":
			return 1;
		case "Furnitures":
			return 2;
		case "Cookwares":
			return 3;
		case "Equipments":
			return 4;
		case "Sets":
			return 5;
		default:
			return 1;
	}
};
