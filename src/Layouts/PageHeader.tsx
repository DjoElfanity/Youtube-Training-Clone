import { Bell, MenuIcon, Mic, Search, Upload, User } from "lucide-react";
import { Button } from "../Components/Button";
import Logo from "../assets/Logo.png";

function PageHeader() {
  return (
    <div className="flex gap-10 lg:gap-20 justify-between">
      {/* Left Part */}
      <div className="flex gap-4 items-center flex-shrink-0 ">
        <Button variant="ghost" size="icon">
          <MenuIcon />
        </Button>

        <a href="/">
          <img src={Logo} className="h-6" />
        </a>
      </div>

      {/* Middle Part */}

      <form className=" md:flex   hidden  gap-4 flex-grow items-center justify-center">
        <div className="flex  flex-grow max-w-[600px]">
          <input
            type="search"
            placeholder="Search"
            className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg w-full focus:border-blue-500 focus:outline-none "
          />
          <Button
            variant={"ghost"}
            className="flex rounded-r-full py-2 px-4  border-secondary-border border border-1-0 flex-shrink-0"
          >
            <Search />
          </Button>
        </div>
        <Button type="button" size={"icon"} className="flex-shrink-0 ">
          <Mic />
        </Button>
      </form>

      {/* Right Part */}
      <div className="flex md:gap-2 flex-shrink-0 ">
        <Button size={"icon"} variant={"ghost"} className="md:hidden">
          <Search />
        </Button>
        <Button size={"icon"} variant={"ghost"} className="md:hidden">
          <Mic />
        </Button>
        <Button size={"icon"} variant={"ghost"}>
          <Upload />
        </Button>

        <Button size={"icon"} variant={"ghost"}>
          <Bell />
        </Button>

        <Button size={"icon"} variant={"ghost"}>
          <User />
        </Button>
      </div>
    </div>
  );
}

export default PageHeader;
