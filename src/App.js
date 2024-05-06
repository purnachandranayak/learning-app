
import React, { useState } from 'react';
import './App.css';

function App() {

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="container mt-5">
      <section>
        <h3 className="text-primary pb-2 mb-4 " style={{ borderBottom: '3px solid #007bff' }}>Ninja Reviews</h3>
        <div className="d-flex justify-content-end mb-4">
          <div className="mr-5"> Filter reviews by category:
            <div className="btn-group">
              <button className="btn border-0 text-primary" style={{ textDecoration: 'underline' }} onClick={() => handleCategoryClick('PS5')}>PS5</button>
              <button className="btn border-0 text-primary" style={{ textDecoration: 'underline' }} onClick={() => handleCategoryClick('Xbox')}>Xbox</button>
              <button className="btn border-0 text-primary" style={{ textDecoration: 'underline' }} onClick={() => handleCategoryClick('Switch')}>Switch</button>
            </div>
          </div>
        </div>
      </section>

      {selectedCategory === 'PS5' && (
        <div className='category-section'>
          <h2>PS5</h2>

        </div>
      )}

      {selectedCategory === 'Xbox' && (
        <div className='category-section'>
          <h2>Xbox</h2>

        </div>
      )}
      {selectedCategory === 'Switch' && (
        <div style={{ paddingTop: '20px' }}>
          <h2>Switch</h2>

        </div>
      )}

      <section style={{ backgroundColor: 'white', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', marginBottom: '25px', position: 'relative' }}>
        <div className="d-flex">
          <div className="box mr-3 ninja-review-color" style={{ marginTop: '-10px', marginLeft: '-10px' }}>6</div>
          <div className='m-4'>
            <h5 className="font-weight-bold">Biomutant</h5>
            <div>
              <p style={{ color: 'gray', fontSize: '14px' }}>PS5 Xbox</p>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p className="btn border-0 text-primary" style={{ textDecoration: 'underline' }}>Read more</p>
          </div>
        </div>
      </section>
      <section style={{ backgroundColor: 'white', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', marginBottom: '25px', position: 'relative' }}>
        <div className="d-flex">
          <div className="box mr-3 ninja-review-color" style={{ marginTop: '-10px', marginLeft: '-10px' }}>6</div>
          <div className='m-4'>
            <h5 className="font-weight-bold">Biomutant</h5>
            <div>
              <p style={{ color: 'gray', fontSize: '14px' }}>PS5 Xbox</p>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p className="btn border-0 text-primary" style={{ textDecoration: 'underline' }}>Read more</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

