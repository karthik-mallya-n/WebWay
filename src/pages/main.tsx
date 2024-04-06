import Link from "next/link";
import React from "react";
import { buttonVariants } from "~/components/ui/button";

const main = () => {
  return (
    <div>
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
        </div>
      </div>
    </div>
  );
};

export default main;
