import axios from "axios";

export default class PlayItLiveAPI {
    private apiUrl: string = ""
    private apiKey: string = ""

    constructor(apiUrl: string, apiKey: string) {
        this.apiUrl = apiUrl;
        this.apiKey = apiKey;
    }

    public getSettings(): Promise<string> {
        return new Promise((resolve, reject) => {
            axios.get(this.apiUrl + `/api/control/settings?apiKey=${this.apiKey}`)
                .then(response => {
                    resolve(response.data)
                }).catch(error => {
                reject(error);
            })
        })
    }

    /**
     * Get all informations from track
     */
    public getTrack(guid: string): Promise<string> {
        return new Promise((resolve, reject) => {
            axios.get(this.apiUrl + `/api/control/tracks/${guid}?apiKey=${this.apiKey}`)
                .then(response => {
                    resolve(response.data)
                }).catch(error => {
                reject(error);
            })
        })
    }

    /**
     * Get informations from current players (e.g Song data)
     */
    public getPlayers(): Promise<string> {
        return new Promise((resolve, reject) => {
            axios.get(this.apiUrl + `/api/control/liveAssist/players?apiKey=${this.apiKey}`)
                .then(response => {
                    resolve(response.data)
                }).catch(error => {
                reject(error);
            })
        })
    }

    public getPlayerLevels() {
        return new Promise((resolve, reject) => {
            axios.get(this.apiUrl + `/api/control/liveAssist/players/levels?apiKey=${this.apiKey}`)
                .then(response => {
                    resolve(response.data)
                }).catch(error => {
                reject(error);
            })
        })
    }

    /**
     * Get information from selected player (e.g Song data)
     */
    public getPlayerByIndex(index: number): Promise<string> {
        return new Promise((resolve, reject) => {
            axios.get(this.apiUrl + `/api/control/liveAssist/players/${index}?apiKey=${this.apiKey}`)
                .then(response => {
                    resolve(response.data)
                }).catch(error => {
                reject(error);
            })
        })
    }

    /**
     * Start track on selected player
     */
    public startPlayer(index: number): Promise<string> {
        return new Promise((resolve, reject) => {
            axios.post(this.apiUrl + `/api/control/liveAssist/players/${index}/play?apiKey=${this.apiKey}`)
                .then(response => {
                    resolve(response.data)
                }).catch(error => {
                reject(error);
            })
        })
    }

    /**
     * Pause track on selected player
     */
    public pausePlayer(index: number): Promise<string> {
        return new Promise((resolve, reject) => {
            axios.post(this.apiUrl + `/api/control/liveAssist/players/${index}/pause?apiKey=${this.apiKey}`)
                .then(response => {
                    resolve(response.data)
                }).catch(error => {
                reject(error);
            })
        })
    }

    /**
     * Eject track on selected player
     */
    public ejectPlayer(index: number): Promise<string> {
        return new Promise((resolve, reject) => {
            axios.post(this.apiUrl + `/api/control/liveAssist/players/${index}/eject?apiKey=${this.apiKey}`)
                .then(response => {
                    resolve(response.data)
                }).catch(error => {
                reject(error);
            })
        })
    }

    public getPlayoutMode(): Promise<string> {
        return new Promise((resolve, reject) => {
            axios.get(this.apiUrl + `/api/control/liveAssist/playoutMode?apiKey=${this.apiKey}`)
                .then(response => {
                    resolve(response.data)
                }).catch(error => {
                reject(error);
            })
        })
    }

    public toggleAutomation(): Promise<string> {
        return new Promise((resolve, reject) => {
            axios.post(this.apiUrl + `/api/control/liveAssist/playoutMode/toggleAutomation?apiKey=${this.apiKey}`)
                .then(response => {
                    resolve(response.data)
                }).catch(error => {
                reject(error);
            })
        })
    }

    public toggleLogScheduler(): Promise<string> {
        return new Promise((resolve, reject) => {
            axios.post(this.apiUrl + `/api/control/liveAssist/playoutMode/toggleLogScheduler?apiKey=${this.apiKey}`)
                .then(response => {
                    resolve(response.data)
                }).catch(error => {
                reject(error);
            })
        })
    }

    public getMasterState(): Promise<string> {
        return new Promise((resolve, reject) => {
            axios.get(this.apiUrl + `/api/control/liveAssist/masterControl?apiKey=${this.apiKey}`)
                .then(response => {
                    resolve(response.data)
                }).catch(error => {
                reject(error);
            })
        })
    }

    public playTrackAtMaster(): Promise<string> {
        return new Promise((resolve, reject) => {
            axios.post(this.apiUrl + `/api/control/liveAssist/masterControl/play?apiKey=${this.apiKey}`)
                .then(response => {
                    resolve(response.data)
                }).catch(error => {
                reject(error);
            })
        })
    }

    public pauseTrackAtMaster(): Promise<string> {
        return new Promise((resolve, reject) => {
            axios.post(this.apiUrl + `/api/control/liveAssist/masterControl/pause?apiKey=${this.apiKey}`)
                .then(response => {
                    resolve(response.data)
                }).catch(error => {
                reject(error);
            })
        })
    }

    public stopTrackAtMaster(): Promise<string> {
        return new Promise((resolve, reject) => {
            axios.post(this.apiUrl + `/api/control/liveAssist/masterControl/stop?apiKey=${this.apiKey}`)
                .then(response => {
                    resolve(response.data)
                }).catch(error => {
                reject(error);
            })
        })
    }

    public nextTrackAtMaster(): Promise<string> {
        return new Promise((resolve, reject) => {
            axios.post(this.apiUrl + `/api/control/liveAssist/masterControl/playNext?apiKey=${this.apiKey}`)
                .then(response => {
                    resolve(response.data)
                }).catch(error => {
                reject(error);
            })
        })
    }
}
