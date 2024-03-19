import React from 'react';
import { MdModeStandby } from 'react-icons/md';
import { FaHouse } from "react-icons/fa6";
import { GrContact } from "react-icons/gr";

const Navbar = () => {
  const menu = [
    { name: 'Home', url: '#home', icon: 'FaHouse' },
    { name: 'Services', url: '#services', icon: 'MdModeStandby' },
    { name: 'Map', url: '#map', icon: 'MdModeStandby' },
    { name: 'Tarif', url: '#price', icon: 'MdModeStandby' },
    { name: 'Contact', url: '#contact', icon: 'GrContact' },
  ];

  return (
    <nav className="ml-0 fixed z-10">
      <ul className="list-disc flex flex-col gap-5 fixed left-0 top-0 bottom-0 justify-center sm:m-6 m-3 ">
        {menu.map((x, index) => {
          // const CustomTag = `${x.icon} className="sm:text-4 xl text-2xl text-primary group-hover:text-accent  transition-all ease-in-out duration-300  sm:ml-5  flex-shrink-0"`;
          const ClassName = "w-8 m-1";
          return(
            <a
                href={x.url}
                key={index}
                className="flex items-center flex-row group sm:text-4xl xl text-2xl text-primary group-hover:text-accent transition-all ease-in-out duration-300  sm:ml-5  flex-shrink-0"
            >
                <div className='flex items-center justify-center flex-row group -z-10'>
                  <div className='bg-white rounded-full absolute -z-10 w-9 h-9 md:left-4 md:w-12 md:h-12 group-hover:w-48 origin-left transition-all ease-in-out duration-300'></div>
                  {
                    (x.icon === 'FaHouse') ?
                        <FaHouse className={ClassName}/>
                    : (x.icon === 'GrContact') ?
                        <GrContact className={ClassName}/>
                    :
                        <MdModeStandby className={ClassName}/>
                  }
                </div>
                <p
                className={`opacity-0 group-hover:opacity-100 transition duration-500  text-2xl ml-3 font-bold uppercase`}
                >
                {x.name}
                </p>
            </a>
          )
        })}
      </ul>
    </nav>
  );
};

export default Navbar;