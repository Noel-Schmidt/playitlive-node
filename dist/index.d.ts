export default class PlayItLiveAPI {
    private apiUrl;
    private apiToken;
    constructor(apiUrl: string, apiToken: string);
    getSettings(): Promise<string>;
    /**
     * Get all informations from track
     */
    getTrack(guid: string): Promise<string>;
    /**
     * Get informations from current players (e.g Song data)
     */
    getPlayers(): Promise<string>;
    getPlayerLevels(): Promise<unknown>;
    /**
     * Get information from selected player (e.g Song data)
     */
    getPlayerByIndex(index: number): Promise<string>;
    /**
     * Start track on selected player
     */
    startPlayer(index: number): Promise<string>;
    /**
     * Pause track on selected player
     */
    pausePlayer(index: number): Promise<string>;
    /**
     * Eject track on selected player
     */
    ejectPlayer(index: number): Promise<string>;
    getPlayoutMode(): Promise<string>;
    toggleAutomation(): Promise<string>;
    toggleLogScheduler(): Promise<string>;
    getMasterState(): Promise<string>;
    playTrackAtMaster(): Promise<string>;
    pauseTrackAtMaster(): Promise<string>;
    stopTrackAtMaster(): Promise<string>;
    nextTrackAtMaster(): Promise<string>;
}
