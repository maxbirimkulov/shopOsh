import React,{useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from 'react-router-dom'
import './product.css'

const Product = () => {
    const link = useParams();
    const [product, setProduct] = useState({});
    useEffect(()=>{
        axios(`https://fakestoreapi.com/products/${link.id}`)
            .then(({data})=> setProduct(data))
    },[]);

    return (
        <div className='container'>
            {JSON.stringify(product) === '{}'
                ? <div className='product__preloader'>
                    <h3 className='product__preloader-title'>Ваш товар загружается !!!</h3>
                    <div className="preloader-wrapper big active">
                        <div className="spinner-layer spinner-blue-only">
                            <div className="circle-clipper left">
                                <div className="circle"></div>
                            </div>
                            <div className="gap-patch">
                                <div className="circle"></div>
                            </div>
                            <div className="circle-clipper right">
                                <div className="circle"></div>
                            </div>
                        </div>
                    </div>
                </div>
                : <>
                    <h2>{product.title}</h2>
                    <div className='product__row'>
                        <img className='product__img' src={product.image} alt={product.title}/>
                        <div className='product__info'>
                            <p><span>Название</span>  : {product.title}</p>
                            <p><span>Описание</span>  : {product.description}</p>
                            <p><span>Категория</span>  : {product.category}</p>
                            <p><span>Цена</span>  : {product.price} $</p>
                            <p><span>Рейтинг</span>  : {product.rating.rate}</p>
                            <p><span>Количество</span>  : {product.rating.count} штук</p>
                        </div>
                    </div>
                </>
            }


        </div>
    );
};

export default Product;