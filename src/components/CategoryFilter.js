import React from "react";

function CategoryFilter({ categories, selectedCategory, onSelectedCategory }) {

  const categoryButtons = categories.map(category => (
    <button 
    key={category} 
    onClick={(e) => onSelectedCategory(category)}
    className={category === selectedCategory ? "selected" : null}
    >{category}</button>
  ))

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
