import Link from 'next/link';
import React from 'react';
import { buttonVariants } from '../ui/button';
import './card.module.css'

interface CardProps {
  standardText: string;
  buttonText: string;
  standardContent: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ standardText, buttonText ,standardContent,link}) => {
  
  return (
    <div className="relative  w-60 h-80 bg-white rounded-lg overflow-hidden shadow-md">
      <p className="  h-[120px] "></p><div className='text-lg  font-medium h-[200px] flex justify-center flex-col items-center text-black'>{standardText}
        <div>
          <Link 
            href={link}
            className={buttonVariants({
              variant: "green",
              size: "sm",
            })}
          >
            {buttonText}
          </Link>
        </div>
      </div>
      <div className="up absolute inset-0 z-10 bg-gray-900 opacity-100 hover:block transition duration-300 ease-in-out  hover:transform hover:-translate-y-[200px]">
        <p className="text-center pt-16 text-white ">
          {standardContent}
        </p>
      </div>
    </div>
  );
};

export default Card;
