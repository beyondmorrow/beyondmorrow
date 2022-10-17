const client = require('@sendgrid/mail');
const {
    SENDGRID_API_KEY,
    SENDGRID_TO_EMAIL,
    SENDGRID_FROM_EMAIL
} = process.env;

exports.handler = async (event, context) => {
    const payload = JSON.parse(event.body).payload;
    client.setApiKey(SENDGRID_API_KEY);

    const data = {
        to: SENDGRID_TO_EMAIL,
        from: SENDGRID_FROM_EMAIL,
        subject: `Neue Kontaktanfrage von ${payload.data.name} ${payload.data.surname} (${payload.data.email})`,
        html: payload.data.message,
    };

    try {
        await client.send(data);    
        return {
            statusCode: 200,
            body: JSON.stringify({ msg: "Message sent"}),
        };
    } catch (err) {
        return {
            statusCode: 400,
            body: JSON.stringify({ msg: err.message }),
        };
    }
}