import React, { Component } from "react";
import styles from "./BoardHeader.scss";
import Button from "../Button/Button";

const BoardHeader = () => {
  return (
    <>
      <div className={styles.BoardHeader}>
        <Button />
      </div>
    </>
  );
};

export default BoardHeader;
