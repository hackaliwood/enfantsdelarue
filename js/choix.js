var body = document.getElementById("body");
var charintro = document.getElementById("charintro");
var descevent = document.getElementById("situation");
var log = document.getElementById("effect");
var pic = document.getElementById("picture");
var choicebox = document.getElementById("flexbox");
var chardesc = document.getElementById("chardesc");
var ending = document.getElementById("ending");
var endchoice = document.getElementById("endchoice");

log.style.display = "none";
choicebox.style.display = "none";
ending.style.display = "none";
descevent.style.display = "none";
endchoice.style.display ="none";

var choix1 = document.getElementById("choix1");
var choix2 = document.getElementById("choix2");
var choix3 = document.getElementById("choix3");

var characters = [
    {"id":"0", "name":"Aminata","desc":"Aminata, 10 ans, est née avec un bras plus court que l'autre. Elle apprend que sa maman n'est, en fait, pas sa mère biologique et fuit de chez elle. Le jour où elle décide de revenir, elle découvre que son petit frère est tombé gravement malade. Ses parents adoptifs blâment alors son retour et l'expulsent de chez elle en l'accusant de sorcellerie.","skin":"img/girl1.png","health":"7","wealth":"7","family":"8","reputation":"8"},
    {"id":"1", "name":"Kadiatou","desc":"Kadiatou, 11 ans, est abandonné par son père et sa mère succombe des suites d'une lourde maladie et son père la tient pour responsable en l'accusant de sorcellerie. Elle finit à la rue.","skin":"img/girl2.png","health":"8","wealth":"7","family":"8","reputation":"7"},
    {"id":"2", "name":"Raisa","desc":"Raisa, 14 ans, se retrouve seule avec sa maman suite à la séparation de ses parents. Quelques années après, sa mère meurt et elle va vivre avec son père, qui s'est remarié. Cela se passe mal avec sa belle-mère qui lui dit que c'est de sa faute si sa mère est morte. Elle est chassée et finit à la rue.","skin":"img/girl3.png","health":"7","wealth":"8","family":"8","reputation":"7"},
    {"id":"3", "name":"Bouba","desc":"Bouba, 9 ans, vit avec ses parents et son frère. Son père devient pasteur mais tombe malade et perd la vue. La maman du petit garçon s'en prend à lui et l'accuse d'être le sorcier qui est à la source de la maladie de son père. Il descend à la rue.","skin":"img/boy1.png","health":"8","wealth":"8","family":"7","reputation":"7"},
    {"id":"4", "name":"Aksil","desc":"Aksil, 15 ans, a des parents qui sont séparés depuis plus de neuf ans. Mais la maman prend la décision de se remarier avec quelqu'un qui ne veut pas d'enfants. Celui-ci commence alors à maltraiter Aksil. Face au comportement de son compagnon, la maman envoie son fils chez son oncle mais il doit abandonner l'école par manque de moyens financiers et préfère fuir dans la rue.","skin":"img/boy2.png","health":"7","wealth":"8","family":"8","reputation":"7"},
    {"id":"5", "name":"Djibril","desc":"Djibril, 13 ans, vit avec ses frères et soeurs, seuls avec leur mère. Le père les a quittés. N'ayant plus de ressources pour nourrir sa famille, le jeune garçon descend en rue pour vendre des sachets.","skin":"img/boy3.png","health":"7","wealth":"7","family":"8","reputation":"8"}
];

var maxchars = characters.length;
var selected = Math.floor(Math.random() * maxchars);

var health = parseInt(characters[selected].health);
var wealth = parseInt(characters[selected].wealth);
var family = parseInt(characters[selected].family);
var reputation = parseInt(characters[selected].reputation);
var icons = document.getElementsByClassName("icon");
var skin = document.getElementById("picture");

var starter = document.getElementById("begin");

charintro.innerText = "Vous êtes " + characters[selected].name;
chardesc.innerText = characters[selected].desc;
icons[0].innerText = health; 
icons[1].innerText = wealth;
icons[2].innerText = family; 
icons[3].innerText = reputation;
skin.src = characters[selected].skin;

