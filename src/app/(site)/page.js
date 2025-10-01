"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
	{
		id: 1,
		title: "Unlock Your Child’s Potential",
		text: "At De-Rubby, we inspire creativity and academic excellence, offering world-class education that prepares students to thrive in studies and future careers.",
		image: "/images/hero1.jpeg",
	},
	{
		id: 2,
		title: "Explore Premier Education",
		text: "From day-care through primary, we provide a nurturing environment where every child’s growth and potential are fully realized.",
		image: "/images/hero2.jpeg",
	},
	{
		id: 3,
		title: "Begin Your Child’s Future with Us",
		text: "We are committed to quality learning that fosters personal growth, leadership, and a bright future for every student.",
		image: "/images/hero3.jpeg",
	},
];

const Home = () => {
	const [current, setCurrent] = useState(0);

	useEffect(() => {
		const t = setInterval(() => setCurrent((s) => (s + 1) % slides.length), 5000);
		return () => clearInterval(t);
	}, []);

	return (
		<main>
			<section 
                aria-roledescription="carousel"
                style={{ backgroundImage: `url(${slides[current].image})` }}
            >
				<div>
					<h2>{slides[current].title}</h2>
					<p>{slides[current].text}</p>
				</div>
                <Link href={"/admission"} className="special">Register Now</Link>
			</section>

			<section id="academics">
				<h2>Academics</h2>
				<p>
					Our academic programs at De-Rubby Mentors School lay the foundation for your child's
					success.
				</p>

				<div>
					<div>
						<div>
							<ion-icon name="school-outline"></ion-icon>
							<h3> Nursery</h3>
						</div>
						<p>
							Enroll your child in our Nursery School for a foundation of quality early education and
							nurturing care.
						</p>

						<Link href="/school/nursery">Nursery <ion-icon name="arrow-forward-outline"></ion-icon></Link>
					</div>

					<div>
						<div>
							<ion-icon name="school-outline"></ion-icon>
							<h3>Primary</h3>
						</div>
						<p>
							Nurturing young minds with quality education, creativity and excellence at our Primary
							School.
						</p>
						<Link href="/school/primary">Primary <ion-icon name="arrow-forward-outline"></ion-icon></Link>
					</div>
				</div>
			</section>

			<section id="about">
				<h2>De-Rubby Mentors School</h2>
				<p>
					At De-Rubby Mentors School, we are dedicated to shaping future leaders through a
					well-rounded education that blends academic excellence, creativity, and personal growth.
					From nursery to high school, our vibrant learning environment empowers students to reach
					their fullest potential.
				</p>
				<Link href="/admission" className="special">Register your child <ion-icon name="arrow-forward-outline"></ion-icon></Link>
			</section>
		</main>
	);
};

export default Home;