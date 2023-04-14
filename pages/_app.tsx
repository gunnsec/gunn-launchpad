import {AppProps} from 'next/app';
import {Inter} from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';

import '../styles/globals.css';


const inter = Inter({
    subsets: ['latin']
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className={inter.className}>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </div>
    );
}
