import React from "react";

import PanelSection from "components/PanelSection";

export default function Order() {
	return (
		<div className='mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12'>
			<div className='flex items-center'>
				<h1 className='text-3xl'>Order</h1>
			</div>
			<PanelSection title='Ordering flex and grid items'>
				<div className='flex justify-between font-mono text-white text-sm font-bold leading-6'>
					<div className='w-14 h-14 rounded-lg flex items-center justify-center bg-sky-500 shadow-lg order-last'>
						01
					</div>
					<div className='w-14 h-14 rounded-lg flex items-center justify-center bg-sky-500 shadow-lg'>
						02
					</div>
					<div className='w-14 h-14 rounded-lg flex items-center justify-center bg-sky-500 shadow-lg'>
						03
					</div>
				</div>
			</PanelSection>
		</div>
	);
}
