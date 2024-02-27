import { ElementType } from "react";
import { twMerge } from "tailwind-merge";
import { buttonStyles } from "../Components/Button";
import { data } from "../data/data";

type SmallSideBarItemProps = {
  Icon: ElementType;
  title?: string;
  url: string;
};

type BigSideBarItemProps = {
  Icon: ElementType;
  title?: string;
  url: string;
};

function BigSideBarItem({ Icon, title, url }: BigSideBarItemProps) {
  return (
    <a
      href={url}
      className={twMerge(
        buttonStyles({ variant: "ghost", className: "hover:bg-gray-200" }),
        "pl-2 pr-[60%] flex  items-center rounded-lg gap-4 justify-center "
      )}
    >
      <Icon className="w-6 h-6" />
      <div className="text-sm">{title}</div>
    </a>
  );
}

function SmallSideBarItem({ Icon, title, url }: SmallSideBarItemProps) {
  return (
    <a
      href={url}
      className={twMerge(
        buttonStyles({ variant: "ghost" }),
        "py-4 px-1 flex flex-col items-center rounded-lg gap-1"
      )}
    >
      <Icon className="w-6 h-6" />
      <div className="text-sm">{title}</div>
    </a>
  );
}

export function SideBar({ isVisible }: { isVisible: boolean }) {
  return (
    <div className={` ${isVisible ? "bg-white" : ""}`}>
      <div className={` ${isVisible ? "hidden" : "flex"}`}>
        <aside className=" sticky top-0 overflow-y-auto overflow-hidden pb-4 mx-3 flex-col  lg:flex hidden ">
          {data.map((item) => (
            <SmallSideBarItem
              key={item.id}
              Icon={item.icon}
              title={item.title}
              url={item.url}
            />
          ))}
        </aside>
      </div>

      <div className={`${isVisible ? "flex" : "hidden"}`}>
        <aside className="h-full w-60 flex flex-col  items-start px-4 gap-4 ">
          {data.map((item) => (
            <BigSideBarItem
              key={item.id}
              Icon={item.icon}
              title={item.title}
              url={item.url}
            />
          ))}
        </aside>
      </div>
    </div>
  );
}
