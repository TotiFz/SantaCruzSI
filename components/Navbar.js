// import Head from 'next/head';
// import styles from '../styles/Home.module.css';
// import Link from 'next/link';
// import Logo from '../Images/LogoV2.jpg';
// import Image from 'next/image';
// export default function Navbar() {
// 	return (
// 		<div>
// 			<nav class="flex items-center justify-between flex-wrap bg-blueNav ">
// 				<div class="flex items-center flex-shrink-0 text-white mr-4 mt-4 mb-4">
// 					<Link href="#landing">
// 						<Image class="ml-4 h-24 w-32" src={Logo}></Image>
// 					</Link>
// 				</div>

// 				<div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
// 					<div class="text-base lg:flex-grow ml-20">
// 						<Link
// 							href="#about"
// 							class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue-600 mr-4"
// 						>
// 							Sobre Nosotros
// 						</Link>
// 						<Link
// 							href="#services"
// 							class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue-600 mr-4"
// 						>
// 							Servicios
// 						</Link>
// 						<Link
// 							href="#client"
// 							class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue-600 mr-4"
// 						>
// 							Clientes
// 						</Link>
// 						<Link href="#contact" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue-600">
// 							Contacto
// 						</Link>
// 					</div>
// 				</div>
// 			</nav>
// 		</div>
// 	);
// }

import Image from 'next/image';
import Link from 'next/link';
import Logo from '../Images/LogoV2.jpg';
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const NavLanding = () => {
	const [nav, setNav] = useState(false);

	const handleNav = () => {
		setNav(!nav);
	};

	return (
		<div className="fixed bg-blueNav left-0 top-0 w-full z-10 ease-in duration-300">
			<div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
				<div>
					<Link href="#landing">
						<Image
							alt="Logo Santa Cruz"
							src={Logo}
							placeholder="blur"
							width={125}
							height={125}
							style={{
								maxWidth: '100%',
								height: 'auto',
							}}
						/>
					</Link>
				</div>

				<ul className="hidden sm:flex">
					<Link href="#about" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue-600 mr-4">
						Sobre Nosotros
					</Link>
					<Link
						href="#services"
						class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue-600 mr-4"
					>
						Servicios
					</Link>
					<Link href="#client" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue-600 mr-4">
						Clientes
					</Link>
					<Link href="#contact" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue-600">
						Contacto
					</Link>
				</ul>
				{/* Mobile Button */}
				<div onClick={handleNav} className="block sm:hidden z-10">
					{nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
				</div>
				{/* Mobile Menu */}
				<div
					className={
						nav
							? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-blueNav text-center ease-in duration-300'
							: 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-blueNav text-center ease-in duration-300'
					}
				>
					<ul>
						<li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
							<Link href="#about">Sobre Nosotros</Link>
						</li>
						<li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
							<Link href="#services">Servicios</Link>
						</li>
						<li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
							<Link href="#client">Clientes</Link>
						</li>
						<li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
							<Link href="#contact">Contacto</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default NavLanding;
