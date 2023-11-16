import Head from 'next/head';
import Hero from '@/components/hero';
import Features from '@/components/features';
import Newsletter from '@/components/newsletter';
import Zigzag from '@/components/zigzag';
import FeatImage04 from '@/public/images/features-03-image-04.jpeg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Future-Fin</title>
        <meta name="description" content="Page description" />
        <link rel="icon" href="https://unsplash.com/photos/black-and-silver-laptop-computer-NoOrDKxUfzo" /> 
      </Head>
      <Hero />
      <Features />
      <Zigzag />
      <Newsletter />
    </>
  );
}
