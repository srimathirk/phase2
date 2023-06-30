import React, { useState } from "react";

function CategoryFilter({ categories, selectedCategory, handleCategory }) {
  const [showCategories, setShowCategories] = useState(false);

  return (
    <div>
      <h2>Filter Categories</h2>
      {!showCategories && (
        <button onClick={() => setShowCategories(true)}>Show Categories</button>
      )}
      {showCategories && (
        <div>
          <button onClick={() => setShowCategories(false)}>
            Hide Categories
          </button>
          <div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  handleCategory(category);
                }}
                className={selectedCategory === category ? "active" : ""}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default CategoryFilter;
