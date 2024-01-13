import { useState } from "react";
import { useAddVideoMutation } from "../../features/api/apiSlice";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const Form = () => {
  const [addVideo, { isLoading, isSuccess, isError }] = useAddVideoMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    // let id = (Math.random() + 1).toString(36).substring(2);
    // console.log(id);
    // data.id = id;
    data.date = formatDate(new Date());

    // console.log(data);
    try {
      addVideo(data);
      alert("Video added successfully");
      navigate("/");
    } catch (error) {
      alert("An error has occurred");
    }

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg">
      {/* title and author */}
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Video title
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            {...register("title", { required: true })}
            placeholder="Video title"
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Author
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            {...register("author", { required: true })}
            placeholder="Jone Doe"
          />
        </div>
      </div>

      {/* video link & thumbnail */}
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            YouTube Video link
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password"
            type="url"
            {...register("link", { required: true })}
            placeholder="http://www.youtube.com/123"
          />
          <p className="text-gray-600 text-xs italic">
            Make it as long and as appropriate you can
          </p>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            YouTube Thumbnail
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="url"
            {...register("thumbnail", { required: true })}
            placeholder="https://www.yt-thumbnail.com/1img.jpg"
          />
          <p className="text-gray-600 text-xs italic">
            Make it as long and as crazy as youd like
          </p>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-2">
        {/* duration */}
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Video Duration
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-zip"
            type="text"
            placeholder="1:21:56 hr"
            {...register("duration", { required: true })}
          />
        </div>

        {/* views  */}
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Video no of views
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            {...register("views", { required: true })}
            placeholder="12k"
          />
        </div>

        {/* category */}
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Video Category
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              {...register("category", { required: true })}
            >
              <option value="">Choose Category</option>
              <option value="react">React JS</option>
              <option value="mern">Mern Stack</option>
              <option value="typescript">TypeScript</option>
              <option value="tailwind">Tailwind CSS</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* video description */}
      <div className="flex flex-wrap -mx-3 mt-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Video Description
          </label>
          <textarea rows={4}  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
           
           type="text"
           {...register("description", { required: true })}
           placeholder="video description here..."></textarea>
        </div>
      </div>

      <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
        <button
          disabled={isLoading}
          type="submit"
          className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500"
        >
          Add Video
        </button>
      </div>
    </form>
  );
};

export default Form;
