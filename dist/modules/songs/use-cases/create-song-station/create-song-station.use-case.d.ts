import type { IUseCase } from "#common/types";
export declare class CreateSongStationUseCase implements IUseCase<string, string | null> {
    constructor();
    execute(songId: string): Promise<string | null>;
}
