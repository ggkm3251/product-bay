import { createContext, useContext, useState, ReactNode } from 'react';

interface CartProviderProps {
  children: ReactNode;
}

const CartContext = createContext<any>(null);

function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<any[]>([]);

  const addToCart = (product: any) => {
    setCart(prevCart => [...prevCart, product]);
  };

  const removeFromCart = (productId: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
