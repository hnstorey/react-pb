const token = 'c55617f729529fb4bf3c58f39c28c481b52d262572ebd606'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://nice-statuesque-wren.glitch.me/api/contacts`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
            },
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()

    },

    create: async (data: any = {} ) => {
        const response = await fetch(`https://nice-statuesque-wren.glitch.me/api/contacts`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow-Origin': 'https://nice-statuesque-wren.glitch.me',
                'Access-Control-Allow-Methods': GET, POST, DELETE,
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()
    },

    update: async (id: string, data: any = {}) => {
        const response = await fetch(`https://nice-statuesque-wren.glitch.me/api/contacts/${id}`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
            },
            body: JSON.stringify(data)
        });

        if (!response.ok){
            throw new Error(`Failed to update data on server.`)
        }

        return await response.json()
    },

    delete: async (id:string) => {
        const response = await fetch(`https://nice-statuesque-wren.glitch.me/api/contacts/${id}`,
        {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
            }
        })

        if (!response.ok){
            throw new Error(`Failed to delete data on server.`),
            console.log(`${id}`)
        }

        return;
    },
}