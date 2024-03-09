"use client";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "./icons/MoonIcon";
import { SunIcon } from "./icons/SunIcon";

export default function Switcher() {
	return (
		<Switch
			defaultSelected
			size="lg"
			color="success"
			startContent={<SunIcon />}
			endContent={<MoonIcon />}
		></Switch>
	);
}
