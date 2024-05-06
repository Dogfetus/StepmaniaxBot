import song from 'Song.js';
import user from 'User.js';


export default class scoreFeedElement {
    constructor() {
        this.user = new user;
        this.song = new song;
        this.grade = 0;
        this.score = 0;
        this.max_combo = 0;
        this.music_speed = 0;
        this.calories = 0;
        this.perfect = 0;
        this.semiperfect = 0;
        this.early = 0;
        this.late = 0;
        this.misses = 0;
        this.flags = 0;
        this.global_flags = 0;
        this.green = 0;
        this.yellow = 0;
        this.red = 0;
        this.created_at = "";
        this.updated_at = "";
        this.smx_system_id = 0;
        this.steps = 0;
        this.difficulty = 0;
    }

    parseJsonToValues(json, historyID){
        this.user.parseJsonToValues(json.user);
        this.song.parseJsonToValues(json.song);
        this.grade = json.history[historyID].grade;
        this.score = json.score;
        this.max_combo = json.max_combo;
        this.music_speed = json.music_speed;
        this.calories = json.calories;
        this.perfect = json.perfect;
        this.semiperfect = json.semiperfect;
        this.early = json.early;
        this.late = json.late;
        this.misses = json.misses;
        this.flags = json.flags;
        this.global_flags = json.global_flags;
        this.green = json.green;
        this.yellow = json.yellow;
        this.red = json.red;
        this.created_at = json.created_at;
        this.updated_at = json.updated_at;
        this.smx_system_id = json.smx_system_id;
        this.steps = json.steps;
        this.difficulty = json.difficulty;
    }
}
