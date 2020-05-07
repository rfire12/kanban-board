import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowMaximize, faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import { faCheckSquare } from '@fortawesome/free-regular-svg-icons';
import styles from './CardEditor.scss';
import HiddenTextarea from '../HiddenTextarea/HiddenTextarea';
import Sidebar from './Sidebar/Sidebar';
import Section from './Section/Section';
import ProgressBar from '../ProgressBar/ProgressBar';

const CardEditor = () => {
  const description = `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`;

  const cardTitle =
    'As a developer, I would like to create a template for an order to be placed, in the administrator be able to select a supplier and several products that you want to order.';

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <Section className={styles.header} title={cardTitle} icon={faWindowMaximize} fontSize={20} mainHeading>
          <p className={styles.listNameWrapper}>
            in list
            <span className={styles.listName}>General</span>
          </p>
        </Section>
        <section className={styles.content}>
          <Section className={styles.description} title="Description" icon={faAlignLeft} isTitleEditable={false}>
            <HiddenTextarea
              paragraphClassName={styles.descriptionParagraph}
              textareaClassName={styles.descriptionTextarea}
              initialText={description}
              textareaStartsSelected
            />
          </Section>
          <Section title="Checklist" icon={faCheckSquare}>
            <ProgressBar percentage={25} />
          </Section>
        </section>
        <section className={styles.sideBar}>
          <Sidebar />
        </section>
        
      </div>
    </div>
  );
};

export default CardEditor;
