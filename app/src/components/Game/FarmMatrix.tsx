import React from 'react';
import { Box, Typography } from "@mui/material";

interface FarmProps {
  farm: any;
  onPlaceItem: (x: number, y: number, itemId: number) => void;
}

const ITEM_EMOJIS: { [key: number]: string } = {
  0: "⬜",  // Empty space
  1: "🏠", // Item 1: House
  2: "🌳", // Item 2: Tree
  3: "🌾", // Item 3: Wheat field
  // ... add more as needed
};

const FarmMatrix: React.FC<FarmProps> = ({ farm, onPlaceItem }) => {
  const renderMatrix = () => {
    const matrixSize = farm.size || 5;  // Default size to 5 if not initialized

    let matrix: number[][] = [];
    for (let i = 0; i < matrixSize; i++) {
      matrix[i] = [];
      for (let j = 0; j < matrixSize; j++) {
        matrix[i][j] = farm.matrix && farm.matrix[i] && farm.matrix[i][j] ? farm.matrix[i][j] : 0;
      }
    }
    return matrix;
  };

  const matrixToRender = renderMatrix();

  return (
    <Box>
      {matrixToRender.map((row, rowIndex) => (
        <Box key={rowIndex} display="flex">
          {row.map((itemId, colIndex) => (
            <Box
              key={colIndex}
              onClick={() => onPlaceItem(rowIndex, colIndex, 1)}
              sx={{
                m: 1,
                p: 2,
                border: "1px solid #ddd",
                cursor: "pointer",
                width: "40px",
                height: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Typography variant="h6">
                {ITEM_EMOJIS[Number(itemId.toString())] || "⬜"}
              </Typography>
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default FarmMatrix;
