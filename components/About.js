import Image from 'next/image';
import aboutImg from '../Images/About.jpg';

export default function About() {
	return (
		<div id="about" class="container mx-auto " data-aos="flip-right" data-aos-duration="1500">
			<div class="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 bg-white border-double border-8 border-blueNav rounded-md mt-20">
				<div class="flex flex-col lg:flex-row justify-between gap-8 ">
					<div class="w-full lg:w-5/12 flex flex-col justify-center text-white">
						<h1 class="text-3xl lg:text-4xl font-bold leading-9 text-blueNav pb-4">¿QUIENES SOMOS?</h1>
						<p class="font-normal text-base text-gray-50 leading-6">
							Santa Cruz Servicios Integrales es una empresa dedicada a brindar soluciones a sus clientes,
							ofreciendo una amplia gama de servicios.
							<br />
							<br />
							Somos una empresa con fuerte conocimiento y experiencia en seguridad industrial y salud
							ocupacional, y estamos preparados y comprometidos para dar soluciones a nuestros clientes.
							<br />
							<br />
							Contamos con los recursos, la experiencia, el conocimiento y la vivencia para poder
							satisfacer las necesidades de nuestros clientes. Y nuestra actitud es lo que nos diferencia
							del resto.
						</p>
					</div>
					<div class="w-full lg:w-8/12">
						<Image class="w-full h-full" src={aboutImg} alt="Imagen de Santa Cruz" />
					</div>
				</div>
			</div>
		</div>
	);
}
