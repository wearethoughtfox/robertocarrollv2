import { error } from '@sveltejs/kit';

export const load = async () => {
	try {
		const file = await import('../lib/content/home.md');
		return {
			ReadMe: file.default
		};
	} catch (err) {
		error(500, err);
	}
};
