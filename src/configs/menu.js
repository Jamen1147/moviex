export const ROUTE_ITEMS = {
	HOME: '/',
	IN_CINEMAS: '/movie/now_playing',
	UP_COMING: '/movie/upcoming',
	POPULAR: '/movie/popular',
	TOP_RATED: '/movie/top_rated',
	DETAIL: '/movie/:id/:endPoint',
	MORE: '/explore'
};

export const MENU_ITEMS = [
	{
		name: 'Home',
		link: ROUTE_ITEMS.HOME
	},
	{
		name: 'In Cinemas',
		link: ROUTE_ITEMS.IN_CINEMAS
	},
	{
		name: 'Up Comings',
		link: ROUTE_ITEMS.UP_COMING
	},
	{
		name: 'Popular',
		link: ROUTE_ITEMS.POPULAR
	},
	{
		name: 'Top Rated',
		link: ROUTE_ITEMS.TOP_RATED
	},
	{
		name: 'More',
		link: ROUTE_ITEMS.MORE
	}
];
