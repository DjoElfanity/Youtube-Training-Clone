import { useState } from "react";
import "./App.css";
import { CategoryPills } from "./Components/CategoryPills";

import { VideoGridItem } from "./Components/VideoGridItem";
import PageHeader from "./Layouts/PageHeader";
import { SideBar } from "./Layouts/SideBar";
import { categories, videos } from "./data/home";

function App() {
  const [isSideBarVisible, setIsSideBarVisible] = useState(true);

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  return (
    <div
      className="max-h-screen flex flex-col
"
    >
      <PageHeader
        toggleSideBar={() => setIsSideBarVisible(!isSideBarVisible)}
      />
      <div className={"grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto"}>
        <SideBar isVisible={isSideBarVisible} />

        <div className="overflow-x-hidden mx-2">
          <div className={" sticky top-0 bg-white z-10 pb-4 px-5"}>
            <CategoryPills
              categories={categories}
              selectedCategory={selectedCategory}
              onSelect={setSelectedCategory}
            />
          </div>
          <div
            className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] mr-10 ml-5
 "
          >
            {videos.map((video) => (
              <VideoGridItem key={video.id} {...video} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
