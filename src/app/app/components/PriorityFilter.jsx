export default function PriorityFilter({ value, onChange}) {
    return (
        <select value={value} onChange={e => onChange(e.target.value)} className="border p-2 rounded">
            {['All', 'Low', 'Medium', 'High', 'Critical'].map(priority =>(
                <option key={priority} value={priority}>{priorty}</option>
            ))}
        </select>
    );
}