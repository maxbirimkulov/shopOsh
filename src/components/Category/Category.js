import React,{useEffect, useState} from 'react';
import axios from "axios";
import {Link, useParams} from 'react-router-dom'
import '../../components/Main/main.css'

const Category = () => {
    const link = useParams();
    const [category, setCategory] = useState([])
    useEffect(()=>{
        axios(`https://fakestoreapi.com/products/category/${link.name}`)
            .then(({data})=> setCategory(data) )
    },[]);
    const deleteProduct = (id) => {
        setCategory(category.filter((item,idx)=>{
            return idx !== id
        }))
    };
    return (
        <div className='container'>
            <h2>Категория</h2>
            <div className="row">
                {category.length > 0 ? category.map((item,idx)=>{
                    return (
                        <div className="col s12 m4" key={item.title}>
                            <div className="main__card">
                                <img className={'main__img'} src={`${item.image}`} alt=""/>
                                <h3 className={'main__title'}>{item.title.length > 13 ? `${item.title.substr(0, 13)}...` : item.title}</h3>
                                <p className={'main__price'}>{item.price} $</p>
                                <div className='main__btns'>
                                    <Link to={`/product/${item.id}`}>Подробнее</Link>
                                    <button className='btn' onClick={()=> deleteProduct(idx)}>Удалить</button>
                                </div>
                            </div>
                        </div>
                    )
                }) :
                    <div className='product__preloader'>
                        <h3 className='product__preloader-title'>Ваша категория загружается !!!</h3>
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
                }
            </div>
        </div>
    );
};

export default Category;