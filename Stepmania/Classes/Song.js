export default class song {
  constructor() {

        this.id             = 0;
        this.game_song_id   = 0;
        this.title          = "";
        this.artist         = "";
        this.genre          = "";
        this.bpm            = "";
        this.created_at     = "";
        this.updated_at     = "";
        this.cover          = "";
        this.cover_thumb    = "";
        this.music          = "";
        this.play_count     = 0;
        this.pass_count     = 0;
        this.difficulty     = 0;
    }

    parseJsonToValues(json, historyID){
        if (!json) return;

        //get the correct ids from the history object
        const songchartid   = json.history[historyID].song_chart_id;
        const songid        = json.charts[songchartid].song_id;

        // get only the important object from the json
        const songchart     = json.charts[songchartid];
        const Song          = json.songs[songid];


        this.id             = Song.id;
        this.game_song_id   = Song.game_song_id;
        this.title          = Song.title;
        this.artist         = Song.artist;
        this.genre          = Song.genre;
        this.bpm            = Song.bpm;
        this.created_at     = Song.created_at;
        this.updated_at     = Song.updated_at;
        this.cover          = Song.cover;
        this.cover_thumb    = Song.cover_thumb;
        this.music          = Song.music;

        this.play_count     = songchart.play_count;
        this.pass_count     = songchart.pass_count;
        this.difficulty     = songchart.difficulty;
    }

}