var events = [
    {"id":"0","bg":"url('img/bg0.jpg')", "event":"Vous avez passé la journée à vendre des sachets dans la rue, mais sans grand succès. La nuit tombe et l'argent vous fait défaut : ","skin":"","choix1":"Vous continuez d'essayer de vendre vos sachets/0.0.-2.0/Il est deux heures du matin. Un policier vous surprend et vous confisque vos derniers sachets.<br> Vous perdez 2 points de réputation.", "choix2":"Tant pis. Vous arrêtez d'en vendre pour aujourd'hui./-1.-1.0.0/Votre budget ne vous permet pas de manger correctement.<br> Vous perdez 1 point de santé et 1 point de bourse.", "choix3":"Vous décidez de vendre vos sachets plus cher./-2.+1.0.0/Vous avez pu vendre tous vos sachets avant que la nuit ne tombe. Un homme a cependant deviné votre stratagème et s'énerve sur vous.<br>Vous gagnez 1 point de bourse et perdez 2 points de santé."},
    {"id":"1","bg":"url('img/bg1.jpg')", "event":"Un autre enfant de la rue vous vole une partie de vos économies : ","skin":"","choix1":"Vous pensez qu'il serait plus sage de ne rien faire pour le moment./-2.-2.0.0/Votre budget ne vous permet pas de vous nourrir correctement pour aujourd'hui.<br>Vous perdez 2 points de santé et 2 points de bourse.", "choix2":"Vous décidez de compenser en volant un autre enfant./+2.+2.-3.0/Vous avez réussi à lui prendre assez d'argent pour manger correctement. Vous avez cependant été aperçu en train de commettre votre affront.<br>Vous gagnez 2 points de santé, 2 points de bourse et perdez 3 points de réputation.", "choix3":"Vous décidez de ne pas vous laisser faire et menacez le voleur./-1.-1.-1.0/Vous avez réussi à récupérer une partie de vos économies. Néanmoins, vous avez été blessé dans la confrontation.<br>Vous perdez 1 point de bourse, 1 point de santé et 1 point de réputation."},
    {"id":"2","bg":"url('img/bg2.jpg')", "event":"Un chien errant tente de vous dérober votre repas :","skin":"","choix1":"Vous cédez votre repas, mieux vaut ne pas l'énerver./-1.0.+1.0/Vous perdez votre repas, mais votre action a été considérée comme un geste de gentillesse envers l'animal.<br>Vous perdez 1 point de santé mais gagnez 1 point de réputation.", "choix2":"Vous décidez de ne pas vous laisser faire et affrontez le chien./-2.0.0.0/Le chien vous mord vivement durant l'affrontement.<br>Vous perdez 2 points de santé.", "choix3":"Vous abandonnez votre repas et décidez de compenser en volant de la nourriture ailleurs./+1.0.-1.0/Le marchand vous surprend presque la main dans le sac ! Vous parvenez toutefois à vous échapper avec la nourriture.<br>Vous gagnez 1 point de santé mais perdez 1 point de réputation."},
    {"id":"3","bg":"url('img/bg3.jpg')", "event":"Vous trouvez un peu de nourriture. Votre route croise celle d'un autre enfant qui, lui, n'a rien à manger.","choix1":"Vous partagez votre repas avec lui./-1.0.+1.+1/Vous n'êtes pas tout a fait rassasié, mais pas non plus affamé.<br>Vous gagnez 1 point de réputation, 1 point de sociabilité et perdez 1 point de santé.","choix2":"Vous lui donnez votre repas, il est beaucoup plus jeune que vous et en aura sans doute plus besoin./-2.0.+2.+2/Vous restez affamé mais l'enfant se sent beaucoup mieux.<br>Vous repartez, le coeur léger, avec 2 points de réputation, 2 points de sociabilité mais perdez 1 point de santé.","choix3":"Vous faites comme si vous n'avez rien vu./+2.0.-1.-2/Vous mangez votre repas seul et êtes rassasié jusqu'au lendemain.<br>Vous gagnez 2 points de santé mais perdez 2 points de sociabilité et 1 point de réputation."},
    {"id":"4","bg":"url('img/bg4.jpg')", "event":"La nuit tombe et vous n'avez nulle part où dormir.","skin":"","choix1":"Vous choisissez de dormir dans une ruelle, à même le sol./-2.0.0.0/Vous parvenez à vous reposer quelques heures mais avez pris froid.<br>Vous perdez 2 points de santé.","choix2":"Vous choisissez de dormir dans une bâtisse abandonné où dorment également d'autres personnes mises à la rue./+2.-4.0.0/Vous vous réveillez bien reposé, mais réalisez que l'on vous a volé durant votre sommeil.<br>Vous gagnez 2 points de santé et perdez 4 points de bourse !","choix3":"Vous continuez de marcher jusqu'à trouver un endroit plus sûr./+2.0.0.0/L'effort en aura valu la peine. Au bout d'une heure de marche, vous trouvez un abri où dorment d'autres enfants.<br>Vous gagnez 2 points de santé."},
    {"id":"5","bg":"url('img/bg5.jpg')", "event":"Votre petit frère vous manque et vous vous demandez ce qu'il devient.","choix1":"Vous tentez de le revoir en l'attendant près de son foyer./-2.0.0.-1/Votre petit frère est heureux de vous revoir mais un membre de famille vous prend par surprise et vous chasse en vous accusant de sorcellerie. Il menace de vous frapper de plus belle si vous revenez.<br>Vous perdez 2 points de santé et 1 point de sociabilité.","choix2":"Vous tentez de le revoir en l'attendant près de son école./0.0.0.+2/Vous croisez votre petit frère à la sortie de son école. Il est ravi de vous revoir mais vous décidez de ne pas rester trop longtemps pour ne pas prendre de risques.<br>Vous gagnez 2 points de sociabilité.","choix3":"Vous vous retenez de tenter quoi que ce soit, pour éviter de devoir potentiellement affronter vos parents./0.0.0.-1/Votre petit frère continue de vous manquer. Cela affecte votre moral mais vous craignez de revoir vos parents.<br>Vous perdez 1 point de sociabilité."},
    {"id":"6","bg":"url('img/bg6.jpg')", "event":"Un homme dans la rue déclare pouvoir vous proposer un bon plan pour vous permettre de gagner rapidement un peu d'argent.","skin":"","choix1":"Vous hésitez au début mais acceptez son offre./-1.+2.-2.0/Dans un premier temps, il vous confie une petite somme d'argent. Mais peu après, il vous oblige à faire ce qu'il demande et abuse de vous.<br>Vous gagnez 2 points de bourse mais perdez 1 point de santé et 2 points de réputation.","choix2":"Vous lui demandez davantage de détails./-1.0.-1.0/Il insiste et ne vous donne pas le choix. Il commence à abuser de vous mais vous parvenez à prendre la fuite.<br>Vous perdez 1 point de santé et 1 point de réputation.","choix3":"Vous partez en courant sans lui répondre./0.-2.0.0/Vous prenez vos jambes à votre cou et réalisez que vous avez perdu un peu de votre argent dans la précipitation.<br>Vous perdez 2 points de bourse."},
    {"id":"7","bg":"url('img/bg7.jpg')", "event":"Il apparaît que vous soyez blessé à la jambe droite. La plaie est vilaine. Pour ne pas arranger les choses, vous aviez pour intention de ramener un peu de nourriture à votre meilleur ami.","choix1":"Vous préférez ne pas risquer votre santé et vous dirigez vers la clinique./-1.0.0.-3/Il s'avère que la blessure était une infection qui aurait pu s'aggraver. Vous avez été soigné à temps mais devez passer la nuit à l'hôpital. Vous ne pourrez donc pas apporter de nourriture à votre ami.<br>Vous perdez seulement 1 point de santé mais perdez 3 points de sociabilité.","choix2":"Vous essayez de trouver une personne dans les parages qui pourrait vous soigner rapidement./-2.0.0.+1/Malgré vos difficultés, vous rencontrez une brave dame qui vous fait un bandage rapide. Malheureusement, vous ignorez encore que la blessure est une infection qui menace de s'aggraver...<br>Vous perdez 2 points de santé mais gagnez 1 point de sociabilité.","choix3":"Tant pis pour votre jambe ! Vous trouverez de la nourriture pour votre ami, quoiqu'il en coûte !/-3.0.0.+2/Votre ami est on ne peut plus ravi de votre initiative. Vous avez hélas trop forcé sur votre jambe. La blessure est une infection qui va s'aggraver par la suite.<br>Vous perdez 3 points de santé mais gagnez 2 points de sociabilité."},
    {"id":"8","bg":"url('img/bg8.jpg')", "event":"Vous tombez malade. Le bruit court dans la rue qu'il existe un entrepôt où il est possible d'acheter des médicaments non loin de la ville.","choix1":"Vous attendez plusieurs jours avant de voir si la maladie s'aggrave ou non./-3.0.0.0/La maladie vous a quitté au bout de quelques jours, mais vous a tout de même affaibli.<br>Vous perdez 3 points de santé.","choix2":"Vous demandez à l'une de vos connaissances, qui s'y rend le soir-même, de vous ramener une boîte de médicaments en échange d'argent./-4.-2.0.0/La personne n'est pas revenue vous apporter les médicaments. La maladie vous a affaibli.<br>Vous perdez 4 points de santé et 2 points de bourse.","choix3":"Vous vous rendez vous-même à l'entrepôt./-1.-3.0.0/Le rendez-vous à l'entrepôt se déroule normalement. Un homme essaye de vous arracher des mains vos médicaments.<br>Vous perdez 1 point de santé et 3 points de bourse."},
    {"id":"9","bg":"url('img/bg9.jpg')", "event":"Vous passez la nuit seul dans la rue. Soudain, vous êtes surpris par un bruit étrange...","choix1":"Vous décidez de partir dormir ailleurs./-1.-4.0.0/Le bruit provenait d'un chat errant, mais vous êtes déjà en chemin pour trouver un nouvel abri. Une personne mal intentionnée vous vole une partie de votre bourse sur le chemin.<br>Vous perdez 1 point de santé et 4 points de bourse.","choix2":"Vous faites comme si de rien n'était et essayez de vous rendormir./+1.0.0.0/Fort heureusement, le bruit provenait d'un chat errant. Vous pouvez passer une bonne nuit de sommeil.<br>Vous gagnez 1 point de santé.","choix3":"Vous allez voir d'où provient le bruit./-2.0.0.0/Vous découvrez que le bruit provenait d'un chat errant. En vous voyant, il prend peur et se jette sur vous pour vous lacérer le visage.<br>Vous perdez 2 points de santé."}
];

