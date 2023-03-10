export const select = {
	categories: {
		link: 'categories-list a'
	},
	containerOf: {
		discover: '.discover-wrapper',
		home: '.home-wrapper',
		pages: '#pages',
		player: '.player',
		playerDiscover: '.discover-player-wrapper',
		playerDiscoverSelector: '.discover-player-wrapper .player',
		playerHome: '.home-player-wrapper',
		playerHomeSelector: '.home-player-wrapper .player',
		playerSearch: '.search-player-wrapper',
		playerSearchSelector: '.search-player-wrapper .player',
		search: '.search-wrapper',
		searchCategories: 'search_select',
		searchResultsNumber: '.search-results-number'
	},
	nav: {
		links: '.main-nav a'
	},
	search: {
		form: '.search-form',
		input: '#search_input'
	},
	templateOf: {
		discover: '#template-discover',
		home: '#template-home',
		player: '#template-player',
		search: '#template-search'
	}
};

export const classNames = {
	categories: {
		active: 'active'
	},
	nav: {
		active: 'active'
	},
	pages: {
		active: 'active'
	}
};

export const db = {
	songs: 'songs',
	url: '//' + window.location.hostname + (window.location.hostname == 'localhost' ? ':3131' : '')
};

export const templates = {
	discoverPage: Handlebars.compile(document.querySelector(select.templateOf.discover).innerHTML),
	greenAudioPlayer: Handlebars.compile(document.querySelector(select.templateOf.player).innerHTML),
	homePage: Handlebars.compile(document.querySelector(select.templateOf.home).innerHTML),
	searchPage: Handlebars.compile(document.querySelector(select.templateOf.search).innerHTML)
};