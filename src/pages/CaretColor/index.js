import React from "react";

import PanelSection from "components/PanelSection";

export default function CaretColor() {
	return (
		<div className='mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12'>
			<div className='flex items-center'>
				<h1 className='text-3xl font-bold'>Caret Color</h1>
			</div>
			<PanelSection title='Setting the caret color'>
				<div className='w-full flex items-center justify-center'>
					<textarea
						className='text-sm p-2 w-80 ring-1 ring-slate-900 ring-opacity-10 shadow-sm rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 caret-pink-500 dark:bg-slate-800'
						rows={2}
						defaultValue={""}
					/>
				</div>
			</PanelSection>
		</div>
	);
}
