"use client";
import React from "react";
import { Label } from "../components/ui2/label";
import { Input } from "../components/ui2/input";
import { cn } from "~/lib/utils";
import { z } from "zod";
import { useState } from "react";
useForm
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  firstname: z.string().min(2).max(50).nonempty(),
  lastname: z.string().min(2).max(50).nonempty(),
  phone: z.string().min(10).max(15).nonempty(),
  Address: z.string().nonempty(),
  destination: z.string().nonempty(),
  items: z.number().min(1),
  weigths: z.number().min(1),
  rfirstname: z.string().min(2).max(50).nonempty(),
  rlastname: z.string().min(2).max(50).nonempty(),
  rphone: z.string().min(10).max(15).nonempty(),
  rAddress: z.string().nonempty(),
});

export default function SignupFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const destinationOptions = [
    "Mangalore",
    "Manipal",
    "padubi",
    "Udupi",
    "Kundapura",
    "Karkala",
    "Moodbidri",
    "Kinnigoli",
    "Surathkal",
    "Mulki",
    "Bantwal",
    "Puttur",
    "Sullia",
    "Belthangady",
    "Dharmasthala",
    "Karkala",
    "Kapu",
    "Kundapur",
    "Karkal",
    "Kota",
  ];

  return (
    <div className="mx-auto w-full max-w-md rounded-none bg-white p-4 shadow-input dark:bg-black md:rounded-2xl md:p-8">
      <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
        Welcome to WebWay
      </h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
        Let us know your details to get started yet
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
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
          <Input
            id="Address"
            placeholder="Address"
            type="text"
            style={{ height: "100px" }}
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <label
            htmlFor="destination"
            className="block text-sm font-medium  text-gray-700"
          >
            Destination
          </label>
          <select
            id="destination"
            className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          >
            {/* Map over the destination options array */}
            {destinationOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="items">No. of items</Label>
          <Input id="items" placeholder="Items" type="number" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="weigths">Weigths</Label>
          <Input id="weigths" placeholder="weigths" type="number" />
        </LabelInputContainer>
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
          <LabelInputContainer>
            <Label htmlFor="firstname">{"Reciever's First name"}</Label>
            <Input id="rfirstname" placeholder="Tyler" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">{"Reciever's Last name"}</Label>
            <Input id="rlastname" placeholder="Durden" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="rphone">{"Reciever's Phone Number"}</Label>
          <Input id="rphone" placeholder="Phone" type="number" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="Address">{"Reciever's Pick Up Location"}</Label>
          <Input
            id="rAddress"
            placeholder="Address"
            type="text"
            style={{ height: "100px" }}
          />
        </LabelInputContainer>

        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
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
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
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
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
