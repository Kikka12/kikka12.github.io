(function (e) {
    function t(t) {
        for (var o, n, r = t[0], l = t[1], h = t[2], c = 0, m = []; c < r.length; c++)
            n = r[c],
                Object.prototype.hasOwnProperty.call(s, n) && s[n] && m.push(s[n][0]),
                s[n] = 0;
        for (o in l)
            Object.prototype.hasOwnProperty.call(l, o) && (e[o] = l[o]);
        d && d(t);
        while (m.length)
            m.shift()();
        return a.push.apply(a, h || []),
            i()
    }
    function i() {
        for (var e, t = 0; t < a.length; t++) {
            for (var i = a[t], o = !0, r = 1; r < i.length; r++) {
                var l = i[r];
                0 !== s[l] && (o = !1)
            }
            o && (a.splice(t--, 1),
                e = n(n.s = i[0]))
        }
        return e
    }
    var o = {}
        , s = {
            app: 0
        }
        , a = [];
    function n(t) {
        if (o[t])
            return o[t].exports;
        var i = o[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(i.exports, i, i.exports, n),
            i.l = !0,
            i.exports
    }
    n.m = e,
        n.c = o,
        n.d = function (e, t, i) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: i
            })
        }
        ,
        n.r = function (e) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
        }
        ,
        n.t = function (e, t) {
            if (1 & t && (e = n(e)),
                8 & t)
                return e;
            if (4 & t && "object" === typeof e && e && e.__esModule)
                return e;
            var i = Object.create(null);
            if (n.r(i),
                Object.defineProperty(i, "default", {
                    enumerable: !0,
                    value: e
                }),
                2 & t && "string" != typeof e)
                for (var o in e)
                    n.d(i, o, function (t) {
                        return e[t]
                    }
                        .bind(null, o));
            return i
        }
        ,
        n.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e["default"]
            }
                : function () {
                    return e
                }
                ;
            return n.d(t, "a", t),
                t
        }
        ,
        n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        n.p = "/";
    var r = window["webpackJsonp"] = window["webpackJsonp"] || []
        , l = r.push.bind(r);
    r.push = t,
        r = r.slice();
    for (var h = 0; h < r.length; h++)
        t(r[h]);
    var d = l;
    a.push(["56d7", "chunk-vendors"]),
        i()
}
)({
    "00c0": function (e) {
        e.exports = JSON.parse('[{"id":"tb","name":"Trouble Brewing","author":"The Pandemonium Institute","description":"Clouds roll in over Ravenswood Bluff, engulfing this sleepy town and its superstitious inhabitants in foreboding shadow. Freshly-washed clothes dance eerily on lines strung between cottages. Chimneys cough plumes of smoke into the air. Exotic scents waft through cracks in windows and under doors, as hidden cauldrons lay bubbling. An unusually warm Autumn breeze wraps around vine-covered walls and whispers ominously to those brave enough to walk the cobbled streets.\\n\\nAnxious mothers call their children home from play, as thunder begins to clap on the horizon. If you listen more closely, however, noises stranger still can be heard echoing from the neighbouring forest. Under the watchful eye of a looming monastery, silhouetted figures skip from doorway to doorway. Those who can read the signs know there is... Trouble Brewing.","level":"Beginner","roles":[],"isOfficial":true},{"id":"bmr","name":"Bad Moon Rising","author":"The Pandemonium Institute","description":"The sun is swallowed by a jagged horizon as another winter\'s day surrenders to the night. Flecks of orange and red decay into deeper browns, the forest transforming in silent anticipation of the coming snow.\\n\\nRavenous wolves howl from the bowels of a rocky crevasse beyond the town borders, sending birds scattering from their cozy rooks. Travelers hurry into the inn, seeking shelter from the gathering chill. They warm themselves with hot tea, sweet strains of music and hearty ale, unaware that strange and nefarious eyes stalk them from the ruins of this once great city.\\n\\nTonight, even the livestock know there is a... Bad Moon Rising.","level":"Intermediate","roles":[],"isOfficial":true},{"id":"snv","name":"Sects & Violets","author":"The Pandemonium Institute","description":"Vibrant spring gives way to a warm and inviting summer. Flowers of every description blossom as far as the eye can see, tenderly nurtured in public gardens and window boxes overlooking the lavish promenade. Birds sing, artists paint and philosophers ponder life\'s greatest mysteries inside a bustling tavern as a circus pitches its endearingly ragged tent on the edge of town.\\n\\nAs the townsfolk bask in frivolity and mischief, indulging themselves in fine entertainment and even finer wine, dark and clandestine forces are assembling. Witches and cults lurk in majestic ruins on the fringes of the community, hosting secret meetings in underground caves and malevolently plotting the downfall of Ravenswood Bluff and its revelers.\\n\\nThe time is ripe for... Sects & Violets.","level":"Intermediate","roles":[],"isOfficial":true},{"id":"luf","name":"Laissez un Faire","author":"The Pandemonium Institute","description":"","level":"Veteran","roles":["balloonist","savant","amnesiac","fisherman","artist","cannibal","mutant","lunatic","widow","goblin","leviathan"],"isOfficial":true}]')
    },
    "013f": function (e, t, i) {
        e.exports = i.p + "img/washerwoman.b3fadac1.png"
    },
    "027a": function (e, t, i) {
        e.exports = i.p + "img/barista.aba99908.png"
    },
    "0436": function (e, t, i) {
        e.exports = i.p + "img/cerenovus.de31aa19.png"
    },
    "043b": function (e, t, i) {
        e.exports = i.p + "img/amnesiac.d1164c72.png"
    },
    "05f3": function (e, t, i) { },
    "06f0": function (e, t, i) {
        "use strict";
        i("ebea")
    },
    "07ab": function (e, t, i) {
        e.exports = i.p + "img/politician.bdc6fc63.png"
    },
    "0aaa": function (e, t, i) {
        e.exports = i.p + "img/tb.e253b31e.png"
    },
    "0b29": function (e, t, i) {
        e.exports = i.p + "img/shabaloth.5a091f98.png"
    },
    "0b61": function (e, t, i) {
        e.exports = i.p + "img/lunatic.678a4353.png"
    },
    "0c12": function (e, t, i) {
        e.exports = i.p + "img/oracle.a26d71ee.png"
    },
    "0c59": function (e, t, i) {
        e.exports = i.p + "img/ravenkeeper.7b16f0d9.png"
    },
    "0d06": function (e, t, i) {
        e.exports = i.p + "img/spiritofivory.fb5ca6eb.png"
    },
    "0e20": function (e, t, i) {
        e.exports = i.p + "img/undertaker.e4d72d4b.png"
    },
    "10d6": function (e, t, i) { },
    "125e": function (e, t, i) {
        e.exports = i.p + "img/chambermaid.23651784.png"
    },
    "160b": function (e, t, i) {
        e.exports = i.p + "img/plus.401e68cb.png"
    },
    "177d": function (e, t, i) {
        e.exports = i.p + "img/recluse.8f576e6a.png"
    },
    "17ad": function (e, t, i) {
        e.exports = i.p + "img/mutant.15eaead8.png"
    },
    "18ef": function (e, t, i) {
        "use strict";
        i("b06b")
    },
    1923: function (e, t, i) {
        e.exports = i.p + "img/huntsman.da36da94.png"
    },
    "1d01": function (e, t, i) {
        e.exports = i.p + "img/buddhist.c4032080.png"
    },
    "1e83": function (e, t, i) {
        e.exports = i.p + "img/chef.cb1db570.png"
    },
    2094: function (e, t, i) {
        e.exports = i.p + "img/preacher.69033992.png"
    },
    "20ca": function (e, t, i) {
        e.exports = i.p + "img/zombuul.cba2ebaa.png"
    },
    2176: function (e, t, i) {
        "use strict";
        i("10d6")
    },
    "223c": function (e, t, i) {
        e.exports = i.p + "img/sailor.47e89e16.png"
    },
    2294: function (e, t, i) { },
    "22c9": function (e, t, i) {
        e.exports = i.p + "img/widow.51e60f7e.png"
    },
    "23b1": function (e, t, i) {
        e.exports = i.p + "img/bonecollector.b7e7d2e3.png"
    },
    "23ca": function (e, t, i) {
        "use strict";
        i("65c0")
    },
    2490: function (e, t, i) {
        e.exports = i.p + "img/outsider.a1018bf7.png"
    },
    "24d3": function (e, t, i) {
        e.exports = i.p + "img/baron.41e60b5f.png"
    },
    "25f6": function (e, t, i) {
        e.exports = i.p + "img/bureaucrat.c5c9e954.png"
    },
    "27a3": function (e, t, i) {
        e.exports = i.p + "img/puzzlemaster.ccb38ebe.png"
    },
    "28bf": function (e, t, i) {
        e.exports = i.p + "img/bmr-minion.95728595.png"
    },
    "2b04": function (e, t, i) {
        e.exports = i.p + "img/leviathan.f4df0008.png"
    },
    "2cd0": function (e, t, i) {
        e.exports = i.p + "img/artist.dbc53820.png"
    },
    "2f37": function (e, t, i) { },
    "2fd0": function (e, t, i) {
        e.exports = i.p + "img/snv.7806bf67.png"
    },
    "30b6": function (e, t, i) {
        e.exports = i.p + "img/sage.da3228c0.png"
    },
    3273: function (e, t, i) {
        e.exports = i.p + "img/poppygrower.ecfac36e.png"
    },
    "327a": function (e, t, i) {
        e.exports = i.p + "img/scapegoat.294ef014.png"
    },
    3603: function (e, t, i) {
        e.exports = i.p + "img/philosopher.96fd28a7.png"
    },
    3636: function (e, t, i) {
        "use strict";
        i("d4b2")
    },
    "37dd": function (e, t, i) {
        e.exports = i.p + "img/butcher.63e2dfd4.png"
    },
    "38a5": function (e, t, i) {
        e.exports = i.p + "img/towncrier.5bf61c92.png"
    },
    "398f": function (e, t, i) {
        e.exports = i.p + "img/cultleader.a0e47655.png"
    },
    "39eb": function (e, t, i) {
        e.exports = i.p + "img/toymaker.f4f99e02.png"
    },
    "3a43": function (e, t, i) {
        e.exports = i.p + "img/vortox.e27cceb9.png"
    },
    "3b65": function (e, t, i) {
        e.exports = i.p + "img/deviant.f978b3d9.png"
    },
    "3cd8": function (e, t, i) {
        e.exports = i.p + "img/nightwatchman.5b638beb.png"
    },
    "3e70": function (e, t, i) {
        e.exports = i.p + "img/imp.3a25e747.png"
    },
    "3f65": function (e, t, i) {
        e.exports = i.p + "img/moonchild.881a5413.png"
    },
    "3f8f": function (e, t, i) {
        "use strict";
        i("557b")
    },
    4021: function (e, t, i) {
        e.exports = i.p + "img/snakecharmer.ede4ab88.png"
    },
    "41d4": function (e, t, i) {
        e.exports = i.p + "img/vizier.8cc0e053.png"
    },
    "43e8": function (e, t, i) {
        e.exports = i.p + "img/fortuneteller.8af750ee.png"
    },
    "441d": function (e, t, i) {
        e.exports = i.p + "img/custom.a69142c5.png"
    },
    "451a": function (e, t, i) {
        e.exports = i.p + "img/snv-minion.95728595.png"
    },
    4720: function (e, t, i) {
        e.exports = i.p + "img/fool.93b22189.png"
    },
    "4bea": function (e, t, i) {
        e.exports = i.p + "img/apprentice.b5ddec0f.png"
    },
    "4c96": function (e, t, i) {
        "use strict";
        i("7b43")
    },
    "4d73": function (e, t, i) {
        e.exports = i.p + "img/librarian.57805893.png"
    },
    "4dd9": function (e, t, i) {
        e.exports = i.p + "img/snv-outsider.a1018bf7.png"
    },
    "4e76": function (e, t, i) {
        e.exports = i.p + "img/soldier.c2fb29c4.png"
    },
    "4eb3": function (e, t, i) {
        e.exports = i.p + "img/golem.345927db.png"
    },
    "4efd": function (e, t, i) {
        e.exports = i.p + "img/minstrel.aad1e1c8.png"
    },
    5072: function (e, t, i) {
        e.exports = i.p + "img/exorcist.767988e8.png"
    },
    "50d1": function (e, t, i) { },
    "557b": function (e, t, i) { },
    "559e": function (e, t, i) {
        e.exports = i.p + "img/harlot.62982b44.png"
    },
    "55aa": function (e, t, i) {
        e.exports = i.p + "img/goon.b13623e0.png"
    },
    5626: function (e, t, i) {
        e.exports = i.p + "img/heretic.d1e16abc.png"
    },
	6251: (e,t,i)=>{
		"use strict";
		e.exports = i.p + "img/highpriestess.bc9eba89.png"
	},
    "56d7": function (e, t, i) {
        "use strict";
        i.r(t);
        var o = i("2b0e")
            , s = function () {
                var e = this
                    , t = e.$createElement
                    , i = e._self._c || t;
                return i("div", {
                    class: {
                        night: e.grimoire.isNight,
                        static: e.grimoire.isStatic
                    },
                    style: {
                        backgroundImage: e.grimoire.background ? "url('" + e.grimoire.background + "')" : ""
                    },
                    attrs: {
                        id: "app",
                        tabindex: "-1"
                    },
                    on: {
                        keyup: e.keyup
                    }
                }, [e.grimoire.background && e.grimoire.background.match(/\.(mp4|webm)$/i) ? i("video", {
                    attrs: {
                        id: "background",
                        src: e.grimoire.background,
                        autoplay: "",
                        loop: ""
                    }
                }) : e._e(), i("div", {
                    staticClass: "backdrop"
                }), i("transition", {
                    attrs: {
                        name: "blur"
                    }
                }, [e.players.length ? e._e() : i("Intro"), e.players.length && !e.session.nomination ? i("TownInfo") : e._e(), e.session.nomination ? i("Vote") : e._e()], 1), i("TownSquare"), i("Menu", {
                    ref: "menu"
                }), i("EditionModal"), i("FabledModal"), i("RolesModal"), i("ReferenceModal"), i("NightOrderModal"), i("VoteHistoryModal"), i("GameStateModal"), i("Gradients"), i("span", {
                    attrs: {
                        id: "version"
                    }
                }, [e._v("v" + e._s(e.version))])], 1)
            }
            , a = []
            , n = i("2f62")
            , r = i("9224")
            , l = function () {
                var e = this
                    , t = e.$createElement
                    , i = e._self._c || t;
                return i("div", {
                    staticClass: "square",
                    class: {
                        public: e.grimoire.isPublic,
                        spectator: e.session.isSpectator,
                        vote: e.session.nomination
                    },
                    attrs: {
                        id: "townsquare"
                    }
                }, [i("ul", {
                    staticClass: "circle",
                    class: ["size-" + e.players.length]
                }, e._l(e.players, (function (t, o) {
                    return i("Player", {
                        key: o,
                        class: {
                            from: Math.max(e.swap, e.move, e.nominate) === o,
                            swap: e.swap > -1,
                            move: e.move > -1,
                            nominate: e.nominate > -1
                        },
                        attrs: {
                            player: t
                        },
                        on: {
                            trigger: function (t) {
                                return e.handleTrigger(o, t)
                            }
                        }
                    })
                }
                )), 1), e.players.length ? i("div", {
                    ref: "bluffs",
                    staticClass: "bluffs",
                    class: {
                        closed: !e.isBluffsOpen
                    }
                }, [i("h3", [e.session.isSpectator ? i("span", [e._v("Other characters")]) : i("span", [e._v("Demon bluffs")]), i("font-awesome-icon", {
                    attrs: {
                        icon: "times-circle"
                    },
                    on: {
                        click: function (t) {
                            return t.stopPropagation(),
                                e.toggleBluffs(t)
                        }
                    }
                }), i("font-awesome-icon", {
                    attrs: {
                        icon: "plus-circle"
                    },
                    on: {
                        click: function (t) {
                            return t.stopPropagation(),
                                e.toggleBluffs(t)
                        }
                    }
                })], 1), i("ul", e._l(e.bluffSize, (function (t) {
                    return i("li", {
                        key: t,
                        on: {
                            click: function (i) {
                                return e.openRoleModal(-1 * t)
                            }
                        }
                    }, [i("Token", {
                        attrs: {
                            role: e.bluffs[t - 1]
                        }
                    })], 1)
                }
                )), 0)]) : e._e(), e.fabled.length ? i("div", {
                    staticClass: "fabled",
                    class: {
                        closed: !e.isFabledOpen
                    }
                }, [i("h3", [i("span", [e._v("Fabled")]), i("font-awesome-icon", {
                    attrs: {
                        icon: "times-circle"
                    },
                    on: {
                        click: function (t) {
                            return t.stopPropagation(),
                                e.toggleFabled(t)
                        }
                    }
                }), i("font-awesome-icon", {
                    attrs: {
                        icon: "plus-circle"
                    },
                    on: {
                        click: function (t) {
                            return t.stopPropagation(),
                                e.toggleFabled(t)
                        }
                    }
                })], 1), i("ul", e._l(e.fabled, (function (t, o) {
                    return i("li", {
                        key: o,
                        on: {
                            click: function (t) {
                                return e.removeFabled(o)
                            }
                        }
                    }, [e.nightOrder.get(t).first && e.grimoire.isNightOrder ? i("div", {
                        staticClass: "night-order first"
                    }, [i("em", [e._v(e._s(e.nightOrder.get(t).first) + ".")]), t.firstNightReminder ? i("span", [e._v(e._s(t.firstNightReminder))]) : e._e()]) : e._e(), e.nightOrder.get(t).other && e.grimoire.isNightOrder ? i("div", {
                        staticClass: "night-order other"
                    }, [i("em", [e._v(e._s(e.nightOrder.get(t).other) + ".")]), t.otherNightReminder ? i("span", [e._v(e._s(t.otherNightReminder))]) : e._e()]) : e._e(), i("Token", {
                        attrs: {
                            role: t
                        }
                    })], 1)
                }
                )), 0)]) : e._e(), i("ReminderModal", {
                    attrs: {
                        "player-index": e.selectedPlayer
                    }
                }), i("RoleModal", {
                    attrs: {
                        "player-index": e.selectedPlayer
                    }
                })], 1)
            }
            , h = []
            , d = function () {
                var e = this
                    , t = e.$createElement
                    , o = e._self._c || t;
                return o("li", {
                    style: e.zoom
                }, [o("div", {
                    ref: "player",
                    staticClass: "player",
                    class: [{
                        dead: e.player.isDead,
                        marked: (!e.session.isSpectator || e.session.isVoteWatchingAllowed) && e.session.markedPlayer === e.index,
                        "no-vote": e.player.isVoteless,
                        you: e.session.sessionId && e.player.id && e.player.id === e.session.playerId,
                        "vote-yes": (!e.session.isSpectator || e.session.isVoteWatchingAllowed || e.player.id === e.session.playerId) && e.session.votes[e.index],
                        "vote-lock": e.voteLocked
                    }, e.player.role.team]
                }, [o("div", {
                    staticClass: "shroud",
                    on: {
                        click: function (t) {
                            return e.toggleStatus()
                        }
                    }
                }), o("div", {
                    staticClass: "life",
                    on: {
                        click: function (t) {
                            return e.toggleStatus()
                        }
                    }
                }), e.nightOrder.get(e.player).first && e.grimoire.isNightOrder ? o("div", {
                    staticClass: "night-order first"
                }, [o("em", [e._v(e._s(e.nightOrder.get(e.player).first) + ".")]), e.player.role.firstNightReminder ? o("span", [e._v(e._s(e.player.role.firstNightReminder))]) : e._e()]) : e._e(), e.nightOrder.get(e.player).other && e.grimoire.isNightOrder ? o("div", {
                    staticClass: "night-order other"
                }, [o("em", [e._v(e._s(e.nightOrder.get(e.player).other) + ".")]), e.player.role.otherNightReminder ? o("span", [e._v(e._s(e.player.role.otherNightReminder))]) : e._e()]) : e._e(), o("Token", {
                    attrs: {
                        role: e.player.role
                    },
                    on: {
                        "set-role": function (t) {
                            return e.$emit("trigger", ["openRoleModal"])
                        }
                    }
                }), o("div", {
                    staticClass: "overlay"
                }, [o("font-awesome-icon", {
                    staticClass: "vote",
                    attrs: {
                        icon: "hand-paper",
                        title: "Hand UP"
                    },
                    on: {
                        click: function (t) {
                            return e.vote()
                        }
                    }
                }), o("font-awesome-icon", {
                    staticClass: "vote",
                    attrs: {
                        icon: "times",
                        title: "Hand DOWN"
                    },
                    on: {
                        click: function (t) {
                            return e.vote()
                        }
                    }
                }), o("font-awesome-icon", {
                    staticClass: "cancel",
                    attrs: {
                        icon: "times-circle",
                        title: "Cancel"
                    },
                    on: {
                        click: function (t) {
                            return e.cancel()
                        }
                    }
                }), o("font-awesome-icon", {
                    staticClass: "swap",
                    attrs: {
                        icon: "exchange-alt",
                        title: "Swap seats with this player"
                    },
                    on: {
                        click: function (t) {
                            return e.swapPlayer(e.player)
                        }
                    }
                }), o("font-awesome-icon", {
                    staticClass: "move",
                    attrs: {
                        icon: "redo-alt",
                        title: "Move player to this seat"
                    },
                    on: {
                        click: function (t) {
                            return e.movePlayer(e.player)
                        }
                    }
                }), o("font-awesome-icon", {
                    staticClass: "nominate",
                    attrs: {
                        icon: "hand-point-right",
                        title: "Nominate this player"
                    },
                    on: {
                        click: function (t) {
                            return e.nominatePlayer(e.player)
                        }
                    }
                })], 1), e.player.id && e.session.sessionId ? o("font-awesome-icon", {
                    staticClass: "seat",
                    class: {
                        highlight: e.session.isRolesDistributed
                    },
                    attrs: {
                        icon: "chair"
                    }
                }) : e._e(), e.player.isDead && !e.player.isVoteless ? o("font-awesome-icon", {
                    staticClass: "has-vote",
                    attrs: {
                        icon: "vote-yea",
                        title: "Ghost vote"
                    },
                    on: {
                        click: function (t) {
                            return e.updatePlayer("isVoteless", !0)
                        }
                    }
                }) : e._e(), o("div", {
                    staticClass: "marked"
                }, [o("font-awesome-icon", {
                    attrs: {
                        icon: "skull"
                    }
                })], 1), o("div", {
                    staticClass: "name",
                    class: {
                        active: e.isMenuOpen
                    },
                    on: {
                        click: function (t) {
                            e.isMenuOpen = !e.isMenuOpen
                        }
                    }
                }, [o("span", [e._v(e._s(e.player.name))]), e.player.pronouns ? o("font-awesome-icon", {
                    attrs: {
                        icon: "venus-mars"
                    }
                }) : e._e(), e.player.pronouns ? o("div", {
                    staticClass: "pronouns"
                }, [o("span", [e._v(e._s(e.player.pronouns))])]) : e._e()], 1), o("transition", {
                    attrs: {
                        name: "fold"
                    }
                }, [e.isMenuOpen ? o("ul", {
                    staticClass: "menu"
                }, [!e.session.isSpectator || e.session.isSpectator && e.player.id === e.session.playerId ? o("li", {
                    on: {
                        click: e.changePronouns
                    }
                }, [o("font-awesome-icon", {
                    attrs: {
                        icon: "venus-mars"
                    }
                }), e._v("Change Pronouns ")], 1) : e._e(), e.session.isSpectator ? e._e() : [o("li", {
                    on: {
                        click: e.changeName
                    }
                }, [o("font-awesome-icon", {
                    attrs: {
                        icon: "user-edit"
                    }
                }), e._v("Rename ")], 1), o("li", {
                    class: {
                        disabled: e.session.lockedVote
                    },
                    on: {
                        click: function (t) {
                            return e.movePlayer()
                        }
                    }
                }, [o("font-awesome-icon", {
                    attrs: {
                        icon: "redo-alt"
                    }
                }), e._v(" Move player ")], 1), o("li", {
                    class: {
                        disabled: e.session.lockedVote
                    },
                    on: {
                        click: function (t) {
                            return e.swapPlayer()
                        }
                    }
                }, [o("font-awesome-icon", {
                    attrs: {
                        icon: "exchange-alt"
                    }
                }), e._v(" Swap seats ")], 1), o("li", {
                    class: {
                        disabled: e.session.lockedVote
                    },
                    on: {
                        click: e.removePlayer
                    }
                }, [o("font-awesome-icon", {
                    attrs: {
                        icon: "times-circle"
                    }
                }), e._v(" Remove ")], 1), e.player.id && e.session.sessionId ? o("li", {
                    on: {
                        click: function (t) {
                            return e.updatePlayer("id", "", !0)
                        }
                    }
                }, [o("font-awesome-icon", {
                    attrs: {
                        icon: "chair"
                    }
                }), e._v(" Empty seat ")], 1) : e._e(), e.session.nomination ? e._e() : [o("li", {
                    on: {
                        click: function (t) {
                            return e.nominatePlayer()
                        }
                    }
                }, [o("font-awesome-icon", {
                    attrs: {
                        icon: "hand-point-right"
                    }
                }), e._v(" Nomination ")], 1)]], e.session.isSpectator ? o("li", {
                    class: {
                        disabled: e.player.id && e.player.id !== e.session.playerId
                    },
                    on: {
                        click: e.claimSeat
                    }
                }, [o("font-awesome-icon", {
                    attrs: {
                        icon: "chair"
                    }
                }), e.player.id ? e.player.id === e.session.playerId ? [e._v(" Vacate seat ")] : [e._v(" Seat occupied")] : [e._v(" Claim seat ")]], 2) : e._e()], 2) : e._e()])], 1), e.player.reminders ? e._l(e.player.reminders, (function (t) {
                    return o("div", {
                        key: t.role + " " + t.name,
                        staticClass: "reminder",
                        class: [t.role],
                        on: {
                            click: function (i) {
                                return e.removeReminder(t)
                            }
                        }
                    }, [o("span", {
                        staticClass: "icon",
                        style: {
                            backgroundImage: "url(" + (t.image && e.grimoire.isImageOptIn ? t.image : i("61b0")("./" + (t.imageAlt || t.role) + ".png")) + ")"
                        }
                    }), o("span", {
                        staticClass: "text"
                    }, [e._v(e._s(t.name))])])
                }
                )) : e._e(), o("div", {
                    staticClass: "reminder add",
                    on: {
                        click: function (t) {
                            return e.$emit("trigger", ["openReminderModal"])
                        }
                    }
                }, [o("span", {
                    staticClass: "icon"
                })]), o("div", {
                    staticClass: "reminderHoverTarget"
                })], 2)
            }
            , c = []
            , m = function () {
                var e = this
                    , t = e.$createElement
                    , o = e._self._c || t;
                return o("div", {
                    staticClass: "token",
                    class: [e.role.id],
                    on: {
                        click: e.setRole
                    }
                }, [e.role.id ? o("span", {
                    staticClass: "icon",
                    style: {
                        backgroundImage: "url(" + (e.role.image && e.grimoire.isImageOptIn ? e.role.image : i("61b0")("./" + (e.role.imageAlt || e.role.id) + ".png")) + ")"
                    }
                }) : e._e(), e.role.firstNight || e.role.firstNightReminder ? o("span", {
                    staticClass: "leaf-left"
                }) : e._e(), e.role.otherNight || e.role.otherNightReminder ? o("span", {
                    staticClass: "leaf-right"
                }) : e._e(), e.reminderLeaves ? o("span", {
                    class: ["leaf-top" + e.reminderLeaves]
                }) : e._e(), e.role.setup ? o("span", {
                    staticClass: "leaf-orange"
                }) : e._e(), o("svg", {
                    staticClass: "name",
                    attrs: {
                        viewBox: "0 0 150 150"
                    }
                }, [o("path", {
                    attrs: {
                        d: "M 13 75 C 13 160, 138 160, 138 75",
                        id: "curve",
                        fill: "transparent"
                    }
                }), o("text", {
                    staticClass: "label mozilla",
                    attrs: {
                        width: "150",
                        x: "66.6%",
                        "text-anchor": "middle",
                        "font-size": e._f("nameToFontSize")(e.role.name)
                    }
                }, [o("textPath", {
                    attrs: {
                        "xlink:href": "#curve"
                    }
                }, [e._v(" " + e._s(e.role.name) + " ")])])]), o("div", {
                    staticClass: "edition",
                    class: ["edition-" + e.role.edition, e.role.team]
                }), e.role.ability ? o("div", {
                    staticClass: "ability"
                }, [e._v(" " + e._s(e.role.ability) + " ")]) : e._e()])
            }
            , p = []
            , g = {
                name: "Token",
                props: {
                    role: {
                        type: Object,
                        default: () => ({})
                    }
                },
                computed: {
                    reminderLeaves: function () {
                        return (this.role.reminders || []).length + (this.role.remindersGlobal || []).length
                    },
                    ...Object(n["d"])(["grimoire"])
                },
                data() {
                    return {}
                },
                filters: {
                    nameToFontSize: e => e && e.length > 10 ? "90%" : "110%"
                },
                methods: {
                    setRole() {
                        this.$emit("set-role")
                    }
                }
            }
            , u = g
            , f = (i("5720"),
                i("2877"))
            , y = Object(f["a"])(u, m, p, !1, null, "deec739a", null)
            , b = y.exports
            , v = {
                components: {
                    Token: b
                },
                props: {
                    player: {
                        type: Object,
                        required: !0
                    }
                },
                computed: {
                    ...Object(n["d"])("players", ["players"]),
                    ...Object(n["d"])(["grimoire", "session"]),
                    ...Object(n["b"])({
                        nightOrder: "players/nightOrder"
                    }),
                    index: function () {
                        return this.players.indexOf(this.player)
                    },
                    voteLocked: function () {
                        const e = this.session
                            , t = this.players.length;
                        if (!e.nomination)
                            return !1;
                        const i = (this.index - 1 + t - e.nomination[1]) % t;
                        return i < e.lockedVote - 1
                    },
                    zoom: function () {
                        const e = window.innerWidth > window.innerHeight ? "vh" : "vw";
                        return this.players.length < 7 ? {
                            width: 18 + this.grimoire.zoom + e
                        } : this.players.length <= 10 ? {
                            width: 16 + this.grimoire.zoom + e
                        } : this.players.length <= 15 ? {
                            width: 14 + this.grimoire.zoom + e
                        } : {
                            width: 12 + this.grimoire.zoom + e
                        }
                    }
                },
                data() {
                    return {
                        isMenuOpen: !1,
                        isSwap: !1
                    }
                },
                methods: {
                    changePronouns() {
                        if (this.session.isSpectator && this.player.id !== this.session.playerId)
                            return;
                        const e = prompt("Player pronouns", this.player.pronouns);
                        null !== e && this.updatePlayer("pronouns", e, !0)
                    },
                    toggleStatus() {
                        this.grimoire.isPublic ? this.player.isDead ? this.player.isVoteless ? (this.updatePlayer("isVoteless", !1),
                            this.updatePlayer("isDead", !1)) : this.updatePlayer("isVoteless", !0) : (this.updatePlayer("isDead", !0),
                                this.player.isMarked && this.updatePlayer("isMarked", !1)) : (this.updatePlayer("isDead", !this.player.isDead),
                                    this.player.isMarked && this.updatePlayer("isMarked", !1),
                                    this.player.isVoteless && this.updatePlayer("isVoteless", !1))
                    },
                    changeName() {
                        if (this.session.isSpectator)
                            return;
                        const e = prompt("Player name", this.player.name) || this.player.name;
                        this.updatePlayer("name", e, !0)
                    },
                    removeReminder(e) {
                        const t = [...this.player.reminders];
                        t.splice(this.player.reminders.indexOf(e), 1),
                            this.updatePlayer("reminders", t, !0)
                    },
                    updatePlayer(e, t, i = !1) {
                        this.session.isSpectator && "reminders" !== e && "pronouns" !== e || (this.$store.commit("players/update", {
                            player: this.player,
                            property: e,
                            value: t
                        }),
                            i && (this.isMenuOpen = !1))
                    },
                    removePlayer() {
                        this.isMenuOpen = !1,
                            this.$emit("trigger", ["removePlayer"])
                    },
                    swapPlayer(e) {
                        this.isMenuOpen = !1,
                            this.$emit("trigger", ["swapPlayer", e])
                    },
                    movePlayer(e) {
                        this.isMenuOpen = !1,
                            this.$emit("trigger", ["movePlayer", e])
                    },
                    nominatePlayer(e) {
                        this.isMenuOpen = !1,
                            this.$emit("trigger", ["nominatePlayer", e])
                    },
                    cancel() {
                        this.$emit("trigger", ["cancel"])
                    },
                    claimSeat() {
                        this.isMenuOpen = !1,
                            this.$emit("trigger", ["claimSeat"])
                    },
                    vote() {
                        this.session.isSpectator || this.voteLocked && this.$store.commit("session/voteSync", [this.index, !this.session.votes[this.index]])
                    }
                }
            }
            , k = v
            , w = (i("74c9"),
                Object(f["a"])(k, d, c, !1, null, null, null))
            , N = w.exports
            , _ = function () {
                var e = this
                    , t = e.$createElement
                    , o = e._self._c || t;
                return e.modals.reminder && e.availableReminders.length && e.players[e.playerIndex] ? o("Modal", {
                    on: {
                        close: function (t) {
                            return e.toggleModal("reminder")
                        }
                    }
                }, [o("h3", [e._v("Choose a reminder token:")]), o("ul", {
                    staticClass: "reminders"
                }, e._l(e.availableReminders, (function (t) {
                    return o("li", {
                        key: t.role + " " + t.name,
                        staticClass: "reminder",
                        class: [t.role],
                        on: {
                            click: function (i) {
                                return e.addReminder(t)
                            }
                        }
                    }, [o("span", {
                        staticClass: "icon",
                        style: {
                            backgroundImage: "url(" + (t.image && e.grimoire.isImageOptIn ? t.image : i("61b0")("./" + (t.imageAlt || t.role) + ".png")) + ")"
                        }
                    }), o("span", {
                        staticClass: "text"
                    }, [e._v(e._s(t.name))])])
                }
                )), 0)]) : e._e()
            }
            , S = []
            , R = function () {
                var e = this
                    , t = e.$createElement
                    , i = e._self._c || t;
                return i("transition", {
                    attrs: {
                        name: "modal-fade"
                    }
                }, [i("div", {
                    staticClass: "modal-backdrop",
                    on: {
                        click: e.close
                    }
                }, [i("div", {
                    staticClass: "modal",
                    class: {
                        maximized: e.isMaximized
                    },
                    attrs: {
                        role: "dialog",
                        "aria-labelledby": "modalTitle",
                        "aria-describedby": "modalDescription"
                    },
                    on: {
                        click: function (e) {
                            e.stopPropagation()
                        }
                    }
                }, [i("div", {
                    staticClass: "top-right-buttons"
                }, [i("font-awesome-icon", {
                    staticClass: "top-right-button",
                    attrs: {
                        icon: ["fas", e.isMaximized ? "window-minimize" : "window-maximize"]
                    },
                    on: {
                        click: function (t) {
                            e.isMaximized = !e.isMaximized
                        }
                    }
                }), i("font-awesome-icon", {
                    staticClass: "top-right-button",
                    attrs: {
                        icon: "times-circle"
                    },
                    on: {
                        click: e.close
                    }
                })], 1), i("div", {
                    staticClass: "slot"
                }, [e._t("default")], 2)])])])
            }
            , x = []
            , I = {
                data: function () {
                    return {
                        isMaximized: !1
                    }
                },
                methods: {
                    close() {
                        this.$emit("close")
                    }
                }
            }
            , M = I
            , T = (i("8781"),
                Object(f["a"])(M, R, x, !1, null, null, null))
            , O = T.exports;
        const C = ({ id: e, image: t, imageAlt: i }) => o => ({
            role: e,
            image: t,
            imageAlt: i,
            name: o
        });
        var P = {
            components: {
                Modal: O
            },
            props: ["playerIndex"],
            computed: {
                availableReminders() {
                    let e = [];
                    const { players: t, bluffs: i } = this.$store.state.players;
                    return this.$store.state.roles.forEach(o => {
                        (t.some(e => e.role.id === o.id) || i.some(e => e.id === o.id)) && (e = [...e, ...o.reminders.map(C(o))]),
                            o.remindersGlobal && o.remindersGlobal.length && (e = [...e, ...o.remindersGlobal.map(C(o))])
                    }
                    ),
                        this.$store.state.players.fabled.forEach(t => {
                            e = [...e, ...t.reminders.map(C(t))]
                        }
                        ),
                        this.$store.state.otherTravelers.forEach(i => {
                            t.some(e => e.role.id === i.id) && (e = [...e, ...i.reminders.map(C(i))])
                        }
                        ),
                        e.push({
                            role: "good",
                            name: "Good"
                        }),
                        e.push({
                            role: "evil",
                            name: "Evil"
                        }),
                        e.push({
                            role: "custom",
                            name: "Custom note"
                        }),
                        e
                },
                ...Object(n["d"])(["modals", "grimoire"]),
                ...Object(n["d"])("players", ["players"])
            },
            methods: {
                addReminder(e) {
                    const t = this.$store.state.players.players[this.playerIndex];
                    let i;
                    if ("custom" === e.role) {
                        const e = prompt("Add a custom reminder note");
                        if (!e)
                            return;
                        i = [...t.reminders, {
                            role: "custom",
                            name: e
                        }]
                    } else
                        i = [...t.reminders, e];
                    this.$store.commit("players/update", {
                        player: t,
                        property: "reminders",
                        value: i
                    }),
                        this.$store.commit("toggleModal", "reminder")
                },
                ...Object(n["c"])(["toggleModal"])
            }
        }
            , D = P
            , V = (i("740e"),
                Object(f["a"])(D, _, S, !1, null, "334686bc", null))
            , E = V.exports
            , A = function () {
                var e = this
                    , t = e.$createElement
                    , i = e._self._c || t;
                return e.modals.role && e.availableRoles.length ? i("Modal", {
                    on: {
                        close: e.close
                    }
                }, [i("h3", [e._v(" Choose a new character for " + e._s(e.playerIndex >= 0 && e.players.length ? e.players[e.playerIndex].name : "bluffing") + " ")]), "editionRoles" !== e.tab && e.otherTravelers.size ? e._e() : i("ul", {
                    staticClass: "tokens"
                }, e._l(e.availableRoles, (function (t) {
                    return i("li", {
                        key: t.id,
                        class: [t.team],
                        on: {
                            click: function (i) {
                                return e.setRole(t)
                            }
                        }
                    }, [i("Token", {
                        attrs: {
                            role: t
                        }
                    })], 1)
                }
                )), 0), "otherTravelers" === e.tab && e.otherTravelers.size ? i("ul", {
                    staticClass: "tokens"
                }, e._l(e.otherTravelers.values(), (function (t) {
                    return i("li", {
                        key: t.id,
                        class: [t.team],
                        on: {
                            click: function (i) {
                                return e.setRole(t)
                            }
                        }
                    }, [i("Token", {
                        attrs: {
                            role: t
                        }
                    })], 1)
                }
                )), 0) : e._e(), e.playerIndex >= 0 && e.otherTravelers.size && !e.session.isSpectator ? i("div", {
                    staticClass: "button-group"
                }, [i("span", {
                    staticClass: "button",
                    class: {
                        townsfolk: "editionRoles" === e.tab
                    },
                    on: {
                        click: function (t) {
                            e.tab = "editionRoles"
                        }
                    }
                }, [e._v("Edition Roles")]), i("span", {
                    staticClass: "button",
                    class: {
                        townsfolk: "otherTravelers" === e.tab
                    },
                    on: {
                        click: function (t) {
                            e.tab = "otherTravelers"
                        }
                    }
                }, [e._v("Other Travelers")])]) : e._e()]) : e._e()
            }
            , j = []
            , $ = {
                components: {
                    Token: b,
                    Modal: O
                },
                props: ["playerIndex"],
                computed: {
                    availableRoles() {
                        const e = []
                            , t = this.$store.state.players.players;
                        return this.$store.state.roles.forEach(i => {
                            (this.playerIndex >= 0 || this.playerIndex < 0 && !t.some(e => e.role.id === i.id)) && e.push(i)
                        }
                        ),
                            e.push({}),
                            e
                    },
                    ...Object(n["d"])(["modals", "roles", "session"]),
                    ...Object(n["d"])("players", ["players"]),
                    ...Object(n["d"])(["otherTravelers"])
                },
                data() {
                    return {
                        tab: "editionRoles"
                    }
                },
                methods: {
                    setRole(e) {
                        if (this.playerIndex < 0)
                            this.$store.commit("players/setBluff", {
                                index: -1 * this.playerIndex - 1,
                                role: e
                            });
                        else {
                            if (this.session.isSpectator && "traveler" === e.team)
                                return;
                            const t = this.$store.state.players.players[this.playerIndex];
                            this.$store.commit("players/update", {
                                player: t,
                                property: "role",
                                value: e
                            })
                        }
                        this.tab = "editionRoles",
                            this.$store.commit("toggleModal", "role")
                    },
                    close() {
                        this.tab = "editionRoles",
                            this.toggleModal("role")
                    },
                    ...Object(n["c"])(["toggleModal"])
                }
            }
            , G = $
            , H = (i("23ca"),
                Object(f["a"])(G, A, j, !1, null, "2e3008b9", null))
            , F = H.exports
            , W = {
                components: {
                    Player: N,
                    Token: b,
                    RoleModal: F,
                    ReminderModal: E
                },
                computed: {
                    ...Object(n["b"])({
                        nightOrder: "players/nightOrder"
                    }),
                    ...Object(n["d"])(["grimoire", "roles", "session"]),
                    ...Object(n["d"])("players", ["players", "bluffs", "fabled"])
                },
                data() {
                    return {
                        selectedPlayer: 0,
                        bluffSize: 3,
                        swap: -1,
                        move: -1,
                        nominate: -1,
                        isBluffsOpen: !0,
                        isFabledOpen: !0
                    }
                },
                methods: {
                    toggleBluffs() {
                        this.isBluffsOpen = !this.isBluffsOpen
                    },
                    toggleFabled() {
                        this.isFabledOpen = !this.isFabledOpen
                    },
                    removeFabled(e) {
                        this.session.isSpectator || this.$store.commit("players/setFabled", {
                            index: e
                        })
                    },
                    handleTrigger(e, [t, i]) {
                        "function" === typeof this[t] && this[t](e, i)
                    },
                    claimSeat(e) {
                        this.session.isSpectator && (this.session.playerId === this.players[e].id ? this.$store.commit("session/claimSeat", -1) : this.$store.commit("session/claimSeat", e))
                    },
                    openReminderModal(e) {
                        this.selectedPlayer = e,
                            this.$store.commit("toggleModal", "reminder")
                    },
                    openRoleModal(e) {
                        const t = this.players[e];
                        this.session.isSpectator && t && "traveler" === t.role.team || (this.selectedPlayer = e,
                            this.$store.commit("toggleModal", "role"))
                    },
                    removePlayer(e) {
                        if (!this.session.isSpectator && !this.session.lockedVote && confirm(`Do you really want to remove ${this.players[e].name}?`)) {
                            const { nomination: t } = this.session;
                            t && (t.includes(e) ? this.$store.commit("session/nomination") : (t[0] > e || t[1] > e) && this.$store.commit("session/setNomination", [t[0] > e ? t[0] - 1 : t[0], t[1] > e ? t[1] - 1 : t[1]])),
                                this.$store.commit("players/remove", e)
                        }
                    },
                    swapPlayer(e, t) {
                        if (!this.session.isSpectator && !this.session.lockedVote)
                            if (void 0 === t)
                                this.cancel(),
                                    this.swap = e;
                            else {
                                if (this.session.nomination) {
                                    const e = this.players.indexOf(t)
                                        , i = this.session.nomination.map(t => t === this.swap ? e : t === e ? this.swap : t);
                                    this.session.nomination[0] === i[0] && this.session.nomination[1] === i[1] || this.$store.commit("session/setNomination", i)
                                }
                                this.$store.commit("players/swap", [this.swap, this.players.indexOf(t)]),
                                    this.cancel()
                            }
                    },
                    movePlayer(e, t) {
                        if (!this.session.isSpectator && !this.session.lockedVote)
                            if (void 0 === t)
                                this.cancel(),
                                    this.move = e;
                            else {
                                if (this.session.nomination) {
                                    const e = this.players.indexOf(t)
                                        , i = this.session.nomination.map(t => t === this.move ? e : t > this.move && t <= e ? t - 1 : t < this.move && t >= e ? t + 1 : t);
                                    this.session.nomination[0] === i[0] && this.session.nomination[1] === i[1] || this.$store.commit("session/setNomination", i)
                                }
                                this.$store.commit("players/move", [this.move, this.players.indexOf(t)]),
                                    this.cancel()
                            }
                    },
                    nominatePlayer(e, t) {
                        if (!this.session.isSpectator && !this.session.lockedVote)
                            if (void 0 === t)
                                this.cancel(),
                                    e !== this.nominate && (this.nominate = e);
                            else {
                                const e = [this.nominate, this.players.indexOf(t)];
                                this.$store.commit("session/nomination", {
                                    nomination: e
                                }),
                                    this.cancel()
                            }
                    },
                    cancel() {
                        this.move = -1,
                            this.swap = -1,
                            this.nominate = -1
                    }
                }
            }
            , L = W
            , z = (i("3636"),
                Object(f["a"])(L, l, h, !1, null, null, null))
            , B = z.exports
            , Y = function () {
                var e = this
                    , t = e.$createElement
                    , o = e._self._c || t;
                return o("ul", {
                    staticClass: "info"
                }, [o("li", {
                    staticClass: "edition",
                    class: ["edition-" + e.edition.id],
                    style: {
                        backgroundImage: "url(" + (e.edition.logo && e.grimoire.isImageOptIn ? e.edition.logo : i("ce23")("./" + e.edition.id + ".png")) + ")"
                    }
                }), e.players.length - e.teams.traveler < 5 ? o("li", [e._v(" Please add more players! ")]) : e._e(), o("li", [e.edition.isOfficial ? e._e() : o("span", {
                    staticClass: "meta"
                }, [e._v(" " + e._s(e.edition.name) + " " + e._s(e.edition.author ? "by " + e.edition.author : "") + " ")]), o("span", [e._v(" " + e._s(e.players.length) + " "), o("font-awesome-icon", {
                    staticClass: "players",
                    attrs: {
                        icon: "users"
                    }
                })], 1), o("span", [e._v(" " + e._s(e.teams.alive) + " "), o("font-awesome-icon", {
                    staticClass: "alive",
                    attrs: {
                        icon: "heartbeat"
                    }
                })], 1), o("span", [e._v(" " + e._s(e.teams.votes) + " "), o("font-awesome-icon", {
                    staticClass: "votes",
                    attrs: {
                        icon: "vote-yea"
                    }
                })], 1)]), e.players.length - e.teams.traveler >= 5 ? o("li", [o("span", [e._v(" " + e._s(e.teams.townsfolk) + " "), o("font-awesome-icon", {
                    staticClass: "townsfolk",
                    attrs: {
                        icon: "user-friends"
                    }
                })], 1), o("span", [e._v(" " + e._s(e.teams.outsider) + " "), o("font-awesome-icon", {
                    staticClass: "outsider",
                    attrs: {
                        icon: e.teams.outsider > 1 ? "user-friends" : "user"
                    }
                })], 1), o("span", [e._v(" " + e._s(e.teams.minion) + " "), o("font-awesome-icon", {
                    staticClass: "minion",
                    attrs: {
                        icon: e.teams.minion > 1 ? "user-friends" : "user"
                    }
                })], 1), o("span", [e._v(" " + e._s(e.teams.demon) + " "), o("font-awesome-icon", {
                    staticClass: "demon",
                    attrs: {
                        icon: e.teams.demon > 1 ? "user-friends" : "user"
                    }
                })], 1), e.teams.traveler ? o("span", [e._v(" " + e._s(e.teams.traveler) + " "), o("font-awesome-icon", {
                    staticClass: "traveler",
                    attrs: {
                        icon: e.teams.traveler > 1 ? "user-friends" : "user"
                    }
                })], 1) : e._e(), e.grimoire.isNight ? o("span", [e._v(" Night phase "), o("font-awesome-icon", {
                    attrs: {
                        icon: ["fas", "cloud-moon"]
                    }
                })], 1) : e._e()]) : e._e()])
            }
            , J = []
            , U = i("634a")
            , q = {
                computed: {
                    teams: function () {
                        const { players: e } = this.$store.state.players
                            , t = this.$store.getters["players/nonTravelers"]
                            , i = e.filter(e => !0 !== e.isDead).length;
                        return {
                            ...U[t - 5],
                            traveler: e.length - t,
                            alive: i,
                            votes: i + e.filter(e => !0 === e.isDead && !0 !== e.isVoteless).length
                        }
                    },
                    ...Object(n["d"])(["edition", "grimoire"]),
                    ...Object(n["d"])("players", ["players"])
                }
            }
            , K = q
            , Z = (i("c5bf"),
                Object(f["a"])(K, Y, J, !1, null, "e858a1da", null))
            , Q = Z.exports
            , X = function () {
                var e = this
                    , t = e.$createElement
                    , i = e._self._c || t;
                return i("div", {
                    attrs: {
                        id: "controls"
                    }
                }, [i("span", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.session.voteHistory.length && e.session.sessionId,
                        expression: "session.voteHistory.length && session.sessionId"
                    }],
                    staticClass: "nomlog-summary",
                    attrs: {
                        title: e.session.voteHistory.length + " recent " + (1 == e.session.voteHistory.length ? "nomination" : "nominations")
                    },
                    on: {
                        click: function (t) {
                            return e.toggleModal("voteHistory")
                        }
                    }
                }, [i("font-awesome-icon", {
                    attrs: {
                        icon: "book-dead"
                    }
                }), e._v(" " + e._s(e.session.voteHistory.length) + " ")], 1), e.session.sessionId ? i("span", {
                    staticClass: "session",
                    class: {
                        spectator: e.session.isSpectator,
                        reconnecting: e.session.isReconnecting
                    },
                    attrs: {
                        title: e.session.playerCount + " other players in this session" + (e.session.ping ? " (" + e.session.ping + "ms latency)" : "")
                    },
                    on: {
                        click: e.leaveSession
                    }
                }, [i("font-awesome-icon", {
                    attrs: {
                        icon: "broadcast-tower"
                    }
                }), e._v(" " + e._s(e.session.playerCount) + " ")], 1) : e._e(), i("div", {
                    staticClass: "menu",
                    class: {
                        open: e.grimoire.isMenuOpen
                    }
                }, [i("font-awesome-icon", {
                    attrs: {
                        icon: "cog"
                    },
                    on: {
                        click: e.toggleMenu
                    }
                }), i("ul", [i("li", {
                    staticClass: "tabs",
                    class: e.tab
                }, [i("font-awesome-icon", {
                    attrs: {
                        icon: "book-open"
                    },
                    on: {
                        click: function (t) {
                            e.tab = "grimoire"
                        }
                    }
                }), i("font-awesome-icon", {
                    attrs: {
                        icon: "broadcast-tower"
                    },
                    on: {
                        click: function (t) {
                            e.tab = "session"
                        }
                    }
                }), e.session.isSpectator ? e._e() : i("font-awesome-icon", {
                    attrs: {
                        icon: "users"
                    },
                    on: {
                        click: function (t) {
                            e.tab = "players"
                        }
                    }
                }), i("font-awesome-icon", {
                    attrs: {
                        icon: "theater-masks"
                    },
                    on: {
                        click: function (t) {
                            e.tab = "characters"
                        }
                    }
                }), i("font-awesome-icon", {
                    attrs: {
                        icon: "question"
                    },
                    on: {
                        click: function (t) {
                            e.tab = "help"
                        }
                    }
                })], 1), "grimoire" === e.tab ? [i("li", {
                    staticClass: "headline"
                }, [e._v("Grimoire")]), e.players.length ? i("li", {
                    on: {
                        click: e.toggleGrimoire
                    }
                }, [e.grimoire.isPublic ? e._e() : [e._v("Hide")], e.grimoire.isPublic ? [e._v("Show")] : e._e(), i("em", [e._v("[G]")])], 2) : e._e(), e.session.isSpectator ? e._e() : i("li", {
                    on: {
                        click: e.toggleNight
                    }
                }, [e.grimoire.isNight ? e._e() : [e._v("Switch to Night")], e.grimoire.isNight ? [e._v("Switch to Day")] : e._e(), i("em", [e._v("[S]")])], 2), e.players.length ? i("li", {
                    on: {
                        click: e.toggleNightOrder
                    }
                }, [e._v(" Night order "), i("em", [i("font-awesome-icon", {
                    attrs: {
                        icon: ["fas", e.grimoire.isNightOrder ? "check-square" : "square"]
                    }
                })], 1)]) : e._e(), e.players.length ? i("li", [e._v(" Zoom "), i("em", [i("font-awesome-icon", {
                    attrs: {
                        icon: "search-minus"
                    },
                    on: {
                        click: function (t) {
                            return e.setZoom(e.grimoire.zoom - 1)
                        }
                    }
                }), e._v(" " + e._s(Math.round(100 + 10 * e.grimoire.zoom)) + "% "), i("font-awesome-icon", {
                    attrs: {
                        icon: "search-plus"
                    },
                    on: {
                        click: function (t) {
                            return e.setZoom(e.grimoire.zoom + 1)
                        }
                    }
                })], 1)]) : e._e(), i("li", {
                    on: {
                        click: e.setBackground
                    }
                }, [e._v(" Background image "), i("em", [i("font-awesome-icon", {
                    attrs: {
                        icon: "image"
                    }
                })], 1)]), e.edition.isOfficial ? e._e() : i("li", {
                    on: {
                        click: e.imageOptIn
                    }
                }, [i("small", [e._v("Show Custom Images")]), i("em", [i("font-awesome-icon", {
                    attrs: {
                        icon: ["fas", e.grimoire.isImageOptIn ? "check-square" : "square"]
                    }
                })], 1)]), i("li", {
                    on: {
                        click: e.toggleStatic
                    }
                }, [e._v(" Disable Animations "), i("em", [i("font-awesome-icon", {
                    attrs: {
                        icon: ["fas", e.grimoire.isStatic ? "check-square" : "square"]
                    }
                })], 1)]), i("li", {
                    on: {
                        click: e.toggleMuted
                    }
                }, [e._v(" Mute Sounds "), i("em", [i("font-awesome-icon", {
                    attrs: {
                        icon: ["fas", e.grimoire.isMuted ? "volume-mute" : "volume-up"]
                    }
                })], 1)])] : e._e(), "session" === e.tab ? [e.session.sessionId ? i("li", {
                    staticClass: "headline"
                }, [e._v(" " + e._s(e.session.isSpectator ? "Playing" : "Hosting") + " ")]) : i("li", {
                    staticClass: "headline"
                }, [e._v(" Live Session ")]), e.session.sessionId ? [e.session.ping ? i("li", [e._v(" Delay to " + e._s(e.session.isSpectator ? "host" : "players") + " "), i("em", [e._v(e._s(e.session.ping) + "ms")])]) : e._e(), i("li", {
                    on: {
                        click: e.copySessionUrl
                    }
                }, [e._v(" Copy player link "), i("em", [i("font-awesome-icon", {
                    attrs: {
                        icon: "copy"
                    }
                })], 1)]), e.session.isSpectator ? e._e() : i("li", {
                    on: {
                        click: e.distributeRoles
                    }
                }, [e._v(" Send Characters "), i("em", [i("font-awesome-icon", {
                    attrs: {
                        icon: "theater-masks"
                    }
                })], 1)]), e.session.voteHistory.length || !e.session.isSpectator ? i("li", {
                    on: {
                        click: function (t) {
                            return e.toggleModal("voteHistory")
                        }
                    }
                }, [e._v(" Vote history"), i("em", [e._v("[V]")])]) : e._e(), i("li", {
                    on: {
                        click: e.leaveSession
                    }
                }, [e._v(" Leave Session "), i("em", [e._v(e._s(e.session.sessionId))])])] : [i("li", {
                    on: {
                        click: e.hostSession
                    }
                }, [e._v("Host (Storyteller)"), i("em", [e._v("[H]")])]), i("li", {
                    on: {
                        click: e.joinSession
                    }
                }, [e._v("Join (Player)"), i("em", [e._v("[J]")])])]] : e._e(), "players" !== e.tab || e.session.isSpectator ? e._e() : [i("li", {
                    staticClass: "headline"
                }, [e._v("Players")]), e.players.length < 20 ? i("li", {
                    on: {
                        click: e.addPlayer
                    }
                }, [e._v("Add"), i("em", [e._v("[A]")])]) : e._e(), e.players.length > 2 ? i("li", {
                    on: {
                        click: e.randomizeSeatings
                    }
                }, [e._v(" Randomize "), i("em", [i("font-awesome-icon", {
                    attrs: {
                        icon: "dice"
                    }
                })], 1)]) : e._e(), e.players.length ? i("li", {
                    on: {
                        click: e.clearPlayers
                    }
                }, [e._v(" Remove all "), i("em", [i("font-awesome-icon", {
                    attrs: {
                        icon: "trash-alt"
                    }
                })], 1)]) : e._e()], "characters" === e.tab ? [i("li", {
                    staticClass: "headline"
                }, [e._v("Characters")]), e.session.isSpectator ? e._e() : i("li", {
                    on: {
                        click: function (t) {
                            return e.toggleModal("edition")
                        }
                    }
                }, [e._v(" Select Edition "), i("em", [e._v("[E]")])]), !e.session.isSpectator && e.players.length > 4 ? i("li", {
                    on: {
                        click: function (t) {
                            return e.toggleModal("roles")
                        }
                    }
                }, [e._v(" Choose & Assign "), i("em", [e._v("[C]")])]) : e._e(), e.session.isSpectator ? e._e() : i("li", {
                    on: {
                        click: function (t) {
                            return e.toggleModal("fabled")
                        }
                    }
                }, [e._v(" Add Fabled "), i("em", [i("font-awesome-icon", {
                    attrs: {
                        icon: "dragon"
                    }
                })], 1)]), e.players.length ? i("li", {
                    on: {
                        click: e.clearRoles
                    }
                }, [e._v(" Remove all "), i("em", [i("font-awesome-icon", {
                    attrs: {
                        icon: "trash-alt"
                    }
                })], 1)]) : e._e()] : e._e(), "help" === e.tab ? [i("li", {
                    staticClass: "headline"
                }, [e._v("Help")]), i("li", {
                    on: {
                        click: function (t) {
                            return e.toggleModal("reference")
                        }
                    }
                }, [e._v(" Reference Sheet "), i("em", [e._v("[R]")])]), i("li", {
                    on: {
                        click: function (t) {
                            return e.toggleModal("nightOrder")
                        }
                    }
                }, [e._v(" Night Order Sheet "), i("em", [e._v("[N]")])]), i("li", {
                    on: {
                        click: function (t) {
                            return e.toggleModal("gameState")
                        }
                    }
                }, [e._v(" Game State JSON "), i("em", [i("font-awesome-icon", {
                    attrs: {
                        icon: "file-code"
                    }
                })], 1)]), i("li", [i("a", {
                    attrs: {
                        href: "https://discord.gg/Gd7ybwWbFk",
                        target: "_blank"
                    }
                }, [e._v(" Join Discord ")]), i("em", [i("a", {
                    attrs: {
                        href: "https://discord.gg/Gd7ybwWbFk",
                        target: "_blank"
                    }
                }, [i("font-awesome-icon", {
                    attrs: {
                        icon: ["fab", "discord"]
                    }
                })], 1)])]), i("li", [i("a", {
                    attrs: {
                        href: "https://github.com/bra1n/townsquare",
                        target: "_blank"
                    }
                }, [e._v(" Source code ")]), i("em", [i("a", {
                    attrs: {
                        href: "https://github.com/bra1n/townsquare",
                        target: "_blank"
                    }
                }, [i("font-awesome-icon", {
                    attrs: {
                        icon: ["fab", "github"]
                    }
                })], 1)])])] : e._e()], 2)], 1)])
            }
            , ee = []
            , te = {
                computed: {
                    ...Object(n["d"])(["grimoire", "session", "edition"]),
                    ...Object(n["d"])("players", ["players"])
                },
                data() {
                    return {
                        tab: "grimoire"
                    }
                },
                methods: {
                    setBackground() {
                        const e = prompt("Enter custom background URL");
                        (e || "" === e) && this.$store.commit("setBackground", e)
                    },
                    hostSession() {
                        if (this.session.sessionId)
                            return;
                        const e = prompt("Enter a channel number / name for your session", Math.round(1e4 * Math.random()));
                        e && (this.$store.commit("session/clearVoteHistory"),
                            this.$store.commit("session/setSpectator", !1),
                            this.$store.commit("session/setSessionId", e),
                            this.copySessionUrl())
                    },
                    copySessionUrl() {
                        const e = window.location.href.split("#")[0]
                            , t = e + "#" + this.session.sessionId;
                        navigator.clipboard.writeText(t)
                    },
                    distributeRoles() {
                        if (this.session.isSpectator)
                            return;
                        const e = "Do you want to distribute assigned characters to all SEATED players?";
                        confirm(e) && (this.$store.commit("session/distributeRoles", !0),
                            setTimeout((() => {
                                this.$store.commit("session/distributeRoles", !1)
                            }
                            ).bind(this), 2e3))
                    },
                    imageOptIn() {
                        const e = "Are you sure you want to allow custom images? A malicious script file author might track your IP address this way.";
                        (this.grimoire.isImageOptIn || confirm(e)) && this.toggleImageOptIn()
                    },
                    joinSession() {
                        if (this.session.sessionId)
                            return this.leaveSession();
                        let e = prompt("Enter the channel number / name of the session you want to join");
                        e.match(/^https?:\/\//i) && (e = e.split("#").pop()),
                            e && (this.$store.commit("session/clearVoteHistory"),
                                this.$store.commit("session/setSpectator", !0),
                                this.$store.commit("toggleGrimoire", !1),
                                this.$store.commit("session/setSessionId", e))
                    },
                    leaveSession() {
                        confirm("Are you sure you want to leave the active live game?") && (this.$store.commit("session/setSpectator", !1),
                            this.$store.commit("session/setSessionId", ""))
                    },
                    addPlayer() {
                        if (this.session.isSpectator)
                            return;
                        if (this.players.length >= 20)
                            return;
                        const e = prompt("Player name");
                        e && this.$store.commit("players/add", e)
                    },
                    randomizeSeatings() {
                        this.session.isSpectator || confirm("Are you sure you want to randomize seatings?") && this.$store.dispatch("players/randomize")
                    },
                    clearPlayers() {
                        this.session.isSpectator || confirm("Are you sure you want to remove all players?") && (this.session.nomination && this.$store.commit("session/nomination"),
                            this.$store.commit("players/clear"))
                    },
                    clearRoles() {
                        confirm("Are you sure you want to remove all player roles?") && this.$store.dispatch("players/clearRoles")
                    },
                    toggleNight() {
                        this.$store.commit("toggleNight"),
                            this.grimoire.isNight && this.$store.commit("session/setMarkedPlayer", -1)
                    },
                    ...Object(n["c"])(["toggleGrimoire", "toggleMenu", "toggleImageOptIn", "toggleMuted", "toggleNightOrder", "toggleStatic", "setZoom", "toggleModal"])
                }
            }
            , ie = te
            , oe = (i("2176"),
                Object(f["a"])(ie, X, ee, !1, null, "84ed831a", null))
            , se = oe.exports
            , ae = function () {
                var e = this
                    , t = e.$createElement
                    , i = e._self._c || t;
                return e.modals.roles && e.nonTravelers >= 5 ? i("Modal", {
                    staticClass: "roles",
                    on: {
                        close: function (t) {
                            return e.toggleModal("roles")
                        }
                    }
                }, [i("h3", [e._v("Select the characters for " + e._s(e.nonTravelers) + " players:")]), e._l(e.roleSelection, (function (t, o) {
                    return i("ul", {
                        key: o,
                        staticClass: "tokens"
                    }, [i("li", {
                        staticClass: "count",
                        class: [o]
                    }, [e._v(" " + e._s(t.reduce((function (e, t) {
                        var i = t.selected;
                        return e + i
                    }
                    ), 0)) + " / " + e._s(e.game[e.nonTravelers - 5][o]) + " ")]), e._l(t, (function (t) {
                        return i("li", {
                            key: t.id,
                            class: [t.team, t.selected ? "selected" : ""],
                            on: {
                                click: function (e) {
                                    t.selected = t.selected ? 0 : 1
                                }
                            }
                        }, [i("Token", {
                            attrs: {
                                role: t
                            }
                        }), t.setup ? i("font-awesome-icon", {
                            attrs: {
                                icon: "exclamation-triangle"
                            }
                        }) : e._e(), e.allowMultiple ? i("div", {
                            staticClass: "buttons"
                        }, [i("font-awesome-icon", {
                            attrs: {
                                icon: "minus-circle"
                            },
                            on: {
                                click: function (e) {
                                    e.stopPropagation(),
                                        t.selected--
                                }
                            }
                        }), i("span", [e._v(e._s(t.selected > 1 ? "x" + t.selected : ""))]), i("font-awesome-icon", {
                            attrs: {
                                icon: "plus-circle"
                            },
                            on: {
                                click: function (e) {
                                    e.stopPropagation(),
                                        t.selected++
                                }
                            }
                        })], 1) : e._e()], 1)
                    }
                    ))], 2)
                }
                )), e.hasSelectedSetupRoles ? i("div", {
                    staticClass: "warning"
                }, [i("font-awesome-icon", {
                    attrs: {
                        icon: "exclamation-triangle"
                    }
                }), i("span", [e._v(" Warning: there are characters selected that modify the game setup! The randomizer does not account for these characters. ")])], 1) : e._e(), i("label", {
                    staticClass: "multiple",
                    class: {
                        checked: e.allowMultiple
                    }
                }, [i("font-awesome-icon", {
                    attrs: {
                        icon: e.allowMultiple ? "check-square" : "square"
                    }
                }), i("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.allowMultiple,
                        expression: "allowMultiple"
                    }],
                    attrs: {
                        type: "checkbox",
                        name: "allow-multiple"
                    },
                    domProps: {
                        checked: Array.isArray(e.allowMultiple) ? e._i(e.allowMultiple, null) > -1 : e.allowMultiple
                    },
                    on: {
                        change: function (t) {
                            var i = e.allowMultiple
                                , o = t.target
                                , s = !!o.checked;
                            if (Array.isArray(i)) {
                                var a = null
                                    , n = e._i(i, a);
                                o.checked ? n < 0 && (e.allowMultiple = i.concat([a])) : n > -1 && (e.allowMultiple = i.slice(0, n).concat(i.slice(n + 1)))
                            } else
                                e.allowMultiple = s
                        }
                    }
                }), e._v(" Allow duplicate characters ")], 1), i("div", {
                    staticClass: "button-group"
                }, [i("div", {
                    staticClass: "button",
                    class: {
                        disabled: e.selectedRoles > e.nonTravelers || !e.selectedRoles
                    },
                    on: {
                        click: e.assignRoles
                    }
                }, [i("font-awesome-icon", {
                    attrs: {
                        icon: "people-arrows"
                    }
                }), e._v(" Assign " + e._s(e.selectedRoles) + " characters randomly ")], 1), i("div", {
                    staticClass: "button",
                    on: {
                        click: e.selectRandomRoles
                    }
                }, [i("font-awesome-icon", {
                    attrs: {
                        icon: "random"
                    }
                }), e._v(" Shuffle characters ")], 1)])], 2) : e._e()
            }
            , ne = [];
        const re = e => e[Math.floor(Math.random() * e.length)];
        var le = {
            components: {
                Token: b,
                Modal: O
            },
            data: function () {
                return {
                    roleSelection: {},
                    game: U,
                    allowMultiple: !1
                }
            },
            computed: {
                selectedRoles: function () {
                    return Object.values(this.roleSelection).map(e => e.reduce((e, { selected: t }) => e + t, 0)).reduce((e, t) => e + t, 0)
                },
                hasSelectedSetupRoles: function () {
                    return Object.values(this.roleSelection).some(e => e.some(e => e.selected && e.setup))
                },
                ...Object(n["d"])(["roles", "modals"]),
                ...Object(n["d"])("players", ["players"]),
                ...Object(n["b"])({
                    nonTravelers: "players/nonTravelers"
                })
            },
            methods: {
                selectRandomRoles() {
                    this.roleSelection = {},
                        this.roles.forEach(e => {
                            this.roleSelection[e.team] || this.$set(this.roleSelection, e.team, []),
                                this.roleSelection[e.team].push(e),
                                this.$set(e, "selected", 0)
                        }
                        ),
                        delete this.roleSelection["traveler"];
                    const e = Math.max(5, this.nonTravelers)
                        , t = this.game[e - 5];
                    Object.keys(t).forEach(e => {
                        for (let i = 0; i < t[e]; i++)
                            if (this.roleSelection[e]) {
                                const t = this.roleSelection[e].filter(e => !e.selected);
                                t.length && (re(t).selected = 1)
                            }
                    }
                    )
                },
                assignRoles() {
                    if (this.selectedRoles <= this.nonTravelers && this.selectedRoles) {
                        const e = Object.values(this.roleSelection).map(e => e.reduce((e, t) => [...e, ...Array(t.selected).fill(t)], [])).reduce((e, t) => [...e, ...t], []).map(e => [Math.random(), e]).sort((e, t) => e[0] - t[0]).map(e => e[1]);
                        this.players.forEach(t => {
                            if ("traveler" !== t.role.team && e.length) {
                                const i = e.pop();
                                this.$store.commit("players/update", {
                                    player: t,
                                    property: "role",
                                    value: i
                                })
                            }
                        }
                        ),
                            this.$store.commit("toggleModal", "roles")
                    }
                },
                ...Object(n["c"])(["toggleModal"])
            },
            mounted: function () {
                Object.keys(this.roleSelection).length || this.selectRandomRoles()
            },
            watch: {
                roles() {
                    this.selectRandomRoles()
                }
            }
        }
            , he = le
            , de = (i("8970"),
                Object(f["a"])(he, ae, ne, !1, null, "365502ca", null))
            , ce = de.exports
            , me = function () {
                var e = this
                    , t = e.$createElement
                    , o = e._self._c || t;
                return e.modals.edition ? o("Modal", {
                    staticClass: "editions",
                    on: {
                        close: function (t) {
                            return e.toggleModal("edition")
                        }
                    }
                }, [e.isCustom ? o("div", {
                    staticClass: "custom"
                }, [o("h3", [e._v("Load custom script / characters")]), e._v(" To play with a custom script, you need to select the characters you want to play with in the official "), o("a", {
                    attrs: {
                        href: "https://script.bloodontheclocktower.com/",
                        target: "_blank"
                    }
                }, [e._v("Script Tool")]), e._v(' and then upload the generated "custom-list.json" either directly here or provide a URL to such a hosted JSON file.'), o("br"), o("br"), e._v(" To play with custom characters, please read "), o("a", {
                    attrs: {
                        href: "https://github.com/bra1n/townsquare#custom-characters",
                        target: "_blank"
                    }
                }, [e._v("the documentation")]), e._v(" on how to write a custom character definition file. "), o("b", [e._v("Only load custom JSON files from sources that you trust!")]), o("h3", [e._v("Some popular custom scripts:")]), o("ul", {
                    staticClass: "scripts"
                }, e._l(e.scripts, (function (t, i) {
                    return o("li", {
                        key: i,
                        on: {
                            click: function (i) {
                                return e.handleURL(t[1])
                            }
                        }
                    }, [e._v(" " + e._s(t[0]) + " ")])
                }
                )), 0), o("input", {
                    ref: "upload",
                    attrs: {
                        type: "file",
                        accept: "application/json"
                    },
                    on: {
                        change: e.handleUpload
                    }
                }), o("div", {
                    staticClass: "button-group"
                }, [o("div", {
                    staticClass: "button",
                    on: {
                        click: e.openUpload
                    }
                }, [o("font-awesome-icon", {
                    attrs: {
                        icon: "file-upload"
                    }
                }), e._v(" Upload JSON ")], 1), o("div", {
                    staticClass: "button",
                    on: {
                        click: e.promptURL
                    }
                }, [o("font-awesome-icon", {
                    attrs: {
                        icon: "link"
                    }
                }), e._v(" Enter URL ")], 1), o("div", {
                    staticClass: "button",
                    on: {
                        click: e.readFromClipboard
                    }
                }, [o("font-awesome-icon", {
                    attrs: {
                        icon: "clipboard"
                    }
                }), e._v(" Use JSON from Clipboard ")], 1), o("div", {
                    staticClass: "button",
                    on: {
                        click: function (t) {
                            e.isCustom = !1
                        }
                    }
                }, [o("font-awesome-icon", {
                    attrs: {
                        icon: "undo"
                    }
                }), e._v(" Back ")], 1)])]) : o("div", [o("h3", [e._v("Select an edition:")]), o("ul", {
                    staticClass: "editions"
                }, [e._l(e.editions, (function (t) {
                    return o("li", {
                        key: t.id,
                        staticClass: "edition",
                        class: ["edition-" + t.id],
                        style: {
                            backgroundImage: "url(" + i("ce23")("./" + t.id + ".png") + ")"
                        },
                        on: {
                            click: function (i) {
                                return e.setEdition(t)
                            }
                        }
                    }, [e._v(" " + e._s(t.name) + " ")])
                }
                )), o("li", {
                    staticClass: "edition edition-custom",
                    style: {
                        backgroundImage: "url(" + i("441d") + ")"
                    },
                    on: {
                        click: function (t) {
                            e.isCustom = !0
                        }
                    }
                }, [e._v(" Custom Script / Characters ")])], 2)])]) : e._e()
            }
            , pe = []
            , ge = i("00c0")
            , ue = {
                components: {
                    Modal: O
                },
                data: function () {
                    return {
                        editions: ge,
                        isCustom: !1,
                        scripts: [["Deadly Penance Day", "https://gist.githubusercontent.com/bra1n/0337cc44c6fd2c44f7589256ed5486d2/raw/16be38fa3c01aaf49827303ac80577bdb52c0b25/penanceday.json"], ["Catfishing 11.1", "https://gist.githubusercontent.com/bra1n/8a5ec41a7bbf945f6b7dfc1cef72b569/raw/a312ab93c2f302e0ef83c8b65a4e8e82760fda3a/catfishing.json"], ["On Thin Ice (Teensyville)", "https://gist.githubusercontent.com/bra1n/8dacd9f2abc6f428331ea1213ab153f5/raw/0cacbcaf8ed9bddae0cca25a9ada97e9958d868b/on-thin-ice.json"], ["Race To The Bottom (Teensyville)", "https://gist.githubusercontent.com/bra1n/63e1354cb3dc9d4032bcd0623dc48888/raw/5acb0eedcc0a67a64a99c7e0e6271de0b7b2e1b2/race-to-the-bottom.json"], ["Frankenstein's Mayor by Ted (Teensyville)", "https://gist.githubusercontent.com/bra1n/32c52b422cc01b934a4291eeb81dbcee/raw/5bf770693bbf7aff5e86601c82ca4af3222f4ba6/Frankensteins_Mayor_by_Ted.json"], ["Vigormortis High School (Teensyville)", "https://gist.githubusercontent.com/bra1n/1f65bd4a999524719d5dabe98c3c2d27/raw/22bbec6bf56a51a7459e5ae41ed47e41971c5445/VigormortisHighSchool.json"]]
                    }
                },
                computed: Object(n["d"])(["modals"]),
                methods: {
                    openUpload() {
                        this.$refs.upload.click()
                    },
                    handleUpload() {
                        const e = this.$refs.upload.files[0];
                        if (e && e.size) {
                            const t = new FileReader;
                            t.addEventListener("load", () => {
                                try {
                                    const e = JSON.parse(t.result);
                                    this.parseRoles(e)
                                } catch (e) {
                                    alert("Error reading custom script: " + e.message)
                                }
                                this.$refs.upload.value = ""
                            }
                            ),
                                t.readAsText(e)
                        }
                    },
                    promptURL() {
                        const e = prompt("Enter URL to a custom-script.json file");
                        e && this.handleURL(e)
                    },
                    async handleURL(e) {
                        const t = await fetch(e);
                        if (t && t.json)
                            try {
                                const e = await t.json();
                                this.parseRoles(e)
                            } catch (i) {
                                alert("Error loading custom script: " + i.message)
                            }
                    },
                    async readFromClipboard() {
                        const e = await navigator.clipboard.readText();
                        try {
                            const t = JSON.parse(e);
                            this.parseRoles(t)
                        } catch (t) {
                            alert("Error reading custom script: " + t.message)
                        }
                    },
                    parseRoles(e) {
                        if (!e || !e.length)
                            return;
                        const t = e.findIndex(({ id: e }) => "_meta" === e);
                        let i = {};
                        if (t > -1 && (i = e.splice(t, 1).pop()),
                            this.$store.commit("setCustomRoles", e),
                            this.$store.commit("setEdition", Object.assign({}, i, {
                                id: "custom"
                            })),
                            e.some(({ id: e }) => this.$store.state.fabled.has(e))) {
                            const t = [];
                            e.forEach(({ id: e }) => {
                                this.$store.state.fabled.has(e) && t.push(this.$store.state.fabled.get(e))
                            }
                            ),
                                this.$store.commit("players/setFabled", {
                                    fabled: t
                                })
                        }
                        this.isCustom = !1
                    },
                    ...Object(n["c"])(["toggleModal", "setEdition"])
                }
            }
            , fe = ue
            , ye = (i("67ad"),
                Object(f["a"])(fe, me, pe, !1, null, "7e8e55da", null))
            , be = ye.exports
            , ve = function () {
                var e = this
                    , t = e.$createElement
                    , o = e._self._c || t;
                return o("div", {
                    staticClass: "intro"
                }, [o("img", {
                    staticClass: "logo",
                    attrs: {
                        src: "static/apple-icon.png",
                        alt: ""
                    }
                }), o("div", [e._v(" Welcome to the (unofficial) "), o("b", [e._v("Virtual Town Square and Grimoire")]), e._v(" for Blood on the Clocktower! Please add more players through the "), o("span", {
                    staticClass: "button",
                    on: {
                        click: e.toggleMenu
                    }
                }, [o("font-awesome-icon", {
                    attrs: {
                        icon: "cog"
                    }
                }), e._v(" Menu ")], 1), e._v(" on the top right or by pressing "), o("b", [e._v("[A]")]), e._v(". You can also join a game session by pressing "), o("b", [e._v("[J]")]), e._v("."), o("br"), e._m(0)]), "zh-CN" === e.language ? o("a", {
                    staticClass: "redirect",
                    attrs: {
                        href: "https://clocktower.gstonegames.com"
                    }
                }, [o("img", {
                    staticClass: "gstone",
                    attrs: {
                        src: i("dd41"),
                        alt: ""
                    }
                }), e._v(" 你想使用中文版魔典吗？ ")]) : e._e()])
            }
            , ke = [function () {
                var e = this
                    , t = e.$createElement
                    , i = e._self._c || t;
                return i("div", {
                    staticClass: "footer"
                }, [e._v(" This project is free and open source and can be found on "), i("a", {
                    attrs: {
                        href: "https://github.com/bra1n/townsquare",
                        target: "_blank"
                    }
                }, [e._v("GitHub")]), e._v('. It is not affiliated with The Pandemonium Institute. "Blood on the Clocktower" is a trademark of Steven Medway and The Pandemonium Institute. ')])
            }
            ]
            , we = {
                data() {
                    return {
                        language: window.navigator.userLanguage || window.navigator.language
                    }
                },
                methods: Object(n["c"])(["toggleMenu"])
            }
            , Ne = we
            , _e = (i("e484"),
                Object(f["a"])(Ne, ve, ke, !1, null, "14bc5701", null))
            , Se = _e.exports
            , Re = function () {
                var e = this
                    , t = e.$createElement
                    , o = e._self._c || t;
                return e.modals.reference && e.roles.size ? o("Modal", {
                    staticClass: "characters",
                    on: {
                        close: function (t) {
                            return e.toggleModal("reference")
                        }
                    }
                }, [o("font-awesome-icon", {
                    staticClass: "toggle",
                    attrs: {
                        icon: "cloud-moon",
                        title: "Show Night Order"
                    },
                    on: {
                        click: function (t) {
                            return e.toggleModal("nightOrder")
                        }
                    }
                }), o("h3", [e._v(" Character Reference "), o("font-awesome-icon", {
                    attrs: {
                        icon: "address-card"
                    }
                }), e._v(" " + e._s(e.edition.name || "Custom Script") + " ")], 1), e._l(e.rolesGrouped, (function (t, s) {
                    return o("div", {
                        key: s,
                        class: ["team", s]
                    }, [o("aside", [o("h4", [e._v(e._s(s))])]), o("ul", [e._l(t, (function (t) {
                        return o("li", {
                            key: t.id,
                            class: [s]
                        }, [t.id ? o("span", {
                            staticClass: "icon",
                            style: {
                                backgroundImage: "url(" + (t.image && e.grimoire.isImageOptIn ? t.image : i("61b0")("./" + (t.imageAlt || t.id) + ".png")) + ")"
                            }
                        }) : e._e(), o("div", {
                            staticClass: "role"
                        }, [Object.keys(e.playersByRole).length ? o("span", {
                            staticClass: "player"
                        }, [e._v(e._s(e.playersByRole[t.id] ? e.playersByRole[t.id].join(", ") : ""))]) : e._e(), o("span", {
                            staticClass: "name"
                        }, [e._v(e._s(t.name))]), o("span", {
                            staticClass: "ability"
                        }, [e._v(e._s(t.ability))])])])
                    }
                    )), o("li", {
                        class: [s]
                    }), o("li", {
                        class: [s]
                    })], 2)])
                }
                )), e.jinxed.length ? o("div", {
                    staticClass: "team jinxed"
                }, [o("aside", [o("h4", [e._v("Jinxed")])]), o("ul", [e._l(e.jinxed, (function (t, s) {
                    return o("li", {
                        key: s
                    }, [o("span", {
                        staticClass: "icon",
                        style: {
                            backgroundImage: "url(" + i("61b0")("./" + t.first.id + ".png") + ")"
                        }
                    }), o("span", {
                        staticClass: "icon",
                        style: {
                            backgroundImage: "url(" + i("61b0")("./" + t.second.id + ".png") + ")"
                        }
                    }), o("div", {
                        staticClass: "role"
                    }, [o("span", {
                        staticClass: "name"
                    }, [e._v(e._s(t.first.name) + " & " + e._s(t.second.name))]), o("span", {
                        staticClass: "ability"
                    }, [e._v(e._s(t.reason))])])])
                }
                )), o("li"), o("li")], 2)]) : e._e()], 2) : e._e()
            }
            , xe = []
            , Ie = {
                components: {
                    Modal: O
                },
                computed: {
                    jinxed: function () {
                        const e = [];
                        return this.roles.forEach(t => {
                            this.jinxes.get(t.id) && this.jinxes.get(t.id).forEach((i, o) => {
                                this.roles.get(o) && e.push({
                                    first: t,
                                    second: this.roles.get(o),
                                    reason: i
                                })
                            }
                            )
                        }
                        ),
                            e
                    },
                    rolesGrouped: function () {
                        const e = {};
                        return this.roles.forEach(t => {
                            e[t.team] || (e[t.team] = []),
                                e[t.team].push(t)
                        }
                        ),
                            delete e["traveler"],
                            e
                    },
                    playersByRole: function () {
                        const e = {};
                        return this.players.forEach(({ name: t, role: i }) => {
                            i && i.id && "traveler" !== i.team && (e[i.id] || (e[i.id] = []),
                                e[i.id].push(t))
                        }
                        ),
                            e
                    },
                    ...Object(n["d"])(["roles", "modals", "edition", "grimoire", "jinxes"]),
                    ...Object(n["d"])("players", ["players"])
                },
                methods: {
                    ...Object(n["c"])(["toggleModal"])
                }
            }
            , Me = Ie
            , Te = (i("4c96"),
                Object(f["a"])(Me, Re, xe, !1, null, "7d0ee60b", null))
            , Oe = Te.exports
            , Ce = function () {
                var e = this
                    , t = e.$createElement
                    , o = e._self._c || t;
                return o("div", {
                    attrs: {
                        id: "vote"
                    }
                }, [o("div", {
                    staticClass: "arrows"
                }, [o("span", {
                    staticClass: "nominee",
                    style: e.nomineeStyle
                }), o("span", {
                    staticClass: "nominator",
                    style: e.nominatorStyle
                })]), o("div", {
                    staticClass: "overlay"
                }, [o("audio", {
                    attrs: {
                        src: i("f6a8"),
                        preload: "auto"
                    }
                }), o("em", {
                    staticClass: "blue"
                }, [e._v(e._s(e.nominator.name))]), e._v(" nominated "), o("em", [e._v(e._s(e.nominee.name))]), e._v("! "), o("br"), !e.session.isSpectator || e.session.isVoteWatchingAllowed ? [o("em", {
                    staticClass: "blue"
                }, [e._v(" " + e._s(e.voters.length) + " vote" + e._s(1 !== e.voters.length ? "s" : "") + " ")]), e._v(" in favor ")] : e._e(), "traveler" !== e.nominee.role.team ? o("em", [e._v(" (majority is " + e._s(Math.ceil(e.alive / 2)) + ") ")]) : o("em", [e._v("(majority is " + e._s(Math.ceil(e.players.length / 2)) + ")")]), e.session.isSpectator ? e.canVote ? [e.session.isVoteWatchingAllowed && !e.session.isVoteInProgress ? o("div", [e._v(" " + e._s(e.session.votingSpeed / 1e3) + " seconds between votes ")]) : e._e(), o("div", {
                    staticClass: "button-group"
                }, [o("div", {
                    staticClass: "button townsfolk",
                    class: {
                        disabled: !e.currentVote
                    },
                    on: {
                        click: function (t) {
                            return e.vote(!1)
                        }
                    }
                }, [e._v(" Hand DOWN ")]), o("div", {
                    staticClass: "button demon",
                    class: {
                        disabled: e.currentVote
                    },
                    on: {
                        click: function (t) {
                            return e.vote(!0)
                        }
                    }
                }, [e._v(" Hand UP ")])])] : e.player ? e._e() : o("div", [e._v(" Please claim a seat to vote. ")]) : [e.session.isVoteWatchingAllowed && !e.session.isVoteInProgress && e.session.lockedVote < 1 ? o("div", [e._v(" Time per player: "), o("font-awesome-icon", {
                    attrs: {
                        icon: "minus-circle"
                    },
                    on: {
                        mousedown: function (t) {
                            return t.preventDefault(),
                                e.setVotingSpeed(-500)
                        }
                    }
                }), e._v(" " + e._s(e.session.votingSpeed / 1e3) + "s "), o("font-awesome-icon", {
                    attrs: {
                        icon: "plus-circle"
                    },
                    on: {
                        mousedown: function (t) {
                            return t.preventDefault(),
                                e.setVotingSpeed(500)
                        }
                    }
                })], 1) : e._e(), o("div", {
                    staticClass: "button-group"
                }, [e.session.isVoteInProgress ? e._e() : o("div", {
                    staticClass: "button townsfolk",
                    on: {
                        click: e.countdown
                    }
                }, [e._v(" Countdown ")]), e.session.isVoteInProgress ? [o("div", {
                    staticClass: "button townsfolk",
                    class: {
                        disabled: !e.session.lockedVote
                    },
                    on: {
                        click: e.pause
                    }
                }, [e._v(" " + e._s(e.voteTimer ? "Pause" : "Resume") + " ")]), o("div", {
                    staticClass: "button",
                    on: {
                        click: e.stop
                    }
                }, [e._v("Reset")])] : o("div", {
                    staticClass: "button",
                    on: {
                        click: e.start
                    }
                }, [e._v(" " + e._s(e.session.lockedVote ? "Restart" : "Start") + " ")]), o("div", {
                    staticClass: "button demon",
                    on: {
                        click: e.finish
                    }
                }, [e._v("Close")])], 2), "traveler" !== e.nominee.role.team ? o("div", {
                    staticClass: "button-group mark"
                }, [o("div", {
                    staticClass: "button",
                    class: {
                        disabled: e.session.nomination[1] === e.session.markedPlayer
                    },
                    on: {
                        click: e.setMarked
                    }
                }, [e._v(" Mark for execution ")]), o("div", {
                    staticClass: "button",
                    on: {
                        click: e.removeMarked
                    }
                }, [e._v(" Clear mark ")])]) : e._e()]], 2), o("transition", {
                    attrs: {
                        name: "blur"
                    }
                }, [e.session.isVoteInProgress && !e.session.lockedVote ? o("div", {
                    staticClass: "countdown"
                }, [o("span", [e._v("3")]), o("span", [e._v("2")]), o("span", [e._v("1")]), o("span", [e._v("GO")]), o("audio", {
                    attrs: {
                        autoplay: !e.grimoire.isMuted,
                        src: i("f6a8"),
                        muted: e.grimoire.isMuted
                    }
                })]) : e._e()])], 1)
            }
            , Pe = []
            , De = {
                computed: {
                    ...Object(n["d"])("players", ["players"]),
                    ...Object(n["d"])(["session", "grimoire"]),
                    ...Object(n["b"])({
                        alive: "players/alive"
                    }),
                    nominator: function () {
                        return this.players[this.session.nomination[0]]
                    },
                    nominatorStyle: function () {
                        const e = this.players.length
                            , t = this.session.nomination[0];
                        return {
                            transform: `rotate(${Math.round(t / e * 360)}deg)`,
                            transitionDuration: this.session.votingSpeed - 100 + "ms"
                        }
                    },
                    nominee: function () {
                        return this.players[this.session.nomination[1]]
                    },
                    nomineeStyle: function () {
                        const e = this.players.length
                            , t = this.session.nomination[1]
                            , i = this.session.lockedVote
                            , o = 360 * (t + Math.min(i, e)) / e;
                        return {
                            transform: `rotate(${Math.round(o)}deg)`,
                            transitionDuration: this.session.votingSpeed - 100 + "ms"
                        }
                    },
                    player: function () {
                        return this.players.find(e => e.id === this.session.playerId)
                    },
                    currentVote: function () {
                        const e = this.players.findIndex(e => e.id === this.session.playerId);
                        return e >= 0 ? !!this.session.votes[e] : void 0
                    },
                    canVote: function () {
                        if (!this.player)
                            return !1;
                        if (this.player.isVoteless && "traveler" !== this.nominee.role.team)
                            return !1;
                        const e = this.session
                            , t = this.players.length
                            , i = this.players.indexOf(this.player)
                            , o = (i - 1 + t - e.nomination[1]) % t;
                        return o >= e.lockedVote - 1
                    },
                    voters: function () {
                        const e = this.session.nomination[1]
                            , t = Array(this.players.length).fill("").map((e, t) => this.session.votes[t] ? this.players[t].name : "")
                            , i = [...t.slice(e + 1), ...t.slice(0, e + 1)];
                        return (this.session.lockedVote ? i.slice(0, this.session.lockedVote - 1) : i).filter(e => !!e)
                    }
                },
                data() {
                    return {
                        voteTimer: null
                    }
                },
                methods: {
                    countdown() {
                        this.$store.commit("session/lockVote", 0),
                            this.$store.commit("session/setVoteInProgress", !0),
                            this.voteTimer = setInterval(() => {
                                this.start()
                            }
                                , 4e3)
                    },
                    start() {
                        this.$store.commit("session/lockVote", 1),
                            this.$store.commit("session/setVoteInProgress", !0),
                            clearInterval(this.voteTimer),
                            this.session.isVoteWatchingAllowed ? this.voteTimer = setInterval(() => {
                                this.$store.commit("session/lockVote"),
                                    this.session.lockedVote > this.players.length && (clearInterval(this.voteTimer),
                                        this.$store.commit("session/setVoteInProgress", !1))
                            }
                                , this.session.votingSpeed) : this.$store.commit("session/lockVote", this.players.length + 1)
                    },
                    pause() {
                        this.voteTimer ? (clearInterval(this.voteTimer),
                            this.voteTimer = null) : this.voteTimer = setInterval(() => {
                                this.$store.commit("session/lockVote"),
                                    this.session.lockedVote > this.players.length && (clearInterval(this.voteTimer),
                                        this.$store.commit("session/setVoteInProgress", !1))
                            }
                                , this.session.votingSpeed)
                    },
                    stop() {
                        clearInterval(this.voteTimer),
                            this.voteTimer = null,
                            this.$store.commit("session/setVoteInProgress", !1),
                            this.$store.commit("session/lockVote", 0)
                    },
                    finish() {
                        clearInterval(this.voteTimer),
                            this.$store.commit("session/addHistory", this.players),
                            this.$store.commit("session/nomination")
                    },
                    vote(e) {
                        if (!this.canVote)
                            return !1;
                        const t = this.players.findIndex(e => e.id === this.session.playerId);
                        t >= 0 && !!this.session.votes[t] !== e && this.$store.commit("session/voteSync", [t, e])
                    },
                    setVotingSpeed(e) {
                        const t = Math.round(this.session.votingSpeed + e);
                        t > 0 && this.$store.commit("session/setVotingSpeed", t)
                    },
                    setMarked() {
                        this.$store.commit("session/setMarkedPlayer", this.session.nomination[1])
                    },
                    removeMarked() {
                        this.$store.commit("session/setMarkedPlayer", -1)
                    }
                }
            }
            , Ve = De
            , Ee = (i("06f0"),
                Object(f["a"])(Ve, Ce, Pe, !1, null, "65b04cc4", null))
            , Ae = Ee.exports
            , je = function () {
                var e = this
                    , t = e.$createElement
                    , i = e._self._c || t;
                return i("div", {
                    attrs: {
                        id: "gradients"
                    }
                }, e._l(e.gradients, (function (e, t) {
                    return i("svg", {
                        key: t,
                        attrs: {
                            width: "0",
                            height: "0"
                        }
                    }, [i("linearGradient", {
                        attrs: {
                            id: e[0],
                            x1: "50%",
                            y1: "100%",
                            x2: "50%",
                            y2: "0%"
                        }
                    }, [i("stop", {
                        style: {
                            "stop-color": e[2],
                            "stop-opacity": 1
                        },
                        attrs: {
                            offset: "0%"
                        }
                    }), i("stop", {
                        style: {
                            "stop-color": e[1],
                            "stop-opacity": 1
                        },
                        attrs: {
                            offset: "100%"
                        }
                    })], 1)], 1)
                }
                )), 0)
            }
            , $e = []
            , Ge = {
                data() {
                    return {
                        gradients: [["demon", "#ce0100", "#000"], ["townsfolk", "#1f65ff", "#000"], ["default", "#4E4E4E", "#000"]]
                    }
                }
            }
            , He = Ge
            , Fe = (i("3f8f"),
                Object(f["a"])(He, je, $e, !1, null, "1e202a64", null))
            , We = Fe.exports
            , Le = function () {
                var e = this
                    , t = e.$createElement
                    , o = e._self._c || t;
                return e.modals.nightOrder && e.roles.size ? o("Modal", {
                    staticClass: "night-reference",
                    on: {
                        close: function (t) {
                            return e.toggleModal("nightOrder")
                        }
                    }
                }, [o("font-awesome-icon", {
                    staticClass: "toggle",
                    attrs: {
                        icon: "address-card",
                        title: "Show Character Reference"
                    },
                    on: {
                        click: function (t) {
                            return e.toggleModal("reference")
                        }
                    }
                }), o("h3", [e._v(" Night Order "), o("font-awesome-icon", {
                    attrs: {
                        icon: "cloud-moon"
                    }
                }), e._v(" " + e._s(e.edition.name || "Custom Script") + " ")], 1), o("div", {
                    staticClass: "night"
                }, [o("ul", {
                    staticClass: "first"
                }, [o("li", {
                    staticClass: "headline"
                }, [e._v("First Night")]), e._l(e.rolesFirstNight, (function (t) {
                    return o("li", {
                        key: t.name,
                        class: [t.team]
                    }, [o("span", {
                        staticClass: "name"
                    }, [e._v(" " + e._s(t.name) + " "), t.players.length ? o("span", {
                        staticClass: "player"
                    }, [o("br"), e._l(t.players, (function (i, s) {
                        return o("small", {
                            key: s,
                            class: {
                                dead: i.isDead
                            }
                        }, [e._v(e._s(i.name + (t.players.length > s + 1 ? "," : "")))])
                    }
                    ))], 2) : e._e()]), t.id ? o("span", {
                        staticClass: "icon",
                        style: {
                            backgroundImage: "url(" + (t.image && e.grimoire.isImageOptIn ? t.image : i("61b0")("./" + (t.imageAlt || t.id) + ".png")) + ")"
                        }
                    }) : e._e(), t.firstNightReminder ? o("span", {
                        staticClass: "reminder"
                    }, [e._v(" " + e._s(t.firstNightReminder) + " ")]) : e._e()])
                }
                ))], 2), o("ul", {
                    staticClass: "other"
                }, [o("li", {
                    staticClass: "headline"
                }, [e._v("Other Nights")]), e._l(e.rolesOtherNight, (function (t) {
                    return o("li", {
                        key: t.name,
                        class: [t.team]
                    }, [t.id ? o("span", {
                        staticClass: "icon",
                        style: {
                            backgroundImage: "url(" + (t.image && e.grimoire.isImageOptIn ? t.image : i("61b0")("./" + (t.imageAlt || t.id) + ".png")) + ")"
                        }
                    }) : e._e(), o("span", {
                        staticClass: "name"
                    }, [e._v(" " + e._s(t.name) + " "), t.players.length ? o("span", {
                        staticClass: "player"
                    }, [o("br"), e._l(t.players, (function (i, s) {
                        return o("small", {
                            key: s,
                            class: {
                                dead: i.isDead
                            }
                        }, [e._v(e._s(i.name + (t.players.length > s + 1 ? "," : "")))])
                    }
                    ))], 2) : e._e()]), t.otherNightReminder ? o("span", {
                        staticClass: "reminder"
                    }, [e._v(" " + e._s(t.otherNightReminder) + " ")]) : e._e()])
                }
                ))], 2)])], 1) : e._e()
            }
            , ze = []
            , Be = {
                components: {
                    Modal: O
                },
                computed: {
                    rolesFirstNight: function () {
                        const e = [];
                        return this.players.length > 6 && e.push({
                            id: "evil",
                            name: "Minion info",
                            firstNight: 5,
                            team: "minion",
                            players: this.players.filter(e => "minion" === e.role.team),
                            firstNightReminder: "• If more than one Minion, they all make eye contact with each other. • Show the “This is the Demon” card. Point to the Demon."
                        }, {
                            id: "evil",
                            name: "Demon info & bluffs",
                            firstNight: 8,
                            team: "demon",
                            players: this.players.filter(e => "demon" === e.role.team),
                            firstNightReminder: "• Show the “These are your minions” card. Point to each Minion. • Show the “These characters are not in play” card. Show 3 character tokens of good characters not in play."
                        }),
                            this.roles.forEach(t => {
                                const i = this.players.filter(e => e.role.id === t.id);
                                t.firstNight && ("traveler" !== t.team || i.length) && e.push(Object.assign({
                                    players: i
                                }, t))
                            }
                            ),
                            this.fabled.filter(({ firstNight: e }) => e).forEach(t => {
                                e.push(Object.assign({
                                    players: []
                                }, t))
                            }
                            ),
                            e.sort((e, t) => e.firstNight - t.firstNight),
                            e
                    },
                    rolesOtherNight: function () {
                        const e = [];
                        return this.roles.forEach(t => {
                            const i = this.players.filter(e => e.role.id === t.id);
                            t.otherNight && ("traveler" !== t.team || i.length) && e.push(Object.assign({
                                players: i
                            }, t))
                        }
                        ),
                            this.fabled.filter(({ otherNight: e }) => e).forEach(t => {
                                e.push(Object.assign({
                                    players: []
                                }, t))
                            }
                            ),
                            e.sort((e, t) => e.otherNight - t.otherNight),
                            e
                    },
                    ...Object(n["d"])(["roles", "modals", "edition", "grimoire"]),
                    ...Object(n["d"])("players", ["players", "fabled"])
                },
                methods: {
                    ...Object(n["c"])(["toggleModal"])
                }
            }
            , Ye = Be
            , Je = (i("b6d8"),
                Object(f["a"])(Ye, Le, ze, !1, null, "ec47598c", null))
            , Ue = Je.exports
            , qe = function () {
                var e = this
                    , t = e.$createElement
                    , i = e._self._c || t;
                return e.modals.fabled && e.fabled.length ? i("Modal", {
                    on: {
                        close: function (t) {
                            return e.toggleModal("fabled")
                        }
                    }
                }, [i("h3", [e._v(" Choose a fabled character to add to the game ")]), i("ul", {
                    staticClass: "tokens"
                }, e._l(e.fabled, (function (t) {
                    return i("li", {
                        key: t.id,
                        on: {
                            click: function (i) {
                                return e.setFabled(t)
                            }
                        }
                    }, [i("Token", {
                        attrs: {
                            role: t
                        }
                    })], 1)
                }
                )), 0)]) : e._e()
            }
            , Ke = []
            , Ze = {
                components: {
                    Token: b,
                    Modal: O
                },
                computed: {
                    ...Object(n["d"])(["modals", "fabled", "grimoire"]),
                    fabled() {
                        const e = [];
                        return this.$store.state.fabled.forEach(t => {
                            this.$store.state.players.fabled.some(e => e.id === t.id) || e.push(t)
                        }
                        ),
                            e
                    }
                },
                methods: {
                    setFabled(e) {
                        this.$store.commit("players/setFabled", {
                            fabled: e
                        }),
                            this.$store.commit("toggleModal", "fabled")
                    },
                    ...Object(n["c"])(["toggleModal"])
                }
            }
            , Qe = Ze
            , Xe = (i("ff40"),
                Object(f["a"])(Qe, qe, Ke, !1, null, "d6b399a0", null))
            , et = Xe.exports
            , tt = function () {
                var e = this
                    , t = e.$createElement
                    , i = e._self._c || t;
                return !e.modals.voteHistory || !e.session.voteHistory && e.session.isSpectator ? e._e() : i("Modal", {
                    staticClass: "vote-history",
                    on: {
                        close: function (t) {
                            return e.toggleModal("voteHistory")
                        }
                    }
                }, [e.session.isSpectator ? i("font-awesome-icon", {
                    staticClass: "clear",
                    attrs: {
                        icon: "trash-alt",
                        title: "Clear vote history"
                    },
                    on: {
                        click: e.clearVoteHistory
                    }
                }) : e._e(), i("h3", [e._v("Vote history")]), e.session.isSpectator ? e._e() : [i("div", {
                    staticClass: "options"
                }, [i("div", {
                    staticClass: "option",
                    on: {
                        click: e.setRecordVoteHistory
                    }
                }, [i("font-awesome-icon", {
                    attrs: {
                        icon: ["fas", e.session.isVoteHistoryAllowed ? "check-square" : "square"]
                    }
                }), e._v(" Accessible to players ")], 1), i("div", {
                    staticClass: "option",
                    on: {
                        click: e.setVoteWatching
                    }
                }, [i("font-awesome-icon", {
                    attrs: {
                        icon: ["fas", e.session.isVoteWatchingAllowed ? "check-square" : "square"]
                    }
                }), e._v(" Vote Watching ")], 1), i("div", {
                    staticClass: "option",
                    on: {
                        click: e.clearVoteHistory
                    }
                }, [i("font-awesome-icon", {
                    attrs: {
                        icon: "trash-alt"
                    }
                }), e._v(" Clear for everyone ")], 1)])], i("table", [i("thead", [i("tr", [i("td", [e._v("Time")]), i("td", [e._v("Nominator")]), i("td", [e._v("Nominee")]), i("td", [e._v("Type")]), i("td", [e._v("Votes")]), i("td", [e._v("Majority")]), i("td", [i("font-awesome-icon", {
                    attrs: {
                        icon: "user-friends"
                    }
                }), e._v(" Voters ")], 1)])]), i("tbody", e._l(e.session.voteHistory, (function (t, o) {
                    return i("tr", {
                        key: o
                    }, [i("td", [e._v(" " + e._s(t.timestamp.getHours().toString().padStart(2, "0")) + ":" + e._s(t.timestamp.getMinutes().toString().padStart(2, "0")) + " ")]), i("td", [e._v(e._s(t.nominator))]), i("td", [e._v(e._s(t.nominee))]), i("td", [e._v(e._s(t.type))]), i("td", [e._v(" " + e._s(t.votes.length) + " "), i("font-awesome-icon", {
                        attrs: {
                            icon: "hand-paper"
                        }
                    })], 1), i("td", [e._v(" " + e._s(t.majority) + " "), i("font-awesome-icon", {
                        attrs: {
                            icon: ["fas", t.votes.length >= t.majority ? "check-square" : "square"]
                        }
                    })], 1), i("td", [e._v(" " + e._s(t.votes.join(", ")) + " ")])])
                }
                )), 0)])], 2)
            }
            , it = []
            , ot = {
                components: {
                    Modal: O
                },
                computed: {
                    ...Object(n["d"])(["session", "modals"])
                },
                methods: {
                    clearVoteHistory() {
                        this.$store.commit("session/clearVoteHistory")
                    },
                    setRecordVoteHistory() {
                        this.$store.commit("session/setVoteHistoryAllowed", !this.session.isVoteHistoryAllowed),
                            this.session.isVoteHistoryAllowed && this.$store.commit("session/setVoteWatchingAllowed", !0)
                    },
                    setVoteWatching() {
                        this.$store.commit("session/setVoteWatchingAllowed", !this.session.isVoteWatchingAllowed),
                            this.session.isVoteWatchingAllowed || this.$store.commit("session/setVoteHistoryAllowed", !1)
                    },
                    ...Object(n["c"])(["toggleModal"])
                }
            }
            , st = ot
            , at = (i("18ef"),
                Object(f["a"])(st, tt, it, !1, null, "b4f11182", null))
            , nt = at.exports
            , rt = function () {
                var e = this
                    , t = e.$createElement
                    , i = e._self._c || t;
                return e.modals.gameState ? i("Modal", {
                    staticClass: "game-state",
                    on: {
                        close: function (t) {
                            return e.toggleModal("gameState")
                        }
                    }
                }, [i("h3", [e._v("Current Game State")]), i("textarea", {
                    domProps: {
                        value: e.gamestate
                    },
                    on: {
                        input: function (t) {
                            t.stopPropagation(),
                                e.input = t.target.value
                        },
                        click: function (e) {
                            return e.target.select()
                        },
                        keyup: function (e) {
                            e.stopPropagation()
                        }
                    }
                }), i("div", {
                    staticClass: "button-group"
                }, [i("div", {
                    staticClass: "button townsfolk",
                    on: {
                        click: e.copy
                    }
                }, [i("font-awesome-icon", {
                    attrs: {
                        icon: "copy"
                    }
                }), e._v(" Copy JSON ")], 1), e.session.isSpectator ? e._e() : i("div", {
                    staticClass: "button demon",
                    on: {
                        click: e.load
                    }
                }, [i("font-awesome-icon", {
                    attrs: {
                        icon: "cog"
                    }
                }), e._v(" Load State ")], 1)])]) : e._e()
            }
            , lt = []
            , ht = {
                components: {
                    Modal: O
                },
                computed: {
                    gamestate: function () {
                        return JSON.stringify({
                            bluffs: this.players.bluffs.map(({ id: e }) => e),
                            edition: this.edition.isOfficial ? {
                                id: this.edition.id
                            } : this.edition,
                            roles: this.edition.isOfficial ? "" : this.$store.getters.customRolesStripped,
                            fabled: this.players.fabled.map(e => e.isCustom ? e : {
                                id: e.id
                            }),
                            players: this.players.players.map(e => ({
                                ...e,
                                role: e.role.id || {}
                            }))
                        })
                    },
                    ...Object(n["d"])(["modals", "players", "edition", "roles", "session"])
                },
                data() {
                    return {
                        input: ""
                    }
                },
                methods: {
                    copy: function () {
                        navigator.clipboard.writeText(this.input || this.gamestate)
                    },
                    load: function () {
                        if (!this.session.isSpectator)
                            try {
                                const e = JSON.parse(this.input || this.gamestate)
                                    , { bluffs: t, edition: i, roles: o, fabled: s, players: a } = e;
                                o && this.$store.commit("setCustomRoles", o),
                                    i && this.$store.commit("setEdition", i),
                                    t.length && t.forEach((e, t) => {
                                        this.$store.commit("players/setBluff", {
                                            index: t,
                                            role: this.$store.state.roles.get(e) || {}
                                        })
                                    }
                                    ),
                                    s && this.$store.commit("players/setFabled", {
                                        fabled: s.map(e => this.$store.state.fabled.get(e) || this.$store.state.fabled.get(e.id) || e)
                                    }),
                                    a && this.$store.commit("players/set", a.map(e => ({
                                        ...e,
                                        role: this.$store.state.roles.get(e.role) || this.$store.getters.rolesJSONbyId.get(e.role) || {}
                                    }))),
                                    this.toggleModal("gameState")
                            } catch (e) {
                                alert("Unable to parse JSON: " + e)
                            }
                    },
                    ...Object(n["c"])(["toggleModal"])
                }
            }
            , dt = ht
            , ct = (i("eb35"),
                Object(f["a"])(dt, rt, lt, !1, null, "7971ea6f", null))
            , mt = ct.exports
            , pt = {
                components: {
                    GameStateModal: mt,
                    VoteHistoryModal: nt,
                    FabledModal: et,
                    NightOrderModal: Ue,
                    Vote: Ae,
                    ReferenceModal: Oe,
                    Intro: Se,
                    TownInfo: Q,
                    TownSquare: B,
                    Menu: se,
                    EditionModal: be,
                    RolesModal: ce,
                    Gradients: We
                },
                computed: {
                    ...Object(n["d"])(["grimoire", "session"]),
                    ...Object(n["d"])("players", ["players"])
                },
                data() {
                    return {
                        version: r["a"]
                    }
                },
                methods: {
                    keyup({ key: e, ctrlKey: t, metaKey: i }) {
                        if (!t && !i)
                            switch (e.toLocaleLowerCase()) {
                                case "g":
                                    this.$store.commit("toggleGrimoire");
                                    break;
                                case "a":
                                    this.$refs.menu.addPlayer();
                                    break;
                                case "h":
                                    this.$refs.menu.hostSession();
                                    break;
                                case "j":
                                    this.$refs.menu.joinSession();
                                    break;
                                case "r":
                                    this.$store.commit("toggleModal", "reference");
                                    break;
                                case "n":
                                    this.$store.commit("toggleModal", "nightOrder");
                                    break;
                                case "e":
                                    if (this.session.isSpectator)
                                        return;
                                    this.$store.commit("toggleModal", "edition");
                                    break;
                                case "c":
                                    if (this.session.isSpectator)
                                        return;
                                    this.$store.commit("toggleModal", "roles");
                                    break;
                                case "v":
                                    !this.session.voteHistory.length && this.session.isSpectator || this.$store.commit("toggleModal", "voteHistory");
                                    break;
                                case "s":
                                    if (this.session.isSpectator)
                                        return;
                                    this.$refs.menu.toggleNight();
                                    break;
                                case "escape":
                                    this.$store.commit("toggleModal")
                            }
                    }
                }
            }
            , gt = pt
            , ut = (i("5c0b"),
                Object(f["a"])(gt, s, a, !1, null, null, null))
            , ft = ut.exports
            , yt = i("dfb1")
            , bt = i.n(yt);
        class vt {
            constructor(e) {
                this._wss = "wss://clocktower.live:8001/",
                    this._socket = null,
                    this._isSpectator = !0,
                    this._gamestate = [],
                    this._store = e,
                    this._pingInterval = 3e4,
                    this._pingTimer = null,
                    this._reconnectTimer = null,
                    this._players = {},
                    this._pings = {},
                    this._store.state.session.sessionId && this.connect(this._store.state.session.sessionId)
            }
            _open(e) {
                this.disconnect(),
                    this._socket = new WebSocket(this._wss + e + "/" + (this._isSpectator ? this._store.state.session.playerId : "host")),
                    this._socket.addEventListener("message", this._handleMessage.bind(this)),
                    this._socket.onopen = this._onOpen.bind(this),
                    this._socket.onclose = t => {
                        this._socket = null,
                            clearInterval(this._pingTimer),
                            this._pingTimer = null,
                            1e3 !== t.code ? (this._store.commit("session/setReconnecting", !0),
                                this._reconnectTimer = setTimeout(() => this.connect(e), 3e3)) : (this._store.commit("session/setSessionId", ""),
                                    t.reason && alert(t.reason))
                    }
            }
            _send(e, t) {
                this._socket && 1 === this._socket.readyState && this._socket.send(JSON.stringify([e, t]))
            }
            _sendDirect(e, t, i) {
                e ? this._send("direct", {
                    [e]: [t, i]
                }) : this._send(t, i)
            }
            _onOpen() {
                this._isSpectator ? this._sendDirect("host", "getGamestate", this._store.state.session.playerId) : this.sendGamestate(),
                    this._ping()
            }
            _ping() {
                this._handlePing(),
                    this._send("ping", [this._isSpectator ? this._store.state.session.playerId : Object.keys(this._players).length, "latency"]),
                    clearTimeout(this._pingTimer),
                    this._pingTimer = setTimeout(this._ping.bind(this), this._pingInterval)
            }
            _handleMessage({ data: e }) {
                let t, i;
                try {
                    [t, i] = JSON.parse(e)
                } catch (o) {
                    console.log("unsupported socket message", e)
                }
                switch (t) {
                    case "getGamestate":
                        this.sendGamestate(i);
                        break;
                    case "edition":
                        this._updateEdition(i);
                        break;
                    case "fabled":
                        this._updateFabled(i);
                        break;
                    case "gs":
                        this._updateGamestate(i);
                        break;
                    case "player":
                        this._updatePlayer(i);
                        break;
                    case "claim":
                        this._updateSeat(i);
                        break;
                    case "ping":
                        this._handlePing(i);
                        break;
                    case "nomination":
                        if (!this._isSpectator)
                            return;
                        i || this._store.commit("session/addHistory", this._store.state.players.players),
                            this._store.commit("session/nomination", {
                                nomination: i
                            });
                        break;
                    case "swap":
                        if (!this._isSpectator)
                            return;
                        this._store.commit("players/swap", i);
                        break;
                    case "move":
                        if (!this._isSpectator)
                            return;
                        this._store.commit("players/move", i);
                        break;
                    case "remove":
                        if (!this._isSpectator)
                            return;
                        this._store.commit("players/remove", i);
                        break;
                    case "marked":
                        if (!this._isSpectator)
                            return;
                        this._store.commit("session/setMarkedPlayer", i);
                        break;
                    case "isNight":
                        if (!this._isSpectator)
                            return;
                        this._store.commit("toggleNight", i);
                        break;
                    case "isVoteHistoryAllowed":
                        if (!this._isSpectator)
                            return;
                        this._store.commit("session/setVoteHistoryAllowed", i),
                            this._store.commit("session/clearVoteHistory");
                        break;
                    case "isVoteWatchingAllowed":
                        if (!this._isSpectator)
                            return;
                        this._store.commit("session/setVoteWatchingAllowed", i);
                        break;
                    case "votingSpeed":
                        if (!this._isSpectator)
                            return;
                        this._store.commit("session/setVotingSpeed", i);
                        break;
                    case "clearVoteHistory":
                        if (!this._isSpectator)
                            return;
                        this._store.commit("session/clearVoteHistory");
                        break;
                    case "isVoteInProgress":
                        if (!this._isSpectator)
                            return;
                        this._store.commit("session/setVoteInProgress", i);
                        break;
                    case "vote":
                        this._handleVote(i);
                        break;
                    case "lock":
                        this._handleLock(i);
                        break;
                    case "bye":
                        this._handleBye(i);
                        break;
                    case "pronouns":
                        this._updatePlayerPronouns(i);
                        break
                }
            }
            connect(e) {
                this._store.state.session.playerId || this._store.commit("session/setPlayerId", Math.random().toString(36).substr(2)),
                    this._pings = {},
                    this._store.commit("session/setPlayerCount", 0),
                    this._store.commit("session/setPing", 0),
                    this._isSpectator = this._store.state.session.isSpectator,
                    this._open(e)
            }
            disconnect() {
                this._pings = {},
                    this._store.commit("session/setPlayerCount", 0),
                    this._store.commit("session/setPing", 0),
                    this._store.commit("session/setReconnecting", !1),
                    clearTimeout(this._reconnectTimer),
                    this._socket && (this._isSpectator && this._sendDirect("host", "bye", this._store.state.session.playerId),
                        this._socket.close(1e3),
                        this._socket = null)
            }
            sendGamestate(e = "", t = !1) {
                if (!this._isSpectator)
                    if (this._gamestate = this._store.state.players.players.map(e => ({
                        name: e.name,
                        id: e.id,
                        isDead: e.isDead,
                        isVoteless: e.isVoteless,
                        pronouns: e.pronouns,
                        ...e.role && "traveler" === e.role.team ? {
                            roleId: e.role.id
                        } : {}
                    })),
                        t)
                        this._sendDirect(e, "gs", {
                            gamestate: this._gamestate,
                            isLightweight: t
                        });
                    else {
                        const { session: t, grimoire: i } = this._store.state
                            , { fabled: o } = this._store.state.players;
                        this.sendEdition(e),
                            this._sendDirect(e, "gs", {
                                gamestate: this._gamestate,
                                isNight: i.isNight,
                                isVoteHistoryAllowed: t.isVoteHistoryAllowed,
                                isVoteWatchingAllowed: t.isVoteWatchingAllowed,
                                nomination: t.nomination,
                                votingSpeed: t.votingSpeed,
                                lockedVote: t.lockedVote,
                                isVoteInProgress: t.isVoteInProgress,
                                markedPlayer: t.markedPlayer,
                                fabled: o.map(e => e.isCustom ? e : {
                                    id: e.id
                                }),
                                ...t.nomination ? {
                                    votes: t.votes
                                } : {}
                            })
                    }
            }
            _updateGamestate(e) {
                if (!this._isSpectator)
                    return;
                const { gamestate: t, isLightweight: i, isNight: o, isVoteHistoryAllowed: s, isVoteWatchingAllowed: a, nomination: n, votingSpeed: r, votes: l, lockedVote: h, isVoteInProgress: d, markedPlayer: c, fabled: m } = e
                    , p = this._store.state.players.players;
                if (p.length < t.length)
                    for (let g = p.length; g < t.length; g++)
                        this._store.commit("players/add", t[g].name);
                else if (p.length > t.length)
                    for (let g = p.length; g > t.length; g--)
                        this._store.commit("players/remove", g - 1);
                t.forEach((e, t) => {
                    const i = p[t]
                        , { roleId: o } = e;
                    if (["name", "id", "isDead", "isVoteless", "pronouns"].forEach(t => {
                        const o = e[t];
                        i[t] !== o && this._store.commit("players/update", {
                            player: i,
                            property: t,
                            value: o
                        })
                    }
                    ),
                        o && i.role.id !== o) {
                        const e = this._store.state.roles.get(o) || this._store.getters.rolesJSONbyId.get(o);
                        e && this._store.commit("players/update", {
                            player: i,
                            property: "role",
                            value: e
                        })
                    } else
                        o || "traveler" !== i.role.team || this._store.commit("players/update", {
                            player: i,
                            property: "role",
                            value: {}
                        })
                }
                ),
                    i || (this._store.commit("toggleNight", !!o),
                        this._store.commit("session/setVoteHistoryAllowed", s),
                        this._store.commit("session/setVoteWatchingAllowed", a),
                        this._store.commit("session/nomination", {
                            nomination: n,
                            votes: l,
                            votingSpeed: r,
                            lockedVote: h,
                            isVoteInProgress: d
                        }),
                        this._store.commit("session/setMarkedPlayer", c),
                        this._store.commit("players/setFabled", {
                            fabled: m.map(e => this._store.state.fabled.get(e.id) || e)
                        }))
            }
            sendEdition(e = "") {
                if (this._isSpectator)
                    return;
                const { edition: t } = this._store.state;
                let i;
                t.isOfficial || (i = this._store.getters.customRolesStripped),
                    this._sendDirect(e, "edition", {
                        edition: t.isOfficial ? {
                            id: t.id
                        } : t,
                        ...i ? {
                            roles: i
                        } : {}
                    })
            }
            _updateEdition({ edition: e, roles: t }) {
                if (this._isSpectator && (this._store.commit("setEdition", e),
                    t && (this._store.commit("setCustomRoles", t),
                        this._store.state.roles.size !== t.length))) {
                    const e = [];
                    t.forEach(({ id: t }) => {
                        this._store.state.roles.get(t) || e.push(t)
                    }
                    ),
                        alert("This session contains custom characters that can't be found. Please load them before joining! Missing roles: " + e.join(", ")),
                        this.disconnect(),
                        this._store.commit("toggleModal", "edition")
                }
            }
            sendFabled() {
                if (this._isSpectator)
                    return;
                const { fabled: e } = this._store.state.players;
                this._send("fabled", e.map(e => e.isCustom ? e : {
                    id: e.id
                }))
            }
            _updateFabled(e) {
                this._isSpectator && this._store.commit("players/setFabled", {
                    fabled: e.map(e => this._store.state.fabled.get(e.id) || e)
                })
            }
            sendPlayer({ player: e, property: t, value: i }) {
                if (this._isSpectator || "reminders" === t)
                    return;
                const o = this._store.state.players.players.indexOf(e);
                "role" === t ? i.team && "traveler" === i.team ? (this._gamestate[o].roleId = i.id,
                    this._send("player", {
                        index: o,
                        property: t,
                        value: i.id
                    })) : this._gamestate[o].roleId && (delete this._gamestate[o].roleId,
                        this._send("player", {
                            index: o,
                            property: t,
                            value: ""
                        })) : this._send("player", {
                            index: o,
                            property: t,
                            value: i
                        })
            }
            _updatePlayer({ index: e, property: t, value: i }) {
                if (!this._isSpectator)
                    return;
                const o = this._store.state.players.players[e];
                if (o)
                    if ("role" === t)
                        if (i || "traveler" !== o.role.team) {
                            const e = this._store.state.roles.get(i) || this._store.getters.rolesJSONbyId.get(i) || {};
                            this._store.commit("players/update", {
                                player: o,
                                property: "role",
                                value: e
                            })
                        } else
                            this._store.commit("players/update", {
                                player: o,
                                property: "role",
                                value: {}
                            });
                    else
                        this._store.commit("players/update", {
                            player: o,
                            property: t,
                            value: i
                        })
            }
            sendPlayerPronouns({ player: e, value: t, isFromSockets: i }) {
                if (i || this._isSpectator && this._store.state.session.playerId !== e.id)
                    return;
                const o = this._store.state.players.players.indexOf(e);
                this._send("pronouns", [o, t])
            }
            _updatePlayerPronouns([e, t]) {
                const i = this._store.state.players.players[e];
                this._store.commit("players/update", {
                    player: i,
                    property: "pronouns",
                    value: t,
                    isFromSockets: !0
                })
            }
            _handlePing([e = 0, t] = []) {
                const i = (new Date).getTime();
                if (this._isSpectator)
                    t && this._store.commit("session/setPing", parseInt(t, 10));
                else {
                    for (let e in this._players)
                        i - this._players[e] > 2 * this._pingInterval && (delete this._players[e],
                            delete this._pings[e]);
                    if (this._store.state.players.players.forEach(e => {
                        e.id && !this._players[e.id] && this._store.commit("players/update", {
                            player: e,
                            property: "id",
                            value: ""
                        })
                    }
                    ),
                        e) {
                        this._players[e] = i;
                        const o = parseInt(t, 10);
                        if (o && o > 0 && o < 3e4) {
                            this._pings[e] = o;
                            const t = Object.values(this._pings);
                            this._store.commit("session/setPing", Math.round(t.reduce((e, t) => e + t, 0) / t.length))
                        }
                    }
                }
                this._isSpectator && !e || this._store.commit("session/setPlayerCount", this._isSpectator ? e : Object.keys(this._players).length)
            }
            _handleBye(e) {
                this._isSpectator || (delete this._players[e],
                    this._store.commit("session/setPlayerCount", Object.keys(this._players).length))
            }
            claimSeat(e) {
                if (!this._isSpectator)
                    return;
                const t = this._store.state.players.players;
                t.length > e && (e < 0 || !t[e].id) && this._send("claim", [e, this._store.state.session.playerId])
            }
            _updateSeat([e, t]) {
                if (this._isSpectator)
                    return;
                const i = "id"
                    , o = this._store.state.players.players
                    , s = o.findIndex(({ id: e }) => e === t);
                if (s >= 0 && s !== e && this._store.commit("players/update", {
                    player: o[s],
                    property: i,
                    value: ""
                }),
                    e >= 0) {
                    const s = o[e];
                    if (!s)
                        return;
                    this._store.commit("players/update", {
                        player: s,
                        property: i,
                        value: t
                    })
                }
                this._handlePing([!0, t, 0])
            }
            distributeRoles() {
                if (this._isSpectator)
                    return;
                const e = {};
                this._store.state.players.players.forEach((t, i) => {
                    t.id && t.role && (e[t.id] = ["player", {
                        index: i,
                        property: "role",
                        value: t.role.id
                    }])
                }
                ),
                    Object.keys(e).length && this._send("direct", e)
            }
            nomination(e) {
                if (this._isSpectator)
                    return;
                const t = e && e.nomination || e
                    , i = this._store.state.players.players;
                (!t || i.length > t[0] && i.length > t[1]) && (this.setVotingSpeed(this._store.state.session.votingSpeed),
                    this._send("nomination", t))
            }
            setVoteInProgress() {
                this._isSpectator || this._send("isVoteInProgress", this._store.state.session.isVoteInProgress)
            }
            setIsNight() {
                this._isSpectator || this._send("isNight", this._store.state.grimoire.isNight)
            }
            setVoteHistoryAllowed() {
                this._isSpectator || this._send("isVoteHistoryAllowed", this._store.state.session.isVoteHistoryAllowed)
            }
            setVoteWatchingAllowed() {
                this._isSpectator || this._send("isVoteWatchingAllowed", this._store.state.session.isVoteWatchingAllowed)
            }
            setVotingSpeed(e) {
                this._isSpectator || e && this._send("votingSpeed", e)
            }
            setMarked(e) {
                this._isSpectator || this._send("marked", e)
            }
            clearVoteHistory() {
                this._isSpectator || this._send("clearVoteHistory")
            }
            vote([e]) {
                const t = this._store.state.players.players[e];
                this._store.state.session.playerId !== t.id && this._isSpectator || this._send("vote", [e, this._store.state.session.votes[e], !this._isSpectator])
            }
            _handleVote([e, t, i]) {
                const { session: o, players: s } = this._store.state
                    , a = s.players.length
                    , n = (e - 1 + a - o.nomination[1]) % a;
                (i || n >= o.lockedVote - 1) && this._store.commit("session/vote", [e, t])
            }
            lockVote() {
                if (this._isSpectator)
                    return;
                const { lockedVote: e, votes: t, nomination: i } = this._store.state.session
                    , { players: o } = this._store.state.players
                    , s = (i[1] + e - 1) % o.length;
                this._send("lock", [this._store.state.session.lockedVote, t[s]])
            }
            _handleLock([e, t]) {
                if (this._isSpectator && (this._store.commit("session/lockVote", e),
                    e > 1)) {
                    const { lockedVote: e, nomination: i } = this._store.state.session
                        , { players: o } = this._store.state.players
                        , s = (i[1] + e - 1) % o.length;
                    this._store.state.session.votes[s] !== t && this._store.commit("session/vote", [s, t])
                }
            }
            swapPlayer(e) {
                this._isSpectator || this._send("swap", e)
            }
            movePlayer(e) {
                this._isSpectator || this._send("move", e)
            }
            removePlayer(e) {
                this._isSpectator || this._send("remove", e)
            }
        }
        var kt = e => {
            const t = new vt(e);
            e.subscribe(({ type: e, payload: i }, o) => {
                switch (e) {
                    case "session/setSessionId":
                        o.session.sessionId ? t.connect(o.session.sessionId) : (window.location.hash = "",
                            t.disconnect());
                        break;
                    case "session/claimSeat":
                        t.claimSeat(i);
                        break;
                    case "session/distributeRoles":
                        i && t.distributeRoles();
                        break;
                    case "session/nomination":
                    case "session/setNomination":
                        t.nomination(i);
                        break;
                    case "session/setVoteInProgress":
                        t.setVoteInProgress(i);
                        break;
                    case "session/voteSync":
                        t.vote(i);
                        break;
                    case "session/lockVote":
                        t.lockVote();
                        break;
                    case "session/setVotingSpeed":
                        t.setVotingSpeed(i);
                        break;
                    case "session/clearVoteHistory":
                        t.clearVoteHistory();
                        break;
                    case "session/setVoteHistoryAllowed":
                        t.setVoteHistoryAllowed();
                        break;
                    case "session/setVoteWatchingAllowed":
                        t.setVoteWatchingAllowed();
                        break;
                    case "toggleNight":
                        t.setIsNight();
                        break;
                    case "setEdition":
                        t.sendEdition();
                        break;
                    case "players/setFabled":
                        t.sendFabled();
                        break;
                    case "session/setMarkedPlayer":
                        t.setMarked(i);
                        break;
                    case "players/swap":
                        t.swapPlayer(i);
                        break;
                    case "players/move":
                        t.movePlayer(i);
                        break;
                    case "players/remove":
                        t.removePlayer(i);
                        break;
                    case "players/set":
                    case "players/clear":
                    case "players/add":
                        t.sendGamestate("", !0);
                        break;
                    case "players/update":
                        "pronouns" === i.property ? t.sendPlayerPronouns(i) : t.sendPlayer(i);
                        break
                }
            }
            );
            const i = window.location.hash.substr(1);
            i && (e.commit("session/setSpectator", !0),
                e.commit("session/setSessionId", i),
                e.commit("toggleGrimoire", !1))
        }
            ;
        const wt = {
            name: "",
            id: "",
            role: {},
            reminders: [],
            isVoteless: !1,
            isDead: !1,
            pronouns: ""
        }
            , Nt = () => ({
                players: [],
                fabled: [],
                bluffs: []
            })
            , _t = {
                alive({ players: e }) {
                    return e.filter(e => !e.isDead).length
                },
                nonTravelers({ players: e }) {
                    const t = e.filter(e => "traveler" !== e.role.team);
                    return Math.min(t.length, 15)
                },
                nightOrder({ players: e, fabled: t }) {
                    const i = [0]
                        , o = [0];
                    e.forEach(({ role: e }) => {
                        e.firstNight && !i.includes(e.firstNight) && i.push(e.firstNight),
                            e.otherNight && !o.includes(e.otherNight) && o.push(e.otherNight)
                    }
                    ),
                        t.forEach(e => {
                            e.firstNight && !i.includes(e.firstNight) && i.push(e.firstNight),
                                e.otherNight && !o.includes(e.otherNight) && o.push(e.otherNight)
                        }
                        ),
                        i.sort((e, t) => e - t),
                        o.sort((e, t) => e - t);
                    const s = new Map;
                    return e.forEach(e => {
                        const t = Math.max(i.indexOf(e.role.firstNight), 0)
                            , a = Math.max(o.indexOf(e.role.otherNight), 0);
                        s.set(e, {
                            first: t,
                            other: a
                        })
                    }
                    ),
                        t.forEach(e => {
                            const t = Math.max(i.indexOf(e.firstNight), 0)
                                , a = Math.max(o.indexOf(e.otherNight), 0);
                            s.set(e, {
                                first: t,
                                other: a
                            })
                        }
                        ),
                        s
                }
            }
            , St = {
                randomize({ state: e, commit: t }) {
                    const i = e.players.map(e => [Math.random(), e]).sort((e, t) => e[0] - t[0]).map(e => e[1]);
                    t("set", i)
                },
                clearRoles({ state: e, commit: t, rootState: i }) {
                    let o;
                    i.session.isSpectator ? o = e.players.map(e => ("traveler" !== e.role.team && (e.role = {}),
                        e.reminders = [],
                        e)) : (o = e.players.map(({ name: e, id: t, pronouns: i }) => ({
                            ...wt,
                            name: e,
                            id: t,
                            pronouns: i
                        })),
                            t("setFabled", {
                                fabled: []
                            })),
                        t("set", o),
                        t("setBluff")
                }
            }
            , Rt = {
                clear(e) {
                    e.players = [],
                        e.bluffs = [],
                        e.fabled = []
                },
                set(e, t = []) {
                    e.players = t
                },
                update(e, { player: t, property: i, value: o }) {
                    const s = e.players.indexOf(t);
                    s >= 0 && (e.players[s][i] = o)
                },
                add(e, t) {
                    e.players.push({
                        ...wt,
                        name: t
                    })
                },
                remove(e, t) {
                    e.players.splice(t, 1)
                },
                swap(e, [t, i]) {
                    [e.players[t], e.players[i]] = [e.players[i], e.players[t]],
                        e.players.splice(0, 0)
                },
                move(e, [t, i]) {
                    e.players.splice(i, 0, e.players.splice(t, 1)[0])
                },
                setBluff(e, { index: t, role: i } = {}) {
                    void 0 !== t ? e.bluffs.splice(t, 1, i) : e.bluffs = []
                },
                setFabled(e, { index: t, fabled: i } = {}) {
                    void 0 !== t ? e.fabled.splice(t, 1) : i && (Array.isArray(i) ? e.fabled = i : e.fabled.push(i))
                }
            };
        var xt = {
            namespaced: !0,
            state: Nt,
            getters: _t,
            actions: St,
            mutations: Rt
        };
        const It = (e, [t, i]) => {
            e.nomination && (e.votes = [...e.votes],
                e.votes[t] = void 0 === i ? !e.votes[t] : i)
        }
            , Mt = () => ({
                sessionId: "",
                isSpectator: !1,
                isReconnecting: !1,
                playerCount: 0,
                ping: 0,
                playerId: "",
                claimedSeat: -1,
                nomination: !1,
                votes: [],
                lockedVote: 0,
                votingSpeed: 3e3,
                isVoteInProgress: !1,
                voteHistory: [],
                markedPlayer: -1,
                isVoteHistoryAllowed: !0,
                isVoteWatchingAllowed: !0,
                isRolesDistributed: !1
            })
            , Tt = {}
            , Ot = {}
            , Ct = e => (t, i) => {
                t[e] = i
            }
            , Pt = {
                setPlayerId: Ct("playerId"),
                setSpectator: Ct("isSpectator"),
                setReconnecting: Ct("isReconnecting"),
                setPlayerCount: Ct("playerCount"),
                setPing: Ct("ping"),
                setVotingSpeed: Ct("votingSpeed"),
                setVoteInProgress: Ct("isVoteInProgress"),
                setMarkedPlayer: Ct("markedPlayer"),
                setNomination: Ct("nomination"),
                setVoteHistoryAllowed: Ct("isVoteHistoryAllowed"),
                setVoteWatchingAllowed: Ct("isVoteWatchingAllowed"),
                claimSeat: Ct("claimedSeat"),
                distributeRoles: Ct("isRolesDistributed"),
                setSessionId(e, t) {
                    e.sessionId = t.toLocaleLowerCase().replace(/[^0-9a-z]/g, "").substr(0, 10)
                },
                nomination(e, { nomination: t, votes: i, votingSpeed: o, lockedVote: s, isVoteInProgress: a } = {}) {
                    e.nomination = t || !1,
                        e.votes = i || [],
                        e.votingSpeed = o || e.votingSpeed,
                        e.lockedVote = s || 0,
                        e.isVoteInProgress = a || !1
                },
                addHistory(e, t) {
                    if (!e.isVoteHistoryAllowed && e.isSpectator)
                        return;
                    if (!e.nomination || e.lockedVote <= t.length)
                        return;
                    const i = "traveler" === t[e.nomination[1]].role.team;
                    e.voteHistory.push({
                        timestamp: new Date,
                        nominator: t[e.nomination[0]].name,
                        nominee: t[e.nomination[1]].name,
                        type: i ? "Exile" : "Execution",
                        majority: Math.ceil(t.filter(e => !e.isDead || i).length / 2),
                        votes: t.filter((t, i) => e.votes[i]).map(({ name: e }) => e)
                    })
                },
                clearVoteHistory(e) {
                    e.voteHistory = []
                },
                vote: It,
                voteSync: It,
                lockVote(e, t) {
                    e.lockedVote = void 0 !== t ? t : e.lockedVote + 1
                }
            };
        var Dt = {
            namespaced: !0,
            state: Mt,
            getters: Tt,
            actions: Ot,
            mutations: Pt
        }
            , Vt = i("b1d9")
            , Et = i("b249")
            , At = i("c825");
        o["a"].use(n["a"]);
        const jt = (e = ge[0]) => new Map(Vt.filter(t => t.edition === e.id || e.roles.includes(t.id)).sort((e, t) => t.team.localeCompare(e.team)).map(e => [e.id, e]))
            , $t = (e = ge[0]) => new Map(Vt.filter(t => "traveler" === t.team && t.edition !== e.id && !e.roles.includes(t.id)).map(e => [e.id, e]))
            , Gt = e => ({ grimoire: t }, i) => {
                t[e] = i
            }
            , Ht = e => ({ grimoire: t }, i) => {
                t[e] = !0 === i || !1 === i ? i : !t[e]
            }
            , Ft = e => e.toLocaleLowerCase().replace(/[^a-z0-9]/g, "")
            , Wt = new Map(ge.map(e => [e.id, e]))
            , Lt = new Map(Vt.map(e => [e.id, e]))
            , zt = new Map(Et.map(e => [e.id, e]));
        let Bt = {};
        try {
            Bt = new Map(At.map(({ id: e, hatred: t }) => [Ft(e), new Map(t.map(({ id: e, reason: t }) => [Ft(e), t]))]))
        } catch (ei) {
            console.error("couldn't load jinxes", ei)
        }
        const Yt = {
            id: "",
            name: "",
            image: "",
            ability: "",
            edition: "custom",
            firstNight: 0,
            firstNightReminder: "",
            otherNight: 0,
            otherNightReminder: "",
            reminders: [],
            remindersGlobal: [],
            setup: !1,
            team: "townsfolk",
            isCustom: !0
        };
        var Jt = new n["a"].Store({
            modules: {
                players: xt,
                session: Dt
            },
            state: {
                grimoire: {
                    isNight: !1,
                    isNightOrder: !0,
                    isPublic: !0,
                    isMenuOpen: !1,
                    isStatic: !1,
                    isMuted: !1,
                    isImageOptIn: !1,
                    zoom: 0,
                    background: ""
                },
                modals: {
                    edition: !1,
                    fabled: !1,
                    gameState: !1,
                    nightOrder: !1,
                    reference: !1,
                    reminder: !1,
                    role: !1,
                    roles: !1,
                    voteHistory: !1
                },
                edition: Wt.get("tb"),
                roles: jt(),
                otherTravelers: $t(),
                fabled: zt,
                jinxes: Bt
            },
            getters: {
                customRolesStripped: ({ roles: e }) => {
                    const t = []
                        , i = Object.keys(Yt)
                        , o = ["firstNightReminder", "otherNightReminder", "isCustom"];
                    return e.forEach(e => {
                        if (e.isCustom) {
                            const s = {};
                            for (let t in e) {
                                if (o.includes(t))
                                    continue;
                                const a = e[t];
                                i.includes(t) && a !== Yt[t] && (s[i.indexOf(t)] = a)
                            }
                            t.push(s)
                        } else
                            t.push({
                                id: e.id
                            })
                    }
                    ),
                        t
                }
                ,
                rolesJSONbyId: () => Lt
            },
            mutations: {
                setZoom: Gt("zoom"),
                setBackground: Gt("background"),
                toggleMuted: Ht("isMuted"),
                toggleMenu: Ht("isMenuOpen"),
                toggleNightOrder: Ht("isNightOrder"),
                toggleStatic: Ht("isStatic"),
                toggleNight: Ht("isNight"),
                toggleGrimoire: Ht("isPublic"),
                toggleImageOptIn: Ht("isImageOptIn"),
                toggleModal({ modals: e }, t) {
                    t && (e[t] = !e[t]);
                    for (let i in e)
                        i !== t && (e[i] = !1)
                },
                setCustomRoles(e, t) {
                    const i = t.map(e => {
                        if (e[0]) {
                            const t = Object.keys(Yt)
                                , i = {};
                            for (let o in e)
                                t[o] && (i[t[o]] = e[o]);
                            return i
                        }
                        return e
                    }
                    ).map(e => (e.id = Ft(e.id),
                        e)).map(t => Lt.get(t.id) || e.roles.get(t.id) || Object.assign({}, Yt, t)).map(e => (Lt.get(e.id) || (e.imageAlt = {
                            townsfolk: "good",
                            outsider: "outsider",
                            minion: "minion",
                            demon: "evil",
                            fabled: "fabled"
                        }[e.team] || "custom",
                            e.firstNight = Math.abs(e.firstNight),
                            e.otherNight = Math.abs(e.otherNight)),
                            e)).filter(e => e.name && e.ability && e.team).sort((e, t) => t.team.localeCompare(e.team));
                    e.roles = new Map(i.filter(e => "fabled" !== e.team).map(e => [e.id, e])),
                        e.fabled = new Map([...i.filter(e => "fabled" === e.team).map(e => [e.id, e]), ...Et.map(e => [e.id, e])]),
                        e.otherTravelers = new Map(Vt.filter(e => "traveler" === e.team && !t.some(t => t.id === e.id)).map(e => [e.id, e]))
                },
                setEdition(e, t) {
                    Wt.has(t.id) ? (e.edition = Wt.get(t.id),
                        e.roles = jt(e.edition),
                        e.otherTravelers = $t(e.edition)) : e.edition = t,
                        e.modals.edition = !1
                }
            },
            plugins: [bt.a, kt]
        })
            , Ut = i("ecee")
            , qt = i("c074")
            , Kt = i("f2d1")
            , Zt = i("ad3d");
        const Qt = ["AddressCard", "BookOpen", "BookDead", "BroadcastTower", "Chair", "CheckSquare", "CloudMoon", "Cog", "Copy", "Clipboard", "Dice", "Dragon", "ExchangeAlt", "ExclamationTriangle", "FileCode", "FileUpload", "HandPaper", "HandPointRight", "Heartbeat", "Image", "Link", "MinusCircle", "PeopleArrows", "PlusCircle", "Question", "Random", "RedoAlt", "SearchMinus", "SearchPlus", "Skull", "Square", "TheaterMasks", "Times", "TimesCircle", "TrashAlt", "Undo", "User", "UserEdit", "UserFriends", "Users", "VenusMars", "VolumeUp", "VolumeMute", "VoteYea", "WindowMaximize", "WindowMinimize"]
            , Xt = ["Github", "Discord"];
        Ut["c"].add(...Qt.map(e => qt["a"]["fa" + e]), ...Xt.map(e => Kt["a"]["fa" + e])),
            o["a"].component("font-awesome-icon", Zt["a"]),
            o["a"].config.productionTip = !1,
            new o["a"]({
                render: e => e(ft),
                store: Jt
            }).$mount("#app")
    },
    5720: function (e, t, i) {
        "use strict";
        i("50d1")
    },
    5740: function (e, t, i) {
        e.exports = i.p + "img/riot.54d174a8.png"
    },
    "5b44": function (e, t, i) {
        e.exports = i.p + "img/fabled.0b1df739.png"
    },
    "5bd9": function (e, t, i) {
        e.exports = i.p + "img/cannibal.53c84ab6.png"
    },
    "5c0b": function (e, t, i) {
        "use strict";
        i("9c0c")
    },
    "5c56": function (e, t, i) {
        e.exports = i.p + "img/duchess.bfe41d6c.png"
    },
    "5c8e": function (e, t, i) {
        e.exports = i.p + "img/goblin.02299149.png"
    },
    "5cf2": function (e, t, i) {
        e.exports = i.p + "img/x.ac4e061c.png"
    },
    "5f4e": function (e, t, i) {
        e.exports = i.p + "img/tb-minion.95728595.png"
    },
    "61b0": function (e, t, i) {
        var o = {
            "./acrobat.png": "887b",
            "./alchemist.png": "dbe8",
            "./alhadikhia.png": "9989",
            "./amnesiac.png": "043b",
            "./angel.png": "bfe2",
            "./apprentice.png": "4bea",
            "./artist.png": "2cd0",
            "./assassin.png": "9187",
            "./atheist.png": "ca7a",
            "./balloonist.png": "65db",
            "./barber.png": "fcc6",
            "./barista.png": "027a",
            "./baron.png": "24d3",
            "./beggar.png": "cfcc",
            "./bishop.png": "8030",
            "./bonecollector.png": "23b1",
            "./boomdandy.png": "aae9",
            "./bountyhunter.png": "899d",
            "./buddhist.png": "1d01",
            "./bureaucrat.png": "25f6",
            "./butcher.png": "37dd",
            "./butler.png": "64fe",
            "./cannibal.png": "5bd9",
            "./cerenovus.png": "0436",
            "./chambermaid.png": "125e",
            "./chef.png": "1e83",
            "./choirboy.png": "d6bc",
            "./clockmaker.png": "f93f",
            "./courtier.png": "ee02",
            "./cultleader.png": "398f",
            "./custom.png": "fd83",
            "./damsel.png": "72d7",
            "./deusexfiasco.png": "9002",
            "./deviant.png": "3b65",
            "./devilsadvocate.png": "cd8b",
            "./djinn.png": "e222",
            "./doomsayer.png": "659f",
            "./dreamer.png": "71b8",
            "./drunk.png": "d97d",
            "./duchess.png": "5c56",
            "./empath.png": "bb7a",
            "./engineer.png": "ea17",
            "./evil.png": "c24f",
            "./eviltwin.png": "e014",
            "./exorcist.png": "5072",
            "./fabled.png": "5b44",
            "./fanggu.png": "6ac0",
            "./farmer.png": "7a7f",
            "./fearmonger.png": "d69f",
            "./fibbin.png": "6eb1",
            "./fiddler.png": "64be",
            "./fisherman.png": "c5db",
            "./flowergirl.png": "66ae",
            "./fool.png": "4720",
            "./fortuneteller.png": "43e8",
            "./gambler.png": "dce6",
            "./gangster.png": "97c6",
            "./general.png": "ac9c",
            "./goblin.png": "5c8e",
            "./godfather.png": "99d0",
            "./golem.png": "4eb3",
            "./good.png": "667e",
            "./goon.png": "55aa",
            "./gossip.png": "cadc",
            "./grandmother.png": "c9f5",
            "./gunslinger.png": "ee92",
            "./harlot.png": "559e",
            "./hellslibrarian.png": "a367",
            "./heretic.png": "5626",
            "./highpriestess.png": "468c",
            "./huntsman.png": "1923",
            "./imp.png": "3e70",
            "./innkeeper.png": "663c",
            "./investigator.png": "b570",
            "./judge.png": "f09b",
            "./juggler.png": "65ab",
            "./king.png": "9639",
            "./klutz.png": "adfc",
            "./knight.png": "6612",
            "./legion.png": "da81",
            "./leviathan.png": "2b04",
            "./librarian.png": "4d73",
            "./lilmonsta.png": "c492",
            "./lleech.png": "9f74",
            "./lunatic.png": "0b61",
            "./lycanthrope.png": "c316",
            "./magician.png": "ab3c",
            "./marionette.png": "e69f",
            "./mastermind.png": "f834",
            "./mathematician.png": "8888",
            "./matron.png": "b1cb",
            "./mayor.png": "b223",
            "./mephit.png": "df5e",
            "./mezepheles.png": "c7b7",
            "./minion.png": "75bc",
            "./minstrel.png": "4efd",
            "./monk.png": "6741",
            "./moonchild.png": "3f65",
            "./mutant.png": "17ad",
            "./nightwatchman.png": "3cd8",
            "./noble.png": "f7d3",
            "./nodashii.png": "68a4",
            "./oracle.png": "0c12",
            "./organgrinder.png": "b3d7",
            "./outsider.png": "2490",
            "./pacifist.png": "fff1",
            "./philosopher.png": "3603",
            "./pithag.png": "7f07",
            "./pixie.png": "a7b6",
            "./plaguedoctor.png": "d3c8",
            "./plus.png": "160b",
            "./po.png": "c73a",
            "./poisoner.png": "f282",
            "./politician.png": "07ab",
            "./poppygrower.png": "3273",
            "./preacher.png": "2094",
            "./professor.png": "b30c",
            "./psychopath.png": "fcdb",
            "./pukka.png": "a6a2",
            "./puzzlemaster.png": "27a3",
            "./ravenkeeper.png": "0c59",
            "./recluse.png": "177d",
            "./revolutionary.png": "aa2d",
            "./riot.png": "5740",
            "./sage.png": "30b6",
            "./sailor.png": "223c",
            "./saint.png": "6936",
            "./savant.png": "d715",
            "./scapegoat.png": "327a",
            "./scarletwoman.png": "f322",
            "./seamstress.png": "ac7c",
            "./sentinel.png": "af68",
            "./shabaloth.png": "0b29",
            "./slayer.png": "d62b",
            "./snakecharmer.png": "4021",
            "./snitch.png": "b7e8",
            "./soldier.png": "4e76",
            "./spiritofivory.png": "0d06",
            "./spy.png": "ec1e",
            "./steward.png": "7d8e",
            "./stormcatcher.png": "a4c2",
            "./sweetheart.png": "f1e5",
            "./tealady.png": "ba9b",
            "./thief.png": "9ce3",
            "./tinker.png": "9f7e",
            "./towncrier.png": "38a5",
            "./toymaker.png": "39eb",
            "./undertaker.png": "0e20",
            "./vigormortis.png": "f4bd",
            "./virgin.png": "eff4",
            "./vizier.png": "41d4",
            "./vortox.png": "3a43",
            "./voudon.png": "a710",
            "./washerwoman.png": "013f",
            "./widow.png": "22c9",
            "./witch.png": "f558",
            "./x.png": "5cf2",
            "./zombuul.png": "20ca"
        };
        function s(e) {
            var t = a(e);
            return i(t)
        }
        function a(e) {
            if (!i.o(o, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND",
                t
            }
            return o[e]
        }
        s.keys = function () {
            return Object.keys(o)
        }
            ,
            s.resolve = a,
            e.exports = s,
            s.id = "61b0"
    },
    "634a": function (e) {
        e.exports = JSON.parse('[{"townsfolk":3,"outsider":0,"minion":1,"demon":1},{"townsfolk":3,"outsider":1,"minion":1,"demon":1},{"townsfolk":5,"outsider":0,"minion":1,"demon":1},{"townsfolk":5,"outsider":1,"minion":1,"demon":1},{"townsfolk":5,"outsider":2,"minion":1,"demon":1},{"townsfolk":7,"outsider":0,"minion":2,"demon":1},{"townsfolk":7,"outsider":1,"minion":2,"demon":1},{"townsfolk":7,"outsider":2,"minion":2,"demon":1},{"townsfolk":9,"outsider":0,"minion":3,"demon":1},{"townsfolk":9,"outsider":1,"minion":3,"demon":1},{"townsfolk":9,"outsider":2,"minion":3,"demon":1}]')
    },
    "64be": function (e, t, i) {
        e.exports = i.p + "img/fiddler.4f376c70.png"
    },
    "64fe": function (e, t, i) {
        e.exports = i.p + "img/butler.24394197.png"
    },
    "659f": function (e, t, i) {
        e.exports = i.p + "img/doomsayer.6f86a514.png"
    },
    "65ab": function (e, t, i) {
        e.exports = i.p + "img/juggler.23c97e47.png"
    },
    "65c0": function (e, t, i) { },
    "65db": function (e, t, i) {
        e.exports = i.p + "img/balloonist.b9ceaad1.png"
    },
    6612: function (e, t, i) {
        e.exports = i.p + "img/knight.f551815d.png"
    },
    "663c": function (e, t, i) {
        e.exports = i.p + "img/innkeeper.27dd7e60.png"
    },
    "667e": function (e, t, i) {
        e.exports = i.p + "img/good.56355047.png"
    },
    "66ae": function (e, t, i) {
        e.exports = i.p + "img/flowergirl.7edc3851.png"
    },
    6741: function (e, t, i) {
        e.exports = i.p + "img/monk.d96796d7.png"
    },
    "67ad": function (e, t, i) {
        "use strict";
        i("05f3")
    },
    "68a4": function (e, t, i) {
        e.exports = i.p + "img/nodashii.dc3e933c.png"
    },
    6936: function (e, t, i) {
        e.exports = i.p + "img/saint.d1c68978.png"
    },
    "6ac0": function (e, t, i) {
        e.exports = i.p + "img/fanggu.29f6e52e.png"
    },
    "6b1e": function (e, t, i) { },
    "6eb1": function (e, t, i) {
        e.exports = i.p + "img/fibbin.60f4e4db.png"
    },
    "71b8": function (e, t, i) {
        e.exports = i.p + "img/dreamer.52d942e8.png"
    },
    "72d7": function (e, t, i) {
        e.exports = i.p + "img/damsel.85d8c3ec.png"
    },
    "73a1": function (e, t, i) {
        e.exports = i.p + "img/tb-outsider.a1018bf7.png"
    },
    "740e": function (e, t, i) {
        "use strict";
        i("f344")
    },
    7496: function (e, t, i) {
        e.exports = i.p + "img/bmr.b446b930.png"
    },
    "74c9": function (e, t, i) {
        "use strict";
        i("9fd8")
    },
    "75bc": function (e, t, i) {
        e.exports = i.p + "img/minion.95728595.png"
    },
    "7a7f": function (e, t, i) {
        e.exports = i.p + "img/farmer.204e36f4.png"
    },
    "7b43": function (e, t, i) { },
    "7d8e": function (e, t, i) {
        e.exports = i.p + "img/steward.fae1243b.png"
    },
    "7f07": function (e, t, i) {
        e.exports = i.p + "img/pithag.54894a1c.png"
    },
    8030: function (e, t, i) {
        e.exports = i.p + "img/bishop.b446b930.png"
    },
    8781: function (e, t, i) {
        "use strict";
        i("6b1e")
    },
    "887b": function (e, t, i) {
        e.exports = i.p + "img/acrobat.95b437c9.png"
    },
    8888: function (e, t, i) {
        e.exports = i.p + "img/mathematician.0b38bd49.png"
    },
    8970: function (e, t, i) {
        "use strict";
        i("c0b6")
    },
    "899d": function (e, t, i) {
        e.exports = i.p + "img/bountyhunter.75133577.png"
    },
    9002: function (e, t, i) {
        e.exports = i.p + "img/deusexfiasco.a8b5f898.png"
    },
    9187: function (e, t, i) {
        e.exports = i.p + "img/assassin.c58445a9.png"
    },
    9224: function (e) {
        e.exports = JSON.parse('{"a":"2.16.0"}')
    },
    "92d8": function (e, t, i) {
        e.exports = i.p + "img/luf.412493d4.png"
    },
    9639: function (e, t, i) {
        e.exports = i.p + "img/king.9d143aab.png"
    },
    "97c6": function (e, t, i) {
        e.exports = i.p + "img/gangster.f11eb773.png"
    },
    9989: function (e, t, i) {
        e.exports = i.p + "img/alhadikhia.4a73c015.png"
    },
    "99d0": function (e, t, i) {
        e.exports = i.p + "img/godfather.2d238358.png"
    },
    "9c0c": function (e, t, i) { },
    "9ce3": function (e, t, i) {
        e.exports = i.p + "img/thief.b4916753.png"
    },
    "9f74": function (e, t, i) {
        e.exports = i.p + "img/lleech.625a8347.png"
    },
    "9f7e": function (e, t, i) {
        e.exports = i.p + "img/tinker.1128cab7.png"
    },
    "9fd8": function (e, t, i) { },
    a367: function (e, t, i) {
        e.exports = i.p + "img/hellslibrarian.8829a357.png"
    },
    a3b0: function (e, t, i) {
        e.exports = i.p + "img/tb-demon.85d8c3ec.png"
    },
    a4c2: function (e, t, i) {
        e.exports = i.p + "img/stormcatcher.4ba01c24.png"
    },
    a6a2: function (e, t, i) {
        e.exports = i.p + "img/pukka.2ee89c95.png"
    },
    a710: function (e, t, i) {
        e.exports = i.p + "img/voudon.464d7d5b.png"
    },
    a7b6: function (e, t, i) {
        e.exports = i.p + "img/pixie.1a053a1b.png"
    },
    d3c8: function (e, t, i) {
        e.exports = i.p + "img/plaguedoctor.1d35ab35.png"
    },
    aa2d: function (e, t, i) {
        e.exports = i.p + "img/revolutionary.eed81aec.png"
    },
    aae9: function (e, t, i) {
        e.exports = i.p + "img/boomdandy.6bbc3226.png"
    },
    ab3c: function (e, t, i) {
        e.exports = i.p + "img/magician.97d3f9b4.png"
    },
    ac7c: function (e, t, i) {
        e.exports = i.p + "img/seamstress.c713525e.png"
    },
    ac9c: function (e, t, i) {
        e.exports = i.p + "img/general.f1c0f69a.png"
    },
    adfc: function (e, t, i) {
        e.exports = i.p + "img/klutz.48a6eb63.png"
    },
    af68: function (e, t, i) {
        e.exports = i.p + "img/sentinel.9b6c51d9.png"
    },
    b06b: function (e, t, i) { },
    b1cb: function (e, t, i) {
        e.exports = i.p + "img/matron.72aeb8e5.png"
    },
    b1d9: function (e) {
        e.exports = JSON.parse('[{"id":"washerwoman","name":"Washerwoman","edition":"tb","team":"townsfolk","firstNight":33,"firstNightReminder":"Show the character token of a Townsfolk in play. Point to two players, one of which is that character.","otherNight":0,"otherNightReminder":"","reminders":["Townsfolk","Wrong"],"setup":false,"ability":"You start knowing that 1 of 2 players is a particular Townsfolk."},{"id":"librarian","name":"Librarian","edition":"tb","team":"townsfolk","firstNight":34,"firstNightReminder":"Show the character token of an Outsider in play. Point to two players, one of which is that character.","otherNight":0,"otherNightReminder":"","reminders":["Outsider","Wrong"],"setup":false,"ability":"You start knowing that 1 of 2 players is a particular Outsider. (Or that zero are in play.)"},{"id":"investigator","name":"Investigator","edition":"tb","team":"townsfolk","firstNight":35,"firstNightReminder":"Show the character token of a Minion in play. Point to two players, one of which is that character.","otherNight":0,"otherNightReminder":"","reminders":["Minion","Wrong"],"setup":false,"ability":"You start knowing that 1 of 2 players is a particular Minion."},{"id":"chef","name":"Chef","edition":"tb","team":"townsfolk","firstNight":36,"firstNightReminder":"Show the finger signal (0, 1, 2, …) for the number of pairs of neighbouring evil players.","otherNight":0,"otherNightReminder":"","reminders":[],"setup":false,"ability":"You start knowing how many pairs of evil players there are."},{"id":"empath","name":"Empath","edition":"tb","team":"townsfolk","firstNight":37,"firstNightReminder":"Show the finger signal (0, 1, 2) for the number of evil alive neighbours of the Empath.","otherNight":53,"otherNightReminder":"Show the finger signal (0, 1, 2) for the number of evil neighbours.","reminders":[],"setup":false,"ability":"Each night, you learn how many of your 2 alive neighbours are evil."},{"id":"fortuneteller","name":"Fortune Teller","edition":"tb","team":"townsfolk","firstNight":38,"firstNightReminder":"The Fortune Teller points to two players. Give the head signal (nod yes, shake no) for whether one of those players is the Demon. ","otherNight":54,"otherNightReminder":"The Fortune Teller points to two players. Show the head signal (nod \'yes\', shake \'no\') for whether one of those players is the Demon.","reminders":["Red herring"],"setup":false,"ability":"Each night, choose 2 players: you learn if either is a Demon. There is a good player that registers as a Demon to you."},{"id":"undertaker","name":"Undertaker","edition":"tb","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":55,"otherNightReminder":"If a player was executed today: Show that player’s character token.","reminders":["Executed"],"setup":false,"ability":"Each night*, you learn which character died by execution today."},{"id":"monk","name":"Monk","edition":"tb","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":12,"otherNightReminder":"The previously protected player is no longer protected. The Monk points to a player not themself. Mark that player \'Protected\'.","reminders":["Protected"],"setup":false,"ability":"Each night*, choose a player (not yourself): they are safe from the Demon tonight."},{"id":"ravenkeeper","name":"Ravenkeeper","edition":"tb","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":52,"otherNightReminder":"If the Ravenkeeper died tonight: The Ravenkeeper points to a player. Show that player’s character token.","reminders":[],"setup":false,"ability":"If you die at night, you are woken to choose a player: you learn their character."},{"id":"virgin","name":"Virgin","edition":"tb","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":["No ability"],"setup":false,"ability":"The 1st time you are nominated, if the nominator is a Townsfolk, they are executed immediately."},{"id":"slayer","name":"Slayer","edition":"tb","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":["No ability"],"setup":false,"ability":"Once per game, during the day, publicly choose a player: if they are the Demon, they die."},{"id":"soldier","name":"Soldier","edition":"tb","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":[],"setup":false,"ability":"You are safe from the Demon."},{"id":"mayor","name":"Mayor","edition":"tb","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":[],"setup":false,"ability":"If only 3 players live & no execution occurs, your team wins. If you die at night, another player might die instead."},{"id":"butler","name":"Butler","edition":"tb","team":"outsider","firstNight":39,"firstNightReminder":"The Butler points to a player. Mark that player as \'Master\'.","otherNight":67,"otherNightReminder":"The Butler points to a player. Mark that player as \'Master\'.","reminders":["Master"],"setup":false,"ability":"Each night, choose a player (not yourself): tomorrow, you may only vote if they are voting too."},{"id":"drunk","name":"Drunk","edition":"tb","team":"outsider","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":[],"remindersGlobal":["Drunk"],"setup":true,"ability":"You do not know you are the Drunk. You think you are a Townsfolk character, but you are not."},{"id":"recluse","name":"Recluse","edition":"tb","team":"outsider","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":[],"setup":false,"ability":"You might register as evil & as a Minion or Demon, even if dead."},{"id":"saint","name":"Saint","edition":"tb","team":"outsider","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":[],"setup":false,"ability":"If you die by execution, your team loses."},{"id":"poisoner","name":"Poisoner","edition":"tb","team":"minion","firstNight":17,"firstNightReminder":"The Poisoner points to a player. That player is poisoned.","otherNight":7,"otherNightReminder":"The previously poisoned player is no longer poisoned. The Poisoner points to a player. That player is poisoned.","reminders":["Poisoned"],"setup":false,"ability":"Each night, choose a player: they are poisoned tonight and tomorrow day."},{"id":"spy","name":"Spy","edition":"tb","team":"minion","firstNight":49,"firstNightReminder":"Show the Grimoire to the Spy for as long as they need.","otherNight":68,"otherNightReminder":"Show the Grimoire to the Spy for as long as they need.","reminders":[],"setup":false,"ability":"Each night, you see the Grimoire. You might register as good & as a Townsfolk or Outsider, even if dead."},{"id":"scarletwoman","name":"Scarlet Woman","edition":"tb","team":"minion","firstNight":0,"firstNightReminder":"","otherNight":19,"otherNightReminder":"If the Scarlet Woman became the Demon today: Show the \'You are\' card, then the demon token.","reminders":["Demon"],"setup":false,"ability":"If there are 5 or more players alive & the Demon dies, you become the Demon. (Travellers don’t count)"},{"id":"baron","name":"Baron","edition":"tb","team":"minion","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":[],"setup":true,"ability":"There are extra Outsiders in play. [+2 Outsiders]"},{"id":"imp","name":"Imp","edition":"tb","team":"demon","firstNight":0,"firstNightReminder":"","otherNight":24,"otherNightReminder":"The Imp points to a player. That player dies. If the Imp chose themselves: Replace the character of 1 alive minion with a spare Imp token. Show the \'You are\' card, then the Imp token.","reminders":["Dead"],"setup":false,"ability":"Each night*, choose a player: they die. If you kill yourself this way, a Minion becomes the Imp."},{"id":"bureaucrat","name":"Bureaucrat","edition":"tb","team":"traveler","firstNight":1,"firstNightReminder":"The Bureaucrat points to a player. Put the Bureaucrat\'s \'3 votes\' reminder by the chosen player\'s character token.","otherNight":1,"otherNightReminder":"The Bureaucrat points to a player. Put the Bureaucrat\'s \'3 votes\' reminder by the chosen player\'s character token.","reminders":["3 votes"],"setup":false,"ability":"Each night, choose a player (not yourself): their vote counts as 3 votes tomorrow."},{"id":"thief","name":"Thief","edition":"tb","team":"traveler","firstNight":1,"firstNightReminder":"The Thief points to a player. Put the Thief\'s \'Negative vote\' reminder by the chosen player\'s character token.","otherNight":1,"otherNightReminder":"The Thief points to a player. Put the Thief\'s \'Negative vote\' reminder by the chosen player\'s character token.","reminders":["Negative vote"],"setup":false,"ability":"Each night, choose a player (not yourself): their vote counts negatively tomorrow."},{"id":"gunslinger","name":"Gunslinger","edition":"tb","team":"traveler","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":[],"setup":false,"ability":"Each day, after the 1st vote has been tallied, you may choose a player that voted: they die."},{"id":"scapegoat","name":"Scapegoat","edition":"tb","team":"traveler","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":[],"setup":false,"ability":"If a player of your alignment is executed, you might be executed instead."},{"id":"beggar","name":"Beggar","edition":"tb","team":"traveler","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":[],"setup":false,"ability":"You must use a vote token to vote. Dead players may choose to give you theirs. If so, you learn their alignment. You are sober & healthy."},{"id":"grandmother","name":"Grandmother","edition":"bmr","team":"townsfolk","firstNight":40,"firstNightReminder":"Show the marked character token. Point to the marked player.","otherNight":51,"otherNightReminder":"If the Grandmother’s grandchild was killed by the Demon tonight: The Grandmother dies.","reminders":["Grandchild"],"setup":false,"ability":"You start knowing a good player & their character. If the Demon kills them, you die too."},{"id":"steward","name":"Steward","edition":"","team":"townsfolk","firstNight":40,"firstNightReminder":"Point to the marked player.","otherNight":0,"otherNightReminder":"","reminders":["Known"],"setup":false,"ability":"You start knowing 1 good player."},{"id":"knight","name":"Knight","edition":"","team":"townsfolk","firstNight":40,"firstNightReminder":"Point to the 2 marked players.","otherNight":0,"otherNightReminder":"","reminders":["Known"],"setup":false,"ability":"You start knowing 2 players that are not the Demon."},{"id":"sailor","name":"Sailor","edition":"bmr","team":"townsfolk","firstNight":11,"firstNightReminder":"The Sailor points to a living player. Either the Sailor, or the chosen player, is drunk.","otherNight":4,"otherNightReminder":"The previously drunk player is no longer drunk. The Sailor points to a living player. Either the Sailor, or the chosen player, is drunk.","reminders":["Drunk"],"setup":false,"ability":"Each night, choose an alive player: either you or they are drunk until dusk. You can\'t die."},{"id":"chambermaid","name":"Chambermaid","edition":"bmr","team":"townsfolk","firstNight":51,"firstNightReminder":"The Chambermaid points to two players. Show the number signal (0, 1, 2, …) for how many of those players wake tonight for their ability.","otherNight":70,"otherNightReminder":"The Chambermaid points to two players. Show the number signal (0, 1, 2, …) for how many of those players wake tonight for their ability.","reminders":[],"setup":false,"ability":"Each night, choose 2 alive players (not yourself): you learn how many woke tonight due to their ability."},{"id":"exorcist","name":"Exorcist","edition":"bmr","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":21,"otherNightReminder":"The Exorcist points to a player, different from the previous night. If that player is the Demon: Wake the Demon. Show the Exorcist token. Point to the Exorcist. The Demon does not act tonight.","reminders":["Chosen"],"setup":false,"ability":"Each night*, choose a player (different to last night): the Demon, if chosen, learns who you are then doesn\'t wake tonight."},{"id":"innkeeper","name":"Innkeeper","edition":"bmr","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":9,"otherNightReminder":"The previously protected and drunk players lose those markers. The Innkeeper points to two players. Those players are protected. One is drunk.","reminders":["Protected","Drunk"],"setup":false,"ability":"Each night*, choose 2 players: they can\'t die tonight, but 1 is drunk until dusk."},{"id":"gambler","name":"Gambler","edition":"bmr","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":10,"otherNightReminder":"The Gambler points to a player, and a character on their sheet. If incorrect, the Gambler dies.","reminders":["Dead"],"setup":false,"ability":"Each night*, choose a player & guess their character: if you guess wrong, you die."},{"id":"gossip","name":"Gossip","edition":"bmr","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":38,"otherNightReminder":"If the Gossip’s public statement was true: Choose a player not protected from dying tonight. That player dies.","reminders":["Dead"],"setup":false,"ability":"Each day, you may make a public statement. Tonight, if it was true, a player dies."},{"id":"courtier","name":"Courtier","edition":"bmr","team":"townsfolk","firstNight":19,"firstNightReminder":"The Courtier either shows a \'no\' head signal, or points to a character on the sheet. If the Courtier used their ability: If that character is in play, that player is drunk.","otherNight":8,"otherNightReminder":"Reduce the remaining number of days the marked player is poisoned. If the Courtier has not yet used their ability: The Courtier either shows a \'no\' head signal, or points to a character on the sheet. If the Courtier used their ability: If that character is in play, that player is drunk.","reminders":["Drunk 3","Drunk 2","Drunk 1","No ability"],"setup":false,"ability":"Once per game, at night, choose a character: they are drunk for 3 nights & 3 days."},{"id":"professor","name":"Professor","edition":"bmr","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":43,"otherNightReminder":"If the Professor has not used their ability: The Professor either shakes their head no, or points to a player. If that player is a Townsfolk, they are now alive.","reminders":["Alive","No ability"],"setup":false,"ability":"Once per game, at night*, choose a dead player: if they are a Townsfolk, they are resurrected."},{"id":"minstrel","name":"Minstrel","edition":"bmr","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":["Everyone drunk"],"setup":false,"ability":"When a Minion dies by execution, all other players (except Travellers) are drunk until dusk tomorrow."},{"id":"tealady","name":"Tea Lady","edition":"bmr","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":["Can not die"],"setup":false,"ability":"If both your alive neighbours are good, they can\'t die."},{"id":"pacifist","name":"Pacifist","edition":"bmr","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":[],"setup":false,"ability":"Executed good players might not die."},{"id":"fool","name":"Fool","edition":"bmr","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":["No ability"],"setup":false,"ability":"The first time you die, you don\'t."},{"id":"tinker","name":"Tinker","edition":"bmr","team":"outsider","firstNight":0,"firstNightReminder":"","otherNight":49,"otherNightReminder":"The Tinker might die.","reminders":["Dead"],"setup":false,"ability":"You might die at any time."},{"id":"moonchild","name":"Moonchild","edition":"bmr","team":"outsider","firstNight":0,"firstNightReminder":"","otherNight":50,"otherNightReminder":"If the Moonchild used their ability to target a player today: If that player is good, they die.","reminders":["Dead"],"setup":false,"ability":"When you learn that you died, publicly choose 1 alive player. Tonight, if it was a good player, they die."},{"id":"goon","name":"Goon","edition":"bmr","team":"outsider","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":["Drunk"],"setup":false,"ability":"Each night, the 1st player to choose you with their ability is drunk until dusk. You become their alignment."},{"id":"lunatic","name":"Lunatic","edition":"bmr","team":"outsider","firstNight":8,"firstNightReminder":"If 7 or more players: Show the Lunatic a number of arbitrary \'Minions\', players equal to the number of Minions in play. Show 3 character tokens of arbitrary good characters. If the token received by the Lunatic is a Demon that would wake tonight: Allow the Lunatic to do the Demon actions. Place their \'attack\' markers. Wake the Demon. Show the Demon’s real character token. Show them the Lunatic player. If the Lunatic attacked players: Show the real demon each marked player. Remove any Lunatic \'attack\' markers.","otherNight":20,"otherNightReminder":"Allow the Lunatic to do the actions of the Demon. Place their \'attack\' markers. If the Lunatic selected players: Wake the Demon. Show the \'attack\' marker, then point to each marked player. Remove any Lunatic \'attack\' markers.","reminders":["Attack 1","Attack 2","Attack 3"],"setup":false,"ability":"You think you are a Demon, but you are not. The Demon knows who you are & who you choose at night."},{"id":"godfather","name":"Godfather","edition":"bmr","team":"minion","firstNight":21,"firstNightReminder":"Show each of the Outsider tokens in play.","otherNight":37,"otherNightReminder":"If an Outsider died today: The Godfather points to a player. That player dies.","reminders":["Died today","Dead"],"setup":true,"ability":"You start knowing which Outsiders are in play. If 1 died today, choose a player tonight: they die. [−1 or +1 Outsider]"},{"id":"devilsadvocate","name":"Devil\'s Advocate","edition":"bmr","team":"minion","firstNight":22,"firstNightReminder":"The Devil’s Advocate points to a living player. That player survives execution tomorrow.","otherNight":13,"otherNightReminder":"The Devil’s Advocate points to a living player, different from the previous night. That player survives execution tomorrow.","reminders":["Survives execution"],"setup":false,"ability":"Each night, choose a living player (different to last night): if executed tomorrow, they don\'t die."},{"id":"assassin","name":"Assassin","edition":"bmr","team":"minion","firstNight":0,"firstNightReminder":"","otherNight":36,"otherNightReminder":"If the Assassin has not yet used their ability: The Assassin either shows the \'no\' head signal, or points to a player. That player dies.","reminders":["Dead","No ability"],"setup":false,"ability":"Once per game, at night*, choose a player: they die, even if for some reason they could not."},{"id":"mastermind","name":"Mastermind","edition":"bmr","team":"minion","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":[],"setup":false,"ability":"If the Demon dies by execution (ending the game), play for 1 more day. If a player is then executed, their team loses."},{"id":"zombuul","name":"Zombuul","edition":"bmr","team":"demon","firstNight":0,"firstNightReminder":"","otherNight":25,"otherNightReminder":"If no-one died during the day: The Zombuul points to a player. That player dies.","reminders":["Died today","Dead"],"setup":false,"ability":"Each night*, if no-one died today, choose a player: they die. The 1st time you die, you live but register as dead."},{"id":"pukka","name":"Pukka","edition":"bmr","team":"demon","firstNight":28,"firstNightReminder":"The Pukka points to a player. That player is poisoned.","otherNight":26,"otherNightReminder":"The Pukka points to a player. That player is poisoned. The previously poisoned player dies. ","reminders":["Poisoned","Dead"],"setup":false,"ability":"Each night, choose a player: they are poisoned. The previously poisoned player dies then becomes healthy."},{"id":"shabaloth","name":"Shabaloth","edition":"bmr","team":"demon","firstNight":0,"firstNightReminder":"","otherNight":27,"otherNightReminder":"One player that the Shabaloth chose the previous night might be resurrected. The Shabaloth points to two players. Those players die.","reminders":["Dead","Alive"],"setup":false,"ability":"Each night*, choose 2 players: they die. A dead player you chose last night might be regurgitated."},{"id":"po","name":"Po","edition":"bmr","team":"demon","firstNight":0,"firstNightReminder":"","otherNight":28,"otherNightReminder":"If the Po chose no-one the previous night: The Po points to three players. Otherwise: The Po either shows the \'no\' head signal , or points to a player. Chosen players die","reminders":["Dead","3 attacks"],"setup":false,"ability":"Each night*, you may choose a player: they die. If your last choice was no-one, choose 3 players tonight."},{"id":"apprentice","name":"Apprentice","edition":"bmr","team":"traveler","firstNight":1,"firstNightReminder":"Show the Apprentice the \'You are\' card, then a Townsfolk or Minion token. In the Grimoire, replace the Apprentice token with that character token, and put the Apprentice\'s \'Is the Apprentice\' reminder by that character token.","otherNight":0,"otherNightReminder":"","reminders":["Is the Apprentice"],"setup":false,"ability":"On your 1st night, you gain a Townsfolk ability (if good), or a Minion ability (if evil)."},{"id":"matron","name":"Matron","edition":"bmr","team":"traveler","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":[],"setup":false,"ability":"Each day, you may choose up to 3 sets of 2 players to swap seats. Players may not leave their seats to talk in private."},{"id":"judge","name":"Judge","edition":"bmr","team":"traveler","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":["No ability"],"setup":false,"ability":"Once per game, if another player nominated, you may choose to force the current execution to pass or fail."},{"id":"bishop","name":"Bishop","edition":"bmr","team":"traveler","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":["Nominate good","Nominate evil"],"setup":false,"ability":"Only the Storyteller can nominate. At least 1 opposite player must be nominated each day."},{"id":"voudon","name":"Voudon","edition":"bmr","team":"traveler","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":[],"setup":false,"ability":"Only you and the dead can vote. They don\'t need a vote token to do so. A 50% majority is not required."},{"id":"clockmaker","name":"Clockmaker","edition":"snv","team":"townsfolk","firstNight":41,"firstNightReminder":"Show the hand signal for the number (1, 2, 3, etc.) of places from Demon to closest Minion.","otherNight":0,"otherNightReminder":"","reminders":[],"setup":false,"ability":"You start knowing how many steps from the Demon to its nearest Minion."},{"id":"dreamer","name":"Dreamer","edition":"snv","team":"townsfolk","firstNight":42,"firstNightReminder":"The Dreamer points to a player. Show 1 good and 1 evil character token; one of these is correct.","otherNight":56,"otherNightReminder":"The Dreamer points to a player. Show 1 good and 1 evil character token; one of these is correct.","reminders":[],"setup":false,"ability":"Each night, choose a player (not yourself or Travellers): you learn 1 good and 1 evil character, 1 of which is correct."},{"id":"snakecharmer","name":"Snake Charmer","edition":"snv","team":"townsfolk","firstNight":20,"firstNightReminder":"The Snake Charmer points to a player. If that player is the Demon: swap the Demon and Snake Charmer character and alignments. Wake each player to inform them of their new role and alignment. The new Snake Charmer is poisoned.","otherNight":11,"otherNightReminder":"The Snake Charmer points to a player. If that player is the Demon: swap the Demon and Snake Charmer character and alignments. Wake each player to inform them of their new role and alignment. The new Snake Charmer is poisoned.","reminders":["Poisoned"],"setup":false,"ability":"Each night, choose an alive player: a chosen Demon swaps characters & alignments with you & is then poisoned."},{"id":"mathematician","name":"Mathematician","edition":"snv","team":"townsfolk","firstNight":52,"firstNightReminder":"Show the hand signal for the number (0, 1, 2, etc.) of players whose ability malfunctioned due to other abilities.","otherNight":71,"otherNightReminder":"Show the hand signal for the number (0, 1, 2, etc.) of players whose ability malfunctioned due to other abilities.","reminders":["Abnormal"],"setup":false,"ability":"Each night, you learn how many players’ abilities worked abnormally (since dawn) due to another character\'s ability."},{"id":"flowergirl","name":"Flowergirl","edition":"snv","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":57,"otherNightReminder":"Nod \'yes\' or shake head \'no\' for whether the Demon voted today. Place the \'Demon not voted\' marker (remove \'Demon voted\', if any).","reminders":["Demon voted","Demon not voted"],"setup":false,"ability":"Each night*, you learn if a Demon voted today."},{"id":"towncrier","name":"Town Crier","edition":"snv","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":58,"otherNightReminder":"Nod \'yes\' or shake head \'no\' for whether a Minion nominated today. Place the \'Minion not nominated\' marker (remove \'Minion nominated\', if any).","reminders":["Minions not nominated","Minion nominated"],"setup":false,"ability":"Each night*, you learn if a Minion nominated today."},{"id":"oracle","name":"Oracle","edition":"snv","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":59,"otherNightReminder":"Show the hand signal for the number (0, 1, 2, etc.) of dead evil players.","reminders":[],"setup":false,"ability":"Each night*, you learn how many dead players are evil."},{"id":"savant","name":"Savant","edition":"snv","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":[],"setup":false,"ability":"Each day, you may visit the Storyteller to learn 2 things in private: 1 is true & 1 is false."},{"id":"seamstress","name":"Seamstress","edition":"snv","team":"townsfolk","firstNight":43,"firstNightReminder":"The Seamstress either shows a \'no\' head signal, or points to two other players. If the Seamstress chose players , nod \'yes\' or shake \'no\' for whether they are of same alignment.","otherNight":60,"otherNightReminder":"If the Seamstress has not yet used their ability: the Seamstress either shows a \'no\' head signal, or points to two other players. If the Seamstress chose players , nod \'yes\' or shake \'no\' for whether they are of same alignment.","reminders":["No ability"],"setup":false,"ability":"Once per game, at night, choose 2 players (not yourself): you learn if they are the same alignment."},{"id":"philosopher","name":"Philosopher","edition":"snv","team":"townsfolk","firstNight":2,"firstNightReminder":"The Philosopher either shows a \'no\' head signal, or points to a good character on their sheet. If they chose a character: Swap the out-of-play character token with the Philosopher token and add the \'Is the Philosopher\' reminder. If the character is in play, place the drunk marker by that player.","otherNight":2,"otherNightReminder":"If the Philosopher has not used their ability: the Philosopher either shows a \'no\' head signal, or points to a good character on their sheet. If they chose a character: Swap the out-of-play character token with the Philosopher token and add the \'Is the Philosopher\' reminder. If the character is in play, place the drunk marker by that player.","reminders":["Drunk","Is the Philosopher"],"setup":false,"ability":"Once per game, at night, choose a good character: gain that ability. If this character is in play, they are drunk."},{"id":"artist","name":"Artist","edition":"snv","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":["No ability"],"setup":false,"ability":"Once per game, during the day, privately ask the Storyteller any yes/no question."},{"id":"juggler","name":"Juggler","edition":"snv","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":61,"otherNightReminder":"If today was the Juggler’s first day: Show the hand signal for the number (0, 1, 2, etc.) of \'Correct\' markers. Remove markers.","reminders":["Correct"],"setup":false,"ability":"On your 1st day, publicly guess up to 5 players\' characters. That night, you learn how many you got correct."},{"id":"sage","name":"Sage","edition":"snv","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":42,"otherNightReminder":"If the Sage was killed by a Demon: Point to two players, one of which is that Demon.","reminders":[],"setup":false,"ability":"If the Demon kills you, you learn that it is 1 of 2 players."},{"id":"mutant","name":"Mutant","edition":"snv","team":"outsider","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":[],"setup":false,"ability":"If you are “mad” about being an Outsider, you might be executed."},{"id":"sweetheart","name":"Sweetheart","edition":"snv","team":"outsider","firstNight":0,"firstNightReminder":"","otherNight":41,"otherNightReminder":"Choose a player that is drunk.","reminders":["Drunk"],"setup":false,"ability":"When you die, 1 player is drunk from now on."},{"id":"barber","name":"Barber","edition":"snv","team":"outsider","firstNight":0,"firstNightReminder":"","otherNight":40,"otherNightReminder":"If the Barber died today: Wake the Demon. Show the \'This character selected you\' card, then Barber token. The Demon either shows a \'no\' head signal, or points to 2 players. If they chose players: Swap the character tokens. Wake each player. Show \'You are\', then their new character token.","reminders":["Haircuts tonight"],"setup":false,"ability":"If you died today or tonight, the Demon may choose 2 players (not another Demon) to swap characters."},{"id":"klutz","name":"Klutz","edition":"snv","team":"outsider","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":[],"setup":false,"ability":"When you learn that you died, publicly choose 1 alive player: if they are evil, your team loses."},{"id":"eviltwin","name":"Evil Twin","edition":"snv","team":"minion","firstNight":23,"firstNightReminder":"Wake the Evil Twin and their twin. Confirm that they have acknowledged each other. Point to the Evil Twin. Show their Evil Twin token to the twin player. Point to the twin. Show their character token to the Evil Twin player.","otherNight":0,"otherNightReminder":"","reminders":["Twin"],"setup":false,"ability":"You & an opposing player know each other. If the good player is executed, evil wins. Good can\'t win if you both live."},{"id":"witch","name":"Witch","edition":"snv","team":"minion","firstNight":24,"firstNightReminder":"The Witch points to a player. If that player nominates tomorrow they die immediately.","otherNight":14,"otherNightReminder":"If there are 4 or more players alive: The Witch points to a player. If that player nominates tomorrow they die immediately.","reminders":["Cursed"],"setup":false,"ability":"Each night, choose a player: if they nominate tomorrow, they die. If just 3 players live, you lose this ability."},{"id":"cerenovus","name":"Cerenovus","edition":"snv","team":"minion","firstNight":25,"firstNightReminder":"The Cerenovus points to a player, then to a character on their sheet. Wake that player. Show the \'This character selected you\' card, then the Cerenovus token. Show the selected character token. If the player is not mad about being that character tomorrow, they can be executed.","otherNight":15,"otherNightReminder":"The Cerenovus points to a player, then to a character on their sheet. Wake that player. Show the \'This character selected you\' card, then the Cerenovus token. Show the selected character token. If the player is not mad about being that character tomorrow, they can be executed.","reminders":["Mad"],"setup":false,"ability":"Each night, choose a player & a good character: they are “mad” they are this character tomorrow, or might be executed."},{"id":"pithag","name":"Pit-Hag","edition":"snv","team":"minion","firstNight":0,"firstNightReminder":"","otherNight":16,"otherNightReminder":"The Pit-Hag points to a player and a character on the sheet. If this character is not in play, wake that player and show them the \'You are\' card and the relevant character token. If the character is in play, nothing happens.","reminders":[],"setup":false,"ability":"Each night*, choose a player & a character they become (if not-in-play). If a Demon is made, deaths tonight are arbitrary."},{"id":"fanggu","name":"Fang Gu","edition":"snv","team":"demon","firstNight":0,"firstNightReminder":"","otherNight":29,"otherNightReminder":"The Fang Gu points to a player. That player dies. Or, if that player was an Outsider and there are no other Fang Gu in play: The Fang Gu dies instead of the chosen player. The chosen player is now an evil Fang Gu. Wake the new Fang Gu. Show the \'You are\' card, then the Fang Gu token. Show the \'You are\' card, then the thumb-down \'evil\' hand sign.","reminders":["Dead","Once"],"setup":true,"ability":"Each night*, choose a player: they die. The 1st Outsider this kills becomes an evil Fang Gu & you die instead. [+1 Outsider]"},{"id":"vigormortis","name":"Vigormortis","edition":"snv","team":"demon","firstNight":0,"firstNightReminder":"","otherNight":32,"otherNightReminder":"The Vigormortis points to a player. That player dies. If a Minion, they keep their ability and one of their Townsfolk neighbours is poisoned.","reminders":["Dead","Has ability","Poisoned"],"setup":true,"ability":"Each night*, choose a player: they die. Minions you kill keep their ability & poison 1 Townsfolk neighbour. [−1 Outsider]"},{"id":"vizier","name":"Vizier","edition":"","team":"minion","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":[],"setup":false,"ability":"All players know who you are. You can not die during the day. If good voted, you may choose to execute immediately."},{"id":"nodashii","name":"No Dashii","edition":"snv","team":"demon","firstNight":0,"firstNightReminder":"","otherNight":30,"otherNightReminder":"The No Dashii points to a player. That player dies.","reminders":["Dead","Poisoned"],"setup":false,"ability":"Each night*, choose a player: they die. Your 2 Townsfolk neighbours are poisoned."},{"id":"vortox","name":"Vortox","edition":"snv","team":"demon","firstNight":0,"firstNightReminder":"","otherNight":31,"otherNightReminder":"The Vortox points to a player. That player dies.","reminders":["Dead"],"setup":false,"ability":"Each night*, choose a player: they die. Townsfolk abilities yield false info. Each day, if no-one is executed, evil wins."},{"id":"barista","name":"Barista","edition":"snv","team":"traveler","firstNight":1,"firstNightReminder":"Choose a player, wake them and tell them which Barista power is affecting them. Treat them accordingly (sober/healthy/true info or activate their ability twice).","otherNight":1,"otherNightReminder":"Choose a player, wake them and tell them which Barista power is affecting them. Treat them accordingly (sober/healthy/true info or activate their ability twice).","reminders":["Sober & Healthy","Ability twice"],"setup":false,"ability":"Each night, until dusk, 1) a player becomes sober, healthy and gets true info, or 2) their ability works twice. They learn which."},{"id":"harlot","name":"Harlot","edition":"snv","team":"traveler","firstNight":0,"firstNightReminder":"","otherNight":1,"otherNightReminder":"The Harlot points at any player. Then, put the Harlot to sleep. Wake the chosen player, show them the \'This character selected you\' token, then the Harlot token. That player either nods their head yes or shakes their head no. If they nodded their head yes, wake the Harlot and show them the chosen player\'s character token. Then, you may decide that both players die.","reminders":["Dead"],"setup":false,"ability":"Each night*, choose a living player: if they agree, you learn their character, but you both might die."},{"id":"butcher","name":"Butcher","edition":"snv","team":"traveler","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":[],"setup":false,"ability":"Each day, after the 1st execution, you may nominate again."},{"id":"bonecollector","name":"Bone Collector","edition":"snv","team":"traveler","firstNight":0,"firstNightReminder":"","otherNight":1,"otherNightReminder":"The Bone Collector either shakes their head no or points at any dead player. If they pointed at any dead player, put the Bone Collector\'s \'Has Ability\' reminder by the chosen player\'s character token. (They may need to be woken tonight to use it.)","reminders":["No ability","Has ability"],"setup":false,"ability":"Once per game, at night, choose a dead player: they regain their ability until dusk."},{"id":"deviant","name":"Deviant","edition":"snv","team":"traveler","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":[],"setup":false,"ability":"If you were funny today, you cannot die by exile."},{"id":"noble","name":"Noble","edition":"","team":"townsfolk","firstNight":44,"firstNightReminder":"Point to 3 players including one evil player, in no particular order.","otherNight":0,"otherNightReminder":"","reminders":["Seen"],"setup":false,"ability":"You start knowing 3 players, 1 and only 1 of which is evil."},{"id":"bountyhunter","name":"Bounty Hunter","edition":"","team":"townsfolk","firstNight":46,"firstNightReminder":"Point to 1 evil player. Wake the townsfolk who is evil and show them the \'You are\' card and the thumbs down evil sign.","otherNight":64,"otherNightReminder":"If the known evil player has died, point to another evil player. ","reminders":["Known"],"setup":true,"ability":"You start knowing 1 evil player. If the player you know dies, you learn another evil player tonight. [1 Townsfolk is evil]"},{"id":"pixie","name":"Pixie","edition":"","team":"townsfolk","firstNight":29,"firstNightReminder":"Show the Pixie 1 in-play Townsfolk character token.","otherNight":0,"otherNightReminder":"","reminders":["Mad","Has ability"],"setup":false,"ability":"You start knowing 1 in-play Townsfolk. If you were mad that you were this character, you gain their ability when they die."},{"id":"plaguedoctor","name":"Plague Doctor","edition":"","team":"outsider","firstNight":0,"firstNightReminder":"","otherNight":42,"otherNightReminder":"If the Plague Doctor died tonight: the Storyteller gains a not-in-play Minion ability.","reminders":["Storyteller Ability"],"setup":false,"ability":"If you die, the Storyteller gains a not-in-play Minion ability."},{"id":"general","name":"General","edition":"","team":"townsfolk","firstNight":50,"firstNightReminder":"Show the General thumbs up for good winning, thumbs down for evil winning or thumb to the side for neither.","otherNight":69,"otherNightReminder":"Show the General thumbs up for good winning, thumbs down for evil winning or thumb to the side for neither.","reminders":[],"setup":false,"ability":"Each night, you learn which alignment the Storyteller believes is winning: good, evil, or neither."},{"id":"preacher","name":"Preacher","edition":"","team":"townsfolk","firstNight":14,"firstNightReminder":"The Preacher chooses a player. If a Minion is chosen, wake the Minion and show the \'This character selected you\' card and then the Preacher token.","otherNight":6,"otherNightReminder":"The Preacher chooses a player. If a Minion is chosen, wake the Minion and show the \'This character selected you\' card and then the Preacher token.","reminders":["At a sermon"],"setup":false,"ability":"Each night, choose a player: a Minion, if chosen, learns this. All chosen Minions have no ability."},{"id":"king","name":"King","edition":"","team":"townsfolk","firstNight":10,"firstNightReminder":"Wake the Demon, show them the \'This character selected you\' card, show the King token and point to the King player.","otherNight":63,"otherNightReminder":"If there are more dead than living, show the King a character token of a living player.","reminders":[],"setup":false,"ability":"Each night, if the dead outnumber the living, you learn 1 alive character. The Demon knows who you are."},{"id":"balloonist","name":"Balloonist","edition":"","team":"townsfolk","firstNight":45,"firstNightReminder":"Choose a character type. Point to a player whose character is of that type. Place the Balloonist\'s Seen reminder next to that character.","otherNight":62,"otherNightReminder":"Choose a character type that does not yet have a Seen reminder next to a character of that type. Point to a player whose character is of that type, if there are any. Place the Balloonist\'s Seen reminder next to that character.","reminders":["Seen Townsfolk","Seen Outsider","Seen Minion","Seen Demon","Seen Traveller"],"setup":true,"ability":"Each night, you learn 1 player of each character type, until there are no more types to learn. [+1 Outsider]"},{"id":"cultleader","name":"Cult Leader","edition":"","team":"townsfolk","firstNight":48,"firstNightReminder":"If the cult leader changed alignment, show them the thumbs up good signal of the thumbs down evil signal accordingly.","otherNight":66,"otherNightReminder":"If the cult leader changed alignment, show them the thumbs up good signal of the thumbs down evil signal accordingly.","reminders":[],"setup":false,"ability":"Each night, you become the alignment of an alive neighbour. If all good players choose to join your cult, your team wins."},{"id":"lycanthrope","name":"Lycanthrope","edition":"","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":22,"otherNightReminder":"The Lycanthrope points to a living player: if good, they die and no one else can die tonight.","reminders":["Dead"],"setup":false,"ability":"Each night*, choose a living player: if good, they die, but they are the only player that can die tonight."},{"id":"amnesiac","name":"Amnesiac","edition":"","team":"townsfolk","firstNight":32,"firstNightReminder":"Decide the Amnesiac\'s entire ability. If the Amnesiac\'s ability causes them to wake tonight: Wake the Amnesiac and run their ability.","otherNight":47,"otherNightReminder":"If the Amnesiac\'s ability causes them to wake tonight: Wake the Amnesiac and run their ability.","reminders":["?"],"setup":false,"ability":"You do not know what your ability is. Each day, privately guess what it is: you learn how accurate you are."},{"id":"nightwatchman","name":"Nightwatchman","edition":"","team":"townsfolk","firstNight":47,"firstNightReminder":"The Nightwatchman may point to a player. Wake that player, show the \'This character selected you\' card and the Nightwatchman token, then point to the Nightwatchman player.","otherNight":65,"otherNightReminder":"The Nightwatchman may point to a player. Wake that player, show the \'This character selected you\' card and the Nightwatchman token, then point to the Nightwatchman player.","reminders":["No ability"],"setup":false,"ability":"Once per game, at night, choose a player: they learn who you are."},{"id":"engineer","name":"Engineer","edition":"","team":"townsfolk","firstNight":13,"firstNightReminder":"The Engineer shows a \'no\' head signal, or points to a Demon or points to the relevant number of Minions. If the Engineer chose characters, replace the Demon or Minions with the choices, then wake the relevant players and show them the You are card and the relevant character tokens.","otherNight":5,"otherNightReminder":"The Engineer shows a \'no\' head signal, or points to a Demon or points to the relevant number of Minions. If the Engineer chose characters, replace the Demon or Minions with the choices, then wake the relevant players and show them the \'You are\' card and the relevant character tokens.","reminders":["No ability"],"setup":false,"ability":"Once per game, at night, choose which Minions or which Demon is in play."},{"id":"fisherman","name":"Fisherman","edition":"","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":["No ability"],"setup":false,"ability":"Once per game, during the day, visit the Storyteller for some advice to help you win."},{"id":"huntsman","name":"Huntsman","edition":"","team":"townsfolk","firstNight":30,"firstNightReminder":"The Huntsman shakes their head \'no\' or points to a player. If they point to the Damsel, wake that player, show the \'You are\' card and a not-in-play character token.","otherNight":45,"otherNightReminder":"The Huntsman shakes their head \'no\' or points to a player. If they point to the Damsel, wake that player, show the \'You are\' card and a not-in-play character token.","reminders":["No ability"],"setup":true,"ability":"Once per game, at night, choose a living player: the Damsel, if chosen, becomes a not-in-play Townsfolk. [+the Damsel]"},{"id":"alchemist","name":"Alchemist","edition":"","team":"townsfolk","firstNight":3,"firstNightReminder":"Show the Alchemist a not-in-play Minion token","otherNight":0,"otherNightReminder":"","reminders":[],"remindersGlobal":["Is the Alchemist"],"setup":false,"ability":"You have a not-in-play Minion ability."},{"id":"farmer","name":"Farmer","edition":"","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":48,"otherNightReminder":"If a Farmer died tonight, choose another good player and make them the Farmer. Wake this player, show them the \'You are\' card and the Farmer character token.","reminders":[],"setup":false,"ability":"If you die at night, an alive good player becomes a Farmer."},{"id":"magician","name":"Magician","edition":"","team":"townsfolk","firstNight":5,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":[],"setup":false,"ability":"The Demon thinks you are a Minion. Minions think you are a Demon."},{"id":"choirboy","name":"Choirboy","edition":"","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":44,"otherNightReminder":"If the King was killed by the Demon, wake the Choirboy and point to the Demon player.","reminders":[],"setup":true,"ability":"If the Demon kills the King, you learn which player is the Demon. [+ the King]"},{"id":"poppygrower","name":"Poppy Grower","edition":"","team":"townsfolk","firstNight":4,"firstNightReminder":"Do not inform the Demon/Minions who each other are","otherNight":3,"otherNightReminder":"If the Poppy Grower has died, show the Minions/Demon who each other are.","reminders":["Evil wakes"],"setup":false,"ability":"Minions & Demons do not know each other. If you die, they learn who each other are that night."},{"id":"atheist","name":"Atheist","edition":"","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":[],"setup":true,"ability":"The Storyteller can break the game rules & if executed, good wins, even if you are dead. [No evil characters]"},{"id":"cannibal","name":"Cannibal","edition":"","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":["Poisoned","Died today"],"setup":false,"ability":"You have the ability of the recently killed executee. If they are evil, you are poisoned until a good player dies by execution."},{"id":"snitch","name":"Snitch","edition":"","team":"outsider","firstNight":7,"firstNightReminder":"After Minion info wake each Minion and show them three not-in-play character tokens. These may be the same or different to each other and the ones shown to the Demon.","otherNight":0,"otherNightReminder":"","reminders":[],"setup":false,"ability":"Minions start knowing 3 not-in-play characters."},{"id":"acrobat","name":"Acrobat","edition":"","team":"outsider","firstNight":0,"firstNightReminder":"","otherNight":39,"otherNightReminder":"If a good living neighbour is drunk or poisoned, the Acrobat player dies.","reminders":["Dead"],"setup":false,"ability":"Each night*, if either good living neighbour is drunk or poisoned, you die."},{"id":"puzzlemaster","name":"Puzzlemaster","edition":"","team":"outsider","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":["Drunk","Guess used"],"setup":false,"ability":"1 player is drunk, even if you die. If you guess (once) who it is, learn the Demon player, but guess wrong & get false info."},{"id":"heretic","name":"Heretic","edition":"","team":"outsider","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":[],"setup":false,"ability":"Whoever wins, loses & whoever loses, wins, even if you are dead."},{"id":"damsel","name":"Damsel","edition":"","team":"outsider","firstNight":31,"firstNightReminder":"Wake all the Minions, show them the \'This character selected you\' card and the Damsel token.","otherNight":46,"otherNightReminder":"If selected by the Huntsman, wake the Damsel, show \'You are\' card and a not-in-play Townsfolk token.","reminders":["Guess used"],"setup":false,"ability":"All Minions know you are in play. If a Minion publicly guesses you (once), your team loses."},{"id":"golem","name":"Golem","edition":"","team":"outsider","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":["Can not nominate"],"setup":false,"ability":"You may only nominate once per game. When you do, if the nominee is not the Demon, they die."},{"id":"politician","name":"Politician","edition":"","team":"outsider","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":[],"setup":false,"ability":"If you were the player most responsible for your team losing, you change alignment & win, even if dead."},{"id":"widow","name":"Widow","edition":"","team":"minion","firstNight":18,"firstNightReminder":"Show the Grimoire to the Widow for as long as they need. The Widow points to a player. That player is poisoned. Wake a good player. Show the \'These characters are in play\' card, then the Widow character token.","otherNight":0,"otherNightReminder":"","reminders":["Poisoned"],"remindersGlobal":["Knows"],"setup":false,"ability":"On your 1st night, look at the Grimoire and choose a player: they are poisoned. 1 good player knows a Widow is in play."},{"id":"fearmonger","name":"Fearmonger","edition":"","team":"minion","firstNight":26,"firstNightReminder":"The Fearmonger points to a player. Place the Fear token next to that player and announce that a new player has been selected with the Fearmonger ability.","otherNight":17,"otherNightReminder":"The Fearmonger points to a player. If different from the previous night, place the Fear token next to that player and announce that a new player has been selected with the Fearmonger ability.","reminders":["Fear"],"setup":false,"ability":"Each night, choose a player. If you nominate & execute them, their team loses. All players know if you choose a new player."},{"id":"psychopath","name":"Psychopath","edition":"","team":"minion","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":[],"setup":false,"ability":"Each day, before nominations, you may publicly choose a player: they die. If executed, you only die if you lose roshambo."},{"id":"goblin","name":"Goblin","edition":"","team":"minion","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":["Claimed"],"setup":false,"ability":"If you publicly claim to be the Goblin when nominated & are executed that day, your team wins."},{"id":"mephit","name":"Mephit","edition":"","team":"minion","firstNight":27,"firstNightReminder":"Show the Mephit their secret word.","otherNight":18,"otherNightReminder":"Wake the 1st good player that said the Mephit\'s secret word and show them the \'You are\' card and the thumbs down evil signal.","reminders":["Turns evil","No ability"],"setup":false,"ability":"You start knowing a secret word. The 1st good player to say this word becomes evil that night."},{"id":"mezepheles","name":"Mezepheles","edition":"","team":"minion","firstNight":27,"firstNightReminder":"Show the Mezepheles their secret word.","otherNight":18,"otherNightReminder":"Wake the 1st good player that said the Mezepheles\' secret word and show them the \'You are\' card and the thumbs down evil signal.","reminders":["Turns evil","No ability"],"setup":false,"ability":"You start knowing a secret word. The 1st good player to say this word becomes evil that night."},{"id":"marionette","name":"Marionette","edition":"","team":"minion","firstNight":12,"firstNightReminder":"Select one of the good players next to the Demon and place the Is the Marionette reminder token. Wake the Demon and show them the Marionette.","otherNight":0,"otherNightReminder":"","reminders":[],"remindersGlobal":["Is the Marionette"],"setup":true,"ability":"You think you are a good character but you are not. The Demon knows who you are. [You neighbour the Demon]"},{"id":"boomdandy","name":"Boomdandy","edition":"","team":"minion","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":[],"setup":false,"ability":"If you are executed, all but 3 players die. 1 minute later, the player with the most players pointing at them dies."},{"id":"organgrinder","name":"Organ Grinder","edition":"","team":"minion","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":["About to die"],"setup":false,"ability":"All players keep their eyes closed when voting & the vote tally is secret. Votes for you only count if you vote."},{"id":"lilmonsta","name":"Lil\' Monsta","edition":"","team":"demon","firstNight":15,"firstNightReminder":"Wake all Minions together, allow them to vote by pointing at who they want to babysit Lil\' Monsta.","otherNight":35,"otherNightReminder":"Wake all Minions together, allow them to vote by pointing at who they want to babysit Lil\' Monsta. Choose a player, that player dies.","reminders":[],"remindersGlobal":["Is the Demon","Dead"],"setup":true,"ability":"Each night, Minions choose who babysits Lil\' Monsta\'s token & \\"is the Demon\\". A player dies each night*. [+1 Minion]"},{"id":"lleech","name":"Lleech","edition":"","team":"demon","firstNight":16,"firstNightReminder":"The Lleech points to a player. Place the Poisoned reminder token.","otherNight":34,"otherNightReminder":"The Lleech points to a player. That player dies.","reminders":["Dead","Poisoned"],"setup":false,"ability":"Each night*, choose a player: they die. You start by choosing an alive player: they are poisoned - you die if & only if they die."},{"id":"alhadikhia","name":"Al-Hadikhia","edition":"","team":"demon","firstNight":0,"firstNightReminder":"","otherNight":33,"otherNightReminder":"The Al-Hadikhia chooses 3 players. Announce the first player, wake them to nod yes to live or shake head no to die, kill or resurrect accordingly, then put to sleep and announce the next player. If all 3 are alive after this, all 3 die.","reminders":["1","2","3","Chose death","Chose life"],"setup":false,"ability":"Each night*, choose 3 players (all players learn who): each silently chooses to live or die, but if all live, all die."},{"id":"legion","name":"Legion","edition":"","team":"demon","firstNight":0,"firstNightReminder":"","otherNight":23,"otherNightReminder":"Choose a player, that player dies.","reminders":["Dead","About to die"],"setup":true,"ability":"Each night*, a player might die. Executions fail if only evil voted. You register as a Minion too. [Most players are Legion]"},{"id":"leviathan","name":"Leviathan","edition":"","team":"demon","firstNight":54,"firstNightReminder":"Place the Leviathan \'Day 1\' marker. Announce \'The Leviathan is in play; this is Day 1.\'","otherNight":73,"otherNightReminder":"Change the Leviathan Day reminder for the next day.","reminders":["Day 1","Day 2","Day 3","Day 4","Day 5","Good player executed"],"setup":false,"ability":"If more than 1 good player is executed, you win. All players know you are in play. After day 5, evil wins."},{"id":"riot","name":"Riot","edition":"","team":"demon","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":[],"setup":true,"ability":"Nominees die, but may nominate again immediately (on day 3, they must). After day 3, evil wins. [All Minions are Riot]"},{"id":"gangster","name":"Gangster","edition":"","team":"traveler","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":[],"setup":false,"ability":"Once per day, you may choose to kill an alive neighbour, if your other alive neighbour agrees."}]')
    },
    b223: function (e, t, i) {
        e.exports = i.p + "img/mayor.0b765477.png"
    },
    b249: function (e) {
        e.exports = JSON.parse('[{"id":"doomsayer","firstNightReminder":"","otherNightReminder":"","reminders":[],"setup":false,"name":"Doomsayer","team":"fabled","ability":"If 4 or more players live, each living player may publicly choose (once per game) that a player of their own alignment dies."},{"id":"angel","firstNightReminder":"","otherNightReminder":"","reminders":["Protect","Something Bad"],"setup":false,"name":"Angel","team":"fabled","ability":"Something bad might happen to whoever is most responsible for the death of a new player."},{"id":"buddhist","firstNightReminder":"","otherNightReminder":"","reminders":[],"setup":false,"name":"Buddhist","team":"fabled","ability":"For the first 2 minutes of each day, veteran players may not talk."},{"id":"hellslibrarian","firstNightReminder":"","otherNightReminder":"","reminders":["Something Bad"],"setup":false,"name":"Hell\'s Librarian","team":"fabled","ability":"Something bad might happen to whoever talks when the Storyteller has asked for silence."},{"id":"revolutionary","firstNightReminder":"","otherNightReminder":"","reminders":["Used"],"setup":false,"name":"Revolutionary","team":"fabled","ability":"2 neighboring players are known to be the same alignment. Once per game, one of them registers falsely."},{"id":"fiddler","firstNightReminder":"","otherNightReminder":"","reminders":[],"setup":false,"name":"Fiddler","team":"fabled","ability":"Once per game, the Demon secretly chooses an opposing player: all players choose which of these 2 players win."},{"id":"toymaker","firstNightReminder":"","otherNight":1,"otherNightReminder":"If it is a night when a Demon attack could end the game, and the Demon is marked “Final night: No Attack,” then the Demon does not act tonight. (Do not wake them.)","reminders":["Final Night: No Attack"],"setup":false,"name":"Toymaker","team":"fabled","ability":"The Demon may choose not to attack & must do this at least once per game. Evil players get normal starting info."},{"id":"fibbin","firstNightReminder":"","otherNightReminder":"","reminders":["Used"],"setup":false,"name":"Fibbin","team":"fabled","ability":"Once per game, 1 good player might get false information."},{"id":"duchess","firstNightReminder":"","otherNight":1,"otherNightReminder":"Wake each player marked “Visitor” or “False Info” one at a time. Show them the Duchess token, then fingers (1, 2, 3) equaling the number of evil players marked “Visitor” or, if you are waking the player marked “False Info,” show them any number of fingers except the number of evil players marked “Visitor.”","reminders":["Visitor","False Info"],"setup":false,"name":"Duchess","team":"fabled","ability":"Each day, 3 players may choose to visit you. At night*, each visitor learns how many visitors are evil, but 1 gets false info."},{"id":"sentinel","firstNightReminder":"","otherNightReminder":"","reminders":[],"setup":true,"name":"Sentinel","team":"fabled","ability":"There might be 1 extra or 1 fewer Outsider in play."},{"id":"spiritofivory","firstNightReminder":"","otherNightReminder":"","reminders":["No extra evil"],"setup":false,"name":"Spirit of Ivory","team":"fabled","ability":"There can\'t be more than 1 extra evil player."},{"id":"djinn","firstNight":0,"firstNightReminder":"","otherNightReminder":"","reminders":[],"setup":false,"name":"Djinn","team":"fabled","ability":"Use the Djinn\'s special rule. All players know what it is."},{"id":"stormcatcher","firstNight":1,"firstNightReminder":"Mark a good player as \\"Safe\\". Wake each evil player and show them the marked player.","otherNightReminder":"","reminders":["Safe"],"setup":false,"name":"Storm Catcher","team":"fabled","ability":"Name a good character. If in play, they can only die by execution, but evil players learn which player it is."},{"id":"deusexfiasco","firstNightReminder":"","otherNightReminder":"","reminders":["Whoops"],"setup":false,"name":"Deus ex Fiasco","team":"fabled","ability":"Once per game, the Storyteller will make a \\"mistake\\", correct it and publicly admit to it."}]')
    },
    b30c: function (e, t, i) {
        e.exports = i.p + "img/professor.03453fa9.png"
    },
    b3d7: function (e, t, i) {
        e.exports = i.p + "img/organgrinder.1311fb8b.png"
    },
    b570: function (e, t, i) {
        e.exports = i.p + "img/investigator.a271bb3e.png"
    },
    b6d8: function (e, t, i) {
        "use strict";
        i("e455")
    },
    b7e8: function (e, t, i) {
        e.exports = i.p + "img/snitch.7806bf67.png"
    },
    ba9b: function (e, t, i) {
        e.exports = i.p + "img/tealady.4ee7d977.png"
    },
    bb7a: function (e, t, i) {
        e.exports = i.p + "img/empath.797679aa.png"
    },
    bd73: function (e, t, i) { },
    bfe2: function (e, t, i) {
        e.exports = i.p + "img/angel.eb4f8304.png"
    },
    c0b6: function (e, t, i) { },
    c24f: function (e, t, i) {
        e.exports = i.p + "img/evil.92eb9f6f.png"
    },
    c316: function (e, t, i) {
        e.exports = i.p + "img/lycanthrope.bafb571d.png"
    },
    c492: function (e, t, i) {
        e.exports = i.p + "img/lilmonsta.0a6a2da5.png"
    },
    c5bf: function (e, t, i) {
        "use strict";
        i("bd73")
    },
    c5db: function (e, t, i) {
        e.exports = i.p + "img/fisherman.95d49bb4.png"
    },
    c73a: function (e, t, i) {
        e.exports = i.p + "img/po.9e129519.png"
    },
    c7b7: function (e, t, i) {
        e.exports = i.p + "img/mezepheles.306b51a2.png"
    },
    c825: function (e) {
        e.exports = JSON.parse('[{"id":"Chambermaid","hatred":[{"id":"Mathematician","reason":"The Chambermaid learns if the Mathematician wakes tonight or not, even though the Chambermaid wakes first."}]},{"id":"Butler","hatred":[{"id":"Cannibal","reason":"If the Cannibal gains the Butler ability, the Cannibal learns this."}]},{"id":"Lunatic","hatred":[{"id":"Mathematician","reason":"The Mathematician learns if the Lunatic attacks a different player(s) than the real Demon attacked."}]},{"id":"Pit-Hag","hatred":[{"id":"Heretic","reason":"A Pit-Hag can not create a Heretic. "},{"id":"Damsel","reason":"If a Pit-Hag creates a Damsel, the Storyteller chooses which player it is."},{"id":"Politician","reason":"A Pit-hag can not create an evil Politician."}]},{"id":"Cerenovus","hatred":[{"id":"Goblin","reason":"The Cerenovus may choose to make a player mad that they are the Goblin."}]},{"id":"Leviathan","hatred":[{"id":"Soldier","reason":"If Leviathan nominates and executes the Soldier, the Soldier does not die."},{"id":"Monk","reason":"If Leviathan nominates and executes the player the Monk chose, that player does not die."},{"id":"Innkeeper","reason":"If Leviathan nominates and executes a player the Innkeeper chose, that player does not die."},{"id":"Ravenkeeper","reason":"If Leviathan is in play & the Ravenkeeper dies by execution, they wake that night to use their ability."},{"id":"Sage","reason":"If Leviathan is in play & the Sage dies by execution, they wake that night to use their ability."},{"id":"Farmer","reason":"If Leviathan is in play & a Farmer dies by execution, a good player becomes a Farmer that night."},{"id":"Mayor","reason":"If Leviathan is in play & no execution occurs on day 5, good wins."}]},{"id":"Al-Hadikhia","hatred":[{"id":"Scarlet Woman","reason":"If there are two living Al-Hadikhias, the Scarlet Woman Al-Hadikhia becomes the Scarlet Woman again."},{"id":"Mastermind","reason":"Only 1 jinxed character can be in play. Evil players start knowing which player and character it is."}]},{"id":"Lil\' Monsta","hatred":[{"id":"Poppy Grower","reason":"If the Poppy Grower is in play, Minions don\'t wake together. They are woken one by one, until one of them chooses to take the Lil\' Monsta token."},{"id":"Magician","reason":"Only 1 jinxed character can be in play. "},{"id":"Scarlet Woman","reason":"If there are 5 or more players alive and the player holding the Lil\' Monsta token dies, the Scarlet Woman is given the Lil\' Monsta token tonight."}]},{"id":"Lycanthrope","hatred":[{"id":"Gambler","reason":"If the Lycanthrope is alive and the Gambler kills themself at night, no other players can die tonight."}]},{"id":"Legion","hatred":[{"id":"Engineer","reason":"Legion and the Engineer can not both be in play at the start of the game. If the Engineer creates Legion, most players (including all evil players) become evil Legion."},{"id":"Preacher","reason":"Only 1 jinxed character can be in play."}]},{"id":"Fang Gu","hatred":[{"id":"Scarlet Woman","reason":"If the Fang Gu chooses an Outsider and dies, the Scarlet Woman does not become the Fang Gu."}]},{"id":"Spy","hatred":[{"id":"Magician","reason":"When the Spy sees the Grimoire, the Demon and Magician\'s character tokens are removed."},{"id":"Alchemist","reason":"The Alchemist can not have the Spy ability."},{"id":"Poppy Grower","reason":"If the Poppy Grower is in play, the Spy does not see the Grimoire until the Poppy Grower dies."},{"id":"Damsel","reason":"Only 1 jinxed character can be in play. "},{"id":"Heretic","reason":"Only 1 jinxed character can be in play."}]},{"id":"Widow","hatred":[{"id":"Magician","reason":"When the Widow sees the Grimoire, the Demon and Magician\'s character tokens are removed."},{"id":"Poppy Grower","reason":"If the Poppy Grower is in play, the Widow does not see the Grimoire until the Poppy Grower dies."},{"id":"Alchemist","reason":"The Alchemist can not have the Widow ability."},{"id":"Damsel","reason":"Only 1 jinxed character can be in play."},{"id":"Heretic","reason":"Only 1 jinxed character can be in play."}]},{"id":"Godfather","hatred":[{"id":"Heretic","reason":"Only 1 jinxed character can be in play."}]},{"id":"Baron","hatred":[{"id":"Heretic","reason":"The Baron might only add 1 Outsider, not 2."}]},{"id":"Marionette","hatred":[{"id":"Lil\' Monsta","reason":"The Marionette neighbors a Minion, not the Demon. The Marionette is not woken to choose who takes the Lil\' Monsta token."},{"id":"Poppy Grower","reason":"When the Poppy Grower dies, the Demon learns the Marionette but the Marionette learns nothing."},{"id":"Snitch","reason":"The Marionette does not learn 3 not in-play characters. The Demon learns an extra 3 instead."},{"id":"Balloonist","reason":"If the Marionette thinks that they are the Balloonist, +1 Outsider was added."},{"id":"Damsel","reason":"The Marionette does not learn that a Damsel is in play."},{"id":"Huntsman","reason":"If the Marionette thinks that they are the Huntsman, the Damsel was added."}]},{"id":"Riot","hatred":[{"id":"Engineer","reason":"Riot and the Engineer can not both be in play at the start of the game. \\nIf the Engineer creates Riot, the evil players become Riot."},{"id":"Golem","reason":"If The Golem nominates Riot, the Riot player does not die."},{"id":"Snitch","reason":"If the Snitch is in play, each Riot player gets an extra 3 bluffs."},{"id":"Saint","reason":"If a good player nominates and kills the Saint, the Saint\'s team loses."},{"id":"Butler","reason":"The Butler can not nominate their master."},{"id":"Pit-Hag","reason":"If the Pit-Hag creates Riot, all evil players become Riot. \\nIf the Pit-Hag creates Riot after day 3, the game continues for one more day."},{"id":"Mayor","reason":"If the 3rd day begins with just three players alive, the players may choose (as a group) not to nominate at all. If so (and a Mayor is alive) then the Mayor\'s team wins."},{"id":"Monk","reason":"If a Riot player nominates and kills the Monk-protected-player, the Monk-protected-player does not die."},{"id":"Farmer","reason":"If a Riot player nominates and kills a Farmer, the Farmer uses their ability tonight."},{"id":"Innkeeper","reason":"If a Riot player nominates an Innkeeper-protected-player, the Innkeeper-protected-player does not die."},{"id":"Sage","reason":"If a Riot player nominates and kills a Sage, the Sage uses their ability tonight."},{"id":"Ravenkeeper","reason":"If a Riot player nominates and kills the Ravenkeeper, the Ravenkeeper uses their ability tonight."},{"id":"Soldier","reason":"If a Riot player nominates the Soldier, the Soldier does not die."},{"id":"Grandmother","reason":"If a Riot player nominates and kills the Grandchild, the Grandmother dies too."},{"id":"King","reason":"If a Riot player nominates and kills the King and the Choirboy is alive, the Choirboy uses their ability tonight."},{"id":"Exorcist","reason":"Only 1 jinxed character can be in play."},{"id":"Minstrel","reason":"Only 1 jinxed character can be in play."},{"id":"Flowergirl","reason":"Only 1 jinxed character can be in play."},{"id":"Undertaker","reason":"Players that die by nomination register as being executed to the Undertaker."},{"id":"Cannibal","reason":"Players that die by nomination register as being executed to the Cannibal."},{"id":"Pacifist","reason":"Players that die by nomination register as being executed to the Pacifist."},{"id":"Devil\'s Advocate","reason":"Players that die by nomination register as being executed to the Devil\'s Advocate."},{"id":"Investigator","reason":"Riot registers as a Minion to the Investigator."},{"id":"Clockmaker","reason":"Riot registers as a Minion to the Clockmaker."},{"id":"Town Crier","reason":"Riot registers as a Minion to the Town Crier."},{"id":"Damsel","reason":"Riot registers as a Minion to the Damsel."},{"id":"Preacher","reason":"Riot registers as a Minion to the Preacher."}]},{"id":"Lleech","hatred":[{"id":"Mastermind","reason":"If the Mastermind is alive and the Lleech\'s host dies by execution, the Lleech lives but loses their ability. "},{"id":"Slayer","reason":"If the Slayer slays the Lleech\'s host, the host dies. "},{"id":"Heretic","reason":"If the Lleech has poisoned the Heretic then the Lleech dies, the Heretic remains poisoned."}]},{"id":"Organ Grinder","hatred":[{"id":"Butler","reason":"If the Organ Grinder is causing eyes closed voting, the Butler may raise their hand to vote but their vote is only counted if their master voted too."},{"id":"Flowergirl","reason":"If players\' eyes were closed during the nominations, the Flowergirl learns how many times the Demon voted."},{"id":"Lil\' Monsta","reason":"Votes for the Organ Grinder count if the Organ Grinder is babysitting Lil\' Monsta."},{"id":"Minstrel","reason":"Only 1 jinxed character can be in play."},{"id":"Preacher","reason":"Only 1 jinxed character can be in play."}]},{"id":"Vizier","hatred":[{"id":"Alchemist","reason":"If the Alchemist has the Vizier ability, they may only choose to execute immediately if three or more players voted."},{"id":"Courtier","reason":"If the Vizier loses their ability, they learn this and if the Vizier is executed while they have their ability, their team wins."},{"id":"Investigator","reason":"If the Investigator learns that the Vizier is in play, the existence of the Vizier is not announced by the Storyteller."},{"id":"Magician","reason":"Only 1 jinxed character can be in play."},{"id":"Preacher","reason":"If the Vizier loses their ability, they learn this and if the Vizier is executed while they have their ability, their team wins."},{"id":"Fearmonger","reason":"The Vizier wakes with the Fearmonger, learns who they choose and cannot choose to execute that player."}]}]')
    },
    c9f5: function (e, t, i) {
        e.exports = i.p + "img/grandmother.f634b548.png"
    },
    ca7a: function (e, t, i) {
        e.exports = i.p + "img/atheist.c56cbd56.png"
    },
    cadc: function (e, t, i) {
        e.exports = i.p + "img/gossip.9a1a82e6.png"
    },
    cae1: function (e, t, i) {
        e.exports = i.p + "img/bmr-demon.85d8c3ec.png"
    },
    cd8b: function (e, t, i) {
        e.exports = i.p + "img/devilsadvocate.f56ba1b8.png"
    },
    ce23: function (e, t, i) {
        var o = {
            "./bmr-demon.png": "cae1",
            "./bmr-minion.png": "28bf",
            "./bmr-outsider.png": "e898",
            "./bmr-townsfolk.png": "e988",
            "./bmr.png": "7496",
            "./custom.png": "441d",
            "./luf.png": "92d8",
            "./snv-demon.png": "f347",
            "./snv-minion.png": "451a",
            "./snv-outsider.png": "4dd9",
            "./snv-townsfolk.png": "ed00",
            "./snv.png": "2fd0",
            "./tb-demon.png": "a3b0",
            "./tb-minion.png": "5f4e",
            "./tb-outsider.png": "73a1",
            "./tb-townsfolk.png": "f7a3",
            "./tb.png": "0aaa"
        };
        function s(e) {
            var t = a(e);
            return i(t)
        }
        function a(e) {
            if (!i.o(o, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND",
                t
            }
            return o[e]
        }
        s.keys = function () {
            return Object.keys(o)
        }
            ,
            s.resolve = a,
            e.exports = s,
            s.id = "ce23"
    },
    cfcc: function (e, t, i) {
        e.exports = i.p + "img/beggar.1bd5bd9b.png"
    },
    d4b2: function (e, t, i) { },
    d62b: function (e, t, i) {
        e.exports = i.p + "img/slayer.64aec593.png"
    },
    d69f: function (e, t, i) {
        e.exports = i.p + "img/fearmonger.87865300.png"
    },
    d6bc: function (e, t, i) {
        e.exports = i.p + "img/choirboy.ca7ce535.png"
    },
    d6ce: function (e, t, i) { },
    d715: function (e, t, i) {
        e.exports = i.p + "img/savant.3723c580.png"
    },
    d97d: function (e, t, i) {
        e.exports = i.p + "img/drunk.b9aca105.png"
    },
    da81: function (e, t, i) {
        e.exports = i.p + "img/legion.242a9b50.png"
    },
    dbe8: function (e, t, i) {
        e.exports = i.p + "img/alchemist.840063ca.png"
    },
    dce6: function (e, t, i) {
        e.exports = i.p + "img/gambler.75fdb65e.png"
    },
    dd41: function (e, t, i) {
        e.exports = i.p + "img/gstone.f634b548.png"
    },
    df5e: function (e, t, i) {
        e.exports = i.p + "img/mephit.306b51a2.png"
    },
    dfb1: function (e, t) {
        e.exports = e => {
            const t = e => document.title = "Blood on the Clocktower " + (e ? "Town Square" : "Grimoire");
            if (localStorage.getItem("background") && e.commit("setBackground", localStorage.background),
                localStorage.getItem("muted") && e.commit("toggleMuted", !0),
                localStorage.getItem("static") && e.commit("toggleStatic", !0),
                localStorage.getItem("imageOptIn") && e.commit("toggleImageOptIn", !0),
                localStorage.getItem("zoom") && e.commit("setZoom", parseFloat(localStorage.getItem("zoom"))),
                localStorage.getItem("isGrimoire") && (e.commit("toggleGrimoire", !1),
                    t(!1)),
                void 0 !== localStorage.roles && (e.commit("setCustomRoles", JSON.parse(localStorage.roles)),
                    e.commit("setEdition", {
                        id: "custom"
                    })),
                void 0 !== localStorage.edition && e.commit("setEdition", JSON.parse(localStorage.edition)),
                void 0 !== localStorage.bluffs && JSON.parse(localStorage.bluffs).forEach((t, i) => {
                    e.commit("players/setBluff", {
                        index: i,
                        role: e.state.roles.get(t) || {}
                    })
                }
                ),
                void 0 !== localStorage.fabled && e.commit("players/setFabled", {
                    fabled: JSON.parse(localStorage.fabled).map(t => e.state.fabled.get(t.id) || t)
                }),
                localStorage.players && e.commit("players/set", JSON.parse(localStorage.players).map(t => ({
                    ...t,
                    role: e.state.roles.get(t.role) || e.getters.rolesJSONbyId.get(t.role) || {}
                }))),
                localStorage.getItem("playerId") && e.commit("session/setPlayerId", localStorage.getItem("playerId")),
                localStorage.getItem("session") && !window.location.hash.substr(1)) {
                const [t, i] = JSON.parse(localStorage.getItem("session"));
                e.commit("session/setSpectator", t),
                    e.commit("session/setSessionId", i)
            }
            e.subscribe(({ type: e, payload: i }, o) => {
                switch (e) {
                    case "toggleGrimoire":
                        o.grimoire.isPublic ? localStorage.removeItem("isGrimoire") : localStorage.setItem("isGrimoire", 1),
                            t(o.grimoire.isPublic);
                        break;
                    case "setBackground":
                        i ? localStorage.setItem("background", i) : localStorage.removeItem("background");
                        break;
                    case "toggleMuted":
                        o.grimoire.isMuted ? localStorage.setItem("muted", 1) : localStorage.removeItem("muted");
                        break;
                    case "toggleStatic":
                        o.grimoire.isStatic ? localStorage.setItem("static", 1) : localStorage.removeItem("static");
                        break;
                    case "toggleImageOptIn":
                        o.grimoire.isImageOptIn ? localStorage.setItem("imageOptIn", 1) : localStorage.removeItem("imageOptIn");
                        break;
                    case "setZoom":
                        0 !== i ? localStorage.setItem("zoom", i) : localStorage.removeItem("zoom");
                        break;
                    case "setEdition":
                        localStorage.setItem("edition", JSON.stringify(i)),
                            o.edition.isOfficial && localStorage.removeItem("roles");
                        break;
                    case "setCustomRoles":
                        i.length ? localStorage.setItem("roles", JSON.stringify(i)) : localStorage.removeItem("roles");
                        break;
                    case "players/setBluff":
                        localStorage.setItem("bluffs", JSON.stringify(o.players.bluffs.map(({ id: e }) => e)));
                        break;
                    case "players/setFabled":
                        localStorage.setItem("fabled", JSON.stringify(o.players.fabled.map(e => e.isCustom ? e : {
                            id: e.id
                        })));
                        break;
                    case "players/add":
                    case "players/update":
                    case "players/remove":
                    case "players/clear":
                    case "players/set":
                    case "players/swap":
                    case "players/move":
                        o.players.players.length ? localStorage.setItem("players", JSON.stringify(o.players.players.map(e => ({
                            ...e,
                            role: e.role.id || {}
                        })))) : localStorage.removeItem("players");
                        break;
                    case "session/setSessionId":
                        i ? localStorage.setItem("session", JSON.stringify([o.session.isSpectator, i])) : localStorage.removeItem("session");
                        break;
                    case "session/setPlayerId":
                        i ? localStorage.setItem("playerId", i) : localStorage.removeItem("playerId");
                        break
                }
            }
            )
        }
    },
    e014: function (e, t, i) {
        e.exports = i.p + "img/eviltwin.697ba2e2.png"
    },
    e222: function (e, t, i) {
        e.exports = i.p + "img/djinn.68f1611b.png"
    },
    e455: function (e, t, i) { },
    e484: function (e, t, i) {
        "use strict";
        i("2f37")
    },
    e69f: function (e, t, i) {
        e.exports = i.p + "img/marionette.c3121487.png"
    },
    e898: function (e, t, i) {
        e.exports = i.p + "img/bmr-outsider.a1018bf7.png"
    },
    e988: function (e, t, i) {
        e.exports = i.p + "img/bmr-townsfolk.5bf61c92.png"
    },
    ea17: function (e, t, i) {
        e.exports = i.p + "img/engineer.31903b46.png"
    },
    eb35: function (e, t, i) {
        "use strict";
        i("d6ce")
    },
    ebea: function (e, t, i) { },
    ec1e: function (e, t, i) {
        e.exports = i.p + "img/spy.38a0a62b.png"
    },
    ed00: function (e, t, i) {
        e.exports = i.p + "img/snv-townsfolk.5bf61c92.png"
    },
    ee02: function (e, t, i) {
        e.exports = i.p + "img/courtier.9b034b79.png"
    },
    ee92: function (e, t, i) {
        e.exports = i.p + "img/gunslinger.f15caca7.png"
    },
    eff4: function (e, t, i) {
        e.exports = i.p + "img/virgin.c7ff9059.png"
    },
    f09b: function (e, t, i) {
        e.exports = i.p + "img/judge.90d392cf.png"
    },
    f1e5: function (e, t, i) {
        e.exports = i.p + "img/sweetheart.e253b31e.png"
    },
    f282: function (e, t, i) {
        e.exports = i.p + "img/poisoner.7a67da08.png"
    },
    f322: function (e, t, i) {
        e.exports = i.p + "img/scarletwoman.6fd7f180.png"
    },
    f344: function (e, t, i) { },
    f347: function (e, t, i) {
        e.exports = i.p + "img/snv-demon.85d8c3ec.png"
    },
    f4bd: function (e, t, i) {
        e.exports = i.p + "img/vigormortis.1f1b230f.png"
    },
    f558: function (e, t, i) {
        e.exports = i.p + "img/witch.11f6d426.png"
    },
    f6a8: function (e, t, i) {
        e.exports = i.p + "media/countdown.1462f20c.mp3"
    },
    f7a3: function (e, t, i) {
        e.exports = i.p + "img/tb-townsfolk.5bf61c92.png"
    },
    f7d3: function (e, t, i) {
        e.exports = i.p + "img/noble.e494eec4.png"
    },
    f834: function (e, t, i) {
        e.exports = i.p + "img/mastermind.c05f4a71.png"
    },
    f93f: function (e, t, i) {
        e.exports = i.p + "img/clockmaker.8fb03f70.png"
    },
    fcc6: function (e, t, i) {
        e.exports = i.p + "img/barber.9231782b.png"
    },
    fcdb: function (e, t, i) {
        e.exports = i.p + "img/psychopath.b3538818.png"
    },
    fd83: function (e, t, i) {
        e.exports = i.p + "img/custom.b25648d4.png"
    },
    ff40: function (e, t, i) {
        "use strict";
        i("2294")
    },
    fff1: function (e, t, i) {
        e.exports = i.p + "img/pacifist.27219b06.png"
    }
});
//# sourceMappingURL=app.f59337bc.js.map