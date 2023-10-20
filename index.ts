import { Client, Events, GatewayIntentBits, InteractionType, Partials, PresenceData } from "discord.js";

let client = new Client({
    partials: [Partials.Channel, Partials.GuildMember, Partials.Reaction, Partials.User, Partials.Message],
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildModeration,
        GatewayIntentBits.GuildPresences,
    ],
});

client.once(Events.ClientReady, () => {
    setPresence();
    console.log(`Logged in as ${client.user!.tag}!`);
});

client.on(Events.InteractionCreate, interaction => {
    switch (interaction.type) {
        case InteractionType.ApplicationCommand: // slash command
            console.log(interaction); break;
        case InteractionType.ModalSubmit: // modal submit
            console.log(interaction); break;
        case InteractionType.MessageComponent:
            console.log(interaction); break;
        case InteractionType.ApplicationCommandAutocomplete:
            console.log(interaction); break;
        default:
            console.log(interaction);
    }

});

function setPresence() {
    let presence: PresenceData = {
        status: 'online',
        activities: [
            {
                name: 'Keebot service',
                type: 0,
                state: 'online'
            },
        ],
    }
    client.user!.setPresence(presence);
}

client.login(Bun.env.DISCORD_SECRET_TOKEN);