import { useState } from "react";

const VirtualizationList = ({ list, width, height, innerHeight }) => {
  const [indices, setIndices] = useState([0, Math.floor(height / innerHeight) - 1]);

  const visibleItems = list.slice(indices[0], indices[1] + 1);

  const handleScroll = (e) => {
    const { scrollTop } = e.target;
    const newStartIndex = Math.floor(scrollTop / innerHeight);
    const newEndIndex = newStartIndex + Math.floor(height / innerHeight) - 1;
    setIndices([newStartIndex, newEndIndex]);
  };

  return (
    <div style={{ width, height, overflowY: "auto", background: "grey" }} onScroll={handleScroll}>
      <div style={{ height: list.length * innerHeight, position: "relative" }}>
        {visibleItems.map((item, index) => (
          <div
            key={indices[0] + index} // Add key prop
            style={{
              height: innerHeight,
              background: "coral",
              position: "absolute",
              top: (indices[0] + index) * innerHeight, // Corrected calculation
              width: "100%", // Ensure full width
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VirtualizationList;
