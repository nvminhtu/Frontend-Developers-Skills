if ("https:" == location.protocol) {
	location.href = "http://" + location.hostname + location.pathname;
}