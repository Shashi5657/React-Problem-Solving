import { useState } from "react";

const Folder = ({ explorer }) => {
  const [expand, setExpand] = useState(false);

  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        <div>
          <span onClick={() => setExpand(!expand)}>📂{explorer.name}</span>
        </div>

        <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
          {explorer.items.map((item) => {
            return <Folder explorer={item} />;
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <span>📄{explorer.name}</span>
      </div>
    );
  }
};

export default Folder;
