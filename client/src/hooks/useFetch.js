
export const useFetch = () => {
    return async (url, method, body) => {
        let error = ''

        try {
            const options = {
                method,
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
            };

            // Добавляем тело только для методов, которые его требуют
            if (body && method !== 'GET' && method !== 'DELETE') {
                options.body = JSON.stringify(body);
            }

            const response = await fetch(url, options);

            if (response.status !== 200) {
                const json = await response.json();
                error = json.message
            }
        } catch (err) {
            error = err
        }

        return error
    }
}