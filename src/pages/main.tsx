import Link from 'next/link'
import React from 'react'
import { buttonVariants } from '~/components/ui/button'

const main = () => {
  return (
    <div>
      <div className="container h-[100vh] w-[100vw] flex">
        <div className="right flex w-1/2 flex-col justify-evenly items-center">
        <Link
                href="/standard"
                className={buttonVariants({
                  variant: "green",
                  size: "sm",
                })}
              >
                Standard
              </Link>
           
            
        </div>
        <div className="left flex w-1/2 flex-col justify-evenly items-center">
        <Link
                href="/express "
                className={buttonVariants({
                  variant: "green",
                  size: "sm",
                })}
              >
               Express
              </Link>
        </div>
      </div>
    </div>
  )
}

export default main
