const { MessageEmbed } = require('discord.js');

exports.run = (client, message, args) => {
    const punchType = args.join(' ');
    const punchTime = message.createdAt;
    const punchUser = message.author.id;

    const embed = new MessageEmbed()
        .setTitle('Système de Punch')
        .addFields(
            { name: 'Type de punch', value: punchType, inline: true },
            { name: 'Employé', value: '<@' + punchUser + '>', inline: true },
            { name: 'Date & Heure de Punch', value: punchTime },
        )

    switch(punchType) {
        case 'in':
            message.delete();
            embed.setColor(3066993);
            message.channel.send(embed).catch(err => console.log(err));
            break;
        case 'out':
            message.delete();
            embed.setColor(15158332);
            message.channel.send(embed).catch(err => console.log(err));
            break;
        default:
            message.delete();
            message.channel.send('Votre type de punch n\'est pas correcte. Veuillez entrer \'in\' ou \'out\'.');
            break;
    };
};

exports.help = {
    name: 'punch'
};