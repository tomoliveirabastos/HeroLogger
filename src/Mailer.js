const nodemailer = require('nodemailer');

const os = require('os');

class Mailer{

    constructor(){

        this.computer = os.hostname();

        this.from = `FROM EMAIL`;

        this.to = "TO EMAIL";

        this.password = "PASSWORD";

    }


    send(texto){
        const config = nodemailer.createTransport({
            host: "smtp.live.com",
            port: 587,
            secureConnection: false,
            tls: {
                ciphers:'SSLv3'
            },
            auth: {
                user: this.to,
                pass: this.password
            }
        });

        config.sendMail({
            
            from: this.from,
            
            to: this.to,

            subject: `${this.computer} ${new Date().toDateString()}`,

            text: texto

        }, (erro, info)=>{
            console.log(erro)
        });
    }
}

module.exports = new Mailer();