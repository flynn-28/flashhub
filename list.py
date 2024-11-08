import os
import json

dir = "games"

output = "games.json"

def save():
    games = []

    for filename in os.listdir(dir):
        if filename.endswith(".swf"):
            game = {
                "name": os.path.splitext(filename)[0], 
                "path": f"{dir}/{filename}"
            }
            games.append(game)

    with open(output, "w") as file:
        json.dump(games, file, indent=4)
    

save()
