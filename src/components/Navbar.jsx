import { NavLink } from "react-router" 

export default function Navbar() {
    return <nav>
        <ul className='flex justify-center gap-2 font-light'>
          <li><NavLink to="#">HOME</NavLink> / </li>
          <li><NavLink>LIFESTYLE</NavLink> / </li>
          <li><NavLink>JOURNEY</NavLink> / </li>
          <li><NavLink>INSPRIRATION</NavLink> / </li>
          <li><NavLink>ABOUT</NavLink> </li>
          <li><NavLink>CONTACT</NavLink></li>
        </ul>
      </nav>
}