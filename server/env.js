exports.handler = async (event, context) => {
    try {
        // process.env.DB_HOST
        return {
            statusCode: 200,
            body: JSON.stringify({message: "success"}),
        };
    } catch (error) {
        console.error('Error connecting to the database:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Error retrieving data' }),
        };
    }
};
