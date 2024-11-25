
import { useContext } from "react";
import { ShopContext } from "../context";

function GoodsItem(props) {
    const {
        id,
        name,
        description,
        price,
        //full_background,
        image,

    } = props;

    const { addToBasket } = useContext(ShopContext);

    // карточка (card) из materializecss.com
    return <div className="card">
        <div className="card-image">
            <img src={image} alt={name} />
        </div>
        <div className="card-content">
            <span className="card-title">{name}</span>
            <p>{description}</p>
        </div>
        <div className="card-action">
            <button onClick={() => addToBasket({ id, name, price })} className="btn">Купить</button>
            <span className="right" style={{ fontSize: '1.8rem' }}>{price} руб.</span>
        </div>
    </div>
}

export { GoodsItem };


/*
//БЕЗ использования CONTEXT

function GoodsItem(props) {
    const {
        id,
        name,
        description,
        price,
        //full_background,
        image,

        addToBasket = Function.prototype

    } = props;

    // карточка (card) из materializecss.com
    return <div className="card">
        <div className="card-image">
            <img src={image} alt={name} />
        </div>
        <div className="card-content">
            <span className="card-title">{name}</span>
            <p>{description}</p>
        </div>
        <div className="card-action">
            <button onClick={() => addToBasket({ id, name, price })} className="btn">Купить</button>
            <span className="right" style={{ fontSize: '1.8rem' }}>{price} руб.</span>
        </div>
    </div>
}

export { GoodsItem };

*/

/*
//берем ключи из ответа json
{
    "id": "SID_Placeholder_84",
    "name": "Go With The Flow",
    "description": "",
    "type": "sparks_song",
    "rarity": "uncommon",
    "internalRarity": "uncommon",
    "price": 500,
    "priceNoDiscount": 500,
    "categories": "Panel 0",
    "priority": -1,
    "banner": "",
    "offer": "v2:/314dc1ea16eefa4612bc471536fb6e7b809a344bffe80f4f5c9f92eb0f9e8969",
    "releaseDate": "2023-12-13",
    "lastAppearance": "2024-10-31",
    "interest": 0,
    "giftAllowed": true,
    "buyAllowed": true,
    "image": "https://media.fortniteapi.io/images/c7aaab5d95d9cd4ab4930b7b29e0f318/transparent.png",
    "icon": "https://media.fortniteapi.io/images/c7aaab5d95d9cd4ab4930b7b29e0f318/transparent.png",
    "full_background": "https://media.fortniteapi.io/images/c7aaab5d95d9cd4ab4930b7b29e0f318/background_full.ru.png",
    "items": [
        "sid_placeholder_84"
    ],
    "otherItemsDetails": [],
    "videos": [],
    "customColors": {}
},
*/