import React, { useEffect, useState } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import Stockdata from '../Stockdata'; // Import your Stockdata

const ResponsiveGridLayout = WidthProvider(Responsive);

const GridLayout = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem('myArray');
    if (storedData) {
      const parsedData = JSON.parse(storedData);

      const newData = Stockdata.filter(item =>
        item.property === parsedData || item.value === parsedData
      );

      setData(newData);
    } else {
      setData(Stockdata);
    }
  }, []);

  // Define the layout for side-by-side positioning
  const layout = data.length > 0 ? data.map((item, index) => ({
   
  })) : [];

  return (
    <ResponsiveGridLayout
      className="layout"
      layout={layout}
      cols={{ lg: 7, md: 3, sm: 2, xs: 1, xxs: 1 }} // Adjust columns based on screen size
      rowHeight={200} // Height of each row
      width={1500} // Width of the grid layout
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
    >
      {data.map((item) => (
        <div
          key={item.property}
          className="bg-blue-300 border border-gray-300 flex items-center justify-center text-lg text-black p-4 rounded shadow"
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
        >
          <strong>{item.property}:</strong> {item.value}
        </div>
      ))}
    </ResponsiveGridLayout>
  );
};

export default GridLayout;

// import React from 'react';
// import GridLayout from 'react-grid-layout';
// import 'react-grid-layout/css/styles.css';
// import 'react-resizable/css/styles.css';

// const GridLayout2 = () => {
//   // Define the layout configuration for each grid item
//   const layoutConfig = [
//     { i: 'item1', x: 1, y: 0, w: 3, h: 4 },
//     { i: 'item2', x: 5, y: 0, w: 2, h: 4 },
//     { i: 'item3', x: 8, y: 0, w: 3, h: 4 },

//     { i: 'item4', x: 3, y: 1, w: 4, h: 4 },
//     { i: 'item5', x: 4, y: 1, w: 4, h: 4 },
    
   

//   ];

//   return (
//     <GridLayout className="example-layout mt-11 " layout={layoutConfig} cols={12} rowHeight={10} width={1900}  margin={[10, 60]}>
//       <div key="item1" style={{ background: '#ff4d4f' }}>Item 1</div>
//       <div key="item2" style={{ background: '#40a9ff' }}>Item 2</div>
//       <div key="item3" style={{ background: '#73d13d' }}>Item 3</div>

//       <div key="item4" style={{ background: '#73d13d' }}>Item 5</div>
//       <div key="item5" style={{ background: '#73d13d' }}>Item 6</div>


     

//     </GridLayout>
//   );
// };

// export default GridLayout2;