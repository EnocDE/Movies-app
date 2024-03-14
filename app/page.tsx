import { FC, Suspense } from "react";
import { ServerParams } from "./types";
import apiFetch from "./lib/apiFetch";
import MovieList from "./components/MovieList";
import Paginations from "./components/Paginations";
import LoadingSpinner from "./components/LoadingSpinner";
import Hero from "./components/Hero";

const Home: FC<ServerParams> = async ({ searchParams }) => {
	const page = searchParams.page || "1";

	const getMovies = await apiFetch.getMovies({ searchParams });
  console.log(getMovies);
  

	return (
		<Suspense fallback={<div>Cargando...</div>}>
			
				<Hero />

			<div className="max-w-[90%] md:container mx-auto pt-5">
				<h2 className="text-center text-3xl font-bold mb-5">
					Peliculas populares
				</h2>

				<Suspense fallback={<LoadingSpinner />}>
					<MovieList movies={getMovies} />
				</Suspense>

				<div className="flex flex-col flex-wrap items-center py-5">
					<Suspense fallback={<LoadingSpinner />}>
						<Paginations
							page={+page}
							pages={getMovies.total_pages > 500 ? 500 : getMovies.total_pages}
						/>
					</Suspense>
				</div>
			</div>
		</Suspense>
	);
};

export default Home;
