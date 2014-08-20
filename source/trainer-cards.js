/**
 * Trainer Cards
 *
 * This is where the trainer cards commands
 * are located.
 *
 */

var trainerCards = {

  beforemath: 'judgmental',
  judge: 'judgmental',
  elitefourjudge: 'judgmental',
  judgmental: function (target, room, user) {
      if (!this.canBroadcast()) return;
      this.sendReplyBox('<center><img src="http://i.imgur.com/uPqFgYD.png"><br><font color="blue"><blink>Ace: Lapras</blink><br><font color="green">Stay Tuned!');
  },
  adipravar: function (target, room, user) {
      if (!this.canBroadcast()) return;
      this.sendReplyBox('<center><b>ChampiönŦAdipravar<br>Tier:Ubers Monotype<br>Type:Dark<br>Ace:Tyranitar-Mega<br>Rules<br>- No Hazards<br>- No Statusing Moves Exept Toxic<br>- No Praknster<br>- No Protecting Moves<br><img src="http://play.pokemonshowdown.com/sprites/xyani-shiny/tyranitar-mega.gif">');
  },
  skorxx: function (target, room, user) {
      if (!this.canBroadcast()) return;
      this.sendReplyBox('<center><b>Elite FiveŦSkorxx<br>Type:Grass<br>Ace:Roserade & Venusaur-Mega<br>Rules<br>- No Hazards<br>- Max One Mega<br>- No Whether Exept Rain<br><img src="http://play.pokemonshowdown.com/sprites/xyani-shiny/roserade.gif"><<img src="http://play.pokemonshowdown.com/sprites/xyani-shiny/venusaur-mega.gif">');
  },
  assista: function (target, room, user) {
      if (!this.canBroadcast()) return;
      this.sendReplyBox('<center><b>E ❤Head❤ Assista<br>Type:Psychic<br>Ace:Victini<br>Rules<br>- No Hazards<br>- No Sash<br>- No Status<br><img src="http://play.pokemonshowdown.com/sprites/xyani-shiny/victini.gif">');
  },
  darkpriest: function (target, room, user) {
      if (!this.canBroadcast()) return;
      this.sendReplyBox('<center><b>DarkPriestŦE5 Mode<br>Type:Water<br>Ace:Greninja<br>Rules<br>- No Rules<br><img src="http://play.pokemonshowdown.com/sprites/xyani-shiny/greninja.gif">');
  },
  alphatrion: function (target, room, user) {
      if (!this.canBroadcast()) return;
      this.sendReplyBox('<center><b>Gym Ldr.ŦAlphatrion<br>Type:Fairy=<br>Ace:Mawile Mega<br><img src="http://play.pokemonshowdown.com/sprites/xyani-shiny/mawile-mega.gif">');
  },
  paulito: function (target, room, user) {
      if (!this.canBroadcast()) return;
      this.sendReplyBox('<center><b>Gym Ldr.ŦPaulito<br>Type:Fighting<br>Ace:????');
  },
  axal: function (target, room, user) {
    if (!this.canBroadcast()) return;
    this.sendReplyBox('<center><b>Gym Ldr.ŦAxal<br>Type:Dragon<br>Ace:Kyurem-Black<br><img src="http://play.pokemonshowdown.com/sprites/xyani-shiny/kyurem-black.gif">');
  },
  link: function (target, room, user) {
    if (!this.canBroadcast()) return;
    this.sendReplyBox('<center><b>Gym Ldr.ŦLinkX5<br>Type:Grass<br>Ace:Venusaur-mega<br><img src="http://play.pokemonshowdown.com/sprites/xyani-shiny/venusaur-mega.gif">');
  },
  bradman: function (target, room, user) {
    if (!this.canBroadcast()) return;
    this.sendReplyBox('<center><b>Gym Ldr.ŦBradman<br>Type:Psychic<br>Ace:Alakazam<br><img src="http://play.pokemonshowdown.com/sprites/xyani-shiny/alakazam.gif">');
  },
  pmp: function (target, room, user) {
    if (!this.canBroadcast()) return;
    this.sendReplyBox('<center><b>Gym Ldr.ŦPmp<br>Type:Normal<br>Ace:Staraptor<br><img src="http://play.pokemonshowdown.com/sprites/xyani/staraptor.gif">');
  }, 
  assasin: function (target, room, user) {
      if (!this.canBroadcast()) return;
      this.sendReplyBox('<center><b>E5ŦAssasin<br>Type:Fire<b>Ace:Darmanitan<br>Rules<br>- No Sash<br>- No Spores<br><img src="http://play.pokemonshowdown.com/sprites/xyani-shiny/darmanitan.gif">');
  },
  lance: function (target, room, user) {
      if (!this.canBroadcast()) return;
      this.sendReplyBox('<center><b>FrntierHeadŦLance<br>Tier:OU(Gen 5)<br>Ace:Excadrill<br>Rules<br>- No Weather Except Sand<br>- No Hazards<br><img src="http://play.pokemonshowdown.com/sprites/xyani-shiny/excadrill.gif">');
  },
  iyan: function (target, room, user) {
      if (!this.canBroadcast()) return;
      this.sendReplyBox('<center><b>Elite FiveŦIyan<br>Type:Fighting<br>Ace:infernape<br>Rules<br>- No Azumarill<br>- No Hazards<br>- No Prankster<br><img src="http://play.pokemonshowdown.com/sprites/xyani-shiny/infernape.gif">');   
  },
  zapdos: function (target, room, user) {
      if (!this.canBroadcast()) return;
      this.sendReplyBox('<center><b>EFrontierŦZapdos<br>Tier:Ubers<br>Ace:Palkia<br>Rules<br>- No Lugia Stall<br>- No Status Exept Thunder Wave<br>- No Baton Pass<br>- Atleast One Non Uber Pokemon<br><img src="http://play.pokemonshowdown.com/sprites/xyani-shiny/palkia.gif">');
  },
  kathey: function (target, room, user) {
      if (!this.canBroadcast()) return;
      this.sendReplyBox('<center><b>FrontierŦKathey<br>Tier:Random  Battle<br>Ace:????<br>Rules<br>- Best Of 3 Match(Win 2 Times');
  },   
};

Object.merge(CommandParser.commands, trainerCards);
exports.trainerCards = trainerCards;
