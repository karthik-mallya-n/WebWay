"use client";
import React from "react";
import { Label } from "../components/ui2/label";
import { Input } from "../components/ui2/input";
import { cn } from "../lib/utils";

import {
    IconBrandGithub,
    IconBrandGoogle,
    IconBrandOnlyfans,
} from "@tabler/icons-react";

export default function SignupFormDemo() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
    };
    const destinationOptions = ['Mangalore', 'Manipal', 'padubi', 'Udupi', 'Kundapura', 'Karkala', 'Moodbidri', 'Kinnigoli', 'Surathkal', 'Mulki', 'Bantwal', 'Puttur', 'Sullia', 'Belthangady', 'Dharmasthala', 'Karkala', 'Kapu', 'Kundapur', 'Karkal', 'Kota'];

    return (

        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
            <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                Welcome to WebWay
            </h2>
            <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                Let us know your details to get started
                yet
            </p>

            <form className="my-8" onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                    <LabelInputContainer>
                        <Label htmlFor="firstname">First name</Label>
                        <Input id="firstname" placeholder="Tyler" type="text" />
                    </LabelInputContainer>
                    <LabelInputContainer>
                        <Label htmlFor="lastname">Last name</Label>
                        <Input id="lastname" placeholder="Durden" type="text" />
                    </LabelInputContainer>
                </div>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="Phone" type="number" />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="Address">Pick Up Location</Label>
                    <Input id="Address" placeholder="Address" type="text" style={{ height: '100px' }} />
                </LabelInputContainer>

                <LabelInputContainer className="mb-4">
                    <label htmlFor="destination" className="block text-sm font-medium  text-gray-700">Destination</label>
                    <select id="destination" className="mt-1 block w-full pl-3 pr-10 py-2 bg-gray-50 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                        {/* Map over the destination options array */}
                        {destinationOptions.map((option, index) => (
                            <option key={index} value={option}>{option}</option>
                        ))}
                    </select>
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="items">No. of  items</Label>
                    <Input id="items" placeholder="Items" type="number" />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="weigths">Weigths</Label>
                    <Input id="weigths" placeholder="weigths" type="number" />
                </LabelInputContainer>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                    <LabelInputContainer>
                        <Label htmlFor="firstname">Reciever's First name</Label>
                        <Input id="rfirstname" placeholder="Tyler" type="text" />
                    </LabelInputContainer>
                    <LabelInputContainer>
                        <Label htmlFor="lastname">Reciever's Last name</Label>
                        <Input id="rlastname" placeholder="Durden" type="text" />
                    </LabelInputContainer>
                </div>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="rphone">Reciever's Phone Number</Label>
                    <Input id="rphone" placeholder="Phone" type="number" />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="Address">Reciever's Pick Up Location</Label>
                    <Input id="rAddress" placeholder="Address" type="text" style={{ height: '100px' }} />
                </LabelInputContainer>


                <button
                    className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                    type="submit"
                >
                    Submit &rarr;
                    <BottomGradient />
                </button>


            </form>
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};
