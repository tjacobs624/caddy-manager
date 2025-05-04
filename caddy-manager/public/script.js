document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = '/api/caddy'; // Adjust the API endpoint as necessary

    // Function to fetch Caddy server status
    async function fetchCaddyStatus() {
        try {
            const response = await fetch(`${apiUrl}/status`);
            const data = await response.json();
            updateDashboard(data);
        } catch (error) {
            console.error('Error fetching Caddy status:', error);
        }
    }

    // Function to update the dashboard with Caddy status
    function updateDashboard(data) {
        const statusElement = document.getElementById('caddy-status');
        if (statusElement) {
            statusElement.textContent = `Caddy Status: ${data.status}`;
        }
    }

    // Event listener for refresh button
    const refreshButton = document.getElementById('refresh-button');
    if (refreshButton) {
        refreshButton.addEventListener('click', fetchCaddyStatus);
    } else {
        console.error('Refresh button not found in the DOM.');
    }

    // Initial fetch of Caddy status
    fetchCaddyStatus();
});