// CategoryScreen.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, createCategory, updateCategory, deleteCategory } from '../actions/CategoryAction';

const CategoryScreen = () => {
  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector((state) => state.category);
  const [name, setName] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [categoryId, setCategoryId] = useState(null);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleDelete = (categoryId) => {
    if (window.confirm('Are you sure you want to delete this category?')) {
      dispatch(deleteCategory(categoryId));
    }
  };

  const handleAddCategory = () => {
    dispatch(createCategory({ name }));
    setName('');
  };

  const handleUpdateCategory = () => {
    if (categoryId) {
      dispatch(updateCategory(categoryId, { name }));
      setName('');
      setEditMode(false);
      setCategoryId(null);
    }
  };

  const handleEdit = (categoryId, categoryName) => {
    setName(categoryName);
    setEditMode(true);
    setCategoryId(categoryId);
  };

  return (
    <div className='loginPage'>
      <h1>Category List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div>
          <ul>
            {categories.map((category) => (
              <li key={category.id}>
                {category.name}{' '}
                <button onClick={() => handleEdit(category.id, category.name)}>Edit</button>{' '}
                <button onClick={() => handleDelete(category.id)}>Delete</button>
              </li>
            ))}
          </ul>
          <div>
            {editMode ? (
              <div>
                <h2>Edit Category</h2>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <button onClick={handleUpdateCategory}>Update</button>
                <button onClick={() => setEditMode(false)}>Cancel</button>
              </div>
            ) : (
              <div>
                <h2>Add Category</h2>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <button onClick={handleAddCategory}>Add</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryScreen;
