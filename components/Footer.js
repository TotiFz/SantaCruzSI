import Image from 'next/image';
import Link from 'next/link';
import Logo2 from '../Images/LogoV2.jpg';

export default function Footer() {
	return (
		<footer class="p-4 bg-blueNav buttom-0 rounded-lg shadow md:px-6 md:py-8 ">
			<div class="sm:flex sm:items-center sm:justify-between">
				<Link href="#landing" class="flex items-center mb-4 sm:mb-0">
					<Image
						alt="Logo Santa Cruz"
						src={Logo2}
						width={125}
						height={125}
						style={{
							maxWidth: '100%',
							height: 'auto',
						}}
					/>
				</Link>
			</div>
			<hr class="my-8 border-white sm:mx-auto lg:my-8" />
			<span class="block text-sm text-gray-50 sm:text-center ">
				© Santa Cruz Servicios Integrales. All Rights Reserved.
			</span>
		</footer>
	);
}
