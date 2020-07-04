exports.run = (client, message, args) => {
    // HTU: !employe @username @roletogrant

    const gUser = message.args[1];
    const gRole = message.args[2];

    if(gUser === '') {return 'Désolé, vous devez spécifier un utilisateur.';}
    if(gRole === '') {return 'Désolé, vous devez spécifier un role à attribuer.';}

    if (!message.member.hasPermission("MANAGE_ROLES")) {
        message.delete();
        message.channel.send(`Vous n'avez pas les permissions nécessaires pour éxécuter cette commande.`);
    }

    if (!gRole === '' && !gUser === '') {
        message.delete();
        message.channel.send('Bien joué! Vous avez bien rentré la commande!');
    }



    //const grantedRole = args.join(' ');
    //const grantedUser = args.join(' ');

    //if (!message.member.hasPermission("MANAGE_ROLES")) {
    //    message.delete();
    //    message.channel.send(`Vous n'avez pas les permissions nécessaires pour éxécuter cette commande.`);
    //}

    //if(grantedRole === ' ') {
    //    message.delete();
    //    message.channel.send(`Veuillez entrer un role valide à autoriser.`);

    //    // Récupérer le role
    //    // Récupérer le temps
    //    // Récupérer le user
    //}


};

exports.help = {
    name: 'grantrole'
};