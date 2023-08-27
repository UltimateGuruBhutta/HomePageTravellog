import React from "react";

function Hero() {
  return (
    <div className="w-full h-[90vh]">
      <img
        src="https://images.unsplash.com/photo-1592614594593-a3738f441857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80"
        alt="/"
        className="w-full h-full object-cover"
      />
      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4">
          <h1 className="font-bold text-4xl ">Find Your Special Trip</h1>
          <h2 className="text-4xl py-4 italic">With WEEKAWAY</h2>
          <p>
            Welcome to our vibrant and enchanting world of travel! At our trip
            agency, every adventure is a symphony of joy waiting to be composed.
            Imagine setting foot on pristine shores, your worries carried away
            by the gentle ocean breeze. Picture yourself exploring ancient
            alleyways, where history whispers secrets of the past.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
