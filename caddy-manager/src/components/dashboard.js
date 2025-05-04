import React, { useEffect, useState } from 'react';
import { fetchCaddyStatus, fetchCaddyConfig } from '../api/caddy';

const Dashboard = () => {
    const [status, setStatus] = useState(null);
    const [config, setConfig] = useState(null);

    useEffect(() => {
        const getStatus = async () => {
            const data = await fetchCaddyStatus();
            setStatus(data);
        };

        const getConfig = async () => {
            const data = await fetchCaddyConfig();
            setConfig(data);
        };

        getStatus();
        getConfig();
    }, []);

    return (
        <div>
            <h1>Caddy Server Dashboard</h1>
            {status && (
                <div>
                    <h2>Status</h2>
                    <pre>{JSON.stringify(status, null, 2)}</pre>
                </div>
            )}
            {config && (
                <div>
                    <h2>Configuration</h2>
                    <pre>{JSON.stringify(config, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default Dashboard;