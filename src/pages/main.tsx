<<<<<<< HEAD
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from '~/components/ui/button'
import  Card  from '~/components/helpers/card'
=======
import Link from "next/link";
import React from "react";
import { buttonVariants } from "~/components/ui/button";
>>>>>>> a1b7f6206891d491a2763103b3a48a0f1843181d

const main = () => {
  return (
    <div>
<<<<<<< HEAD
      <div className="container h-[100vh] w-[100vw] flex">
        <div className="right flex w-1/2 flex-col justify-evenly items-center">

        <Card standardText='I am Standard' standardContent='Standard' buttonText='Standard' link='/standard'/>
        
           
            
        </div>
        <div className="left flex w-1/2 flex-col justify-evenly items-center">
        <Card standardText='I am Express' standardContent='Express' buttonText='Express' link='/express'/>
=======
      <div className="container flex h-[100vh] w-[100vw]">
        <div className="right flex w-1/2 flex-col items-center justify-evenly">
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
        <div className="left flex w-1/2 flex-col items-center justify-evenly">
          <Link
            href="/express "
            className={buttonVariants({
              variant: "green",
              size: "sm",
            })}
          >
            Express
          </Link>
>>>>>>> a1b7f6206891d491a2763103b3a48a0f1843181d
        </div>
      </div>
    </div>
  );
};

export default main;
