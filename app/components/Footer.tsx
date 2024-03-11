import React from "react";
import Image from "next/image";
import MovieIcon from "./icons/movie-clapperboard-part-2-svgrepo-com.svg";

export default function Footer() {
	return (
		<footer className="border-t dark:border-[#1a1a1a] transition-colors py-10">
			<div className="container mx-auto max-w-[90%]">
				<div className="grid grid-flow-row grid-cols-2 gap-5 md:grid-cols-5 md:gap-0 md:grid-flow-col pb-10 uppercase font-bold">
					<nav className="flex flex-col justify-between">
						<a href="https://www.themoviedb.org" className="">
							<Image
								src="/tmdb.svg"
								alt="TMDB logo"
								width={50}
								height={50}
								className=""
							/>
						</a>
					</nav>
					<nav className="flex flex-col">
						<h3>TMDB</h3>
						<a href='https://www.themoviedb.org/' className="hover:text-[#acacac] dark:hover:text-white transition-colors">
							Inicio
						</a>
						<a
							className="hover:text-[#acacac] dark:hover:text-white transition-colors"
							href="https://developer.themoviedb.org/reference/intro/getting-started"
						>
							API
						</a>
					</nav>
					<nav className="flex flex-col">
						<h3>Designed by</h3>
						<a className="transition-colors bg-gradient-to-r from-violet-500 to-rose-600 bg-clip-text text-transparent" href="#">
							Enoc Dominguez
						</a>
						<a
							className="transition-colors bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
							href="https://anjrot.com/"
						>
							AnjrotDev{" "}
						</a>
					</nav>
					<nav className="flex flex-col">
						<a className="hover:text-[#acacac] dark:hover:text-white transition-colors" href="#">
							Servicios
						</a>
						<a className="hover:text-[#acacac] dark:hover:text-white transition-colors" href="#">
							Costos
						</a>
					</nav>
					<nav className="flex flex-col">
						<a className="hover:text-[#acacac] dark:hover:text-white transition-colors" href="#">
							Inicio
						</a>
						<a className="hover:text-[#acacac] dark:hover:text-white transition-colors" href="#">
							Acerca de
						</a>
						<a className="hover:text-[#acacac] dark:hover:text-white transition-colors" href="#">
							Contacto
						</a>
						<a
							className="hover:text-[#1db8d8] transition-colors"
							href="https://www.themoviedb.org"
						>
							TMDB
						</a>
					</nav>
				</div>
				<hr className="dark:border-[#1a1a1a] transition-colors" />
				<div className="pt-10 text-center">
          <nav className="flex justify-center gap-4 mb-8">
            <a className="dark:invert transition-all hover:mt-[-7px]" href="https://www.instagram.com/edmz_/" target="_blank"><Image src='/ig.png' alt="icono red social instagram" width={32} height={32} /></a>
            <a className="dark:invert transition-all hover:mt-[-7px]" href="#" target="_blank"><Image src='/youtube.png' alt="icono red social github" width={32} height={32} /></a>
            <a className="dark:invert transition-all hover:mt-[-7px]" href="https://github.com/EnocDE" target="_blank"><Image src='/gh.png' alt="icono red social github" width={32} height={32} /></a>
            <a className="dark:invert transition-all hover:mt-[-7px]" href="https://www.linkedin.com/in/enocde-v/" target="_blank"><Image src='/linkedIn.png' alt="icono red social linked" width={32} height={32} /></a>
          </nav>
					<p>Todos los derechos reservados {new Date().getFullYear()}</p>
				</div>
			</div>
		</footer>
	);
}
