import Sidebar from '../sidebar/Sidebar'
import './navbar.scss'
import {motion} from "framer-motion"

const Navbar = () => {
  return (
    <div className='navbar'>
      {/* sidebar */}
      <Sidebar />
      <div className='wrapper'>
        <motion.span
            initial={{opacity:0, scale:0.5}}
            animate={{opacity:1, scale:1}}
            transition={{duration:0.5}}
        >
            Aimad Samah
        </motion.span>
        <div className='social'>
            <a href='https://www.linkedin.com/in/aimad-samah-738360285'><img src='/linkedin.png' alt='' /></a>
            <a href='https://www.instagram.com/imeeed.s/'><img src='/instagram.png' alt='' /></a>
            <a href='https://www.facebook.com/aimadsamah18/'><img src='/facebook.png' alt='' /></a>
            
            
        </div>
      </div>
    </div>
  )
}

export default Navbar
