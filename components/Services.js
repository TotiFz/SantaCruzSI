import Image from 'next/image';
import ambulance from '../Images/ambulance.gif';
import heart from '../Images/heart.gif';
import training from '../Images/training.gif';
import hygiene from '../Images/hygiene.gif';
import logistic from '../Images/logistic.gif';
import ext from '../Images/ext.gif';
import sale from '../Images/sale.gif';
import outline from '../Images/outline.gif';
import tool from '../Images/tool.gif';
import test from '../Images/test.gif';

export default function Services() {
	return (
		<section id="services" class="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
			<div class="container mx-auto">
				<div class="-mx-4 flex flex-wrap">
					<div class="w-full px-4">
						<div class="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
							<h2 class="text-blueNav mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
								NUESTROS SERVICIOS
							</h2>
						</div>
					</div>
				</div>
				<div class="-mx-4 flex flex-wrap">
					<div class="w-full px-4 md:w-1/2 lg:w-1/3">
						<div class="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
							<div class="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
								<Image src={heart} />
							</div>
							<h4 class="text-blueNav mb-3 text-xl font-semibold">
								<b>Medicina laboral</b>
							</h4>
							<p class="text-body-color">
								Contamos con servicios de medicina laboral con consultorios propios donde se pueden
								realizar controles de ausentismo y exámenes pre-ocupacionales y periódicos.
								<br />
								<br />
								<br />
								<br />
								<br />
								<br />
							</p>
						</div>
					</div>
					<div class="w-full px-4 md:w-1/2 lg:w-1/3">
						<div class="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
							<div class="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
								<Image src={ambulance} />
							</div>
							<h4 class="text-blueNav mb-3 text-xl font-semibold">
								<b>Emergencias médicas en obra</b>
							</h4>
							<p class="text-body-color">
								Ambulancias 4x4 tipo UTIM (unidad de terapia intensiva móvil), equipadas para la puna.
								con una flota que hoy llega a 6 unidades, todas camionetas Toyota Hilux.
								<br />
								<br />
								<br />
								<br />
								<br />
								<br />
								<br />
							</p>
						</div>
					</div>
					<div class="w-full px-4 md:w-1/2 lg:w-1/3">
						<div class="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
							<div class="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
								<Image src={training} />
							</div>
							<h4 class="text-blueNav mb-3 text-xl font-semibold">
								<b>Formación, capacitación y entrenamiento</b>
							</h4>
							<p class="text-body-color">
								Contamos con cursos de formación y capacitación avalados y aprobados por organismos
								acreditados. Somos la única empresa en el NOA que cuenta con curso de capacitación de
								Manejo Defensivo para vehículos 4x4, con aval de la agencia de seguridad vial de la
								provincia de salta y la secretaria de energía y minería. Cursos de Primeros Auxilios y
								RCP con equipos de última generación. Cursos prácticos de trabajo en altura y espacios
								confinados.
							</p>
						</div>
					</div>
					<div class="w-full px-4 md:w-1/2 lg:w-1/3">
						<div class="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
							<div class="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
								<Image src={hygiene} />
							</div>
							<h4 class="text-blueNav mb-3 text-xl font-semibold">
								<b>Consultoriá integral en higiene, seguridad y medio ambiente</b>
							</h4>
							<p class="text-body-color">
								Nuestro equipo de profesionales nos permite poder brindar el mejor asesoramiento
								integral, desde servicios externos de higiene y seguridad, dueño, implementación y
								auditorias de sistemas de gestión. Realización de medición de contaminantes en lugares
								de trabajo.
								<br />
								<br />
							</p>
						</div>
					</div>
					<div class="w-full px-4 md:w-1/2 lg:w-1/3">
						<div class="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
							<div class="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
								<Image src={logistic} />
							</div>
							<h4 class="text-blueNav mb-3 text-xl font-semibold">
								<b>Logística para la actividad minera</b>
							</h4>
							<p class="text-body-color">
								Contamos con camionetas 4x4 equipadas para brindar soporte de guía a los convoy de
								transportes pesados y de pasajeros. Alquiler de camionetas 4x4, combis y minibuses.
								<br />
								<br />
								<br />
								<br />
							</p>
						</div>
					</div>
					<div class="w-full px-4 md:w-1/2 lg:w-1/3">
						<div class="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
							<div class="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
								<Image src={ext} />
							</div>
							<h4 class="text-blueNav mb-3 text-xl font-semibold">
								<b>Servicio de mantenimiento de extintores (matafuegos)</b>
							</h4>
							<p class="text-body-color">
								Contamos con un taller de mantenimiento y reparación de extintores de todos los tipos y
								agentes extintores. Nuestro taller se encuentra certificado bajo norma IRAM 3517.
								Contamos con servicio de prueba hidráulica de mangueras hidrantes y de control de
								sistemas de detección y alarma contra incendio.
							</p>
						</div>
					</div>
					<div class="w-full px-4 md:w-1/2 lg:w-1/3">
						<div class="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
							<div class="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
								<Image src={sale} />
							</div>
							<h4 class="text-blueNav mb-3 text-xl font-semibold">
								<b>Venta de elementos de protección personal</b>
							</h4>
							<p class="text-body-color">
								Somos distribuidor de las mejoras marcas de EPP y seguridad industrial
							</p>
						</div>
					</div>
					<div class="w-full px-4 md:w-1/2 lg:w-1/3">
						<div class="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
							<div class="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
								<Image src={outline} />
							</div>
							<h4 class="text-blueNav mb-3 text-xl font-semibold">
								<b>
									Fabricación de cartelería
									<br />
								</b>
							</h4>
							<p class="text-body-color">
								Somos fabricantes de cartelería de seguridad y cartelería vial. Trabajamos cartelería en
								chapa, pvc de alto impacto, banners.
							</p>
						</div>
					</div>
					<div class="w-full px-4 md:w-1/2 lg:w-1/3">
						<div class="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
							<div class="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
								<Image src={tool} />
							</div>
							<h4 class="text-blueNav mb-3 text-xl font-semibold">
								<b>Laboratorio para calibración y reparación de detectores de gases.</b>
							</h4>
							<p class="text-body-color">
								Contamos con servicio autorizado por MSA para la calibración y reparación de detectores
								de gases.
							</p>
						</div>
					</div>
					<div class="w-full px-4 md:w-1/2 lg:w-1/3">
						<div class="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
							<div class="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
								<Image src={test} />
							</div>
							<h4 class="text-blueNav mb-3 text-xl font-semibold">
								<b>Test de evaluación cognitiva</b>
							</h4>
							<p class="text-body-color">
								Brindamos el servicio de evaluación cognitiva para conductores de vehículos, con
								reportes de resultados y propuestas de mejoras avalados por psicólogos laborales.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
