import { NavLink} from "react-router-dom"
import { Newspaper, Folder, User, Users, LogOut } from "lucide-react"

const SideBar = () => {
  const linkClass = ({isActive}) => isActive ? "pl-2 pr-6 py-2 text-[15px] text-white bg-primary rounded-sm flex items-center transition duration-300": "pl-2 pr-6 py-2 text-[15px] text-gray-600 flex items-center transition duration-300";
  return (
    <div className="w-1/6 h-screen shadow-md pt-24 relative">
        <ul className="space-y-4 pl-4 pr-3">
            <li>
              <NavLink to="/" className={linkClass}>
                <Folder size={18} className="mr-2"/>
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="articles" className={linkClass}>
                <Newspaper size={18} className="mr-2"/>
                Articles
              </NavLink>
            </li>
            <li>
              <NavLink to="resources" className={linkClass}>
                <Folder size={18} className="mr-2"/>
                Resources
              </NavLink>
            </li>
            <li>
              <NavLink to="community" className={linkClass}>
                <Users size={18} className="mr-2"/>
                Community
              </NavLink>
            </li>
            <li>
              <NavLink to="profile" className={linkClass}>
                <User size={18} className="mr-2"/>
                Profile
              </NavLink>
            </li>
        </ul>
        <div className="absolute w-full bottom-0 border-t-2 border-t-gray-200 shadow-xs px-6 py-6">
            <NavLink className="pl-2 pr-6 py-2 text-[15px] text-gray-600 flex items-center transition duration-300">
              <LogOut size={18} className="mr-2"/>
              Logout
            </NavLink>
        </div>
    </div>
  )
}

export default SideBar;
