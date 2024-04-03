import { useLoaderData } from "react-router-dom";
import placeholderImage from '../assets/404.jpg'

const Content = () => {
const blog = useLoaderData()
const {cover_image, title, description, published_at, tags} = blog

    return (
        <div
        className=" mx-auto p-2  border-2  
          border-opacity-30 group "
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 bg-gray-500"
          src={cover_image || placeholderImage}
        />
        <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">
          {tags.map((tag) => (
            <a
              key={tag}
              rel="noopener noreferrer"
              href="#"
              className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50"
            >
              #{tag}
            </a>
          ))}
        </div>
      
    </div>
    );
};

export default Content;