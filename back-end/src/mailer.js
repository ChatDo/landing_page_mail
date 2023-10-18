const nodemailer = require("nodemailer");

const pass = "M\@tc0m97438";

const transporter = nodemailer.createTransport({
    host: "mail.chatdo.me",
    secure: false,
    auth: {
        user: "matcom@chatdo.software",
        pass: "M@tc0m97438",
    },
});

function sendMail(req, res) {
    // TODO: SECURE WITH TOKEN

    let dest = req.params.dest
    if (dest === undefined || dest === "") {
        console.log("No destination");
        dest = "nicolas.julie38@gmail.com";
    }
    const mailOptions = {
        from: "LOCATION STRUCTURE<matcom@chatdo.software>",
        to: dest,
        subject: "LOCATION STRUCTURE: NOUVEAU PROSPECT", // email subject
        // TODO: ADD HTML TEMPLATE
        html: `
            <h1>
                Vous avez une nouvelle demande de location !
            </h1>
            <h1>Informations du prospect</h1>
            <ul>
                <li><h3>Nom: ${req.body.nom}</h3></li>
                <li><h3>Prénom: ${req.body.prenom}</h3></li>
                <li><h3>Code postal: ${req.body.codePostal}</h3></li>
                <li><h3>Téléphone: ${req.body.telephone}</h3></li>
                <li><h3>Email: ${req.body.email}</h3></li>
                <li><h3>Structure: ${req.body.structure}</h3></li>
                <li><h3>Commentaire: ${req.body.comments}</h3></li>
            </ul>
            `,
    };
    // returning result
    return transporter.sendMail(mailOptions, (erro, info) => {
        if (erro) {
            return res.send("ERROR: " + erro.toString());
        }
        return res.send(`Sent to ${dest}`);
    });
}

module.exports = sendMail;