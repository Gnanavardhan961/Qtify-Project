import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";

function Navbar({ searchData }) {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        <Logo />
      </Link>

      <div className={styles.searchContainer}>
        <Search
          placeholder="Search a song of your choice"
          searchData={searchData}
        />
      </div>

      <Button className={styles.feedbackBtn}>Give Feedback</Button>
    </nav>
  );
}

export default Navbar;
