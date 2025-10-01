import '../styles/styles.scss';
import Script from 'next/script';

export const metadata = {
  title: "De-Rubby Mentors School",
  description: "The best school in Lagos, Nigeria",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          type="module"
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
          strategy="afterInteractive"
        />
        <Script
          noModule
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}

export default RootLayout;