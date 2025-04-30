'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
        <nav class="bg-pink-500 p-4 text-white">
            <div class="container mx-auto flex justify-between items-center">
                <a href="#" class="text-2xl font-bold">Fashion Diva</a>
                <ul class="hidden md:flex space-x-6">
                    <li><a href="#" class="hover:text-gray-300">Home</a></li>
                    <li><a href="#" class="hover:text-gray-300">Shop</a></li>
                    <li><a href="#" class="hover:text-gray-300">Collections</a></li>
                    <li><a href="#" class="hover:text-gray-300">Sale</a></li>
                    <li><a href="#" class="hover:text-gray-300">Contact</a></li>
                </ul>
                <button class="md:hidden text-white" id="menu-toggle">☰</button>
            </div>
            <ul class="md:hidden hidden flex-col items-center bg-pink-400 p-4" id="mobile-menu">
                <li><a href="#" class="block py-2">Home</a></li>
                <li><a href="#" class="block py-2">Shop</a></li>
                <li><a href="#" class="block py-2">Collections</a></li>
                <li><a href="#" class="block py-2">Sale</a></li>
                <li><a href="#" class="block py-2">Contact</a></li>
            </ul>
        </nav>
     
    