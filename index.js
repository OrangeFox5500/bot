require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const { DisTube } = require('distube');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

const distube = new DisTube(client, {
  leaveOnEmpty: true,
  emitNewSongOnly: true
});

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Music commands: play, skip, stop
client.on('messageCreate', async message => {
  if (message.author.bot || !message.guild) return;

  const prefix = '!';
  if (!message.content.startsWith(prefix)) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'play') {
    if (!args[0]) return message.reply('Please provide a song name or URL!');
    distube.play(message.member.voice.channel, args.join(' '), { textChannel: message.channel, member: message.member });
  } else if (command === 'skip') {
    distube.skip(message);
    message.channel.send('⏭️ Skipped!');
  } else if (command === 'stop') {
    distube.stop(message);
    message.channel.send('⏹️ Stopped playback.');
  }
});

// DisTube event listeners (optional, for feedback)
distube.on('playSong', (queue, song) =>
  queue.textChannel.send(`🎶 Playing: \`${song.name}\` - \`${song.formattedDuration}\``)
);

distube.on('finish', queue =>
  queue.textChannel.send('✅ Queue finished!')
);

client.login(process.env.BOT_TOKEN);