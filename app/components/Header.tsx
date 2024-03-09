import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	Input,
} from "@nextui-org/react";
import Image from "next/image";
import { SearchIcon } from "./icons/SearchIcon";
import Switcher from "./Switcher";
import MovieIcon from "./icons/movie-clapperboard-part-2-svgrepo-com.svg"

export default function Header() {
	return (
			<Navbar isBordered maxWidth="2xl">
				<NavbarContent justify="start">
            <Image className="md:mr-2" src={MovieIcon} width={24} height={24} alt="Logo movies app" />
						<p className="font-bold text-inherit hidden md:block">Movies APP</p>
				</NavbarContent>

				<NavbarContent as="div" className="items-center">
					<Input
						classNames={{
              base: "md:w-[400px]",
							mainWrapper: "h-full",
							input: "text-small",
							inputWrapper:
								"h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
						}}
						placeholder="Type to search..."
						size="sm"
						startContent={<SearchIcon size={18} />}
						type="search"
					/>
				</NavbarContent>

				<NavbarContent as="div" className="w-[80px] md:w-auto" justify="end">
					<Switcher />
				</NavbarContent>
			</Navbar>
	);
}
