import React, { useState } from 'react';
import Header from '../../HomePage/components/Header';
import { FiMinus, FiPlus } from 'react-icons/fi';
import Footer from '../../HomePage/components/Footer';

const faqsData = [
  {
    question: 'What is StyleVerse?',
    answer: 'StyleVerse is a forward-thinking digital solutions company that specializes in creating high-quality web templates, themes, and UI kits for developers, designers, and businesses of all sizes. We focus on building products that are visually stunning, performance-optimized, and easy to integrate into any project. Whether you’re building a startup landing page, a business website, or an eCommerce platform, StyleVerse offers flexible design assets that help bring your ideas to life faster and more efficiently.'
  },
  {
    question: 'Can I use your templates for commercial projects?',
    answer: 'Yes, all of our templates and UI kits are licensed for use in both personal and commercial projects. You are free to use them in client work, corporate websites, and business platforms without any additional fees. However, redistribution or resale of the files in original or modified form is strictly prohibited. We recommend reviewing our full license agreement to ensure compliance, especially for high-volume or SaaS-based usage.'
  },
  {
    question: 'Do you offer customer support?',
    answer: 'Absolutely. We believe in supporting our users every step of the way. Our premium users get access to priority customer support via email, live chat, and support tickets. We typically respond within 24 hours on business days. Whether you’re facing an issue with installation, customization, or updates, our experienced team is ready to help you resolve it quickly and effectively.'
  },
  {
    question: 'How do I get updates on new themes?',
    answer: 'To stay informed about our latest themes, templates, and UI releases, you can subscribe to our email newsletter or follow us on our official social media channels. We regularly release new collections, seasonal promotions, and feature enhancements. Our newsletter also includes tips for developers and designers, case studies, and updates on web trends to help you stay ahead of the curve.'
  },
  {
    question: 'What if I need a custom design?',
    answer: 'In addition to our ready-made templates, StyleVerse offers custom web design and development services tailored to your specific brand and business needs. Our team works closely with you to understand your goals and design preferences. From wireframes to deployment, we handle everything in-house and ensure your final product is modern, scalable, and uniquely yours. You can contact us to schedule a discovery call and get a custom quote.'
  },
  {
    question: 'Why Lorem ipsum dolor sit amet?',
    answer: 'The phrase "Lorem ipsum dolor sit amet" is a placeholder text commonly used in the design and publishing industries to demonstrate the visual form of a document or a typeface without relying on meaningful content. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Using this type of filler text helps designers focus on layout and typography before the final content is available.'
  },
  {
    question: 'How can I request a refund?',
    answer: 'We stand behind the quality of our products and want you to be fully satisfied. If for any reason you are not happy with your purchase, you may request a refund within 14 days of the purchase date. Simply contact our support team with your order number and a brief explanation of the issue. Please note that refunds are granted on a case-by-case basis and only if you haven’t downloaded or heavily used the product. All refund policies are subject to our terms and conditions.'
  },
  {
    question: 'Is there a trial version available?',
    answer: 'Currently, we do not offer downloadable trial versions of our premium templates. However, we provide live demos and comprehensive documentation for every product, giving you a clear understanding of the layout, functionality, and customization options before you buy. If you still have questions, our support team is available to walk you through features and help you decide if a specific product meets your needs.'
  }
];

const FAQItem = ({ faq, index, openIndex, setOpenIndex }) => {
	const isOpen = openIndex === index;

	return (
		<div className="border-b border-gray-200 p-4 bg-[#ecedf0]">
			<button
				className="w-full flex justify-between items-center text-left text-lg font-medium focus:outline-none"
				onClick={() => setOpenIndex(isOpen ? null : index)}
			>
				{faq.question}
				<span className="ml-4 text-xl">{isOpen ? <FiMinus /> : <FiPlus />}</span>
			</button>
			{isOpen && (
				<div className="mt-2 text-gray-700 text-base transition-all duration-300 ease-in-out">
					{faq.answer}
				</div>
			)}
		</div>
	);
};

const Faqs = () => {
	const [openIndex, setOpenIndex] = useState(null);

	return (
		<div className="font-body text-dark bg-white min-h-screen">
			<Header />

			{/* Hero */}
			<section className="h-[200px] sm:h-[300px] bg-cover bg-center flex items-center justify-center text-white text-center title-hero-bg">
				<div className="bg-black/20 w-full h-full flex items-center justify-center">
					<h1 className="text-3xl sm:text-5xl font-semibold drop-shadow-lg">Frequently Asked Questions</h1>
				</div>
			</section>

			{/* FAQ Content */}
			<div className="max-w-6xl mx-auto px-4 py-12">
				<h2 className="text-2xl font-semibold mb-6">Got Questions? We’ve Got Answers!</h2>
				<div className="space-y-4">
					{faqsData.map((faq, index) => (
						<FAQItem
							key={index}
							index={index}
							faq={faq}
							openIndex={openIndex}
							setOpenIndex={setOpenIndex}
						/>
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Faqs;
