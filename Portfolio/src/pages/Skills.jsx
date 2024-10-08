
const Skills = () => {
  return (
    <div className="mx-4 my-4">
      <h1 className="text-4xl font-serif font-bold text-center">Skills</h1>
      <div className="m-12 px-10 flex justify-between space-x-10">
        <div className="w-80 h-96 rounded-lg shadow-xl overflow-hidden">
          <img src="https://via.placeholder.com/300" alt="Skill-1" className="w-full h-72 border-b-4 border-blue-800 bg-blue-200" />
          <div>
            React
          </div>
        </div>
        <div className="w-80 h-96 rounded-lg shadow-xl overflow-hidden">
          <img src="https://via.placeholder.com/300" alt="Skill-2" className="w-full h-72 border-b-4 border-blue-800 bg-blue-200" />
          <div>
            MongoDB
          </div>
        </div>
        <div className="w-80 h-96 rounded-lg shadow-xl overflow-hidden">
          <img src="https://via.placeholder.com/300" alt="Skill-3" className="w-full h-72 border-b-4 border-blue-800 bg-blue-200" />
          <div>
            Node.js
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills