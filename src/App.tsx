import React from 'react';
import VirtualList from './components/VirtualList/VirtualList';
import mockTickets from './utils/mockTickets';

function App() {
  const rowHeight = 150;

  return (
    <div className="App">
      <main>
        <VirtualList items={mockTickets} rowHeight={rowHeight} />
      </main>
    </div>
  );
}

export default App;
