import { headerLogo } from "../assets/images/";

import { hamburger } from "../assets/icons";

import { navLinks } from "../Constants";

const NavBar = () => {
	return (
		<header className="padding-x py-10 z-10 w-full sticky top-0 bg-slate-50 opacity-100 rounded-full">
			<nav className="flex justify-between items-center max-container">
				<a href="/">
					<img
						src={headerLogo}
						alt="Nike Logo"
						width={130}
						height={29}
					/>
				</a>
				<ul className="flex-1 flex justify-end items-center gap-10 max-md:hidden">
					{navLinks.map((element) => {
						return (
							<li key={element.label}>
								<a
									href={element.href}
									className="font-montserrat leading-normal text-lg text-slate-gray"
								>
									{element.label}
								</a>
							</li>
						);
					})}
				</ul>
				<div className="md:hidden">
					<img
						src={hamburger}
						alt="hamburger menu"
						width={25}
						height={25}
					/>
				</div>
			</nav>
		</header>
	);
};

export default NavBar;
