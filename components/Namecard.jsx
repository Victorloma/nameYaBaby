'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useGetNewNameQuery } from '../redux/features/api/apiSlice'
import { useSelector, useDispatch } from 'react-redux'
import { selectGender } from '../redux/selectors'
import { setShowNamecard } from '../redux/namecardSlice'

const Namecard = () => {
  const dispatch = useDispatch()

  const gender = useSelector(selectGender)
  const { data: randomName, refetch } = useGetNewNameQuery(gender)

  const getNewName = (action) => {
    dispatch(setShowNamecard(action))

    setTimeout(() => dispatch(setShowNamecard('show')), 1200)
    setTimeout(() => refetch(), 400)
  }
  return (
    <main className='shadow-2xl h-[60vh] w-[80vw] md:w-[50vw] lg:w-[35vw] bg-white bg-opacity-20 rounded-lg overflow-hidden relative z-2 border-slate-100 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm'>
      <article className='flex flex-col items-center justify-around h-[100%] w-[100%]'>
        <h2 className='font-poppins font-bold text-white text-4xl sm:text-6xl shadow-lg border  border-b-0 border-opacity-30 border-slate-100 rounded-full px-8 sm:px-10 py-2 sm:py-3 text-center'>
          {randomName}
        </h2>
        <div className='flex justify-around w-[100%]'>
          <button
            className='shadow-md bg-red-500 hover:bg-red-600 active:bg-red-700 p-6 rounded-full text-white'
            onClick={() => getNewName('no')}
          >
            <FontAwesomeIcon icon={faXmark} size='3x' className='h-5 w-12' />
          </button>
          <button
            className='shadow-md bg-green-500 hover:bg-green-600 active:bg-green-700 p-6 rounded-full text-white '
            onClick={() => getNewName('yes')}
          >
            <FontAwesomeIcon icon={faCheck} size='3x' />
          </button>
        </div>
      </article>
    </main>
  )
}

export default Namecard
