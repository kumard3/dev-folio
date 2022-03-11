import React from "react";

export default function Blog() {
  return (
    <div id="blog" className="flex flex-col justify-center items-center">
      <div className="flex flex-col md:flex-row items-center min-h-[15rem] overflow-hidden">
        <div className="flex flex-col gap-2 p-4 lg:p-6 max-w-2xl">
          <span className="text-gray-400  font-mono  ">April 07, 2021</span>

          <h2 className="text-gray-100 text-[40px] font-bold">
            Working with legacy stacks
          </h2>

          <p className="text-gray-500 text-[23px]">
            This is a section of some simpl filler text, also known as
            placeholder text.
          </p>

          <div className="">
            <a
              href="#"
              className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700  font-semibold transition duration-100"
            >
              Read more
            </a>
          </div>
        </div>
        <a href="#" className="  relative px-2">
          <img
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600"
            loading="lazy"
            alt="Photo by Lorenzo Herrera"
            className="w-full h-full object-cover object-center rounded-xl inset-0 gtransition duration-200"
          />
        </a>
      </div>
    </div>
  );
}
