import React, { FC, Suspense } from "react";
import Link from "next/link";
import { Movies } from "../types";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";

interface MovieListI {
	movies: Movies;
}

const baseUrlImage = "https://image.tmdb.org/t/p/w780";

const MovieList: FC<MovieListI> = ({ movies }) => {
	const { results, page, total_pages, total_results } = movies;

	return (
		<Suspense>
			<div className="grid sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-4 items-stretch">
				{results.length > 0 &&
					results.map((movie) => (
						<Link href={`/movie/${movie.id}`} key={movie.id}>
							<Card
								isFooterBlurred
								className="h-full mb-4 md:mb-0 hover:scale-[1.02] transition-transform hover:cursor-pointer "
							>
								<Image
									removeWrapper
									alt="Relaxing app background"
									className="z-0 w-full h-full object-cover"
									src={`${baseUrlImage}${movie.poster_path}`}
									loading="lazy"
								/>
								<CardFooter className="absolute bg-black/40 bottom-0 z-10  text-white flex-col items-start">
									<h4 className="font-bold text-large text-nowrap overflow-hidden overflow-ellipsis w-full">
										{movie.title}
									</h4>
									<p className="text-tiny font-bold text-[#dcdcdc]">
										Release date: {movie.release_date}
									</p>
									<small className="text-tiny font-bold text-[#dcdcdc]">
										Category: Movie
									</small>
								</CardFooter>
							</Card>
						</Link>
					))}
			</div>
		</Suspense>
	);
};

export default MovieList;
