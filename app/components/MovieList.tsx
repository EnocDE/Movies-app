import React, { FC } from "react";
import { Movies } from "../types";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";

interface MovieListI {
	movies: Movies;
}

const baseUrlImage = "https://image.tmdb.org/t/p/original";

const MovieList: FC<MovieListI> = ({ movies }) => {
	const { results, page, total_pages, total_results } = movies;
	return (
		<div className="md:grid md:grid-cols-4 gap-4">
			{results.length > 0 &&
				results.map((movie) => (
					<Card
						isFooterBlurred
						className=" h-[300px] mb-4 md:mb-0 hover:scale-105 transition-transform hover:cursor-pointer"
						key={movie.id}
					>
						<Image
							removeWrapper
							alt="Relaxing app background"
							className="z-0 w-full h-full object-cover"
							src={`${baseUrlImage}${movie.backdrop_path}`}
						/>
						<CardFooter className="absolute bg-black/40 bottom-0 z-10  text-white flex-col items-start">
							<h4 className="font-bold text-large">{movie.title}</h4>
							<p className="text-tiny font-bold text-[#dcdcdc]">
								Release date: {movie.release_date}
							</p>
							<small className="text-tiny font-bold text-[#dcdcdc]">
								Category: Movie
							</small>
						</CardFooter>
					</Card>
				))}
		</div>
	);
};

export default MovieList