import { type GetArtistAlbumsArgs, type GetArtistByIdArgs, type GetArtistByLinkArgs, type GetArtistSongsArgs } from '#modules/artists/use-cases';
export declare class ArtistService {
    private readonly getArtistByIdUseCase;
    private readonly getArtistByLinkUseCase;
    private readonly getArtistSongsUseCase;
    private readonly getArtistAlbumsUseCase;
    constructor();
    getArtistById: (args: GetArtistByIdArgs) => Promise<{
        url: string;
        type: string;
        id: string;
        image: {
            quality: string;
            url: string;
        }[];
        name: string;
        isVerified: boolean | null;
        dominantLanguage: string | null;
        dominantType: string | null;
        topAlbums: {
            songs: {
                artists: {
                    primary: {
                        url: string;
                        type: string;
                        id: string;
                        image: {
                            quality: string;
                            url: string;
                        }[];
                        name: string;
                        role: string;
                    }[];
                    featured: {
                        url: string;
                        type: string;
                        id: string;
                        image: {
                            quality: string;
                            url: string;
                        }[];
                        name: string;
                        role: string;
                    }[];
                    all: {
                        url: string;
                        type: string;
                        id: string;
                        image: {
                            quality: string;
                            url: string;
                        }[];
                        name: string;
                        role: string;
                    }[];
                };
                url: string;
                type: string;
                id: string;
                image: {
                    quality: string;
                    url: string;
                }[];
                language: string;
                year: string | null;
                album: {
                    url: string | null;
                    id: string | null;
                    name: string | null;
                };
                label: string | null;
                duration: number | null;
                name: string;
                playCount: number | null;
                explicitContent: boolean;
                releaseDate: string | null;
                hasLyrics: boolean;
                lyricsId: string | null;
                copyright: string | null;
                downloadUrl: {
                    quality: string;
                    url: string;
                }[];
                lyrics?: {
                    lyrics: string;
                    copyright: string;
                    snippet: string;
                } | undefined;
            }[] | null;
            artists: {
                primary: {
                    url: string;
                    type: string;
                    id: string;
                    image: {
                        quality: string;
                        url: string;
                    }[];
                    name: string;
                    role: string;
                }[];
                featured: {
                    url: string;
                    type: string;
                    id: string;
                    image: {
                        quality: string;
                        url: string;
                    }[];
                    name: string;
                    role: string;
                }[];
                all: {
                    url: string;
                    type: string;
                    id: string;
                    image: {
                        quality: string;
                        url: string;
                    }[];
                    name: string;
                    role: string;
                }[];
            };
            url: string;
            type: string;
            id: string;
            image: {
                quality: string;
                url: string;
            }[];
            language: string;
            year: number | null;
            name: string;
            description: string;
            playCount: number | null;
            explicitContent: boolean;
            songCount: number | null;
        }[] | null;
        topSongs: {
            artists: {
                primary: {
                    url: string;
                    type: string;
                    id: string;
                    image: {
                        quality: string;
                        url: string;
                    }[];
                    name: string;
                    role: string;
                }[];
                featured: {
                    url: string;
                    type: string;
                    id: string;
                    image: {
                        quality: string;
                        url: string;
                    }[];
                    name: string;
                    role: string;
                }[];
                all: {
                    url: string;
                    type: string;
                    id: string;
                    image: {
                        quality: string;
                        url: string;
                    }[];
                    name: string;
                    role: string;
                }[];
            };
            url: string;
            type: string;
            id: string;
            image: {
                quality: string;
                url: string;
            }[];
            language: string;
            year: string | null;
            album: {
                url: string | null;
                id: string | null;
                name: string | null;
            };
            label: string | null;
            duration: number | null;
            name: string;
            playCount: number | null;
            explicitContent: boolean;
            releaseDate: string | null;
            hasLyrics: boolean;
            lyricsId: string | null;
            copyright: string | null;
            downloadUrl: {
                quality: string;
                url: string;
            }[];
            lyrics?: {
                lyrics: string;
                copyright: string;
                snippet: string;
            } | undefined;
        }[] | null;
        singles: {
            artists: {
                primary: {
                    url: string;
                    type: string;
                    id: string;
                    image: {
                        quality: string;
                        url: string;
                    }[];
                    name: string;
                    role: string;
                }[];
                featured: {
                    url: string;
                    type: string;
                    id: string;
                    image: {
                        quality: string;
                        url: string;
                    }[];
                    name: string;
                    role: string;
                }[];
                all: {
                    url: string;
                    type: string;
                    id: string;
                    image: {
                        quality: string;
                        url: string;
                    }[];
                    name: string;
                    role: string;
                }[];
            };
            url: string;
            type: string;
            id: string;
            image: {
                quality: string;
                url: string;
            }[];
            language: string;
            year: string | null;
            album: {
                url: string | null;
                id: string | null;
                name: string | null;
            };
            label: string | null;
            duration: number | null;
            name: string;
            playCount: number | null;
            explicitContent: boolean;
            releaseDate: string | null;
            hasLyrics: boolean;
            lyricsId: string | null;
            copyright: string | null;
            downloadUrl: {
                quality: string;
                url: string;
            }[];
            lyrics?: {
                lyrics: string;
                copyright: string;
                snippet: string;
            } | undefined;
        }[] | null;
        similarArtists: {
            url: string;
            type: string;
            id: string;
            image: {
                quality: string;
                url: string;
            }[];
            name: string;
            dominantType: string;
            similarArtists: {
                id: string;
                name: string;
            }[] | null;
            languages: Record<string, string> | null;
            wiki: string;
            twitter: string;
            dob: string;
            aka: string;
            fb: string;
            bio: string | null;
            isRadioPresent: boolean;
        }[] | null;
        wiki: string | null;
        twitter: string | null;
        dob: string | null;
        fb: string | null;
        bio: {
            title: string | null;
            text: string | null;
            sequence: number | null;
        }[] | null;
        isRadioPresent: boolean | null;
        availableLanguages: string[];
        followerCount: number | null;
        fanCount: string | null;
    } | null>;
    getArtistByLink: (args: GetArtistByLinkArgs) => Promise<{
        url: string;
        type: string;
        id: string;
        image: {
            quality: string;
            url: string;
        }[];
        name: string;
        isVerified: boolean | null;
        dominantLanguage: string | null;
        dominantType: string | null;
        topAlbums: {
            songs: {
                artists: {
                    primary: {
                        url: string;
                        type: string;
                        id: string;
                        image: {
                            quality: string;
                            url: string;
                        }[];
                        name: string;
                        role: string;
                    }[];
                    featured: {
                        url: string;
                        type: string;
                        id: string;
                        image: {
                            quality: string;
                            url: string;
                        }[];
                        name: string;
                        role: string;
                    }[];
                    all: {
                        url: string;
                        type: string;
                        id: string;
                        image: {
                            quality: string;
                            url: string;
                        }[];
                        name: string;
                        role: string;
                    }[];
                };
                url: string;
                type: string;
                id: string;
                image: {
                    quality: string;
                    url: string;
                }[];
                language: string;
                year: string | null;
                album: {
                    url: string | null;
                    id: string | null;
                    name: string | null;
                };
                label: string | null;
                duration: number | null;
                name: string;
                playCount: number | null;
                explicitContent: boolean;
                releaseDate: string | null;
                hasLyrics: boolean;
                lyricsId: string | null;
                copyright: string | null;
                downloadUrl: {
                    quality: string;
                    url: string;
                }[];
                lyrics?: {
                    lyrics: string;
                    copyright: string;
                    snippet: string;
                } | undefined;
            }[] | null;
            artists: {
                primary: {
                    url: string;
                    type: string;
                    id: string;
                    image: {
                        quality: string;
                        url: string;
                    }[];
                    name: string;
                    role: string;
                }[];
                featured: {
                    url: string;
                    type: string;
                    id: string;
                    image: {
                        quality: string;
                        url: string;
                    }[];
                    name: string;
                    role: string;
                }[];
                all: {
                    url: string;
                    type: string;
                    id: string;
                    image: {
                        quality: string;
                        url: string;
                    }[];
                    name: string;
                    role: string;
                }[];
            };
            url: string;
            type: string;
            id: string;
            image: {
                quality: string;
                url: string;
            }[];
            language: string;
            year: number | null;
            name: string;
            description: string;
            playCount: number | null;
            explicitContent: boolean;
            songCount: number | null;
        }[] | null;
        topSongs: {
            artists: {
                primary: {
                    url: string;
                    type: string;
                    id: string;
                    image: {
                        quality: string;
                        url: string;
                    }[];
                    name: string;
                    role: string;
                }[];
                featured: {
                    url: string;
                    type: string;
                    id: string;
                    image: {
                        quality: string;
                        url: string;
                    }[];
                    name: string;
                    role: string;
                }[];
                all: {
                    url: string;
                    type: string;
                    id: string;
                    image: {
                        quality: string;
                        url: string;
                    }[];
                    name: string;
                    role: string;
                }[];
            };
            url: string;
            type: string;
            id: string;
            image: {
                quality: string;
                url: string;
            }[];
            language: string;
            year: string | null;
            album: {
                url: string | null;
                id: string | null;
                name: string | null;
            };
            label: string | null;
            duration: number | null;
            name: string;
            playCount: number | null;
            explicitContent: boolean;
            releaseDate: string | null;
            hasLyrics: boolean;
            lyricsId: string | null;
            copyright: string | null;
            downloadUrl: {
                quality: string;
                url: string;
            }[];
            lyrics?: {
                lyrics: string;
                copyright: string;
                snippet: string;
            } | undefined;
        }[] | null;
        singles: {
            artists: {
                primary: {
                    url: string;
                    type: string;
                    id: string;
                    image: {
                        quality: string;
                        url: string;
                    }[];
                    name: string;
                    role: string;
                }[];
                featured: {
                    url: string;
                    type: string;
                    id: string;
                    image: {
                        quality: string;
                        url: string;
                    }[];
                    name: string;
                    role: string;
                }[];
                all: {
                    url: string;
                    type: string;
                    id: string;
                    image: {
                        quality: string;
                        url: string;
                    }[];
                    name: string;
                    role: string;
                }[];
            };
            url: string;
            type: string;
            id: string;
            image: {
                quality: string;
                url: string;
            }[];
            language: string;
            year: string | null;
            album: {
                url: string | null;
                id: string | null;
                name: string | null;
            };
            label: string | null;
            duration: number | null;
            name: string;
            playCount: number | null;
            explicitContent: boolean;
            releaseDate: string | null;
            hasLyrics: boolean;
            lyricsId: string | null;
            copyright: string | null;
            downloadUrl: {
                quality: string;
                url: string;
            }[];
            lyrics?: {
                lyrics: string;
                copyright: string;
                snippet: string;
            } | undefined;
        }[] | null;
        similarArtists: {
            url: string;
            type: string;
            id: string;
            image: {
                quality: string;
                url: string;
            }[];
            name: string;
            dominantType: string;
            similarArtists: {
                id: string;
                name: string;
            }[] | null;
            languages: Record<string, string> | null;
            wiki: string;
            twitter: string;
            dob: string;
            aka: string;
            fb: string;
            bio: string | null;
            isRadioPresent: boolean;
        }[] | null;
        wiki: string | null;
        twitter: string | null;
        dob: string | null;
        fb: string | null;
        bio: {
            title: string | null;
            text: string | null;
            sequence: number | null;
        }[] | null;
        isRadioPresent: boolean | null;
        availableLanguages: string[];
        followerCount: number | null;
        fanCount: string | null;
    } | null>;
    getArtistSongs: (args: GetArtistSongsArgs) => Promise<{
        total: number;
        songs: {
            artists: {
                primary: {
                    url: string;
                    type: string;
                    id: string;
                    image: {
                        quality: string;
                        url: string;
                    }[];
                    name: string;
                    role: string;
                }[];
                featured: {
                    url: string;
                    type: string;
                    id: string;
                    image: {
                        quality: string;
                        url: string;
                    }[];
                    name: string;
                    role: string;
                }[];
                all: {
                    url: string;
                    type: string;
                    id: string;
                    image: {
                        quality: string;
                        url: string;
                    }[];
                    name: string;
                    role: string;
                }[];
            };
            url: string;
            type: string;
            id: string;
            image: {
                quality: string;
                url: string;
            }[];
            language: string;
            year: string | null;
            album: {
                url: string | null;
                id: string | null;
                name: string | null;
            };
            label: string | null;
            duration: number | null;
            name: string;
            playCount: number | null;
            explicitContent: boolean;
            releaseDate: string | null;
            hasLyrics: boolean;
            lyricsId: string | null;
            copyright: string | null;
            downloadUrl: {
                quality: string;
                url: string;
            }[];
            lyrics?: {
                lyrics: string;
                copyright: string;
                snippet: string;
            } | undefined;
        }[];
    } | null>;
    getArtistAlbums: (args: GetArtistAlbumsArgs) => Promise<{
        total: number;
        albums: {
            songs: {
                artists: {
                    primary: {
                        url: string;
                        type: string;
                        id: string;
                        image: {
                            quality: string;
                            url: string;
                        }[];
                        name: string;
                        role: string;
                    }[];
                    featured: {
                        url: string;
                        type: string;
                        id: string;
                        image: {
                            quality: string;
                            url: string;
                        }[];
                        name: string;
                        role: string;
                    }[];
                    all: {
                        url: string;
                        type: string;
                        id: string;
                        image: {
                            quality: string;
                            url: string;
                        }[];
                        name: string;
                        role: string;
                    }[];
                };
                url: string;
                type: string;
                id: string;
                image: {
                    quality: string;
                    url: string;
                }[];
                language: string;
                year: string | null;
                album: {
                    url: string | null;
                    id: string | null;
                    name: string | null;
                };
                label: string | null;
                duration: number | null;
                name: string;
                playCount: number | null;
                explicitContent: boolean;
                releaseDate: string | null;
                hasLyrics: boolean;
                lyricsId: string | null;
                copyright: string | null;
                downloadUrl: {
                    quality: string;
                    url: string;
                }[];
                lyrics?: {
                    lyrics: string;
                    copyright: string;
                    snippet: string;
                } | undefined;
            }[] | null;
            artists: {
                primary: {
                    url: string;
                    type: string;
                    id: string;
                    image: {
                        quality: string;
                        url: string;
                    }[];
                    name: string;
                    role: string;
                }[];
                featured: {
                    url: string;
                    type: string;
                    id: string;
                    image: {
                        quality: string;
                        url: string;
                    }[];
                    name: string;
                    role: string;
                }[];
                all: {
                    url: string;
                    type: string;
                    id: string;
                    image: {
                        quality: string;
                        url: string;
                    }[];
                    name: string;
                    role: string;
                }[];
            };
            url: string;
            type: string;
            id: string;
            image: {
                quality: string;
                url: string;
            }[];
            language: string;
            year: number | null;
            name: string;
            description: string;
            playCount: number | null;
            explicitContent: boolean;
            songCount: number | null;
        }[];
    } | null>;
}
