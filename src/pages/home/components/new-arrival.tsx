const NewArrival = () => {

	const feats = [
		{
			id: 1,
			icon: "/icons/truck.svg",
			title: "FREE AND FAST DELIVERY",
			desc: "Free delivery for all orders over $140"
		},
		{
			id: 2,
			icon: "/icons/customer-support.svg",
			title: "24/7 CUSTOMER SERVICE",
			desc: "Friendly 24/7 customer support"
		},
		{
			id: 3,
			icon: "/icons/safety.svg",
			title: "MONEY BACK GUARANTEE",
			desc: "We reurn money within 30 days"
		},

	]

	return (
		<div className="container">
			{/* Title */}

			<div className="flex gap-4 items-center mb-3">
				<span className="w-5 h-10 inline-block rounded-md bg-red-500" />
				<p className="text-xl font-medium text-red-500">Featured</p>
			</div>
			<h2 className="text-4xl font-medium my-6 mb-12">New Arrival</h2>
			{/* Cards */}

			<div style={{
				display: "grid",
				gridTemplateRows: "1fr 1fr",
				gridTemplateColumns: "1fr 1fr",
			}} className='h-[600px] gap-5 mb-8'>
				<div className='bg-black flex relative justify-end p-12 pb-0 row-span-2'>
					<img className="relative opacity-70" src="/images/products/product-4.png" alt="Playstation 5 image" />

					<div className="card-text text-xl grid gap-3  w-[350px] text-white absolute left-8 bottom-8">
						<p className="text-4xl  font-medium">Playstation 5</p>
						<p>Black and White version of the PS5 coming out on sale.</p>
						<button className="underline text-start">Shop Now</button>
					</div>
				</div>
				<div className='bg-black relative flex justify-end'>


					<div className="card-text text-xl absolute left-8 bottom-8 w-[350px] z-30 grid gap-3  text-white">
						<p className="text-3xl  font-medium">Women’s Collections</p>
						<p>Featured woman collections that give you another vibe.</p>
						<button className="underline text-start">Shop Now</button>
					</div>
					<img className="relative opacity-70" src="/images/products/product-3.png" alt="Women’s Collections image" />


				</div>
				<div className='grid grid-cols-2 gap-5'>

					<div className='bg-black flex relative justify-end p-12 pb-0 row-span-2'>
						<img className="relative opacity-70" src="/images/products/product-2.png" alt="Playstation 5 image" />

						<div className="card-text text-xl grid gap-3  w-[350px] text-white absolute left-8 bottom-8">
							<p className="text-3xl  font-medium">Speakers</p>
							<p>Amazon wireless speakers</p>
							<button className="underline text-start">Shop Now</button>
						</div>
					</div>

					<div className='bg-black flex relative justify-end p-12 pb-0 row-span-2'>
						<img className="relative opacity-70" src="/images/products/product-1.png" alt="Perfume image" />

						<div className="card-text text-xl grid gap-3  w-[350px] text-white absolute left-8 bottom-8">
							<p className="text-3xl  font-medium">Perfume</p>
							<p>GUCCI INTENSE OUD EDP.</p>
							<button className="underline text-start">Shop Now</button>
						</div>
					</div>
				</div>
			</div>

			{/* Features */}

			<div className="grid grid-cols-3 gap-6 my-24  justify-center items-center">
				{
					feats.map(feat => (
						<div key={feat.id} className="flex justify-center gap-4 items-center flex-col">
							<div className="bg-black outline outline-8 outline-[#363738]/30 w-16 h-16 flex justify-center items-center rounded-full p-[6px]">
								<img src={feat.icon} alt={`${feat.title} icon`} />
							</div>

							<div className="text-center">
								<p className="text-2xl font-medium">{feat.title}</p>
								<p className="text-md font-medium mt-1">{feat.desc}</p>
							</div>
						</div>
					))
				}


			</div>
		</div>
	)
}

export default NewArrival