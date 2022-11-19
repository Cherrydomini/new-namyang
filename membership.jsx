import React from "react";
import styles from "./membership.module.css";
import styled from "styled-components";
import Carousel from 'react-bootstrap/Carousel';
//npm install react-bootstrap bootstrap
//npm i bootstrap@5.2.2
const Button01 = styled.span`
  margin:20px 0;
  disply:block;
  width:80px;
  height:30px;
  text-align:center;
  line-height:30px;
  border-radius:3px;
  background:red;
  color:#fff;

`;

function Membership(){
  return(
    <div>
      <div>
        <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../images/olive-oil.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../images/oils.jpg"
                alt="Second slide"
              />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="../images/cherries.jpg"
                  alt="Third slide"
                />

                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
              </Carousel.Item>
        </Carousel>
      </div>
       <div className={styles.con1}>
          <div className={styles.con1_h}>
            <Button01>혜택1</Button01>
          </div>
       </div>
       <div className={styles.con2}>
          <div className={styles.con2_h}>
          <Button01>혜택1</Button01>
          </div>
       </div>
       <div className={styles.con3}>
          <div className={styles.con3_h}>
          <Button01>혜택1</Button01>
          </div>
       </div>
    </div>
  )
}

export default Membership;
