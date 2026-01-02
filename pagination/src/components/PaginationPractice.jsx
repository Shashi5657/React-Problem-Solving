import { useState } from "react";

const App = () => {
  //mock data
  const data = Array.from({ length: 36 }, (_, i) => `Item-${i + 1}`);
  const [currentpage, setCurrentPage] = useState(1);
  const itemsPerpage = 10;
  //this is one way
  const startIndex = (currentpage - 1) * itemsPerpage;
  const lastIndex = startIndex + itemsPerpage;

  //this is other way
  const startIndex1 = currentpage * itemsPerpage - itemsPerpage;
  const lastIndex1 = currentpage * itemsPerpage;

  //current items to be displayed on the current page
  const currentDisplayItems = data.slice(startIndex, lastIndex);

  const totalPages = Math.ceil(data?.length / itemsPerpage);
  return (
    <div>
      {currentDisplayItems?.map((item, index) => {
        return (
          <div key={item}>
            <p>{item}</p>
          </div>
        );
      })}
      <div style={{ display: "flex", gap: "10px" }}>
        {Array.from({ length: totalPages }, (_, i) => (
          <button key={i} onClick={() => setCurrentPage(i + 1)}>
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
