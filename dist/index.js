"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class PlayItLiveAPI {
    apiUrl = "";
    apiToken = "";
    constructor(apiUrl, apiToken) {
        this.apiUrl = apiUrl;
        this.apiToken = apiToken;
    }
    getSettings() {
        return new Promise((resolve, reject) => {
            axios_1.default.get(this.apiUrl + `/api/control/settings?apiKey=${this.apiToken}`)
                .then(response => {
                resolve(response.data);
            }).catch(error => {
                reject(error);
            });
        });
    }
    /**
     * Get all informations from track
     */
    getTrack(guid) {
        return new Promise((resolve, reject) => {
            axios_1.default.get(this.apiUrl + `/api/control/tracks/${guid}?apiKey=${this.apiToken}?apiKey=${this.apiToken}`)
                .then(response => {
                resolve(response.data);
            }).catch(error => {
                reject(error);
            });
        });
    }
    /**
     * Get informations from current players (e.g Song data)
     */
    getPlayers() {
        return new Promise((resolve, reject) => {
            axios_1.default.get(this.apiUrl + `/api/control/liveAssist/players?apiKey=${this.apiToken}`)
                .then(response => {
                resolve(response.data);
            }).catch(error => {
                reject(error);
            });
        });
    }
    getPlayerLevels() {
        return new Promise((resolve, reject) => {
            axios_1.default.get(this.apiUrl + `/api/control/liveAssist/players/levels?apiKey=${this.apiToken}`)
                .then(response => {
                resolve(response.data);
            }).catch(error => {
                reject(error);
            });
        });
    }
    /**
     * Get information from selected player (e.g Song data)
     */
    getPlayerByIndex(index) {
        return new Promise((resolve, reject) => {
            axios_1.default.get(this.apiUrl + `/api/control/liveAssist/players/${index}?apiKey=${this.apiToken}`)
                .then(response => {
                resolve(response.data);
            }).catch(error => {
                reject(error);
            });
        });
    }
    /**
     * Start track on selected player
     */
    startPlayer(index) {
        return new Promise((resolve, reject) => {
            axios_1.default.post(this.apiUrl + `/api/control/liveAssist/players/${index}/play?apiKey=${this.apiToken}`)
                .then(response => {
                resolve(response.data);
            }).catch(error => {
                reject(error);
            });
        });
    }
    /**
     * Pause track on selected player
     */
    pausePlayer(index) {
        return new Promise((resolve, reject) => {
            axios_1.default.post(this.apiUrl + `/api/control/liveAssist/players/${index}/pause?apiKey=${this.apiToken}`)
                .then(response => {
                resolve(response.data);
            }).catch(error => {
                reject(error);
            });
        });
    }
    /**
     * Eject track on selected player
     */
    ejectPlayer(index) {
        return new Promise((resolve, reject) => {
            axios_1.default.post(this.apiUrl + `/api/control/liveAssist/players/${index}/eject?apiKey=${this.apiToken}`)
                .then(response => {
                resolve(response.data);
            }).catch(error => {
                reject(error);
            });
        });
    }
    getPlayoutMode() {
        return new Promise((resolve, reject) => {
            axios_1.default.get(this.apiUrl + `/api/control/liveAssist/playoutMode?apiKey=${this.apiToken}`)
                .then(response => {
                resolve(response.data);
            }).catch(error => {
                reject(error);
            });
        });
    }
    toggleAutomation() {
        return new Promise((resolve, reject) => {
            axios_1.default.post(this.apiUrl + `/api/control/liveAssist/playoutMode/toggleAutomation?apiKey=${this.apiToken}`)
                .then(response => {
                resolve(response.data);
            }).catch(error => {
                reject(error);
            });
        });
    }
    toggleLogScheduler() {
        return new Promise((resolve, reject) => {
            axios_1.default.post(this.apiUrl + `/api/control/liveAssist/playoutMode/toggleLogScheduler?apiKey=${this.apiToken}`)
                .then(response => {
                resolve(response.data);
            }).catch(error => {
                reject(error);
            });
        });
    }
    getMasterState() {
        return new Promise((resolve, reject) => {
            axios_1.default.get(this.apiUrl + `/api/control/liveAssist/masterControl?apiKey=${this.apiToken}`)
                .then(response => {
                resolve(response.data);
            }).catch(error => {
                reject(error);
            });
        });
    }
    playTrackAtMaster() {
        return new Promise((resolve, reject) => {
            axios_1.default.post(this.apiUrl + `/api/control/liveAssist/masterControl/play?apiKey=${this.apiToken}`)
                .then(response => {
                resolve(response.data);
            }).catch(error => {
                reject(error);
            });
        });
    }
    pauseTrackAtMaster() {
        return new Promise((resolve, reject) => {
            axios_1.default.post(this.apiUrl + `/api/control/liveAssist/masterControl/pause?apiKey=${this.apiToken}`)
                .then(response => {
                resolve(response.data);
            }).catch(error => {
                reject(error);
            });
        });
    }
    stopTrackAtMaster() {
        return new Promise((resolve, reject) => {
            axios_1.default.post(this.apiUrl + `/api/control/liveAssist/masterControl/stop?apiKey=${this.apiToken}`)
                .then(response => {
                resolve(response.data);
            }).catch(error => {
                reject(error);
            });
        });
    }
    nextTrackAtMaster() {
        return new Promise((resolve, reject) => {
            axios_1.default.post(this.apiUrl + `/api/control/liveAssist/masterControl/playNext?apiKey=${this.apiToken}`)
                .then(response => {
                resolve(response.data);
            }).catch(error => {
                reject(error);
            });
        });
    }
}
exports.default = PlayItLiveAPI;
//# sourceMappingURL=index.js.map