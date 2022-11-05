import React from "react";
import styles from "./membership.module.css";
import styled from "styled-components";

const Button01 = styled.span`
  display:block;
  width:80px;
  height:30px;
  text-align:center;
  line-height:30px;
  border-radius: 3px;
  background: red;
  color:#fff;
`;

function Membership(){
  return(
    <div>
      <div className={styles.mainImg}></div>
      <div className={styles.con1}>
          <div className={styles.con1_h}>
            <button>혜택1</button>
          </div>
      </div>
      <div className={styles.con2}>
          <div className={styles.con1_h}>
            <button>혜택2</button>
          </div>
          
      </div>
      <div className={styles.con3}>
          <div className={styles.con1_h}>
            <button>혜택3</button>
          </div>
      </div>
    </div>
  )
}

export default Membership;