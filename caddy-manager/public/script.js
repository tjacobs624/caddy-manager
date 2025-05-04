document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = '/api/caddy'; // Adjust the API endpoint as necessary

    // Function to fetch Caddy server configuration
    async function fetchCaddyConfig() {
        try {
            const response = await fetch(`${apiUrl}/config`); // Use /config endpoint
            const data = await response.json();
            updateDashboard(data);
        } catch (error) {
            console.error('Error fetching Caddy configuration:', error);
        }
    }

    // Function to update the dashboard with Caddy configuration
    function updateDashboard(data) {
        const statusElement = document.getElementById('caddy-status');
        if (statusElement) {
            statusElement.textContent = `Caddy Configuration: ${JSON.stringify(data, null, 2)}`;
        }
    }

    // Event listener for refresh button
    const refreshButton = document.getElementById('refresh-button');
    if (refreshButton) {
        refreshButton.addEventListener('click', fetchCaddyConfig);
    } else {
        console.error('Refresh button not found in the DOM.');
    }

    // Initial fetch of Caddy configuration
    fetchCaddyConfig();
});