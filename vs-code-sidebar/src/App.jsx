import { useState } from "react";
import "./App.css";
import Folder from "./components/Folder";
import explorer from "./data/explorer";
import useTraverseTree from "./hooks/use-traverse-tree";

function App() {
  const [explorerData, setExplorerData] = useState(explorer);

  const { insertNode, deleteNode, updateNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
  };

  const handleDeleteNode = (nodeId) => {
    const finalTree = deleteNode(explorerData, nodeId);
    setExplorerData(finalTree);
  };

  const handleUpdateNode = (nodeId, newName) => {
    const finalTree = updateNode(explorerData, nodeId, newName);
    setExplorerData(finalTree);
  };

  return (
    <div className="app">
      <Folder
        handleDeleteNode={handleDeleteNode}
        handleInsertNode={handleInsertNode}
        handleUpdateNode={handleUpdateNode}
        explorer={explorerData}
      />
    </div>
  );
}

export default App;
