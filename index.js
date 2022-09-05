const { 
    Client, 
    GatewayIntentBits,

    EmbedBuilder,
    ButtonStyle,
    ActionRowBuilder,
    ButtonBuilder,
    SelectMenuBuilder,
    ActivityType,
} = require("discord.js");

const ServerInformation = {
    SevenDaysToDie: {
        IPAddress: "51.81.167.154",
        Port: "25600",
        
        Owner: "@Connor Cole#0001",
        Emoji: "1005219115893543052",
    }
}

const intents = [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
];

const activities = [
    [{  type: ActivityType.Watching, name: "the Middle Floors." }],
    [{ type: ActivityType.Playing, name: "with the squeegee in the parking lot." }],
    [{ type: ActivityType.Listening, name: "to you. Heard that bro." }],
    [{ type: ActivityType.Watching, name: "all screens in the whole building." }],
    [{ type: ActivityType.Watching, name: "Ben drink the truffalo sauce." }],
    [{ type: ActivityType.Playing, name: "with the broken equipment." }],
    [{ type: ActivityType.Watching, name: "Shake Side." }],
    [{ type: ActivityType.Watching, name: "Chip." }],
    [{ type: ActivityType.Watching, name: "Grill." }],
    [{ type: ActivityType.Watching, name: "Southwest." }],
    [{ type: ActivityType.Watching, name: "Outside Exp." }],
    [{ type: ActivityType.Competing, name: "in Minecraft Bedwars." }],
    [{ type: ActivityType.Competing, name: "in health code violations." }],
    [{ type: ActivityType.Listening, name: "... heard that bro." }],
    [{ type: ActivityType.Watching, name: "A series Nedo will never see." }],
    [{ type: ActivityType.Watching, name: "Connor's code." }],
];

const joinMessages = [
    // Additions in @1.1.x
    `MEMBER joined the server.`,
    `MEMBER obtained the Elden Ring.`,
    `MEMBER brought Krispy Kreme.`,
    `MEMBER was welcomed by a bitch.`,
    `MEMBER spawned in.`,
    `MEMBER came to work.`,
    `MEMBER just fucked up.`,
    `MEMBER learned Grill.`,
    `MEMBER fell into the Backrooms.`,
    `MEMBER started eating raw chicken.`,
    `Hee hee hee haw, MEMBER.`,

    // Additions in @1.2.x
    `MEMBER got started on prep.`,
    `MEMBER made truffalo sauce.`,
    `MEMBER started shaking wings.`,
    `MEMBER met Sidney.`,
    `MEMBER got put onto the menu.`,
    `MEMBER received a care package... it's traditional wings.`,
    `MEMBER threw a care package (traditional wings) at Michael's.`,
    `MEMBER showed up late.`,
    `MEMBER was an hour late to their shift.`,
    `MEMBER clocked in.`,
    `MEMBER got a Bird Dawg hat. Just kidding, that's mine.`,
];

const leaveMessages = [
    // Additions in @1.1.x
    `MEMBER left the server.`,
    `MEMBER dropped the Elden Ring.`,
    `MEMBER did the Middle Floors.`,
    `MEMBER dipped their hairline into the fryers.`,
    `MEMBER pulled a Commander Callout.`,
    `MEMBER fell into the void.`,
    `MEMBER is a bitch.`,
    `Fuck you, MEMBER.`,
    `Hee hee hee oh fuck naw, MEMBER.`,
    `Bye, MEMBER.`,
    `MEMBER met Chris.`,
    `MEMBER got hit with an onion.`,
    `MEMBER fell out of the Backrooms.`,
    `MEMBER got salmonella.`,
    `MEMBER got COVID-19.`,
    `MEMBER dropped out.`,
    `MEMBER doesn't like you.`,
    `MEMBER quit, maybe?`,
    `MEMBER was deleted.`,
    `MEMBER forgot something.`,
    `MEMBER put in their two weeks.`,

    // Additions in @1.2.x
    `MEMBER went to Michael's.`,
    `MEMBER went to Costco.`,
    `MEMBER couldn't handle the heat.`,
    `MEMBER didn't get the Pizza Hat.`,
    `MEMBER got sent to dish pit.`,
    `MEMBER made a Trad Drop.`,
    `MEMBER scared a customer.`,
    `MEMBER jumped off of a bridge.`,
    `MEMBER went home.`,
    `MEMBER wasn't the closer.`,
    `MEMBER did the fryers.`,
    `MEMBER didn't bring candy.`,
    `MEMBER forgot Connor's Twizzler Nibs.`,
    `MEMBER had a sit-down with a Manager.`,
    `MEMBER forgot how to make a Bird Dawg.`,
    `MEMBER dropped a Pizza.`,
    `MEMBER met Nate.`,
    `MEMBER was a health code violation.`,
    `MEMBER did not hear that, bro.`
];

