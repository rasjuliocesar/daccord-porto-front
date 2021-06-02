export interface Song {
    _id?: string;
    artist?: string;
    artist_id?: string;
    bpm?: number;
    genre?: number;
    link_audio?: string;
    title?: string;
    time_signature?: Array<number>;
    //CIFRA
    chord_sequence?: Array<string>;
    chord_sheet?: string;
    chords?: Array<string>;
    onset_map?: Map<string, string>;
    song_id?: string;
    source_url?: string;
    version?: string;
    difficulty?: number;

    //Variáveis Repetidas Cifra x Song
    //_id?: string;
    //artist?: string;
    //title?: string;
}