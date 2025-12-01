"use client";

import Link from 'next/link'
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // ícones do menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header id='home' className='px-6 py-3 bg-white shadow-sm font-work-sans border-b-2 border-gray-600'>
      <nav className='flex justify-between items-center'>
        <Link className='font-bold text-3xl' href="/">
          Gustavo <span className='text-blue-700'>Angelo</span>
        </Link>

        {/* BOTÃO DO MENU - SÓ APARECE NO MOBILE */}
        <button 
          className="md:hidden text-3xl" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* MENU NORMAL (DESKTOP) */}
        <ul className='hidden md:flex space-x-6'>
          <li><Link href="#home" className='nav-link'>Home</Link></li>
          <li><Link href="#about" className='nav-link'>Sobre Mim</Link></li>
          <li><Link href="#projects" className='nav-link'>Projetos</Link></li>
          <li><Link href="#contact" className='nav-link'>Contato</Link></li>
        </ul>
      </nav>

      {/* MENU MOBILE (ABRE AO CLICAR NO HAMBÚRGUER) */}
      {isOpen && (
        <ul className="flex flex-col mt-4 space-y-4 md:hidden bg-white p-4 rounded-lg shadow">
          <li><Link href="#home" className='nav-link' onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link href="#about" className='nav-link' onClick={() => setIsOpen(false)}>Sobre Mim</Link></li>
          <li><Link href="#projects" className='nav-link' onClick={() => setIsOpen(false)}>Projetos</Link></li>
          <li><Link href="#contact" className='nav-link' onClick={() => setIsOpen(false)}>Contato</Link></li>
        </ul>
      )}
    </header>
  )
}

export default Navbar
