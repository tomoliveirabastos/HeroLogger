class FileMap {

    constructor(){ 

        this.attemptText = "";
    }
    
    file_data(keyData){

        if(!keyData)return false;

        const data = this.rules(keyData);

        this.attemptText += data;

    }

    rules(keyWord){

        const data = {
            
            "Space" : ()=>{
            
                return  " ";                
            
            },

            "Enter": ()=>{
                
                return "\r\n";

            },
        
        }
        
        return data[keyWord] ? data[keyWord]() : keyWord;

    }

}

module.exports = FileMap;