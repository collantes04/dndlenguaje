class Cantrip {
    constructor(name, desc, img, dado, nivel) {
        this._name = name;
        this.desc = desc;
        this.img = img;
        this.dado = dado;
        this.nivel = nivel;
    }

    get name(){
        return this._name;
    }

}

const cantripLevel = "0";

//La funcion crea y carga todos los objetos de los cantrips y los devuelve para el volcado de

    const salpicaduraAcido = new Cantrip("Salpicadura de ácido", "Lanza una burbuja de ácido que daña a cada criatura que golpea.",
    "recursos/iconsCantrip/300px-Acid_Splash.webp.png", "1d6 Ácido", cantripLevel);

    const guardianEspada = new Cantrip("Guardián de la espada", "Recibe solo la mitad del daño de los ataques contundente, perforantes y cortantes.",
        "recursos/iconsCantrip/300px-Blade_Ward.webp.png", null, cantripLevel);

    const escalofrioHuesos = new Cantrip("Escalofríos en los huesos", "Evita que el objetivo se cure hasta tu próximo turno. Un objetivo no muerto recibe desventajas en tiradas de ataque",
        "recursos/iconsCantrip/300px-Bone_Chill.webp.png", "1d8 Necrótico", cantripLevel);

    const hojaAuge = new Cantrip("Hoja en auge", "Golpea con tu arma, afligiendo a tu enemigo con una resonancia que lo hiere durante durante 1d8. Truenan cuando se mueven. Este hechizo se puede lanzar mientras estás silenciado.",
        "recursos/iconsCantrip/300px-Booming_Blade.webp.png", "1d8 Trueno", cantripLevel);

    const tendonReventado = new Cantrip("Tendón reventado", "Explota un cadáver, provocando que empale a quienes lo rodean.", "recursos/iconsCantrip/300px-Bursting_Sinew.webp.png",
        "1d10 Perforación", cantripLevel);

    const lucesDanzantes = new Cantrip("Luces danzantes", "Ilumina un radio de 9m/30 pies.", "recursos/iconsCantrip/300px-Dancing_Lights.webp.png", 
        null, cantripLevel);
    
    const explosionSobrenatural = new Cantrip("Explosión sobrenatural", "Conjura un rayo de energía crepitante. Inflige 1d10. Inflige daño de fuerza a un objetivo.",
        "recursos/iconsCantrip/300px-Eldritch_Blast.webp.png", "1d10 Fuerza", cantripLevel);

    const pernoFuego = new Cantrip("Perno de fuego", "Lanza una mota de fuego.", "recursos/iconsCantrip/300px-Fire_Bolt.webp.png", 
        "1d10 Fuego", cantripLevel);

    const amigos = new Cantrip("Amigos", "Gana ventaja en pruebas de Carisma contra una criatura hostil. Se puede lanzar mientras estás silenciado.",
        "recursos/iconsCantrip/300px-Friends.webp.png", null, cantripLevel);

    const guia = new Cantrip("Guía", "El objetivo gana +1d14 de bonificación en pruebas de habilidad.", "recursos/iconsCantrip/300px-Friends.webp.png", 
        null, cantripLevel);

    const luz = new Cantrip("Luz", "Infunde un objeto con un aura de luz.", "recursos/iconsCantrip/300px-Light.webp.png",
        null, cantripLevel);

    const manoMago = new Cantrip("Mano de mago", "Crea una mano espectral que puede manipular e interactuar con objetos.", 
        "recursos/iconsCantrip/300px-Mage_Hand.webp.png", null, cantripLevel);

    const ilusionMenor = new Cantrip("Ilusión menor", "Crea una ilusión que obligue a las criaturas cercanas a investigar. Puedes permanecer oculto mientras lanzas este hechizo. Este hechizo puede lanzarse mientras estás silenciado.", 
        "recursos/iconsCantrip/300px-Minor_Illusion.webp.png", null, cantripLevel);

    const sprayVenenoso = new Cantrip("Spray venenoso", "Proyecta una bocanada de gas nocivo que inflige 1d12 Veneno a un objetivo.", "recursos/iconsCantrip/300px-Poison_Spray.webp.png", 
        "1d12 Veneno", cantripLevel);

    const producirLlama = new Cantrip("Producir llama", "Una llama en tu mano arroja una luz en un radio de 9 m / 30 pies y causa 1d8 daño por fuego al ser arrojado.", 
        "recursos/iconsCantrip/300px-Produce_Flame.webp.png", "1d8 Fuego", cantripLevel);
    
    const rayoEscarcha = new Cantrip("Rayo de escarcha", "Reduce la velocidad de movimiento del objetivo en 3m / 10 pies.", 
        "recursos/iconsCantrip/300px-Ray_of_Frost.webp.png", "1d8 Frío", cantripLevel);

    const resistencia = new Cantrip("Resistencia", "Hace que un objetivo sea más resistente a los efectos y condiciones de hechizos: recibe un +1d4 de bonificación a tiradas de salvación", 
        "recursos/iconsCantrip/300px-Resistance.webp.png", null, cantripLevel);
    
    const llamaSagrada = new Cantrip("Llama sagrada", "Envuelve a un objetivo en un resplandor similar a una llama.", "recursos/iconsCantrip/300px-Sacred_Flame.webp.png", 
        "1d8 Radiante", cantripLevel);

    const cachiporra = new Cantrip("Cachiporra", "Tu personal o club se vuelve mágico: se ocupa de... 1d8 + modificador de lanzamiento de conjuro Daño contundente y usa tu modificador de Lanzamiento de hechizos para tiradas de ataque",
        "recursos/iconsCantrip/380px-Shillelagh.webp.png" ,null, cantripLevel);
    
    const agarreImpactante = new Cantrip("Agarre impactante", "Realiza un ataque cuerpo a cuerpo que inflige daño de rayo y evita que el objetivo realice reacciones. Este hechizo tiene ventaja sobre criaturas con armadura de metal.", 
        "recursos/iconsCantrip/380px-Shocking_Grasp.webp.png", "1d8 Iluminación", cantripLevel);
    
    const taumaturgia = new Cantrip("Taumaturgia", "Ganas ventaja en intimidación y controles de rendimiento.", 
        "recursos/iconsCantrip/380px-Thaumaturgy.webp.png", null, cantripLevel);
    
    const latigoEspinas = new Cantrip("Látigo de espinas", "Inflige daño al objetivo y lo atrae hacia el lanzador. Tira de la criatura 3 m / 10 pies más cerca de ti.",
        "recursos/iconsCantrip/380px-Thorn_Whip.webp.png", "1d6 Perforación", cantripLevel);
    
    const cuentaMuertos = new Cantrip("Cuenta de los muertos", "Toca la campana de la fatalidad inminente. Si el objetivo tiene la salud al máximo, infliges 1d8 de daño necrótico en su lugar.", 
        "recursos/iconsCantrip/380px-Toll_the_Dead.webp.png", "1d12 Necrótico(1d8 Necrótico si el objetivo tiene la salud completa)", cantripLevel);
    
    const golpeVerdadero = new Cantrip("Golpe verdadero", "El lanzador obtiene ventaja en su siguiente tirada de ataque contra el objetivo.  Ganar ventaja en tu próxima tirada de ataque. Este hechizo se puede lanzar mientras estás silenciado.", 
        "recursos/iconsCantrip/380px-True_Strike.webp.png", null, cantripLevel);

    const burlaViciosa = new Cantrip("Burla Viciosa", "Inflige daño psíquico a los enemigos y les aplica desventaja en sus tiradas de ataque. Insultar a una criatura: tiene desventaja en su siguiente tirada de ataque.", 
        "recursos/iconsCantrip/380px-Vicious_Mockery.webp.png", "1d4 Psíquico", cantripLevel);


function druidaCantrip(){
    return [guia, sprayVenenoso, producirLlama, resistencia, cachiporra, latigoEspinas];
}

function sorcererCantrip(){
    return [salpicaduraAcido,guardianEspada,escalofrioHuesos,hojaAuge,tendonReventado,lucesDanzantes,pernoFuego,amigos,luz,manoMago,ilusionMenor,sprayVenenoso,rayoEscarcha,agarreImpactante,golpeVerdadero];
}

function warlockCantrip(){
    return [guardianEspada,escalofrioHuesos,hojaAuge,explosionSobrenatural,amigos,manoMago,ilusionMenor,sprayVenenoso,cuentaMuertos,golpeVerdadero];
}

function wizardCantrip(){
    return [salpicaduraAcido, guardianEspada, escalofrioHuesos, hojaAuge, tendonReventado, lucesDanzantes, pernoFuego, amigos,luz, manoMago,ilusionMenor,sprayVenenoso,rayoEscarcha,agarreImpactante,cuentaMuertos ,golpeVerdadero];
}

function getLightSpell() {
    return [luz];
}

function getDeathSpell() {
    return [escalofrioHuesos]
}