import React from "react";

const Header = () => {
  return (
    <>
      <div class="flex items-center px-5 justify-around bg-lime-200 ">
        <a href="/">
          <img
            src="https://www.graphicdesignforum.com/uploads/default/original/3X/a/f/afa4fc15043e59ef08559bdb51bf4d469af13874.png
            "
            class="h-24 w-49 pb-5"
          />
        </a>
        <div class="flex gap-20">
          <a class="text-green-950 font-extrabold	text-xl" href="#">
            {" "}
            Home
          </a>
          <a class="text-green-950 font-extrabold	text-xl" href="#">
            About
          </a>
          <a class="text-green-950 font-extrabold	text-xl" href="#">
            Menu
          </a>
          <a class="text-green-950 font-extrabold	text-xl" href="#">
            Contact
          </a>
        </div>
        <button
          class="text-white font-semibold border px-7 py-2 bg-emerald-950 text-xl"
          href="#"
        >
          Log in
        </button>
      </div>
    </>
  );
};

export default Header;
