import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import './main.css'
import logo from '../../assets/images/logo.png'



const Main = ({cart,setCart}) => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);


   useEffect(()=>{
       axios('https://fakestoreapi.com/products')
           .then(({data})=> setProducts(data));
       axios('https://fakestoreapi.com/products/categories')
           .then(({data})=> setCategories(data) )
    },[]);

   const deleteProduct = (id) => {
       setProducts(products.filter((item,idx)=>{
           return idx !== id
       }))
   };

   const buyCart = (obj) => {
       const idx = cart.findIndex((item)=> item.id === obj.id);
       if (idx === -1){
           setCart([...cart, {
               ...obj,
               count:1
           }])
       }else{
            cart[idx].count++;
            setCart([...cart])
       }
   };

    return (

        <div className='container'>
            <h1>Товары</h1>
            {products.length === 0
                ? <>
                    <div className="progress" >
                        <div className="indeterminate"></div>
                    </div>
                    <img src={logo} alt=""/>
                </>

                : <section className='main'>
                    <ul className='main__categories'>
                        {categories.map((item,idx)=>{
                            return (
                                <li className={'main__list'} key={item}>
                                    <Link to={`/category/${item}`}>{item}</Link>
                                </li>
                            )
                        })}
                    </ul>
                    <div className="row">
                        {products.length > 0 ? products.map((item,idx)=>{
                            return (
                                <div className="col s12 m4" key={item.id}>
                                    <div className="main__card">
                                        <img className={'main__img'} src={`${item.image}`} alt=""/>
                                        <h3 className={'main__title'}>{item.title.length > 13 ? `${item.title.substr(0, 13)}...` : item.title}</h3>
                                        <p className={'main__price'}>{item.price} $</p>
                                        <Link to={`/product/${item.id}`}>Подробнее</Link>
                                        <div className='main__btns'>
                                            <button className='btn' onClick={()=> buyCart(item)}>Купить</button>
                                            <button className='btn' onClick={()=> deleteProduct(idx)}>Удалить</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }) : ''}
                    </div>
                </section>
            }

        </div>
    );
};

export default Main;