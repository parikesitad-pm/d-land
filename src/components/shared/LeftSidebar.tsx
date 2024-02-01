'use client'

import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'

import { Button } from '../ui/button'
import { INavLink } from '@/types'
import { sidebarLinks } from '@/constants'
import { useEffect } from 'react'
import { useSignOutAccount } from '@/lib/react-query/queriesAndMutations'
import { useUserContext } from '@/context/AuthContext'

const LeftSidebar = () => {
  const { mutate: signOut, isSuccess } = useSignOutAccount()
  const { user } = useUserContext()
  const { pathname } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (isSuccess) navigate(0)
  }, [isSuccess])

  return (
    <nav className="leftsidebar acrylic shadow">
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
            <p className="small-regular text-slate-950">@${user.username}</p>
          </div>
        </Link>

        <ul className="flex flex-col gap-6">
          {sidebarLinks.map((link: INavLink) => {
            const isActive = pathname === link.route

            return (
              <li
                key={link.label}
                className={`leftsidebar-link group ${
                  isActive && 'bg-primary-500'
                }`}>
                <NavLink
                  className="flex gap-4 items-center p-4"
                  to={link.route}>
                  <img
                    src={link.imgURL}
                    alt={link.label}
                    className={`group-hover:invert-white ${
                      isActive && 'invert-white'
                    }`}
                  />
                  {link.label}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </div>

      <Button
        variant="ghost"
        className="shad-button_ghost"
        onClick={() => signOut()}>
        <img src="../../../public/assets/icons/logout.svg" alt="logout" />
        <p className="small-medium lg:base-medium">Logout</p>
      </Button>
    </nav>
  )
}

export default LeftSidebar
