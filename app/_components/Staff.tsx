import React from 'react';

const Staff = () => {
    return <section className=" bg-#7E60BF">
	<div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
			<div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
				<a href="" className="group relative flex flex-col overflow-hidden  px-4 pb-4 pt-40 flex-grow">
					<img src="/images/founder.jpg" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
					<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
					<h3 className="z-10 text-2xl font-medium text-black absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Founder</h3>
                    <p className="z-10 text-lg font-medium text-black absolute top-10 left-0 p-4 ">Shaikh Amaan</p>
				</a>
			</div>
			<div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
				<a href="" className="group relative flex flex-col overflow-hidden  px-4 pb-4 pt-40 mb-4">
					<img src="/images/co founder.jpg" alt="" className="absolute inset-0 h-full w-full object-contain group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
					<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
					<h3 className="z-10 text-2xl font-medium text-black absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Co-Founder</h3>
                    <p className="z-10 text-lg font-medium text-black absolute top-10 left-0 p-4 ">Sayed Ayman</p>
				</a>
				<div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
					<a href="" className="group relative flex flex-col overflow-hidden  px-4 pb-4 pt-40">
						<img src="/images/director.jpg" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
						<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
						<h3 className="z-10 text-2xl font-medium text-white absolute top-20 left-0 p-4 xs:text-xl md:text-3xl">Director</h3>
                        <p className="z-10 text-lg font-medium text-white absolute top-28 left-0 p-4 ">Sayyed Saad</p>
					</a>
					<a href="" className="group relative flex flex-col overflow-hidden  px-4 pb-4 pt-40">
						<img src="/images/manager.jpg" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
						<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
						<h3 className="z-10 text-2xl font-medium text-black absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Project Manager</h3>
                        <p className="z-10 text-lg font-medium text-black absolute top-20 left-0 p-4 ">Pathan Faraz</p>
					</a>
				</div>
			</div>
			<div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
				<a href="" className="group relative flex flex-col overflow-hidden  px-4 pb-4 pt-40 flex-grow">
					<img src="/images/marketing.jpg" alt="" className="absolute inset-0 h-full w-full object-contain lg:object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
					<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
					<h3 className="z-10 text-2xl text-black font-medium lg:text-white absolute top-0 lg:top-34 left-0 p-4 xs:text-xl md:text-3xl">Marketing Team</h3>
                    <p className="z-10 text-lg text-black font-medium lg:text-white absolute top-20 lg:top-60 left-0 p-4 ">Khan AbdulBasit</p>
				</a>
			</div>
		</div>
	</div>
</section>
}



export default Staff;