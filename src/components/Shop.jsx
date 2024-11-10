import { useState, useEffect } from "react"
import { API_KEY, API_URL } from '../config'

import { Preloader } from './Preloader'
import { GoodsList } from './GoodsList'
import { Cart } from './Cart'
import { BasketList } from './BasketList'
import { Alert } from './Alert'

function Shop() {

    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setBasketShow] = useState(false);
    const [alertName, setAlertName] = useState('');

    //Добавить товар в корзину
    const addToBasket = (item) => {

        const itemIndex = order.findIndex(orderItem => orderItem.id === item.id);
        // Если такого товара нет в корзине
        //if (order.filter(order => order.id === item.id).length === 0) {
        if (itemIndex < 0) {
            //Добавляем в товар свойство количество (создаем новый товар)
            const newItem = {
                ...item,
                quantity: 1,
            }
            setOrder([...order, newItem])
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    }
                } else {
                    return orderItem;
                }
            })
            setOrder(newOrder);
        }
        //наименование товара в подсказку
        setAlertName(item.name);
    }

    //Удалить товар из корзины
    const removeFromBasket = (itemId) => {
        const newOrder = order.filter(el => el.id !== itemId);
        setOrder(newOrder);

    }

    //Добавить количество экз.товара прямо из корзины
    const incQuantity = (itemId) => {
        const newOrder = order.map((el) => {
            if (el.id === itemId) {
                const newQuantity = el.quantity + 1;
                return {
                    ...el,
                    quantity: newQuantity,
                }
            } else {
                return el;
            }
        })
        setOrder(newOrder);
    }

    //Уменьшить количество экз.товара прямо из корзины
    const decQuantity = (itemId) => {
        const newOrder = order.map((el) => {
            if ((el.id === itemId) && (el.quantity > 0)) {
                const newQuantity = el.quantity - 1;
                return {
                    ...el,
                    quantity: newQuantity,
                }
            } else {
                return el;
            }
        })
        setOrder(newOrder);
    }

    // Управление состоянием показа корзины
    const handleBasketShow = () => {
        setBasketShow(!isBasketShow);
    }

    //убираем наименование из подсказки (функц. вызывается по таймеру из Alert)
    const closeAlert = () => {
        setAlertName('');
    }

    // вызывается один раз, т.к массив пустой []
    useEffect(function getGoods() {
        fetch(API_URL, { headers: { 'Authorization': API_KEY } })
            .then(response => response.json())
            .then(data => {
                data.featured && setGoods(data.featured);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            })
    }, []);

    return <main className="container content">
        <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
        {loading ? <Preloader /> : <GoodsList goods={goods} addToBasket={addToBasket} />}
        {
            isBasketShow && (<BasketList order={order}
                handleBasketShow={handleBasketShow}
                removeFromBasket={removeFromBasket}
                incQuantity={incQuantity}
                decQuantity={decQuantity}
            />
            )}
        {
            alertName && <Alert name={alertName} closeAlert={closeAlert} />
        }
    </main>
}

export { Shop };