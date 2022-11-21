import Head from "next/head";
import Image from "next/image";
import { useRef } from "react";
import { useSpring, animated } from "@react-spring/web";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Parallax, HashNavigation } from "swiper";
import "swiper/css";
import "swiper/css/bundle";
import styles from "../styles/Home.module.css";
import {
  Facebook,
  Twitter,
  Google,
  InstagramOne,
  Certificate,
} from "@icon-park/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faCalendar, faSmile } from "@fortawesome/free-regular-svg-icons";
import "@icon-park/react/styles/index.css";
import Navbar from "../component/Navbar";
import Button from "../utils/Button";
import watch1 from "../public/assets/home/watch-0011.png";
import watch2 from "../public/assets/home/watch-002.png";
import watch3 from "../public/assets/home/watch-003.png";
import section2a from "../public/assets/home/watch-banner-05-new.jpg";
import section2b from "../public/assets/home/watch-banner-02-new.jpg";
import section2c from "../public/assets/home/watch-banner-06-new-jpg.webp";
import section2d from "../public/assets/home/watch-banner-04.jpg";
import { feature, best_seller } from "../component/feature";
import Card from "../utils/Card";
import Card_Two from "../utils/Card_Two";
import section4a from "../public/assets/home/graphic-banner-6-1-jpg.webp";
import section4b from "../public/assets/home/graphic-banner-7.jpg";

