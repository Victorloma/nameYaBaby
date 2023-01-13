'use client'

import { motion } from 'framer-motion'

import { rotateIn } from '../utils/motion'

import Namecard from '../components/Namecard'
import Menu from '../components/Menu'
import Signin from '../components/SignIn'
import Register from '../components/Register'

const Content = () => {
  return (
    <motion.div
      variants={rotateIn('right')}
      initial='hidden'
      whileInView='show'
      className='w-full h-[70%] sm:h-[70vh] flex justify-center items-center'
    >
      <Namecard />
    </motion.div>
  )
}

export default Content
