import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './bookevent.css';
import { Link } from 'react-router-dom';

function Bookevent() {
    const [count1,setCount1]=useState(1);
    const [count2,setCount2]=useState(1);
    const inc1 =()=>{
        setCount1(count1+1)
    }
    const inc2 =()=>{
        setCount2(count2+1)
    }
    const dec1 =()=>{
        setCount1(count1-1)
    }
    const dec2 =()=>{
        setCount2(count2-1)
    }
    const f1price=99.12;
    const f2price=82.12;
	const navigate=useNavigate();
	let navaddress=()=>{
		navigate('/pay')
	}
  return (
    <div class="body">
    <div class="CartContainer">
   	   <div class="Header">
		  <Link to='/fruit1'><img src="https://cdn-icons-png.flaticon.com/512/93/93634.png" id="back"/></Link>
   	   	<h3 class="Heading">Shopping Cart</h3>
   	   	<h5 class="Action">Remove all</h5>
   	   </div>

   	   <div class="Cart-Items">
   	   	  <div class="image-box">
   	   	  	<img src="https://www.gardeningknowhow.com/wp-content/uploads/2021/05/whole-and-slices-watermelon-690x518.jpg" style={{ height:"120px" }} />
   	   	  </div>
   	   	  <div class="about">
   	   	  	<h1 class="title1">Watermelon </h1>
   	   	  	<h3 class="subtitle">1pc (approx 2.5-3kg)</h3>
   	   	  	<img className="green" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ239Zo9cNimCavHbLvlhLg8mD_tRLV_lTMrUmYQqRy7ILUc8Fu_XxIZPi6jAoIiRMcuiE&usqp=CAU" style={{ height:"30px" }}/>
   	   	  </div>
   	   	  <div class="counter">
   	   	  	<div class="btn"  onClick={inc1}> + </div>
   	   	  	<div class="count">{count1}</div>
   	   	  	<div class="btn" onClick={dec1}>-</div>
   	   	  </div>
   	   	  <div class="prices">
   	   	  	<div class="amount">Rs {count1*f1price}</div>
   	   	  	<div class="save"><u>Save for later</u></div>
   	   	  	<div class="remove"><u>Remove</u></div>
   	   	  </div>
   	   </div>

   	   <div class="Cart-Items pad">
   	   	  <div class="image-box">
	<img src="https://media.istockphoto.com/id/501395870/photo/fresh-slice-orange.jpg?s=612x612&w=0&k=20&c=OT-1Lkigtd-5tGrcs_B68Kh8VlvFeDsEqmWG7hnq7Vc=" style={{ height:"120px" }} />
   	   	  </div>
   	   	  <div class="about">
   	   	  	<h1 class="title2">Orange</h1>
   	   	  	<h3 class="subtitle">1kg</h3>
   	   	  	<img className="green" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ239Zo9cNimCavHbLvlhLg8mD_tRLV_lTMrUmYQqRy7ILUc8Fu_XxIZPi6jAoIiRMcuiE&usqp=CAU" style={{ height:"30px" }}/>
   	   	  </div>
   	   	  <div class="counter">
   	   	  	<div class="btn" onClick={inc2}> + </div>
   	   	  	<div class="count">{count2}</div>
   	   	  	<div class="btn"onClick={dec2} >-</div>
   	   	  </div>
   	   	  <div class="prices">
   	   	  	<div class="amount">Rs {count2*f2price}</div>
   	   	  	<div class="save"><u>Save for later</u></div>
   	   	  	<div class="remove"><u>Remove</u></div>
   	   	  </div>
   	   </div>
   	 <hr/> 
   	 <div class="checkout">
   	 <div class="total">
   	 	<div>
   	 		<div class="Subtotal">Sub-Total</div>
   	 		<div class="items">2 items</div>
   	 	</div>
   	 	<div class="total-amount">Rs {(count1*f1price)+(count2*f2price)}</div>
   	 </div>
   	 <button class="button" onClick={navaddress}>Checkout</button></div>
   </div>
   </div>
  )
}
export default Bookevent;