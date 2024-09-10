const nodemailer = require("nodemailer");

const sendMail = async(req, res) => {
    try {
        // Create a transporter object with the correct configuration
        let transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            auth: {
                user: "randall.durgan14@ethereal.email",
                pass: "uZnPYt4aFQ8W41HPmy",
            },
        });

        // Send mail using the transporter object
        let info = await transporter.sendMail({
            from: '"Amit Chaudhary 👻" <AC@gmail.com>', // Sender address
            to: "amit.chaudhary_cs22@gla.ac.in", // List of recipients
            subject: "Hello Chaudhary", // Subject line
            text: "Hello Chaudhary", // Plain text body
            html: "<b>Hello Chaudhary</b>", // HTML body
        });

        console.log("Message sent: %s", info.messageId);
        res.json(info); // Return the email info as a JSON response
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ error: "Failed to send email" });
    }
};

module.exports = sendMail;
