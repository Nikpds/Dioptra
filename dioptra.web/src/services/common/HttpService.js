import { useState, useEffect } from "react";

const devApi = 'http://localhost:50971/api/'
const liveApi = ''
const baseUri = devApi;

export const useFetch = (url, method, body) => {
    console.log('in')
    const [data, setData] = useState({
        data: [],
        loader: true
    });
    useEffect(() => {
        if (!url) return;
        console.log('triggers');
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
// const defaultOpts = {};
// export const useFetch = (input, opts = defaultOpts) => {
//     const [error, setError] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [data, setData] = useState(null);
//     const {
//         readBody = body => body.json(),
//         ...init
//     } = opts;
//     useEffect(() => {
//         console.log('Fetching');
//         (async () => {
//             setLoading(true);
//             try {
//                 const response = await fetch(input, init);
//                 if (response.ok) {
//                     const body = await readBody(response);
//                     setData(body);
//                 } else {
//                     setError(new Error(response.statusText));
//                 }
//             } catch (e) {
//                 setError(e);
//             }
//             setLoading(false);
//         })();
//     }, [input, opts]);
//     return { error, loading, data };
// };