'use client'

import { motion } from 'framer-motion'

import { navVariants } from '../utils/motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMarsAndVenus,
  faMars,
  faVenus,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons'

import { useDispatch, useSelector } from 'react-redux'
import { setShowGender } from '../redux/genderSlice'
import { selectGender } from '../redux/selectors'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import Link from 'next/link'

const Navbar = () => {
  const supabase = useSupabaseClient()
  const dispatch = useDispatch()
  const gender = useSelector(selectGender)

  const logout = async () => {
    const { error } = await supabase.auth.signOut()
  }

  return (
    <motion.nav
      variants={navVariants}
      initial='hidden'
      whileInView='show'
      className='pt-8 pb-4 sm:py-10 mx-20'
    >
      <div className='flex justify-between items-center'>
        <div>
          <FontAwesomeIcon
            icon={faMars}
            size='2x'
            className={`${
              gender === 'M' ? 'opacity-100' : 'opacity-50'
            } text-white hover:cursor-pointer hover:opacity-75 `}
            onClick={() => dispatch(setShowGender('M'))}
          />
          <FontAwesomeIcon
            icon={faVenus}
            size='2x'
            className={`${
              gender === 'F' ? 'opacity-100' : 'opacity-50'
            } text-white mx-5 hover:cursor-pointer hover:opacity-75 `}
            onClick={() => dispatch(setShowGender('F'))}
          />
          <FontAwesomeIcon
            icon={faMarsAndVenus}
            size='2x'
            className={`${
              gender === '*' ? 'opacity-100' : 'opacity-50'
            } text-white hover:cursor-pointer hover:opacity-75 `}
            onClick={() => dispatch(setShowGender('*'))}
          />
        </div>
        <div className=' text-white hidden md:flex pr-[6rem] self-center justify-self-center text-center'>
          <h2>Find the name</h2>
          <img
            src='/baby-face-icon-negative.png'
            alt='baby'
            className='text-white h-5 pl-1 self-center'
          />
        </div>
        <Link href='/menu'>
          <img
            src='/menu.svg'
            className='text-white h-5 opacity-75 hover:opacity-100 hover:cursor-pointer'
          />
        </Link>
      </div>
    </motion.nav>
  )
}

export default Navbar
