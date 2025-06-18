import React from 'react'

const Card = (props) => {
  console.log("props");
  console.log(props); 
  
  return (
    <>
        <div className="relative h-[400px] w-[300px] rounded-md ">
        <img
          src="https://images.pexels.com/photos/12352497/pexels-photo-12352497.jpeg"
          alt="AirMax Pro"
          className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">{props.name || "Dobby"}</h1>
          <p className="mt-2 text-sm text-gray-300">
            Wonder Dog who is loyal and trustfull, loves his master with his life🩷
          </p>
          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white hover:text-blue-400 transition duration-300">
            View Profile <span className="ml-2">✏️</span>
          </button>
        </div>
      </div>
      </>
  )
}

export default Card