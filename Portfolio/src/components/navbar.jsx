import { Link } from 'react-router-dom';

const navbar = () => {
  return (
    <div>
        <nav className="w-full h-16 list-none font-serif font-extrabold text-2xl flex justify-end space-x-5 px-2 py-5 bg-blue-400">
            <li className="hover:text-white"><Link to="/">Home</Link></li>
            <li className="hover:text-white"><Link to="/Navbar/About">About</Link></li>
            <li className="hover:text-white"><Link to="/Navbar/Projects">Projects</Link></li>
            <li className="hover:text-white"><Link to="/Navbar/Skills">Skills</Link></li>
            <li className="hover:text-white"><Link to="/Navbar/Contact">Contact</Link></li>
        </nav>
    </div>
  )
}

export default navbar