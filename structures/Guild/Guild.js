const GuildMember = require('./GuildMember');
const GuildRank = require('./GuildRank');
const Color = require('../../utils/Color')
const Games = require('../../utils/MiniGames')

class Guild {
    constructor(data) {
        this.id = data._id;
        this.name = data.name;
        this.description = data.description ? data.description : null;

        this.coins = data.coinsEver;

        this.createdAt = data.created;
        this.joinable = data.joinable ? data.joinable : false;
        this.publiclyListed = data.publiclyListed;

        this.members = data.members.map(m => new GuildMember(m));
        this.ranks = data.ranks.map(r => new GuildRank(r))

        this.tag = {
            string: data.tag ? data.tag : null,
            color: data.tagColor ? Color.ColorString[data.tagColor] : null,
            hexColor: data.tagColor ? Color.ColorHex[data.tagColor] : null
        }

        this.legacyRank = parseInt(data.legacyRanking)+1;
        this.achievements = {
            winners: data.achievements.WINNERS || 0,
            experienceKings: data.achievements.EXPERIENCE_KINGS || 0,
            onlinePlayers: data.achievements.ONLINE_PLAYERS || 0
        }
        this.preferredGames = data.preferredGames.map(g => Games[g]);


    }
}
module.exports = Guild;