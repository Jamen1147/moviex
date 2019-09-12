export const scrollToTop = () =>
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth'
	});

export const resolvedPromise = (promise) =>
	promise
		.then(({ data }) => ({ ok: true, data }))
		.catch((error) => Promise.resolve({ ok: false, error: error.response.data }));
