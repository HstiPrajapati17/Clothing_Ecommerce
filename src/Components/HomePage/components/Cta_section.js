import React from "react";
import "../../Styles/home-page.css"; // Optional if you're adding external CSS
import "../../Styles/cmn-css.css"; // Optional if you're adding external CSS
import { Cmn_btn } from "../../Assets/cmn_components/Cmn_comp";

const CTASection = () => {
	return (
		<section className="cta-section w-full relative text-white  flex flex-col items-center justify-center text-center">
			<div className="max-w-3xl">
				<h2 className="text-[32px] sm:text-[40px] font-bold mb-4">
					Elevate Your Style Today
				</h2>
				<p className="text-base md:text-lg mb-6 text-gray-300">
					Discover the latest fashion trends and exclusive collections tailored for you.
				</p>
				<Cmn_btn className={"main-btn "} btn_name={"Shop Now"} />
			</div>
		</section>
	);
};

export default CTASection;
