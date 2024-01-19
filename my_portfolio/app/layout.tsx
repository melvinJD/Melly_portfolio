import Header from '../components/header';
// import Footer from '../compontents/footer';
import { ActiveSectionContextProvider } from '../context/active-section-context';
import ThemeSwitch from '../components/theme-switch';
import ThemeContextProvider from '../context/theme-context';
import './global.css';


const font = Playfair({ subsets: ['latin'] });


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet" />
        <link rel='stylesheet' href='./global.css' />
      </head>
      <body className="bg-neutral-950 text-stone-50">
      <ActiveSectionContextProvider>  
      <ThemeContextProvider>
      <ThemeSwitch/>
      <Banner  />
          <Header/>
            {children}
          </ThemeContextProvider>
          </ActiveSectionContextProvider>
          </body>
    </html>
  );
}

