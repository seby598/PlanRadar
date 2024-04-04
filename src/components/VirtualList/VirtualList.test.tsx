import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import VirtualList from './VirtualList';
import { Ticket } from '../../models/ticket.model';

describe('VirtualList Component', () => {
  const mockTickets: Ticket[] = Array.from({ length: 10000 }, (_, i) => ({
    id: i,
    subject: `Ticket ${i}`,
    priority: 'High',
    status: 'Open',
    description: 'Sample description'
  }));

  const rowHeight = 50;
  const containerHeight = 900;
  const buffer = 10;

  test('renders correct initial subset of items', () => {
    render(<VirtualList items={mockTickets} rowHeight={rowHeight} />);
    const initialRenderCount = Math.ceil(containerHeight / rowHeight) + buffer;
    
    for (let i = 0; i < initialRenderCount; i++) {
      expect(screen.getByText(`Ticket ${i}`)).toBeInTheDocument();
    }
  });

  test('renders new items on scroll', () => {
    render(<VirtualList items={mockTickets} rowHeight={rowHeight} />);
    const container = screen.getByTestId('virtual-list-container');
    const scrollOffset = 500;

    fireEvent.scroll(container, { target: { scrollTop: scrollOffset } });
    const newStartIndex = Math.floor(scrollOffset / rowHeight);

    for (let i = newStartIndex; i < newStartIndex + buffer; i++) {
      expect(screen.getByText(`Ticket ${i}`)).toBeInTheDocument();
    }
  });

});
