import React from 'react'

function Search() {
  return (
    <div className="drop-shadow-lg h-32 w-[100%] bg-white">
    <div className="flex flex-col mx-3  ">
      <div className="flex justify-between items-center  pt-4">
        <div className="flex justify-start items-center gap-4">
          <h1 className="text-blue-1 text-3xl">Clients</h1>
          <i className="fa-solid fa-timeline text-xl text-sky-300"></i>
          <p className="text-sky-300"> Creation Timeline</p>
        </div>
        <i className="fa-solid fa-square-plus text-sky-300 text-4xl"></i>
      </div>
      <div className="border-2 border-grey-500 w-[100%] flex item-center justify-between p-1 mt-3 rounded-xl">
        <input  placeholder='Company, Entity, User, Domain, Server, Location'
        className="px-3 border-0 w-[95%] border-white active:border-transparent focus:border-transparent disabled:border-transparent" />
        <i class="fa-solid fa-magnifying-glass mt-1 %"></i>
      </div>
    </div>
    <div></div>
  </div>
  )
}

export default Search