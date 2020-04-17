import React, { useRef, useState } from "react";

import Button from "../Button/Button";
import styles from "./Card.scss";
import useSetStateOnClickElement from "../../hooks/useSetStateOnClickElement";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const Card = () => {
  const cardRef = useRef(null);

  const titleTextareaRef = useRef(null);

  const [isEditing, setIsEditing] = useState(false);

  const [cardHeight, setCardHeight] = useState("");

  useSetStateOnClickElement(cardRef, setIsEditing);

  const [
    cardTitle,
    setCardTitle,
  ] = useState(`As a developer, I would like to create a template for an order to be placed, in the
  administrator be able to select a supplier and several products that you want to
  order.`);

  useEffect(() => {
    setCardTitle(cardTitle.replace(/(\r\n|\n|\r)(  +)/gm, " ")); // Removes line breaks and tabs

    if (titleTextareaRef.current !== null) {
      titleTextareaRef.current.select();
      setCardHeight(titleTextareaRef.current.scrollHeight - 3);
    }
  }, [isEditing]);

  return (
    <>
      <div ref={cardRef}>
        {isEditing ? (
          <div className={styles.cardEditingWrapper}>
            <div className={styles.textareaWrapper}>
              <textarea
                className={styles.titleTextarea}
                defaultValue={cardTitle}
                ref={titleTextareaRef}
                style={{ height: cardHeight }}
              />
            </div>
            <Button title="Save" className={styles.saveButton} />
          </div>
        ) : (
          <a href="#" className={styles.link}>
            <div className={styles.cardLabelWrapper}>
              <p className={styles.title}>{cardTitle}</p>
              <div className={styles.editIcon}>
                <FontAwesomeIcon icon={faPencilAlt} />
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
