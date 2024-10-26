Game.registerMod("partybutton", {
    init: function () {
        Game.Notify(`Party Button loading!`, '', [49, 4]);
        //this string needs to match the ID provided in your info.txt
        if (PartyTime == undefined) { var PartyTime = {}; }
        if (CCSE == 'undefined') { CCSE = Game.LoadMod('https://klattmose.github.io/CookieClicker/CCSE.js'); }

        function launch() {
            PartyTime.isLoaded = 1;
            lol();
            Game.Notify(`Party Button ready!`, '', [49, 7]);
            Game.customOptionsMenu.push(function () {
                CCSE.AppendCollapsibleOptionsMenu("Party Button", '<p>test</p>');
            }
            );
        }

        if (!PartyTime.isLoaded) {
            if (CCSE && CCSE.isLoaded) {
                launch();
            }
        }
        else {
            if (!CCSE) var CCSE = {};
            if (!CCSE.postLoadHooks) CCSE.postLoadHooks = [];
            CCSE.postLoadHooks.push(launch());
        }
        function lol() {
            var toggled = false;

            if (toggled == true) {
                toggled = false;
                Game.PARTY = false;

            }
            else if (toggled == false) {
                toggled = true;
                Game.PARTY = true;
            }
        }
    },
    save: function () {
        //use this to store persistent data associated with your mod
    },
    load: function (str) {
        //do stuff with the string data you saved previously
    }
});
