import type { GenreFamily } from './types'

// Subgenres, descriptions and Apple Music previews (checked 10.10.2026).
export const techno: GenreFamily = {
  slug: "techno",
  leaderboardId: "techno",
  theme: "techno",
  title: "Techno",
  brand: "TECHNO",
  cardName: "TECHNO",
  bpm: "~130 BPM",
  word: { de: "Genre", en: "genre" },
  extraRule: {
    icon: "🔊",
    text: {
      de: "Achtung: Gabber, Speedcore und Co. sind laut und schnell – dreh die Lautstärke vorher etwas runter.",
      en: "Heads up: gabber, speedcore and co. are loud and fast – turn the volume down a little first.",
    },
  },
  subgenres: {
    acid: {
      name: { de: "Acid Techno", en: "Acid Techno" },
      desc: {
        de: "Im Zentrum steht die quietschende, sich windende Basslinie der Roland TB-303: Der Filter wird ständig auf- und zugedreht, dadurch »blubbert« und kreischt sie. Dazu treibende 4/4-Kicks, etwa 130–150 BPM.",
        en: "Built around the squelching, twisting bassline of the Roland TB-303: the filter is constantly opened and closed, making it bubble and scream. Driving 4/4 kicks, around 130–150 BPM.",
      },
      trait: { de: "Quietschende, blubbernde 303-Bassline", en: "A squelching, bubbling 303 bassline" },
      tip: {
        de: "Achte auf den Bass: Er blubbert, quietscht und windet sich, weil der Filter ständig auf- und zugedreht wird. Das ist die 303 – Acid Techno.",
        en: "Listen to the bass: it bubbles, squeals and twists because the filter is constantly opened and closed. That's the 303 – acid techno.",
      },
      confusable: ["detroit", "schranz"],
      tracks: [
        { appleId: 286769112, artist: "Hardfloor", title: "Acperience 1", previewPath: "AudioPreview211/v4/b6/ab/29/b6ab2960-b400-0a61-5e92-d254242fa807/mzaf_9924453691037160278.plus.aac.p.m4a" },
        { appleId: 1437597408, artist: "Josh Wink", title: "Higher State of Consciousness (Dirty South & TV Rock Radio Edit)", previewPath: "AudioPreview116/v4/90/9c/90/909c905d-4d0b-ac3a-bda4-ec98abb316dd/mzaf_17279896093978417271.plus.aac.p.m4a", start: 3 },
        { appleId: 409359822, artist: "Emmanuel Top", title: "Acid Phase", previewPath: "AudioPreview211/v4/94/80/4e/94804eb4-391e-4c69-85ca-3dc4dd16aa67/mzaf_16091894385033363985.plus.aac.p.m4a", start: 18 },
        { appleId: 1575034512, artist: "Regal", title: "Acid Is the Answer (Dub Mix)", previewPath: "AudioPreview221/v4/93/5b/7a/935b7ad9-07f6-04e8-e652-409e9b940c1d/mzaf_3576611829451187551.plus.aac.p.m4a", start: 0 },
        { appleId: 164881534, artist: "Hardfloor", title: "Funalogue", previewPath: "AudioPreview125/v4/42/0e/f9/420ef976-381a-59dd-d2d8-29ae400df890/mzaf_17203987656880354107.plus.aac.p.m4a", start: 18 },
        { appleId: 1822395919, artist: "Josh Wink", title: "Don't Laugh", previewPath: "AudioPreview221/v4/19/28/a1/1928a1af-37e5-e85a-fd19-9b806a756a1d/mzaf_11612604587129035947.plus.aac.p.m4a", start: 0 },
      ],
    },
    detroit: {
      name: { de: "Detroit Techno", en: "Detroit Techno" },
      desc: {
        de: "Der Ursprung des Techno (Detroit, Mitte der 80er): warme, futuristische Synth-Flächen und Strings, Funk- und Soul-Gefühl, Drumcomputer-Beats um 120–135 BPM. Klingt melancholisch und hoffnungsvoll zugleich.",
        en: "Where techno began (Detroit, mid-80s): warm, futuristic synth pads and strings, a funk and soul feel, drum-machine beats around 120–135 BPM. Melancholic and hopeful at the same time.",
      },
      trait: { de: "Warme Synth-Flächen und Strings über Drumcomputer-Beats", en: "Warm synth pads and strings over drum machine beats" },
      tip: {
        de: "Achte auf die Flächen: Strings oder Synths über einem funkigen Drumcomputer-Beat, der nach „Retro-Zukunft“ klingt. Das ist Detroit Techno.",
        en: "Listen to the pads: strings or synths over a funky drum machine beat that sounds like a retro future. That's Detroit techno.",
      },
      confusable: ["dub", "progressive", "acid"],
      tracks: [
        { appleId: 598481975, artist: "Jeff Mills", title: "The Bells", previewPath: "AudioPreview221/v4/b4/fa/49/b4fa4996-cfac-2963-c8e8-1b9407d761c9/mzaf_16317093109182960379.plus.aac.p.m4a", start: 0 },
        { appleId: 1678920667, artist: "Derrick May, Mayday & Rhythim Is Rhythim", title: "Nude Photo", previewPath: "AudioPreview116/v4/0d/52/72/0d527211-bb0a-0f7f-a816-93711ede4835/mzaf_11845064249147890315.plus.aac.p.m4a", start: 14 },
        { appleId: 1458614961, artist: "Rhythim Is Rhythim", title: "It Is What It Is (Mixed)", previewPath: "AudioPreview125/v4/60/45/eb/6045eb28-c438-711a-faef-5c4b41f6db57/mzaf_5095643392242892733.plus.aac.p.m4a", start: 9 },
        { appleId: 1340601677, artist: "The Aztec Mystic", title: "Knights of Jaguar", previewPath: "AudioPreview125/v4/d4/30/8d/d4308db8-4fd8-6fb8-2b4c-1a04a422c939/mzaf_16151118829243236528.plus.aac.p.m4a", start: 0 },
        { appleId: 283983759, artist: "Los Hermanos", title: "Quetzel", previewPath: "AudioPreview211/v4/55/0d/4e/550d4ee5-767f-731a-528f-0362dd746749/mzaf_15901566817196608558.plus.aac.p.m4a", start: 14 },
        { appleId: 317940991, artist: "Suburban Knight", title: "Art of Stalking", previewPath: "AudioPreview211/v4/c7/de/bf/c7debfa5-a099-63dc-8b46-35b6eaa29762/mzaf_7946218391818584831.plus.aac.p.m4a", start: 0 },
      ],
    },
    dub: {
      name: { de: "Dub-Techno", en: "Dub Techno" },
      desc: {
        de: "Kurze Akkord-Stabs verschwimmen in Hall und Echo, darunter eine gedämpfte, tiefe Kick, oft Rauschen und Knistern. Meditativ, gleichförmig und stark vom Dub-Reggae beeinflusst, etwa 115–125 BPM.",
        en: "Short chord stabs dissolve into reverb and echo over a muffled, deep kick, often with hiss and crackle. Meditative, steady and strongly influenced by dub reggae, around 115–125 BPM.",
      },
      trait: { de: "Akkorde, die in Hall und Echo verschwimmen", en: "Chords that blur into reverb and echo" },
      tip: {
        de: "Achte auf die Akkorde: Sie hallen wie durch Nebel immer wieder nach, darunter eine weiche Kick. Das ist Dub-Techno.",
        en: "Listen to the chords: they echo again and again as if through fog, over a soft kick. That's dub techno.",
      },
      confusable: ["minimal", "detroit"],
      tracks: [
        { appleId: 286664872, artist: "Basic Channel", title: "Phylyps Trak", previewPath: "AudioPreview211/v4/6a/7e/58/6a7e587b-90b1-d774-a9d0-77672bf01cb8/mzaf_15156818288839217117.plus.aac.p.m4a", start: 11 },
        { appleId: 49295017, artist: "Rhythm & Sound", title: "Mango Drive", previewPath: "AudioPreview125/v4/93/7e/ca/937eca58-ff61-6c90-315f-6a227a258e05/mzaf_9643411864425378245.plus.aac.p.m4a", start: 14 },
        { appleId: 276360156, artist: "Basic Channel", title: "Quadrant Dub II", previewPath: "AudioPreview125/v4/3a/8e/59/3a8e5989-e250-0158-f3ea-698591465d70/mzaf_3359260221505794094.plus.aac.p.m4a", start: 18 },
        { appleId: 563824296, artist: "Rhythm & Sound", title: "Smile", previewPath: "AudioPreview115/v4/f3/4d/a1/f34da1c4-81a7-c109-a06a-698819467b57/mzaf_14467196806308308204.plus.aac.p.m4a", start: 0 },
        { appleId: 49292587, artist: "Maurizio", title: "M07a", previewPath: "AudioPreview211/v4/b4/6b/4d/b46b4d80-7eb3-a0ec-02e0-cf4624987d03/mzaf_7524623699339616146.plus.aac.p.m4a", start: 18 },
        { appleId: 49292641, artist: "Maurizio", title: "M04A (Full 12\" Length)", previewPath: "AudioPreview221/v4/1b/1d/40/1b1d40e5-3a86-2fa7-94a9-6327caeca8a5/mzaf_11494354707395355334.plus.aac.p.m4a", start: 1 },
        { appleId: 425305974, artist: "Deepchord & Echospace", title: "Abraxas", previewPath: "AudioPreview221/v4/0d/76/c4/0d76c480-ca33-dc7f-d523-8d1f5b090f46/mzaf_17171258178697096351.plus.aac.p.m4a" },
      ],
    },
    frenchcore: {
      name: { de: "Frenchcore", en: "Frenchcore" },
      desc: {
        de: "Sehr schneller Hardcore (etwa 190–220 BPM), bei dem nach jeder Kick eine verzerrte, »rollende« Bassline im Offbeat folgt. Häufig mit Geigen, Klassik-Samples und dramatischen Melodien.",
        en: "Very fast hardcore (around 190–220 BPM) where every kick is followed by a distorted, rolling offbeat bassline. Often with violins, classical samples and dramatic melodies.",
      },
      trait: { de: "Kick und Offbeat-Bass im Galopp, oft mit Geigen", en: "Kick and offbeat bass galloping, often with violins" },
      tip: {
        de: "Achte auf den Rhythmus: Nach jeder Kick rollt ein verzerrter Bass im Offbeat – wie ein Galopp, oft mit Geigen. Das ist Frenchcore.",
        en: "Listen to the rhythm: after every kick a distorted bass rolls on the offbeat – like a gallop, often with violins. That's frenchcore.",
      },
      confusable: ["gabber", "speedcore"],
      tracks: [
        { appleId: 1443764365, artist: "Angernoizer & Dr. Peacock", title: "Trip to Mexico", previewPath: "AudioPreview125/v4/94/c9/67/94c967c2-f711-8558-04e5-3df95896d3e0/mzaf_13368911681088210804.plus.aac.p.m4a", start: 0 },
        { appleId: 970285172, artist: "Dr. Peacock", title: "Vive la Frenchcore Anthem", previewPath: "AudioPreview125/v4/0b/0f/e8/0b0fe84c-b7fa-3b40-3b42-5d9ad9db6e47/mzaf_11601585918060453549.plus.aac.p.m4a", start: 9 },
        { appleId: 1566829725, artist: "Dr. Peacock & Sefa", title: "Incoming", previewPath: "AudioPreview125/v4/2b/f0/24/2bf02470-f241-a177-0db0-6dfe9388489d/mzaf_7128743537416681618.plus.aac.p.m4a", start: 18 },
        { appleId: 1889787135, artist: "Frenchcore Familia, Dr. Peacock, Billx & The Sickest Squad", title: "Chaos", previewPath: "AudioPreview211/v4/e9/98/0d/e9980db0-011b-bfe6-d832-2c05e0b2e56c/mzaf_5126376704601820829.plus.aac.p.m4a", start: 5 },
        { appleId: 1553179410, artist: "Dr. Peacock", title: "Trip to Valhalla", previewPath: "AudioPreview211/v4/e9/cf/39/e9cf394b-49f4-a65b-6c2b-dff1b94f7461/mzaf_17945735577961340163.plus.aac.p.m4a", start: 9 },
        { appleId: 1892397784, artist: "Dr. Peacock & Da Mouth of Madness", title: "Frenchcore Worldwide", previewPath: "AudioPreview211/v4/b9/d6/8b/b9d68b76-643e-c59c-9f1f-20826753d6a8/mzaf_11436758480995594522.plus.aac.p.m4a", start: 5 },
      ],
    },
    gabber: {
      name: { de: "Gabber", en: "Gabber" },
      desc: {
        de: "Rotterdamer Hardcore der 90er: extrem verzerrte, hart übersteuerte Kickdrum, 160–200 BPM, Shout-Samples und schrille Hoover-Synths. Roh, aggressiv und fast nur Kick.",
        en: "Rotterdam hardcore from the 90s: an extremely distorted, heavily overdriven kick drum, 160–200 BPM, shouted samples and shrill hoover synths. Raw, aggressive and almost all kick.",
      },
      trait: { de: "Schnelle, kaputt verzerrte Kick mit Shouts", en: "A fast, brutally distorted kick with shouts" },
      tip: {
        de: "Achte auf die Kick: schnell, extrem übersteuert, sie dominiert alles – dazu Shouts, kaum Melodie. Das ist Gabber.",
        en: "Listen to the kick: fast, extremely overdriven, it dominates everything – plus shouts and hardly any melody. That's gabber.",
      },
      confusable: ["gabberpop", "frenchcore", "industrial", "hardstyle"],
      tracks: [
        { appleId: 339721602, artist: "Euromasters", title: "Alles Naar de Klote", previewPath: "AudioPreview115/v4/e4/a0/3d/e4a03dd1-b056-ec76-7c8f-e5e27135d9cb/mzaf_6981844569447930809.plus.aac.p.m4a", start: 5 },
        { appleId: 942444895, artist: "Angerfist", title: "Raise Your Fist", previewPath: "AudioPreview221/v4/9a/59/25/9a592551-5e51-d852-62fc-bb18458d5238/mzaf_7820835979875298216.plus.aac.p.m4a", start: 0 },
        { appleId: 1444661464, artist: "Rotterdam Terror Corps", title: "God is a Gabber (2019 Refix)", previewPath: "AudioPreview122/v4/a3/dc/94/a3dc94b1-7e8a-7e21-3a8e-58d903adc903/mzaf_659511218930000362.plus.aac.p.m4a", start: 17 },
        { appleId: 942444833, artist: "Rotterdam Terror Corps", title: "We're Gonna Blow Your Mind", previewPath: "AudioPreview211/v4/07/20/56/0720562b-8f5f-24fe-4e3b-d955bc503c1e/mzaf_8937183968942714275.plus.aac.p.m4a", start: 13 },
        { appleId: 1476083657, artist: "Rotterdam Terror Corps", title: "Sound of Madness (Remastered)", previewPath: "AudioPreview123/v4/22/66/e3/2266e3b5-f8dd-c2ef-b553-e511e3e96d61/mzaf_5502232165161917048.plus.aac.p.m4a", start: 11 },
        { appleId: 339721601, artist: "Euromasters", title: "Amsterdam, Waar Lech Dat Dan (Maastunnel Mix)", previewPath: "AudioPreview125/v4/d9/7e/b5/d97eb59c-51b1-ec26-8b74-d30226b181b1/mzaf_17048215180905388655.plus.aac.p.m4a", start: 18 },
        { appleId: 1790624473, artist: "DJ Gizmo & The Darkraver", title: "Whoomps!", previewPath: "AudioPreview221/v4/73/e1/49/73e149ed-f8d9-20f5-2e90-fd534c44d174/mzaf_14930444079223563507.plus.aac.p.m4a", start: 18 },
      ],
    },
    gabberpop: {
      name: { de: "Gabberpop", en: "Gabberpop" },
      desc: {
        de: "Gabber trifft Pop: eingängige, fröhliche Melodien, Pop- oder Rap-Vocals und hochgepitchte Refrains, dazu sauberere Kicks als im Gabber. Augenzwinkernd und charttauglich, meist 150–180 BPM.",
        en: "Gabber meets pop: catchy, happy melodies, pop or rap vocals and pitched-up hooks, with cleaner kicks than gabber. Tongue-in-cheek and chart-friendly, usually 150–180 BPM.",
      },
      trait: { de: "Harter Beat mit Pop-Melodie zum Mitsingen", en: "A hard beat with a sing-along pop melody" },
      tip: {
        de: "Achte auf die Melodie: Über einer Gabber-Kick liegt ein eingängiger Refrain zum Mitsingen. Das ist Gabberpop.",
        en: "Listen to the melody: a catchy sing-along chorus sits on top of a gabber kick. That's gabberpop.",
      },
      confusable: ["gabber", "happy"],
      tracks: [
        { appleId: 1739901345, artist: "Party Animals", title: "Have You Ever Been Mellow (Tempo Team Radio Mix)", previewPath: "AudioPreview221/v4/79/c2/81/79c281b2-2e0c-72a0-6c9c-e253a1b624d4/mzaf_9399394697471255964.plus.aac.p.m4a", start: 16 },
        { appleId: 391801015, artist: "Hakkuhbar", title: "Super Gabber (Radio Mix)", previewPath: "AudioPreview125/v4/0e/c4/c4/0ec4c4b6-dc50-3375-aba3-8019d0bc0f1f/mzaf_2836789288546332108.plus.aac.p.m4a" },
        { appleId: 1828864569, artist: "Technohead", title: "I Wanna Be a Hippy", previewPath: "AudioPreview211/v4/55/99/d2/5599d2df-25c5-4644-99e8-73fbc3ee984b/mzaf_17522551627260870670.plus.aac.p.m4a", start: 18 },
        { appleId: 1750731948, artist: "Party Animals", title: "Wazzup (Flamman & Abraxas Mix)", previewPath: "AudioPreview221/v4/bc/8c/41/bc8c4114-0616-20e4-6ee9-fa2230ccf7e1/mzaf_8629314622244473592.plus.aac.p.m4a", start: 16 },
        { appleId: 1822360469, artist: "Gabber Piet", title: "Hakke & Zage", previewPath: "AudioPreview211/v4/35/8a/97/358a97d9-8196-e88d-9835-00f6e5a0ac58/mzaf_7848886908469671533.plus.aac.p.m4a", start: 0 },
      ],
    },
    ghettotech: {
      name: { de: "Ghetto Tech", en: "Ghetto Tech" },
      desc: {
        de: "Detroiter Clubsound der 90er: schnelle 808- und 909-Drumcomputer-Beats (etwa 145–170 BPM) mit Einflüssen aus Miami Bass und Ghetto House, dazu kurze, ständig wiederholte und oft anzügliche Vocal-Loops.",
        en: "Detroit club sound from the 90s: fast 808 and 909 drum-machine beats (around 145–170 BPM) with Miami bass and ghetto house influences, plus short, endlessly repeated and often cheeky vocal loops.",
      },
      trait: { de: "Schneller 808-Beat mit frecher, wiederholter Vocal-Zeile", en: "A fast 808 beat with a cheeky, repeated vocal line" },
      tip: {
        de: "Achte auf die Stimme: Eine freche Vocal-Zeile kommt immer wieder, darunter ein schneller 808-Beat. Das ist Ghetto Tech.",
        en: "Listen to the voice: a cheeky vocal line keeps coming back over a fast 808 beat. That's ghetto tech.",
      },
      confusable: ["techhouse", "detroit"],
      tracks: [
        { appleId: 4376852, artist: "DJ Godfather", title: "Player Haters in Dis House", previewPath: "AudioPreview125/v4/00/29/17/002917a7-aff8-aef6-ccfb-eb048c13a137/mzaf_5107893795573050527.plus.aac.p.m4a", start: 0 },
        { appleId: 972921367, artist: "DJ Assault", title: "Sex On the Beach", previewPath: "AudioPreview221/v4/c1/c8/e2/c1c8e209-00f6-6ba7-ad7e-1b3504d36375/mzaf_12766675510344690375.plus.aac.p.m4a", start: 0 },
        { appleId: 972920878, artist: "DJ Assault", title: "Livin' the (Good Life)", previewPath: "AudioPreview221/v4/16/46/93/16469331-d84e-f6f4-ec15-5e613263314a/mzaf_1133701286848921171.plus.aac.p.m4a", start: 0 },
        { appleId: 1065198533, artist: "DJ Assault", title: "I Say Uuuuah", previewPath: "AudioPreview115/v4/38/fd/af/38fdaf47-f28c-105c-140f-7a019f8712a9/mzaf_3147075799747015651.plus.aac.p.m4a", start: 0 },
        { appleId: 264067209, artist: "DJ Godfather", title: "Crank Dat", previewPath: "AudioPreview115/v4/22/d0/31/22d03142-cc4b-02bc-8bca-1e8ebbde234c/mzaf_7014964046752399563.plus.aac.p.m4a", start: 0 },
      ],
    },
    happy: {
      name: { de: "Happy Hardcore", en: "Happy Hardcore" },
      desc: {
        de: "Fröhlicher Hardcore mit 160–180 BPM: hochgepitchte, quietschige Vocals, Piano-Riffs und euphorische Melodien. Die Kick ist hart, aber weniger verzerrt und düster als im Gabber.",
        en: "Cheerful hardcore at 160–180 BPM: pitched-up, squeaky vocals, piano riffs and euphoric melodies. The kick is hard, but less distorted and dark than in gabber.",
      },
      trait: { de: "Mickymaus-Stimmen und Piano über schnellen Beats", en: "Chipmunk vocals and piano over fast beats" },
      tip: {
        de: "Achte auf die Stimmen: hochgepitcht wie Mickymaus, dazu Piano-Riffs und euphorische Melodien. Das ist Happy Hardcore.",
        en: "Listen to the vocals: pitched up like chipmunks, plus piano riffs and euphoric melodies. That's happy hardcore.",
      },
      confusable: ["gabberpop", "trancecore"],
      tracks: [
        { appleId: 1803633859, artist: "Dune", title: "Hardcore Vibes", previewPath: "AudioPreview211/v4/c4/14/5f/c4145fe7-9bf1-e9d0-3e3e-b4f3a4d66e97/mzaf_11655188274565496416.plus.aac.p.m4a", start: 0 },
        { appleId: 1781315904, artist: "DJ Paul Elstak", title: "Rainbow in the Sky (Mixed)", previewPath: "AudioPreview221/v4/6b/df/e1/6bdfe12f-7c6c-dce1-8ab2-d61f467f9f8b/mzaf_13600165165187069152.plus.aac.p.m4a", start: 12 },
        { appleId: 1711277591, artist: "Hixxy & Jomarijan", title: "More & More", previewPath: "AudioPreview116/v4/5a/4e/22/5a4e2227-35ca-518a-50c9-d471ef20a6bc/mzaf_14173898816466561336.plus.aac.p.m4a", start: 12 },
        { appleId: 402175431, artist: "Bang!", title: "Shooting Star (Euro Mix)", previewPath: "AudioPreview125/v4/09/50/5a/09505a1e-1e10-78be-a022-9ed67fb38960/mzaf_12140119780322251799.plus.aac.p.m4a", start: 9 },
        { appleId: 1842596153, artist: "Charly Lownoise & Mental Theo", title: "Stars", previewPath: "AudioPreview221/v4/24/6c/ba/246cbad7-1943-234a-07cf-9d14e56c84aa/mzaf_16844812105673883666.plus.aac.p.m4a", start: 4 },
        { appleId: 1807952485, artist: "Dune", title: "Are You Ready To Fly (12“ Mix)", previewPath: "AudioPreview221/v4/d1/3b/fe/d13bfec0-06c0-3264-a3e7-4dce13c3cf4c/mzaf_4954453385867388906.plus.aac.p.m4a", start: 18 },
        { appleId: 402177477, artist: "Brisk & Ham", title: "On & On", previewPath: "Music/v4/29/09/00/29090022-87a0-21cc-bb58-0c4da35fcd78/mzaf_3149740701328355873.plus.aac.p.m4a", start: 18 },
        { appleId: 1523648068, artist: "Dougal & Vibes", title: "Feel Free", previewPath: "AudioPreview114/v4/ff/c4/de/ffc4de45-823a-6c0f-b6c7-b10635465db9/mzaf_1490274067528932950.plus.aac.p.m4a", start: 13 },
        { appleId: 1614797537, artist: "Billy “Daniel” Bunter & J.D.S.", title: "Come Alive", previewPath: "AudioPreview126/v4/ce/38/3b/ce383b83-5c38-6a50-e839-0c75758eaedf/mzaf_4369800705732422674.plus.aac.p.m4a", start: 11 },
        { appleId: 1802962099, artist: "Hixxy, Sharkey & Vinylgroover", title: "Toytown (Vinylgroover '97 Vocal Remix)", previewPath: "AudioPreview221/v4/58/8c/e0/588ce082-fb9d-a98c-2368-c373a273c6b9/mzaf_1019443503991201025.plus.aac.p.m4a", start: 1 },
      ],
    },
    hardstyle: {
      name: { de: "Hardstyle", en: "Hardstyle" },
      desc: {
        de: "Niederländisch, um 150 BPM: Erkennungsmerkmal ist die verzerrte, »gezogene« Kick mit tonalem Nachklang (Reverse Bass), dazu epische Synth-Melodien, lange Breakdowns und große Hymnen.",
        en: "Dutch, around 150 BPM: the trademark is the distorted, pitched kick with a tonal tail (reverse bass), plus epic synth melodies, long breakdowns and big anthems.",
      },
      trait: { de: "Pumpende Kick mit Nachklang und Festival-Melodie", en: "A pumping kick with a tonal tail and a festival melody" },
      tip: {
        de: "Achte auf die Kick: Sie ist verzerrt und klingt tonal nach (Reverse Bass), dazu große Hymnen. Das ist Hardstyle.",
        en: "Listen to the kick: it's distorted with a tonal tail (reverse bass), plus big anthems. That's hardstyle.",
      },
      confusable: ["hardtechno", "trancecore", "gabber"],
      tracks: [
        { appleId: 506651335, artist: "Headhunterz", title: "Dragonborn (Original Mix)", previewPath: "AudioPreview211/v4/ec/66/13/ec661371-9b1b-5415-f8e8-615a15dca4b9/mzaf_9356909856131840187.plus.aac.p.m4a", start: 0 },
        { appleId: 1447117600, artist: "Da Tweekaz", title: "Jägermeister", previewPath: "AudioPreview211/v4/39/5e/e2/395ee299-4ab0-032a-9318-a1b69f978692/mzaf_9732489835575518498.plus.aac.p.m4a", start: 0 },
        { appleId: 705102122, artist: "Brennan Heart & Jonathan Mendelsohn", title: "Imaginary", previewPath: "AudioPreview211/v4/91/ce/ed/91ceedd5-8514-a97f-fc7f-103a35d9dfe8/mzaf_2157011361334774385.plus.aac.p.m4a", start: 18 },
        { appleId: 529461465, artist: "Brennan Heart & Wildstylez", title: "Lose My Mind (Original Mix)", previewPath: "AudioPreview125/v4/11/f8/b2/11f8b2cd-99d8-3b97-3a9f-6309a4cbe25f/mzaf_10488574974875303165.plus.aac.p.m4a" },
        { appleId: 922011922, artist: "Headhunterz", title: "Rock Civilization", previewPath: "AudioPreview221/v4/25/69/d8/2569d842-8133-9ac1-4f17-4c6a40b1dd2a/mzaf_610154885011286437.plus.aac.p.m4a", start: 12 },
        { appleId: 317809328, artist: "Noisecontrollers", title: "Revolution Is Here", previewPath: "AudioPreview211/v4/89/b1/37/89b1373d-4d9c-eeab-f1ff-69e2bcebac78/mzaf_13393672650412206733.plus.aac.p.m4a", start: 1 },
      ],
    },
    hardtechno: {
      name: { de: "Hard Techno", en: "Hard Techno" },
      desc: {
        de: "Heutiger harter Techno, etwa 145–160 BPM: eine wuchtige, verzerrte Kick mit rumpelndem Nachhall (»Rumble«), dazu Rave-Stabs, kurze Vocal-Samples und Anleihen aus Trance und 90er-Rave. Klingt nach Festival.",
        en: "Today's hard techno, around 145–160 BPM: a heavy, distorted kick with a rumbling tail (the \"rumble\"), plus rave stabs, short vocal samples and borrowings from trance and 90s rave. Sounds like a festival.",
      },
      trait: { de: "Schnelle, rumpelnde Kick mit Rave-Sounds", en: "A fast, rumbling kick with rave sounds" },
      tip: {
        de: "Achte auf die Kick: schnell und rumpelnd, mit Nachhall, dazu Rave-Stabs. Klingt nach heutigem Festival – das ist Hard Techno.",
        en: "Listen to the kick: fast and rumbling, with a long tail, plus rave stabs. Sounds like a festival today – that's hard techno.",
      },
      confusable: ["schranz", "industrial", "hardstyle"],
      tracks: [
        { appleId: 1629507181, artist: "Sara Landry", title: "Riot", previewPath: "AudioPreview112/v4/92/a1/9a/92a19abd-e037-5a8d-e215-529dcb8f6bed/mzaf_18067867298185966280.plus.aac.p.m4a", start: 0 },
        { appleId: 1619168804, artist: "Sara Landry", title: "ADHD", previewPath: "AudioPreview211/v4/0b/83/5d/0b835dd3-6534-f7a7-6893-fa9e2a4ac558/mzaf_456507038843835355.plus.aac.p.m4a", start: 17 },
        { appleId: 1576806764, artist: "Nico Moreno", title: "Techno Crari", previewPath: "AudioPreview211/v4/0a/83/5c/0a835c0b-48a6-0339-a3cb-76db07ed6ba8/mzaf_2309827259793801299.plus.aac.p.m4a", start: 0 },
        { appleId: 1619412124, artist: "Nico Moreno", title: "This Is For My Haters", previewPath: "AudioPreview221/v4/9b/7e/45/9b7e4598-2a5c-3300-f46a-4a061d6f1853/mzaf_14669737235844534283.plus.aac.p.m4a", start: 13 },
        { appleId: 1762229671, artist: "999999999", title: "Power to the Raver", previewPath: "AudioPreview221/v4/d9/11/d3/d911d362-d669-f3dc-0be7-d51b495e7941/mzaf_17193348319997377577.plus.aac.p.m4a", start: 18 },
        { appleId: 1535197046, artist: "Nico Moreno", title: "Insolent Rave", previewPath: "AudioPreview125/v4/65/d6/5f/65d65ff4-5db7-84b3-9e09-1cda4e2ba29e/mzaf_540052659991628170.plus.aac.p.m4a", start: 17 },
        { appleId: 1560959466, artist: "Sara Landry", title: "Thirst Trap", previewPath: "AudioPreview221/v4/1d/63/5c/1d635c42-e6c1-11b1-e17f-935827f63cc4/mzaf_7570028177085353497.plus.aac.p.m4a" },
      ],
    },
    industrial: {
      name: { de: "Industrial Hardcore", en: "Industrial Hardcore" },
      desc: {
        de: "Düsterer Hardcore, oft langsamer als Gabber (130–180 BPM): stark verzerrte Kick, metallische Maschinengeräusche und Noise, kaum Melodie. Im Vordergrund stehen Sound-Experimente und Härte.",
        en: "Dark hardcore, often slower than gabber (130–180 BPM): heavily distorted kick, metallic machine sounds and noise, hardly any melody. The focus is on sound experiments and harshness.",
      },
      trait: { de: "Verzerrte Kick und Maschinenlärm, kaum Melodie", en: "A distorted kick and machine noise, hardly any melody" },
      tip: {
        de: "Achte auf die Geräusche: metallische Maschinen und Noise um eine schwere, verzerrte Kick – wie in einer Fabrikhalle. Das ist Industrial Hardcore.",
        en: "Listen to the sounds: metallic machines and noise around a heavy, distorted kick – like inside a factory. That's industrial hardcore.",
      },
      confusable: ["gabber", "hardtechno", "speedcore"],
      tracks: [
        { appleId: 1302358788, artist: "Mescalinum United", title: "We Have Arrived (The Mover Remix)", previewPath: "AudioPreview115/v4/b9/d3/61/b9d361d9-83f8-8948-f320-70da49221f23/mzaf_11610518125632950602.plus.aac.p.m4a", start: 10 },
        { appleId: 6763048700, artist: "Ophidian & Dj Ruffneck", title: "Noisemaker (Straightbackward VIP)", previewPath: "AudioPreview211/v4/f0/20/b8/f020b888-3d82-423e-5be5-8b5b880517ff/mzaf_3291535167882557000.plus.aac.p.m4a" },
        { appleId: 1302349028, artist: "Ophidian", title: "Inception By Sound (QORE 3.0 OST 2011)", previewPath: "AudioPreview115/v4/a5/65/e3/a565e317-67b2-0d12-87b9-4b48c0fd7ef2/mzaf_6125183219057321746.plus.aac.p.m4a", start: 12 },
        { appleId: 1842461464, artist: "The Outside Agency & Ophidian", title: "Return Of The Silence", previewPath: "AudioPreview211/v4/3f/bb/25/3fbb2564-229e-7e0d-5547-bf04eabcaf81/mzaf_9430106777717815043.plus.aac.p.m4a", start: 18 },
        { appleId: 1435116149, artist: "Somniac One", title: "Kill Everyone", previewPath: "AudioPreview115/v4/06/45/3b/06453b3f-95f7-4391-3a88-87b9047e3082/mzaf_17266354477939931872.plus.aac.p.m4a", start: 0 },
        { appleId: 1541592492, artist: "The Outside Agency", title: "The Plant", previewPath: "AudioPreview125/v4/6c/6e/89/6c6e89ad-7789-f2cb-96b5-7dd5252c744f/mzaf_17786842676919800151.plus.aac.p.m4a" },
      ],
    },
    minimal: {
      name: { de: "Minimal Techno", en: "Minimal Techno" },
      desc: {
        de: "Auf wenige Elemente reduziert: trockene Kick, Klicks und kleine Percussion-Sounds, die sich über lange Zeit nur minimal verändern. Viel Leere, hypnotisch, etwa 120–130 BPM.",
        en: "Reduced to a few elements: dry kick, clicks and small percussion sounds that change only slightly over a long time. Lots of space, hypnotic, around 120–130 BPM.",
      },
      trait: { de: "Trockene Kick, Klicks und viel Leere", en: "A dry kick, clicks and lots of empty space" },
      tip: {
        de: "Achte auf das, was fehlt: nur Kick, Klicks und Pausen, alles ändert sich ganz langsam. Das ist Minimal Techno.",
        en: "Listen to what's missing: just kick, clicks and gaps, and everything changes very slowly. That's minimal techno.",
      },
      confusable: ["dub", "techhouse", "progressive"],
      tracks: [
        { appleId: 1621738415, artist: "Robert Hood", title: "Minus", previewPath: "AudioPreview122/v4/7c/b0/ae/7cb0ae29-630f-e9a7-8017-2d601fdfaeeb/mzaf_16145924275243680253.plus.aac.p.m4a" },
        { appleId: 335267199, artist: "Robert Hood", title: "The Pace", previewPath: "AudioPreview115/v4/ee/67/36/ee673616-45a3-a005-a909-e549b911bad0/mzaf_4166773666051810911.plus.aac.p.m4a" },
        { appleId: 1494252359, artist: "Richie Hawtin", title: "Minus/Orange 1", previewPath: "AudioPreview115/v4/4f/28/35/4f28357f-251b-3d88-de04-5f574857aa2d/mzaf_8170801509341968188.plus.aac.p.m4a", start: 8 },
        { appleId: 1822365597, artist: "Ricardo Villalobos", title: "Dexter", previewPath: "AudioPreview211/v4/73/dd/54/73dd540c-20bf-e398-d667-31e77862dd64/mzaf_16700577905651580972.plus.aac.p.m4a", start: 0 },
        { appleId: 1886460435, artist: "Ricardo Villalobos & goat (JP)", title: "Orin (Ricardo Villalobos Variation)", previewPath: "AudioPreview211/v4/f4/ef/05/f4ef059a-2ee0-0d3a-82d5-09ab4068ae0d/mzaf_547687175721977409.plus.aac.p.m4a", start: 0 },
        { appleId: 1678680774, artist: "Robert Hood", title: "Face In The Water", previewPath: "AudioPreview126/v4/e2/32/0c/e2320cb5-3423-578d-264d-83b36bb6ee33/mzaf_3806528815065449820.plus.aac.p.m4a", start: 0 },
      ],
    },
    progressive: {
      name: { de: "Progressive Techno", en: "Progressive Techno" },
      desc: {
        de: "Lange, treibende Tracks um 125–135 BPM, die schlicht anfangen und sich Schicht für Schicht steigern – ohne Drop. In den späten 90ern eher perkussiv, heute oft mit trance- oder psy-artigen Synths.",
        en: "Long, driving tracks around 125–135 BPM that start simple and build layer by layer – with no drop. Mostly percussive in the late 90s, today often with trance- or psy-like synths.",
      },
      trait: { de: "Schlichter Start, dann kommt Schicht für Schicht mehr dazu, kein Drop", en: "Starts simple, then adds layer after layer, no drop" },
      tip: {
        de: "Achte auf den Verlauf: Der Track treibt gleichmäßig, und immer neue Spuren kommen dazu, ohne dass es einen Drop gibt. Das ist Progressive Techno.",
        en: "Listen to how it develops: the track drives steadily and new layers keep coming in, without a drop. That's progressive techno.",
      },
      confusable: ["minimal", "schranz", "detroit"],
      tracks: [
        { appleId: 1548686358, artist: "Monika Kruse", title: "Solid State (Balthazar & Jackrock Remix)", previewPath: "AudioPreview114/v4/af/ea/57/afea57d6-76af-418c-2e38-ca412668ffa3/mzaf_2769835748226935688.plus.aac.p.m4a" },
        { appleId: 1656796131, artist: "Ben Sims", title: "Unity", previewPath: "AudioPreview112/v4/4a/b0/ec/4ab0ec2a-ba6a-6fec-fed1-8c6d25158304/mzaf_7591976084021590972.plus.aac.p.m4a", start: 10 },
        { appleId: 1803174547, artist: "Konfusia", title: "Pressure", previewPath: "AudioPreview211/v4/5a/28/ae/5a28aef2-c030-60f9-284f-2cadbd5e02f7/mzaf_3794295681584593025.plus.aac.p.m4a", start: 18 },
        { appleId: 1672212609, artist: "Konfusia", title: "No Reason", previewPath: "AudioPreview116/v4/f7/90/a5/f790a528-d15d-e667-21dd-099571f48cfd/mzaf_13793876186340703806.plus.aac.p.m4a", start: 9 },
        { appleId: 1726016334, artist: "Konfusia", title: "Darkness", previewPath: "AudioPreview126/v4/86/d9/e0/86d9e005-d04d-c43e-9559-51b3aab72425/mzaf_1426378958882031932.plus.aac.p.m4a", start: 15 },
        { appleId: 1390058554, artist: "Lampe", title: "Crystal Cave", previewPath: "AudioPreview125/v4/08/40/85/08408595-fb08-18ee-bb0f-5a32c57f6a2f/mzaf_17752587677036168968.plus.aac.p.m4a", start: 10 },
        { appleId: 1618387080, artist: "Lampe", title: "Change It", previewPath: "AudioPreview112/v4/8c/96/a4/8c96a407-bb17-5784-2740-dec4b407cf9f/mzaf_16609281593133106914.plus.aac.p.m4a", start: 18 },
      ],
    },
    schranz: {
      name: { de: "Schranz", en: "Schranz" },
      desc: {
        de: "Deutscher Hardtechno, etwa 145–160 BPM: stark komprimierte, gefilterte und scheppernde Percussion-Loops, brachial und kaum melodisch. Klingt wie eine Maschine, die sich immer weiter hochdreht.",
        en: "German hard techno, around 145–160 BPM: heavily compressed, filtered and clattering percussion loops, brutal and barely melodic. Sounds like a machine revving higher and higher.",
      },
      trait: { de: "Scheppernde, rumpelnde Loops ohne Melodie", en: "Clattering, rumbling loops with no melody" },
      tip: {
        de: "Achte auf die Percussion: scheppernde, stark komprimierte Loops, die immer weiter drücken, keine Melodie. Das ist Schranz.",
        en: "Listen to the percussion: clattering, heavily compressed loops that keep pushing, no melody. That's schranz.",
      },
      confusable: ["hardtechno", "progressive", "acid"],
      tracks: [
        { appleId: 1707029464, artist: "Chris Liebing & Andre Walter", title: "Kronos A1 (Stigmata 10)", previewPath: "AudioPreview126/v4/b8/f6/94/b8f6945b-802a-cbc3-97f7-45bc960fc1f8/mzaf_12646050414454900587.plus.aac.p.m4a", start: 18 },
        { appleId: 320704641, artist: "Sven Wittekind", title: "Voices In My Head", previewPath: "AudioPreview125/v4/a1/57/3b/a1573bdb-4eeb-808a-0efd-1cc93f4cc77f/mzaf_12967727492155130541.plus.aac.p.m4a", start: 6 },
        { appleId: 1031230611, artist: "Arkus P. & Sepromatiq", title: "Visions", previewPath: "AudioPreview125/v4/4b/81/c1/4b81c19c-b53f-4164-3c86-84376e86169e/mzaf_15557569840221550174.plus.aac.p.m4a", start: 18 },
        { appleId: 206769994, artist: "Sven Wittekind", title: "Transpose", previewPath: "AudioPreview125/v4/6e/2c/8a/6e2c8a80-f2f6-d2d9-b643-12719eb4fa25/mzaf_4363048223456427528.plus.aac.p.m4a", start: 3 },
        { appleId: 520095534, artist: "Frank Kvitta", title: "Get It", previewPath: "AudioPreview115/v4/aa/43/f2/aa43f220-1935-828d-4678-b2f41275a904/mzaf_17200587650688623191.plus.aac.p.m4a", start: 2 },
        { appleId: 292683359, artist: "Pet Duo, Holgi Star & Stereo Jack", title: "Kaputt", previewPath: "AudioPreview123/v4/7c/2d/2d/7c2d2d43-cc59-9567-b4a4-0defb7b2f204/mzaf_6697659660604769638.plus.aac.p.m4a", start: 0 },
        { appleId: 647212251, artist: "Pet Duo", title: "Dose Letal 50", previewPath: "Music6/v4/11/12/58/111258b9-26e8-8d53-3d7d-637d2a9d30fe/mzaf_1419924384825293537.plus.aac.p.m4a", start: 0 },
        { appleId: 213237180, artist: "Robert Natus", title: "Pain", previewPath: "Music2/v4/cc/8e/37/cc8e3774-46e6-632d-99f5-9393e975f14e/mzaf_6875890016846129773.plus.aac.p.m4a" },
        { appleId: 503261548, artist: "Arkus P.", title: "Netzschule", previewPath: "AudioPreview123/v4/50/ed/3d/50ed3d6f-a337-815f-1b65-414424458771/mzaf_12790779689511362458.plus.aac.p.m4a" },
      ],
    },
    speedcore: {
      name: { de: "Speedcore", en: "Speedcore" },
      desc: {
        de: "Extrem schnell, meist über 250 BPM: Die Kicks verschwimmen fast zu einem durchgehenden Brummen. Dazu Horror-Samples, Schreie, Noise und düstere Synths.",
        en: "Extremely fast, usually over 250 BPM: the kicks almost blur into one continuous drone. Plus horror samples, screams, noise and dark synths.",
      },
      trait: { de: "So schnell, dass die Kicks zu einem Brummen werden", en: "So fast that the kicks turn into a buzz" },
      tip: {
        de: "Achte aufs Tempo: Du kannst die Kicks nicht mehr einzeln zählen, sie verschwimmen zu einem Brummen. Das ist Speedcore.",
        en: "Listen to the tempo: you can't count the kicks any more, they blur into a buzz. That's speedcore.",
      },
      confusable: ["frenchcore", "industrial"],
      tracks: [
        { appleId: 1656380098, artist: "M1dy", title: "M1dy Is Sexy", previewPath: "AudioPreview112/v4/f8/98/b6/f898b6e2-43f0-e284-52b4-4f115609505d/mzaf_10552466274724905483.plus.aac.p.m4a", start: 0 },
        { appleId: 1104458534, artist: "M1dy", title: "Cold Pizza", previewPath: "AudioPreview115/v4/c9/9d/43/c99d43cb-6eb2-2975-1652-1fc1de6637b2/mzaf_9818289383371495290.plus.aac.p.m4a" },
        { appleId: 449996996, artist: "Noizefucker", title: "Transformerz", previewPath: "Music/ed/c5/cc/mzm.slvhizqv.aac.p.m4a", start: 10 },
        { appleId: 1526493351, artist: "Disciples of Annihilation", title: "Poisoned with Strychnine", previewPath: "AudioPreview114/v4/83/2c/28/832c284f-41fb-9ada-2aea-38dd11f4f580/mzaf_3092632000223749231.plus.aac.p.m4a", start: 0 },
        { appleId: 1526493350, artist: "Disciples of Annihilation", title: "Chemical Warfare", previewPath: "AudioPreview114/v4/0e/e3/8d/0ee38d4c-0f8f-5581-5bb2-0a4f130e3b47/mzaf_7925965607546342379.plus.aac.p.m4a", start: 0 },
        { appleId: 1495937423, artist: "Noisekick", title: "Destroy (Only Dj Noisekick Will Survive) [Remastered]", previewPath: "AudioPreview115/v4/c9/dd/c0/c9ddc0e2-2dd7-061f-fad2-e3d8c9db2a02/mzaf_6671528083804964465.plus.aac.p.m4a", start: 5 },
        { appleId: 863904397, artist: "The Speed Freak", title: "Decapitation (Extended Raw Version)", previewPath: "AudioPreview115/v4/b7/27/71/b72771be-198e-6907-79e6-eb2a037f7bbb/mzaf_7173742844975642508.plus.aac.p.m4a" },
        { appleId: 1590862016, artist: "DJ Sharpnel", title: "Take Cover", previewPath: "AudioPreview211/v4/b3/f1/81/b3f1812b-82b9-9988-6767-8d81fae4323a/mzaf_3423624895707472384.plus.aac.p.m4a" },
      ],
    },
    techhouse: {
      name: { de: "Tech House", en: "Tech House" },
      desc: {
        de: "Die Brücke zwischen House und Techno: groovige, leicht swingende House-Rhythmen um 124–128 BPM mit Techno-Sounds, rollenden Basslines und oft kurzen Vocal-Schnipseln. Locker und tanzbar statt hart.",
        en: "The bridge between house and techno: groovy, slightly swinging house rhythms around 124–128 BPM with techno sounds, rolling basslines and often short vocal snippets. Loose and danceable rather than hard.",
      },
      trait: { de: "Lockerer, swingender Groove mit Vocal-Schnipseln", en: "A loose, swinging groove with vocal snippets" },
      tip: {
        de: "Achte auf den Groove: swingende Hi-Hats, eine rollende Bassline und kurze Vocal-Schnipsel. Eher mitwippen als stampfen – das ist Tech House.",
        en: "Listen to the groove: swinging hi-hats, a rolling bassline and short vocal snippets. More nodding along than stomping – that's tech house.",
      },
      confusable: ["minimal", "ghettotech"],
      tracks: [
        { appleId: 1408454985, artist: "FISHER", title: "Losing It", previewPath: "AudioPreview211/v4/5e/73/3e/5e733e6a-ddae-6081-dbbd-0be7e9542e60/mzaf_15726405558792372151.plus.aac.p.m4a", start: 3 },
        { appleId: 1673189256, artist: "Michael Bibi & KinAhau", title: "Different Side", previewPath: "AudioPreview116/v4/78/83/05/788305dc-13dd-d065-e414-e3ecc621859f/mzaf_12981899925940365638.plus.aac.p.m4a", start: 18 },
        { appleId: 1645283575, artist: "Mau P", title: "Drugs From Amsterdam", previewPath: "AudioPreview211/v4/c5/a8/bb/c5a8bb36-1dba-f4af-e743-99906173c817/mzaf_7750262380525476484.plus.aac.p.m4a", start: 0 },
        { appleId: 1454818194, artist: "Dom Dolla", title: "Take It", previewPath: "AudioPreview211/v4/7c/6b/5a/7c6b5aea-9397-84bd-d0bd-9883689bdd22/mzaf_6172376446877393878.plus.aac.p.m4a", start: 0 },
        { appleId: 1346852711, artist: "Patrick Topping", title: "Be Sharp Say Nowt", previewPath: "AudioPreview211/v4/51/bc/84/51bc84a1-cfaa-a0a7-325d-b8017e2be743/mzaf_5466065062613882733.plus.aac.p.m4a", start: 18 },
      ],
    },
    trancecore: {
      name: { de: "Trancecore", en: "Trancecore" },
      desc: {
        de: "Britischer Hardcore der späten 90er mit Trance-Elementen: hymnische Synth-Leads, Arpeggios und lange Breakdowns, aber im Hardcore-Tempo um 170 BPM und mit harter Kick.",
        en: "British hardcore from the late 90s with trance elements: anthemic synth leads, arpeggios and long breakdowns, but at hardcore tempo around 170 BPM with a hard kick.",
      },
      trait: { de: "Große Trance-Melodie über schneller Hardcore-Kick", en: "A big trance melody over a fast hardcore kick" },
      tip: {
        de: "Achte auf die Melodie: hymnische Trance-Leads und Arpeggios, aber darunter eine schnelle, harte Hardcore-Kick. Das ist Trancecore.",
        en: "Listen to the melody: anthemic trance leads and arpeggios, but a fast, hard hardcore kick underneath. That's trancecore.",
      },
      confusable: ["hardstyle", "happy"],
      tracks: [
        { appleId: 828085356, artist: "Marc Smith", title: "Pump Up the Noize", previewPath: "Music/v4/17/e1/63/17e1635a-3455-46c1-f13d-71031ac51395/mzaf_4657947097616646783.plus.aac.p.m4a" },
        { appleId: 446079556, artist: "Scott Brown", title: "Taking Drugs?", previewPath: "AudioPreview125/v4/e1/97/46/e197460b-2145-153f-3d28-1a238d6b8dff/mzaf_9201129314552156839.plus.aac.p.m4a" },
        { appleId: 1536439134, artist: "Kevin Energy & Jasmine Knight", title: "Universal Energy", previewPath: "AudioPreview115/v4/cd/81/4c/cd814c4f-2317-a985-e648-8717ecd68f4b/mzaf_505078626002705447.plus.aac.p.m4a", start: 10 },
        { appleId: 946167164, artist: "Scott Brown", title: "Elysium", previewPath: "AudioPreview115/v4/2d/58/90/2d589087-7144-c94b-04ea-d909ccfa3dce/mzaf_7762313020897640702.plus.aac.p.m4a", start: 0 },
        { appleId: 442060440, artist: "Scott Brown", title: "Fly With You", previewPath: "AudioPreview125/v4/27/95/da/2795daf4-19cc-549e-c91f-37407e700d19/mzaf_7784132731666385806.plus.aac.p.m4a", start: 13 },
        { appleId: 1448401819, artist: "Kevin Energy", title: "Message Mayhem", previewPath: "AudioPreview115/v4/eb/98/c6/eb98c682-0304-a31e-7e7b-2af04afa3806/mzaf_17841565082440661604.plus.aac.p.m4a", start: 18 },
      ],
    },
  },
  // Difficulty levels (like Drum & Bass): 6 levels, three or four new subgenres per level.
  levels: [
    // 1: four very different subgenres, only "which genre do you hear?"
    { subgenres: ["techhouse", "acid", "dub", "hardstyle"] },
    // 2: + Detroit, Gabber, Hard Techno, and "which clip is X?"
    { subgenres: ["techhouse", "acid", "dub", "hardstyle", "detroit", "gabber", "hardtechno"], pick: true },
    // 3: + Minimal, Gabberpop, Schranz, Happy Hardcore, and "what do you hear?"
    { subgenres: ["techhouse", "acid", "dub", "hardstyle", "detroit", "gabber", "hardtechno", "minimal", "gabberpop", "schranz", "happy"], pick: true, hear: true },
    // 4: + Frenchcore, Speedcore, Ghetto Tech, and knowledge questions
    {
      subgenres: ["techhouse", "acid", "dub", "hardstyle", "detroit", "gabber", "hardtechno", "minimal", "gabberpop", "schranz", "happy", "frenchcore", "speedcore", "ghettotech"],
      pick: true,
      hear: true,
      knowledge: ["acid-sound", "dub-sound", "techhouse-bridge", "hardstyle-kick", "gabber-sound", "minimal-sound", "gabberpop-vs-gabber", "schranz-sound", "happy-sound", "frenchcore-sound", "speedcore-sound", "ghettotech-sound"],
    },
    // 5: + Progressive, Industrial Hardcore, Trancecore – all 17 subgenres
    {
      subgenres: ["techhouse", "acid", "dub", "hardstyle", "detroit", "gabber", "hardtechno", "minimal", "gabberpop", "schranz", "happy", "frenchcore", "speedcore", "ghettotech", "progressive", "industrial", "trancecore"],
      pick: true,
      hear: true,
      knowledge: ["acid-sound", "dub-sound", "techhouse-bridge", "hardstyle-kick", "gabber-sound", "minimal-sound", "gabberpop-vs-gabber", "schranz-sound", "happy-sound", "frenchcore-sound", "speedcore-sound", "ghettotech-sound", "progressive-sound", "industrial-sound", "trancecore-sound"],
    },
    // 6 (master): only similar-sounding pairs, and a shorter speed bonus
    {
      subgenres: ["techhouse", "acid", "dub", "hardstyle", "detroit", "gabber", "hardtechno", "minimal", "gabberpop", "schranz", "happy", "frenchcore", "speedcore", "ghettotech", "progressive", "industrial", "trancecore"],
      pick: true,
      hear: true,
      knowledge: ["acid-sound", "dub-sound", "techhouse-bridge", "hardstyle-kick", "gabber-sound", "minimal-sound", "gabberpop-vs-gabber", "schranz-sound", "happy-sound", "frenchcore-sound", "speedcore-sound", "ghettotech-sound", "progressive-sound", "industrial-sound", "trancecore-sound"],
      pairsOnly: true,
      bonusTime: 6,
    },
  ],
  knowledge: [
    {
      id: "acid-sound",
      question: { de: "Was ist typisch für Acid Techno?", en: "What is typical of acid techno?" },
      options: [
        { de: "Eine quietschende, blubbernde 303-Bassline", en: "A squelching, bubbling 303 bassline" },
        { de: "Akkorde, die in Hall und Echo verschwimmen", en: "Chords that blur into reverb and echo" },
      ],
      explain: {
        de: "Acid Techno lebt von der Roland TB-303: Ihr Filter wird ständig auf- und zugedreht, dadurch blubbert und kreischt die Bassline. Hall und Echo sind typisch für Dub-Techno.",
        en: "Acid techno is built on the Roland TB-303: its filter is constantly opened and closed, so the bassline bubbles and screams. Reverb and echo are typical of dub techno.",
      },
    },
    {
      id: "dub-sound",
      question: { de: "In welchem Subgenre verschwimmen kurze Akkorde in Hall und Echo?", en: "In which subgenre do short chords blur into reverb and echo?" },
      options: [
        { de: "Dub-Techno", en: "Dub Techno" },
        { de: "Minimal Techno", en: "Minimal Techno" },
      ],
      explain: {
        de: "Dub-Techno übertrug die Studio-Technik des Dub-Reggae auf Techno, bekannt durch Basic Channel aus Berlin. Minimal ist auch reduziert, klingt aber trocken statt hallig.",
        en: "Dub techno brought the studio techniques of dub reggae to techno, made famous by Basic Channel from Berlin. Minimal is stripped back too, but sounds dry rather than echoey.",
      },
    },
    {
      id: "techhouse-bridge",
      question: { de: "Welches Subgenre gilt als Brücke zwischen House und Techno?", en: "Which subgenre is seen as the bridge between house and techno?" },
      options: [
        { de: "Tech House", en: "Tech House" },
        { de: "Minimal Techno", en: "Minimal Techno" },
      ],
      explain: {
        de: "Tech House verbindet swingende House-Grooves mit Techno-Sounds, rollenden Basslines und Vocal-Schnipseln. Minimal ist viel leerer und kommt ohne Vocals aus.",
        en: "Tech house combines swinging house grooves with techno sounds, rolling basslines and vocal snippets. Minimal is much emptier and does without vocals.",
      },
    },
    {
      id: "hardstyle-kick",
      question: { de: "Was ist das Erkennungsmerkmal von Hardstyle?", en: "What is the trademark of hardstyle?" },
      options: [
        { de: "Eine verzerrte Kick mit tonalem Nachklang (Reverse Bass)", en: "A distorted kick with a tonal tail (reverse bass)" },
        { de: "Nach jeder Kick ein rollender Bass im Offbeat", en: "A rolling offbeat bass after every kick" },
      ],
      explain: {
        de: "Bei Hardstyle ist die Kick selbst der Bass: verzerrt und mit einem gezogenen Nachklang, der fast eine Melodie spielt. Der rollende Offbeat-Bass ist typisch für Frenchcore.",
        en: "In hardstyle the kick itself is the bass: distorted, with a drawn-out tail that almost plays a melody. The rolling offbeat bass is typical of frenchcore.",
      },
    },
    {
      id: "gabber-sound",
      question: { de: "Was ist typisch für Gabber?", en: "What is typical of gabber?" },
      options: [
        { de: "Eine extrem verzerrte, übersteuerte Kick und Shouts", en: "An extremely distorted, overdriven kick and shouts" },
        { de: "Hochgepitchte Mickymaus-Stimmen und Piano", en: "Pitched-up chipmunk vocals and piano" },
      ],
      explain: {
        de: "Gabber aus Rotterdam ist roh und aggressiv: fast nur eine kaputt verzerrte Kick, dazu Shouts und schrille Hoover-Synths. Mickymaus-Stimmen und Piano gehören zu Happy Hardcore.",
        en: "Gabber from Rotterdam is raw and aggressive: little more than a brutally distorted kick, plus shouts and shrill hoover synths. Chipmunk vocals and piano belong to happy hardcore.",
      },
    },
    {
      id: "minimal-sound",
      question: { de: "In welchem Subgenre passiert fast nichts – trockene Kick, Klicks und viel Leere?", en: "In which subgenre does almost nothing happen – a dry kick, clicks and lots of empty space?" },
      options: [
        { de: "Minimal Techno", en: "Minimal Techno" },
        { de: "Tech House", en: "Tech House" },
      ],
      explain: {
        de: "Minimal Techno ist auf wenige Elemente reduziert, die sich nur ganz langsam verändern. Tech House ist voller und groovt mit Vocal-Schnipseln.",
        en: "Minimal techno is stripped down to a few elements that change only very slowly. Tech house is fuller and grooves with vocal snippets.",
      },
    },
    {
      id: "gabberpop-vs-gabber",
      question: { de: "Was unterscheidet Gabberpop von Gabber?", en: "What sets gabberpop apart from gabber?" },
      options: [
        { de: "Eingängige Pop-Melodien zum Mitsingen", en: "Catchy sing-along pop melodies" },
        { de: "Eine noch stärker verzerrte Kick", en: "An even more distorted kick" },
      ],
      explain: {
        de: "Gabberpop nimmt die Gabber-Kick, macht sie sauberer und legt fröhliche Melodien und Pop- oder Rap-Vocals darüber. Roher und verzerrter ist der klassische Gabber.",
        en: "Gabberpop takes the gabber kick, cleans it up and adds cheerful melodies and pop or rap vocals on top. Classic gabber is the rawer, more distorted one.",
      },
    },
    {
      id: "schranz-sound",
      question: { de: "Was ist typisch für Schranz?", en: "What is typical of schranz?" },
      options: [
        { de: "Scheppernde, stark komprimierte Percussion-Loops", en: "Clattering, heavily compressed percussion loops" },
        { de: "Euphorische Trance-Melodien", en: "Euphoric trance melodies" },
      ],
      explain: {
        de: "Schranz ist deutscher Hardtechno: brachial, kaum melodisch, wie eine Maschine, die sich hochdreht. Trance-Melodien über harter Kick sind typisch für Trancecore.",
        en: "Schranz is German hard techno: brutal, barely melodic, like a machine revving up. Trance melodies over a hard kick are typical of trancecore.",
      },
    },
    {
      id: "happy-sound",
      question: { de: "In welchem Subgenre hört man hochgepitchte Mickymaus-Stimmen und Piano-Riffs?", en: "Which subgenre has pitched-up chipmunk vocals and piano riffs?" },
      options: [
        { de: "Happy Hardcore", en: "Happy Hardcore" },
        { de: "Gabber", en: "Gabber" },
      ],
      explain: {
        de: "Happy Hardcore entstand Mitte der 1990er als fröhlicher Gegenpol zum düsteren Hardcore. Gabber ist roh und fast ohne Melodie.",
        en: "Happy hardcore emerged in the mid-1990s as a cheerful counterpart to dark hardcore. Gabber is raw and has almost no melody.",
      },
    },
    {
      id: "frenchcore-sound",
      question: { de: "Was ist typisch für Frenchcore?", en: "What is typical of frenchcore?" },
      options: [
        { de: "Nach jeder Kick ein rollender Bass im Offbeat, oft mit Geigen", en: "A rolling offbeat bass after every kick, often with violins" },
        { de: "Eine gedämpfte Kick mit viel Hall", en: "A muffled kick with lots of reverb" },
      ],
      explain: {
        de: "Frenchcore ist sehr schneller Hardcore um 190–220 BPM: Kick und Offbeat-Bass wechseln sich ab wie ein Galopp, dazu Klassik-Samples. Gedämpfte Kick und Hall gehören zu Dub-Techno.",
        en: "Frenchcore is very fast hardcore around 190–220 BPM: kick and offbeat bass alternate like a gallop, with classical samples. A muffled kick and reverb belong to dub techno.",
      },
    },
    {
      id: "speedcore-sound",
      question: { de: "Woran erkennst du Speedcore?", en: "How do you recognise speedcore?" },
      options: [
        { de: "Die Kicks verschwimmen fast zu einem Brummen", en: "The kicks almost blur into a buzz" },
        { de: "Ein lockerer, swingender Groove", en: "A loose, swinging groove" },
      ],
      explain: {
        de: "Speedcore liegt meist ab etwa 300 BPM, so schnell, dass man die Kicks nicht mehr einzeln hört. Ein lockerer, swingender Groove ist typisch für Tech House.",
        en: "Speedcore usually starts at around 300 BPM, so fast that you can't hear the kicks one by one any more. A loose, swinging groove is typical of tech house.",
      },
    },
    {
      id: "ghettotech-sound",
      question: { de: "Was ist typisch für Ghetto Tech?", en: "What is typical of ghetto tech?" },
      options: [
        { de: "Schnelle 808-Beats mit frechen, wiederholten Vocal-Loops", en: "Fast 808 beats with cheeky, repeated vocal loops" },
        { de: "Lange Synth-Flächen und Strings", en: "Long synth pads and strings" },
      ],
      explain: {
        de: "Ghetto Tech ist ein Detroiter Clubsound der 1990er, z. B. von DJ Assault und DJ Godfather. Flächen und Strings sind typisch für Detroit Techno.",
        en: "Ghetto tech is a 1990s Detroit club sound, e.g. by DJ Assault and DJ Godfather. Pads and strings are typical of Detroit techno.",
      },
    },
    {
      id: "progressive-sound",
      question: { de: "Was ist typisch für Progressive Techno?", en: "What is typical of progressive techno?" },
      options: [
        { de: "Lange Tracks, die sich Schicht für Schicht steigern, ohne Drop", en: "Long tracks that build layer by layer, with no drop" },
        { de: "Kurze, frech wiederholte Vocal-Loops", en: "Short, cheekily repeated vocal loops" },
      ],
      explain: {
        de: "Progressive Techno treibt gleichmäßig und baut sich langsam auf, indem immer neue Spuren dazukommen. Freche Vocal-Loops gehören zu Ghetto Tech.",
        en: "Progressive techno drives steadily and builds slowly as new layers keep coming in. Cheeky vocal loops belong to ghetto tech.",
      },
    },
    {
      id: "industrial-sound",
      question: { de: "Was ist typisch für Industrial Hardcore?", en: "What is typical of industrial hardcore?" },
      options: [
        { de: "Metallische Maschinengeräusche und Noise, kaum Melodie", en: "Metallic machine sounds and noise, hardly any melody" },
        { de: "Fröhliche Piano-Riffs", en: "Cheerful piano riffs" },
      ],
      explain: {
        de: "Industrial Hardcore ist düster und experimentell, oft langsamer als Gabber, mit schwerer verzerrter Kick. Piano-Riffs gehören zu Happy Hardcore.",
        en: "Industrial hardcore is dark and experimental, often slower than gabber, with a heavy distorted kick. Piano riffs belong to happy hardcore.",
      },
    },
    {
      id: "trancecore-sound",
      question: { de: "In welchem Subgenre treffen Trance-Melodien auf eine schnelle Hardcore-Kick?", en: "In which subgenre do trance melodies meet a fast hardcore kick?" },
      options: [
        { de: "Trancecore", en: "Trancecore" },
        { de: "Hardstyle", en: "Hardstyle" },
      ],
      explain: {
        de: "Trancecore kommt aus UK und Schottland der späten 1990er, mit hymnischen Leads im Hardcore-Tempo um 170 BPM. Hardstyle ist langsamer (um 150 BPM) und hat den typischen Reverse Bass.",
        en: "Trancecore comes from late-1990s UK and Scotland, with anthemic leads at hardcore tempo around 170 BPM. Hardstyle is slower (around 150 BPM) and has the typical reverse bass.",
      },
    },
  ],
}
