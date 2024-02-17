import { useEffect, useState, useRef } from 'react';

export default function Search({ onSubmit }){
    const [query, setQuery] = useState('');

    const handleSubmit = () => {
      onSubmit(query);
    };
    return(

      

          <div>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
            />
            <button onClick={handleSubmit}>Search</button>
          </div>

    )
}