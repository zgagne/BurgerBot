module.exports = (client, member) => {
    let userWelcome = member.guild.channels.cache.find(c => c.name === "〖👋〗bienvenue");

    userWelcome.send(`${member.user.username} à quitté.`);
};