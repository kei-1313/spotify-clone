"use client"

import { usePathname } from "next/navigation"
import { useMemo } from "react";
import { HiHome } from "react-icons/hi"
import { BiSearch } from "react-icons/bi"
import Box from "./Box"

interface SiderbarProps {
  children: React.ReactNode;
}

const Siderbar: React.FC<SiderbarProps> = ({ children }) => {

  const pathname = usePathname();

  const routes = useMemo(() => [
    {
      icon: HiHome,
      label: 'Home',
      active: pathname !== '/search',
      href: '/'
    },
    {
      icon: BiSearch,
      label: 'Home',
      active: pathname === '/search',
      href: '/search'
    }
  ], [pathname])



  return (
    <div className="flex h-full">
      <div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2">
        <Box>
          Siderbar Nav
        </Box>
      </div>
    </div>
  )
}

export default Siderbar