import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import BookComponent from './BookComponent';

const Product = ({ allBooks }) => {
  const location = useLocation();
  const { category } = location.state;
  const cate = ["Romance", "Manga", "Sci-Fi", "Mystery", "Biography", "Horror"]; // Corrected spelling for Mystery and Biography

  const [activeCate, setActiveCate] = useState([]);

  const handleClick = (e, cate) => {
    e.preventDefault();

    if (activeCate.includes(cate)) {
      setActiveCate(activeCate.filter(item => item !== cate)); // Removes cate if it exists
    } else {
      setActiveCate([...activeCate, cate]); // Adds cate if it doesn't exist
    }
  };

  return (
    <div className='mt-5' style={{ backgroundColor: '#f3f4f6' }}>
      <div className='d-flex m-auto justify-content-between col-10'>
        <div style={{ flexBasis: '23%' }}>
          <h3>Filter</h3>
          <div className='bg-white d-flex flex-column gap-3 p-3 rounded-3'>
            <div className='d-flex justify-content-between'>
              <h5>Genres</h5>
              <a href='' className='text-danger'><h6>Clear</h6></a>
            </div>
            <div className='d-flex flex-wrap gap-1'>
              {cate.map(c => (
                <div key={c} className='mt-2 mb-2'>
                  <a href='' onClick={e => handleClick(e, c)} className='text-decoration-none m-2'>
                    <span className='pt-1 pb-1 p-2 border border-danger' 
                      style={{
                        color: activeCate.includes(c) ? 'white' : 'red',
                        backgroundColor: activeCate.includes(c) ? 'red' : 'transparent',
                      }}>
                      {c}
                    </span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='col-9'>
          <BookComponent allBooks={allBooks} activeCate={activeCate} />
        </div>
      </div>
    </div>
  );
};

export default Product;

