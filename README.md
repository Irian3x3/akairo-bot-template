# Akairo Bot Template
This repository is for a bot made with the [discord-akairo](https://discord-akairo.github.io) framework.

This was not tested, but I use akairo all the time, so I guarantee you this will work.
## Usage
- Clone the repo:
```bash
git clone https://github.com/Irian3x3/akairo-bot-template.git
```
- Install dependencies:
```bash
cd akairo-bot-template
npm i
```
- Edit [src/config.json](src/config.json):
```json
{
    "core": {
        "token": "BOT_TOKEN",
        "prefix": ["BOT_PREFIX"],
        "owners": ["YOUR_ID"]
    }
}
```
- Run it:
```bash
npm test
# OR
npm start
# OR
node .

# Note that they all do the same thing. 
# If you want to change what it does, you can edit the package.json scripts.
```