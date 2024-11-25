import { useContext } from 'react'
import { ShopContext } from '../context'

function BasketItem(props) {
    const {
        id,
        name,
        price,
        quantity,
    } = props

    //вместо props используем контекст и достаем функции (описаны в context):
    const { removeFromBasket, incQuantity, decQuantity } = useContext(ShopContext);

    return <li className="collection-item">
        {name}{' '}
        <i
            className='material-icons basket-quantity'
            onClick={() => decQuantity(id)}
        >
            remove
        </i>{' '}
        x{quantity}{' '}
        <i
            className='material-icons basket-quantity'
            onClick={() => incQuantity(id)}
        >
            add
        </i>{' '}
        = {price * quantity} руб.
        <span className="secondary-content"><i className="material-icons basket-delete" onClick={() => removeFromBasket(id)}>close</i>
        </span>
    </li>

}

export { BasketItem }

/*
//БЕЗ использования CONTEXT (только пример далали в example)
//Так как есть контекст:
import { useContext } from 'react'
import { ShopContext } from '../context'

function BasketItem(props) {
    const {
        id,
        name,
        price,
        quantity,
        removeFromBasket = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype
    } = props

    //вместо props используем контекст и достаем ключ example (описан в context):
    const { example } = useContext(ShopContext);
    console.log(example);

    return <li className="collection-item">
        {name}{' '}
        <i
            className='material-icons basket-quantity'
            onClick={() => decQuantity(id)}
        >
            remove
        </i>{' '}
        x{quantity}{' '}
        <i
            className='material-icons basket-quantity'
            onClick={() => incQuantity(id)}
        >
            add
        </i>{' '}
        = {price * quantity} руб.
        <span className="secondary-content"><i className="material-icons basket-delete" onClick={() => removeFromBasket(id)}>close</i>
        </span>
    </li>

}

export { BasketItem }

*/