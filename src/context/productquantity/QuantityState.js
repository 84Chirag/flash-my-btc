import React, {useState} from 'react';
import QuantityContext from './quantityContext';

const QuantityState = (props) => {
    const [quantity, setQuantity] = useState(1); // Initialize quantity with 1

    const increase = () => {
        setQuantity(quantity + 1);
    };

    const decrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
  return (
    <QuantityContext.Provider value={{quantity, increase, decrease}}>
        {props.children}
    </QuantityContext.Provider>
  )
}

export default QuantityState;