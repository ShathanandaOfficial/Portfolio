import Details from '../Details.json';
import Skill from './Skill';

const Skills = () => {
  return (
    <div className="mx-4 my-4">
      <h1 className="text-4xl font-serif font-bold text-center">Skills</h1>
      <div className="m-12 px-10 flex justify-between space-x-10">
        {Details.map((detail) => (
          <Skill key={detail.id}  detail={detail} />
        ))}
      </div>
    </div>
  )
}

export default Skills