var maxevents = events.length;
var seen = [];

function callevent(){

    icons[0].innerText = health; 
    icons[1].innerText = wealth;
    icons[2].innerText = family; 
    icons[3].innerText = reputation;

    var rn = Math.floor(Math.random() * maxevents);

    for(i=0;i<seen.length;i++){
        if(rn == seen[i]){
            var block = 1; 
        }
    }

    if(block != 1){
        body.style.backgroundImage = events[rn].bg;
        descevent.innerText = events[rn].event;
        choix1.innerText = events[rn].choix1.split('/')[0];
        choix1.value = events[rn].choix1.split('/')[1];
        choix1.name = events[rn].choix1.split('/')[2];
        choix2.innerText = events[rn].choix2.split('/')[0];
        choix2.value = events[rn].choix2.split('/')[1];
        choix2.name = events[rn].choix2.split('/')[2];
        choix3.innerText = events[rn].choix3.split('/')[0];
        choix3.value = events[rn].choix3.split('/')[1];
        choix3.name = events[rn].choix3.split('/')[2];
        
        block = 0;
        seen.push(rn);
    } else {
        callevent();
        return;
    }
}

function affectvalues(x){
    ahealth = parseInt(x.split('.')[0]);
    health += ahealth;
    if (health > 10){
        health = 10;
    };
    console.log(health);
    awealth = parseInt(x.split('.')[1]);
    wealth += awealth;
    if (wealth > 10){
        wealth = 10;
    };
    console.log(wealth);
    afamily = parseInt(x.split('.')[2]);
    family += afamily;
    if (family > 10){
        family = 10;
    }
    console.log(family);
    areputation = parseInt(x.split('.')[3]);
    reputation += areputation;
    if (reputation > 10){
        reputation = 10;
    };
    console.log(reputation);

}

