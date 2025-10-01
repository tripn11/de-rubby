"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
    const [nav, setNav] = useState({menu:false, school:false, admission:false});
    const pathName = usePathname().split("/")[1];

    const navSetter = (specific) => {
        setNav((prev) => ({
            ...prev,
            [specific]: !prev[specific], 
        }));
    };


    return (
        <header>
            <div>
                <img src="/logo/apple-touch-icon.png" />
                <div>DE-RUBBY MENTORS SCHOOL</div>
            </div>

            <label className="container" onClick={()=>navSetter("menu")}>
                <input type="checkbox" onClick={(e) => e.stopPropagation()} checked={nav.menu}/>
                <div className="checkmark">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </label>
            
            <nav className={nav.menu ? "open" : ""}>
                <Link href="/" className={pathName === ""? "active": ""} onClick={()=>navSetter("menu")}>Home</Link>
                <div className={pathName === "school"? "active": ""}>
                    <div onClick={()=>navSetter("school")}><span>Our School</span> <span>{nav.school ? "-" : "+"}</span></div>
                    <div className={nav.school ? "open" : ""}>
                        <Link onClick={()=>navSetter("menu")} href="/school/nursery">Nursery</Link>
                        <Link onClick={()=>navSetter("menu")} href="/school/primary">Primary</Link>
                    </div>
                </div>
                <div className={pathName === "admission" || pathName === "faq" ? "active": ""}>
                    <div onClick={()=>navSetter("admission")}><span>Admission</span> <span>{nav.admission ? "-" : "+"}</span></div>
                    <div className={nav.admission ? "open" : ""}>
                        <Link onClick={()=>navSetter("menu")} href="/admission">Admission</Link>
                        <Link onClick={()=>navSetter("menu")} href="/faq">FAQs</Link>
                    </div>
                </div>
                <Link onClick={()=>navSetter("menu")} href="/contact" className={pathName === "contact"? "active": ""}>Contact Us</Link>
            </nav>
        </header>
    )
}
export default Header