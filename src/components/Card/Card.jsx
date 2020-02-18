import React, { useRef, useState } from "react";

import Button from "../Button/Button";
import styles from "./Card.scss";
import useDisplayElementOnClick from "../../hooks/useDisplayElementOnClick";

const Card = () => {
  const cardRef = useRef(null);

  const [isEditing, setIsEditing] = useState(false);

  useDisplayElementOnClick(cardRef, setIsEditing);

  return (
    <>
      <a href="#" className={styles.link}>
        <div className={styles.wrapper} ref={cardRef}>
          <p className={styles.title}>
            #8 As a developer, I would like to create a template for an order to be placed, in the
            administrator be able to select a supplier and several products that you want to order.
          </p>
        </div>
      </a>
      {isEditing && (
        <>
          <Button
            title="Save"
            style={{
              borderRadius: "3px",
              padding: "9px 22px 8px 22px",
              position: "absolute",
              zIndex: 11
            }}
          />
          <div className={styles.blurScreen}></div>
        </>
      )}
    </>
  );
};

export default Card;
