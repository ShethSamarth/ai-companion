"use client"

import { Poppins } from "next/font/google"
import Link from "next/link"
import { UserButton } from "@clerk/nextjs"

import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/mode-toogle"
import MobileSidebar from "@/components/mobile-sidebar"

const font = Poppins({ weight: "600", subsets: ["latin"] })

const Navbar = () => {
  return (
    <header className="fixed w-full z-50 flex justify-between items-center py-2 px-4 h-16 border-b border-primary/10 bg-secondary">
      <div className="flex items-center">
        <MobileSidebar />
        <Link href="/">
          <h1
            className={cn(
              "hidden md:block text-xl md:text-3xl font-bold text-primary",
              font.className
            )}
          >
            companion.ai
          </h1>
        </Link>
      </div>
      <div className="flex items-center gap-x-3">
        <ModeToggle />
        <UserButton afterSignOutUrl="/" />
      </div>
    </header>
  )
}

export default Navbar
