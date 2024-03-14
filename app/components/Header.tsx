import Link from "next/link";
import { Navbar, NavbarContent } from "@nextui-org/react";
import Image from "next/image";
import Switcher from "./Switcher";
import MovieIcon from "./icons/movie-clapperboard-part-2-svgrepo-com.svg";
import Search from "./Search";
import { Suspense } from "react";
import LoadingSpinner from "./LoadingSpinner";

export default function Header() {
	return (
		<Navbar isBordered maxWidth="2xl" className=" ">
			<NavbarContent>
				<Link href="/" className="flex gap-1">
					<Image
						className="mx-auto md:ml-0 md:mr-2 min-w-[24px]"
						src={MovieIcon}
						width={24}
						height={24}
						alt="Logo movies app"
					/>
				</Link>
			</NavbarContent>

			<NavbarContent as="div" className="">
				<Suspense fallback={<LoadingSpinner/>}>
					<Search />
				</Suspense>
			</NavbarContent>

			<NavbarContent as="div" className="w-[80px] md:w-auto" justify="end">
				<Switcher />
			</NavbarContent>
		</Navbar>
	);
}
