'use client'

import { motion } from 'framer-motion'

import { navVariants } from '../utils/motion'

const MenuNavbar = () => {
  return (
    <motion.nav
      variants={navVariants}
      initial='hidden'
      whileInView='show'
      className='pt-8 sm:py-10 mx-20'
    >
      <div className='flex justify-center'>
        <div className=' text-white flex'>
          <h2>Find the name</h2>
          <img
            src='/baby-face-icon-negative.png'
            alt='baby'
            className='text-white h-5 pl-1 self-center'
          />
        </div>
      </div>
    </motion.nav>
  )
}

export default MenuNavbar
