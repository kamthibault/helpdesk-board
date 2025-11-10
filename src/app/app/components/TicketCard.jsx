`use client`
import React from `react`;
export default function TicketCard({ ticket, isQueued, onAddToQueue}) {
    const { id, title, priority, status, assignee, updatedAt } = ticket;

    return (
        <div className="ticket-card" style={StyleSheet.card}>
            <h3>{title}</h3>
            <p><strong>Status:</strong>{status}</p>
            <p><strong>Priority:</strong>{priority}</p>
            <p><strong>Assignee:</strong>{assignee || 'Unassigned'}</p>
            <p><small>Last updated: {new Date(updatedAt).toLocaleString()} </small></p>

            <button
            onClick ={() => onAddToQueue(id)}
            disabled={isQueued}
            aria-disabled={isQueued}
            style={isQueued ? StyleSheet.disabledButton : StyleSheet.button}
            >
                {isQueued ? 'Already in Queue' : 'Add to My Queue'}
            </button>
            {isQueued && <p style={styles.hint}>This ticket is already in your queue.</p>}
        </div>
    );
}

const styles = {
    card: {
    border: '1px solid #ccc',
    borderRadius: '6px',
    padding: '1rem',
    marginBottom: '1rem',
    backgroundColor: '#f9f9f9',
  },
  button: {
    padding: '0.5rem 1rem',
    backgroundColor: '#0070f3',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  disabledButton: {
    padding: '0.5rem 1rem',
    backgroundColor: '#aaa',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'not-allowed',
  },
  hint: {
    marginTop: '0.5rem',
    fontStyle: 'italic',
    color: '#555',
  },
};


    
