import React, { useState, useEffect } from 'react';
import { NavDropdown } from 'react-bootstrap';

const NavMenu = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories from the API when the component mounts
    fetch('http://127.0.0.1:8000/api/categorys/')
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error('Error fetching categories:', error));
  }, []);

  return (
    <NavDropdown className='nav-header' title="COLLECTION" id="basic-nav-dropdown">
      {categories.map((category) => (
        <NavDropdown.Item key={category.id} href={`/category/${category.id}`}>
          {category.name}
        </NavDropdown.Item>
      ))}
      <NavDropdown.Divider />
     
    </NavDropdown>
  );
};

export default NavMenu;