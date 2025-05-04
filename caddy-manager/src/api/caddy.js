const axios = require('axios');

const CADDY_API_URL = 'http://localhost:2019'; // Adjust the URL if your Caddy server is running on a different address

async function getCaddyConfig() {
    try {
        const response = await axios.get(`${CADDY_API_URL}/config`);
        return response.data;
    } catch (error) {
        console.error('Error fetching Caddy configuration:', error);
        throw error;
    }
}

async function updateCaddyConfig(config) {
    try {
        const response = await axios.post(`${CADDY_API_URL}/config`, config);
        return response.data;
    } catch (error) {
        console.error('Error updating Caddy configuration:', error);
        throw error;
    }
}

async function getCaddyStatus() {
    try {
        const response = await axios.get(`${CADDY_API_URL}/status`);
        return response.data;
    } catch (error) {
        console.error('Error fetching Caddy status:', error);
        throw error;
    }
}

module.exports = {
    getCaddyConfig,
    updateCaddyConfig,
    getCaddyStatus,
};