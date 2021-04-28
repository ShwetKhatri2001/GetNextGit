import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import '../scss/styles.scss';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>GetNextGit</title>
      </Head>
      <Navbar/>
      <div className="page">
        <Component {...pageProps} />
      </div>
      <Footer/>
    </div>
  );
}

export default MyApp;