// Google Map
document.addEventListener("DOMContentLoaded", () => {
	const googleMapsURL =
		"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15545572.922165938!2d77.00259756383042!3d17.964500142168134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x305652a7714e2907%3A0xba7b0ee41c622b11!2sMyanmar%20(Burma)!5e0!3m2!1sen!2smm!4v1697870797647!5m2!1sen!2smm";

	const iframe = document.getElementById("gmap_iframe");

	iframe.src = googleMapsURL;
});
