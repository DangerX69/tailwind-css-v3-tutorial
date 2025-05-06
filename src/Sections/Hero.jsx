import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";
import { statistics } from "../Constants";
import { bigShoe1 } from "../assets/images";
const Hero = () => {
	return (
		<section
			id="home"
			className="w-full 
      flex 
      xl:flex-row flex-col 
      justify-center 
      min-h-screen 
      gap-10 
      max-container 
      border-2 border-red-500 p-2
	  z-20"
		>
			<div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 border-black border-5">
				<p className="text-xl font-montserrat text-coral-red">
					Our Summer Collection
				</p>
				<h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
					<span className="xl:bg-white xl:whitespace-nowrap relative pr-10">
						The New Arrival
					</span>
					<br />
					<span className="text-coral-red inline-block mt-3">Nike</span> Shoes
				</h1>
				<p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
					Discover Stylish Nike arrivals, quality confort and innovation for
					your active life.
				</p>
				<Button
					label="Shop Now"
					iconURL={arrowRight}
				/>
				<div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
					{statistics.map((element, index) => {
						return (
							<div key={element.label}>
								<p className="text-4xl font-palanquin font-bold">{element.value}</p>
								<p className="leading-7 font-montserrat text-slate-gray">{element.label}</p>
							</div>
						);
					})}
				</div>
			</div>

<div>
	<img src={bigShoe1} alt="shoe collection" width={610} height={500} className="relative flex flex-1 justify-center  items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center" />
</div>


		</section>
	);
};

export default Hero;
