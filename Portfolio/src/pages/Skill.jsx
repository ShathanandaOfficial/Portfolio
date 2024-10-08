import { useState } from 'react'

const Skill = ({ detail }) => {
  const [show, setShow] = useState(false);
  let Description = detail.description;
  if(!show) {
    Description = Description.substring(0, 100) + "...";
  }
  return (
    <div className="w-80 rounded-lg shadow-xl overflow-hidden">
        <img src="https://via.placeholder.com/300" alt="Skill-1" className="w-full h-72 border-b-4 border-blue-800 bg-blue-200" />
        <div className="p-2 text-justify font-serif border-t-2 border-yellow-500">
            <h1 className="font-extrabold text-2xl underline">{detail.title}</h1>
            <p className="tracking-tight text-slate-600">
              {Description}
            </p>
            <button onClick={() => setShow((prev) => !prev)} className='font-bold bg-blue-400 px-3 py-1 mt-2 ml-1 rounded-lg hover:bg-blue-700 hover:text-white focus:bg-blue-900 focus:text-white focus:ring focus:ring-blue-300'>{!show ? "More" : "Less"}</button>
        </div>
    </div>
  )
}

export default Skill