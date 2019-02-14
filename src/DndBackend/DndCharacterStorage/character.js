
class Stats{
    constructor(){
        this.str = null;
        this.dex = null;
        this.con = null;
        this.int = null;
        this.wis = null;
        this.cha = null;
        this.skills = null;
        this.savingThrows = null;
    }
    
    getStrMod(){
        return Math.floor((this.str - 10) / 2);
    }
    
    getDexMod(){
        return Math.floor((this.dex - 10) / 2);
    }
    
    getConMod(){
        return Math.floor((this.con - 10) / 2);
    }
    
    getIntMod(){
        return Math.floor((this.int - 10) / 2);
    }
    
    getWisMod(){
        return Math.floor((this.wis - 10) / 2);
    }
    
    getChaMod(){
        return Math.floor((this.cha - 10) / 2);
    }
    
    setStats(str, dex, con, int, wis, cha){
        this.str = str;
        this.dex = dex;
        this.con = con;
        this.int = int;
        this.wis = wis;
        this.cha = cha;
    }
}

class Info{
    constructor(name){
        this.name = name;
        this.level = 1;
        this.alignment = null;
        this.exp = 0;
        this.backstory = null;
        this.languages = null;
    }
    
    addExp(amount){
        this.exp += amount;
        if(this.exp > 355000)
            this.level = 20;
        else if(this.exp > 305000)
            this.level = 19;
        else if(this.exp > 265000)
            this.level = 18;
        else if(this.exp > 225000)
            this.level = 17;
        else if(this.exp > 195000)
            this.level = 16;
        else if(this.exp > 165000)
            this.level = 15;
        else if(this.exp > 140000)
            this.level = 14;
        else if(this.exp > 120000)
            this.level = 13;
        else if(this.exp > 100000)
            this.level = 12;
        else if(this.exp > 85000)
            this.level = 11;
        else if(this.exp > 64000)
            this.level = 10;
        else if(this.exp > 48000)
            this.level = 9;
        else if(this.exp > 34000)
            this.level = 8;
        else if(this.exp > 23000)
            this.level = 7;
        else if(this.exp > 14000)
            this.level = 6;
        else if(this.exp > 6500)
            this.level = 5;
        else if(this.exp > 2700)
            this.level = 4;
        else if(this.exp > 900)
            this.level = 3;
        else if(this.exp > 300)
            this.level = 2;
        else
            this.level = 1;
    }
}

class PhysicalInfo{
    constructor(){
        this.age = null;
        this.height = null;
        this.weight = null;
        this.eyeColor = null;
        this.skinColor = null;
        this.hairColor = null;
    }
}

class CombatInfo{
    constructor(){
        this.proficiency = null;
        this.ac = 10;
        this.init = 0;
        this.speed = null;
        this.hpMax = null;
        this.hp = null;
        this.hitDiceNum = 1;
        this.hitDice = null;
    }
}

class Equipment{
    constructor(){
        this.weapons = [];
        this.armor = [];
        this.other = [];
        this.equippedWeapon = null;
        this.equippedArmor = null;
    }
}

class SpellLevel{
    constructor(){
        this.total = null;
        this.remaining = null;
        this.known = [];
    }
}

class Spells{
    constructor(){
        this.cantrips = new SpellLevel();
        this.level1 = new SpellLevel();
        this.level2 = new SpellLevel();
        this.level3 = new SpellLevel();
        this.level4 = new SpellLevel();
        this.level5 = new SpellLevel();
        this.level6 = new SpellLevel();
        this.level7 = new SpellLevel();
        this.level8 = new SpellLevel();
        this.level9 = new SpellLevel();
    }
}

class Character{
    constructor(name, race, cla){
        this.info = new Info(name);
        this.stats = new Stats();
        this.physInfo = new PhysicalInfo();
        this.combatInfo = new CombatInfo();
        this.equipment = new Equipment();
        this.spells = new Spells();
        this.class = cla;
        this.race = race;
        this.features = [];
        this.abilities = [];
        this.initializeInfo();
    }
    
    initializeInfo(){
        this.info.languages = this.race.languages;
        this.combatInfo.proficiency = this.class.levels[0].proficiency;
        this.combatInfo.speed = this.race.speed;
        this.combatInfo.hpMax = this.class.rollHitDice(true);
        this.combatInfo.hp = this.combatInfo.hpMax;
        this.combatInfo.hitDice = this.class.hitDice;
        if(this.class.features[0].name !== "Spellcasting")
            delete this.spells;
        this.addFeatures(1);
        this.abilities = this.race.abilities;
    }
    
    addFeatures(level){
        level = level - 1;
        for(var feature of this.class.features){
            var features = this.class.levels[level].features.split(",");
            for(var feat of features){
                feat = feat.split("(")[0].trim();
                if(feature.name.toLowerCase() === feat.toLowerCase())
                    this.features.push(feature);
            }
        }
    }
    
