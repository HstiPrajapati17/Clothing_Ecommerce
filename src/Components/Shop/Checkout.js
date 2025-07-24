import React, { useState } from 'react';
import Header from '../HomePage/components/Header';
import "../Styles/cmn-css.css";
import { Cmn_btn } from '../Assets/cmn_components/Cmn_comp';
import Footer from '../HomePage/components/Footer';

const Checkout = () => {
	const [showCoupon, setShowCoupon] = useState(false);
	const [paymentMethod, setPaymentMethod] = useState('card');
	return (
		<div className="checkout-page">
			<Header />
			<div className="max-w-7xl mx-auto px-4 py-10 flex flex-col lg:flex-row gap-10">
				{/* Left Form Section */}
				<form className="w-full lg:w-2/3 space-y-6">
					{/* Coupon Section */}
					<div className="border border-gray-300 p-4 bg-gray-50 rounded">
						<span className="mr-2">Have a coupon?</span>
						<button
							type="button"
							onClick={() => setShowCoupon(!showCoupon)}
							className="text-black font-medium hover:underline"
						>
							Click here to enter your code
						</button>
						{/* Show this input box if user clicks the link */}
						{showCoupon && (
							<div className="mt-4 flex items-center gap-2">
								<input
									type="text"
									placeholder="Enter coupon code"
									className=""
								/>
								<button
									type="button"
									className="bg-black/80 text-white px-4 py-2 rounded hover:bg-black"
								>
									Apply
								</button>
							</div>
						)}
					</div>
					{/* Contact Information */}
					<div className='bg-gray-50 p-[12px] border border-gray-300 rounded'>
						<h3 className="text-xl font-semibold mb-2">Contact Information</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
							<input type="text" placeholder="First Name" className="" required />
							<input type="text" placeholder="Last Name" className="" required />
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
							<input type="tel" placeholder="Phone" className="" required />
							<input type="email" placeholder="Email address" className="" required />
						</div>
						<label className="flex items-center space-x-2 text-md text-gray-600">
							<input type="checkbox" className="accent-black" />
							<span>Create an account and send a password to the email.</span>
						</label>
					</div>
					{/* Shipping Address */}
					<div className='bg-gray-50 p-[12px] rounded border border-gray-300'>
						<h3 className="text-xl font-semibold mb-2">Shipping Address</h3>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-4'>
							<select className=" mb-3 w-[180px] bg-gray-50 border border-gray-300 p-1 rounded" required>
								<option value="">Select Country</option>
								<option value="india">India</option>
								<option value="usa">USA</option>
								<option value="uk">UK</option>
							</select>
							<select className="mb-3 w-[180px] bg-gray-50 border border-gray-300 p-1 rounded" required>
								<option value="">Select Region</option>
								<option value="gujarat">Gujarat</option>
								<option value="maharashtra">Maharashtra</option>
							</select>
						</div>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-4'>
							<input type="text" placeholder="Town / City" className="" required />
							<input type="text" placeholder="Apartment, suite, unit etc. (optional)" className="" />
						</div>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
							<input type="text" placeholder="Postcode / ZIP" className="" />
							<input type="text" placeholder="Street Address" className="" required />
						</div>
						<textarea
							id="message"
							rows="5"
							className="w-full p-3 bg-transparent border border-black rounded-md focus:outline-none resize-y"
							placeholder="Notes about your order, e.g. special instructions"
						></textarea>
					</div>
				</form>

				{/* Right Order Summary */}
				<div className="w-full lg:w-1/3 border border-gray-200 p-6 bg-gray-50 rounded-md space-y-6">
					<h4 className="text-lg font-semibold">Order Summary</h4>
					<ul className="space-y-2 text-md text-gray-700">
						<li className="flex justify-between border-b pb-2">
							<span className='text-lg font-semibold'>Winter Short Jacket</span>
							<span>1 × $249</span>
						</li>
						<li className="flex justify-between">
							<span>Subtotal</span>
							<span>$249</span>
						</li>
						<li className="flex justify-between">
							<span>Shipping</span>
							<span>Free</span>
						</li>
						<li className="flex justify-between font-semibold border-t pt-2">
							<span>Total</span>
							<span>$249</span>
						</li>
					</ul>

					{/* Payment Method */}
					<div className="space-y-6 text-gray-700">
						{/* Payment Option Toggle */}
						<div className="flex items-center gap-6">
							<label className="flex items-center space-x-2">
								<input
									type="radio"
									name="paymentMethod"
									value="card"
									checked={paymentMethod === 'card'}
									onChange={() => setPaymentMethod('card')}
									className="accent-black"
								/>
								<span>Payment By Card</span>
							</label>
							<label className="flex items-center space-x-2">
								<input
									type="radio"
									name="paymentMethod"
									value="cod"
									checked={paymentMethod === 'cod'}
									onChange={() => setPaymentMethod('cod')}
									className="accent-black"
								/>
								<span>Cash On Delivery</span>
							</label>
						</div>

						{/* Conditional Card Payment UI */}
						{paymentMethod === 'card' && (
							<>
								{/* Card Logos */}
								<div className="flex items-center gap-4">
									<img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" className="h-10 w-20 border border-black/60 p-1 rounded cursor-pointer hover:border-black" />
									<img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="MasterCard" className="h-10 w-20 border border-black/60 p-1 rounded cursor-pointer hover:border-black" />
									<img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Skrill_logo.svg" alt="Skrill" className="h-10 w-20 border border-black/60 p-2 rounded cursor-pointer hover:border-black bg-white" />
									<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png" alt="PayPal" className="h-10 w-20 border border-black/60 p-1 rounded cursor-pointer hover:border-black" />
								</div>

								{/* Card Input Fields */}
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<input type="text" placeholder="Card holder Name" className="input-style" />
									<input type="text" placeholder="Card Number" className="input-style" />
									<input type="text" placeholder="CVV" className="input-style" />
									<input type="text" placeholder="Expire Date" className="input-style" />
								</div>
							</>
						)}

						{/* Terms and Place Order */}
						<div className="space-y-4">
							<label className="flex items-start space-x-2 text-sm">
								<input type="checkbox" className="mt-1 accent-black" required />
								<span>
									I have read and agree to the website
									<a href="#" className="text-black underline ml-1">terms and conditions</a> *
								</span>
							</label>

							<Cmn_btn className={"main-btn main-btn2"} btn_name={"Place Order"} />
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Checkout;
