import React from 'react'

export const Cmn_btn = ({ btn_name , className}) => {
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