const client = new Client({ intents });
client.login("YOUR-TOKEN-HERE");

client.on("ready", async() => {
    console.log(`Service : COMMISSIONS.COALTER.HANGOUT : Online`);

    setInterval(() => {
        client.user.setPresence({ activities: activities[Math.floor(Math.random() * activities.length)], status: "idle" });
    }, 20000);
});

client.on("guildMemberAdd", async(member) => {
    const msg = joinMessages[Math.floor(Math.random() * joinMessages.length)];
    const message = msg.replace("MEMBER", member);

    client.channels.cache.get("1005221843713663016").send({ content: message });
});

client.on("guildMemberRemove", async(member) => {
    const msg = leaveMessages[Math.floor(Math.random() * leaveMessages.length)];
    const message = msg.replace("MEMBER", member);

    client.channels.cache.get("1005221843713663016").send({ content: message });
});

client.on("messageCreate", async(message) => {
    const adminPrefix = "--";
    const admins = [
        "333987747112943626"
    ];

    if(!admins.includes(message.author.id)) return;

    if(message.content.startsWith(adminPrefix)) {
        const args = message.content.slice(adminPrefix.length).trim().split(" ");
        const command = args.shift().toLowerCase();

        if(command === "forcemethod") {
            const method = args[0];
            if(method === "setup") {
                setup();
                return message.reply({ content: "`setup()` method successfully ran." });
            }
        }

        if(command === "ping") {
            return message.reply({ content: `${client.ws.ping} ms.` });
        }
        
        if(command === "setupserver") {
            const server = args[0];
            if(server === "7d2d") {
               client.channels.cache.get("1016187892076396605").send({
                   embeds: [
                       new EmbedBuilder()
                           .setDescription("**7 Days to Die** Dedicated Server\n\n **\\*** Owner : @Connor Cole#0001\n**\\*** IP Address: " + ServerInformation.SevenDaysToDie.IPAddress + "\n**\\*** Port: " + ServerInformation.SevenDaysToDie.Port)
                           .setColor("Red")
                           .setThumbnail(message.guild.emojis.cache.get(ServerInformation.SevenDaysToDie.Emoji).url)
                   ]
               });
            }
        }
    }
});

client.on("interactionCreate", async(i) => {
    if(i.isButton()) {
        if(i.customId === "pings.member_join") {
            if(i.member.roles.cache.has("1016100168652832779")) i.member.roles.remove("1016100168652832779");
            else i.member.roles.add("1016100168652832779");

        } else if(i.customId === "pings.important") {
            if(i.member.roles.cache.has("1016100219663962122")) i.member.roles.remove("1016100219663962122");
            else i.member.roles.add("1016100219663962122");
        } else if(i.customId === "pings.game_events") {
            if(i.member.roles.cache.has("1016100752038567936")) i.member.roles.remove("1016100752038567936");
            else i.member.roles.add("1016100752038567936");
        }

        i.reply({ content: "Roles modified successfully.", ephemeral: true });
    } else if(i.isSelectMenu()) {
        if(i.customId === "games") {
            const games = i.values;
            const allRoles = [
                "1016100405790376017", // Minecraft
                "1016100460454760541", // Elden Ring
                "1016100491601645600", // CS:GO
                "1016100639660580874", // Phasmophobia
                "1016100516687794288", // 7 Days to Die
                "1016100706480033792", // Terraria
            ];

            const roles = [];

            games.forEach(g => {
                const game = g.split(".")[1];
                if(game === "minecraft") {
                    roles.push("1016100405790376017");
                }

                if(game === "eldenring") {
                    roles.push("1016100460454760541");
                }

                if(game === "csgo") {
                    roles.push("1016100491601645600");
                }

                if(game === "phasmo") {
                    roles.push("1016100639660580874");
                }

                if(game === "7d2d") {
                    roles.push("1016100516687794288");
                }

                if(game === "terraria") {
                    roles.push("1016100706480033792");
                }
            });

            allRoles.forEach(role => {
                if(roles.includes(role)) {
                    if(!i.member.roles.cache.has(role)) i.member.roles.add(role);
                } else if(!roles.includes(role) && i.member.roles.cache.has(role)) {
                    i.member.roles.remove(role);
                }
            });

            return i.reply({ content: "Roles modified successfully.", ephemeral: true });
        }
    }
})

