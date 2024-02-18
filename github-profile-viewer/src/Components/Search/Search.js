import { useEffect, useState, useRef } from 'react';
import './Search.css'
export default function Search({ onSubmit }){
    const [query, setQuery] = useState('');

    const handleSubmit = () => {
      onSubmit(query);
    };
    return(

      

          <div className='search'>
            <input
            className='input'
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
            />
            <button onClick={handleSubmit} >Search</button>
          </div>

    )
}