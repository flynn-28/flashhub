# Flash Hub

## Overview
This project is an HTML page that uses ruffle to emulate flash games. It provides a UI for selecting the games. 

## Setup
1. Clone Repo
```
git clone https://github.com/flynn-28/flashhub.git
```
2. Open games dir
``` 
cd flashhub/games
```
3. Copy all games into this folder
4. return to project root
5. run ``main.py`` to generate a games list
```
python3 -m main
```
6. serve the static files
```
python3 -m http.server 3000
```
7. Navigate to the site: ``localhost:3000``
