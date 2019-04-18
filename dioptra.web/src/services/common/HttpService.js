export const callFetch = async (url, method, data) => {
    const result = await (await fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },

        body: data ? JSON.stringify(data) : null
    }).then(res => {
        if (res.ok) {
            return res.json();
        } else {
            return res.json();
        }
    }).catch(() => console.log('Error')));

    return result;
}