'use client'

import { motion } from 'framer-motion'

import { rotateIn } from '../utils/motion'

import Namecard from '../components/Namecard'
import Menu from '../components/Menu'
import Signin from '../components/SignIn'
import Register from '../components/Register'

import { useSelector } from 'react-redux'
import { selectNamecard } from '../redux/selectors'

const Content = () => {
  const showNamecard = useSelector(selectNamecard)

  return (
    <motion.div
      variants={rotateIn('right')}
      initial='hidden'
      whileInView={`${
        showNamecard === 'yes' ? 'yes' : showNamecard === 'no' ? 'no' : 'show'
      }`}
      className='w-full h-[70%] sm:h-[70vh] flex justify-center items-center'
    >
      <Namecard />
    </motion.div>
  )
}

export default Content
