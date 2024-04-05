import React from 'react';
import MaxWidthWrapper from './max-width-wrapper';

const LandingText: React.FC = () => {
    return (
        <div>
             <MaxWidthWrapper>
            <div className="flex flex-col items-center justify-center h-[100vh] w-[50vw] text-center ">
                <h1 className="text-6xl font-bold text-[#5b6d42] dark:text-white">
                Your one stop destination 
                </h1>
                <p className="mt-4 text-lg text-[#5b6d42] dark:text-white">
                   
                </p>    
            </div>
            </MaxWidthWrapper>
        </div>
    );
};

export default LandingText;