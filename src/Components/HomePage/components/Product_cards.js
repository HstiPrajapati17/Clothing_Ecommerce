import React, { useState } from 'react';
import { FaHeart, FaEye } from 'react-icons/fa';
import { Cmn_btn } from '../../Assets/cmn_components/Cmn_comp';
import "../../Styles/cmn-css.css";
import "../../Styles/home-page.css";
import { MdContentCopy } from 'react-icons/md';
import { AiFillThunderbolt } from 'react-icons/ai';

export const ProductCard = ({
	image,
	name,
	price,
	oldPrice,
	colors,
	isPreOrder,
	isOnSale,
	discount,
	isMarquee,
}) => {
	const [activeImage, setActiveImage] = useState(image);

	return <>

		<div className="product-card relative shadow-lg text-center w-64 h-max overflow-hidden border border-gray-100 transition-all duration-300 rounded">
			{/* BADGES */}
			<div className="absolute top-2 left-2 z-10 flex flex-col gap-1 items-start">
				{isPreOrder && (
					<span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
						PRE-ORDER
					</span>
				)}
				{isOnSale && (
					<span className="bg-red-600 text-white text-xs px-2 py-1 rounded">
						-{discount}%
					</span>
				)}
			</div>
			{/* IMAGE + ICONS */}
			<div className="relative overflow-hidden group">
				<div className='relative h-[352px] w-full'>
					<img
						src={activeImage}
						alt={name}
						className="w-full h-full object-cover absolute top-0 left-0"
					/>
					{isMarquee && (
						<div className="marquee-line absolute bottom-0 w-full flex justify-center items-center overflow-hidden bg-black h-[26px]">
							<div className="marquee-text whitespace-nowrap text-white flex items-center animate-marquee absolute top-[4%] w-[100px]">
								<div className='flex justify-center items-center'>
									<p>Hot Sale 19% off</p> <p><AiFillThunderbolt className="mx-3 text-lime-500" /></p>
									<p>Hot Sale 19% off</p> <p><AiFillThunderbolt className="mx-3 text-lime-500" /></p>
									<p>Hot Sale 19% off</p> <p><AiFillThunderbolt className="mx-3 text-lime-500" /></p>
								</div>
								<div className='flex justify-center items-center'>
								</div>
								<div className='flex justify-center items-center'>
								</div>
							</div>
						</div>
					)}
				</div>
				{/* RIGHT ICONS WITH TEXT */}
				<div className="absolute top-3 right-3 z-20 flex flex-col gap-2 
					opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 
					transition-all duration-500 ease-in-out">

					{/* ICON 1 - Wishlist */}
					<div className="flex items-center justify-end group/icon hover:gap-1 transition-all duration-300">
						<span className="bg-black text-xs px-2 py-1 rounded-[2px] shadow text-white 
							opacity-0 translate-x-2 group-hover/icon:opacity-100 group-hover/icon:translate-x-0 
							transition-all duration-300 ease-in-out">
							Wishlist
						</span>
						<div className="bg-white p-[10px] rounded-full shadow hover:bg-black/80 hover:text-white cursor-pointer transition duration-300">
							<FaHeart size={16} />
						</div>
					</div>

					{/* ICON 2 - Compare */}
					<div className="flex items-center justify-end group/icon hover:gap-1 transition-all duration-300">
						<span className="bg-black text-xs px-2 py-1 rounded-[2px] shadow text-white 
							opacity-0 translate-x-2 group-hover/icon:opacity-100 group-hover/icon:translate-x-0 
							transition-all duration-300 ease-in-out">
							Compare
						</span>
						<div className="bg-white p-[10px] rounded-full shadow hover:bg-black/80 hover:text-white cursor-pointer transition duration-300">
							<MdContentCopy size={16} />
						</div>
					</div>

					{/* ICON 3 - Quick View */}
					<div className="flex items-center justify-end group/icon hover:gap-1 transition-all duration-300">
						<span className="bg-black text-xs px-2 py-1 rounded-[2px] shadow text-white 
							opacity-0 translate-x-2 group-hover/icon:opacity-100 group-hover/icon:translate-x-0 
							transition-all duration-300 ease-in-out">
							Quick View
						</span>
						<div className="bg-white p-[10px] rounded-full shadow hover:bg-black/80 hover:text-white cursor-pointer transition duration-300">
							<FaEye size={16} />
						</div>
					</div>
				</div>

				{/* SHOP NOW BUTTON */}
				<div className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 
					opacity-0 group-hover:bottom-4 group-hover:opacity-100 
					transition-all duration-500 ease-in-out">
					<Cmn_btn className={"main-btn"} btn_name={"Add to Cart"} />
				</div>
			</div>

			{/* TEXT */}
			<div className="p-3 text-left">
				<div className="mt-2 text-[18px] font-medium">{name}</div>
				<div className="text-yellow-500 mt-1 text-sm">★★★★★</div>

				<div className="mt-1 text-base">
					<span className={oldPrice ? 'text-red-600 font-semibold' : 'font-semibold'}>
						${price}
					</span>
					{oldPrice && (
						<span className="text-gray-400 line-through ml-2">${oldPrice}</span>
					)}
				</div>

				{/* COLORS */}
				<div className="mt-2 flex justify-center gap-2">
					{colors.map((color, index) => (
						<div
							key={index}
							onClick={() => setActiveImage(color.image)}
							className="p-[2px] rounded-full border-2 border-gray-300 hover:border-black/60 transition duration-200"
						>
							<div
								className="w-4 h-4 rounded-full cursor-pointer hover:scale-110 transition"
								style={{ backgroundColor: color.colorCode }}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	</>
};

export const ProductCard2 = ({
	image,
	hoverImage,
	name,
	price,
	oldPrice,
	isPreOrder,
	isOnSale,
	discount,
	isMarquee,
}) => {
	const [activeImage, setActiveImage] = useState(image);
	return <>
		<div className="product-card relative shadow-lg text-center w-64 overflow-hidden border border-gray-100 transition-all duration-300 rounded">
			{/* BADGES */}
			<div className="absolute top-2 left-2 z-10 flex flex-col gap-1 items-start">
				{isPreOrder && (
					<span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
						PRE-ORDER
					</span>
				)}
				{isOnSale && (
					<span className="bg-red-600 text-white text-xs px-2 py-1 rounded">
						-{discount}%
					</span>
				)}
			</div>
			{/* IMAGE + ICONS */}
			<div className="relative overflow-hidden group">
				<div className='relative h-[352px] w-full'>
					{/* Default image */}
					<img
						src={activeImage}
						alt={name}
						className="w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-300 group-hover:opacity-0"
					/>

					{/* Hover image */}
					<img
						src={hoverImage || activeImage} // fallback to main image if hoverImage is not passed
						alt={name}
						className="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
					/>
					{isMarquee && (
						<div className="marquee-line absolute bottom-0 w-full flex justify-center items-center overflow-hidden bg-black h-[26px]">
							<div className="marquee-text whitespace-nowrap text-white flex items-center animate-marquee absolute top-[4%] w-[100px]">
								<div className='flex justify-center items-center'>
									<p>Hot Sale 19% off</p> <p><AiFillThunderbolt className="mx-3 text-lime-500" /></p>
									<p>Hot Sale 19% off</p> <p><AiFillThunderbolt className="mx-3 text-lime-500" /></p>
									<p>Hot Sale 19% off</p> <p><AiFillThunderbolt className="mx-3 text-lime-500" /></p>
								</div>
								<div className='flex justify-center items-center'>
								</div>
								<div className='flex justify-center items-center'>
								</div>
							</div>
						</div>
					)}
				</div>
				{/* RIGHT ICONS WITH TEXT */}
				<div className="absolute top-3 right-3 z-20 flex flex-col gap-2 
					opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 
					transition-all duration-500 ease-in-out">

					{/* ICON 1 - Wishlist */}
					<div className="flex items-center justify-end group/icon hover:gap-1 transition-all duration-300">
						<span className="bg-black text-xs px-2 py-1 rounded-[2px] shadow text-white 
							opacity-0 translate-x-2 group-hover/icon:opacity-100 group-hover/icon:translate-x-0 
							transition-all duration-300 ease-in-out">
							Wishlist
						</span>
						<div className="bg-white p-[10px] rounded-full shadow hover:bg-black/80 hover:text-white cursor-pointer transition duration-300">
							<FaHeart size={16} />
						</div>
					</div>

					{/* ICON 2 - Compare */}
					<div className="flex items-center justify-end group/icon hover:gap-1 transition-all duration-300">
						<span className="bg-black text-xs px-2 py-1 rounded-[2px] shadow text-white 
							opacity-0 translate-x-2 group-hover/icon:opacity-100 group-hover/icon:translate-x-0 
							transition-all duration-300 ease-in-out">
							Compare
						</span>
						<div className="bg-white p-[10px] rounded-full shadow hover:bg-black/80 hover:text-white cursor-pointer transition duration-300">
							<MdContentCopy size={16} />
						</div>
					</div>

					{/* ICON 3 - Quick View */}
					<div className="flex items-center justify-end group/icon hover:gap-1 transition-all duration-300">
						<span className="bg-black text-xs px-2 py-1 rounded-[2px] shadow text-white 
							opacity-0 translate-x-2 group-hover/icon:opacity-100 group-hover/icon:translate-x-0 
							transition-all duration-300 ease-in-out">
							Quick View
						</span>
						<div className="bg-white p-[10px] rounded-full shadow hover:bg-black/80 hover:text-white cursor-pointer transition duration-300">
							<FaEye size={16} />
						</div>
					</div>
				</div>

				{/* SHOP NOW BUTTON */}
				<div className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 
					opacity-0 group-hover:bottom-4 group-hover:opacity-100 
					transition-all duration-500 ease-in-out">
					<Cmn_btn className={"main-btn"} btn_name={"Add to Cart"} />
				</div>
			</div>

			{/* TEXT */}
			<div className="p-3 text-left">
				<div className="mt-2 text-[18px] font-medium">{name}</div>
				<div className="text-yellow-500 mt-1 text-sm">★★★★★</div>

				<div className="mt-1 text-base">
					<span className={oldPrice ? 'text-red-600 font-semibold' : 'font-semibold'}>
						${price}
					</span>
					{oldPrice && (
						<span className="text-gray-400 line-through ml-2">${oldPrice}</span>
					)}
				</div>
			</div>
		</div>
	</>
}

export const ProductListCard = ({
	image,
	name,
	description,
	price,
	oldPrice,
	colors = [],
	isPreOrder,
	isOnSale,
	discount,
}) => {
	const [activeImage, setActiveImage] = useState(image);

	return <>
		<div className="product-list-card w-full flex flex-col sm:flex-row gap-4 border border-gray-100 hover:shadow-xl rounded-lg transition-all duration-300 ease-in-out p-4 bg-white">
			{/* PRODUCT IMAGE & ICONS */}
			<div className="relative w-full sm:w-1/4 h-[300px] group overflow-hidden rounded-lg">
				<img
					src={activeImage}
					alt={name}
					className="w-full h-full object-cover rounded-lg"
				/>

				{/* BADGES */}
				<div className="absolute top-2 left-2 z-10 flex flex-col gap-1 items-start">
					{isPreOrder && (
						<span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
							PRE-ORDER
						</span>
					)}
					{isOnSale && (
						<span className="bg-red-600 text-white text-xs px-2 py-1 rounded">
							-{discount}%
						</span>
					)}
				</div>

				{/* RIGHT ICONS */}
				<div className="absolute top-3 right-3 z-20 flex flex-col gap-2 
			opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 
			transition-all duration-500 ease-in-out">

					{/* Wishlist */}
					<div className="flex items-center justify-end group/icon hover:gap-1 transition-all duration-300">
						<span className="bg-black text-xs px-2 py-1 rounded-[2px] shadow text-white 
					opacity-0 translate-x-2 group-hover/icon:opacity-100 group-hover/icon:translate-x-0 
					transition-all duration-300 ease-in-out">
							Wishlist
						</span>
						<div className="bg-white p-[10px] rounded-full shadow hover:bg-black/80 hover:text-white cursor-pointer transition duration-300">
							<FaHeart size={16} />
						</div>
					</div>

					{/* Compare */}
					<div className="flex items-center justify-end group/icon hover:gap-1 transition-all duration-300">
						<span className="bg-black text-xs px-2 py-1 rounded-[2px] shadow text-white 
					opacity-0 translate-x-2 group-hover/icon:opacity-100 group-hover/icon:translate-x-0 
					transition-all duration-300 ease-in-out">
							Compare
						</span>
						<div className="bg-white p-[10px] rounded-full shadow hover:bg-black/80 hover:text-white cursor-pointer transition duration-300">
							<MdContentCopy size={16} />
						</div>
					</div>

					{/* Quick View */}
					<div className="flex items-center justify-end group/icon hover:gap-1 transition-all duration-300">
						<span className="bg-black text-xs px-2 py-1 rounded-[2px] shadow text-white 
					opacity-0 translate-x-2 group-hover/icon:opacity-100 group-hover/icon:translate-x-0 
					transition-all duration-300 ease-in-out">
							Quick View
						</span>
						<div className="bg-white p-[10px] rounded-full shadow hover:bg-black/80 hover:text-white cursor-pointer transition duration-300">
							<FaEye size={16} />
						</div>
					</div>
				</div>
			</div>

			{/* PRODUCT DETAILS */}
			<div className="flex-1 flex flex-col justify-between gap-4">
				<div>
					<h3 className="text-[24px] font-semibold">{name}</h3>
					<p className='text-[16px] text-gray-600'>{description}</p>
					<div className="text-yellow-500 text-lg">★★★★★</div>

					<div className="mt-1 text-lg">
						<span className={oldPrice ? 'text-red-600 font-semibold' : 'font-semibold'}>
							${price}
						</span>
						{oldPrice && (
							<span className="text-gray-400 line-through ml-2">${oldPrice}</span>
						)}
					</div>

					{/* COLORS */}
					<div className="mt-2 flex gap-2">
						{colors.map((color, index) => (
							<div
								key={index}
								onClick={() => setActiveImage(color.image)}
								className="p-[2px] rounded-full border-2 border-gray-300 hover:border-black/60 transition duration-200"
							>
								<div
									className="w-4 h-4 rounded-full cursor-pointer hover:scale-110 transition"
									style={{ backgroundColor: color.colorCode }}
								/>
							</div>
						))}
					</div>
				</div>

				{/* ADD TO CART BUTTON */}
				<div>
					<Cmn_btn className={"main-btn main-btn2"} btn_name={"Add to Cart"} />
				</div>
			</div>
		</div>

	</>
};