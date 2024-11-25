import { createContext, useReducer } from 'react'
import { reducer } from './reducer'

//Константа, которая собственно и является контекстом и везде будет использоваться (ShopContext.Provider)
export const ShopContext = createContext();

//присваиваем значения по умолчанию (до использования reducer были в shop)
const initialState = {
    goods: [],
    loading: true,
    order: [],
    isBasketShow: false,
    alertName: ''
}

//Обертка для всего приложения для использования контекста
export const ContextProvider = ({ children }) => {
    //передаем в reducer initialState и получаем набор ключей value. Вторым аргументом приходит функция - диспетчер событий
    const [value, dispatch] = useReducer(reducer, initialState)

    //если что-то получаем (как itemId в addToBasket и др.) - то кладем в ключ payload, 

    value.closeAlert = () => {
        dispatch({ type: 'CLOSE_ALERT' })
    }

    value.removeFromBasket = (itemId) => {
        dispatch({ type: 'REMOVE_FROM_BASKET', payload: { id: itemId } })
    }

    value.addToBasket = (item) => {
        dispatch({ type: 'ADD_TO_BASKET', payload: item })
    }

    value.incQuantity = (itemId) => {
        dispatch({ type: 'INCREMENT_QUANTITY', payload: { id: itemId } })
    }

    value.decQuantity = (itemId) => {
        dispatch({ type: 'DECREMENT_QUANTITY', payload: { id: itemId } })
    }

    value.handleBasketShow = () => {
        dispatch({ type: 'TOGGLE_BASKET' })
    }

    value.setGoods = (data) => {
        dispatch({ type: 'SET_GOODS', payload: data })
    }

    //пробрасывать всем children будем value
    return <ShopContext.Provider value={value}>
        {children}
    </ShopContext.Provider>
}

