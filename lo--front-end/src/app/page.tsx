"use client"

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Button from "@mui/material/Button"
import { ThemeProvider, createTheme } from "@mui/material/styles";

export default function Home() {
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
  return (
    <main>
      <ThemeProvider theme={theme}>
        <Navbar></Navbar>
        {/* Tentativa de círculo ao redor */}
        {/* <div className={"bg-opacity-0 border-4 border-gray-800 h-24 w-24 rounded-full fixed -left-44 right-0 top-40 bottom-0 -z-10 w-60 h-96"}></div> */}
        {/* Cores Opicionais */}
        {/* bg-slate-800 e border-b-lime-400*/}
        
        <div className="h-[80vh] w-full bg-gradient-to-b from-white to-gray-300">
          <Link href="/compra" className="fixed top-5 right-10">
            <Button color="primary" variant="outlined">Fazer pedido</Button>
          </Link>
          <div className="flex flex-col-reverse grow relative left-[17vw] lg:left-1/2 lg:-translate-x-[90%] transform top-1/4 z-10 w-[20rem] md:w-[32rem] lg:flex-row">
              <Image
                src="/white_t-shirt.webp"
                width={584}
                height={724}
                alt="White T-shirt"
                className="w-52 md:w-96 lg:w-full"
              />
            <h1 className="text-3xl md:text-7xl font-bold flex-shrink-0 max-w-[28rem]">Sua marca estilizada de roupas!</h1>
          </div>
        </div>
        <div className="relative -top-20 ">
          <div className=" h-0
            border-l-[90vw] border-l-transparent
            border-b-[75px] border-b-red-600
            border-r-[0px] border-r-transparent">
          </div>
          <div className="bg-red-600 h-80">
          </div>
        </div>
      </ThemeProvider>
    </main>
  );
}
