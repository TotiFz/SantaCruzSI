import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import img1 from '../Images/img-lan-1.jpg';
import img2 from '../Images/img-lan-2.jpg';
import img3 from '../Images/img-lan-3.jpg';
import img4 from '../Images/img-lan-4.jpg';
import img5 from '../Images/img-lan-5.jpg';
import img6 from '../Images/img-lan-6.png';
import img7 from '../Images/img-lan-7.png';
import img8 from '../Images/img-lan-8.png';

function App() {
	const slides = [
		{
			img: img1,
		},
		{
			img: img2,
		},
		{
			img: img3,
		},
		{
			img: img4,
		},
		{
			img: img5,
		},
		{
			img: img6,
		},
		{
			img: img7,
		},
		{
			img: img8,
		},
	];
	console.log(slides);
	const [currentIndex, setCurrentIndex] = useState(0);

	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const nextSlide = () => {
		const isLastSlide = currentIndex === slides.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	const goToSlide = slideIndex => {
		setCurrentIndex(slideIndex);
	};

	return (
		<div id="landing" className="max-w-[1570px] h-[850px] w-full m-auto py-16 px-4 mt-20 relative group">
			<div
				style={{ backgroundImage: `url(${slides[currentIndex].img.src})` }}
				className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
			></div>
			<div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
				<BsChevronCompactLeft onClick={prevSlide} size={30} />
			</div>
			<div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
				<BsChevronCompactRight onClick={nextSlide} size={30} />
			</div>
			<div className="flex top-4 justify-center py-2">
				{slides.map((slide, slideIndex) => (
					<div key={slideIndex} onClick={() => goToSlide(slideIndex)} className="text-2xl cursor-pointer">
						<RxDotFilled />
					</div>
				))}
			</div>
		</div>
	);
}

export default App;
