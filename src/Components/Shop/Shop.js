import React, { useState } from "react";
import Header from "../HomePage/components/Header";
import "../Styles/shop.css";
import { productsData } from "./Products";
import { ProductCard } from "../HomePage/components/Product_cards";
import { IoClose } from "react-icons/io5";

const categories = ["Men", "Women", "Couple"];
const priceRanges = ["Under ₹1000", "₹1000 - ₹2000", "Above ₹2000"];
const colors = ["#000000", "#ffffff", "#ff0000", "#0000ff", "#008000"];
const sizes = ["S", "M", "L", "XL", "XXL"];
const types = ["T-Shirt", "Dress", "Shirt", "Jeans", "Skirt", "Hoodie", "Jacket"];

const ShopPage = () => {
	const [selectedFilters, setSelectedFilters] = useState({
		category: [],
		price: [],
		color: [],
		size: [],
		type: [],
	});

	const toggleFilter = (type, value) => {
		setSelectedFilters((prev) => {
			const currentValues = prev[type];
			const updated = currentValues.includes(value)
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
				selectedFilters.type.length === 0 || selectedFilters.type.includes(product.type?.toLowerCase());
			return matchCategory && matchPrice && matchColor && matchSize && matchType;
		});
	};

	const renderCheckboxGroup = (label, type, options) => (
		<div className="mb-6">
			<h3 className="text-lg font-semibold text-gray-700 mb-3">{label}</h3>
			{options.map((opt) => (
				<label key={opt} className="flex items-center mb-2 gap-2 cursor-pointer">
					<input
						type="checkbox"
						checked={selectedFilters[type].includes(opt)}
						onChange={() => toggleFilter(type, opt)}
						className="accent-black"
					/>
					<span className="text-gray-700">{opt}</span>
				</label>
			))}
		</div>
	);

	return (
		<>
			<Header />
			<div className="shop-container flex flex-col lg:flex-row gap-8 px-4 py-8">
				{/* Filters */}
				<div className="filters w-full lg:w-1/4 p-6">
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

					{/* Filter Groups */}
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
										className={`w-6 h-6 rounded-full border-2 cursor-pointer transition duration-200 ${
											isSelected ? "ring-2 ring-black" : "border-gray-300"
										}`}
										style={{ backgroundColor: clr }}
									></div>
								);
							})}
						</div>
					</div>

					{renderCheckboxGroup("Size", "size", sizes)}
					{renderCheckboxGroup("Type", "type", types)}
				</div>

				{/* Products */}
				<div className="products w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
					{filterProducts().map((product) => (
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
					))}
				</div>
			</div>
		</>
	);
};

export default ShopPage;
