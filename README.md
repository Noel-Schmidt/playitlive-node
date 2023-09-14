![unoffical node js libary](https://github.com/Noel-Schmidt/playitlive-node/assets/76415683/18982ba3-48a7-4622-96f9-74fd88199637)
<h1 align="center">
  Node PLAYITLIVE 📚
</h1>
<p align="center">
   The node.js library for <a href="https://www.playitsoftware.com/">www.playitsoftware.com</a>.
</p>


Contents
=======
 * [Why?](#why)
 * [Installation](#installation)
 * [Example](#installation)

### Why?
---
I built the tool primarily for use with the web radio TubeLive.de in order to easily integrate the PlayItLive API into all projects.

### Installation
--- 
> **Warning**
> The node package is not yet available!

```npm install playitlive-node```

### Example
---

```ts
import PlayItLiveAPI from "playitlive-node";

const playItLiveApi = new PlayItLiveAPI("https://example.com", "abc")

playItLiveApi.getMasterState().then(res => {
    console.log(JSON.stringify(res))
})
```

