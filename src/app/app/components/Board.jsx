`use client`;
import { useEffect, useState } from 'react' ;
import StatusFilter from './StatusFilter' ;
import PriorityFilter from './PriorityFilter' ;
import SearchBox from './SearchBox' ;
import MyQueueSummary from './MyQueueSummary';
import StatusMessage from './StatusMessage';
import TicketList from './TicketList'

const Status_Flow = {
    Open: 'in Progress',
    'In Progress': 'On Hold',
    'On Hold': 'Resolved',
    Resolved: 'Resolved'
};

const Priority_Flow = {
    Low: 'Medium',
    Medium: 'High',
    High: 'Critical',
    Critical: 'Critical',
};

export default function Board() {
    const [tickets, setTickets] = useState([]);
    const [loading, setLoading] = useState (true);
    const [error, setError] = useState (false);
    const [filters, setFilters] = useState ({ status: 'All', priority: 'All'});
    const [queue, setQueue] = useState({});

    //Fetch tickets on mount
    useEffect(() => {
        fetch('/api/tickets')
        .then(res => res.json())
        .then (data => {
        setTickets(data);
        setLoading(false);
        })
    }, []);

    // Sim Live Updates
    useEffect(() => {
        const interval = setInterval (() => {
            setTickets(prev => {
                if (prev.length === 0) return prev;
                const index = Math.floor(Math.random() * prev.length);
                const updated = [...prev];
                const ticket = { ...updated[index] };

                if (Math.random() < 0.5) {
                    ticket.status = Status_Flow[ticket.status] || ticket.status;
                } else {
                    ticket.priority = Priority_Flow[ticket.priority] || ticket.priority;
                }

                ticket.updatedAt = new Date(). toISOString();
                updated[index] = ticket;
                return updated;
            });
        }, math.floor(Math.random()* 4000) + 6000) 

        return() => clearInterval(interval);
    }, []);

    
}