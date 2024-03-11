"use client";
import { Pagination } from "@nextui-org/react";
import { useRouter, useSearchParams } from "next/navigation";
import { FC, Suspense } from "react";

interface PaginationI {
	pages: number;
	page: number;
}

const Paginations: FC<PaginationI> = ({ page, pages }) => {
	const searchParams = useSearchParams();
	const router = useRouter();

	function handleOnChange(_page: number) {
		const params = new URLSearchParams(searchParams);
		params.set("page", _page.toString());
		router.replace(`?${params}`);
	}

	return (
		<Suspense>
			<Pagination
				showControls
				page={page}
				total={pages}
				initialPage={1}
				onChange={handleOnChange}
			/>
		</Suspense>
	);
};

export default Paginations;
