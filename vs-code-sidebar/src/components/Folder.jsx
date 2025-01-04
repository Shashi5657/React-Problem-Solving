import { useState } from "react";

const Folder = ({
  handleUpdateNode,
  handleDeleteNode,
  handleInsertNode,
  explorer,
}) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowinput] = useState({
    visibility: false,
    isFolder: null,
  });
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(explorer.name);

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

  const onDelete = (e) => {
    e.stopPropagation();
    handleDeleteNode(explorer.id);
  };

  const onEdit = (e) => {
    e.stopPropagation();
    setIsEditing(true);
  };

  const onUpdate = (e) => {
    if (e.keyCode === 13 && newName.trim()) {
      handleUpdateNode(explorer.id, newName);
      setIsEditing(false);
    }
  };

  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        <div className="folder" onClick={() => setExpand(!expand)}>
          {isEditing ? (
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              onKeyDown={onUpdate}
              onBlur={() => setIsEditing(false)}
              autoFocus
            />
          ) : (
            <span>📂{explorer.name}</span>
          )}

          <div>
            <button onClick={(e) => handleFolderClick(e, true)}>Folder+</button>
            <button onClick={(e) => handleFolderClick(e, false)}>File+</button>
            <button onClick={onDelete}>❌</button>
            <button onClick={onEdit}>✏️</button>
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
                handleDeleteNode={handleDeleteNode}
                handleInsertNode={handleInsertNode}
                handleUpdateNode={handleUpdateNode}
                explorer={item}
                key={item.id}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div style={{ display: "flex", alignItems: "end" }}>
        {isEditing ? (
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            onKeyDown={onUpdate}
            onBlur={() => setIsEditing(false)}
            autoFocus
          />
        ) : (
          <span>📄{explorer.name}</span>
        )}
        <span onClick={onDelete}>❌</span>
        <span onClick={onEdit}>✏️</span>
      </div>
    );
  }
};

export default Folder;
