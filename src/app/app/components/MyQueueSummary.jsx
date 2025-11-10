`use client`;
import React from "react";

export default function MyQueueSummary({ tickets, onRemove, onClear}) {
    const count = tickets.length;

    if (count === 0) return null;

    return (
        <section style={styles.container} aria-label="My Queue Summary">
            <h2>My Queue ({count})</h2>

            <ul style={styles.list}>
                {tickets.map(ticket => (
                    <li key={ticket.id} style={styles.item}>
                        <span>{ticket.title}</span>
                        <button
                        onClick={() => onRemove(ticket.id)}
                        style={styles.removeButton}
                        aria-label={`Remove ${ticket.title} from queue`}
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>

            <button onClick={onClear} style={styles.clearButton}>
                Clear Queue
            </button>
        </section>
    );
}

const styles = {
  container: {
    marginTop: '2rem',
    padding: '1rem',
    border: '1px solid #ccc',
    borderRadius: '6px',
    backgroundColor: '#fffbe6',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    marginBottom: '1rem',
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.5rem 0',
    borderBottom: '1px solid #eee',
  },
  removeButton: {
    backgroundColor: '#e00',
    color: '#fff',
     border: 'none',
    padding: '0.3rem 0.6rem',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  clearButton: {
    backgroundColor: '#0070f3',
    color: '#fff',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};


