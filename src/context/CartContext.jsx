import { createContext, useState } from "react";

export const CartContext = createContext();


function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const name = "John Doe";

    const addToCart = (book) => {
        setCart(prev => {
            const existing = prev.find(item => item.id === book.id);

            if (existing) {
                return prev.map(item =>
                    item.id === book.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prev, { ...book, quantity: 1 }];
            }
        });

    };


    const decreaseQty = (id) => {
        setCart(cart.map(item =>
            item.id === id
                ? { ...item, quantity: item.quantity - 1 }
                : item
        ).filter(item => item.quantity > 0));
    };

    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <>
            <CartContext.Provider value={{ cart, addToCart, decreaseQty, removeFromCart, total }}>
                {children}
            </CartContext.Provider>
        </>
    );
}

export default CartProvider;