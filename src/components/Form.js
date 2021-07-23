import React from 'react';

function Form({ onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="item"
        id="item"
        placeholder="Enter item name"
        required
      />
      <input
        type="number"
        name="units"
        id="units"
        placeholder="Enter quantity"
        required
      />
      <input
        type="number"
        name="price"
        id="price"
        placeholder="Enter price per unit"
        required
      />
      <input type="submit" value="+ Add Item" />
    </form>
  );
}
 export default Form;