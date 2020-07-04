module.exports = (client, member) => {
    let userWelcome = member.guild.channels.cache.find(c => c.name === "〖👋〗bienvenue");

    userWelcome.send(`Bienvenue sur l'application D du Burgershot. Merci de bien vouloir mettre ton nom RP: **<@${member.user.id}>** :person_raising_hand:`);
};