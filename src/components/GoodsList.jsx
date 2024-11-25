
import { useContext } from 'react';
import { ShopContext } from '../context'
import { GoodsItem } from './GoodsItem'

//Props-ов больше нет. Используем context
function GoodsList() {
    const { goods = [] } = useContext(ShopContext);

    if (!goods.length) {
        return <h3>Nothing here</h3>
    }

    return <div className="goods">
        {goods.map(item => (
            <GoodsItem key={item.id} {...item} />
        ))}
    </div>
}

export { GoodsList };

/*
//БЕЗ использовани CONTEXT

import { GoodsItem } from './GoodsItem'

function GoodsList(props) {
    const { goods = [], addToBasket = Function.prototype } = props;

    if (!goods.length) {
        return <h3>Nothing here</h3>
    }

    return <div className="goods">
        {goods.map(item => (
            <GoodsItem key={item.id} {...item} addToBasket={addToBasket} />
        ))}
    </div>
}

export { GoodsList };
*/