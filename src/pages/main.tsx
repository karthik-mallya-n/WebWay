import Link from 'next/link'
import React from 'react'
import { buttonVariants } from '~/components/ui/button'
import  Card  from '~/components/helpers/card'

const main = () => {
  return (
    <div>
      <div className="container h-[100vh] w-[100vw] flex">
        <div className="right flex w-1/2 flex-col justify-evenly items-center">

        <Card standardText='I am Standard' standardContent='Standard' buttonText='Standard' link='/standard'/>
        
           
            
        </div>
        <div className="left flex w-1/2 flex-col justify-evenly items-center">
        <Card standardText='I am Express' standardContent='Express' buttonText='Express' link='/express'/>
        </div>
      </div>
    </div>
  )
}

export default main
