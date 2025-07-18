import React from 'react'

const Bls_Shipping = () => {
	return (<>
		<div className="max-w-7xl mx-auto py-4 md:py-12 px-4">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
				{/* Card 1 */}
				<div className="flex justify-center gap-4">
					<img
						src="https://www.svgrepo.com/show/9807/shipping.svg"
						alt="Free Shipping"
						className="w-14 h-14"
					/>
					<div>
						<h3 className="text-lg font-semibold">Free Shipping</h3>
						<p className="text-sm text-gray-600">For all orders over $100</p>
					</div>
				</div>
				{/* Card 2 */}
				<div className="flex justify-center gap-4">
					<img
						src="https://www.svgrepo.com/show/113164/credit-card.svg"
						alt="Secure Payment"
						className="w-14 h-14"
					/>
					<div>
						<h3 className="text-lg font-semibold">100% Payment Secure</h3>
						<p className="text-sm text-gray-600">Safe payment with PEV</p>
					</div>
				</div>
				{/* Card 3 */}
				<div className="flex justify-center gap-4">
					<img
						src="https://www.svgrepo.com/show/165538/coin.svg"
						alt="Money Back"
						className="w-14 h-14"
					/>
					<div>
						<h3 className="text-lg font-semibold">30 Days Return</h3>
						<p className="text-sm text-gray-600">For an Exchange Product</p>
					</div>
				</div>
				{/* Card 4 */}
				<div className="flex justify-center gap-4">
					<img
						src="https://www.svgrepo.com/show/220411/chat.svg"
						alt="Support"
						className="w-14 h-14"
					/>
					<div>
						<h3 className="text-lg font-semibold">Support 24/7</h3>
						<p className="text-sm text-gray-600">Contact us Anytime</p>
					</div>
				</div>
			</div>
		</div>
	</>
	)
}

export default Bls_Shipping
