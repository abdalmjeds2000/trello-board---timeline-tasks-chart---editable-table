import React from "react";

const CustomCard: React.FC<CustomCardProps> = ({
  id, title, description, status, tags
}) => {
  return (
    <div className="relative px-6 py-3 bg-white rounded-md border shadow-lg mb-2">
      <button type="button" className="absolute right-2 top-2 w-8 h-8 aspect-square rounded-full flex items-center justify-center hover:bg-gray-200">
        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#aaa"><path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z"/></svg>
      </button>

      <label style={{ backgroundColor:  status === 'Pending' ? 'orange' : status === 'Approved' ? 'green' : 'red'}} className="block w-8 h-1.5 rounded-full mb-2" />
      <h3 className="font-semibold text-base text-gray-800 leading-tight mb-2">{title}</h3>
      <p className="text-xs text-gray-600 mb-2">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags?.map(tag => (
          <span className="text-[10px] text-gray-600 bg-gray-100 rounded-sm px-2 py-0.5">{tag}</span>
        ))}
      </div>
    </div>
  )
}

export default CustomCard