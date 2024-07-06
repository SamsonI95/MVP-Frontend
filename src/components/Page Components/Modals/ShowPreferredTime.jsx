import React from 'react'

const ShowPreferredTime = () => {
  return (
    <div className="absolute top-[83px] min-h-[150px] z-50 bg-white w-full shadow-md rounded-lg  overflow-hidden transition-all duration-300">
      {/* {isLoading ? (
        <div className="flex items-center justify-between w-full">
          {" "}
          <ScaleLoader
            color="#2F4EED"
            height={25}
            className="mx-auto"
            type="submit"
          />
        </div>
      ) : ( */}
        {/* assets.map((asset, index) => ( */}
          <div
            className='flex justify-between items-center w-full duration-200'
        >
            <div className="flex flex-col items-start gap-3 w-full">
                <p className="text-[#9C9C9C] text-[.875rem] leading-4 font-semibold cursor-pointer hover:bg-[#F7F7F7] py-3 px-4 w-full">
                  Days of the week
                </p>
                <p className="text-[#9C9C9C] text-[.875rem] leading-4 font-semibold cursor-pointer hover:bg-[#F7F7F7] py-3 px-4 w-full">
                  Days of the week
                </p>
                <p className="text-[#9C9C9C] text-[.875rem] leading-4 font-semibold cursor-pointer hover:bg-[#F7F7F7] py-3 px-4 w-full">
                  Days of the week
                </p>
                <p className="text-[#9C9C9C] text-[.875rem] leading-4 font-semibold cursor-pointer hover:bg-[#F7F7F7] py-3 px-4 w-full">
                  Days of the week
                </p>
            </div>
          </div>
        {/* )) */}
      {/* )} */}
    </div>
  )
}

export default ShowPreferredTime