Components
  - Game (Our parent component)
    - This component manages the game state (history of the moves, and current step)
    - This also renders the board and users move history
    - As well as, passes the props to the board component
  - Board (Child of our game component)
    - This component renders our 9 squares and then passes props to each square
  - Square (Child of the board component)
    - This component renders either x or o and calls a function from the prop when clicked
   
State
  - Our state manages our games data
  - We have state stored in our game component so we can track the history of all the moves so far, the currentMove to keep track of which move we are on, xIsNext to determine if its x's or o's turn and currentSquares which holds the state for the current move.

Props
  - Props passes data from our parent components to our child components
  - The game component passes currentSquares and handlePlay function to the board component
  - The board then passes the sqaures value and onSquareClick to each square component
