`use client`;
import React from "react";
import TicketCard from "./TicketCard";

export default function TicketList({tickets, queue, onAddToQueue }) {
    return (
        <div className="ticket-list">
            {tickets.map(ticket =>(
                <TicketCard
                key={ticket.id}
                ticket={ticket}
                isQueued={!!queue[ticket.id]}
                onAddToQueue={onAddToQueue}
                />
            ))}
        </div>
    );
}