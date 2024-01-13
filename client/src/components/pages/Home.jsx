import React, { useEffect, useState } from "react";
import Video from "./Video";
import Search from "../shared/Search";
import { useGetVideosQuery } from "../../features/api/apiSlice";

const Home = () => {
  const { data: videos, isLoading, isError } = useGetVideosQuery();

  const [selectedVideos, setSelectedVideos] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState(null);

  useEffect(() => {
    setSelectedVideos(videos);
  }, [videos]);

  useEffect(() => {
    if (categoryFilter) {
      const filteredVideos = videos?.filter(
        (video) => video.category === categoryFilter
      );
      setSelectedVideos(filteredVideos);
    } else {
      setSelectedVideos(videos);
    }
  }, [categoryFilter, videos]);

  const handleSearch = (searchText) => {
    const text = searchText.toLowerCase();

    if (searchText !== "") {
      const filteredVideos = videos?.filter((video) => {
        const videoTitle = video.title.toLowerCase();
        return videoTitle.includes(text);
      });
      setSelectedVideos(filteredVideos);
    }
  };

  return (
    <section className="pt-6 pb-20 min-h-[calc(100vh_-_157px)] max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center mt-2 mb-5 gap-4">
        <div className="flex gap-2">
          <button
            onClick={() => setCategoryFilter(null)}
            className={`${
              categoryFilter === null
                ? "bg-blue-500 text-white"
                : "bg-blue-100 text-blue-600"
            } px-4 py-1 rounded-full cursor-pointer`}
          >
            All
          </button>
          <button
            onClick={() => setCategoryFilter("react")}
            className={`${
              categoryFilter === "react"
                ? "bg-blue-500 text-white"
                : "bg-blue-100 text-blue-600"
            } px-4 py-1 rounded-full cursor-pointer`}
          >
            React
          </button>
          <button
            onClick={() => setCategoryFilter("nextjs")}
            className={`${
              categoryFilter === "nextjs"
                ? "bg-blue-500 text-white"
                : "bg-blue-100 text-blue-600"
            } px-4 py-1 rounded-full cursor-pointer`}
          >
            Next JS
          </button>
          <button
            onClick={() => setCategoryFilter("tailwind")}
            className={`${
              categoryFilter === "tailwind"
                ? "bg-blue-500 text-white"
                : "bg-blue-100 text-blue-600"
            } px-4 py-1 rounded-full cursor-pointer`}
          >
            Tailwind CSS
          </button>
        </div>
        <Search handleSearch={handleSearch} />
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 px-5 lg:px-0 min-h-[300px]">
        {selectedVideos?.length > 0 ? (
          selectedVideos.map((video) => <Video key={video.id} video={video} />)
        ) : (
          <div>No Videos Found !!!</div>
        )}
      </div>
    </section>
  );
};

export default Home;
