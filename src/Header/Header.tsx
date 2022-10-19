import Image from "next/image";
import { HiOutlineBell } from "react-icons/hi";

const Header = () => {
  return (
    <div className="h-50 flex justify-between bg-white p-5">
      <div className="flex items-center gap-5">
        <h1 className="text-bold flex justify-between text-4xl text-slate-800 ">
          Class of 2022
        </h1>

        <input
          className="h-5 bg-slate-200 p-4 text-white"
          placeholder="Find something here..."
        />
      </div>

      <div className="mr-4 flex items-center justify-between gap-10">
        <HiOutlineBell size={32} />

        <div className="mx-auto flex max-w-sm items-center space-x-4 rounded-xl bg-white p-6">
          <div className="shrink-0">
            <img
              className="h-10 w-10 rounded-full ring-2 ring-gray-100"
              src="https://github.com/kevenleone.png"
              alt="Profile"
            />
          </div>
          <div>
            <div className="text-xl font-medium text-black">Jane da Doe</div>
            <p className="text-slate-500">dadoejane@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
