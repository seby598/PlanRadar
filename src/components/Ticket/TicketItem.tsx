import React from 'react';
import { Ticket } from '../../models/ticket.model';
import styles from './TicketItem.module.css';

interface TicketItemProps {
  ticket: Ticket;
}

const TicketItem: React.FC<TicketItemProps> = ({ ticket }) => {

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return '#ff0000';
      case 'Medium':
        return '#ffa500';
      case 'Low':
        return '#008000';
      default:
        return '#808080';
    }
  };
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open':
        return '#808080';
      case 'Pending':
        return '#ffa500';
      case 'In Progress':
        return '#4f8bc9';
      case 'Completed':
        return '#008000';
      case 'Cancelled':
        return '#ff0000';
      default:
        return '#808080';
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h4 className={styles.subject}>{ticket.subject}</h4>
      </div>
      <div className={styles.body}>
        <div className={styles.leftColumn}>
          <div className={styles.detailRow}>
            <span className={styles.label}>Status:</span>
            <div className={styles.statusBubble} style={{ backgroundColor: getStatusColor(ticket.status) }}>
              {ticket.status}
            </div>
          </div>
          <div className={styles.detailRow}>
            <span className={styles.label}>Priority:</span>
            <div className={styles.priorityBubble} style={{ backgroundColor: getPriorityColor(ticket.priority) }}>
              {ticket.priority}
            </div>
          </div>
        </div>
        <p className={styles.description}>{ticket.description}</p>
      </div>
    </div>
  );
};

export default TicketItem;