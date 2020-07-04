exports.run = (client, message, args) => {
    let nbMessages = args.join(' ');
    let nbDelete = 0;

    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        message.delete();
        message.channel.send(`Vous n'avez pas les permissions nécessaires pour éxécuter cette commande.`).catch(err => console.log(err));
    }

    if (isNaN(nbMessages) || parseInt(nbMessages) <= 0) {
        message.delete();
        message.channel.send(`Veuillez choisir un nombre supérieur à 0.`).catch(err => console.log(err));
    }
    
    if (nbMessages > 100) {
        nbDelete = 100;
    } else {
        nbDelete = nbMessages + 1;
    }

    if (nbMessages > 100) {
        nbDelete = 100;
    } else if (nbMessages == 100) {
        nbDelete = 100;
    } else {
        nbDelete = nbMessages + 1;
    }

    message.channel.bulkDelete(nbDelete, true).catch(err => console.log(err));
};

exports.help = {
    name: 'clear'
};