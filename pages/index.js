import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import NavbarComp from '@/components/NavbarComp';
import BannerComp from '@/components/BannerComp';
import ServicesComp from '@/components/ServicesComp';
import ExpertiseComp from '@/components/ExpertiseComp';
import ServicesBookingComp from '@/components/ServicesBookingComp';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <NavbarComp />
        <BannerComp />
        <ServicesComp />
        <ExpertiseComp />
        <ServicesBookingComp />
      </div>
    </>
  );
}
