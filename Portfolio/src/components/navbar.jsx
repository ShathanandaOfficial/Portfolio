import Home from '../pages/Home'

const navbar = () => {
  return (
    <div>
        <nav className="w-full h-16 list-none font-serif font-extrabold text-2xl flex justify-end space-x-5 px-2 py-5 bg-blue-400">
            <li className=""><a href="">Home</a></li>
            <li className=""><a href="">About</a></li>
            <li className=""><a href="">Projects</a></li>
            <li className=""><a href="">Skills</a></li>
            <li className=""><a href="">Contact</a></li>
        </nav>
    </div>
  )
}

export default navbar