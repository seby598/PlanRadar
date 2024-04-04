import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TicketItem from './TicketItem';

describe('TicketItem Component', () => {
  const mockTicket = {
    id: 1,
    subject: 'Test Ticket',
    description: 'This is a test description',
    priority: 'Medium',
    status: 'Open'
  };

  const renderComponent = (props = {}) => {
    render(<TicketItem ticket={{ ...mockTicket, ...props }} />);
  };

  // Testing different priorities with specific colors
  const priorities = {
    High: '#ff0000',
    Medium: '#ffa500',
    Low: '#008000',
  };

  Object.entries(priorities).forEach(([priority, color]) => {
    test(`renders ${priority} priority with correct style`, () => {
      renderComponent({ priority });
      const priorityBubble = screen.getByText(priority).closest('div');
      expect(priorityBubble).toHaveStyle(`background-color: ${color}`);
    });
  });

  // Testing different statuses with specific colors
  const statuses = {
    Open: '#808080',
    Pending: '#ffa500',
    'In Progress': '#4f8bc9',
    Completed: '#008000',
    Cancelled: '#ff0000',
  };

  Object.entries(statuses).forEach(([status, color]) => {
    test(`renders ${status} status with correct style`, () => {
      renderComponent({ status });
      const statusBubble = screen.getByText(status).closest('div');
      expect(statusBubble).toHaveStyle(`background-color: ${color}`);
    });
  });

});
