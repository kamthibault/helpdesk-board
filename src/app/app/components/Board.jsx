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
}