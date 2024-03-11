// import React, { useEffect, useState } from 'react'; // Если не импортировано
import React, { useEffect, useState } from 'react';

const App: React.FC = () => {
  const [areas, setAreas] = useState<Array<{ id: number, tittle: string, content: string, image: string }>>([]);

  useEffect(() => {
    fetchAreas();
  }, []);

  const fetchAreas = async () => {
    try {
      const response = await fetch('http://kinoarea-react/src/api/connect.php');
      const data = await response.json();
      setAreas(data);
    } catch (error) {
      console.error('Error fetching areas:', error);
    }
  };

  return (
    <div>
      <h1 className='text-slate-600'>Area List</h1>
      <ul>
        {areas.map(area => (
          <li key={area.id}>
            {area.tittle} - {area.content} - {area.image}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
