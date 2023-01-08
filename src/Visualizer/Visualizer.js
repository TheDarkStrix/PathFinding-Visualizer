import { useEffect, useState } from "react";
import style from "./Visualizer.module.css";
import Node from "./Node/Node";

const Visualizer = () => {
  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    const nodes = [];
    for (let row = 0; row < 15; row++) {
      const currentRow = [];
      for (let col = 0; col < 50; col++) {
        currentNode = { col, row };
        currentRow.push(currentNode);
      }
      nodes.push(currentRow);
    }
    setNodes(nodes);
  }, []);

  console.log(nodes);
  return (
    <div className={style.grid}>
      {nodes.map((row, rowIndex) => {
        return (
          <div key={rowIndex}>
            {row.map((node, nodeIndex) => (
              <Node key={nodeIndex} />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default Visualizer;
