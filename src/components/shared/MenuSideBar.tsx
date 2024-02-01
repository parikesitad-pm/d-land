'use client'

import { Link } from 'react-router-dom'
import { useUserContext } from '@/context/AuthContext'

export const MenuSideBar = () => {
  const { user } = useUserContext()
  return (
    <div className="flex flex-col gap-11">
      <Link to="/" className="flex gap-3 items-center">
        <img
          src="../../../public/assets/images/logo.svg"
          alt="Logos"
          width={130}
          height={325}
        />
      </Link>
      <Link
        to={`/profile/${user.username}`}
        className="flex items-center gap-3">
        <img
          className="h-14 w-14 rounded-full"
          src={user.imageUrl || '/public/assets/images/profile.png'}
          alt="avatar"
        />
        <div className="flex flex-col">
          <p className="body-bold">{user.name}</p>
          <p className="small-regular text-light-3">@${user.username}</p>
        </div>
      </Link>
    </div>
  )
}
