"use client";
import { Switch } from "@nextui-org/react";
import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
import { MoonIcon } from "./icons/MoonIcon";
import { SunIcon } from "./icons/SunIcon";

export default function Switcher() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

  function handleOnSwitch() {
    const mode = theme === 'dark' ? 'light' : 'dark';
    setTheme(mode)
  }

	if (!mounted) return null;
  
	return (
		<Switch
			size="lg"
			color="success"
			startContent={<SunIcon />}
			endContent={<MoonIcon />}
      onClick={() => handleOnSwitch()}
		></Switch>
	);
}
