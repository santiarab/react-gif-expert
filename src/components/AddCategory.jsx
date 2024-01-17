import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setinputValue] = useState('');
  const onInputChange = ({ target }) => {
    setinputValue(target.value);
  };
  const onSubmit = event => {
    event.preventDefault();
    const newInputValue = inputValue.trim();
    if (newInputValue.length <= 1) return;
    onNewCategory(newInputValue);
    setinputValue('');
  };
  return (
    <form onSubmit={event => onSubmit(event)}>
      <input
        type="text"
        placeholder="Buscador de gifs"
        value={inputValue}
        onChange={event => onInputChange(event)}
      />
    </form>
  );
};
