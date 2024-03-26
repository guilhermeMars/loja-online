"use client"

import React from "react";
import Image from "next/image";

import { IoBarbell } from "react-icons/io5";
import { IoIosPricetags } from "react-icons/io";
import { FaTshirt } from "react-icons/fa";
import { PiPants, PiGenderMaleBold, PiGenderFemaleBold } from "react-icons/pi";

import { Card, Divider, Chip, ThemeProvider, createTheme } from "@mui/material";

export default function Compra(){
    const aStyle = "flex items-center p-2 text-gray-500 rounded-lg dark:text-white hover:bg-red-100 hover:text-red-600 dark:hover:bg-gray-700 group";
    const iconStyle = "w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-red-600 dark:group-hover:text-white";

    const products = [
        { name: 'Camiseta Branca Masculina', image:'default-w-m', type: 'tshirt', gender: 'm', price: 32.44, discount: 25 },
        { name: 'Camiseta Preta Masculina', image:'default-b-m', type: 'tshirt', gender: 'm', price: 30, discount: 0 },
        { name: 'Camiseta Branca Femenina', image:'default-w-f', type: 'tshirt', gender: 'f', price: 32.44, discount: 25 },
        { name: 'Camiseta Preta Femenina', image:'default-b-f', type: 'tshirt', gender: 'f', price: 30, discount: 0 },
        { name: 'Calça Branca Masculina', image:'phants-w-m', type: 'phants', gender: 'm', price: 59.99, discount: 10 },
        { name: 'Calça Branca Femenina', image:'phants-w-f', type: 'phants', gender: 'f', price: 59.99, discount: 10 },
        { name: 'Shorts Vermelho Masculino', image:'shorts-r-m', type: 'shorts', gender: 'm', price: 50.99, discount: 15 },
        { name: 'Shorts Vermelho Feminino', image:'shorts-r-f', type: 'shorts', gender: 'f', price: 50.99, discount: 15 },
        { name: 'Regata Branca Masculino', image:'tanktop-w-m', type: 'tanktop', gender: 'm', price: 29.99, discount: 0 },
        { name: 'Top Branco Feminino', image:'top-w-f', type: 'tanktop', gender: 'f', price: 29.99, discount: 0 },
        { name: 'Faixa de Treino Unissex', image:'forehead_band-b-u', type: 'trainshort', gender: 'u', price:39.99, discount: 0 },
    ];

    const theme = createTheme({
        palette: {
          primary: {
            main: '#f14941',
          },
          secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
          },
        },
      })

    return(
        <ThemeProvider theme={theme}>
            <div className="flex justify-center min-h-40 bg-gray-300 p-12">
                <aside id="default-sidebar" className="z-40 w-64 h-screen transition-transform translate-x-0" aria-label="Sidebar">
                    <div className="px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                        <h1 className="text-4xl font-bold text-red-500">Produtos</h1>
                        <Divider className="m-2"></Divider>
                        <ul className="space-y-3 font-medium">
                            <li>
                                <a href="#" className={aStyle}>
                                <PiGenderMaleBold className={iconStyle}></PiGenderMaleBold>
                                <span className="ms-3">Masculino</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className={aStyle}>
                                <PiGenderFemaleBold className={iconStyle}></PiGenderFemaleBold>
                                <span className="flex-1 ms-3 whitespace-nowrap">Feminino</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className={aStyle}>
                                <IoIosPricetags className={iconStyle}></IoIosPricetags>
                                <span className="flex-1 ms-3 whitespace-nowrap">Descontos</span>
                                <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">25%</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className={aStyle}>
                                <FaTshirt className={iconStyle}></FaTshirt>
                                <span className="flex-1 ms-3 whitespace-nowrap">Camisetas</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className={aStyle}>
                                <PiPants className={iconStyle}></PiPants>
                                <span className="flex-1 ms-3 whitespace-nowrap">Shorts</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className={aStyle}>
                                <IoBarbell className={iconStyle}></IoBarbell>
                                <span className="flex-1 ms-3 whitespace-nowrap">Academia</span>
                                </a>
                            </li>
                            {/* <li>
                                <a href="#" className={aStyle}>
                                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z"/>
                                    <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z"/>
                                    <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z"/>
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
                                </a>
                            </li> */}
                        </ul>
                        <Image
                            src="/loja-online-logo.webp"
                            width={916}
                            height={306}
                            alt="Logo"
                            className="mt-4 mb-2"
                        />
                    </div>
                </aside>
                <main className="w-5/6 bg-white h-[40vw] p-10 flex flex-1 flex-wrap justify-center items-center overflow-y-auto">
                    {products.map((data, index) =>{
                        return(
                            <Card className="p-2 m-5 max-w-60" variant="outlined" key={index}>
                                <Image
                                    // src={data.image + ".png"}
                                    src={"/products/" + data.image + ".webp"}
                                    width={200}
                                    height={200}
                                    alt={data.image}
                                    className="m-auto"
                                />
                                <div className="flex flex-row justify-between items-center ">
                                    <h5>{data.name}</h5>
                                    <h6>R$ {data.price}</h6>
                                </div>
                                <Divider/>
                                <div>
                                    <Chip color="primary" label={data.type} size="small" className="mx-1" />
                                    <Chip label={(data.gender === 'm' ? 'Masculino' : (data.gender === 'f') ?'Feminino' : 'Unisex')} size="small" className="mx-1" />
                                </div>
                            </Card>
                        )
                    })}
                </main>
            </div>
        </ThemeProvider>
    );
}