import NavbarElements from "../assets/navbar-elements";
import Menu from "./menu";
import logo from "../assets/logo.jpg";
import Image from "next/image";

const navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 justify-between">
        <Image src={logo} alt="logo" width={100} height={100} />
        <div className="flex-1 hidden md:flex">
          {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
          {Object.entries(NavbarElements).map(([key, value], index) => {
            return (
              <a key={index} className="btn btn-ghost text-xl">
                {key}
              </a>
            );
          })}
        </div>
        <details className="flex-none md:hidden dropdown">
          <summary className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </summary>
          <Menu items={NavbarElements} />
        </details>
        {/* <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default navbar;
