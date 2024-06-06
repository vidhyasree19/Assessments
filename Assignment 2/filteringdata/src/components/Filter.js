import React from 'react';

const Filter = ({ filters, setFilters }) => {
  const categories = ['beauty', 'furniture', 'fragrances', 'groceries'];

  const handleCategoryChange = (e) => {
    setFilters({ ...filters, category: e.target.value });
  };

  const handlePriceRangeChange = (e, index) => {
    const newRange = [...filters.priceRange];
    newRange[index] = Number(e.target.value);
    setFilters({ ...filters, priceRange: newRange });
  };

  const handleAvailabilityChange = (e) => {
    setFilters({ ...filters, availability: e.target.value });
  };

  return (
    <div className="filter">
      <h2>Filters</h2>
      <div>
        <label>Category: </label>
        <select value={filters.category} onChange={handleCategoryChange}>
          <option value="">All</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Price Range: </label>
        <input
          type="number"
          value={filters.priceRange[0]}
          onChange={(e) => handlePriceRangeChange(e, 0)}
          min="0"
        />
        <span> - </span>
        <input
          type="number"
          value={filters.priceRange[1]}
          onChange={(e) => handlePriceRangeChange(e, 1)}
          max="1000"
        />
      </div>
      <div>
        <label>Availability: </label>
        <select value={filters.availability} onChange={handleAvailabilityChange}>
          <option value="">All</option>
          <option value="inStock">In Stock</option>
          <option value="lowStock">Low Stock</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
