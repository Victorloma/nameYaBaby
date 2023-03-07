'use client'

import { motion } from 'framer-motion'

import { rotateIn } from '../utils/motion'

import Namecard from '../components/Namecard'
import Menu from '../components/Menu'
import Signin from '../components/SignIn'
import Register from '../components/Register'

import { useSelector, useDispatch } from 'react-redux'
import { selectNamecard, selectGender } from '../redux/selectors'
import { useGetNewNameQuery } from '../redux/features/api/apiSlice'
import { setShowNamecard } from '../redux/namecardSlice'

const Content = () => {
  const showNamecard = useSelector(selectNamecard)
  const gender = useSelector(selectGender)
  const dispatch = useDispatch()

  const { refetch } = useGetNewNameQuery(gender)

  const getNewName = (action) => {
    refetch()
    // dispatch(setShowNamecard(action))

    // setTimeout(() => dispatch(setShowNamecard('show')), 500)
    // setTimeout(() => refetch(), 200)
  }

  return (
    <motion.div
      drag='x'
      dragConstraints={{ left: 0, right: 0 }}
      whileDrag={{ rotate: 10 }}
      dragElastic={1.6}
      onDragEnd={(event, info) => {
        if (info.offset.x > 100) {
          getNewName('yes')
        } else if (info.offset.x < -100) {
          getNewName('no')
        }
      }}
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
