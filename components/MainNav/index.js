import Link from 'next/link';
import React from 'react';
import styles from './MainNav.module.css';

const MainNav = () => {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.middle}>
          <div className={styles.popular}>
            <h3 className={styles.title}>Popular</h3>
            <ul className={styles.linksContainer}>
              <li>
                <Link href='/services/website-development-and-seo'>
                  Magento Development
                </Link>
              </li>
              <li>
                <Link href='/services/website-development-and-seo'>
                  Wordpress Development
                </Link>
              </li>
              <li>
                <Link href='/services/website-development-and-seo'>
                  Ecommerce
                </Link>
              </li>
              <li>
                <Link href='/services/website-development-and-seo'>
                  Shopify
                </Link>
              </li>
              <li>
                <Link href='/services/website-development-and-seo'>NFT</Link>
              </li>
              <li>
                <Link href='/services/website-development-and-seo'>MVP</Link>
              </li>
              <li>
                <Link href='/services/robotics-and-automation'>Drones</Link>
              </li>
              <li>
                <Link href='/services/website-development-and-seo'>
                  View all Popular
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.services}>
            <h3 className={styles.title}>Services</h3>
            <ul className={styles.linksContainer}>
              <li>
                <Link href='/services/software-and-app-development'>
                  Software &amp; App Development
                </Link>
              </li>
              <li>
                <Link href='/services/website-development-and-seo'>
                  Website Development &amp; SEO
                </Link>
              </li>
              <li>
                <Link href='/services/cloud-services'>Cloud Services</Link>
              </li>
              <li>
                <Link href='/services/robotics-and-automation'>
                  Robotics &amp; Automation
                </Link>
              </li>
              <li>
                <Link href='/services/3d-printing-and-prototyping'>
                  3D Printing &amp; prototyping
                </Link>
              </li>
              <li>
                <Link href='/services/data-science-and-analytics'>
                  Data Science &amp; Analytics
                </Link>
              </li>
              <li>
                <Link href='/services/ai-and-machine-learning'>
                  AI &amp; Machine Learning
                </Link>
              </li>
              <li>
                <Link href='/services/iot-ar-vr'>IOT, AR &amp; VR</Link>
              </li>
              <li>
                <Link href='/services/blockchain-development'>Blockchain</Link>
              </li>
              <li>
                <Link href='/services/tech-consultancy'>Tech Consultancy</Link>
              </li>
              <li>
                <Link href='/services/research-and-development'>
                  Research &amp; Development
                </Link>
              </li>
              <li>
                <Link href='/services'>View all Services</Link>
              </li>
            </ul>
          </div>
          <div className={styles.industries}>
            <h3 className={styles.title}>Industries</h3>
            <ul className={styles.linksContainer}>
              <li>
                <Link href='/under-development'>eCommerce</Link>
              </li>
              <li>
                <Link href='/under-development'>Hyperlocal</Link>
              </li>
              <li>
                <Link href='/under-development'>Healthcare</Link>
              </li>
              <li>
                <Link href='/under-development'>Finance</Link>
              </li>
              <li>
                <Link href='/under-development'>Education</Link>
              </li>
              <li>
                <Link href='/under-development'>Gaming</Link>
              </li>
              <li>
                <Link href='/under-development'>Social Networking</Link>
              </li>
              <li>
                <Link href='/under-development'>Agriculture</Link>
              </li>
              <li>
                <Link href='/under-development'>Travel &amp; Aviation</Link>
              </li>
              <li>
                <Link href='/under-development'>Logistics</Link>
              </li>
              <li>
                <Link href='/under-development'>Restaurant</Link>
              </li>
              <li>
                <Link href='/under-development'>Real Estate</Link>
              </li>
              <li>
                <Link href='/under-development'>View all Industries</Link>
              </li>
            </ul>
          </div>
          <div className={styles.resources}>
            <h3 className={styles.title}>Resources</h3>
            <ul className={styles.linksContainer}>
              <li>
                <Link href='/about'>About</Link>
              </li>
              <li>
                <Link href='/tech-stack'>Tech Stack</Link>
              </li>
              <li>
                <Link href='/contact-us'>Contact Us</Link>
              </li>
              <li>
                <Link href='/career'>Careers</Link>
              </li>
              <li>
                <Link href='/webinar'>Webinars</Link>
              </li>
              <li>
                <Link href='/terms-and-conditions'>Terms &amp; Conditions</Link>
              </li>
              <li>
                <Link href='/privacy-policy'>Privacy Policy</Link>
              </li>
              <li>
                <Link href='/legal-information'>Legal Information</Link>
              </li>
              <li>
                <Link href='/blog'>Blog</Link>
              </li>
              <li>
                <Link href='https://www.youtube.com/@xzect_labs'>
                  Youtube (@xzect_labs)
                </Link>
              </li>
              <li>
                <Link href='https://github.com/xzect'>Github (@xzect)</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainNav;
