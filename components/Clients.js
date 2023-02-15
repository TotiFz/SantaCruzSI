import React from 'react';
import Image from 'next/image';
import clients from '../Images/clients.png';

export default function Clients() {
	return (
		<div id="client" data-aos="zoom-in-down" data-aos-duration="1000">
			<div class="w-full px-4">
				<div class="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
					<h2 class="text-blueNav mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
						CLIENTES QUE CONFIAN EN NOSOTROS
					</h2>
				</div>
			</div>
			<Image src={clients} className="ml-14"></Image>
		</div>
	);
}
