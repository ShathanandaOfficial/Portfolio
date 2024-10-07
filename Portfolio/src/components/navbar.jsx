import { Link } from 'react-router-dom';

const navbar = () => {
  return (
    <div>
        <nav className="w-full h-16 list-none font-serif font-extrabold text-2xl flex justify-end space-x-5 px-2 py-5 bg-blue-400">
            <li className=""><Link to="/">Home</Link></li>
            <li className=""><Link to="/About">About</Link></li>
            <li className=""><Link to="Projects">Projects</Link></li>
            <li className=""><Link to="Skills">Skills</Link></li>
            <li className=""><Link to="Contact">Contact</Link></li>
        </nav>
    </div>
  )
}

export default navbar