import React from 'react';
import './cart.css'

const Cart = ({cart, setCart}) => {
    const deleteProductFromCart = (id) => {
        const idx = cart.findIndex((item)=> item.id === id);

        if (cart[idx].count > 1){
            cart[idx].count--;
            setCart([...cart])
        }else{
            setCart(cart.filter((item)=>{
                return item.id !== id
            }))
        }
    };
    return (
        <div className='container'>
            {cart.length === 0
                ? <>
                    <h2 style={{'text-align':'center'}}>Корзина пуста</h2>
                    <img className='cart__image' src="https://vitoline.ru/store/view/theme/vitoline/image/empty-cart.jpg" alt="Корзина пуста"/>
                </>
                : <>
                    <h2>Корзина</h2>
                    <table>
                        <thead>
                        <tr>
                            <th>Название</th>
                            <th>Количество</th>
                            <th>Цена</th>
                            <th>Действие</th>
                        </tr>
                        </thead>

                        <tbody>
                        {cart.map((item, idx) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.title}</td>
                                    <td>{item.count}</td>
                                    <td>{(item.price * item.count).toFixed(2)} $</td>
                                    <td>
                                        <button className='btn' type='button' onClick={()=> deleteProductFromCart(item.id)}>Удалить</button>
                                    </td>
                                </tr>
                            )
                        })}
                        </tbody>

                    </table>
                    <p>
                        Общая цена : {cart.reduce((acc, rec) => acc + rec.price * rec.count, 0).toFixed(2)} $
                    </p>
                </>

            }

        </div>
    );
};

export default Cart;