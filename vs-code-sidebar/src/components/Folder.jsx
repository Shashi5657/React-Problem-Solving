import { useState } from "react";

const Folder = ({ handleInsertNode, explorer }) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowinput] = useState({
    visibility: false,
    isFolder: null,
  });

  const handleFolderClick = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);

    setShowinput({
      visibility: true,
      isFolder: isFolder,
    });
  };

  const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(explorer.id, e.target.value, showInput.isFolder);
      setShowinput({ ...showInput, visibility: false });
    }
  };

  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        <div className="folder" onClick={() => setExpand(!expand)}>
          <span>📂{explorer.name}</span>

          <div>
            <button onClick={(e) => handleFolderClick(e, true)}>Folder+</button>
            <button onClick={(e) => handleFolderClick(e, false)}>File+</button>
          </div>
        </div>

        <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
          {showInput.visibility && (
            <div className="inputContainer">
              <span>{showInput.isFolder ? "📂" : "📄"}</span>
              <input
                className="inputContainer__input"
                onKeyDown={onAddFolder}
                type="text"
                autoFocus
                onBlur={() => setShowinput({ ...showInput, visibility: false })}
              />
            </div>
          )}

          {explorer.items.map((item) => {
            return (
              <Folder
                handleInsertNode={handleInsertNode}
                explorer={item}
                key={item.id}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return <span className="file">📄{explorer.name}</span>;
  }
};

export default Folder;
