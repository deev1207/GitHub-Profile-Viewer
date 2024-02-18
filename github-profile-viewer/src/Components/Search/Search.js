import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './Search.css'
export default function Search({ onSubmit }){
    const [query, setQuery] = useState('');

    const handleSubmit = () => {
      onSubmit(query);
    };
    return(

      

          <div className='searchContainer'>
            <div className='search'>
            <input
            className='input'
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
            />
            
           
            <button className="iconButton" onClick={handleSubmit} > <FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            </div>
            
          </div>

    )
}