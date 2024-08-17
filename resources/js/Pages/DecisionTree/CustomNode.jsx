const CustomNode = ({ nodeDatum, toggleNode }) => {
    // Determine the x and y values based on the node name
     const x = (nodeDatum.name === "Yes" || nodeDatum.name === "No") ? -20 : -100;
     const y = (nodeDatum.name === "Yes" || nodeDatum.name === "No") ? 0 : -50;
 
     return (
         <g>
             <foreignObject
                 x={x}
                 y={y}
                 width="200"
                 height="100"
             >
                 <div
                     style={{
                         border: "1px solid #E0E0E0",
                         borderRadius: "0.5rem",
                         padding: "0.5rem",
                         backgroundColor: "#E0E0E0",
                         boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                         transition: "transform 0.3s, background-color 0.3s",
                         cursor: "pointer",
                         display: "inline-block",
                         width: "200px", // Set width explicitly
                         height: "100px", // Set height explicitly
                         overflowY: "auto" // Enable vertical scrolling
                     }}
                     onMouseEnter={(e) =>
                         (e.currentTarget.style.backgroundColor = "#D0D0D0")
                     }
                     onMouseLeave={(e) =>
                         (e.currentTarget.style.backgroundColor = "#E0E0E0")
                     }
                     onClick={() => toggleNode(nodeDatum)}
                 >
                     <h3 style={{ margin: "0", color: "black", fontSize: "0.8rem", fontWeight: "bold" }}>
                         {nodeDatum?.attributes?.question ? nodeDatum?.attributes?.question : nodeDatum?.name}
                     </h3>
                 </div>
             </foreignObject>
         </g>
     );
 };
 
 export default CustomNode;
 