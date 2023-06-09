import React from "react";

import Option from "./Option";
import styles from "./Favour.module.scss";

interface FavourInterface {
  setRandom: React.Dispatch<any>;
}

function Favour({ setRandom }: FavourInterface) {
  return (
    <section>
      <h2 className={styles.title}>Add favour</h2>

      <Option setRandom={setRandom} />
    </section>
  );
}

export default Favour;
