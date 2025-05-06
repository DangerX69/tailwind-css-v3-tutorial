import React from "react";

import NavBar from "./Components/NavBar";

import{	Hero,
	PopularProducts,
	SuperQuality,
	Services,
	SpecialOffers,
	CustomerReviews,
	Footer,
	Subscribe } from "./Sections";

const App = () => {
	return (
		<main className="relative">
			<NavBar/>
			<section className="xl:padding-1 wide:padding-r padding-b"><Hero/></section>
			<section className="padding"><PopularProducts/></section>
			<section className="padding"><SuperQuality/></section>
			<section className="padding-x py-10"><Services/></section>
			<section className="padding"><SpecialOffers/></section>
			<section className="bg-pale-blue padding"><CustomerReviews/></section>
			<section className="padding-x s:py-32 py-16 w-full"><Subscribe/></section>
			<section className="padding-x bg-black padding-t pb-8"><Footer/></section>
		</main>
	);
};

export default App;
