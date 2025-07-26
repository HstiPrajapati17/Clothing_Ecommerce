import React, { useState } from 'react';
import img__1 from "../Assets/Images/img17.jpg";
import img__2 from "../Assets/Images/img17(1).jpg";
import img__3 from "../Assets/Images/img17(2).jpg";
import Header from '../HomePage/components/Header';
import { Cmn_btn, Cmn_section_title } from '../Assets/cmn_components/Cmn_comp';
import Footer from '../HomePage/components/Footer';
import { FaStar } from "react-icons/fa";
import img1 from "../Assets/Images/skirt1.jpg"
import img_1 from "../Assets/Images/skirt2.jpg"
import img2 from "../Assets/Images/shirt.jpg"
import img2_1 from "../Assets/Images/shirt2.jpg"
import img3 from "../Assets/Images/shirt3.jpg"
import img3_1 from "../Assets/Images/shirt4.jpg"
import img3_2 from "../Assets/Images/image8.jpg"
import img4 from "../Assets/Images/couple2.jpg"
import { ProductCard } from '../HomePage/components/Product_cards';

const images = [img__1, img__2, img__3];

const ProductSingle = () => {

	const RelatedPro = [
		{
			name: "Simple Classic Skirt",
			image: img1,
			price: 210,
			colors: [
				{ colorCode: 'rgb(105 129 117)', image: img1 },
				{ colorCode: 'rgb(194 116 94)', image: img_1 },
			],
			isPreOrder: true,
			isOnSale: false,
			isMarquee: false,
		},
		{
			name: "Stylish Casual Shirt",
			image: img2,
			price: 145,
			colors: [
				{ colorCode: 'rgb(154 95 67)', image: img2 },
				{ colorCode: 'rgb(115 125 102)', image: img2_1 },
			],
			isPreOrder: false,
			isOnSale: false,
			isMarquee: true,

		},
		{
			name: "Simple Classic Couple shirt Outfit",
			image: img4,
			price: 240,
			colors: [
				{ colorCode: 'rgb(77 73 94)', image: img4 },
			],
			isPreOrder: true,
			isOnSale: false,
			isMarquee: false,

		},
		{
			name: "Checks Patterned Shirt",
			image: img3,
			price: 130,
			oldPrice: 160,
			colors: [
				{ colorCode: '#ded0ca', image: img3 },
				{ colorCode: '#a17b67', image: img3_1 },
				{ colorCode: '#728181', image: img3_2 },
			],
			isPreOrder: false,
			isOnSale: true,
			isMarquee: false,
			discount: 19,
		},
	];
	const [selectedImage, setSelectedImage] = useState(images[0]);
	const [quantity, setQuantity] = useState(1);
	const [selectedSize, setSelectedSize] = useState(null);
	const [selectedColor, setSelectedColor] = useState(null);
	const [activeTab, setActiveTab] = useState('description');
	const [showReviewForm, setShowReviewForm] = useState(false);


	const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
	const colors = ['rgb(211 176 235)', 'rgb(158 190 236)', 'rgb(160 203 198)'];

	return (
		<>
			<div className='product-single'>
				<Header />
				<div className='max-w-7xl mx-auto'>
					<div className="flex flex-col lg:flex-row gap-10 p-6 lg:p-16">
						{/* Left Side: Thumbnails + Main Image */}
						<div className="flex gap-5">
							{/* Thumbnails */}
							<div className="flex flex-col gap-3">
								{images.map((img, index) => (
									<img
										key={index}
										src={img}
										alt={`thumb-${index}`}
										onClick={() => setSelectedImage(img)}
										className={`w-20 h-24 object-cover cursor-pointer border ${selectedImage === img ? 'border-black' : 'border-transparent'
											} hover:border-black transition`}
									/>
								))}
							</div>
							{/* Main Image */}
							<div className="w-72 md:w-96 h-auto">
								<img
									src={selectedImage}
									alt="Main Product"
									className="w-full h-auto object-cover rounded-md"
								/>
							</div>
						</div>
						{/* Right Side: Product Info */}
						<div className="flex-1">
							<h2 className="text-3xl font-semibold text-gray-800 mb-2">
								Polka Dot Chiffon Mini Dress
							</h2>
							<p className="text-2xl font-bold text-red-500 mb-4">$58.79</p>
							{/* Star Rating */}
							<div className="flex items-center gap-1 mb-3">
								{[...Array(5)].map((_, index) => (
									<svg
										key={index}
										xmlns="http://www.w3.org/2000/svg"
										className={`h-5 w-5 ${index < 4 ? 'text-yellow-400' : 'text-gray-300'}`}
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.785.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
									</svg>
								))}
								<span className="text-sm text-gray-500">(4.0)</span>
							</div>
							<p className="text-gray-600 mb-6">
								Turn heads and radiate charm in this playful yet elegant Polka Dot Chiffon Mini Dress. Crafted from lightweight, breathable chiffon fabric, this dress features a flattering A-line silhouette that flows effortlessly with every step.
							</p>
							{/* Size + Color Button Selectors */}
							<div className="space-y-6 mb-6">
								{/* Size */}
								<div>
									<label className="block text-lg font-medium text-gray-700 mb-2">Size :</label>
									<div className="flex gap-3">
										{sizes.map((size) => (
											<button
												key={size}
												onClick={() => setSelectedSize(size)}
												className={`px-4 py-2 rounded-full 
													border text-sm ${selectedSize === size
														? 'bg-black text-white border-black'
														: 'bg-white text-gray-800 border-gray-700 hover:border-black'
													} transition`}
											>
												{size}
											</button>
										))}
									</div>
								</div>

								{/* Color Circles */}
								<div>
									<label className="block text-lg font-medium text-gray-700 mb-2">Color :</label>
									<div className="flex gap-4">
										{colors.map((color) => (
											<div
												key={color}
												onClick={() => setSelectedColor(color)}
												className={`rounded-full cursor-pointer transition ${selectedColor === color ? 'ring-2 ring-black' : ''
													}`}
											>
												<div
													className="w-8 h-8 rounded-full border-2 border-gray-300"
													style={{ backgroundColor: color.toLowerCase() }}
													aria-label={color}
												></div>
											</div>
										))}
									</div>
								</div>
							</div>

							{/* Quantity + Add to Cart */}
							<div className="flex items-start flex-col gap-2">
								<label className="block text-lg font-medium text-gray-700 mb-1">Quantity :</label>
								<div className="flex items-center bg-gray-300 rounded-full shadow-inner px-1 py-1">

									<button
										onClick={() => setQuantity(quantity > 0 ? quantity - 1 : 0)}
										className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-lg font-semibold shadow hover:bg-gray-200 transition"
									>
										−
									</button>
									<span className="mx-4 text-lg font-medium w-6 text-center">{quantity}</span>
									<button
										onClick={() => setQuantity(quantity + 1)}
										className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-lg font-semibold shadow hover:bg-gray-200 transition"
									>
										+
									</button>
								</div>
							</div>

							<div className='add-to-cart sm:w-1/2 mt-8'>
								<Cmn_btn className={"main-btn main-btn2"} btn_name={"Add to Cart"} />
							</div>
							{/* Share Buttons */}
							<div className="max-w-7xl mx-auto mb-10">
								<div className="pt-6 flex flex-col md:flex-row items-start justify-start gap-4">
									<h4 className="text-lg font-medium text-gray-800">Share this product on :</h4>
									<div className="flex gap-6 text-gray-600 text-lg">
										{/* Facebook */}
										<a
											href="#"
											className="flex items-center gap-2 hover:text-blue-600 transition"
											aria-label="Share on Facebook"
										>
											<svg
												fill="currentColor"
												viewBox="0 0 24 24"
												className="w-5 h-5"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.351C0 23.4.6 24 1.325 24h11.483v-9.294H9.692v-3.622h3.116V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.313h3.588l-.467 3.622h-3.121V24h6.116C23.4 24 24 23.4 24 22.675V1.325C24 .6 23.4 0 22.675 0z" />
											</svg>
											Facebook
										</a>

										{/* Instagram */}
										<a
											href="#"
											className="flex items-center gap-2 hover:text-pink-500 transition"
											aria-label="Share on Instagram"
										>
											<svg
												fill="currentColor"
												viewBox="0 0 24 24"
												className="w-5 h-5"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.056 1.97.248 2.426.415.588.215 1.008.472 1.45.913.441.442.698.862.913 1.45.167.456.36 1.256.415 2.426.059 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.248 1.97-.415 2.426a3.945 3.945 0 0 1-.913 1.45 3.945 3.945 0 0 1-1.45.913c-.456.167-1.256.36-2.426.415-1.266.059-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.248-2.426-.415a3.945 3.945 0 0 1-1.45-.913 3.945 3.945 0 0 1-.913-1.45c-.167-.456-.36-1.256-.415-2.426C2.212 15.584 2.2 15.2 2.2 12s.012-3.584.07-4.85c.056-1.17.248-1.97.415-2.426.215-.588.472-1.008.913-1.45a3.945 3.945 0 0 1 1.45-.913c.456-.167 1.256-.36 2.426-.415C8.416 2.212 8.8 2.2 12 2.2Zm0 1.8c-3.16 0-3.525.012-4.77.068-1.006.048-1.552.216-1.914.36-.48.195-.822.428-1.184.79a2.144 2.144 0 0 0-.79 1.184c-.144.362-.312.908-.36 1.914-.056 1.245-.068 1.61-.068 4.77s.012 3.525.068 4.77c.048 1.006.216 1.552.36 1.914.195.48.428.822.79 1.184.362.362.704.595 1.184.79.362.144.908.312 1.914.36 1.245.056 1.61.068 4.77.068s3.525-.012 4.77-.068c1.006-.048 1.552-.216 1.914-.36a2.144 2.144 0 0 0 1.184-.79c.362-.362.595-.704.79-1.184.144-.362.312-.908.36-1.914.056-1.245.068-1.61.068-4.77s-.012-3.525-.068-4.77c-.048-1.006-.216-1.552-.36-1.914a2.144 2.144 0 0 0-.79-1.184 2.144 2.144 0 0 0-1.184-.79c-.362-.144-.908-.312-1.914-.36-1.245-.056-1.61-.068-4.77-.068ZM12 5.838a6.162 6.162 0 1 1 0 12.324 6.162 6.162 0 0 1 0-12.324Zm0 1.8a4.362 4.362 0 1 0 0 8.724 4.362 4.362 0 0 0 0-8.724Zm6.406-.984a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z" />
											</svg>
											Instagram
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="max-w-7xl mx-auto px-4 py-10 text-[#222] text-md leading-relaxed">
					{/* Tabs */}
					<div className="flex justify-center flex-wrap border-b border-gray-300 mb-6" role="tablist">
						{["description", "information", "review"].map((tab) => (
							<button
								key={tab}
								onClick={() => setActiveTab(tab)}
								role="tab"
								aria-selected={activeTab === tab}
								className={`uppercase font-semibold mr-6 pb-2 border-b-2 transition ${activeTab === tab
									? "border-black text-black"
									: "border-transparent text-gray-400 hover:text-black"
									}`}
							>
								{tab === "description"
									? "Description"
									: tab === "information"
										? "Additional Information"
										: "Reviews"}
							</button>
						))}
					</div>
					{/* Description Tab */}
					{activeTab === "description" && (
						<div>
							<p className="mb-6">
								Captivate with this shirt’s versatile urban look that works as well at happy hour as it does in the backyard.
								The real mother of pearl buttons and embroidered crocodile complete its elegant appeal...
							</p>

							<div className="flex flex-wrap gap-4 text-4xl mb-6">
								<img src="https://cdn-icons-png.flaticon.com/128/11825/11825557.png" className="h-8" />
								<img src="https://cdn-icons-png.flaticon.com/128/693/693173.png" className="h-8" />
								<img src="https://cdn-icons-png.flaticon.com/128/11825/11825541.png" className="h-8" />
							</div>

							<ul className="list-disc ml-6 mb-6 space-y-1">
								<li>MACHINE WASH AT MAX.TEMP. 30˚ C - NORMAL PROCESS</li>
								<li>DO NOT BLEACH</li>
								<li>DO NOT TUMBLE DRY</li>
								<li>IRON AT MAX. TEMP. OF 110˚ C WITHOUT STEAM</li>
								<li>DO NOT DRY CLEAN</li>
							</ul>

							<h4 className="font-semibold mb-1">Sample Ordered List</h4>
							<ol className="list-decimal ml-6 mb-6 space-y-1">
								<li>Comodus in tempor ullamcorper miaculis</li>
								<li>Pellentesque vitae neque mollis urna mattis laoreet</li>
								<li>Divamus sit amet purus justo</li>
								<li>Proin molestie egestas orci ac suscipit risus</li>
							</ol>

							<h4 className="font-semibold mb-1">Sample Paragraph Text</h4>
							<blockquote className="border-l-4 border-gray-400 pl-4 text-gray-600 italic">
								Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize
								with a straw hat and you're ready for summer!
							</blockquote>
						</div>
					)}
					{/* Information Tab */}
					{activeTab === "information" && (
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
							<ul className="list-disc ml-6 space-y-1">
								<li><strong>Material:</strong> 100% Cotton</li>
								<li><strong>Fit Type:</strong> Regular Fit</li>
								<li><strong>Sleeve Length:</strong> Short Sleeve</li>
								<li><strong>Neckline:</strong> Round Neck</li>
								<li><strong>Pattern:</strong> Solid</li>
								<li><strong>Occasion:</strong> Casual / Daily Wear</li>
							</ul>

							<ul className="list-disc ml-6 space-y-1">
								<li><strong>Care Instructions:</strong> Machine Wash Cold</li>
								<li><strong>Closure:</strong> Pullover</li>
								<li><strong>Country of Origin:</strong> India</li>
								<li><strong>Stretchability:</strong> Non-Stretch</li>
								<li><strong>Transparency:</strong> Opaque</li>
							</ul>
						</div>
					)}
					{/* Reviews Tab */}
					{activeTab === "review" && (
						<div className="text-[#222]">
							<h2 className="text-center text-2xl font-semibold mb-8">Customer Reviews</h2>

							<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-sm md:text-base">
								{/* Overall Rating */}
								<div className="text-center md:text-left space-y-2">
									<div className="flex justify-center md:justify-start items-center gap-1 text-yellow-500 text-xl">
										{Array(5).fill().map((_, i) => (
											<FaStar key={i} />
										))}
										<span className="text-black text-base ml-2">5.00 out of 5</span>
									</div>
									<p className="text-gray-500">Based on 2 reviews ✅</p>
								</div>

								{/* Ratings Breakdown */}
								<div className="space-y-2 w-full">
									{[5, 4, 3, 2, 1].map((rating) => (
										<div key={rating} className="flex items-center gap-3">
											<div className="flex gap-1 text-yellow-500">
												{Array(rating).fill().map((_, i) => (
													<FaStar key={i} className="text-sm" />
												))}
											</div>
											<div className="w-full h-2 bg-gray-200 rounded-md overflow-hidden">
												{rating === 5 && <div className="bg-black h-full w-full" />}
											</div>
											<div className="w-4 text-right text-sm">{rating === 5 ? "2" : "0"}</div>
										</div>
									))}
								</div>

								{/* Write Review Button */}
								<div className="flex justify-center md:justify-end">
									<div className="w-52">
										<Cmn_btn
											className="main-btn main-btn2"
											btn_name="Write a Review"
											onClick={() => setShowReviewForm(!showReviewForm)}
										/>
									</div>
								</div>
							</div>


							{/* Review Form */}
							{showReviewForm && (
								<div className="bg-gray-50 p-6 rounded-md shadow-md max-w-2xl mx-auto mt-6">
									<h3 className="text-xl font-semibold mb-4">Submit Your Review</h3>
									<form className="space-y-4">
										<div>
											<label className="block mb-1 font-medium">Name</label>
											<input
												type="text"
												className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
												placeholder="Enter your name"
											/>
										</div>
										<div>
											<label className="block mb-1 font-medium">Email</label>
											<input
												type="email"
												className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
												placeholder="Enter your email"
											/>
										</div>
										<div>
											<label className="block mb-1 font-medium">Your Review</label>
											<textarea
												rows="4"
												className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
												placeholder="Write your review here..."
											/>
										</div>
										<div>
											<label className="block mb-1 font-medium">Rating</label>
											<select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black">
												<option value="">Select rating</option>
												<option value="5">5 - Excellent</option>
												<option value="4">4 - Very Good</option>
												<option value="3">3 - Average</option>
												<option value="2">2 - Poor</option>
												<option value="1">1 - Terrible</option>
											</select>
										</div>
										<div className='sm:w-1/2 pt-3'>
											<Cmn_btn className={"main-btn main-btn2"} btn_name={"Submit Review"} />
										</div>
									</form>
								</div>
							)}
						</div>
					)}
				</div>
				<div className='pb-[46px] md:pb-[80px]'>
					<Cmn_section_title main_title={"Related Products"} title_des={"Unmatched design—superior performance and customer satisfaction in one."} />
					<div className='flex flex-wrap gap-6 justify-center'>
						{RelatedPro.map((product, idx) => (
							<ProductCard key={idx} {...product} />
						))}
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
};

export default ProductSingle;
