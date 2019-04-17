import { notification } from 'antd';
const syncFetch = async (url, method, data) => {
    const request = await fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: data ? JSON.stringify(data) : null
    });
    if (request && request.ok) {
        return await request.json();
    }
    throw new Error(request);
}

export const callFetch = async (url, method, data = null) => {
    try {
        return await syncFetch(url, method, data);
    } catch (error) {
       
    }
}