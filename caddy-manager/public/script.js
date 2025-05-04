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
        statusElement.textContent = `Caddy Status: ${data.status}`;
    }

    // Event listener for refresh button
    const refreshButton = document.getElementById('refresh-button');
    refreshButton.addEventListener('click', fetchCaddyStatus);

    // Initial fetch of Caddy status
    fetchCaddyStatus();

    const someElement = document.getElementById('someElementId'); // Replace with your actual element ID

    if (someElement) {
        someElement.addEventListener('click', () => {
            console.log('Element clicked!');
        });
    } else {
        console.error('Element with ID "someElementId" not found in the DOM.');
    }
});