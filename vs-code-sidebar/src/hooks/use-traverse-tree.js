const useTraverseTree = () => {
  function insertNode(tree, folderId, item, isFolder) {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        name: item,
        isFolder,
        items: [],
      });
      return tree;
    }

    let latestNode = [];

    latestNode = tree.items.map((ob) => {
      return insertNode(ob, folderId, item, isFolder);
    });

    return { ...tree, items: latestNode };
  }

  function deleteNode(tree, nodeId) {
    if (tree.id === nodeId) {
      return null;
    }

    let updatedItems = tree.items
      .map((item) => deleteNode(item, nodeId))
      .filter(Boolean);

    return { ...tree, items: updatedItems };
  }

  function updateNode(tree, nodeId, newName) {
    if (tree.id === nodeId) {
      tree.name = newName;
      return tree;
    }

    const updatedItems = tree.items.map((item) =>
      updateNode(item, nodeId, newName)
    );

    return { ...tree, items: updatedItems };
  }
  return { insertNode, deleteNode, updateNode };
};

export default useTraverseTree;
