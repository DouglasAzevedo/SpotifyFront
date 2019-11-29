export class NovaPlaylistDto {
    public nome: String
    public pais: String
    public idCriador: Number
}

export class PlayListMusicaDto {
    public idMusica: Number
    public idPlaylist: Number
}

export class PlayListDto {
    public id: Number
    public nome: String
    public pais: String
    public idCriador: Number
}

export class UsuarioDto {
    public id: Number
    public nome: String
    public email: String
    public pais: String
}

export class NovaMusicaDto {
    public nome: String
    public idCriador: Number
    public dataRegistro: Date
    public faixa: String
    public curtida: Boolean
}

export class CurtidaMusicaDto {
    public id: Number
    public curtida: Boolean
}

export class MusicaDto {
    public id: Number
    public nome: String
    public idCriador: Number
    public dataRegistro: Date
    public faixa: String
    public curtida: Boolean
}


