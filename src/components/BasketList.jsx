import { BasketItem } from './BasketItem'

//Берем список из Collections в materializecss.com
function BasketList(props) {
    const { order = [], handleBasketShow = Function.prototype,
        removeFromBasket = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype
    } = props;

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity
    }, 0)

    return <ul className="collection basket-list">
        <li className="collection-item active">Корзина</li>
        {
            order.length ? order.map(item => (
                <BasketItem
                    key={item.id}
                    removeFromBasket={removeFromBasket}
                    incQuantity={incQuantity}
                    decQuantity={decQuantity}
                    {...item}
                />
            )) : <li className="collection-item">Корзина пуста</li>
        }

        <li className="collection-item active">
            Общая стоимость: {totalPrice} руб.
            <button className="secondary-content btn-small">Оформить</button>
        </li>
        <i className='material-icons basket-close' onClick={handleBasketShow}>close</i>
    </ul>
}

export { BasketList }
