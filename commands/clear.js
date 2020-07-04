exports.run = (client, message, args) => {
    let messagesToDelete = args.join(' ');
    let messageDeleting = 0;

    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        message.delete();
        message.channel.send(`Vous n'avez pas les permissions nécessaires pour éxécuter cette commande.`).catch(err => console.log(err));
    }

    if (isNaN(nbMessages) || parseInt(nbMessages) <= 0) {
        message.delete();
        message.channel.send(`Veuillez choisir un nombre supérieur à 0.`).catch(err => console.log(err));
    }

    if(messagesToDelete > 100) {
        messageDeleting = 100;
        message.delete();
        message.channel.bulkDelete(messageDeleting, true).catch(err => console.log(err));
    } else if( messagesToDelete < 1) {
        messageDeleting = 1;
        message.delete();
        message.channel.bulkDelete(messageDeleting, true).catch(err => console.log(err));
    } else if ( messagesToDelete > 1 || messagesToDelete < 100 ) {
        messageDeleting = messagesToDelete;
        message.delete();
        message.channel.bulkDelete(messageDeleting, true).catch(err => console.log(err));
    }
};

exports.help = {
    name: 'clear'
};