
const Skills = () => {
  return (
    <div className="mx-4 my-4">
      <h1 className="text-4xl font-serif font-bold text-center">Skills</h1>
      <div className="m-12 px-10 flex justify-between space-x-10">
        <div className="w-80 rounded-lg shadow-xl overflow-hidden">
          <img src="https://via.placeholder.com/300" alt="Skill-1" className="w-full h-72 border-b-4 border-blue-800 bg-blue-200" />
          <div className="p-2 text-justify font-serif border-t-2 border-yellow-500">
            <h1 className="font-extrabold text-2xl underline">React</h1>
            <p className="tracking-tight text-slate-600">
              A powerful JavaScript library for building user interfaces. I use React to create dynamic, responsive web 
              applications, leveraging components, hooks, and state management for seamless user experiences.
            </p>
          </div>
        </div>
        <div className="w-80 rounded-lg shadow-xl overflow-hidden">
          <img src="https://via.placeholder.com/300" alt="Skill-2" className="w-full h-72 border-b-4 border-blue-800 bg-blue-200" />
          <div className="p-2 text-justify font-serif border-t-2 border-yellow-500">
            <h1 className="font-extrabold text-2xl underline">MongoDB</h1>
            <p className="tracking-tight text-slate-600">
              A NoSQL database that allows for flexible and scalable data management. I utilize MongoDB for storing and managing 
              data in web applications, enabling efficient CRUD operations and handling complex data structures.
            </p>
          </div>
        </div>
        <div className="w-80 rounded-lg shadow-xl overflow-hidden">
          <img src="https://via.placeholder.com/300" alt="Skill-3" className="w-full h-72 border-b-4 border-blue-800 bg-blue-200" />
          <div className="p-2 text-justify font-serif border-t-2 border-yellow-500">
            <h1 className="font-extrabold text-2xl underline">Node Js</h1>
            <p className="tracking-tight text-slate-600">
              A runtime environment that enables JavaScript to be used for backend development. With Node.js, I build fast, scalable 
              server-side applications and APIs, utilizing its non-blocking, event-driven architecture for high-performance apps.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills