import { v4 as uuid } from 'uuid';
import { sample } from 'lodash';

export interface PizzaIngredient {
  name: string;
  id: string;
}

export interface Pizza {
  id?: string;
  name: string;
  status: string;
  ingredients: PizzaIngredient[];
  timestamp: number
}

const pizzaNames: string[] = [
  'Margherita', 'Marinara', 'Quattro Stagioni', 'Carbonara', 'Frutti di Mare',
  'Romana', 'Fattoria', 'Schiacciata', 'Prosciutto', 'Quattro Formaggi', 'Crudo',
  'Napoletana', 'Pugliese', 'Montanara', 'Emiliana', 'Americana', 'Sarda', 'Tonno',
];

export const pizzaStatuses: string[] = ['Waiting', 'Ready'];

export const pizzaIngredients: PizzaIngredient[] = [
  { name: 'Cheese', id: uuid() },
  { name: 'Bacon', id: uuid() },
  { name: 'Mushrooms', id: uuid() },
  { name: 'Ananas', id: uuid() },
  { name: 'Tomato sauce', id: uuid() },
  { name: 'Mozzarella', id: uuid() },
  { name: 'Parmesan', id: uuid() },
  { name: 'Eggs', id: uuid() },
  { name: 'Bacon', id: uuid() },
];

export const createMockPizzaList = () => {
  // Generate 30 mock pizza
  const items: Pizza[] = [];
  for (let i = 0; i < 30; i++) {
    const name: string = sample(pizzaNames) || pizzaNames[0];
    const status: string = sample(pizzaStatuses) || pizzaStatuses[0];
    const randomSize =  Math.floor(Math.random() * (pizzaIngredients.length - 1 + 1)) + 1;
    items.push({
      id: uuid(),
      name,
      status,
      ingredients: pizzaIngredients.slice(0, randomSize),
      timestamp: Date.now()
    });
  }
  return items;
};

