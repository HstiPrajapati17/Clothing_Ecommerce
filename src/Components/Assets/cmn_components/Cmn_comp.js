import React from 'react'

export const Cmn_btn = ({ btn_name, className }) => {
	return <>
		<button type="submit" className={className} >{btn_name}</button>
	</>
}
export const Cmn_title_btn = ({ btn_title, className }) => {
	return <>
		<button type='submit' className={className} >
			{btn_title}
		</button>
	</>
}
export const Cmn_section_title = ({ main_title, title_des }) => {
	return <>
		<div className='text-center'>
			<h2 className="section-title">{main_title}</h2>
			<p className="section-subtitle">
				{title_des}
			</p>
		</div>
	</>
}