    levelUp(level){
        this.combatInfo.proficiency = this.class.levels[level].proficiency;
        this.addFeatures(level);
        this.combatInfo.hpMax = (this.combatInfo.hpMax - 0) + this.class.rollHitDice();
        this.combatInfo.hp = this.combatInfo.hpMax;
    }
    
    setName(n){
        this.info.name = n;
    }
    
    getName(){
        return this.info.name;
    }
    
    getLevel(){
        return this.info.level;
    }
    
    setAlignment(a){
        this.info.alignment = a;
    }
    
    getAlignment(){
        return this.info.alignment;
    }
    
    addExp(amount){
        var level = this.info.level;
        this.info.addExp(amount);
        while(this.info.level > level++)
            this.levelUp(level);
    }
    
    getExp(){
        return this.info.exp;
    }
    
    setBackstory(b){
        this.info.backstory = b;
    }
    
    getBackstory(){
        return this.info.backstory;
    }
    
    addLanguage(l){
        this.info.languages += ", " + l;
    }
    
    getLanguages(){
        return this.info.languages;
    }
    
    setAge(a){
        this.physInfo.age = a;
    }
    
    getAge(){
        return this.physInfo.age;
    }
    
    setHeight(h){
        this.physInfo.height = h;
    }
    
    getHeight(){
        return this.physInfo.height;
    }
    
    setWeight(w){
        this.physInfo.weight = w;
    }
    
    getWeight(){
        return this.physInfo.weight;
    }
    
    setEyeColor(e){
        this.physInfo.eyeColor = e;
    }
    
    getEyeColor(){
        return this.physInfo.eyeColor;
    }
    
    setSkinColor(s){
        this.physInfo.skinColor = s;
    }
    
    getSkinColor(){
        return this.physInfo.skinColor;
    }
    
    setHairColor(h){
        this.physInfo.hairColor = h;
    }
    
    getHairColor(){
        return this.physInfo.hairColor;
    }
    
    getAC(){
        return this.combatInfo.ac;
    }
    
    setInitiatory(i){
        this.combatInfo.init = i;
    }
    
    getInitiatory(){
        return this.combatInfo.init;
    }
    
    setSpeed(s){
        this.combatInfo.speed = s;
    }
    
    getSpeed(){
        return this.combatInfo.speed;
    }
    
    takeDamage(d){
        this.combatInfo.hp -= d;
    }
    
    heal(h){
        this.combatInfo.hp = (this.combatInfo.hp - 0) + h;
        if(this.combatInfo.hp > this.combatInfo.hpMax)
            this.combatInfo.hp = this.combatInfo.hpMax;
    }
    
    healToMax(){
        this.combatInfo.hp = this.combatInfo.hpMax;
    }
    
    setHitDiceNum(h){
        this.combatInfo.hitDiceNum = h;
    }
    
    incrementHitDiceNum(){
        this.combatInfo.hitDiceNum++;
    }
    
    setHitDice(h){
        this.hitDice = h;
    }
    
    addWeapon(w){
        this.equipment.weapons.push(w);
    }
    
    addArmor(a){
        this.equipment.armor.push(a);
    }
    
    addOther(o){
        this.equipment.other.push(o);
    }
    
    removeWeapon(w){
        this.equipment.weapons.splice(this.equipment.weapons.indexOf(w), 1);
    }
    
    removeArmor(a){
        this.equipment.armor.splice(this.equipment.armor.indexOf(a), 1);
    }
    
    removeOther(o){
        this.equipment.other.splice(this.equipment.other.indexOf(o), 1);
    }
    
    getWeapons(){
        return this.equipment.weapons;
    }
    
    getArmor(){
        return this.equipment.armor;
    }
    
    getOther(){
        return this.equipment.other;
    }
    
    setStats(str, dex, con, int, wis, cha){
        this.stats.setStats(str, dex, con, int, wis, cha);
    }
    
    setStr(s){
        this.stats.str = s;
    }
    
    getStr(){
        return this.stats.str;
    }
    
    setDex(d){
        this.stats.dex = d;
    }
    
    getDex(){
        return this.stats.dex;
    }
    
    setCon(c){
        this.stats.con = c;
    }
    
    getCon(){
        return this.stats.con;
    }
    
    setInt(i){
        this.stats.int = i;
    }
    
    getInt(){
        return this.stats.int;
    }
    
    setWis(w){
        this.stats.wis = w;
    }
    
    getWis(){
        return this.stats.wis;
    }
    
    setCha(c){
        this.stats.cha = c;
    }
    
    getCha(){
        return this.stats.cha;
    }
    
    getStrMod(){
        return this.stats.getStrMod();
    }
    
    getDexMod(){
        return this.stats.getDexMod();
    }
    
    getConMod(){
        return this.stats.getConMod();
    }
    
    getIntMod(){
        return this.stats.getIntMod();
    }
    
    getWisMod(){
        return this.stats.getWisMod();
    }
    
    getChaMod(){
        return this.stats.getChaMod();
    }
}

module.exports = Character;