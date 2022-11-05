import React from "react";
import { ListGroup } from "react-bootstrap";
import {Link} from 'react-router-dom';

class Mmenu extends React.Component{
    componentDidMount(){
        const liList =document.querySelectorAll('.nav li');
        const subLi =document.querySelectorAll('.submn');

        for(let i=0;i<liList.length;i++){
            liList[i].index=i;
            liList[i].addEventListener('mouseover', (e)=>{
                let n = e.currentTarget.index
                for(let j=0; j<liList.length; j++){
                    if(j===n){
                        liList[j].classList.add("on");
                    }else{
                        liList[j].classList.remove("on");
                    }
                }
            })
            for( let i=0; i<liList.length; i++){
                subLi[i].addEventListener('mouseout', (e)=>{
                for( let j=0; j<liList.length; j++){
                    liList[j].classList.remove('on');
                }
            })
        }
    }
}
    render(){
        return(
            <div className='hGroup'>
            <nav className='nav'>
             <ul>
                <li>
                    <Link to='/component/membership'>프리미엄멤버쉽</Link>
                    <div className="submn"></div>
                </li>
                <li>
                    <Link to='/component/product'>냉장제품</Link>
                    <div className="submn"></div>
                </li>
                <li>
                    <Link to='/component/market'>시크릿마켓</Link>
                    <div className="submn"></div>
                </li>
                <li>
                    <Link to='/component/brand'>브랜드관</Link>
                    <div className="submn"></div>
                </li>
                <li>
                    <Link to='/component/special'>기획전</Link>
                    <div className="submn"></div>
                </li>
                <li>
                    <Link to='/component/event'>이벤트</Link>
                    <div className="submn"></div>
                </li>
                <li>
                    <Link to='/component/delivery'>가정배달</Link>
                    <div className="submn"></div>
                </li>
             </ul>
            </nav>
            </div>
        )
    }
}

export default Mmenu;