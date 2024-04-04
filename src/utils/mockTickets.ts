import { Ticket } from "../models/ticket.model";

const statuses = ['Open', 'Pending', 'In Progress', 'Completed', 'Cancelled'];
const priorities = ['High', 'Medium', 'Low'];

const getRandomElement = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

const mockTickets: Ticket[] = [];

for (let i = 1; i < 10000; i++) {
  mockTickets.push({
    id: i,
    subject: `Ticket ${i}`,
    priority: getRandomElement(priorities),
    status: getRandomElement(statuses),
    description: 'This is a test description'
  });
}

export default mockTickets;