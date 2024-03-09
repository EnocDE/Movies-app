import { SVGProps } from "react";

type SVGprops = SVGProps<SVGSVGElement>

interface SVGIcon extends SVGprops {
  size?: number
}
