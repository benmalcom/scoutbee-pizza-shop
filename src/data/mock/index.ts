import { v4 as uuid } from 'uuid';

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

export const pizzaStatuses: string[] = ['Waiting', 'Ready'];

export const pizzaIngredients: PizzaIngredient[] = [
  { name: 'Cheese', id: uuid() },
  { name: 'Bacon', id: uuid() },
  { name: 'Mushrooms', id: uuid() },
  { name: 'Ananas', id: uuid() },
];

