export default class user {
    constructor() {
        this.id = 0;
        this.username = 0;
        this.country = "";
        this.hex_color = "";
        this.picture = "";
        this.description = "";
        this.rival = 0;
    }

    parseJsonToValues(json){
        this.id = json.id;
        this.username = json.username;
        this.country = json.country;
        this.hex_color = json.hex_color;
        this.picture = json.picture;
        this.description = json.description;
        this.rival = json.rival;
    }
}