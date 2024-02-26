import {
  ArrowLeft,
  Bell,
  MenuIcon,
  Mic,
  Search,
  Upload,
  User,
} from "lucide-react";
import { useState } from "react";
import { Button } from "../Components/Button";
import Logo from "../assets/Logo.png";

function PageHeader() {
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);
  return (
    <div className="flex gap-10 lg:gap-20 justify-between mb-4 mt-2 mx-5">
      {/* Left Part */}
      <div
        className={` gap-4 items-center flex-shrink-0 ${
          showFullWidthSearch ? "hidden" : "flex"
        } `}
      >
        <Button variant="ghost" size="icon">
          <MenuIcon />
        </Button>

        <a href="/">
          <img src={Logo} className="h-6" />
        </a>
      </div>

      {/* Middle Part */}

      <form
        className={`     gap-4 flex-grow items-center justify-center ${
          showFullWidthSearch ? "flex" : "hidden md:flex"
        } `}
      >
        <Button
          onClick={() => setShowFullWidthSearch(false)}
          variant={"ghost"}
          type="button"
          size={"icon"}
          className={`flex-shrink-0 hidden ${
            showFullWidthSearch ? "flex" : "hidden"
          } `}
        >
          <ArrowLeft />
        </Button>

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
      <div
        className={`md:gap-2 flex-shrink-0 ${
          showFullWidthSearch ? "hidden" : "flex"
        } `}
      >
        <Button
          onClick={() => setShowFullWidthSearch(true)}
          size={"icon"}
          variant={"ghost"}
          className="md:hidden"
        >
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
