'use client'

import { motion } from 'framer-motion'

import { rotateIn } from '../utils/motion'

import Namecard from '../components/Namecard'

import { useSelector, useDispatch } from 'react-redux'
import {
  selectNamecard,
  selectGender,
  selectFavoriteNames,
} from '../redux/selectors'
import { useGetNewNameQuery } from '../redux/features/api/nameApi'
import { setShowNamecard } from '../redux/namecardSlice'
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import { useEffect } from 'react'
import { setFavoriteNames } from '../redux/favoriteNamesSlice'

const Content = () => {
  const dispatch = useDispatch()
  const showNamecard = useSelector(selectNamecard)
  const gender = useSelector(selectGender)
  const favoriteNames = useSelector(selectFavoriteNames)
  const user = useUser()
  const supabase = useSupabaseClient()

  const { data: randomName, refetch } = useGetNewNameQuery(gender)

  const getSavedNames = async () => {
    try {
      let { data, error, status } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single()

      dispatch(setFavoriteNames(data.saved_names))
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    getSavedNames()
  }, [])

  const getNewName = async (action) => {
    if (action === 'yes') {
      try {
        let { error } = await supabase.from('profiles').upsert({
          id: user.id,
          updated_at: new Date().toISOString(),
          saved_names: [...favoriteNames, randomName],
        })
        if (error) throw error
      } catch (error) {
        alert(error)
      } finally {
        getSavedNames()
      }
    }
    dispatch(setShowNamecard(action))

    setTimeout(() => dispatch(setShowNamecard('show')), 500)
    refetch()
  }

  const handleDrag = (event, info) => {
    if (info.offset.x > 50) {
      getNewName('yes')
    } else if (info.offset.x < -50) {
      getNewName('no')
    }
  }
  return (
    <motion.div
      drag='x'
      dragConstraints={{ left: 0, right: 0 }}
      whileDrag={{ rotate: 10 }}
      dragElastic={false}
      onDragEnd={handleDrag}
      variants={rotateIn('right')}
      initial='hidden'
      whileInView={`${
        showNamecard === 'yes' ? 'yes' : showNamecard === 'no' ? 'no' : 'show'
      }`}
      className='w-full h-[70%] sm:h-[70vh] flex justify-center items-center'
    >
      <Namecard getNewName={getNewName} randomName={randomName} />
    </motion.div>
  )
}

export default Content
