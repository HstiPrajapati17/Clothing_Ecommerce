import React from 'react';
import "../../Styles/cmn-css.css"
import "../../Styles/pages.css"
import Header from '../../HomePage/components/Header';
import Footer from '../../HomePage/components/Footer';
import { MdOutlineShareLocation } from 'react-icons/md';
import { IoMailUnreadOutline } from 'react-icons/io5';
import { FiPhoneCall } from 'react-icons/fi';
import { Cmn_btn } from '../../Assets/cmn_components/Cmn_comp';

const Contacts = () => {
	return (
		<div className="font-body text-dark contacts">
			<Header />
			{/* Hero Section */}
			<section className="h-[200px] sm:h-[300px] bg-cover bg-center flex items-center justify-center text-white text-center title-hero-bg">
				<div className="bg-black/20 w-full h-full flex items-center justify-center">
					<h1 className="text-3xl sm:text-5xl font-semibold drop-shadow-lg">Contacts</h1>
				</div>
			</section>

			{/* Main Contact Content Section */}
			<section className="mt-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto bg-[#e4e6ea]">
				<div className="grid grid-cols-1 lg:grid-cols-2 sm:gap-12">
					{/* Contact Information Column */}
					<div className="bg-secondary-beige px-8 py-10 rounded-lg">
						<h2 className="font-display text-3xl font-medium mb-6 text-dark">Get in Touch</h2>
						<p className="text-text-medium mb-8">
							We'd love to hear from you! Whether you have a question about our products, need assistance with an order, or just want to give feedback, our team is ready to help.
						</p>

						<div className="space-y-6 mb-8">
							<div className="flex items-start">
								<span className="text-dark-blue text-2xl mr-4"><MdOutlineShareLocation className='m-1' /></span> {/* Location icon */}
								<div>
									<h4 className="font-semibold text-lg text-text-dark">Our Address</h4>
									<p className="text-text-medium">
										123 Fashion Lane, Style City, FC 45678, Global
									</p>
								</div>
							</div>

							<div className="flex items-start">
								<span className="text-dark-blue text-2xl mr-4"><IoMailUnreadOutline className='m-1' /></span> {/* Email icon */}
								<div>
									<h4 className="font-semibold text-lg text-text-dark">Email Us</h4>
									<p className="text-text-medium">
										info@styleVersefashion.com
									</p>
								</div>
							</div>

							<div className="flex items-start">
								<span className="text-dark-blue text-2xl mr-4"><FiPhoneCall className='m-1' /></span> {/* Phone icon */}
								<div>
									<h4 className="font-semibold text-lg text-text-dark">Call Us</h4>
									<p className="text-text-medium">
										+1 (234) 567-8900
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Contact Form Column */}
					<div className="bg-secondary-beige px-8 py-10 rounded-lg">
						<h2 className="font-display text-3xl font-medium mb-6 text-dark">Send Us a Message</h2>
						<form className="space-y-6">
							<div>
								<label htmlFor="name" className="block text-sm font-medium text-text-medium mb-2">Your Name</label>
								<input
									type="text"
									id='name'
									placeholder="your name"
									className="flex-grow bg-transparent outline-none text-sm w-full"
								/>
							</div>
							<div>
								<label htmlFor="email" className="block text-sm font-medium text-text-medium mb-2">Your Email</label>
								<input
									type="email"
									id='email'
									placeholder="Email address"
									className="flex-grow bg-transparent outline-none text-sm w-full"
								/>
							</div>
							<div>
								<label htmlFor="subject" className="block text-sm font-medium text-text-medium mb-2">Subject</label>
								<input
									type="text"
									id='subject'
									placeholder="Subject"
									className="flex-grow bg-transparent outline-none text-sm w-full"
								/>
							</div>
							<div>
								<label htmlFor="message" className="block text-sm font-medium text-text-medium mb-2">Your Message</label>
								<textarea
									id="message"
									rows="5"
									className="w-full p-3 bg-transparent border border-black rounded-md focus:outline-none resize-y"
									placeholder="Enter your message here..."
								></textarea>
							</div>
							<Cmn_btn className={"main-btn"} btn_name={"Send Message"}/>
						</form>
					</div>
				</div>
			</section>

			{/* Map Section (Optional, using a placeholder) */}
			<section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto bg-light-beige">
				<h2 className="font-display text-3xl font-medium text-center mb-8 text-dark">Find Us on the Map</h2>
				<div className="w-full h-80 bg-gray-300 rounded-lg overflow-hidden shadow-md">
					
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.1666873523173!2d72.82283437435474!3d21.222718180479134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fca031d2e1f%3A0x7d6a5c1a7d6e6f9!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1701764834212!5m2!1sen!2sin"
						width="100%"
						height="100%"
						style={{ border: 0 }}
						allowFullScreen=""
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						title="Our Location on Map"
					></iframe>
				</div>
			</section>
			<Footer />
		</div>
	);
};

export default Contacts;