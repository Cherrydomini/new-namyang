import React from "react";
import {useProState} from './testContext';
import MainImg from "./mainimg";

//npm일때
//npm install react-slick --save

//yarn 일때
//yarn add react-slick
//npm install slick-carousal

function MarketItem({id,text,done}){
    return(
      <div>
         <h4>{id}</h4>
         <p>{text}</p>
      </div>
    )
  }

function MainPage(){
    const Markets = useProState();
    return(
        <div>
            {/*<section className="mainImg">mainImg</section>*/}
            <MainImg/>
            <section className="contents">
            <article className="product1">
                {Markets.map((item)=>(
                        <MarketItem
                        key={item.id}
                        id={item.id}
                        text={item.text}
                        done={item.done}
                        /> 
                  ))}
                </article>
                <article className="product2">product2</article>
                <article className="product3">product3</article>
                <article className="product4">product4</article>
                <article className="product5">product5</article>
            </section>
        </div>
    )
}

export default MainPage;