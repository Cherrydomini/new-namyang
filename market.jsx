import React from "react";
import {useProState} from '../testContext';

function MarketItem({id, text, done}){
  return(
    <div>
      <h4>{id}</h4>
      <p>{text}</p>
      <p>{done}</p>
    </div>
  )
}

function Market(){
  const Markets = useProState();
  return(
    <div>
      <div>
        <h3>Market</h3>
      </div>
      <div>
        {Markets.map((item)=>(
          <MarketItem
          key={item.id}
          id={item.id}
          text={item.text}
          done={item.done}
          />
        ))}
      </div>
    </div>

  )
}

export default Market;