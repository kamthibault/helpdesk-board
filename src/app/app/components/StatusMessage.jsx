export default function StatusMessage({ loading, error, isEmpty }) {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Unable to load tickets.</p>;
    if (isEmpty) return <p>No tickets match your filters</p>;
    return null;
}