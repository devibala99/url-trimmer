import { useState } from "react";

// cb-call back
const useFetch = (cb, options = {}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    const fn = async (...args) => {
        setLoading(true);
        setError(true);
        try {
            const response = await cb(options, ...args);
            setData(response);
            setError(null);
        }
        catch (error) {
            setError(error);
        }
        finally {
            setLoading(false);
        }
    };

    return { data, loading, error, fn };
};

export default useFetch;