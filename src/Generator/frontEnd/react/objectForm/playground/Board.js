import React from 'react';
import Square from './Square';
import Knight from './Knight';
import { canMoveKnight, moveKnight } from './Game';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function renderSquare(i, knightPosition) {
  const x = i % 8;
  const y = Math.floor(i / 8);
  const isKnightHere = x === knightPosition[0] && y === knightPosition[1];
  const black = (x + y) % 2 === 1;
  const piece = isKnightHere ? <Knight /> : null;

  return (
    <div
      key={i}
      style={{ width: '12.5%', height: '12.5%' }}
      onClick={() => handleSquareClick(x, y)}
    >
      <Square black={black}>{piece}</Square>
    </div>
  );
}

function renderPiece(x, y, [knightX, knightY]) {
  if (x === knightX && y === knightY) {
    return <Knight />;
  }
}

function handleSquareClick(toX, toY) {
  if (canMoveKnight(toX, toY)) {
    moveKnight(toX, toY);
  }
}

export default function Board({ knightPosition }) {
  const squares = [];
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPosition));
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {squares}
      </div>
    </DndProvider>
  );
}

// import React from 'react';
// import Square from './Square';
// import Knight from './Knight';

// function renderSquare(i, [knightX, knightY]) {
//   const x = i % 8;
//   const y = Math.floor(i / 8);
//   const isKnightHere = x === knightX && y === knightY;
//   const black = (x + y) % 2 === 1;
//   const piece = isKnightHere ? <Knight /> : null;

//   return (
//     <div key={i} style={{ width: '12.5%', height: '12.5%' }}>
//       <Square black={black}>{piece}</Square>
//     </div>
//   );
// }

// export default function Board({ knightPosition }) {
//   const squares = [];
//   for (let i = 0; i < 64; i++) {
//     squares.push(renderSquare(i, knightPosition));
//   }

//   return (
//     <div
//       style={{
//         width: '100%',
//         height: '100%',
//         display: 'flex',
//         flexWrap: 'wrap',
//       }}
//     >
//       {squares}
//     </div>
//   );
// }
