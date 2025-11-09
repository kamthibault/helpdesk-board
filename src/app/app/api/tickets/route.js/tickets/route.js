export async function GET(){
    const tickets = [
        {
            id: 't-1001',
            title: 'Cannot connect to VPN',
            description: 'User reports intermittent VPN connectivity errors.',
            priority: 'High',
            status: 'Open',
            assignee: 'Unassigned',
            updatedAt: '2025-11-9', 
        },
        {
            id: 't-1002',
            title: 'Email not syncing',
            description: 'Outlook fails to sync new messages.',
            priority: 'Medium',
            status: 'In Progress',
            assignee: 'Kam',
            updatedAt: '2025-11-9',
        },
        {
            id: 't-1003',
            title: 'Printer offline',
            description: 'User cannot reset password due to redirect errors.',
            priority: 'Critical',
            status: 'Resolved',
            assignee: 'Kam',
            updatedAt: '2025-11-9'
        },
    ];
    return Response.json(tickets);
}