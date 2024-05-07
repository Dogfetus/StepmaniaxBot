import song from './Song.js';
import user from './User.js';


export default class scoreFeedElement {
    constructor() {
        this.user           = new user;
        this.song           = new song;
        this.grade          = 0;
        this.score          = 0;
        this.max_combo      = 0;
        this.music_speed    = 0;
        this.calories       = 0;
        this.perfect        = 0;
        this.semiperfect    = 0;
        this.early          = 0;
        this.late           = 0;
        this.misses         = 0;
        this.flags          = 0;
        this.global_flags   = 0;
        this.green          = 0;
        this.yellow         = 0;
        this.red            = 0;
        this.created_at     = "";
        this.updated_at     = "";
        this.smx_system_id  = 0;
        this.steps          = 0;
        this.difficulty     = 0;
    }

    parseJsonToValues(json, historyID){

        // send the json to the other classes
        // get info from json
        this.user.parseJsonToValues(json, historyID);
        this.song.parseJsonToValues(json, historyID);

        // get just the history object part of the json
        const history = json.history[historyID];


        this.grade          = history.grade;
        this.score          = history.score;
        this.max_combo      = history.max_combo;
        this.music_speed    = history.music_speed;
        this.calories       = history.calories;
        this.perfect        = history.perfect1;
        this.semiperfect    = history.perfect2;
        this.early          = history.early;
        this.late           = history.late;
        this.misses         = history.misses;
        this.flags          = history.flags;
        this.global_flags   = history.global_flags;
        this.green          = history.green;
        this.yellow         = history.yellow;
        this.red            = history.red;
        this.created_at     = history.created_at;
        this.updated_at     = history.updated_at;
        this.smx_system_id  = history.smxsystem_id;
        this.steps          = history.steps;
        this.difficulty     = history.difficulty_name;
    }
}
