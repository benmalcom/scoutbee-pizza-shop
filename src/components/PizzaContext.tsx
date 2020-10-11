import React, { ReactNode, createContext, useEffect, useState } from 'react';
import { Pizza } from '../data/mock';

interface ProviderProps {
  children: ReactNode
}

interface PizzaItemContextType{
  items: Pizza[];
  setItems: Function
}

const PizzaItemContext = createContext<PizzaItemContextType>({
  items: [],
  setItems: (value: string) => {}
});

function PizzaItemProvider(props: ProviderProps) {
  const [items, setItems] = useState<Pizza[]>(() => {
    try {
      const serializedState = localStorage.getItem('pizza-items');
      if (!serializedState) {
        return [];
      }
      return JSON.parse(serializedState);
    } catch (error) {
      return [];
    }
  });
  useEffect(() => {
    localStorage.setItem('pizza-items', JSON.stringify(items));
  }, [items]);
  return (
    <PizzaItemContext.Provider
      value={{
        items,
        setItems,
      }}
    >
      {props.children}
    </PizzaItemContext.Provider>
  );
}

export { PizzaItemContext, PizzaItemProvider };
