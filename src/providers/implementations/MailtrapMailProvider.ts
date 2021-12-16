import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer from 'nodemailer';
import Mail from "nodemailer/lib/mailer";

export class MailtrapMailProvider implements IMailProvider {

    private transporter: Mail;

    constructor() {
        this.transporter = nodemailer.createTransport({
           host: 'smtp.mailtrap.io',
           port: 2525,
           auth: {
               user: 'e5231d7a0fce54',
               pass: '925c4856f26823'
           }
        })
    }

   async sendMail(message: IMessage): Promise<void> {
        await this.transporter.sendMail({
            to: {
                name: message.to.name,
                address: message.to.email
            },
            from: {
                name: message.from.name,
                address: message.from.email
            },
            subject: message.subject,
            html: message.body
        })
   }

}