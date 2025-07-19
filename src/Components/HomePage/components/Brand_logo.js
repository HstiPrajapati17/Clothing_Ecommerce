import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import chanel from "../../Assets/Images/chanel.png";
import gucci from "../../Assets/Images/gucci.png";
import lacoste from "../../Assets/Images/lacoste.png";
import fila from "../../Assets/Images/fila.png";
import dockers from "../../Assets/Images/Dockers.png";
import ZARA from "../../Assets/Images/zara.png";
import louisVuitton from "../../Assets/Images/louis-vuitton.png";
import H_M from "../../Assets/Images/H&M.png";
import { a } from "framer-motion/client";

const brandLogos = [
	chanel,
	lacoste,
	gucci,
	fila,
	louisVuitton,
	dockers,
	H_M,
	ZARA,
];

const Brand_logo = () => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		arrows: false,
		slidesToShow: 6, // Show 2 slides at a time
		slidesToScroll: 1,
		autoplay: true, // Enable automatic sliding
		autoplaySpeed: 2000, // Slide every 2 seconds
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 5,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
				},
			}, 
			{
				breakpoint: 440,
				settings: {
					slidesToShow: 2,
				},
			},
		],
	};

	return (
		<section className="bg-[#e4e6ea] py-3 my-[60px]">
			<div className="max-w-7xl mx-auto">
				<Slider {...settings}>
					{brandLogos.map((logo, index) => (
						<div key={index} className="px-4 ">
							<img
								src={logo}
								alt={`Brand ${index + 1}`}
								className="h-[52px] w-[110px] object-contain"
							/>
						</div>
					))}
				</Slider>
			</div>
		</section>
	);
};

export default Brand_logo;