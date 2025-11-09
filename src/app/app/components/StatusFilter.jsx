`use client`
export default function StatusFilter({value,onChange}) {
    return (
        <select value={value} onChange={e => onChange(e.target.value)} className="border p-2 rounded">
            {['All', 'Open', 'In Progress', 'On Hold', 'Resolved'].map(status => (
                <option key={status} value={status}>{status} </option>
            ))}
            </select>
    );
}