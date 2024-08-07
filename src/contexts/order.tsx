import React, { createContext, useState, useContext, ReactNode } from "react";
import {  Order } from "src/interfaces/TProduct";


interface OrderContextType {
  order:  Order | null;
  setOrder: React.Dispatch<React.SetStateAction<Order | null>>;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const useOrder = (): OrderContextType => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

interface OrderProviderProps {
  children: ReactNode;
}

export const OrderProvider: React.FC<OrderProviderProps> = ({ children }) => {
  const [order, setOrder] = useState<Order | null>(null);

  return (
    <OrderContext.Provider value={{ order,setOrder }}>
      {children}
    </OrderContext.Provider>
  );
};
