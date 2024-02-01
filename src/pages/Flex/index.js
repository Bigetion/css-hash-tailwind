import React from "react";

import stripes from "utils/stripes";

import PanelSection from "components/PanelSection";

export default function Flex() {
	return (
		<div className='mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12'>
			<div className='flex items-center'>
				<h1 className='text-3xl'>Flex</h1>
			</div>
			<PanelSection title='Initial'>
				<div className={`xmt-2 flex gap-4 text-white text-sm font-bold font-mono leading-6 ${stripes.blue} rounded-lg`}>
					<div className='p-4 flex-none w-14 h-14 rounded-lg flex items-center justify-center bg-blue-300 dark:bg-blue-800 dark:text-blue-500'>
						01
					</div>
					<div className='p-4 flex-initial w-24 sm:w-64 rounded-lg flex items-center justify-center bg-blue-500 shadow-lg'>
						02
					</div>
					<div className='p-4 flex-initial w-14 sm:w-32 rounded-lg flex items-center justify-center bg-blue-500 shadow-lg'>
						03
					</div>
				</div>
			</PanelSection>
			<PanelSection title='Flex 1'>
				<div className={`xmt-2 flex gap-4 text-white text-sm font-bold font-mono leading-6 ${stripes.pink} rounded-lg`}>
					<div className='p-4 flex-none w-14 h-14 rounded-lg flex items-center justify-center bg-pink-300 dark:bg-pink-800 dark:text-pink-400'>
						01
					</div>
					<div className='p-4 flex-1 w-64 rounded-lg flex items-center justify-center bg-pink-500 shadow-lg'>
						02
					</div>
					<div className='p-4 flex-1 w-32 rounded-lg flex items-center justify-center bg-pink-500 shadow-lg'>
						03
					</div>
				</div>
			</PanelSection>
			<PanelSection title='Auto'>
				<div className={`xmt-2 flex gap-4 text-white text-sm font-bold font-mono leading-6 ${stripes.violet} rounded-lg`}>
					<div className='p-4 flex-none w-14 h-14 rounded-lg flex items-center justify-center bg-violet-300 dark:bg-violet-800 dark:text-violet-400'>
						01
					</div>
					<div className='p-4 flex-auto w-64 rounded-lg flex items-center justify-center bg-violet-500 shadow-lg'>
						02
					</div>
					<div className='p-4 flex-auto w-32 rounded-lg flex items-center justify-center bg-violet-500 shadow-lg'>
						03
					</div>
				</div>
			</PanelSection>
			<PanelSection title='None'>
				<div class={`flex gap-4 text-white text-sm font-bold font-mono leading-6 ${stripes.indigo} rounded-lg`}>
					<div class='flex-none last:pr-8 sm:last:pr-0'>
						<div class='p-4 w-14 h-14 rounded-lg flex items-center justify-center bg-indigo-300 dark:bg-indigo-800 dark:text-indigo-400'>
							01
						</div>
					</div>
					<div class='flex-none last:pr-8 sm:last:pr-0'>
						<div class='p-4 w-72 rounded-lg flex items-center justify-center bg-indigo-500 shadow-lg'>
							02
						</div>
					</div>
					<div class='flex-1 last:pr-8 sm:last:pr-0'>
						<div class='p-4 rounded-lg flex items-center justify-center bg-indigo-300 dark:bg-indigo-800 dark:text-indigo-400'>
							03
						</div>
					</div>
				</div>
			</PanelSection>
		</div>
	);
}