function setup() {
    const RulesEmbed = new EmbedBuilder()
        .setTitle("Server Rules")
        .setDescription("Please follow these rules so that Connor doesn't ban you.\n\n**Rule 1.** Don't be a bitch. Oops, gotta ban Nedo.\n\n**Rule 2.** Give Connor (Cole) 100$. Mhm. Totally valid.\n\nOkay for real now lmao")
        .addFields(
            { name: "Rule 1", value: "Be respectful to others. Or don't." },
            { name: "Rule 2", value: "Set your nickname to your actual name please (this is preference)." },
        )
        .setColor("Red")
        .setFooter({ text: "Rules", iconURL: client.guilds.cache.get("893700349309878323").iconURL() })

    const RolesEmbed = new EmbedBuilder()
        .setTitle("Obtainable Roles")
        .setDescription(
            `The Hangout has a collection of different roles you can get. Look below.\n\n
            <@&1016100168652832779> - Get pinged when a new member joins the server.\n
            <@&1016100219663962122> - Get pinged when Connor says something important (for once).\n
            <@&1016100752038567936> - Get pinged when the server has little game events.\n\n

            <@&1016100405790376017> - Get access to Minecraft related channels.\n
            <@&1016100460454760541> - Get access to Elden Ring related channels.\n
            <@&1016100491601645600> - Get access to CS:GO related channels.\n
            <@&1016100516687794288> - Get access to 7 Days to Die related channels.\n
            <@&1016100639660580874> - Get access to Phasmophobia related channels.\n
            <@&1016100706480033792> - Get access to Terraria related channels.\n\n
            `
        )
        .setColor("Green")
        .setFooter({ text: "Roles", iconURL: client.guilds.cache.get("893700349309878323").iconURL() })

    const RolesComponents = [
        new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setStyle(ButtonStyle.Primary)
                    .setCustomId("pings.member_join")
                    .setLabel("Member Joins Ping")
                    .setEmoji({ id: "1016103268788744233" }),
                new ButtonBuilder()
                    .setStyle(ButtonStyle.Secondary)
                    .setCustomId("pings.important")
                    .setLabel("Important Messages Ping")
                    .setEmoji({ id: "1016103267408805948" }),
                new ButtonBuilder()
                    .setStyle(ButtonStyle.Danger)
                    .setCustomId("pings.game_events")
                    .setLabel("Game Events")
                    .setEmoji({ id: "1016103363810705539" })
            ),

        new ActionRowBuilder()
            .addComponents(
                new SelectMenuBuilder()
                    .setCustomId("games")
                    .setPlaceholder("Select Your Games")
                    .setOptions(
                        {
                            label: `Minecraft`,
                            description: `Obtain the @Minecraft role.`,
                            emoji: { id: "965511246763921428" },
                            value: "games.minecraft"
                        },

                        {
                            label: `Elden Ring`,
                            description: `Obtain the @Elden Ring role.`,
                            emoji: { id: "965510255876378624" },
                            value: "games.eldenring",
                        },

                        {
                            label: "CS:GO",
                            description: `Obtain the @CS:GO role.`,
                            emoji: { id: "1005217442005524522" },
                            value: "games.csgo",
                        },

                        {
                            label: "Phasmophobia",
                            description: `Obtain the @Phasmophobia role.`,
                            emoji: { id: "1016102702431866910" },
                            value: "games.phasmo",
                        },

                        {
                            label: "7 Days to Die",
                            description: `Obtain the @7 Days to Die role.`,
                            emoji: { id: "1005219115893543052" },
                            value: "games.7d2d",
                        },

                        {
                            label: "Terraria",
                            description: "Obtain the @Terraria role.",
                            emoji: { id: "1016102699856568362" },
                            value: "games.terraria",
                        }
                    )
                    .setMinValues(1)
                    .setMaxValues(6)
            )
    ]

    const rulesChannel = "1016157320461434973";
    const rolesChannel = "965507226469031936";
    const testChannel = "1016176888516976712";

    client.channels.cache.get(rolesChannel).send({
        embeds: [ RolesEmbed ], components: RolesComponents,
    });

    client.channels.cache.get(rulesChannel).send({
        embeds: [ RulesEmbed ],
    });
}
