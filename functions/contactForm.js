const client = require('@sendgrid/mail');
const {
    SENDGRID_API_KEY,
    SENDGRID_TO_EMAIL,
    SENDGRID_FROM_EMAIL
} = process.env;

exports.handler = async (event, context) => {
    try {
        const { name, surname, email, message, source } = JSON.parse(event.body);

        let displaySource = source !== '' ? ` - ${source}` : '';

        client.setApiKey(SENDGRID_API_KEY);

        const data = {
            to: SENDGRID_TO_EMAIL,
            from: SENDGRID_FROM_EMAIL,
            reply_to: email,
            subject: `Neue Kontaktanfrage von ${name} ${surname}${displaySource}`,
            html: message,
        };

        await client.send(data);
        
        return {
            statusCode: 200,
            body: JSON.stringify({ msg: "Message sent successfully" }),
        };
    } catch (err) {
        return {
            statusCode: 400,
            body: JSON.stringify({ msg: err.message }),
        };
    }
}