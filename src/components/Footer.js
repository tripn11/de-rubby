import Link from "next/link";

const Footer = () => (
    <footer>
        <div>
            <div>
                <img src="/logo/apple-touch-icon.png" />
                <div>
                    <p>4, Gani Adebayo Close, Sangotedo Lagos State, Nigeria.</p>
                    <p>+234 803 374 1343</p>
                    <p>+234 812 121 8250</p>
                </div>
            </div>

            <div>
                <h2>About De-Rubby</h2>
                <div>
                    <p><Link href="/school/nursery">Nursery</Link></p>
                    <p><Link href="/school/primary">Primary</Link></p>
                    <p><Link href="#">De-Rubby Tech</Link></p>
                </div>
            </div>

            <div>
                <h2>Events</h2>
                <div>
                    <p><Link href="#">Robotics Session</Link></p>
                    <p><Link href="#">Cultural Day</Link></p>
                    <p><Link href="#">Sports</Link></p>
                    <p><Link href="#">Music</Link></p>
                    <p><Link href="#">Your World Competition</Link></p>
                </div>
            </div>
        </div>

        <div>
            <p>
                <span>Follow Us On</span> 
                <span>
                    <ion-icon name="logo-facebook"></ion-icon>
                    <ion-icon name="logo-linkedin"></ion-icon>
                    <ion-icon name="logo-instagram"></ion-icon>
                    <ion-icon name="logo-youtube"></ion-icon>
                </span>
            </p>
            <p>© 2025 De-Rubby Mentors School. All Rights Reserved.</p>
        </div>
    </footer>
)

export default Footer;