import Image from 'next/image';
import aboutImg from '../Images/About.jpg';

export default function About() {
	return (
		<div>
			<hr class="my-8 border-white sm:mx-auto lg:my-8" />

			<div id="about" class="container mx-auto ">
				<div class="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 bg-white border-double border-8 border-blueNav rounded-md mt-20">
					<div class="flex flex-col lg:flex-row justify-between gap-8 ">
						<div class="w-full lg:w-5/12 flex flex-col justify-center text-white">
							<h1 class="text-3xl lg:text-4xl font-bold leading-9 text-blueNav pb-4">¿QUIENES SOMOS?</h1>
							<p class="font-normal text-base text-gray-50 leading-6">
								Somos una empresa dedicada a brindar servicios y soluciones para nuestros clientes en lo
								referido a atención médica de emergencia, medicina laboral y todo lo referido a los
								controles preventivos de salud.
								<br />
								<br />
								También realizamos servicios de traslados programados y de ugencia, de corta, mediana y
								larga distancia; de baja y alta complejidad.
								<br />
								<br />
								Brindamos servicios de cobertura de asistencia médica para eventos sociales, deportivos,
								culturales. Armados de carpas sanitarias.
								<br />
								<br />
								Contamos con todo el equipamiento, de última generación, necesario para el cumplimiento
								de los servicios de control, seguimiento y emergencias, y con personal joven con
								experiencia y altamente capacitado para los trabajos.
								<br />
								<br />
								Además contamos con un plantel de médicos con años de experiencia y reconocida
								trayectoria, que brindan soporte y asesoramiento constante.
							</p>
						</div>
						<div class="w-full lg:w-8/12">
							<Image class="w-full h-full" src={aboutImg} alt="Imagen de Santa Cruz" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
