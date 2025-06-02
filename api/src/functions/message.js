const { app } = require('@azure/functions');

app.http('message', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        const historicalFacts = [
            "The first email was sent by Ray Tomlinson to himself in 1971.",
            "The first website was created by Tim Berners-Lee in 1991.",
            "The first smartphone, IBM's Simon, was released in 1994.",
            "The first computer virus, 'Creeper', was detected in the early 1970s.",
            "The first computer game, 'Tennis for Two', was created in 1958.",
            "The first computer, ENIAC, was completed in 1945.",
            "The first video game console, Magnavox Odyssey, was released in 1972.",
            "The first computer mouse was invented by Douglas Engelbart in 1964.",
            "The first hard disk drive was introduced by IBM in 1956.",
            "The first web browser, WorldWideWeb, was created by Tim Berners-Lee in 1990."
        ];
        const randomFact = historicalFacts[Math.floor(Math.random() * historicalFacts.length)];
        return { body: `Hello, from the API! Here is your random IT fact:\n${randomFact}`};
    }
});