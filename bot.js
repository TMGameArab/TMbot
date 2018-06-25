const Discord = require('discord.js');
const client = new Discord.Client();

   var prefix = "!";
var cats = ["https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg","http://www.dogbazar.org/wp-content/uploads/2014/09/british-bull-dog-puppies.jpg","http://cdn2-www.dogtime.com/assets/uploads/gallery/german-shepherd-dog-breed-pictures/standing-7.jpg","http://cdn.akc.org/Marketplace/Breeds/German_Shepherd_Dog_SERP.jpg","https://animalso.com/wp-content/uploads/2016/12/black-german-shepherd_2.jpg","https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpg","https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg","http://www.i-love-cats.com/images/2015/04/12/cat-wallpaper-38.jpg","https://www.aspca.org/sites/default/files/cat-care_urine-marking_main-image.jpg","https://s-media-cache-ak0.pinimg.com/originals/f0/3b/76/f03b7614dfadbbe4c2e8f88b69d12e04.jpg","http://www.rd.com/wp-content/uploads/sites/2/2016/04/15-cat-wants-to-tell-you-attention.jpg","https://www.thelocal.de/userdata/images/article/fa6fd5014ccbd8f4392f716473ab6ff354f871505d9128820bbb0461cce1d645.jpg","https://www.adelaidezoo.com.au/wp-content/uploads/sites/2/animals/GiantPanda3Slider.jpg","http://imagem.band.com.br/f_230168.jpg"]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'animal')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});
   var prefix = "!";
var memes = ["https://cdn.discordapp.com/attachments/407566259941670912/407592356846764033/images.png","https://cdn.discordapp.com/attachments/352524940307857426/407876856810045440/windows-troll-p_o_5693819.jpg","https://cdn.discordapp.com/attachments/352524940307857426/407848033414414356/unknown.png,https://cdn.discordapp.com/attachments/352524940307857426/407828826232717312/FB_IMG_15164189434789615.jpg","https://cdn.discordapp.com/attachments/352524940307857426/407827457107034122/933.jpg","https://cdn.discordapp.com/attachments/352524940307857426/407645521025695775/23kph0.png","https://media.discordapp.net/attachments/352524940307857426/407626216150007830/1316071036879.png?width=320&height=473","https://media.discordapp.net/attachments/352524940307857426/407626216150007830/1316071036879.png?width=320&height=473","https://cdn.discordapp.com/attachments/352524940307857426/407554181671419914/meme.jpg","https://cdn.discordapp.com/attachments/352524940307857426/407266650853998592/image.jpg"]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'meme')) {
         var meme = new Discord.RichEmbed()
.setImage(memes[Math.floor(Math.random() * memes.length)])
message.channel.sendEmbed(meme);
    }
});

var معلش = ["https://cdn.discordapp.com/attachments/406693596293496842/412351951217360906/20883029_498456257153371_5670070990530074729_n.jpg","https://promediaz.com/ar/wp-content/uploads/sites/3/2018/01/592f4b5f594e8.jpg","https://scontent-sea1-1.cdninstagram.com/vp/1f1237dcc43a5d809916f07918bd66db/5B1FD928/t51.2885-15/e35/13696871_1264036036948504_1880787294_n.jpg?ig_cache_key=MTMyNDY4MzY1NjI3NDQ2ODI5OQ%3D%3D.2","http://www.shuuf.com/shof/uploads/2017/08/22/jpg/shof_6252d17093aa558.jpg","https://pbs.twimg.com/media/CsUwM91WEAA9RJV.jpg","https://datastandard.blob.core.windows.net/botimg/5a04cd88b93255412c785489.jpg"]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'معلش')) {
         var meme = new Discord.RichEmbed()
.setImage(معلش[Math.floor(Math.random() * معلش.length)])
message.channel.sendEmbed(meme);
    }
});


client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`**
سرفرنا قمد قدآ

                                 [https://discord.gg/mczMFJC] **`)
}).catch(console.error)
});

client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(`**

سرفرنا قمد قد

                                 [https://discord.gg/mczMFJC] **`)
}).catch(console.error)
});

client.on('message', msg => {
  if (msg.content === '~ping') {
    msg.reply('Pong!');
  }
});

client.on ('message',message => {
  if (message.content === '!avatar') {
    message.reply(message.author.avatarURL);
  }
});

client.on("message", (message) => {
    if (message.content.startsWith("!kick")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('*** You Dont Have Permission to do that ***');
        message.react("✔️")
        var member= message.mentions.members.first();
        member.kick().then((member) => {
            message.channel.send(":wave: " + member.displayName + " has been successfully kicked :point_right: ");
        }).catch(() => {
            message.channel.send("Access Denied");
        });
    }
});

client.on("message", (message) => {
    if (message.content.startsWith("!ban")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('*** You Dont Have Permission to do that ***');
        message.react("✔️")
        var member= message.mentions.members.first();
        member.ban().then((member) => {
            message.channel.send(":wave: " + member.displayName + " has been successfully baned :point_right: ");
        }).catch(() => {
            message.channel.send("Access Denied");
        });
    }
});

    var prefix = "!"
