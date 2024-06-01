const defaultPFP = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fplay-lh.googleusercontent.com%2FIGrv9CKM_O2r18dXGvN1cdXcPJq7Hg-8E-8Hi1VcxnVkYi3idEr94u5DAI36lYk_&f=1&nofb=1&ipt=c63c5e250eb165818eeea6a925e2d078ade6b043d1dfccda46faca999caa5b5e&ipo=images";

export default class user {
    constructor() {
        this.id             = 0;
        this.username       = 0;
        this.country        = "";
        this.hex_color      = "";
        this.picture        = "";
        this.description    = "";
        this.rival          = 0;
    }

    parseJsonToValues(json, historyID){
        if (!json) return;

        // get the user id from the history object
        const userid        = json.history[historyID].gamer_id;

        // get just the user object from the json
        const user          = json.gamers[userid];

        this.id             = user.id;
        this.username       = user.username;
        this.country        = user.country;
        this.hex_color      = user.hex_color;
        this.picture        = user.picture_path || defaultPFP;
        this.description    = user.description;
        this.rival          = user.rival;

        // console.log(user.picture_path);

    }
}