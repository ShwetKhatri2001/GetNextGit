import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import '../scss/styles.scss';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
          <link rel="icon" href="/gitfav.ico" />
      </Head>
      <Navbar/>
      <div>
        <Component {...pageProps} />
      </div>
      <Footer/>
    </div>
  );
}

export default MyApp;