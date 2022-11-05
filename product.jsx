import React from "react";
import './product.css';
//제품한개를 출력하는 함수
function Prod({prod}){
  return (
    <div className="box">
      <div>
        <span className="cold">냉장</span>
        <span className="coupon"  style={{display: prod.coupon && 'block'}}>쿠폰</span>
      </div>
      <img src={prod.photo} className="photo" alt=''/>
      <h4 className="title">{prod.title}</h4>
      <p className="price">{prod.price}</p>
    </div>
  )
}

function Product(){
  //제품이 배열선언
  
  const prods = [
    {
      id:1,
      photo: require("./images/product.jpg"),
      title: '[LOOKAS9] 루카스나인 더블샷라떼 30T',
      price:'10800원',
      coupon: true
    },
    {
      id:2,
      photo:require("./images/product.jpg"),
      title: '[LOOKAS9] 루카스나인 더블샷라떼 30T',
      price:'10800원'
  },
  {
    id:3,
    photo:require("./images/product.jpg"),
    title: '[LOOKAS9] 루카스나인 더블샷라떼 30T',
    price:'10800원',
    coupon: true
  },
  {
    id:4,
    photo:require("./images/product.jpg"),
    title: '[LOOKAS9] 루카스나인 더블샷라떼 30T',
    price:'10800원',
    coupon: true
  },
  {
    id:5,
    photo:require("./images/product.jpg"),
    title: '[LOOKAS9] 루카스나인 더블샷라떼 30T',
    price:'10800원'
  },
  {
    id:6,
    photo:require("./images/product.jpg"),
    title: '[LOOKAS9] 루카스나인 더블샷라떼 30T',
    price:'10800원'
  },
  {
    id:7,
    photo:require("./images/product.jpg"),
    title: '[LOOKAS9] 루카스나인 더블샷라떼 30T',
    price:'10800원'
  },
  {
    id:8,
    photo:require("./images/product.jpg"),
    title: '[LOOKAS9] 루카스나인 더블샷라떼 30T',
    price:'10800원',
    coupon: true
  },
  {
    id:9,
    photo:require("./images/product.jpg"),
    title: '[LOOKAS9] 루카스나인 더블샷라떼 30T',
    price:'10800원'
  },
  {
    id:10,
    photo:require("./images/product.jpg"),
    title: '[LOOKAS9] 루카스나인 더블샷라떼 30T',
    price:'10800원'
  }]
  return(
    <div>
      <header className="product_h">
        <h3>Product</h3>
      </header>
      <section className="product_b">
        {/*<Prod prod={prods[0]} />
        <Prod prod={prods[1]} />
        <Prod prod={prods[2]} />
        <Prod prod={prods[3]} />*/}
        {prods.map((prod, index)=>(
          <Prod prod={prod} key={index} />
        ))}
      </section>
        
    </div>
  )
}

export default Product;