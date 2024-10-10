import { Link } from 'react-router-dom';

const navbar = () => {
  return (
    <div>
        <nav className="w-full h-16 list-none sticky font-serif font-thin text-1xl flex justify-end space-x-10 px-5 py-5 text-white bg-blue-800 border-b">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Navbar/About">About</Link></li>
            <li><Link to="/Navbar/Projects">Projects</Link></li>
            <li><Link to="/Navbar/Skills">Skills</Link></li>
            <li><Link to="/Navbar/Contact">Contact</Link></li>
        </nav>
    </div>
  )
}

export default navbar