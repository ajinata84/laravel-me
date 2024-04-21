const works = [
  {
    title: "djie.cloud",
    type: "Infrastructure development",
    img: "https://images.unsplash.com/photo-1640552435388-a54879e72b28?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: `
# djie.cloud project
#### 2023 - present
So, this started when i got an old laptop that is not used from my sister, it was an old Thinkpad L421 which is a decade old at this point.
    
so, i thought "what if i can use this thing for something useful?" 
    
then an idea came into my mind, that is using this as a dedicated server.
i quickly downloaded Ubuntu Server for the OS at first, but then i switched to Debian because my friend said it was lighter than Ubuntu Server.
    
![](https://cdn.discordapp.com/attachments/672241619109543939/1219998314674651176/image.png?ex=66266378&is=662511f8&hm=a4bc56b876ef034a1436b5e8d52b7e92c64f4dc9dab941e3589e7e9e664ee2b6&)
    
First boot up, it was successful at first, then it can't connect into me home's wifi. Silly me the only issue was wrong wifi password. God, it took me like hours trying to figure out the issue
    
The whole process of using linux terminal-only was atrocious when you first experience it. i need to navigate to */etc/network/interfaces* then change the config file, and then restart the *systemctl networking.service*. 
    
i quickly then set up the server using ZeroTier, Docker, and all those stuff.
    
## Use cases
One of the main use cases was deploying a discord bot.

![](https://cdn.discordapp.com/attachments/672241619109543939/1219997657087606804/image.png?ex=6632405b&is=661fcb5b&hm=b0fa53f9823193753775d9e0dfd570a3d10e288a6de745846928cb50ab33223e&)

My circle has this discord bot named "Yggdrasil", this bot plays music for our gatherings at a discord lobby, why? because other bots that has been created sometimes cough up and experienced lag/delays, that's why my friend created the bot.

At first, my friend got a VPS to host the bot, but then i got this server so we quickly set up transferred the bot here along with other services.

# .... (lom jadi)
    `,
  },
  {
    title: "placeholder 1",
    type: "placeholder 1",
    img: "https://preview.redd.it/buddies-i-need-your-help-to-expand-my-collection-post-all-v0-oh4ao2frsimc1.jpg?width=320&crop=smart&auto=webp&s=cc01d234be1347e75bbdc56dc50cfa0555dacca1",
    content: `
# Placeholder 1
![](https://media.discordapp.net/attachments/806036105379840010/1218600073101836378/image0.png?ex=660840c1&is=65f5cbc1&hm=8af08760c5750e9c7f11e7bac43fcd0d91004ef3ddadc3fdc369691371e35708&=&format=webp&quality=lossless&width=695&height=671)

    `,
  },
  {
    title: "placeholder 2",
    type: "placeholder 2",
    img: "https://preview.redd.it/buddies-i-need-your-help-to-expand-my-collection-post-all-v0-hi7582e7vimc1.jpeg?width=1417&format=pjpg&auto=webp&s=ce0981cfcccf869f5df7ddd887abb90ec469a3c5",
    content: `
# Placeholder 2
![](https://cdn.discordapp.com/attachments/805029982886690826/1219984715335991347/FB_IMG_1710825647611.jpg?ex=660d4a4e&is=65fad54e&hm=46b1c6cbe4d14f009a04833e496a53cb016a047513610d22fc3afed196e44fc1&=)
    `,
  },
];
export default works;
