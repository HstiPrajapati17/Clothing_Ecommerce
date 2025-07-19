import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "../../Styles/home-page.css";
import { IoPersonOutline, IoSearchOutline, IoClose } from 'react-icons/io5';
import { LiaShoppingBagSolid } from 'react-icons/lia';
import { FaAngleDown, FaBars } from 'react-icons/fa';

const Header = () => {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [openDropdown, setOpenDropdown] = useState("");

	const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
	const closeSidebar = () => {
		setSidebarOpen(false);
		setOpenDropdown("");
	};

	const toggleDropdown = (menu) => {
		setOpenDropdown(prev => (prev === menu ? "" : menu));
	};

	const navLinks = [
		{ label: "HomePage", path: "/home" },
		{
			label: "Pages", menu: "pages", links: [
				{ label: "About Us", path: "/about" },
				{ label: "Contacts", path: "/contacts" },
				{ label: "Privacy Policy", path: "/privacy-policy" },
				{ label: "Terms & Conditions", path: "/terms-conditions" },
				{ label: "My Account", path: "/my-account" },
				{ label: "FAQ", path: "/faq" },
				{ label: "404 Error", path: "/404" },
			]
		},
		{ label: "Shop", path: "/shop" },

		// {
		// 	label: "Shop", menu: "shop", links: [
		// 		{ label: "Women", path: "/shop/women" },
		// 		{ label: "Men", path: "/shop/men" },
		// 		{ label: "Couple", path: "/shop/couple" },
		// 	]
		// },
		{
			label: "Blog", menu: "blog", links: [
				{ label: "Blog Left Side", path: "/blog/left" },
				{ label: "Blog Right Side", path: "/blog/right" },
				{ label: "Blog Full Side", path: "/blog/full" },
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
				<span className='flex items-center cursor-pointer'>{item.label} <FaAngleDown className='ms-1' /></span>
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
			<header className='bg-[#e4e6ea]'>
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
							<div className='search'><IoSearchOutline /></div>
							<div className='user-info'><IoPersonOutline /></div>
							<div className='cart-item relative'>
								<LiaShoppingBagSolid />
								<span className='text-[10px] text-white bg-red-600 rounded-full h-4 w-4 flex justify-center items-center absolute -top-2 -right-2'>2</span>
							</div>
						</div>
					</div>
				</div>
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
		</>
	);
};

export default Header;
