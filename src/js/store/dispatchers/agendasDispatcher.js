const agendasDispatcher = {

    getAll: async () => {
        try{
        const response = await fetch('https://playground.4geeks.com/contact/agendas?offset=0&limit=100',{
            method: 'GET'
        });

        return await response.json();
        } catch (error){
            return [];
        }
    },
    post: async () => {
        await fetch('', {
            headers:{
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body
        })
    }
}

export default agendasDispatcher