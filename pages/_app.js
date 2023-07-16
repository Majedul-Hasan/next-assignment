import FooterComponent from '@/components/FooterComponent';
import '@/styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Xzect - Revolutionizing Technology and Business Solutions</title>
        <meta
          name='description'
          content='Xzect provides a diverse array of services that enable both businesses and individuals to bring their vision to life . Our specialties include software development, website design and SEO, cloud services, robotics and automation, 3D printing and prototyping, data science and analytics, AI and machine learning, IOT, AR and VR, blockchain, and other tech-related services. Our team of experienced professionals is available to assist with the design and development of new products, exploration of robotics and automation possibilities, or any other requirements.'></meta>

        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <link
          rel='icon'
          href='/xzect-logo.svg'
        />
      </Head>
      <Component {...pageProps} />
      <FooterComponent />
    </>
  );
}
