import { Clapperboard, Home, Library, Repeat } from "lucide-react";
import { ElementType } from "react";
import { twMerge } from "tailwind-merge";
import { buttonStyles } from "../Components/Button";

export function SideBar() {
  return (
    <aside className=" sticky top-0 overflow-y-auto overflow-hidden pb-4 flex flex-col mx-3  lg:hidden ">
      <SmallSideBarItem Icon={Home} title="Home" url="/" />
      <SmallSideBarItem Icon={Repeat} title="Shorts" url="/" />
      <SmallSideBarItem Icon={Clapperboard} title="Subscriptions" url="/" />
      <SmallSideBarItem Icon={Library} title="Library" url="/" />
    </aside>
  );
}

type SmallSideBarItemProps = {
  Icon: ElementType;
  title: string;
  url: string;
};

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
