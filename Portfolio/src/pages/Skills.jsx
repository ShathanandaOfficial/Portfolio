import Details from '../Details.json';
import Skill from './Skill';

const Skills = () => {

  // const skillSet = Details.slice(0,3);

  return (
    <div className="mx-4 my-4">
      <h1 className="text-4xl font-serif font-bold text-center">Skills</h1>
      <div className='flex justify-center'>
        <div className="grid grid-cols-3 gap-5 my-4 space-x-5">
          {Details.map((detail) => (
            <Skill key={detail.id}  detail={detail} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills