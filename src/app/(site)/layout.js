import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Layout = ({children}) => (
    <html lang="en">
        <body>
            <Header />
            {children}
            <Footer />
        </body>
    </html>
)

export default Layout;