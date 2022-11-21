import React from "react";
import Link from "next/link";
import styles from "../styles/Utils.module.css";

const Button = ({ href, text, style }) => {
  return (
    <Link href={href} legacyBehavior>
      <a className={`${styles.customBtn} ${style}`}>{text}</a>
    </Link>
  );
};

export default Button;
