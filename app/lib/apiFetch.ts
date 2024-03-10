import { Movies } from "../types";

const { BASE_URL, THMDB_TOKEN } = process.env;

interface APIFetch {
	getMovies: () => Promise<Movies>;
}

const apiFetch: APIFetch = {
	getMovies: async function () {
		try {
			const response = await fetch(`${BASE_URL}/movie/popular`, {
				headers: {
					Authorization: `Bearer ${THMDB_TOKEN}`,
				},
			});

			if (response.status !== 200) throw new Error("Error Fetching THMD API");

			const result: Movies = await response.json();

			return result;
		} catch (error) {
			console.log(error);
			return {} as Movies;
		}
	},
};

export default apiFetch;
