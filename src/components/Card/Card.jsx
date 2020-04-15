import React, { useRef, useState } from "react";

import Button from "../Button/Button";
import styles from "./Card.scss";
import useSetStateOnClickElement from "../../hooks/useSetStateOnClickElement";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const Card = () => {
  const cardRef = useRef(null);

  const titleTextareaRef = useRef(null);

  const [isEditing, setIsEditing] = useState(false);

  useSetStateOnClickElement(cardRef, setIsEditing);

  const cardContent = `#8 As a developer, I would like to create a template for an order to be placed, in the
  administrator be able to select a supplier and several products that you want to
  order.`;

  useEffect(() => {
    if(titleTextareaRef.current !== null) {
      titleTextareaRef.current.select();
    }
  }, [isEditing])

  return (
    <>
      <div ref={cardRef}>
        {isEditing ? (
          <>
            <div className={styles.cardEditingWrapper}>
              <textarea className={styles.titleTextarea} defaultValue={cardContent} ref={titleTextareaRef}/>
            </div>
            <Button title="Save" className={styles.saveButton} />
          </>
        ) : (
          <a href="#" className={styles.link}>
            <div className={styles.cardLabelWrapper}>
              <p className={styles.title}>{cardContent}</p>
              <div className={styles.editIcon}>
                <FontAwesomeIcon icon={faPen} />
              </div>
            </div>
          </a>
        )}
      </div>
      {/* The following renders a blur screen in order to highlight the card that's been editing 
          It needs to be outside the card's container, because when somebody clicks on it, it should disappear.
      */}
      {isEditing && <div className={styles.blurScreen}></div>}
    </>
  );
};

export default Card;
