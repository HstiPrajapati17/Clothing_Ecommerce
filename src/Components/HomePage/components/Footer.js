import React from "react";
import "../../Styles/home-page.css";
import "../../Styles/cmn-css.css"
import { FaFacebookF, FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa";
import { Cmn_btn } from "../../Assets/cmn_components/Cmn_comp";

const Footer = () => {
	return (
		<footer className="bg-[#e4e6ea] text-black py-8 footer">
			<div className="max-w-7xl mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-9">
					{/* website info */}
					<div className="website-info">
						<h2 className="text-2xl font-bold mb-4">StyleVerse</h2>
						<p className="text-sm mb-4">Your one-stop shop for the latest fashion trends. Trendy and affordable fashion for everyone—shop clothes online with ease and style.</p>
						<div className="social-icons flex space-x-4">
							<a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className=""><FaFacebookF /></a>
							<a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className=""><FaInstagram /></a>
							<a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className=""><FaTwitter /></a>
							<a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className=""><FaPinterest /></a>
						</div>
					</div>
					{/* Contact Section */}
					<div className="contact-section">
						<h3 className="text-lg font-semibold mb-4">Contact Us</h3>
						<h5 className="text-[16px] font-medium mb-2 flex gap-2 ">Email: <p><a href="mailto:info@clothingstore.com" className="hover:underline">info@clothingstore.com</a></p></h5>
						<h5 className="text-[16px] font-medium mb-2 flex gap-2">Phone: <p><a href="tel:+1234567890" className="hover:underline">+1 234 567 890</a></p></h5>
						<h5 className="text-[16px] font-medium mb-2 flex gap-2">Address: <p>123 Fashion St, Style City, SC 12345</p></h5>
					</div>
					{/* Customer Support Section */}
					<div>
						<h3 className="text-lg font-bold mb-4">Customer Support</h3>
						<ul className="space-y-2 text-sm">
							<li>
								<a
									href="/about-us"
									className="text-base hover:underline transform hover:scale-105 transition-transform duration-200 inline-block"
								>
									About Us
								</a>
							</li>

							<li>
								<a href="/privacy-policy" className="text-base hover:underline transform hover:scale-105 transition-transform duration-200 inline-block">
									Privacy Policy
								</a>
							</li>
							<li>
								<a href="/faqs" className="text-base hover:underline transform hover:scale-105 transition-transform duration-200 inline-block">
									FAQs
								</a>
							</li>
							<li>
								<a href="/terms-conditions" className="text-base hover:underline transform hover:scale-105 transition-transform duration-200 inline-block">
									Term & Conditions
								</a>
							</li>
							<li>
								<a href="/contacts" className="text-base hover:underline transform hover:scale-105 transition-transform duration-200 inline-block">
									Contact Us
								</a>
							</li>
						</ul>
					</div>
					{/* Newsletter Section */}
					<div>
						<h3 className="text-lg font-bold mb-4">Newsletter</h3>
						<p className="text-sm mb-4">
							Get 15% off your first purchase! Plus, be the first to know about
							sales, new product launches, and exclusive offers!
						</p>
						<div className="flex items-center border-b border-black pb-2 mb-3">
							<input
								type="email"
								placeholder="Email address"
								className="flex-grow bg-transparent outline-none text-sm no-border-bottom"
							/>
							<button className="text-black text-lg ml-2">&rarr;</button>
						</div>
						<Cmn_btn className={"main-btn max-w-48 mt-3"} btn_name={"Shop Now"} />
					</div>
				</div>

				{/* Copyright Section */}
				<div className="border-t border-gray-700 mt-8 pt-4 text-center">
					<p className="text-sm">
						Copyright &copy; {new Date().getFullYear()} StyleVerse. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
