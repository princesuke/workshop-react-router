import { NavLink } from "react-router" 

export default function Navbar() {
    const styles = {
      liLink: "hover:font-medium hover:text-[#826047] active:font-[200]"
    }

    return <nav className="mb-10">
        <ul className='flex justify-center gap-2 font-light'>
          <li className={styles.liLink}><NavLink to="/">HOME</NavLink> / </li>
          <li className={styles.liLink}><NavLink to="/lifestyle">LIFESTYLE</NavLink> / </li>
          <li className={styles.liLink}><NavLink to="/journey">JOURNEY</NavLink> / </li>
          <li className={styles.liLink}><NavLink to="/inspiration">INSPRIRATION</NavLink> / </li>
          <li className={styles.liLink}><NavLink to="/about">ABOUT / </NavLink> </li>
          <li className={styles.liLink}><NavLink to="/contact">CONTACT / </NavLink></li>
          <li className={styles.liLink}><NavLink to="/shop">SHOP</NavLink></li>
        </ul>
      </nav>
}