"use client";
import { Input } from "@nextui-org/react";
import { SearchIcon } from "./icons/SearchIcon";
import { useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function Search() {
	const searchParams = useSearchParams();
	const { replace } = useRouter();

	const handleOnChange = useDebouncedCallback((value: string) => {
		const params = new URLSearchParams(searchParams);

		params.set("page", "1");

		if (value) {
			params.set("query", value);
		} else {
			params.delete("query");
		}
		const query = `/?${params.toString()}`;

		replace(query);
	}, 600);

	return (
		<Input
			classNames={{
				base: "md:w-[400px]",
				mainWrapper: "h-full",
				input: "text-small",
				inputWrapper:
					"h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
			}}
			placeholder="Buscar"
			size="md"
			startContent={<SearchIcon size={18} />}
			type="search"
			onChange={(e) => handleOnChange(e.target.value)}
		/>
	);
}
