exports.run = (client, message, args) => {
    const managementType = args.join(' ');

    const recruitRole = message.guild.roles.cache.get('722601664413958206');
    const employeeRole = message.guild.roles.cache.get('718669012833402923');
    const deliveryRole = message.guild.roles.cache.get('718668995427041371');
    const superviserRole = message.guild.roles.cache.get('724099337822404608');

    const recruitedMember = 'Personne sélectionné';

    switch(managementType) {
        case 'recruit':
            message.delete();
            message.channel.send(`Vous avez recruté ${recruitedMember} et le grade de ${recruitRole} lui à été attribué.`);
    }

    // message.member.hasPermission("MANAGE_ROLES")
};

exports.help = {
    name: 'management'
};