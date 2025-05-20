import { NavLink, useParams } from "react-router" 


export default function Navbar() {
   const {lang} = useParams();

    const styles = {
      liLink: "hover:font-medium hover:text-[#826047] active:font-[200]"
    }

    return <nav className="mb-10">
        <ul className='flex justify-center gap-2 font-light'>
          <li className={styles.liLink}><NavLink to={`/${lang}`} end>HOME</NavLink> / </li>
          <li className={styles.liLink}><NavLink to={`/${lang}/lifestyle`}>LIFESTYLE</NavLink> / </li>
          <li className={styles.liLink}><NavLink to={`/${lang}/journey`}>JOURNEY</NavLink> / </li>
          <li className={styles.liLink}><NavLink to={`/${lang}/inspiration`}>INSPRIRATION</NavLink> / </li>
          <li className={styles.liLink}><NavLink to={`/${lang}/about`}>ABOUT / </NavLink> </li>
          <li className={styles.liLink}><NavLink to={`/${lang}/contact`}>CONTACT / </NavLink></li>
          <li className={styles.liLink}><NavLink to={`/${lang}/shop`}>SHOP</NavLink></li>
        </ul>
      </nav>
}