import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useDeleteVideoMutation } from '../../features/api/apiSlice';

const Description = ({video}) => {
    const { id, title, duration, author, views, date, thumbnail, description } = video;
    const navigate = useNavigate();

    const [deleteVideo, { isSuccess, isLoading, isError }] =
        useDeleteVideoMutation();

    const handleDelete = () => {
        if (id) deleteVideo(id);
    };

    useEffect(() => {
        if (isSuccess) navigate("/");
    }, [isSuccess, navigate]);

  return (
    <div>
            <h1 className="text-lg font-semibold tracking-tight text-slate-800">
                {title}
            </h1>
            <div className="pb-4 flex items-center space-between border-b gap-4">
                <h2 className="text-sm leading-[1.7142857] text-slate-600 w-full">
                    Uploaded on {date}
                </h2>

                <div className="flex gap-6 w-full justify-end">
                    <Link to={`/videos/edit/${id}`} className="flex gap-1 items-center hover:text-blue-600">
                        <div className="shrink-0">
                           <FaEdit className='w-4'/>
                        </div>
                        <div>
                            <span className="text-sm leading-[1.7142857] text-slate-600 cursor-pointer">
                                Edit
                            </span>
                        </div>
                    </Link>
                    <div className="flex gap-1 items-center cursor-pointer hover:text-red-500" onClick={handleDelete}>
                        <div className="shrink-0">
                            <FaTrash className='w-4'/>
                        </div>
                        <div className="text-sm leading-[1.7142857] text-slate-600 cursor-pointer">
                            Delete
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-4 text-sm text-[#334155] dark:text-slate-400">
                {description}
            </div>
        </div>
  )
}

export default Description