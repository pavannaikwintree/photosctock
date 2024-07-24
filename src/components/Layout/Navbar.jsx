import { navlinks } from "../../content/content"
import { logo } from "../../assets/index"
import { Link } from "react-router-dom";

const Navbar = () => {

    return (

        <nav className="absolute top-0 left-0 w-full bg-opacity-50 text-white p-4 z-50">
            <div className="max-w-[80%] px-4 mx-auto">
                <div className="flex items-center justify-between">
                    <div>
                        <Link to="/">
                            <img src={logo} alt="logo" className="w-[100px] md:w-[150px]" />
                        </Link>
                    </div>
                    <ul className="flex space-x-6 items-center hidden md:flex">
                        {navlinks.map((nav, i) => (
                            <li key={i} className="p-2 cursor-pointer hover:border hover:border-gray-100 hover:scale-95 font-semibold hover:text-gray-100">
                                <Link to={nav.url}>{nav.title} </Link>

                            </li>
                        ))}
                    </ul>

                    <div className="md:hidden cursor-pointer" id="mobile-toggle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path className="dark:stroke-white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>

                        <div className=" hidden drop-down w-48 overflow-hidden bg-white rounded-md shadow absolute top-24 right-3 z-10">
                            <ul>
                                <li className="px-3 py-3 text-sm font-medium flex items-center space-x-2 hover:bg-slate-400">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </span>
                                    <span> Wishlist </span>
                                </li>
                                <li className="px-3  py-3 text-sm font-medium flex items-center space-x-2 hover:bg-slate-400">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                        </svg>
                                    </span>
                                    <span> Logout </span>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Navbar;