const sliderContent = [
  {
    watch: watch1,
    title: "High quality stylish watches",
    content:
      "made from 316L stainless steel, the classic is intended to stay as such and is designed.",
  },
  {
    watch: watch2,
    title: "Spending time you feel great",
    content:
      "made from 316L stainless steel, the classic is intended to stay as such and is designed.",
  },
  {
    watch: watch3,
    title: "Hongo of your time a planet",
    content:
      "made from 316L stainless steel, the classic is intended to stay as such and is designed.",
  },
];
export default function Home() {
  const [props, api] = useSpring(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
      delay: 1000,
      loop: true,
    }),
    []
  );

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "0" + (index + 1) + "</span>";
    },
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>HONGO</title>
        <meta
          name="description"
          content="One stop shop for wrist watches. Hongo is your first choice"
        />
        <link
          rel="shortcut icon"
          href="/public/cropped-hongo-favicon-1-32x32.png"
          type="image/png"
        />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <Swiper
          className="mySwiper"
          modules={[Autoplay, Pagination, Parallax]}
          autoplay={{ delay: 2500 }}
          loop={true}
          parallax={true}
          spaceBetween={50}
          slidesPerView={1}
          pagination={pagination}
        >
          {sliderContent.map((el, i) => (
            <SwiperSlide data-hash={i + 1} key={i}>
              <div className={styles.sliderWrapper}>
                <div className={styles.sliderSection1}>
                  <Image
                    src={el.watch}
                    alt="wrist watch"
                    className={styles.sliderImage}
                  />
                </div>
                <div className={styles.sliderSection2}>
                  <p className={styles.sliderHeader}>- les Originales</p>
                  <h1 className={styles.sliderTitle}>{el.title}</h1>
                  <p className={styles.sliderContent}>
                    Made from 316L stainless steel, the classic is intended to
                    stay as such and is designed.
                  </p>
                  <Button
                    text="our Collection"
                    style={styles.sliderBtn}
                    href="#two"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className={styles.socialContainer}>
            <div className={styles.socialsWrapper}>
              <a href="#" className={styles.social}>
                <Facebook theme="filled" size="10" fill="#fff" />
              </a>
              <a href="#" className={styles.social}>
                <Twitter theme="filled" size="10" fill="#fff" />
              </a>
              <a href="#" className={styles.social}>
                <Google theme="filled" size="10" fill="#fff" />
              </a>
              <a href="#" className={styles.social}>
                <InstagramOne theme="filled" size="10" fill="#fff" />
              </a>
            </div>
            <hr className={styles.divider} />
            <div className={styles.under}>
              <p className={styles.follow}>follow us</p>
            </div>
          </div>
        </Swiper>
      </main>
      <section className={styles.section_one}>
        <div className={styles.section_one_wrapper}>
          <FontAwesomeIcon icon={faGlobe} />
          <p className={styles.section_one_text}>WORLDWIDE SHIPPING</p>
        </div>

        <div className={styles.section_one_wrapper}>
          <Certificate
            theme="filled"
            size="24"
            fill="#808080"
            strokeWidth={2}
          />
          <p className={styles.section_one_text}>CERTIFICATED BY GURUS</p>
        </div>
        <div className={styles.section_one_wrapper}>
          <FontAwesomeIcon icon={faCalendar} />
          <p className={styles.section_one_text}>30 DAYS MONEY BACK</p>
        </div>
        <div className={styles.section_one_wrapper}>
          <FontAwesomeIcon icon={faSmile} />
          <p className={styles.section_one_text}>99% POSITIVE FEEDBACKS</p>
        </div>
      </section>
      <section id="two" className={styles.section_two}>
        <div className={styles.section_two_Wrapper}>
          <Image
            className={styles.section_two_image}
            src={section2a}
            alt="wrist watch"
          />
          <div className={styles.section_two_contentWrapper}>
            <h1 className={styles.section_two_header}>OUR COLLECTION</h1>
            <p className={styles.section_two_content}>
              High quality and
              <br /> good design shape
            </p>
          </div>
        </div>
        <div className={styles.section_two_Wrapper}>
          <Image
            className={styles.section_two_image}
            src={section2b}
            alt="wrist watch"
          />
        </div>
        <div className={styles.section_two_Wrapper}>
          <Image
            className={styles.section_two_image}
            src={section2c}
            alt="wrist watch"
          />
        </div>
        <div className={styles.section_two_Wrapper}>
          <Image
            className={styles.section_two_image}
            src={section2d}
            alt="wrist watch"
          />
          <div className={styles.section_two_contentWrapper}>
            <h1
              className={`${styles.section_two_header} ${styles.section_two_header1}`}
            >
              ABOUT ROTARY
            </h1>
            <p
              className={`${styles.section_two_content} ${styles.section_two_content1}`}
            >
              Designing watches
              <br /> full time work
            </p>
          </div>
        </div>
      </section>
      <section className={styles.section_three}>
        <div className={styles.HeaderSection}>
          <h1 className={styles.section_header}>Feature Products</h1>
          <p className={styles.section_subText}>
            Elegance is an attitude longines
          </p>
        </div>
        <div className={styles.featureProduct_list}>
          {feature.map((el, index) => (
            <Card
              key={index}
              src1={el.img_one}
              src2={el.img_two}
              href="/"
              name={el.name}
              price={el.price}
              label="Add to Cart"
              btnStyle={styles.cartBtn}
            />
          ))}
        </div>
      </section>
      <section className={styles.section_four}>
        <div className={styles.section_four_Wrapper}>
          <Image
            src={section4a}
            alt="watch"
            className={styles.section_four_image}
          />
        </div>
        <div
          className={`${styles.section_four_Wrapper} ${styles.section_four_Wrapper1}`}
        >
          <Image
            src={section4b}
            alt="watch"
            className={styles.section_four_image}
          />
          <div className={styles.section_four_contentWrapper}>
            <h1 className={styles.section_four_header}>- ABOUT COMPANY</h1>
            <p className={styles.section_four_content}>
              Just now learn about our brand, quality and latest design watches.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.section_three}>
        <div className={styles.HeaderSection}>
          <h1 className={styles.section_header}>Best seller Products</h1>
          <p className={styles.section_subText}>
            You’re not quite sure of your position
          </p>
        </div>
        <div className={styles.bestProduct_list}>
          {best_seller.map((el, index) => (
            <Card_Two
              key={index}
              src1={el.img_one}
              src2={el.img_two}
              href="/"
              name={el.name}
              price={el.price}
              label="Add to Cart"
              btnStyle={styles.cartBtn}
              customGridStyle={
                index === 0
                  ? styles.one
                  : index === 1
                  ? styles.two
                  : index === 2
                  ? styles.three
                  : styles.four
              }
            />
          ))}
        </div>
      </section>
    </div>
  );
}
