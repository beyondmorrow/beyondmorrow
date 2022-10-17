import * as Busboy from "busboy"
const client = require('@sendgrid/mail');
const {
    SENDGRID_API_KEY,
    SENDGRID_TO_EMAIL,
    SENDGRID_FROM_EMAIL
} = process.env;

exports.handler = async (event, context) => {
    const fields = await parseMultipartForm(event);
    client.setApiKey(SENDGRID_API_KEY);

    const data = {
        to: SENDGRID_TO_EMAIL,
        from: SENDGRID_FROM_EMAIL,
        subject: `Neue Kontaktanfrage von ${fields.name} ${fields.surname} (${fields.email})`,
        html: fields.message,
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

function parseMultipartForm(event) {
    return new Promise((resolve) => {
      // we'll store all form fields inside of this
      const fields = {};
  
      // let's instantiate our busboy instance!
      const busboy = new Busboy({
        // it uses request headers
        // to extract the form boundary value (the ----WebKitFormBoundary thing)
        headers: event.headers
      });
  
      // before parsing anything, we need to set up some handlers.
      // whenever busboy comes across a file ...
      busboy.on(
        "file",
        (fieldname, filestream, filename, transferEncoding, mimeType) => {
          // ... we take a look at the file's data ...
          filestream.on("data", (data) => {
            // ... and write the file's name, type and content into `fields`.
            fields[fieldname] = {
              filename,
              type: mimeType,
              content: data,
            };
          });
        }
      );
  
      // whenever busboy comes across a normal field ...
      busboy.on("field", (fieldName, value) => {
        // ... we write its value into `fields`.
        fields[fieldName] = value;
      });
  
      // once busboy is finished, we resolve the promise with the resulted fields.
      busboy.on("finish", () => {
        resolve(fields)
      });
  
      // now that all handlers are set up, we can finally start processing our request!
      busboy.write(event.body);
    });
  }