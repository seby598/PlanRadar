import React, { useRef, useState } from 'react';
import { Ticket } from '../../models/ticket.model';
import TicketItem from '../Ticket/TicketItem';

interface VirtualListProps {
  items: Ticket[];
  rowHeight: number;
}

const VirtualList: React.FC<VirtualListProps> = ({ items, rowHeight }) => {
  const [startIndex, setStartIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const containerHeight = 900;
  const numberOfVisibleItems = Math.ceil(containerHeight / rowHeight);
  const buffer = 10;

  const handleScroll = () => {
    if (containerRef.current) {
      const newStartIndex = Math.floor(containerRef.current.scrollTop / rowHeight);
      setStartIndex(newStartIndex);
    }
  };

  const endIndex = startIndex + numberOfVisibleItems + buffer;
  const itemsToRender = items.slice(startIndex, Math.min(endIndex, items.length));

  return (
        <div 
          ref={containerRef} 
          onScroll={handleScroll} 
          style={{ 
            overflowY: 'auto', 
            height: `${containerHeight}px`, 
            width: '50%',
            margin: '20px auto',
            position: 'relative',
          }}
          data-testid="virtual-list-container"
        >
            {itemsToRender.map((item, index) => (
                <div key={item.id} style={{ height: `${rowHeight}px`, top: `${(startIndex + index) * rowHeight}px`, position: 'absolute', width: '100%' }}>
                    <TicketItem ticket={item} />
                </div>
            ))}
        </div>
  );
};

export default VirtualList;