import NavbarElements from "../assets/navbar-elements";
import Menu from "./menu";
import logo from "../assets/bandhan-modified.png";
import Image from "next/image";

const navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 justify-between">
        <Image src={logo} alt="logo" width={100} height={100} />
        <div className="flex-1 hidden md:flex justify-end">
          {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
          {Object.entries(NavbarElements).map(([key, value], index) => {
            if (!value.sub) {
              return (
                <a
                  key={index}
                  className="btn btn-ghost text-xl"
                  href={value.url}
                >
                  {key}
                </a>
              );
            }
            return (
              // <a key={index} className="btn btn-ghost text-xl" href={value.url}>
              //   {key}
              // </a>
              <details className="dropdown pl-4 pr-4" key={index}>
                <summary className="btn btn-square btn-ghost w-full p-2 text-xl">
                  {key}
                  {value.sub && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform group-focus:rotate-180"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  )}
                </summary>
                <Menu items={value.sub} />
              </details>
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
      </div>
    </div>
  );
};

export default navbar;
