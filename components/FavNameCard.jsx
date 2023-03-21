'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectFavoriteNames } from '../redux/selectors'
import { setFavoriteNames } from '../redux/favoriteNamesSlice'
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'

const FavNamecard = () => {
  const supabase = useSupabaseClient()
  const user = useUser()
  const dispatch = useDispatch()
  const favoriteNames = useSelector(selectFavoriteNames)

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

  const handleDelete = async (name) => {
    try {
      let { error } = await supabase.from('profiles').upsert({
        id: user.id,
        updated_at: new Date().toISOString(),
        saved_names: [...favoriteNames.filter((el) => el !== name)],
      })
      if (error) throw error
    } catch (error) {
      alert(error)
    } finally {
      dispatch(setFavoriteNames(favoriteNames.filter((el) => el !== name)))
    }
  }

  const favList = favoriteNames.map((name, i) => {
    return i === 0 ? (
      <li
        key={i}
        className='group flex justify-between items-center w-[80%] lg:w-[50%] opacity-75 hover:opacity-100 '
      >
        {name}
        <FontAwesomeIcon
          icon={faTrashCan}
          size='1x'
          className='opacity-75 group-hover:opacity-100 hover:cursor-pointer'
          onClick={() => handleDelete(name)}
        />
      </li>
    ) : (
      <>
        <div className='w-[80%] h-[1px] bg-white opacity-10' />
        <li
          key={i}
          className='group flex justify-between items-center w-[80%] lg:w-[50%] opacity-75 hover:opacity-100 '
        >
          {name}
          <FontAwesomeIcon
            icon={faTrashCan}
            size='1x'
            className='opacity-75 group-hover:opacity-100 hover:cursor-pointer'
            onClick={() => handleDelete(name)}
          />
        </li>
      </>
    )
  })

  return (
    <main className='flex justify-center'>
      <div className='shadow-2xl h-[60vh] w-[80vw] md:w-[50vw] lg:w-[35vw] py-4 bg-white bg-opacity-20 rounded-lg overflow-hidden relative z-2 border-slate-100 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm'>
        <Link
          href='/'
          className='cursor-pointer absolute top-0 right-4 text-5xl text-slate-100'
        >
          &times;
        </Link>
        <ul className='mt-10 text-white h-[100%] flex flex-col items-center gap-1 overflow-auto scrollbar-hide'>
          {favList}
        </ul>
      </div>
    </main>
  )
}

export default FavNamecard
