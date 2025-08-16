# Discord Music Bot (Ready to Deploy on Render)

## Features
- Play music from YouTube with `!play <song name or URL>`
- Skip with `!skip`
- Stop playback with `!stop`

## Setup

1. **Create a Discord bot:**  
   Go to [Discord Developer Portal](https://discord.com/developers/applications), create a new application, add a bot, and copy its token.

2. **Configure the bot:**  
   - Clone this repo or upload the files to your own repo.
   - Set your bot token in `.env`:  
     ```
     BOT_TOKEN=YOUR_DISCORD_BOT_TOKEN_HERE
     ```
   - Invite your bot to your server with the required permissions (Send Messages, Connect, Speak).

3. **Deploy on Render:**  
   - Go to [Render](https://render.com/), create a new Web Service.
   - Connect your repo or upload these files.
   - Set the start command to `npm start`.
   - Add your `.env` variable via Render's dashboard ("Environment" settings).

## Usage

- Type `!play <song name or YouTube URL>` in your server (with the bot in a voice channel).
- Type `!skip` to skip the current song.
- Type `!stop` to stop playback.

---

**Note:**  
Render's free plan may sleep after inactivity. For continuous music playback, consider a paid plan.
