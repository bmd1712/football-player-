import React from 'react';
import Logo from '../../assets/football-logo.png';
import LogoVN from '../../assets/vietnam.png';
import { FaCartShopping } from 'react-icons/fa6';
import DarkMode from './DarkMode';

const Navbar = () => {
  return (
    <div className="shadow-md bg-green-200 dark:bg-gray-900 dark:text-white duration-200">
      <div className="py-3 lg:py-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-6 ml-4">
            <a href="#" className="flex items-center gap-2 text-2xl sm:text-3xl  font-bold text-lime-600">
              <img src={Logo} alt="" className="w-10" />
              <div className="hidden sm:flex">
                UZUMAKI
              </div>
            </a>
            <ul className="hidden lg:flex gap-4 text-xl">
              <li>
                <a href="" className="inline-block py-4 px-4 font-bold hover:text-lime-600">
                  Home
                </a>
              </li>
              <li>
                <a href="" className="inline-block py-4 px-4 hover:text-lime-600">
                  Danh sách đội bóng
                </a>
              </li>
              <li>
                <a href="" className="inline-block py-4 px-4 hover:text-lime-600">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-4 mr-4">
            {/* <DarkMode /> */}
            <button
              className="bg-gradient-to-r from-lime-400 to-lime-600 text-white px-4 py-1 rounded-2xl hover:scale-115 duration-300 flex items-center gap-2"
            >
              BUILD
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;