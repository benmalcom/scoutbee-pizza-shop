import React, { useContext } from 'react';
import Select from 'react-select';
import { useForm, Controller } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import './Make.scss';
import { Pizza, PizzaIngredient, pizzaIngredients } from '../../../data/mock';
import { PizzaItemContext } from '../../../components/PizzaContext';

const Make = () => {
  const { register, errors, handleSubmit, control } = useForm();
  const { setItems } = useContext(PizzaItemContext);
  const history = useHistory();

  const onSubmit = (data: any) => {
    const { name, ingredients = [] } = data;
    const payload: Pizza = {
      status: 'Waiting',
      id: uuid(),
      timestamp: Date.now(),
      name,
      ingredients: ingredients.map(({ label, value }: any)  => ({ name: label, id: value }))
    };
    setItems((current: Pizza[]) => [payload, ...current]);
    history.push('/');
  };

  const options = pizzaIngredients.map((item: PizzaIngredient) => ({ label: item.name, value: item.id }));

  return <div className="Make shadow-sm p-5 bg-white rounded col-xl-5 col-lg-5 col-md-6 col-sm-8 col-11 mx-auto mt-5">
    <h3 className="mb-4">Make Pizza</h3>

    <form data-testid="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label>Pizza name</label>
        <input data-testid="name" name="name" className="form-control" placeholder="Enter name..." ref={register({
          required: 'This name is required.',
          minLength: {
            value: 5,
            message: 'This input must exceed 5 characters',
          },
        })}/>
        {errors.firstName && <small className="form-text text-danger">{errors.firstName.message}</small>}
      </div>
      <div className="form-group">
        <label htmlFor="ingredients">Ingredients</label>
        <Controller
          control={control}
          render={({ onChange, onBlur, value }): any => (
            // @ts-ignore
            <Select
              inputId="ingredients"
              blurInputOnSelect={false}
              isClearable
              hideSelectedOptions
              placeholder="Select..."
              classNamePrefix="react-select"
              isSearchable
              isMulti
              options={options}
              value={value}
              onChange={(selected: PizzaIngredient[]) => onChange(selected)}
              onBlur={onBlur}
            />

          )}
          name="ingredients"
          rules={{ required: 'Add at least one ingredient' }}
        />
        {errors.ingredients && <small className="form-text text-danger">{errors.ingredients.message}</small>}
      </div>
      <button id="submit" type="submit" className="btn btn-info">Submit</button>
    </form>

  </div>;
};

export default Make;
