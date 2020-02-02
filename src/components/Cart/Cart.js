import React, {Component} from 'react';
import Title from "../Title";
import {Consumer} from "../../context";
import CartColumns from './CartColumns'
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import CartTotals from './CartTotals'

class Cart extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const {cart} = value;
                    if (cart.length > 0) {
                        return (
                            <React.Fragment>
                                <Title name='Your' title="cart"/>
                                <CartColumns/>
                                <CartList value={value}/>
                                <CartTotals value={value}/>
                            </React.Fragment>
                        )

                    }
                    return <EmptyCart/>
                }}
            </Consumer>
        );
    }
}

export default Cart;