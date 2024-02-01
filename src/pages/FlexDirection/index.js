import React from "react";

import PanelSection from "components/PanelSection";

export default function FlexDirection() {
	return (
		<div className='mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12'>
			<div className='flex items-center'>
				<h1 className='text-3xl'>Flex Direction</h1>
			</div>
			<PanelSection title='Row'>
				<div className='flex flex-row gap-x-4 font-mono text-white text-sm font-bold leading-6'>
					<div className='w-14 h-14 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg'>
						01
					</div>
					<div className='w-14 h-14 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg'>
						02
					</div>
					<div className='w-14 h-14 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg'>
						03
					</div>
				</div>
			</PanelSection>
			<PanelSection title='Row Reverse'>
				<div className='flex flex-row-reverse space-x-reverse gap-x-4 font-mono text-white text-sm font-bold leading-6'>
					<div className='w-14 h-14 rounded-lg flex items-center justify-center bg-blue-500 shadow-lg'>
						01
					</div>
					<div className='w-14 h-14 rounded-lg flex items-center justify-center bg-blue-500 shadow-lg'>
						02
					</div>
					<div className='w-14 h-14 rounded-lg flex items-center justify-center bg-blue-500 shadow-lg'>
						03
					</div>
				</div>
			</PanelSection>
			<PanelSection title='Column'>
				<div className='flex flex-col mx-auto space-y-4 font-mono text-white text-sm font-bold leading-6 max-w-xs'>
					<div className='p-4 rounded-lg flex items-center justify-center bg-indigo-500 shadow-lg'>
						01
					</div>
					<div className='p-4 rounded-lg flex items-center justify-center bg-indigo-500 shadow-lg'>
						02
					</div>
					<div className='p-4 rounded-lg flex items-center justify-center bg-indigo-500 shadow-lg'>
						03
					</div>
				</div>
			</PanelSection>
			<PanelSection title='Column Reverse'>
				<div className='flex flex-col-reverse mx-auto space-y-reverse space-y-4 font-mono text-white text-sm font-bold leading-6 max-w-xs'>
					<div className='p-4 rounded-lg flex items-center justify-center bg-purple-500 shadow-lg'>
						01
					</div>
					<div className='p-4 rounded-lg flex items-center justify-center bg-purple-500 shadow-lg'>
						02
					</div>
					<div className='p-4 rounded-lg flex items-center justify-center bg-purple-500 shadow-lg'>
						03
					</div>
				</div>
			</PanelSection>
		</div>
	);
}
