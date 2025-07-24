import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import "../../Styles/home-page.css";
import { IoPersonOutline, IoSearchOutline, IoClose } from 'react-icons/io5';
import { LiaAngleDownSolid, LiaShoppingBagSolid } from 'react-icons/lia';
import { FaAngleDown, FaBars } from 'react-icons/fa';

const Header = () => {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [openDropdown, setOpenDropdown] = useState("");
	const [cartOpen, setCartOpen] = useState(false);
	const [searchOpen, setSearchOpen] = useState(false);

	const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
	const closeSidebar = () => {
		setSidebarOpen(false);
		setOpenDropdown("");
	};

	const toggleDropdown = (menu) => {
		setOpenDropdown(prev => (prev === menu ? "" : menu));
	};

	const toggleCart = () => setCartOpen(!cartOpen);
	const toggleSearch = () => setSearchOpen(prev => !prev);

	const navLinks = [
		{ label: "HomePage", path: "/" },
		{
			label: "Pages", menu: "pages", links: [
				{ label: "About Us", path: "/about-us" },
				{ label: "Contacts", path: "/contacts" },
				{ label: "Privacy Policy", path: "/privacy-policy" },
				{ label: "Terms & Conditions", path: "/terms-conditions" },
				{ label: "My Account", path: "/signin" },
				{ label: "FAQs", path: "/faqs" },
				{ label: "404 Error", path: "/404" },
			]
		},
		{
			label: "Shop", menu: "shop", links: [
				{ label: "Collections", path: "/shop/collections" },
				{ label: "Product Single", path: "/shop/product-single" },
				{ label: "Checkout", path: "/shop/checkout" },
			]
		},
		{
			label: "Blog", menu: "blog", links: [
				{ label: "Blog Left Side", path: "/blog/left" },
				{ label: "Blog Right Side", path: "/blog/right" },
				{ label: "Blog Fullwidth", path: "/blog/full" },
			]
		},
		{ label: "Contacts", path: "/contacts" }
	];

	const renderNavItem = (item) => {
		if (!item.menu) {
			return (
				<li key={item.label}>
					<NavLink to={item.path} className={({ isActive }) => isActive ? 'font-semibold text-black' : ''}>
						{item.label}
					</NavLink>
				</li>
			);
		}
		return (
			<li key={item.label} className='relative dropdown flex items-center'>
				<span className='flex items-center cursor-pointer'>{item.label} <LiaAngleDownSolid className='ms-1 text-[14px]' /></span>
				<ul className='dropdown-menu'>
					{item.links.map(link => (
						<li key={link.label}>
							<NavLink to={link.path} className={({ isActive }) => isActive ? 'font-semibold text-black' : ''}>
								{link.label}
							</NavLink>
						</li>
					))}
				</ul>
			</li>
		);
	};
	const renderSidebarItem = (item) => {
		if (!item.menu) {
			return (
				<li key={item.label}>
					<NavLink to={item.path} className={({ isActive }) => isActive ? 'font-semibold text-black' : ''} onClick={closeSidebar}>
						{item.label}
					</NavLink>
				</li>
			);
		}
		return (
			<li key={item.label} className='sidebar-dropdown'>
				<div className='dropdown-toggle flex items-center justify-between' onClick={() => toggleDropdown(item.menu)}>
					{item.label} <FaAngleDown />
				</div>
				{openDropdown === item.menu && (
					<ul className='dropdown-submenu'>
						{item.links.map(link => (
							<li key={link.label}>
								<NavLink to={link.path} className={({ isActive }) => isActive ? 'font-semibold text-black' : ''} onClick={closeSidebar}>
									{link.label}
								</NavLink>
							</li>
						))}
					</ul>
				)}
			</li>
		);
	};

	return (
		<>
			<header className='bg-[#e4e6ea] relative z-50'>
				<div className='p-4 md:max-w-2xl lg:max-w-4xl xl:max-w-7xl w-full mx-auto'>
					<div className='flex justify-between items-center'>
						<div className='logo order-2 md:order-1'>
							<h1>StyleVerse</h1>
						</div>

						<div className='block md:hidden order-1'>
							<FaBars className='text-[22px] cursor-pointer' onClick={toggleSidebar} />
						</div>

						<div className='nav-list hidden md:block order-1 md:order-2'>
							<nav>
								<ul className='flex justify-center items-center gap-4 lg:gap-7 text-[16px] lg:text-[18px]'>
									{navLinks.map(renderNavItem)}
								</ul>
							</nav>
						</div>
						<div className='header-right flex justify-center items-center gap-3 sm:gap-6 text-[22px] order-3'>
							<div className='search cursor-pointer' onClick={toggleSearch}><IoSearchOutline /></div>
							<div className='user-info'><Link to={"/signin"}><IoPersonOutline /></Link></div>
							<div className='cart-item relative cursor-pointer' onClick={toggleCart}>
								<LiaShoppingBagSolid />
								<span className='text-[10px] text-white bg-red-600 rounded-full h-4 w-4 flex justify-center items-center absolute -top-2 -right-2'>2</span>
							</div>
						</div>
					</div>
				</div>
				{/* Search Bar */}
				{searchOpen && (
					<div className="absolute top-full right-[10%] w-[320px] bg-white shadow-lg px-4 py-3 flex items-center gap-3 z-40">
						<input
							type="text"
							placeholder="Search products..."
							className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
						/>
						<IoClose className="text-2xl cursor-pointer" onClick={toggleSearch} />
					</div>
				)}
			</header>

			{/* Sidebar for Mobile */}
			<div className={`sidebar-drawer ${sidebarOpen ? 'open' : ''}`}>
				<div className='sidebar-header flex justify-between items-center p-4 border-b'>
					<h2 className='text-lg font-semibold'>Menu</h2>
					<IoClose className='text-[24px] cursor-pointer' onClick={closeSidebar} />
				</div>
				<ul className='flex flex-col gap-4 p-4 text-lg'>
					{navLinks.map(renderSidebarItem)}
				</ul>
			</div>

			{sidebarOpen && <div className="sidebar-overlay" onClick={closeSidebar}></div>}

			{/* Cart Sidebar */}
			<div className={`cart-sidebar ${cartOpen ? 'open' : ''}`}>
				<div className="cart-header flex justify-between items-center border-b p-4">
					<h3 className="text-lg font-semibold">Your Cart</h3>
					<IoClose className="text-xl cursor-pointer" onClick={toggleCart} />
				</div>
				<div className="cart-content p-4 overflow-y-auto">
					<div className="flex justify-between mb-3">
						<div className='img'>
							<img />
						</div>
						<div>
							<p className="font-medium">T-Shirt</p>
							<p className="text-sm text-gray-500">Qty: 1</p>
						</div>
						<p>$19.99</p>
					</div>
					<div className="flex justify-between mb-3">
						<div>
							<p className="font-medium">Jeans</p>
							<p className="text-sm text-gray-500">Qty: 2</p>
						</div>
						<p>$49.99</p>
					</div>
				</div>
			</div>

			{cartOpen && <div className="cart-overlay" onClick={toggleCart}></div>}
		</>
	);
};

export default Header;