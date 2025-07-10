import type { SVGProps } from "react";

const BackToTop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={15}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M3.125 5.313v2.812L7.5 5l4.375 3.125V5.312L7.5 2.188 3.125 5.313Z"
    />
    <path
      fill="#fff"
      d="M3.125 9.688V12.5L7.5 9.375l4.375 3.125V9.687L7.5 6.563 3.125 9.688Z"
    />
  </svg>
);
export default BackToTop;
