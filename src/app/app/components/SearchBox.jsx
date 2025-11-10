`use client`;
import React from `react`;

export default function SearchBox({ value, onChange }) {
    return (
        <div style={StyleSheet.container}>
            <label htmlFor="search" style={StyleSheet.label}>
                Search Tickets:
            </label>
            <input
            id="search"
            type="text"
            value={value}
            onChange={e => onChange(e.target.value)}
            placeholder="Search by title or description"
            style={StyleSheet.input}
            />
        </div>
    );
}

const styles = {
  container: {
    margin: '1rem 0',
  },
  label: {
    display: 'block',
    marginBottom: '0.5rem',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '0.5rem',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
};
