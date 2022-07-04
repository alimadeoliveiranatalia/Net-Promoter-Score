import nodemailer, { Transporter } from "nodemailer";
import handlebars from "handlebars";
import fs from "fs";

export class SendEmailService {
    private client: Transporter;

    constructor(){        
        const transporter = nodemailer.createTransport({
            host:"smtp.mailtrap.io",
            port:2525,
            auth: {
                user: "c45f078be9699b",
                pass: "8fd4a78114742c"
            }
        });
        
        this.client = transporter;
        
    }

    async execute(to: string, subject: string, variables: object, path: string) {

        const templateFileContent = fs.readFileSync(path).toString("utf-8");

        const mailTemplateParse = handlebars.compile(templateFileContent);

        const html = mailTemplateParse(variables);

        const message = await this.client.sendMail({
            to,
            subject,
            html,
            from: "Pesquisa e Opnião<noreplay@nps.com.br>"
        });

        console.log("Message sent: %s", message.messageId);
        
    }
}