import {
  GetSongByIdUseCase,
  GetSongByLinkUseCase,
  GetSongLyricsUseCase,
  GetSongSuggestionsUseCase,
  type GetSongByIdArgs,
  type GetSongSuggestionsArgs
} from '#modules/songs/use-cases'

export class SongService {
  private readonly getSongByIdUseCase: GetSongByIdUseCase
  private readonly getSongByLinkUseCase: GetSongByLinkUseCase
  private readonly getSongLyricsUseCase: GetSongLyricsUseCase
  private readonly getSongSuggestionsUseCase: GetSongSuggestionsUseCase

  constructor() {
    this.getSongByIdUseCase = new GetSongByIdUseCase()
    this.getSongByLinkUseCase = new GetSongByLinkUseCase()
    this.getSongLyricsUseCase = new GetSongLyricsUseCase()
    this.getSongSuggestionsUseCase = new GetSongSuggestionsUseCase()
  }

  getSongByIds = (args: GetSongByIdArgs) => {
    return this.getSongByIdUseCase.execute(args)
  }

  getSongByLink = (token: string) => {
    return this.getSongByLinkUseCase.execute(token)
  }

  getSongLyrics = (songId: string) => {
    return this.getSongLyricsUseCase.execute(songId)
  }

  getSongSuggestions = (args: GetSongSuggestionsArgs) => {
    return this.getSongSuggestionsUseCase.execute(args)
  }
}
