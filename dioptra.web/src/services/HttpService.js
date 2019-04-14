import { useState, useEffect } from "react";

const devApi = 'http://localhost:50971/api/'
const liveApi = ''
const baseUri = devApi;

export const useFetch = (url, method, body) => {
    const [data, setData] = useState({
        data: [],
        loader: true
    });

    useEffect(() => {
        console.log('triggers')
        (async () => {
            const res = await fetch(baseUri + url, {
                body: JSON.stringify(body),
                method: method,
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await res.json();
            setData({
                data: data,
                loader: false
            });
        })();
    }, [url]);

    return data;
};
