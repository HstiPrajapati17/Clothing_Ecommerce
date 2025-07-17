import React, { useState, useEffect } from "react";
import "../../Styles/home-page.css";
import model1 from "../../Assets/Images/model1.jpg";
import outfit1 from "../../Assets/Images/outfit1.jpg";
import model2 from "../../Assets/Images/model2.jpg";
import outfit2 from "../../Assets/Images/outfit2.jpg";
import model3 from "../../Assets/Images/model3.jpg";
import outfit3 from "../../Assets/Images/outfit3.jpg";
import model4 from "../../Assets/Images/model4.jpg";
import outfit4 from "../../Assets/Images/outfit4.jpg";
import model5 from "../../Assets/Images/model5.jpg";
import outfit5 from "../../Assets/Images/outfit5.jpg";
import { Cmn_btn } from "../../Assets/cmn_components/Cmn_comp";

const slides = [
	{
		leftImage: model1,
		rightImage: outfit1,
		title: "HIGH TURTLENECK JUMPER",
		desc: "Elevate your style with this cozy high-neck jumper. Designed for warmth and elegance.",
	},
	{
		leftImage: model4,
		rightImage: outfit4,
		title: "POCKETED DENIM JACKET",
		desc: "Classic denim jacket with multiple pockets for a rugged yet versatile look. Made from durable cotton for all-day comfort and style.",
	},
	{
		leftImage: model3,
		rightImage: outfit3,
		title: "HOODIE WITH EMBROIDERED SLOGAN",
		desc: "Limited edition collection, available online. Regular fit, modern hoodie with soft fleece.",
	},
	{
		leftImage: model2,
		rightImage: outfit2,
		title: "DENIM JACKET WITH DECORATIVE EMBROIDERY",
		desc: "Relaxed design slightly flared classic denim jacket made of soft cotton rich fabric with elastic fibre blend.",
	},
	{
		leftImage: model5,
		rightImage: outfit5,
		title: "GRAPHIC PRINTED T-SHIRT",
		desc: "Soft cotton T-shirt featuring a bold graphic print and a classic crew neckline. Perfect for everyday casual wear with a touch of personality.",
	},
];

const HeroSlider = () => {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setIndex((prev) => (prev + 1) % slides.length);
		}, 3000);
		return () => clearInterval(timer);
	}, []);

	return (
		<div className="hero-slider  w-full mx-auto  transition-transform duration-1000 ease-in-out">
			{slides.map((slide, i) => (
				<div
					key={i}
					className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${i === index ? "opacity-100 z-10" : "opacity-0 z-0"
						}`}
				>
					<div className="w-full h-full flex flex-row">
						{/* Left Half */}
						<div className=" w-1/2 h-full overflow-hidden">
							<img
								src={slide.leftImage}
								alt="left"
								className="w-full h-full object-cover" />
						</div>

						{/* Right Half */}
						<div className="w-1/2 h-full overflow-hidden">
							<img
								src={slide.rightImage}
								alt="right"
								className="w-full h-full object-cover"
							/>
						</div>
					</div>
					{/* Center Content */}
					<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4  lg:max-w-[500px] z-20">
						<h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-2 md:mb-4">
							{slide.title}
						</h2>
						<p className="text-gray-700 text-xs sm:text-sm md:text-base mb-4 md:mb-6 px-2 md:px-0">
							{slide.desc}
						</p>
						<Cmn_btn className={"main-btn max-w-xs"} btn_name={"Sign In"} />
					</div>
				</div>
			))}
		</div>
	);
};

export default HeroSlider;
