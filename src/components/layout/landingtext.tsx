import React from 'react';
import MaxWidthWrapper from './max-width-wrapper';
import { TypeAnimation } from "react-type-animation";
import { Button, buttonVariants } from '../ui/button';
import Link from 'next/link';
import Image from 'next/image'
import { z } from 'zod';

const LandingText: React.FC = () => {
    return (
        <div>
             
            <div className="flex flex-col  items-center justify-evenly min-h-[100vh] min-w-[100vw]  ">
                
                <div className="up w-full h-[70vh]  p-0 m-0">
               
                <div className="left flex flex-col justify-center items-center h-full w-[50vw]">
                <h1 className="text-6xl font-bold text-white dark:text-white">
                    
                Your one stop  for {"\n\t"}
                <TypeAnimation 
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "gifts.",
                    1000,
                    "packages.",
                     1000,
                     // wait 1s before replacing "Mice" with "Hamsters"
                  ]}
                  wrapper="div"
                  speed={50}
                  repeat={Infinity}
                />
                
                </h1>
                <p className="mt-4 text-lg text-[#5b6d42] dark:text-white">
                   
                </p>    
                
                <Link
                    href="/main"
                    className={buttonVariants({
                        variant: "blue",
                        size: "lg",
                    })}
                    style={{zIndex: 1000,marginLeft: '0px'}}
                >
                    Get Started
                </Link>
                
                </div>

                    <Image className='absolute bottom-0' src={"/city_shadow.svg"} layout="fill" objectFit="cover" alt="city" />
                </div>
                <div className="down relative w-full h-[30vh] bg-[#0089a3] p-0 m-0"> 

               
                </div>
               
         </div>
        </div>
    );
};

export default LandingText;