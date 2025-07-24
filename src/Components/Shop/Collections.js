import React, { useState } from "react";
import Header from "../HomePage/components/Header";
import "../Styles/shop.css";
import { productsData } from "./Products";
import { ProductCard, ProductListCard } from "../HomePage/components/Product_cards";
import { IoClose } from "react-icons/io5";
import { HiOutlineViewGrid } from "react-icons/hi";
import { LuLayoutList } from "react-icons/lu";

const categories = ["Men", "Women", "Couple"];
const priceRanges = ["Under ₹1000", "₹1000 - ₹2000", "Above ₹2000"];
const colors = ["#141529", "#f1ebdf", "#727c64", "#975c40", "#5d8ea2", "#ac704c", "#c08090", "#94b2ca"];
const sizes = ["S", "M", "L", "XL", "XXL"];
const types = ["T-Shirt", "Dress", "Shirt", "Jeans", "Skirt", "Top", "Jacket", "Short"];

const Collections = () => {
	const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'list'

	const [selectedFilters, setSelectedFilters] = useState({
		category: [],
		price: [],
		color: [],
		size: [],
		type: [],
	});

	const [showMobileFilters, setShowMobileFilters] = useState(false);

	const toggleFilter = (type, value) => {
		setSelectedFilters((prev) => {
			let updated;
			if (type === "color") {
				// Allow only one color at a time
				updated = prev.color.includes(value) ? [] : [value];
				return { ...prev, color: updated };
			}
			const currentValues = prev[type];
			updated = currentValues.includes(value)
				? currentValues.filter((v) => v !== value)
				: [...currentValues, value];
			return { ...prev, [type]: updated };
		});
	};

	const removeFilter = (type, value) => {
		setSelectedFilters((prev) => ({
			...prev,
			[type]: prev[type].filter((v) => v !== value),
		}));
	};

	const clearAllFilters = () => {
		setSelectedFilters({
			category: [],
			price: [],
			color: [],
			size: [],
			type: [],
		});
	};

	const filterProducts = () => {
		return productsData.filter((product) => {
			const matchCategory =
				selectedFilters.category.length === 0 || selectedFilters.category.includes(product.category);
			const matchPrice =
				selectedFilters.price.length === 0 ||
				selectedFilters.price.some((range) => {
					if (range === "Under ₹1000") return product.price < 1000;
					if (range === "₹1000 - ₹2000") return product.price >= 1000 && product.price <= 2000;
					if (range === "Above ₹2000") return product.price > 2000;
					return true;
				});
			const matchColor =
				selectedFilters.color.length === 0 || selectedFilters.color.includes(product.color?.toLowerCase());
			const matchSize =
				selectedFilters.size.length === 0 || selectedFilters.size.includes(product.size?.toUpperCase());
			const matchType =
				selectedFilters.type.length === 0 || selectedFilters.type.includes(product.type);
			return matchCategory && matchPrice && matchColor && matchSize && matchType;
		});
	};

	const renderCheckboxGroup = (label, type, options) => (
		<div className="mb-6">
			<h3 className="text-xl font-semibold text-gray-700 mb-3">{label}</h3>
			{options.map((opt) => (
				<label key={opt} className="flex items-center mb-3 gap-2 cursor-pointer">
					<input
						type="checkbox"
						checked={selectedFilters[type].includes(opt)}
						onChange={() => toggleFilter(type, opt)}
						className="accent-black checkbox-customed"
					/>
					<span className="text-gray-700 text-md">{opt}</span>
				</label>
			))}
		</div>
	);

	return (
		<>
			<Header />
			<div className="shop-container flex flex-col md:flex-row gap-4 md:gap-8 px-4 py-8">

				{/* Mobile Filter Button */}
				<div className="block md:hidden mb-4">
					<button
						className="mobile-filter-btn text-white bg-black px-4 py-2 rounded"
						onClick={() => setShowMobileFilters(true)}
					>
						☰ Filter
					</button>
				</div>

				{/* Sidebar Filters */}
				<div className="filters w-full md:w-1/4 p-6 border rounded-md shadow-md bg-white">
					<h2 className="text-2xl font-bold mb-4 text-gray-800">Filters</h2>

					{/* Active Filters */}
					{Object.values(selectedFilters).some((arr) => arr.length > 0) && (
						<div className="mb-6">
							<h4 className="text-md font-semibold mb-2 text-gray-600">Active Filters:</h4>
							<div className="flex flex-wrap gap-2">
								{Object.entries(selectedFilters).map(([type, values]) =>
									values.map((value) => (
										<div
											key={type + value}
											className="flex items-center gap-1 bg-gray-200 text-sm text-gray-800 px-3 py-1 rounded-full"
										>
											<span>{value}</span>
											<IoClose
												onClick={() => removeFilter(type, value)}
												className="cursor-pointer hover:text-red-600"
											/>
										</div>
									))
								)}
								<button
									onClick={clearAllFilters}
									className="text-sm text-red-600 ml-2 underline"
								>
									Clear All
								</button>
							</div>
						</div>
					)}

					{renderCheckboxGroup("Category", "category", categories)}
					{renderCheckboxGroup("Price", "price", priceRanges)}

					{/* Color Circles */}
					<div className="mb-6">
						<h3 className="text-lg font-semibold text-gray-700 mb-3">Color</h3>
						<div className="flex flex-wrap gap-3">
							{colors.map((clr) => {
								const isSelected = selectedFilters.color.includes(clr);
								return (
									<div
										key={clr}
										title={clr}
										onClick={() => toggleFilter("color", clr)}
										className={`w-6 h-6 rounded-full border-2 cursor-pointer transition duration-200 ${isSelected ? "ring-2 ring-black" : "border-gray-300"}`}
										style={{ backgroundColor: clr }}
									></div>
								);
							})}
						</div>
					</div>
					{renderCheckboxGroup("Size", "size", sizes)}
					{renderCheckboxGroup("Type", "type", types)}
				</div>

				{/* Mobile Filter Slide-In Panel */}
				{showMobileFilters && (
					<div className="mobile-filter-overlay fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
						<div className="mobile-filter-panel w-3/4 sm:w-2/3 md:w-1/2 bg-white p-6">
							<div className="flex justify-between items-center mb-4">
								<h2 className="text-xl font-bold">Filters</h2>
								<IoClose size={24} className="cursor-pointer" onClick={() => setShowMobileFilters(false)} />
							</div>
							{renderCheckboxGroup("Category", "category", categories)}
							{renderCheckboxGroup("Price", "price", priceRanges)}
							<div className="mb-6">
								<h3 className="text-lg font-semibold text-gray-700 mb-3">Color</h3>
								<div className="flex flex-wrap gap-3">
									{colors.map((clr) => {
										const isSelected = selectedFilters.color.includes(clr);
										return (
											<div
												key={clr}
												title={clr}
												onClick={() => toggleFilter("color", clr)}
												className={`w-6 h-6 rounded-full border-2 cursor-pointer transition duration-200 ${isSelected ? "ring-2 ring-black" : "border-gray-300"}`}
												style={{ backgroundColor: clr }}
											></div>
										);
									})}
								</div>
							</div>
							{renderCheckboxGroup("Size", "size", sizes)}
							{renderCheckboxGroup("Type", "type", types)}
						</div>
					</div>
				)}

				{/* Products Grid */}
				<div className="w-full right-side">
					<div className="w-full mb-4 flex items-center justify-between flex-wrap gap-4 px-4">
						<p className="text-gray-700 font-medium">
							There are {filterProducts().length} results in total
						</p>
						<div className="flex items-center gap-2">
							<div className="flex flex-wrap justify-start gap-2 items-center">
								<div className="flex gap-3 mr-5">
									<HiOutlineViewGrid
										size={20}
										className={`cursor-pointer ${viewMode === "grid" ? "text-black" : "text-gray-400"}`}
										onClick={() => setViewMode("grid")}
									/>
									<LuLayoutList
										size={20}
										className={`cursor-pointer ${viewMode === "list" ? "text-black" : "text-gray-400"}`}
										onClick={() => setViewMode("list")}
									/>
								</div>
								<label htmlFor="sort" className="text-gray-600 font-medium">Sort by:</label>
								<select
									id="sort"
									className="border border-gray-300 rounded px-3 py-1 text-sm text-gray-800 focus:outline-none"
								>
									<option value="default">Default</option>
									<option value="price-low">Price: Low to High</option>
									<option value="price-high">Price: High to Low</option>
									<option value="name-asc">Name: A-Z</option>
									<option value="name-desc">Name: Z-A</option>
								</select>
							</div>
						</div>
					</div>
					<div className={` ${viewMode === "grid" ? "products grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6" : "flex flex-col gap-4"}`}>
						{filterProducts().map((product) =>
							viewMode === "grid" ? (
								<ProductCard
									key={product.id}
									image={product.image}
									name={product.name}
									price={product.price}
									oldPrice={product.oldPrice || null}
									colors={product.colors || []}
									isPreOrder={product.isPreOrder || false}
									isOnSale={product.isOnSale || false}
									discount={product.discount || 0}
									isMarquee={false}
								/>
							) : (
								<ProductListCard
									image={product.image}
									name={product.name}
									description={product.description}
									price={product.price}
									oldPrice={product.oldPrice}
									colors={product.colors}
									isPreOrder={product.isPreOrder}
									isOnSale={product.isOnSale}
									discount={product.discount}
								/>
							)
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default Collections;

