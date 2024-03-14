import { Movie, Movies, ServerParams, SingleMovie } from "../types";

const { BASE_URL, THMDB_TOKEN } = process.env;

interface APIFetch {
	getMovies: ({ searchParams }: ServerParams) => Promise<Movies>;
	getMovie: (id: string) => Promise<SingleMovie>;
}

const apiConfig: RequestInit = {
	headers: {
		Authorization: `Bearer ${THMDB_TOKEN}`,
	},
	cache: "no-store",
};

const apiFetch: APIFetch = {
	getMovies: async ({ searchParams }) => {
		const buildUrl = new URL(`${BASE_URL}`);
		const buildParams = new URLSearchParams("");

		if (searchParams.page) {
      buildParams.set("page", searchParams.page)
		}

		if (searchParams.query) {
			buildParams.set("query", searchParams.query);
			buildUrl.pathname += "/search/movie";
		} else {
			buildUrl.pathname += "/movie/popular";
		}

		try {
			// const response = await fetch(`${buildUrl}?${buildParams}&language=es-MX`, apiConfig)
			const response = await fetch(
				`${buildUrl}?${buildParams}&language=es-MX&&region=ISO-3166-2&adults=false`,
				apiConfig
			);

			if (response.status !== 200) throw new Error("Error Fetching THMD API");

			const result: Movies = await response.json();

			return result;
		} catch (error) {
			console.log(error);
			return {} as Movies;
		}
	},
	getMovie: async (id) => {
		const buildUrl = new URL(`${BASE_URL}`);

		try {
			const response = await fetch(
				`${buildUrl}/movie/${id}?language=es-MX&&region=ISO-3166-2&adults=false`,
				apiConfig
			);

			if (response.status !== 200) throw new Error("Error Fetching THMD API");
			const result = await response.json();
			return result;
		} catch (error) {
			console.log(error);
			return {} as SingleMovie;
		}
	},
};

export default apiFetch;
