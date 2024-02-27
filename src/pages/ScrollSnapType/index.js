import React from "react";

import PanelSection from "components/PanelSection";

export default function ScrollSnapType() {
	return (
		<div className='mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12'>
			<div className='flex items-center'>
				<h1 className='text-3xl font-bold'>Scroll Snap Type</h1>
			</div>
			<PanelSection title='Horizontal scroll snapping' paddingless>
				<div
					className='flex items-end justify-start pt-10 mb-6'
					style={{ marginLeft: "50%" }}
				>
					<div className='ml-2 rounded font-mono text-xs leading-6 px-1.5 ring-1 ring-inset bg-indigo-50 text-indigo-600 ring-indigo-600'>
						snap point
					</div>
					<div className='absolute top-0 bottom-0 left-1/2 border-l border-indigo-500' />
				</div>

				<div className='relative w-full flex gap-6 snap-x overflow-x-auto pb-14'>
					<div className='snap-center shrink-0'>
						<div className='shrink-0 w-4 sm:w-48' />
					</div>
					<div className='snap-center shrink-0 first:pl-8 last:pr-8'>
						<img
							alt=''
							className='shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white'
							src='https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80'
						/>
					</div>
					<div className='snap-center shrink-0 first:pl-8 last:pr-8'>
						<img
							alt=''
							className='shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white'
							src='https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80'
						/>
					</div>
					<div className='snap-center shrink-0 first:pl-8 last:pr-8'>
						<img
							alt=''
							className='shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white'
							src='https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80'
						/>
					</div>
					<div className='snap-center shrink-0 first:pl-8 last:pr-8'>
						<img
							alt=''
							className='shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white'
							src='https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80'
						/>
					</div>
					<div className='snap-center shrink-0 first:pl-8 last:pr-8'>
						<img
							alt=''
							className='shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white'
							src='https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80'
						/>
					</div>
					<div className='snap-center shrink-0'>
						<div className='shrink-0 w-4 sm:w-48' />
					</div>
				</div>
			</PanelSection>
			<PanelSection title='Mandatory scroll snapping' paddingless>
				<div
					className='flex items-end justify-start pt-10 mb-6'
					style={{ marginLeft: "50%" }}
				>
					<div className='ml-2 rounded font-mono text-xs leading-6 px-1.5 ring-1 ring-inset bg-indigo-50 text-indigo-600 ring-indigo-600'>
						snap point
					</div>
					<div className='absolute top-0 bottom-0 left-1/2 border-l border-indigo-500' />
				</div>

				<div className='relative w-full flex gap-6 snap-x snap-mandatory overflow-x-auto pb-14'>
					<div className='snap-center shrink-0'>
						<div className='shrink-0 w-4 sm:w-48' />
					</div>
					<div className='snap-center shrink-0 first:pl-8 last:pr-8'>
						<img
							alt=''
							className='shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white'
							src='https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80'
						/>
					</div>
					<div className='snap-center shrink-0 first:pl-8 last:pr-8'>
						<img
							alt=''
							className='shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white'
							src='https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80'
						/>
					</div>
					<div className='snap-center shrink-0 first:pl-8 last:pr-8'>
						<img
							alt=''
							className='shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white'
							src='https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80'
						/>
					</div>
					<div className='snap-center shrink-0 first:pl-8 last:pr-8'>
						<img
							alt=''
							className='shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white'
							src='https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80'
						/>
					</div>
					<div className='snap-center shrink-0 first:pl-8 last:pr-8'>
						<img
							alt=''
							className='shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white'
							src='https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80'
						/>
					</div>
					<div className='snap-center shrink-0'>
						<div className='shrink-0 w-4 sm:w-48' />
					</div>
				</div>
			</PanelSection>
			<PanelSection title='Proximity scroll snapping' paddingless>
				<div
					className='flex items-end justify-start pt-10 mb-6'
					style={{ marginLeft: "50%" }}
				>
					<div className='ml-2 rounded font-mono text-xs leading-6 px-1.5 ring-1 ring-inset bg-indigo-50 text-indigo-600 ring-indigo-600'>
						snap point
					</div>
					<div className='absolute top-0 bottom-0 left-1/2 border-l border-indigo-500' />
				</div>

				<div className='relative w-full flex gap-6 snap-x snap-proximity overflow-x-auto pb-14'>
					<div className='snap-center shrink-0'>
						<div className='shrink-0 w-4 sm:w-48' />
					</div>
					<div className='snap-center shrink-0 first:pl-8 last:pr-8'>
						<img
							alt=''
							className='shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white'
							src='https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80'
						/>
					</div>
					<div className='snap-center shrink-0 first:pl-8 last:pr-8'>
						<img
							alt=''
							className='shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white'
							src='https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80'
						/>
					</div>
					<div className='snap-center shrink-0 first:pl-8 last:pr-8'>
						<img
							alt=''
							className='shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white'
							src='https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80'
						/>
					</div>
					<div className='snap-center shrink-0 first:pl-8 last:pr-8'>
						<img
							alt=''
							className='shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white'
							src='https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80'
						/>
					</div>
					<div className='snap-center shrink-0'>
						<div className='shrink-0 w-4 sm:w-48' />
					</div>
				</div>
			</PanelSection>
		</div>
	);
}
