import ButtonLastPage from "@/app/components/ButtonLastPage";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import apiFetch from "@/app/lib/apiFetch";
import Image from "next/image";
import { FC, Suspense } from "react";

type MovieId = {
	movieId: string;
};

interface ServerParams {
	params: MovieId;
}

const Movie: FC<ServerParams> = async ({ params }) => {
	const id = params.movieId;
	const movie = await apiFetch.getMovie(id);

	return (
		<div className="relative py-10 min-h-screen w-screen overflow-hidden z-0 grid items-center ">
			<Suspense fallback={<LoadingSpinner/>}>
				<ButtonLastPage />
			</Suspense>
			<Image
				priority
				src={
					movie.backdrop_path
						? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
						: "/hero-card-complete.jpeg"
				}
				fill
				alt={`hero ${movie.title} `}
				className="opacity-40 object-center object-cover -z-10 absolute"
				loading="eager"
			/>
			<div className="w-3/4 mx-auto pt-unit-2xl pb-unit-2xl">
				<div className="flex flex-col md:flex-row">
					<Image
						src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
						width={400}
						height={700}
						alt={`poster ${movie.title}`}
						className="mx-auto md:m-0 hover:scale-[1.02] transition-transform"
						loading="eager"
					/>
					<div className="flex flex-col justify-center md:pl-10 basis-2/4 mt-10 md:mt-0 dark:text-white">
						<h1 className="text-3xl font-bold uppercase">Titulo</h1>
						<p className="text-medium italic ">{movie.title}</p>
						<h2 className="text-2xl mt-10 uppercase font-bold">Descripción</h2>
						<p className={`text-lg ${!movie.overview && "italic"}`}>
							{movie.overview
								? movie.overview
								: "No se encontró ninguna descripción"}
						</p>
						<h3 className="text-medium uppercase font-bold mt-10">
							Fecha de lanzamiento
						</h3>
						<p className="text-lg ">{movie.release_date}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Movie;
