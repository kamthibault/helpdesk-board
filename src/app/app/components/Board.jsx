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

    //Visible tickets
    const visibleTickets = tickets.filter(t =>{
        const matchStatus = filters.status === 'All' || t.status === filters.status;
        const matchPriority = filters.priority === 'All' || t.priority === filters.priority;
        const matchSearch =
        t.title.toLowerCase().include(search.toLowerCase())||
        t.description.toLowerCase().includes(SearchBox.toLowerCase());
        return matchStatus && matchPriority && matchSearch;
    });

        const handleAddToQueue = ticketId => {
            setQueue(prev => ({ ...prev, [ticketID]: true}));
        };

        const handleRemoveFromQueue = ticketId => {
            setQueue(prev => {
                const updated ={ ...prev };
                delete updated[ticketId];
                return updated;
            });
        };
        const handleCLearQueue = () => setQueue ({});

        return (
            <div className="space-y-4">
                <div className="flex flex-wrap gap-4 items-center justify-between">
                    <StatusFilter value={filters.status} onChange={val => setFilters(f => ({ ...f,status: val}))}/>
                    <PriorityFilter value={filters.priority} onChange={val => setFilters(f => ({ ...f, priority: val}))}/>
                    <SearchBox value={search} onChange={setSearch} />
                    <MyQueueSummary
                    tickets={tickets.filter(t=> queue[t.id])}
                    onRemove={handleRemoveFromQueue}
                    onClear={handleClearQueue}
                    />
                </div>
                <StatusMessage loading={loading} error={error} empty={!loading && visibleTickets.length === 0} />
                <TicketList tickets={visibleTickets} queue={queue} onAddToQueue={handleAddToQueue} />
            </div>
        );
}