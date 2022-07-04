import nodemailer, { Transporter } from "nodemailer";
import { resolve } from "path";
import handlebars from "handlebars";
import fs from "fs";

export class SendEmailService {
    private client: Transporter;

    constructor(){        
        const transporter = nodemailer.createTransport({
            host:"smtp.mailtrap.io",
            port:2525,
            //secure:"",
            auth: {
                user: "c45f078be9699b",
                pass: "8fd4a78114742c"
            }
        });
        
        this.client = transporter;
        
    }

    async execute(to: string, subject: string, body: string) {
        const npsPath = resolve(__dirname,"..", "views", "emails", "npsMail.hbs");

        const templateFileContent = fs.readFileSync(npsPath).toString("utf-8");

        const mailTemplateParse = handlebars.compile(templateFileContent);

        const html = mailTemplateParse({
            name: to,
            title: subject,
            description: body
        });

        const message = await this.client.sendMail({
            to,
            subject,
            html,
            from: "Pesquisa e Opnião<noreplay@nps.com.br>"
        });

        console.log("Message sent: %s", message.messageId);
        
    }
}