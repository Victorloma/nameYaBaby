'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const FavNamecard = ({ getNewName, randomName }) => {
  const favNames = [
    'Amoura',
    'Jackie',
    'Neriah',
    'Jean',
    'Aleia',
    'Rayla',
    'Taj',
    'Brandon',
    'Alba',
    'Sloane',
    'Gunner',
    'Alex',
    'Adolfo',
    'Celina',
    'Guillermo',
    'Abel',
    'Dominic',
    'Melodi',
    'Mari',
    'Castiel',
    'Heath',
    'Bobbi',
    'Bayleigh',
    'August',
    'Sergio',
    'Taylee',
    'Cameran',
    'Sakura',
    'Brentley',
    'Lawson',
    'Meadow',
    'Antonella',
  ]

  const favList = favNames.map((name, i) => {
    return i === 0 ? (
      <li
        key={i}
        className='group flex justify-between items-center w-[80%] lg:w-[50%] opacity-75 hover:opacity-100 '
      >
        {name}
        <FontAwesomeIcon
          icon={faTrashCan}
          size='1x'
          className='opacity-75 group-hover:opacity-100'
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
            className='opacity-75 group-hover:opacity-100'
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
        <ul className='text-white h-[100%] flex flex-col items-center gap-1 overflow-auto scrollbar-hide'>
          {favList}
        </ul>
      </div>
    </main>
  )
}

export default FavNamecard
