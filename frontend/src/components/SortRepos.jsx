import React from 'react'

const SortRepos = ({onSort, sortType}) => {
  const BUTTONS = [
    {type: "recent", text:"Most Recent", color: "border-blue-500"},
    {type: "stars", text:"Most Stars", color: "border-yellow-500"},
    {type: "forks", text:"Most Forks", color: "border-purple-500"},
  ];
  return (
    <div className='flex mb-2 justify-center lg:justify-end'>
    {BUTTONS.map((button)=>(
      <button
        key={button.type}
				type="button"
				className={`py-2.5 px-5 me-2 mb-2 text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass
                    ${button.type === sortType ? button.color : ""}`}
        onClick={()=>onSort(button.type)}
        >
				{button.text}
      </button>
    ))}
        
    </div>
  )
}

export default SortRepos