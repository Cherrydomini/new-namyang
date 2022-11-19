import React, {useState} from "react";
import styled from 'styled-components';

const InsertFormPositioner = styled.div`
width: 100%;
position: absolute;
`;

const InsertForm = styled.div`
width: 100%;
display: flex;
justify-content: center;
`;

const Input = styled.input`
padding: 5px;
font-size: 14px;
width: 50%;
border: 1px solid gray;
border-radius: 3px;
`
const Roundedbutton = styled.button`
width: 60px;
height: 30px;
display: flex;
align-items: center;
justify-content:center;
position: relative;
left: 50%;
top: 40px;
z-index: 5;
background-color: gray;
border-radius: 5px;
&:hover{
  background: white;
  cursor: pointer;
}`;

function Market(){
  const market_h ={
    height: "30px"
  };
  const market_b = {
    height: "200px"
  };
  const [value, setValue] = useState("");


  const onChange = (e)=> setValue(e.target.value);
  const onSubmit = (e)=> {
    e.preventDefault();//서버로 데이터를 전송하는 기능을 막음(새로고침x)
    setValue('');
  }
  return(
    <>
    <div style={market_h}>
        <h3>Market</h3>
    </div>
    <div style={market_b}>
        <InsertFormPositioner>
          <InsertForm onSubmit={onSubmit}>
            <Input autofocus placeholder="insert password" 
              onChange={onChange} 
              value={value}
              name="text"/>
          </InsertForm>
        </InsertFormPositioner>
      <Roundedbutton onClick={onSubmit}>confirm</Roundedbutton>
      </div>
    </>

  )
}

export default Market;
