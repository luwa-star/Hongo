import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
import styles from "../styles/Utils.module.css";
import Button from "./Button";

const Card_Two = ({
  src1,
  src2,
  name,
  href,
  label,
  btnStyle,
  price,
  customGridStyle,
}) => {
  const [img, setImg] = useState(src1);
  const [windowSize, setWindowSize] = useState("");
  const [cardContentHoverStyle, setCardContentHoverStyle] = useState({});
  const [desktopCTAStyle, setDesktopCTAStyle] = useState({});

  useEffect(() => {
    const width = window.innerWidth;
    setWindowSize(width);
    console.log(windowSize);
  }, [windowSize]);
  //TO CHANGE THE PRODUCT IMAGE ON HOVER
  const changeImage = (val) => setImg(val);

  const setHoverStyle = () => {
    if (windowSize < 1200) {
      setCardContentHoverStyle({ backgroundColor: "white" });
    } else {
      setCardContentHoverStyle({
        backgroundColor: "white",
        WebkitTransform: `translateY(${-20}px)`,
        MozTransform: `translateY(${-20}px)`,
        msTransform: `translateY(${-20}px)`,
        transform: `translateY(${-20}px)`,
      });
      setDesktopCTAStyle({
        WebkitTransform: `translateY(${0})`,
        MozTransform: `translateY(${0})`,
        msTransform: `translateY(${0})`,
        transform: `translateY(${0})`,
        opacity: 1,
        visibility: "visible",
      });
    }
  };

  const returnToDefault = () => {
    if (windowSize < 1200) {
      setCardContentHoverStyle({ backgroundColor: "transparent" });
    } else {
      setCardContentHoverStyle({ backgroundColor: "transparent" });
      setDesktopCTAStyle({
        WebkitTransform: `translateY(${50}%)`,
        MozTransform: `translateY(${50}%)`,
        msTransform: `translateY(${50}%)`,
        transform: `translateY(${50}%)`,
        opacity: 0,
        visibility: "hidden",
      });
    }
  };

  return (
    <div
      className={`${styles.CardWrapper} ${styles.card_two_Wrapper} ${customGridStyle}`}
      onMouseOver={() => {
        setHoverStyle();
        changeImage(src2);
      }}
      onMouseOut={() => {
        returnToDefault();
        changeImage(src1);
      }}
    >
      <Image
        src={img}
        className={`${styles.cardImage} ${styles.card_two_image}`}
        alt="watch"
      />

      <div
        // style={cardContentHoverStyle}
        className={`${styles.cardContent} ${styles.card_two_Content} `}
      >
        <div className={styles.cardTitleWrapper}>
          <h2 className={styles.cardName}>{name}</h2>
          <p className={styles.cardPrice}>{price}</p>
        </div>
        <div
          className={`${styles.controls} ${styles.cardTwo_controls}`}
          // style={desktopCTAStyle}
        >
          <Button
            href={href}
            text={label}
            style={`${styles.cardTwo_cta_btn} ${btnStyle}`}
          />
          <div className={`${styles.cardIcons}, ${styles.cardTwo_Icons}`}>
            <div className={`${styles.cardBtnWrapper} ${styles.cartEyeBtn}`}>
              <div className={styles.cardIcon}>
                <FontAwesomeIcon
                  icon={faEye}
                  color="#808080"
                  size="1x"
                  className={styles.icon}
                />
              </div>
            </div>
            <div className={`${styles.cardBtnWrapper} ${styles.cartHeartBtn}`}>
              <div className={styles.cardIcon}>
                <FontAwesomeIcon
                  icon={faHeart}
                  color="#808080"
                  className={styles.icon}
                />
              </div>
            </div>
            <div
              className={`${styles.cardBtnWrapper} ${styles.cartBtn_Wrapper}`}
            >
              <FontAwesomeIcon
                icon={faCartShopping}
                color="#808080"
                className={styles.icon}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card_Two;
