import { useState, useCallback } from "react";
import { List, AutoSizer } from "react-virtualized";
import "react-virtualized/styles.css";

const Virtualization = () => {
  const [items, setItems] = useState([]);

  const generateList = (listLength) => {
    const generateArr = Array.from({ length: listLength }, (_, index) => `List item ${index + 1}`);
    setItems(generateArr);
  };

  const rowRenderer = useCallback(
    ({ key, index, style }) => (
      <div
        key={key}
        style={{
          ...style,
          padding: "8px",
          borderBottom: "1px solid #eee",
          backgroundColor: "white",
        }}
      >
        {items[index]}
      </div>
    ),
    [items]
  );

  return (
    <div>
      <button onClick={() => generateList(100000)}>Generate List</button>
      {items.length > 0 && (
        <div style={{ height: "400px", width: "25%", margin: "0 auto" }}>
          <AutoSizer>
            {({ height, width }) => (
              <List
                width={width}
                height={height}
                rowHeight={40}
                rowCount={items.length}
                rowRenderer={rowRenderer}
                overscanRowCount={15}
              />
            )}
          </AutoSizer>
        </div>
      )}
    </div>
  );
};

export default Virtualization;