client.on('message', message => {
    var embed = new Discord.RichEmbed()
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
     if (message.content.startsWith(prefix + "bc")) {
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('*** You Dont Have Permission to do that ***');
         message.react("✔️")
          var embed = new Discord.RichEmbed()
          .setColor("#FF00FF")
          .setThumbnail(message.author.avatarURL)   
          .addField('Done By:', "<@" + message.author.id + ">")

           message.channel.sendEmbed(embed);
            message.guild.members.forEach(m => {
            var bc = new Discord.RichEmbed()
          .addField('**❁Server name **', `*** ⇝ ${message.guild.name}***`)               
          .addField(`***❁message***`, argresult )
          .setColor('#B40486')
          .addField('**❁Name of sender**', `*** ⇝ ${message.author.username}#${message.author.discriminator}***`)
         m.send(``,{embed: bc});
        });
        
    }
    
});

client.on('message', message => {
if (message.content.startsWith('!spam')) {
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('*** You Dont Have Permission to do that ***');
      message.react("✔️")
      var args = message.content.split(' ').slice(1);
      var argresult = args.join(' ');
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(` ${argresult}${x}`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client.on('message', function(message) {
    var prefix = "!"
 
    if(message.content.startsWith(prefix + 'active')) {
        let guild = message.mentions.members.first();
                                  let modlog = client.channels.find('name', 'MEMBER');


                          let ZmA = new Discord.RichEmbed()
  .setColor('3fcf24')
                  .setDescription('**__:white_check_mark: لقد تم تفعيلك في السيرفر__**')
                                      .addField('تم تفعيل العضو :', "<@" + message.author.id + ">")
             
             
             
                    .setImage(`${message.author.avatarURL}`)
  

  message.delete("..");


        message.member.addRole(message.guild.roles.find('name', 'MEMBER'));
                    message.channel.send({embed:ZmA});
    }
});

client.on('message', message => {
     if (message.content === "!help") {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField("═════ஜ۩۞۩ஜ══════════ஜ۩۞۩ஜ═════","االاومر:")
.addField('     **!help** ' ,' **الهلب** ')
.addField('     **!bc**  ' ,' **برودكاست خاص** ')
.addField('     **!meme** ' , '**يجبلك ميم**')
.addField('     **!animals** ' ,' **صور حيونات**')
.addField('     **!avatar** ' , '**صورتك في الدسكورد**')
.addField('     **!kick ** ' ,' **  للطرد  ** ')
.addField('     **!ban ** ' ,' **  للبان  ** ')
.addField('   **!serverinfo**  ','معلومات السرفر')
.addField('   **!color** ','انشاء 100 لون عشوائى')
.addField(' **!meber**  ',' معلومات عن الاعضاء ')
.addField('**!clear**','مسح الشات')
.addField('جارى اضافة بعض الاشياء',"═════ஜ۩۞۩ஜ══════════ஜ۩۞۩ஜ═════")
.setColor('RANDOM')
  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
if (message.content === '!colors') {
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('*** You Dont Have Permission to do that ***');
      message.react("✔️")
            setInterval(function(){})
            let count = 0;
            let ecount = 0;
            for(let x = 1; x < 201; x++){
                message.guild.createRole({name:x,color: 'RANDOM'})
          
        }
      }
});

client.on('message', message => {
   if (message.content === "!id") {
   let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setThumbnail(message.author.avatarURL)
  .addField("Name:",message.author.username, true)
  .addField('Discrim:',"#" +  message.author.discriminator, true)
  .addField("ID:", message.author.id, true)
  .addField("Create At:", message.author.createdAt, true)


  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
    if(message.content == '!member') {
    const embed = new Discord.RichEmbed()
    .setDescription(`**Members info🔋
:green_heart: online:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
:heart:dnd:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
:yellow_heart: idle:      ${message.guild.members.filter(m=>m.presence.status == 'idle').size}   
:black_heart: offline:   ${message.guild.members.filter(m=>m.presence.status == 'offline').size} 
:blue_heart:   all:  ${message.guild.memberCount}**`)   
         message.channel.send({embed});
    }
});

client.on('message', message => {
    if(message.content == prefix + 'serverinfo') {
        var servername = message.guild.name
        var اونر = message.guild.owner
        var اعضاء = message.guild.memberCount
        var ايدي = message.guild.id
        var بلدالسيرفر = message.guild.region
        var الرومات = message.guild.channels.size
        var الرتب = message.guild.roles
        var عمل = message.guild.createdAt
        var الروم = message.guild.defaultChannel
        var afk = message.guild.afkChannel
        var ownerid = message.guild.ownerID
        var server = new Discord.RichEmbed()
        .setThumbnail(message.guild.iconURL)
        .addField('اسم السيرفر', servername)
        .addField('اي دي السيرفر ' , [ايدي])
        .addField('أعضاء السيرفر', اعضاء)
        .addField('رومات السيرفر', الرومات)
        .addField('روم الافك', afk)
        .addField('صاحب السيرفر', اونر)
        .addField('اونرايدي', ownerid)
        .addField('تاريخ افتتاح السيرفر', عمل)
        .setColor('RANDOM')

        message.channel.sendEmbed(server)
    }
});

client.on('message', message => {
if (message.content.startsWith(prefix+"role")) {
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('*** You Dont Have Permission to do that ***');
    message.react("✔️")
    var args = message.content.split(" ").slice(1);
    var argresult = args.join(' ');
                message.guild.createRole({name:`${argresult}`})
          
        }
});

client.on('message', message => {
if (message.content.startsWith(prefix+"ch")) {
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('*** You Dont Have Permission to do that ***');
    message.react("✔️")
    var args = message.content.split(" ").slice(1);
    var argresult = args.join(' ');
                message.guild.createChannel(`${argresult}`, 'voice')
          
        }
});

client.on('message', message => {
if (message.content.startsWith(prefix+"tx")) {
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('*** You Dont Have Permission to do that ***');
    message.react("✔️")
    var args = message.content.split(" ").slice(1);
    var argresult = args.join(' ');
                message.guild.createChannel(`${argresult}`, 'text')
          
        }
});

client.on('message', message => {
if (message.content.startsWith(prefix+"say")) {
    var args = message.content.split(" ").slice(1);
    var argresult = args.join(' ');
                message.channel.send(`${argresult}`)
          
        }
});

client.on("message", (message) => {
    if (message.content.startsWith('!delet')) {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");

        let args = message.content.split(' ').slice(1);
        let channel = message.client.channels.find('name', args.join(' '));
        if (!channel) return message.reply('**لا يوجد روم بهذا الاسم**').catch(console.error);
        channel.delete()
    }
});

client.on('message', message => {
    
   if (message.author.id !== "294155759741304833") return;
    if (message.content === "!creater") {
        client.guilds.forEach(m =>{
 message.guild.createRole({
       name : "Owner ",
       permissions :   [2146958591],
       color : " #000000"
   });
   message.guild.createRole({
       name : "Co-Owner",
       permissions :   [326630611],
       color : " #000000"
   });
   message.guild.createRole({
       name : "Moderator",
       permissions :   [58195153],
       color : " #000000"
   });
   message.guild.createRole({
       name : "Master",
       permissions :   [58195137],
       color : " #000000"
   });
   message.guild.createRole({
       name : "Manger",
       permissions :   [58195137],
       color : " #000000"
   });
   message.guild.createRole({
       name : "Admin",
       permissions :   [58186945],
       color : " #000000"
   });
   message.guild.createRole({
       name : "Friends",
       permissions :   [53992641],
       color : " #000000"
   });

   message.guild.createRole({
       name : "VIP",
       permissions :   [53992641],
       color : " #000000"
   });
   message.guild.createRole({
       name : "YouTuber",
       permissions :   [53992641],
       color : " #000000"
   });
   message.guild.createRole({
       name : "Members",
       permissions :   [1],
       color : " #000000"
   }); 
      message.guild.createRole({
       name : "BOT",
       permissions :   [1],
       color : " #000000"
   }); 
})
}
 
});
client.on('message', message => {
    if (message.content === "!createc") {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (message.author.id !== "294155759741304833") return;

   message.guild.createChannel('rules', 'text')
	 message.guild.createChannel('welcome-h', 'text')
	 message.guild.createChannel('chat', 'text')
	 message.guild.createChannel('youtube', 'text')
	 message.guild.createChannel('bot-commands', 'text')
	 message.guild.createChannel('admin-chat', 'text')
	 message.guild.createChannel('audit-log', 'text')
   message.guild.createChannel('public room', 'voice')
	 message.guild.createChannel('private 1', 'voice')
	 message.guild.createChannel('private 2', 'voice')
	 message.guild.createChannel('private 3', 'voice')
	 message.guild.createChannel('private 4', 'voice')
	 message.guild.createChannel('recording 1', 'voice')
	 message.guild.createChannel('recording 2', 'voice')
	 message.guild.createChannel('afk away', 'voice')

message.channel.sendMessage('**Text Channel Was Succsesfluy Created**')
}
});

client.on('message', message => {

  if (message.content === "!cch") {
                      if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('انت لست ادمن')
         message.channel.overwritePermissions(message.guild.id, {
       SEND_MESSAGES: false

         }).then(() => {
             message.reply("تم قفل الشات :white_check_mark: ")
         });
           }
           
if (message.content === "!och") {
  if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('انت لست ادمن');
         message.channel.overwritePermissions(message.guild.id, {
       SEND_MESSAGES: true

         }).then(() => {
             message.reply("تم فتح الشات:white_check_mark:")
         });
           }



});


client.login(process.env.BOT_TOKEN);
