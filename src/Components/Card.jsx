import { useState } from "react"; // Import useState for state management
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { Card } from "flowbite-react";

export default function CardProduct({
  title,
  content,
  author,
  profileImage,
  categories,
  thumbnail,
  id,
}) {
  // State to track whether the blog is liked
  const [isLiked, setIsLiked] = useState(false);

  // Toggle the like state
  const handleLikeClick = () => {
    setIsLiked((prevState) => !prevState);
  };

  return (
    // <div className="group relative block overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    //   {/* Blog Image */}
    //   <img
    //     src={
    //       tumtail ||
    //       "https://images.unsplash.com/photo-1628202926206-c63a34b1618f?q=80&w=2574&auto=format&fit=crop"
    //     }
    //     alt={title || "Blog post image"}
    //     className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 rounded-t-lg"
    //   />

    //   {/* Content Section */}
    //   <div className="relative border border-gray-100 bg-white p-6">
    //     {/* Author and Profile */}
    //     <div className="flex items-center mb-4">
    //       <img
    //         src={profileImage || "/image/user.png"}
    //         alt={author || "Author"}
    //         className="w-8 h-8 rounded-full mr-4"
    //       />
    //       <span className="text-sm font-semibold text-gray-800">
    //         {author ||
    //           "https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3407.jpg?w=360"}
    //       </span>
    //     </div>

    //     {/* Blog Title */}
    //     <h3 className="mt-1.5 text-lg font-medium text-gray-900 line-clamp-1">
    //       {title || "Default Blog Title"}
    //     </h3>

    //     {/* Blog Description */}
    //     <p className="mt-1.5 line-clamp-3 text-gray-700">
    //       {content || "Default blog content description"}
    //     </p>

    //     {/* Categories Section */}
    //     <div className="flex flex-wrap gap-2 text-sm text-blue-500 mb-4">
    //       {categories?.map((category) => (
    //         <span
    //           key={category.name}
    //           className="inline-block bg-blue-100 text-blue-600 px-2 py-1 rounded-full"
    //         >
    //           #{category.name}
    //         </span>
    //       ))}
    //     </div>

    //     {/* Footer with "Read More" and "Like" button */}
    //     <div className="flex justify-between items-center mt-4">
    //       {/* Read More Button */}
    //       <Link
    //         to={`/blog/${id}`} // Use Link for navigation
    //         className="text-blue-600 font-medium hover:text-blue-800"
    //       >
    //         Read more &rarr;
    //       </Link>

    //       {/* Like Button */}
    //       <button
    //         onClick={handleLikeClick} // Handle the like toggle
    //         className="flex items-center text-gray-900 transition hover:text-red-600"
    //       >
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill={isLiked ? "currentColor" : "none"} // Change fill based on like status
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //           className={`w-6 h-6 ${
    //             isLiked ? "text-red-600" : "text-gray-900"
    //           }`} // Apply color change based on like status
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
    //           />
    //         </svg>
    //         <span className={`ml-2 ${isLiked ? "text-red-600" : ""}`}>
    //           {isLiked ? "Liked" : "Like"}
    //         </span>
    //       </button>
    //     </div>
    //   </div>
    // </div>
    // <Card
    //   className="max-w-sm"
    //   renderImage={() => <Image width={500} height={500} src="/images/blog/image-1.jpg" alt="image 1" />}
    // >
    //   <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    //     Noteworthy technology acquisitions 2021
    //   </h5>
    //   <p className="font-normal text-gray-700 dark:text-gray-400">
    //     Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
    //   </p>
    // </Card>
    <div className="group relative block max-w-sm w-full overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Blog Thumbnail at the Top */}
      <img
        src={thumbnail || "https://via.placeholder.com/600x400"} // Placeholder if no image is provided
        alt={title || "Blog Post Thumbnail"}
        className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 rounded-t-lg"
      />

      {/* Content Section */}
      <div className="relative border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 p-6">
        {/* Author and Profile */}
        <div className="flex items-center mb-4">
          <img
            src={
              profileImage ||
              "https://media.istockphoto.com/id/2151669184/vector/vector-flat-illustration-in-grayscale-avatar-user-profile-person-icon-gender-neutral.jpg?s=612x612&w=0&k=20&c=UEa7oHoOL30ynvmJzSCIPrwwopJdfqzBs0q69ezQoM8="
            }
            alt={author || "Author"}
            className="w-8 h-8 rounded-full mr-2"
          />
          <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
            {author || "Unknown Author"}
          </span>
        </div>

        {/* Blog Title */}
        <h2 className="mt-1.5 text-xl font-bold text-gray-900 dark:text-white line-clamp-1 truncate">
          {title || "Default Blog Title"}
        </h2>

        {/* Blog Description */}
        <p className="mt-1.5 line-clamp-3 text-gray-700 dark:text-gray-300 truncate">
          {content || "Default blog content description"}
        </p>

        {/* Categories Section - Show Only 2 Categories */}
        <div className="flex flex-wrap gap-2 text-sm text-blue-500 dark:text-blue-400 mb-4">
          {categories?.slice(0, 2).map((category) => (
            <span
              key={category.name}
              className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-2 py-1 rounded-full"
            >
              #{category.name}
            </span>
          ))}
          {categories?.length > 2 && (
            <span className="text-gray-500 dark:text-gray-400">
              ...and more
            </span>
          )}
        </div>

        {/* Footer with "Read More" and "Like" button */}
        <div className="flex justify-between items-center mt-4">
          {/* Read More Button */}
          <Link
            to={`/blog/${id}`} // Navigate to the detailed blog page
            className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300"
          >
            Read more &rarr;
          </Link>

          {/* Like Button */}
          <button
            onClick={handleLikeClick} // Toggle like status
            className="flex items-center text-gray-900 dark:text-gray-200 transition hover:text-red-600 dark:hover:text-red-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={isLiked ? "currentColor" : "none"} // Change fill color based on like status
              viewBox="0 0 24 24"
              stroke="currentColor"
              className={`w-6 h-6 ${
                isLiked
                  ? "text-red-600 dark:text-red-400"
                  : "text-gray-900 dark:text-gray-200"
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              />
            </svg>
            <span
              className={`ml-2 ${
                isLiked ? "text-red-600 dark:text-red-400" : ""
              }`}
            >
              {isLiked ? "Liked" : "Like"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
