const express = require('express');
const router = express.Router();

const Kaiju = require('../models/kaiju');
const User = require('../models/user');



router.get('/',  async (req, res)=>{
    try {
        await Kaiju.collection.drop();
    const KaijusSeed = [
        {
            name: 'Godzilla',
            alias: 'King of the Monsters', 
            image: 'https://fsmedia.imgix.net/42/e8/0f/1c/89d3/4b80/9a78/75a3fa59d4b7/banpresto-shin-godzilla-kamakura-medjpg.jpeg?rect=579%2C0%2C798%2C598&auto=format%2Ccompress&dpr=2&w=798', 
            type: 'Reptilian',
            size: 389,
            weight: 30000,
            firstSeen: 'Tokyo, Japan',
            lastSeen: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d188820.04330982195!2d-71.11036747725687!3d42.31451859059194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3652d0d3d311b%3A0x787cbf240162e8a0!2sBoston%2C%20MA!5e0!3m2!1sen!2sus!4v1578371525267!5m2!1sen!2sus",
            user: "5e14d0b09ba7fbd5c8544409",
            notes: 'Godzilla, the most capable of the known kaiju has a veritable pantheon of unique abilities. Godzilla can breath underwater, has extremely thick scales that serve as great protection against other monsters and human balistics. Godzilla\'s signature weapon is it\'s atomic breath.'
        },
        {
            name: 'Mothra',
            alias: 'The Queen of Monsters',
            image: 'https://nerdist.com/wp-content/uploads/2018/07/Mothraaa-1088x680.png',
            type: 'Insect',
            size: 250,
            weight: 15000,
            firstSeen: 'Tokyo, Japan', 
            lastSeen: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d188820.04330982195!2d-71.11036747725687!3d42.31451859059194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3652d0d3d311b%3A0x787cbf240162e8a0!2sBoston%2C%20MA!5e0!3m2!1sen!2sus!4v1578371525267!5m2!1sen!2sus",
            user: "5e14d0b09ba7fbd5c8544409",
            notes: 'Mothra, while not the powerhouse of some of her peers, has abilities that still make her quite formidable. She can shoot scales from her wings that can not only cause harm, but also shield her from damage. Mothra is often seen with the Shobijin, two tiny twin priestesses that act as her emmisary to humanity.'
        },
        {
            name: 'King Kong',
            alias: 'Eighth Wonder of the World',
            image: 'https://www.thewrap.com/wp-content/uploads/2016/11/kong-skull-island.jpg',
            type: 'Primate',
            size: 100,
            weight: 15000,
            firstSeen: 'Skull Island', 
            lastSeen: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d682903.2002588048!2d-149.57186286947348!3d-17.594463666651908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x769a35e2b7cbded9%3A0x7f50abb282ad59ae!2sMount%20&#39;Orohena!5e0!3m2!1sen!2sus!4v1578372212738!5m2!1sen!2sus",
            user: "5e14d0b09ba7fbd5c8544409",
            notes: 'While by no means the largest of the known kaiju, what Kong lack in size he makes up for in agility and strength.'

        },
        {
            name: 'Clover',
            image: 'https://upload.wikimedia.org/wikipedia/en/f/f5/CloverfieldMonster.jpeg',
            type: 'unknown',
            size: 300,
            weight: 5800,
            firstSeen: 'New York, New York, USA', 
            lastSeen: "",
            user: '5e14d0b09ba7fbd5c8544409',
            notes: 'Not much is known about the kaiju known as Clover that attacked New York City. This creature is thought to be amphibious, is known to have extremely resiliant skin, and incredible strength.'
        }
    ]
    const newKaijus = await Kaiju.create(KaijusSeed);
    const kaijusAndUsers = await Kaiju.find().populate('user');
    res.json(kaijusAndUsers);
    } catch (err) {
        res.send(err);    
    }
})

module.exports = router;