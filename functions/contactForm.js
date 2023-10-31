import { MailtrapClient } from "mailtrap"

const {
    MAILTRAP_TOKEN,
    MAILTRAP_SENDER_EMAIL,
    MAILTRAP_RECIPIENT_EMAIL
} = process.env;

const client = new MailtrapClient({ token: MAILTRAP_TOKEN })

export const handler = async (event) => {
    const {
        name,
        surname,
        email,
        message,
        source
    } = JSON.parse(event.body);

    let displaySource = source !== '' ? ` - ${source}` : '';

    console.debug(`Try to send message with name: ${name}, surname: ${surname}, email: ${email}, message: ${message}, source: ${source}`)

    try {
        await client.send({
            from: { name: `${name} ${surname}`, email: MAILTRAP_SENDER_EMAIL },
            to: [{ email: MAILTRAP_RECIPIENT_EMAIL }],
            subject: `Neue Kontaktanfrage von ${name} ${surname}${displaySource}`,
            text: message,
            headers: {
                "Reply-To": email.trim()
            }
        })

        console.info("Sent contact form message successfully")

        return {
            statusCode: 200,
            body: JSON.stringify({
                msg: "Message sent successfully"
            })
        }
    } catch (error) {
        console.error(`email couldn't be sent: ${error}`)
        return {
            statusCode: 500,
            body: JSON.stringify({ msg: "Error sending the message" })
        }
    }
}
