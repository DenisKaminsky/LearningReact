import { useState, useCallback } from "react";

function useHttpRequest() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = useCallback(async (requestConfig, applyData) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(
                requestConfig.url,
                {
                    method: requestConfig.method || 'GET',
                    headers: requestConfig.headers || {},
                    body: requestConfig.body ? JSON.stringify(requestConfig.body) : null
                }
            );

            if (!response.ok) {
                throw new Error('Request failed!');
            }

            applyData(await response.json());
        } catch (err) {
            setError(err.message || 'Something went wrong!');
        }

        setIsLoading(false);
    }, []);

    return [isLoading, error, sendRequest];
}

export default useHttpRequest;