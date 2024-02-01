'use client'

import { Link, useNavigate } from 'react-router-dom'

import { Button } from '../ui/button'
import { useEffect } from 'react'
import { useSignOutAccount } from '@/lib/react-query/queriesAndMutations'
import { useUserContext } from '@/context/AuthContext'

const Topbar = () => {
  const { mutate: signOut, isSuccess } = useSignOutAccount()
  const navigate = useNavigate()
  const { user } = useUserContext()

  useEffect(() => {
    if (isSuccess) navigate(0)
  }, [isSuccess])

  return (
    <section className="topbar">
      <div className="flex-between py-4 px-5">
        <Link to="/" className="flex gap-3 items-center">
          <img
            src="../../../public/assets/images/logo.svg"
            alt="Logos"
            width={130}
            height={325}
          />
        </Link>

        <div className="flex gap-4">
          <Button variant="ghost" className="shad-button_ghost">
            <img
              src="../../../public/assets/icons/logout.svg"
              alt="logout"
              onClick={() => signOut()}
            />
          </Button>

          <Link to={`/profile/${user.username}`} className="flex-center gap-3">
            <img
              className="h-8 rounded-full"
              src={user.imageUrl || '/public/assets/images/profile.png'}
              alt="avatar"
            />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Topbar