starter.addEventListener("click", function(){
    this.style.display = "none";
    charintro.style.display = "none";
    descevent.style.display = "block";
    //descevent.style.float = "right";
    pic.style.margin = "0";
    //pic.style.float = "left";
    pic.style.filter = "drop-shadow(4px 4px 0 white) drop-shadow(-4px -4px 0 white)";
    chardesc.style.display = "none";
    choicebox.style.display = "flex";
    callevent();

    choix1.addEventListener("click", function(){
        x = this.value;
        affectvalues(x); 
        if (health <= 0 || wealth <= 0 || family <= 0 || reputation <= 0 || seen.length == maxevents){
            log.innerHTML = this.name;
            icons[0].innerText = health; 
            icons[1].innerText = wealth;
            icons[2].innerText = family; 
            icons[3].innerText = reputation;
            choicebox.style.display = "none";
            ending.style.display = "block";
            if(health <= 0){
                descevent.innerText = "Vous tombez malade et vous effondrez sous le poids de la fatigue.";
            };
            if(wealth <= 0){
                descevent.innerText = "Vous êtes arrivé à bout de vos économies. Vous vous retrouvez affamé et sans le sou.";
            };
            if(family <= 0){
                descevent.innerText = "Votre famille et vos amis ne vous parleront plus.";
            }
            if(reputation <= 0){
                descevent.innerText = "D'horribles rumeurs à votre sujet courent dans les rues. Plus personne ne vous fait confiance.";
            }
            if(seen.length == maxevents){
                descevent.innerText = "Les semaines passées dans la rue semblent déjà avoir duré plusieurs années... Combien de temps cela peut-il encore durer ?"
            }
        } else {
            log.innerHTML = this.name;
            log.style.display = "block";
            callevent();
        }
    });

    choix2.addEventListener("click", function(){
        x = this.value;
        affectvalues(x); 
        if (health <= 0 || wealth <= 0 || family <= 0 || reputation <= 0 || seen.length == maxevents){
            log.innerHTML = this.name;
            icons[0].innerText = health; 
            icons[1].innerText = wealth;
            icons[2].innerText = family; 
            icons[3].innerText = reputation;
            choicebox.style.display = "none";
            ending.style.display = "block";
            if(health <= 0){
                descevent.innerText = "Vous tombez malade et vous effondrez sous le poids de la fatigue.";
            };
            if(wealth <= 0){
                descevent.innerText = "Vous êtes arrivé à bout de vos économies. Vous vous retrouvez affamé et sans le sou.";
            };
            if(family <= 0){
                descevent.innerText = "Votre famille et vos amis ne vous parleront plus.";
            }
            if(reputation <= 0){
                descevent.innerText = "D'horribles rumeurs à votre sujet courent dans les rues. Plus personne ne vous fait confiance.";
            }
            if(seen.length == maxevents){
                descevent.innerText = "Les semaines passées dans la rue semblent déjà avoir duré plusieurs années... Combien de temps cela peut-il encore durer ?"
            } 
        } else {
            log.innerHTML = this.name;
            log.style.display = "block";
            callevent();
        }
    });

    choix3.addEventListener("click", function(){
        x = this.value;
        affectvalues(x); 
        if (health <= 0 || wealth <= 0 || family <= 0 || reputation <= 0 || seen.length == maxevents){
            log.innerHTML = this.name;
            icons[0].innerText = health; 
            icons[1].innerText = wealth;
            icons[2].innerText = family; 
            icons[3].innerText = reputation;
            choicebox.style.display = "none";
            ending.style.display = "block";
            if(health <= 0){
                descevent.innerText = "Vous tombez malade et vous effondrez sous le poids de la fatigue.";
            };
            if(wealth <= 0){
                descevent.innerText = "Vous êtes arrivé à bout de vos économies. Vous vous retrouvez affamé et sans le sou.";
            };
            if(family <= 0){
                descevent.innerText = "Votre famille et vos amis ne vous parleront plus.";
            }
            if(reputation <= 0){
                descevent.innerText = "D'horribles rumeurs à votre sujet courent dans les rues. Plus personne ne vous fait confiance.";
            }
            if(seen.length == maxevents){
                descevent.innerText = "Les semaines passées dans la rue semblent déjà avoir duré plusieurs années... Combien de temps cela peut-il encore durer ?"
            } 
        } else {
            log.innerHTML = this.name;
            log.style.display = "block";
            callevent();
        }
    }); 
});

    ending.addEventListener("click", function(){
        log.style.display = "none";
        body.style.backgroundImage = "url('img/bg.jpg')";
        descevent.innerHTML = "A Kinshasa, 25.000 enfants sont en situation de rue.<br>Beaucoup ont vécu une histoire comme celle de "+ characters[selected].name + ".";
        descevent.style.width = "33rem";
        pic.style.margin = "0 auto";
        pic.style.filter = "drop-shadow(0 0 0 rgba(0,0,0,0)) drop-shadow(0 0 0 rgba(0,0,0,0))";
        pic.src = "img/end.png";
        pic.style.height = "14rem";
        

        chardesc.style.display = "block";
        chardesc.innerHTML = "Le sort de ces enfants n'est pas entièrement scellé.<br>Louvain Coopération oeuvre pour permettre à ces enfants d'être accueillis et de trouver refuge.<br>Vous pouvez aussi y contribuer :"

        ending.style.display = "none";
        endchoice.style.display = "flex";

        ending1.innerText = "Rejouer";

        ending1.addEventListener("click", function(){
            document.location.reload(true);
        });

        ending2.innerText = "En savoir plus"; 

        ending2.addEventListener("click", function(){
            window.open("https://www.louvaincooperation.org/fr/rdc");
        });

        ending3.innerText = "Faire un don";

        ending3.addEventListener("click",function(){
            window.open("https://www.louvaincooperation.org/fr/faites-un-don");
        });

    });