exports.handler = async (event, context) => {
    try {
        const key = process.env.API_KEY
        return {
            statusCode: 200,
            body: JSON.stringify({kay : key}),
        };
    } catch (error) {
        console.error('Error connecting to the database:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Error retrieving data' }),
        };
    }
};
