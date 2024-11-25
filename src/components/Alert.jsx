
import { useEffect, useContext } from 'react';
import { ShopContext } from '../context';

function Alert() {
    const { alertName: name = '', closeAlert = Function.prototype } = useContext(ShopContext);

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000);

        return () => {
            clearTimeout(timerId);
        }
        // ниже коммент, чтобы js не выдавал предупреждение в [name] (можно не писать, просто игнорить)    
        // eslint-disable-next-line
    }, [name]);

    return <div id="toast-container">
        <div className="toast">{name} добавлен в корзину</div>
    </div>
}

export { Alert };


/*
//БЕЗ использования CONTEXT
import { useEffect } from 'react';

function Alert(props) {
    const { name = '', closeAlert = Function.prototype } = props;

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000);

        return () => {
            clearTimeout(timerId);
        }
        // ниже коммент, чтобы js не выдавал предупреждение в [name] (можно не писать, просто игнорить)    
        // eslint-disable-next-line
    }, [name]);

    return <div id="toast-container">
        <div className="toast">{name} добавлен в корзину</div>
    </div>
}

export { Alert };
*/