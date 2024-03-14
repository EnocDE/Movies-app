
import { Zenitho, Velustro, Novatrix, Tranquiluxe, Opulento } from "uvcanvas";
import { Nunito } from "next/font/google";
const nunito = Nunito({ subsets: ["latin"], weight: ["900", "700", "500"] });


export default function Hero() {

	return (
		<div
			className={`h-[40rem] w-screen relative z-0 p-5 text-white flex flex-col items-center justify-center ${nunito.className} text-center`}
		>
			<h2 className="text-5xl xl:text-7xl drop-shadow-lg">
				Hola!, Bienvenido a
			</h2>
			<h1 className="text-6xl xl:text-8xl font-bold text-white my-5 drop-shadow-lg">
				Movies App
			</h1>
			<h2 className="text-3xl xl:text-4xl drop-shadow-lg">
				Encuentra tus peliculas favoritas
			</h2>
			<h2 className="text-3xl">o ve lo ultimo en tendencia.</h2>

			<div className="placeholder-opacity-95 absolute inset-0 z-[-1]">
				<Velustro />
			</div>
		</div>
	);
}
