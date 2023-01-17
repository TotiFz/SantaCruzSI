import Image from 'next/image';
import ambulance from '../Images/ambulance.gif';
import heart from '../Images/heart.gif';
import training from '../Images/training.gif';
import hygiene from '../Images/hygiene.gif';
import logistic from '../Images/logistic.gif';
import ext from '../Images/ext.gif';
import sale from '../Images/sale.gif';

export default function Services() {
	return (
		<section id="services" class="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
			<hr class="my-8 border-white sm:mx-auto lg:my-8" />
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
							<h4 class="text-dark mb-3 text-xl font-semibold">Medicina laboral</h4>
							<p class="text-body-color">
								We dejoy working with discerning clients, people for whom qualuty, service, integrity &
								aesthetics.
							</p>
						</div>
					</div>
					<div class="w-full px-4 md:w-1/2 lg:w-1/3">
						<div class="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
							<div class="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
								<Image src={ambulance} />
							</div>
							<h4 class="text-dark mb-3 text-xl font-semibold">Emergencias médicas en obra</h4>
							<p class="text-body-color">
								We dejoy working with discerning clients, people for whom qualuty, service, integrity &
								aesthetics.
							</p>
						</div>
					</div>
					<div class="w-full px-4 md:w-1/2 lg:w-1/3">
						<div class="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
							<div class="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
								<Image src={training} />
							</div>
							<h4 class="text-dark mb-3 text-xl font-semibold">
								Formación y capacitación para habilitaciones especiales
							</h4>
							<p class="text-body-color">
								We dejoy working with discerning clients, people for whom qualuty, service, integrity &
								aesthetics.
							</p>
						</div>
					</div>
					<div class="w-full px-4 md:w-1/2 lg:w-1/3">
						<div class="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
							<div class="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
								<Image src={hygiene} />
							</div>
							<h4 class="text-dark mb-3 text-xl font-semibold">
								Consultoriá integral en higiene, seguridad y medio ambiente
							</h4>
							<p class="text-body-color">
								We dejoy working with discerning clients, people for whom qualuty, service, integrity &
								aesthetics.
							</p>
						</div>
					</div>
					<div class="w-full px-4 md:w-1/2 lg:w-1/3">
						<div class="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
							<div class="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
								<Image src={logistic} />
							</div>
							<h4 class="text-dark mb-3 text-xl font-semibold">Logística para la actividad minera</h4>
							<p class="text-body-color">
								We dejoy working with discerning clients, people for whom qualuty, service, integrity &
								aesthetics.
							</p>
						</div>
					</div>
					<div class="w-full px-4 md:w-1/2 lg:w-1/3">
						<div class="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
							<div class="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
								<Image src={ext} />
							</div>
							<h4 class="text-dark mb-3 text-xl font-semibold">
								Servicio de mantenimiento de extingtores (matafuegos)
							</h4>
							<p class="text-body-color">
								We dejoy working with discerning clients, people for whom qualuty, service, integrity &
								aesthetics.
							</p>
						</div>
					</div>
					<div class="w-full px-4 md:w-1/2 lg:w-1/3">
						<div class="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
							<div class="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
								<Image src={sale} />
							</div>
							<h4 class="text-dark mb-3 text-xl font-semibold">
								Venta de elementos de protección personal
							</h4>
							<p class="text-body-color">
								We dejoy working with discerning clients, people for whom qualuty, service, integrity &
								aesthetics.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
