'use client'

import Link from "next/link"

const  NavBar = () => {

  return (

    <div className="className='flex justify-end items-center gap-3 px-3 mx-24 py-4">
   
          <div className="flex justify-between items-center">
            <div className="flex text-2xl items-center font-bold">
              e <span className="text-amber-400">.Track</span>
            </div>

            <div className="md:flex hidden">
              
              <Link href={"/budgets"} className="btn">
                Mes budjets
              </Link>
              <Link href={"/dashboard"} className="btn mx-4">
                Tableau de bord
              </Link>
              <Link href={"/transactions"} className="btn">
                Mes Transactions
              </Link>
            </div>
            
          </div>

          <div className="md:hidden flex mt-2 justify-center">
              <Link href={"/budjets"} className="btn btn-sm ">
                Mes budjets
              </Link>
              <Link href={"/dashboard"} className="btn mx-4 btn-sm">
                Tableau de bord
              </Link>
              <Link href={"/transactions"} className="btn btn-sm">
                Mes Transactions
              </Link>
            </div>
    
  </div>
  )
}

export default NavBar