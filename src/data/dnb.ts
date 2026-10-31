import type { GenreFamily } from './types'

// Subgenres, descriptions and Apple Music previews (checked 10.10.2026).
export const dnb: GenreFamily = {
  slug: "dnb",
  leaderboardId: "dnb",
  theme: "dnb",
  title: "Drum & Bass",
  brand: "DRUM & BASS",
  cardName: "DRUM\n& BASS",
  bpm: "~174 BPM",
  word: { de: "Subgenre", en: "subgenre" },
  subgenres: {
    jungle: {
      name: { de: "Jungle", en: "Jungle" },
      desc: {
        de: "Zerhackte, neu arrangierte Breakbeats aus Funk- und Soul-Platten, etwa 160–170 BPM. Der Rhythmus ist verschachtelter als der typische DnB-Beat mit Snare auf 2 und 4, dazu tiefe Subbässe, alte Rave-Synths und Dub-Samples.",
        en: "Chopped-up, rearranged breakbeats sampled from funk and soul records, around 160–170 BPM. The rhythm is busier than the typical DnB beat with snares on 2 and 4, plus deep sub-bass, old rave synths and dub samples.",
      },
      trait: { de: "Wild zerhackte Breakbeats über einem tiefen Dub-Bass", en: "Wildly chopped breakbeats over a deep dub bass" },
      tip: {
        de: "Achte auf die Drums: wild zerhackte Breaks – und darunter ein tiefer, ruhiger Dub-Bass. Das ist Jungle.",
        en: "Listen to the drums: wildly chopped breaks – with a deep, calm dub bass underneath. That's jungle.",
      },
      tracks: [
        { appleId: 1409332709, artist: "Origin Unknown", title: "Valley of the Shadows", previewPath: "AudioPreview221/v4/2c/9d/fb/2c9dfb11-2b81-0ff0-871d-5e1cd142d17c/mzaf_12553130356207885986.plus.aac.p.m4a", start: 18 },
        { appleId: 1678881875, artist: "Remarc", title: "R.I.P. (DJ Hype Remix)", previewPath: "AudioPreview116/v4/3a/7a/ac/3a7aac16-1e77-e9ac-2e99-e2e3d0b733ec/mzaf_14087471037923864191.plus.aac.p.m4a" },
        { appleId: 1420032789, artist: "Goldie", title: "Inner City Life", previewPath: "AudioPreview221/v4/f8/53/11/f8531121-7185-6809-b5ef-b77951dc3258/mzaf_1283873732990396984.plus.aac.p.m4a", start: 0 },
        { appleId: 1284005258, artist: "Dillinja", title: "The Angels Fell", previewPath: "AudioPreview221/v4/a2/00/40/a2004069-ff85-0917-de5e-15f2d9801bdc/mzaf_11371480439485186732.plus.aac.p.m4a" },
        { appleId: 254961927, artist: "Dead Dred", title: "Dred Bass", previewPath: "AudioPreview125/v4/54/4c/5b/544c5b45-f930-561f-5c25-e7e396186467/mzaf_12879887811224967091.plus.aac.p.m4a" },
        { appleId: 119731724, artist: "Omni Trio", title: "Feel Good (Original In Demand Mix)", previewPath: "AudioPreview125/v4/37/d1/33/37d13334-3ccb-a7a1-4cf8-a1fc71d6a56c/mzaf_12287582641054949724.plus.aac.p.m4a", start: 0 },
      ],
    },
    ragga: {
      name: { de: "Ragga / Reggae DnB", en: "Ragga / Reggae DnB" },
      desc: {
        de: "Jungle oder DnB mit starkem Reggae- und Dancehall-Einschlag: MC-Vocals im jamaikanischen Stil, Offbeat-Chops und Soundsystem-Atmosphäre.",
        en: "Jungle or DnB with a strong reggae and dancehall flavour: Jamaican-style MC vocals, offbeat chops and a sound-system vibe.",
      },
      trait: { de: "MC-Vocals im jamaikanischen Stil über Breakbeats", en: "Jamaican-style MC vocals over breakbeats" },
      tip: {
        de: "Achte auf die Stimme: ein MC oder Toaster im jamaikanischen Patois über Breakbeats – das macht Ragga aus.",
        en: "Listen to the voice: an MC or toaster in Jamaican patois over breakbeats – that's what makes ragga.",
      },
      tracks: [
        { appleId: 1422928404, artist: "M-Beat", title: "Incredible (feat. General Levy)", previewPath: "AudioPreview211/v4/68/fc/a5/68fca5a8-fbb4-c583-0c00-afdedd0dea59/mzaf_2188878326217957496.plus.aac.p.m4a", start: 18 },
        { appleId: 1875006247, artist: "Benny Page", title: "Turn Down the Lights", previewPath: "AudioPreview211/v4/5c/e0/99/5ce09971-8cec-f398-077f-1b824f30dbc8/mzaf_10948475620863797035.plus.aac.p.m4a", start: 0 },
        { appleId: 6800714639, artist: "Congo Natty", title: "Junglist (feat. Pete Bouncer)", previewPath: "AudioPreview211/v4/48/21/d1/4821d142-4e0d-e34b-1b12-23d1afdcd5bf/mzaf_7027166301269565584.plus.aac.p.m4a", start: 15 },
        { appleId: 917243869, artist: "Benny Page", title: "Champion Sound (Serial Killaz Remix) [feat. Assassin]", previewPath: "AudioPreview115/v4/4c/0f/c0/4c0fc003-4bd1-4c0c-c3f3-e36f604449da/mzaf_472397727850501000.plus.aac.p.m4a", start: 18 },
        { appleId: 573192963, artist: "Serial Killaz", title: "Walk and Skank", previewPath: "AudioPreview115/v4/2a/a8/cf/2aa8cf11-20c1-5c52-fc7b-eff356307bff/mzaf_13784792836254730377.plus.aac.p.m4a" },
        { appleId: 573192964, artist: "Serial Killaz", title: "Put It On", previewPath: "AudioPreview125/v4/b1/91/52/b191526c-243f-09b9-63f6-c3134e56fe90/mzaf_3674196199321303216.plus.aac.p.m4a", start: 0 },
        { appleId: 1712139033, artist: "Benny Page & MC Spyda", title: "Walk Like a Junglist", previewPath: "AudioPreview221/v4/a2/3c/cd/a23ccda3-814e-234e-5fec-46cd8a464564/mzaf_5975781921420907934.plus.aac.p.m4a", start: 18 },
        { appleId: 1457058144, artist: "Benny Page & Doktor", title: "Warn Dem", previewPath: "AudioPreview221/v4/74/91/37/74913754-e5a6-c56d-fe89-d3e7ab443a6c/mzaf_14859543311007225722.plus.aac.p.m4a", start: 2 },
        { appleId: 1708249056, artist: "Chopstick Dubplate", title: "Bounty Hunter (feat. Cheshire Cat)", previewPath: "AudioPreview116/v4/ab/29/62/ab29626d-5379-429f-b74b-b3178c5a5180/mzaf_1669071693321314496.plus.aac.p.m4a", start: 0 },
      ],
    },
    liquid: {
      name: { de: "Liquid", en: "Liquid" },
      desc: {
        de: "Smooth und melodisch, beeinflusst von Soul, Jazz und House. Oft Piano, Rhodes, warme Pads und Gesang. Die Drums rollen, wirken aber nie aggressiv.",
        en: "Smooth and melodic, influenced by soul, jazz and house. Often piano, Rhodes, warm pads and vocals. The drums roll but never feel aggressive.",
      },
      trait: { de: "Gesang oder Piano über weichen, rollenden Drums", en: "Vocals or piano over soft, rolling drums" },
      tip: {
        de: "Achte auf die Melodie: Gesang, Piano oder Rhodes über weichen, rollenden Drums, kein harter Drop – typisch Liquid.",
        en: "Listen to the melody: vocals, piano or Rhodes over soft, rolling drums, no hard drop – typical liquid.",
      },
      tracks: [
        { appleId: 1529147352, artist: "High Contrast", title: "If We Ever (2018 Remaster)", previewPath: "AudioPreview221/v4/03/b5/73/03b573a6-62c2-2109-9f88-fa0c61cd0633/mzaf_15815783100235776315.plus.aac.p.m4a", start: 18 },
        { appleId: 410121163, artist: "London Elektricity", title: "Just One Second (Apex VIP)", previewPath: "AudioPreview125/v4/58/99/1a/58991a12-c185-a4df-e1e3-3e9f40a01092/mzaf_16109120355471335396.plus.aac.p.m4a", start: 2 },
        { appleId: 1688696901, artist: "Netsky", title: "Iron Heart", previewPath: "AudioPreview211/v4/15/cc/5b/15cc5b4f-53bf-94ac-9b65-7ccfcdd80ec9/mzaf_1613768268732277963.plus.aac.p.m4a", start: 0 },
        { appleId: 397750237, artist: "Logistics", title: "Together", previewPath: "AudioPreview211/v4/c0/b9/e8/c0b9e8e7-09b8-0148-5614-7dcf2fbd3c1d/mzaf_7508183467347764795.plus.aac.p.m4a", start: 16 },
        { appleId: 1476762754, artist: "Hybrid Minds", title: "Lost", previewPath: "AudioPreview221/v4/58/33/b4/5833b461-a75e-d7e0-6ffe-fdda515403f0/mzaf_9896718075842851276.plus.aac.p.m4a", start: 18 },
        { appleId: 1125766119, artist: "Calibre & High Contrast", title: "Mr Majestic", previewPath: "AudioPreview221/v4/ab/af/30/abaf3023-b9a1-75cf-39c8-ec5e99f2d343/mzaf_5741929075079033868.plus.aac.p.m4a", start: 2 },
        { appleId: 409099001, artist: "Netsky", title: "Memory Lane", previewPath: "AudioPreview211/v4/f3/5e/85/f35e8581-357a-46d2-2eb2-2db987359411/mzaf_1704972533415094822.plus.aac.p.m4a" },
        { appleId: 1529149318, artist: "High Contrast", title: "Racing Green", previewPath: "AudioPreview211/v4/a5/86/64/a5866465-6b25-c155-bd69-e0ce909367c2/mzaf_14248354483110686729.plus.aac.p.m4a", start: 2 },
      ],
    },
    dancefloor: {
      name: { de: "Dancefloor", en: "Dancefloor" },
      desc: {
        de: "Die poppigste Spielart: große Lead-Synths, eingängige Hooks und Vocals, klarer Aufbau mit Build-up und Drop. Klingt nah an EDM und Festival-Sound.",
        en: "The poppiest flavour: big lead synths, catchy hooks and vocals, a clear build-up and drop. Sounds close to EDM and festival music.",
      },
      trait: { de: "Großer Aufbau mit Festival-Drop und Pop-Hook", en: "A big build-up with a festival drop and a pop hook" },
      tip: {
        de: "Achte auf den Aufbau: Build-up, großer Drop, eingängige Hook – klingt wie ein Festival-Hit, also Dancefloor.",
        en: "Listen to the structure: build-up, big drop, catchy hook – it sounds like a festival hit, so it's dancefloor.",
      },
      tracks: [
        { appleId: 1444613177, artist: "Sub Focus", title: "Endorphins (feat. Alex Clare) [Sub Focus Vs. Fred V & Grafix Remix]", previewPath: "AudioPreview221/v4/bc/41/32/bc4132ed-8fe5-21a5-fe1e-f9db35f67d40/mzaf_2779166964207217296.plus.aac.p.m4a", start: 18 },
        { appleId: 521724473, artist: "Rudimental", title: "Feel the Love (feat. John Newman)", previewPath: "AudioPreview211/v4/af/c5/26/afc526f4-a7e3-c72b-c785-3b2cb9a18231/mzaf_12623888197983404712.plus.aac.p.m4a", start: 18 },
        { appleId: 277503735, artist: "Pendulum", title: "Propane Nightmares", previewPath: "AudioPreview115/v4/80/dc/69/80dc69a0-34fd-175d-b660-f806d6df88e8/mzaf_4472172796883771812.plus.aac.p.m4a", start: 18 },
        { appleId: 1434840301, artist: "Sub Focus & Dimension", title: "Desire", previewPath: "AudioPreview211/v4/6e/e7/c3/6ee7c3b2-af12-71a5-a9fa-cc7bf4857b44/mzaf_9275378630279510726.plus.aac.p.m4a", start: 7 },
        { appleId: 1760321175, artist: "Chase & Status & Stormzy", title: "BACKBONE", previewPath: "AudioPreview211/v4/fb/fe/a2/fbfea299-7628-98b8-cc31-0f3177a5d766/mzaf_2816882771087606044.plus.aac.p.m4a", start: 16 },
        { appleId: 267035370, artist: "Pendulum", title: "Granite", previewPath: "AudioPreview125/v4/9e/7b/c2/9e7bc21e-6301-9d88-c7d2-90d4484f0e92/mzaf_4290163843084913230.plus.aac.p.m4a", start: 0 },
        { appleId: 1527298280, artist: "DJ Fresh", title: "Gold Dust (Radio Edit)", previewPath: "AudioPreview221/v4/07/b3/59/07b35954-64da-d518-db7e-2d2646eccd23/mzaf_4516575332748345382.plus.aac.p.m4a", start: 18 },
      ],
    },
    neurofunk: {
      name: { de: "Neurofunk", en: "Neurofunk" },
      desc: {
        de: "Dunkel, technisch, futuristisch. Im Mittelpunkt steht ein stark bearbeiteter, gefilterter und verzerrter Bass im Mittenbereich, die Drums sind präzise und hart.",
        en: "Dark, technical, futuristic. The focus is a heavily processed, filtered and distorted mid-range bass, with tight, hard-hitting drums.",
      },
      trait: { de: "Ein komplexer, knurrender Mitten-Bass wie von einer Maschine", en: "A complex, growling mid-range bass like a machine" },
      tip: {
        de: "Achte auf den Bass: Er knurrt, „spricht“ und verändert sich ständig, dazu harte, präzise Drums – das ist Neurofunk.",
        en: "Listen to the bass: it growls, “talks” and keeps changing, with hard, precise drums – that's neurofunk.",
      },
      tracks: [
        { appleId: 314391367, artist: "Noisia", title: "Stigma", previewPath: "AudioPreview115/v4/c3/48/76/c348769c-bf67-8a0d-95ec-53af7ae91a3d/mzaf_2997876393937979564.plus.aac.p.m4a", start: 18 },
        { appleId: 1715019834, artist: "Mefjus", title: "Emulation", previewPath: "AudioPreview126/v4/05/fb/aa/05fbaa3d-62e7-bcb1-6101-d5d32bb24f0e/mzaf_13432586045890325565.plus.aac.p.m4a", start: 18 },
        { appleId: 1674350308, artist: "Mefjus", title: "Blitz", previewPath: "AudioPreview126/v4/d6/38/15/d63815d8-60db-a41d-ce43-76023704513e/mzaf_15643221736354168125.plus.aac.p.m4a" },
        { appleId: 1375359880, artist: "Mefjus", title: "Sinkhole", previewPath: "AudioPreview125/v4/fa/52/53/fa52535e-0d56-44ab-4b9a-6929282ac603/mzaf_18017097309495937900.plus.aac.p.m4a", start: 18 },
        { appleId: 513082306, artist: "Neonlight & Mefjus", title: "Puppet Master", previewPath: "AudioPreview125/v4/1a/c2/e0/1ac2e050-1773-f293-34bf-8e2bbf6550dc/mzaf_11385608751851847216.plus.aac.p.m4a", start: 18 },
        { appleId: 734186285, artist: "Gridlok & Prolix", title: "Slingshot", previewPath: "AudioPreview115/v4/ab/71/0c/ab710ce9-fbfe-4f67-b895-605c41c6efa6/mzaf_4781739881879799691.plus.aac.p.m4a", start: 14 },
      ],
    },
    jumpup: {
      name: { de: "Jump Up", en: "Jump Up" },
      desc: {
        de: "Verspielt und auf Hype ausgelegt: simple, stampfende Beats und ein eingängiger, oft quäkender Mitten-Bass als Hook. Gemacht, um auf dem Floor durchzudrehen.",
        en: "Playful and all about hype: simple, stomping beats and a catchy, often squelchy mid-range bass as the hook. Made for going wild on the dancefloor.",
      },
      trait: { de: "Ein hüpfender, frecher Bass-Riff zum Mitsingen", en: "A bouncy, cheeky bass riff you can sing along to" },
      tip: {
        de: "Achte auf den Bass-Riff: frech, hüpfend, zum Mitsingen, dazu stampfende Beats – das ist Jump Up.",
        en: "Listen to the bass riff: cheeky, bouncy, made to sing along, over stomping beats – that's jump up.",
      },
      tracks: [
        { appleId: 264129961, artist: "DJ Hazard & D Minds", title: "Mr Happy", previewPath: "AudioPreview221/v4/46/96/1b/46961b2a-06b3-aa88-1d21-7a86ab4f408e/mzaf_4468526727694814616.plus.aac.p.m4a", start: 10 },
        { appleId: 1282939530, artist: "Macky Gee", title: "Tour", previewPath: "AudioPreview211/v4/eb/11/47/eb114716-c5cb-3ab5-e489-2e328e30deb1/mzaf_9118328718401461655.plus.aac.p.m4a", start: 7 },
        { appleId: 1760817124, artist: "Bou & Trigga", title: "Veteran (VIP)", previewPath: "AudioPreview211/v4/7b/be/08/7bbe08b3-99d0-9859-c480-406e28844566/mzaf_15266326618076709747.plus.aac.p.m4a", start: 14 },
        { appleId: 1680227803, artist: "Hedex", title: "MHITR (Semi-Automatic) [feat. Eksman]", previewPath: "AudioPreview211/v4/b2/19/30/b21930d8-6f55-7feb-1ca9-388790442373/mzaf_5483164715611054655.plus.aac.p.m4a" },
        { appleId: 275979915, artist: "DJ Hazard", title: "Killers Don't Die", previewPath: "AudioPreview221/v4/ea/85/3f/ea853f75-6c8c-4e91-90aa-e4eb982c6512/mzaf_14151289002853527099.plus.aac.p.m4a", start: 9 },
        { appleId: 1684992454, artist: "Kings Of The Rollers", title: "Burnt Ends (Circuits Rewire)", previewPath: "AudioPreview221/v4/ee/27/53/ee2753e7-88e1-950a-f058-9d8d1a1df943/mzaf_14183057053129702015.plus.aac.p.m4a", start: 7 },
        { appleId: 264130796, artist: "DJ Hazard & D Minds", title: "Super Drunk", previewPath: "AudioPreview211/v4/95/61/b1/9561b152-6e72-261b-2dba-a5fc3f7b99de/mzaf_17044326789884436271.plus.aac.p.m4a", start: 6 },
      ],
    },
    deep: {
      name: { de: "Deep / Minimal", en: "Deep / Minimal" },
      desc: {
        de: "Reduziert und kühl: Drums und tiefer Sub-Bass stehen im Zentrum, kaum Mitten oder Melodie. Viel Raum, minimalistische Atmosphäre.",
        en: "Stripped back and cool: drums and deep sub-bass take centre stage, with little mid-range or melody. Lots of space, minimalist atmosphere.",
      },
      trait: { de: "Fast nur Drums und tiefer Sub-Bass, viel Leere dazwischen", en: "Almost only drums and deep sub-bass, lots of space in between" },
      tip: {
        de: "Achte auf das, was fehlt: kaum Melodie, kaum Mitten – nur Drums und tiefer Sub-Bass mit viel Raum. Das ist Deep / Minimal.",
        en: "Listen to what's missing: hardly any melody or mid-range – just drums and deep sub-bass with lots of space. That's deep / minimal.",
      },
      tracks: [
        { appleId: 6798656113, artist: "Commix", title: "Be True", previewPath: "AudioPreview221/v4/ed/5b/02/ed5b0295-80a1-91cc-6316-e0300db104b1/mzaf_147201775560157785.plus.aac.p.m4a", start: 2 },
        { appleId: 1116438466, artist: "Calibre", title: "Drop It Down", previewPath: "AudioPreview125/v4/cf/04/73/cf0473b5-f556-6c20-5b9e-32630d0ee1d3/mzaf_3569411413296688184.plus.aac.p.m4a" },
        { appleId: 6798673101, artist: "Commix", title: "Satellite Type 2", previewPath: "AudioPreview221/v4/20/1b/89/201b89eb-077c-a8dc-d038-25520f2353d2/mzaf_10193885392405986876.plus.aac.p.m4a" },
        { appleId: 1283505993, artist: "Skeptical", title: "Blue Eyes", previewPath: "AudioPreview125/v4/24/e2/72/24e27222-8462-1dce-b4af-08d73128c553/mzaf_18251150123864121388.plus.aac.p.m4a" },
        { appleId: 1678622218, artist: "Instra:mental", title: "Watching You", previewPath: "AudioPreview116/v4/94/36/96/943696e7-0eef-5d74-db0e-58a81e1cb04d/mzaf_14625599980597511646.plus.aac.p.m4a", start: 13 },
        { appleId: 1746381857, artist: "DLR", title: "Tugboat (The Moneyshot VIP)", previewPath: "AudioPreview211/v4/36/c9/16/36c9167e-d186-4997-7dd3-6e65ad199a91/mzaf_5787834434914107419.plus.aac.p.m4a", start: 18 },
      ],
    },
    halftime: {
      name: { de: "Halftime", en: "Halftime" },
      desc: {
        de: "Gleiches Tempo wie DnB, aber der Beat fühlt sich halb so schnell an: die Snare kommt nur auf der 3 statt auf 2 und 4 – eine Snare pro Takt statt zwei. Schwer und schleppend, oft mit Hip-Hop- oder Dubstep-Einflüssen.",
        en: "Same tempo as DnB, but the beat feels half as fast: the snare hits only on the 3 instead of on 2 and 4 – one snare per bar instead of two. Heavy and dragging, often with hip-hop or dubstep influences.",
      },
      trait: { de: "Die Snare kommt nur auf der 3 – fühlt sich halb so schnell an", en: "The snare only hits on the 3 – it feels half as fast" },
      tip: {
        de: "Achte auf die Snare: nur einmal pro Takt, auf der 3. Deshalb fühlt sich der Beat halb so schnell an – Halftime.",
        en: "Listen to the snare: only once per bar, on the 3. That's why the beat feels half as fast – halftime.",
      },
      tracks: [
        { appleId: 6798759316, artist: "Om Unit", title: "Parallel", previewPath: "AudioPreview211/v4/9d/5d/ed/9d5ded73-956a-1c93-d39f-d8b6ff06279f/mzaf_18127851766372322981.plus.aac.p.m4a", start: 11 },
        { appleId: 1743481022, artist: "Ivy Lab & Halogenix", title: "Click Clack", previewPath: "AudioPreview211/v4/a1/ea/59/a1ea59d6-53b5-c838-374f-6120690840c1/mzaf_16357300487107074534.plus.aac.p.m4a", start: 15 },
        { appleId: 1720361024, artist: "Martyn & Om Unit", title: "Dragonfly", previewPath: "AudioPreview116/v4/7e/16/51/7e165176-3e94-376a-b99e-212a31d453c7/mzaf_8443564564259313134.plus.aac.p.m4a", start: 10 },
        { appleId: 1828499916, artist: "Alix Perez", title: "U", previewPath: "AudioPreview221/v4/9f/75/a0/9f75a02c-7a57-8064-2eb9-9f22c0a38b20/mzaf_13799965567933378859.plus.aac.p.m4a", start: 15 },
        { appleId: 1482826646, artist: "Shades & Ivy Lab", title: "Sleaze (feat. Alix Perez & Eprom)", previewPath: "AudioPreview115/v4/c5/bd/4a/c5bd4a8d-193e-b462-35fc-ea6f1cfca85e/mzaf_13515928003881669967.plus.aac.p.m4a", start: 18 },
        { appleId: 1743474458, artist: "Ivy Lab", title: "Cake", previewPath: "AudioPreview211/v4/7a/be/de/7abedec3-7974-e7be-56c5-f3df25d7dc6b/mzaf_7361061032407920084.plus.aac.p.m4a", start: 1 },
        { appleId: 1482921625, artist: "Om Unit", title: "Fire Exit", previewPath: "AudioPreview115/v4/a7/a4/c5/a7a4c5ad-106d-8722-5be1-3b26569f5dd6/mzaf_3955570619483628178.plus.aac.p.m4a", start: 18 },
      ],
    },
    intelligent: {
      name: { de: "Intelligent / Atmospheric", en: "Intelligent / Atmospheric" },
      desc: {
        de: "Luftig, verträumt und jazzig: schwebende Pads, Streicher und Jazz-Akkorde über Breaks, die eher schlurfen als angreifen. Weicher Bass im Hintergrund, kaum Gesang.",
        en: "Airy, dreamy and jazzy: floating pads, strings and jazz chords over breaks that shuffle rather than attack. Soft bass in the background, hardly any vocals.",
      },
      trait: { de: "Schwebende Flächen und Jazz-Akkorde, kaum Gesang", en: "Floating pads and jazz chords, hardly any vocals" },
      tip: {
        de: "Achte auf die Atmosphäre: lange, schwebende Flächen und Jazz-Akkorde, sanfte Breaks, kaum Gesang – Intelligent.",
        en: "Listen to the atmosphere: long, floating pads and jazz chords, gentle breaks, hardly any vocals – intelligent.",
      },
      tracks: [
        { appleId: 595853840, artist: "LTJ Bukem", title: "Music", previewPath: "AudioPreview211/v4/48/f0/9c/48f09c0a-ddb4-a80f-05cc-f58c438df961/mzaf_3209571269850311339.plus.aac.p.m4a", start: 1 },
        { appleId: 595779877, artist: "LTJ Bukem", title: "Journey Inwards", previewPath: "AudioPreview221/v4/a5/1e/ad/a51eadfe-0fd5-1def-68c4-f2d0d6e98b57/mzaf_9981695374530133758.plus.aac.p.m4a", start: 2 },
        { appleId: 595861917, artist: "P.F.M.", title: "One & Only 2002 Rework", previewPath: "AudioPreview221/v4/16/85/4b/16854b89-d463-6451-ebf1-18df7329e305/mzaf_7485057236890643039.plus.aac.p.m4a", start: 18 },
        { appleId: 6807839742, artist: "Hidden Agenda", title: "The Flute Tune", previewPath: "AudioPreview211/v4/22/ec/65/22ec65b4-9783-21cc-0b85-49c9b650b861/mzaf_3702452099624443658.plus.aac.p.m4a", start: 0 },
        { appleId: 595806952, artist: "Big Bud", title: "Darker Than Blue", previewPath: "AudioPreview221/v4/78/05/51/7805512a-ae8b-fe82-e8a4-ab7a760b18d6/mzaf_12599864410311243563.plus.aac.p.m4a", start: 18 },
        { appleId: 6798669983, artist: "Peshay", title: "On the Nile (2017 Remaster)", previewPath: "AudioPreview211/v4/0c/49/7e/0c497e0c-403a-d35e-cd51-d2874f6b6681/mzaf_7152630321296484985.plus.aac.p.m4a", start: 0 },
        { appleId: 724527293, artist: "Photek", title: "The Hidden Camera", previewPath: "AudioPreview115/v4/ca/46/36/ca4636ec-c6ec-9d2d-7127-02df24fb3713/mzaf_13701117067436843594.plus.aac.p.m4a", start: 1 },
      ],
    },
    darkstep: {
      name: { de: "Darkstep / Crossbreed", en: "Darkstep / Crossbreed" },
      desc: {
        de: "Extrem hart und düster: stark verzerrte, „misshandelte“ Amen-Breaks, aggressiver Bass und Horror-Samples. Crossbreed mischt DnB zusätzlich mit Gabber- und Hardcore-Kicks.",
        en: "Extremely hard and dark: heavily distorted, “abused” Amen breaks, aggressive bass and horror samples. Crossbreed also mixes DnB with gabber and hardcore kicks.",
      },
      trait: { de: "Brutal verzerrte Breaks und Horror-Atmosphäre", en: "Brutally distorted breaks and a horror atmosphere" },
      tip: {
        de: "Achte auf die Härte: brutal verzerrte Breaks, aggressiver Bass, Horror-Stimmung – das ist Darkstep / Crossbreed.",
        en: "Listen to the hardness: brutally distorted breaks, aggressive bass, a horror mood – that's darkstep / crossbreed.",
      },
      tracks: [
        { appleId: 1306932210, artist: "Limewax", title: "Everything (2017 Remaster)", previewPath: "AudioPreview125/v4/8c/d2/84/8cd284c3-0671-0b31-08ee-155caf702fe0/mzaf_5049808918605637530.plus.aac.p.m4a", start: 18 },
        { appleId: 274576540, artist: "Evol Intent", title: "Middle of the Night", previewPath: "AudioPreview115/v4/0d/75/ee/0d75eecf-0ac9-41a4-89c5-14aa7e31233c/mzaf_12903970032682217625.plus.aac.p.m4a" },
        { appleId: 277133801, artist: "Technical Itch", title: "Pressure Drop (VIP)", previewPath: "AudioPreview211/v4/64/07/8d/64078d4e-bfd1-deb9-07be-27f2be09f5d0/mzaf_258511220063672561.plus.aac.p.m4a", start: 12 },
        { appleId: 103806244, artist: "Gein", title: "Street Sweeper", previewPath: "AudioPreview115/v4/36/c8/e0/36c8e0e3-36a5-acbf-61b9-8e2db021f63d/mzaf_4865390669254244275.plus.aac.p.m4a", start: 18 },
        { appleId: 378800543, artist: "Gein, Technical Itch & MC Jakes", title: "Killsound", previewPath: "AudioPreview125/v4/4f/ef/dc/4fefdc05-2f2e-c5c3-5fde-ac60a201c7b1/mzaf_9110342182770444955.plus.aac.p.m4a", start: 18 },
        { appleId: 1465156116, artist: "Ewun", title: "Hate Machine (Original)", previewPath: "AudioPreview115/v4/6d/3e/bd/6d3ebda4-c60f-5c4d-1168-f251bc321da7/mzaf_2820224953027545297.plus.aac.p.m4a", start: 18 },
      ],
    },
    techstep: {
      name: { de: "Techstep", en: "Techstep" },
      desc: {
        de: "Kalt, metallisch, dystopisch: ein reduzierter, harter Beat statt zerhackter Breaks, dazu verzerrter Reese-Bass und Einflüsse aus Techno und Industrial. Vorläufer von Neurofunk, aber roher und einfacher.",
        en: "Cold, metallic, dystopian: a stripped-back, hard beat instead of chopped breaks, with distorted Reese bass and influences from techno and industrial. The forerunner of Neurofunk, but rawer and simpler.",
      },
      trait: { de: "Kalter, harter Beat mit verzerrtem Bass, eher roh", en: "A cold, hard beat with distorted bass, rather raw" },
      tip: {
        de: "Achte auf die Kälte: harter, reduzierter Beat und verzerrter Bass, aber roher und einfacher als Neurofunk – Techstep.",
        en: "Listen to the coldness: a hard, stripped-back beat and distorted bass, but rawer and simpler than neurofunk – techstep.",
      },
      tracks: [
        { appleId: 81702111, artist: "Dom & Roland", title: "Thunder", previewPath: "AudioPreview211/v4/69/10/66/691066ca-526f-2f8f-41c5-7bca77b8b97c/mzaf_9842453187044013584.plus.aac.p.m4a", start: 0 },
        { appleId: 102295342, artist: "Dom & Roland", title: "Can't Punish Me", previewPath: "AudioPreview115/v4/de/a0/44/dea044d6-0dc9-7139-ebb4-7c626f85d213/mzaf_18013448515435162446.plus.aac.p.m4a", start: 17 },
        { appleId: 1849140591, artist: "Bad Company UK", title: "The Nine (Remastered)", previewPath: "AudioPreview211/v4/65/6c/5f/656c5f6f-a82c-8742-1a4b-1091b354252f/mzaf_11433313753604882466.plus.aac.p.m4a" },
        { appleId: 1286217155, artist: "Optical", title: "To Shape the Future (Remix)", previewPath: "AudioPreview125/v4/6a/cc/43/6acc43c9-360b-a21e-d8bf-c06b8badf6a7/mzaf_7819275930232310607.plus.aac.p.m4a" },
        { appleId: 106217488, artist: "Dom & Roland", title: "Imagination", previewPath: "AudioPreview125/v4/14/30/3a/14303a49-92ac-5d95-6232-6cc7de13905f/mzaf_16494939726096054885.plus.aac.p.m4a", start: 5 },
      ],
    },
    drumfunk: {
      name: { de: "Drumfunk", en: "Drumfunk" },
      desc: {
        de: "Die Drums sind der Star: Funk- und Soul-Breaks wie Amen oder Apache werden von Hand aufwendig neu geschnitten, verschachtelt und variiert – oft klingt es, als würde jemand live Schlagzeug spielen. Dazu Einflüsse aus Jazz, Funk und Dub.",
        en: "The drums are the star: funk and soul breaks like the Amen or Apache are painstakingly re-cut by hand, layered and varied – it often sounds like someone playing drums live. Plus influences from jazz, funk and dub.",
      },
      trait: { de: "Drums wie ein Schlagzeug-Solo, das sich ständig verändert", en: "Drums like a drum solo that keeps changing" },
      tip: {
        de: "Achte auf die Drums: Sie klingen wie live gespielt und verändern sich ständig – bei Drumfunk sind sie der Star.",
        en: "Listen to the drums: they sound played live and keep changing – in drumfunk they're the star.",
      },
      tracks: [
        { appleId: 1284186032, artist: "Fanu", title: "From Afterlife She Speaks", previewPath: "AudioPreview115/v4/29/e0/c3/29e0c30d-57d0-b959-88b4-d184ad49918e/mzaf_11251773337617752234.plus.aac.p.m4a", start: 15 },
        { appleId: 1514299397, artist: "Fracture & Neptune", title: "Colemanism", previewPath: "AudioPreview113/v4/95/c0/51/95c05178-e719-ffc1-c95c-f9a2ce03da9c/mzaf_8238888752312920117.plus.aac.p.m4a", start: 0 },
        { appleId: 1482839952, artist: "Phuture-T", title: "Perpetual Motion", previewPath: "AudioPreview113/v4/21/b4/35/21b4358e-b7e3-e311-a609-869f53ede04e/mzaf_10959562755696139889.plus.aac.p.m4a", start: 15 },
        { appleId: 6798742583, artist: "Fanu", title: "Headgames", previewPath: "AudioPreview211/v4/32/7a/74/327a74b3-48de-f3a8-8139-1cffd0cf7139/mzaf_8484030019182187755.plus.aac.p.m4a", start: 2 },
        { appleId: 1282776046, artist: "Fanu", title: "Polar Chord", previewPath: "AudioPreview115/v4/9b/16/5c/9b165cce-451d-8251-e5c4-6f9e1d9e8f31/mzaf_2254540847070227817.plus.aac.p.m4a", start: 18 },
        { appleId: 1286313621, artist: "Fanu", title: "Five Ounces", previewPath: "AudioPreview128/v4/62/4f/c4/624fc456-afd4-4952-5553-e73bec72ecd4/mzaf_326981325623625259.plus.aac.p.m4a" },
        { appleId: 692570376, artist: "Phuture-T", title: "Gwarn Badman", previewPath: "AudioPreview211/v4/6c/d6/f3/6cd6f360-e925-7f39-2bc1-6590474f017e/mzaf_10965815970517421210.plus.aac.p.m4a", start: 12 },
        { appleId: 470789571, artist: "Phuture-T", title: "Basement Dub", previewPath: "Music/v4/19/25/73/1925736b-3332-0e69-3bbf-73dff8790582/mzaf_8086516398004414561.plus.aac.p.m4a", start: 0 },
        { appleId: 279136186, artist: "Martsman", title: "8 Bit Bouncer", previewPath: "AudioPreview125/v4/a4/68/d2/a468d2a6-8104-914d-06f7-8ff35635110c/mzaf_15182299398502579902.plus.aac.p.m4a", start: 0 },
      ],
    },
  },
  // Difficulty stages (Phase 3, Word Coach style): the game moves between them by itself and shows "LEVEL n".
  levels: [
    { subgenres: ["liquid", "jumpup", "halftime", "jungle"] },
    {
      subgenres: ["liquid", "jumpup", "halftime", "jungle", "dancefloor", "neurofunk", "ragga", "darkstep"],
      knowledge: ["liquid-sound", "jungle-sound", "ragga-sound", "halftime-feel", "jumpup-sound", "neurofunk-sound", "dancefloor-artist", "darkstep-sound", "foghorn"],
    },
    {
      subgenres: ["liquid", "jumpup", "halftime", "jungle", "dancefloor", "neurofunk", "ragga", "darkstep", "deep", "intelligent", "techstep", "drumfunk"],
      knowledge: ["liquid-sound", "jungle-sound", "ragga-sound", "halftime-feel", "jumpup-sound", "neurofunk-sound", "dancefloor-artist", "darkstep-sound", "foghorn", "liquid-vs-intelligent", "deep-sound", "intelligent-artist", "techstep-vs-neurofunk", "roller", "drumfunk-sound"],
    },
  ],
  knowledge: [
    {
      id: "liquid-sound",
      draft: true,
      question: { de: "In welchem Subgenre hört man oft Piano, Rhodes und Soul-Gesang über weichen, rollenden Drums?", en: "Which subgenre often has piano, Rhodes and soul vocals over soft, rolling drums?" },
      options: [
        { de: "Liquid", en: "Liquid" },
        { de: "Intelligent / Atmospheric", en: "Intelligent / Atmospheric" },
      ],
      explain: {
        de: "Liquid ist smooth und melodisch: Piano, Rhodes, warme Pads und oft Gesang über rollenden Drums. Intelligent ist ähnlich luftig, setzt aber auf schwebende Flächen und kommt meist ohne Gesang aus.",
        en: "Liquid is smooth and melodic: piano, Rhodes, warm pads and often vocals over rolling drums. Intelligent is similarly airy but relies on floating pads and usually has no vocals.",
      },
    },
    {
      id: "jungle-sound",
      draft: true,
      question: { de: "Was ist typisch für Jungle?", en: "What is typical of Jungle?" },
      options: [
        { de: "Zerhackte, neu arrangierte Breakbeats und ein tiefer Dub-Bass", en: "Chopped-up, rearranged breakbeats and a deep dub bass" },
        { de: "Die Snare kommt nur auf der 3", en: "The snare only hits on the 3" },
      ],
      explain: {
        de: "Jungle entstand Anfang der 1990er in UK: wild zerhackte Breakbeats aus Funk- und Soul-Platten, darunter ein tiefer, ruhiger Dub-Bass, dazu Samples aus Reggae, Soul und Filmen.",
        en: "Jungle emerged in the UK in the early 1990s: wildly chopped breakbeats from funk and soul records over a deep, calm dub bass, plus samples from reggae, soul and films.",
      },
    },
    {
      id: "ragga-sound",
      draft: true,
      question: { de: "Woran erkennst du Ragga / Reggae DnB?", en: "How do you recognise Ragga / Reggae DnB?" },
      options: [
        { de: "MC-Vocals im jamaikanischen Stil (Patois) über Breakbeats", en: "Jamaican-style MC vocals (patois) over breakbeats" },
        { de: "Wild zerhackte Breaks ganz ohne Gesang", en: "Wildly chopped breaks with no vocals at all" },
      ],
      explain: {
        de: "Ragga ist Jungle oder DnB mit starkem Reggae- und Dancehall-Einschlag: Toaster oder MCs in Patois, Offbeat-Chops und Soundsystem-Atmosphäre – Klassiker sind etwa „Original Nuttah“ und „Incredible“.",
        en: "Ragga is jungle or DnB with a strong reggae and dancehall flavour: toasters or MCs in patois, offbeat chops and a sound-system vibe – classics include “Original Nuttah” and “Incredible”.",
      },
    },
    {
      id: "halftime-feel",
      draft: true,
      question: { de: "Warum fühlt sich Halftime langsamer an, obwohl das Tempo gleich bleibt?", en: "Why does Halftime feel slower even though the tempo stays the same?" },
      options: [
        { de: "Die Snare kommt nur auf der 3 statt auf 2 und 4", en: "The snare only hits on the 3 instead of on 2 and 4" },
        { de: "Das Tempo wird auf 120 BPM gesenkt", en: "The tempo drops to 120 BPM" },
      ],
      explain: {
        de: "Halftime läuft im DnB-Tempo, aber die Snare kommt nur einmal pro Takt – auf der 3 statt auf 2 und 4. Dadurch wirkt der Beat halb so schnell, schwer und schleppend, oft mit Hip-Hop- oder Dubstep-Einflüssen.",
        en: "Halftime runs at DnB tempo, but the snare only hits once per bar – on the 3 instead of on 2 and 4. That makes the beat feel half as fast, heavy and dragging, often with hip-hop or dubstep influences.",
      },
    },
    {
      id: "jumpup-sound",
      draft: true,
      question: { de: "Was ist typisch für Jump Up?", en: "What is typical of Jump Up?" },
      options: [
        { de: "Ein hüpfender, riffartiger Mitten-Bass zum Mitsingen", en: "A bouncy, riff-like mid-range bass you can sing along to" },
        { de: "Ein komplexer, knurrender Bass wie von einer Maschine", en: "A complex, growling bass like a machine" },
      ],
      explain: {
        de: "Jump Up ist verspielt und auf Hype ausgelegt: simple, stampfende Beats und ein frecher, oft quäkender Bass-Riff als Hook – gemacht, um auf dem Floor durchzudrehen, mit starker MC-Kultur.",
        en: "Jump Up is playful and built for hype: simple, stomping beats and a cheeky, often squelchy bass riff as the hook – made to go wild on the floor, with a strong MC culture.",
      },
    },
    {
      id: "neurofunk-sound",
      draft: true,
      question: { de: "In welchem Subgenre steht ein komplexer, stark bearbeiteter Mitten-Bass im Mittelpunkt, der wie eine Maschine knurrt?", en: "In which subgenre is a complex, heavily processed mid-range bass that growls like a machine the centrepiece?" },
      options: [
        { de: "Neurofunk", en: "Neurofunk" },
        { de: "Jump Up", en: "Jump Up" },
      ],
      explain: {
        de: "Neurofunk ist dunkel und technisch: Ein gefilterter, verzerrter Mitten-Bass knurrt und bewegt sich ständig, die Drums sind hart und präzise. Jump Up hat auch einen Mitten-Bass, aber verspielt und zum Mitsingen.",
        en: "Neurofunk is dark and technical: a filtered, distorted mid-range bass growls and keeps moving, the drums are hard and precise. Jump Up also has a mid-range bass, but playful and made to sing along to.",
      },
    },
    {
      id: "dancefloor-artist",
      draft: true,
      question: { de: "Welcher Act steht für Dancefloor DnB mit großen Festival-Hooks?", en: "Which act stands for dancefloor DnB with big festival hooks?" },
      options: [
        { de: "Pendulum", en: "Pendulum" },
        { de: "LTJ Bukem", en: "LTJ Bukem" },
      ],
      explain: {
        de: "Pendulum ist einer der bekanntesten Dancefloor-Acts: große Lead-Synths, eingängige Hooks und Drops. LTJ Bukem steht für den ruhigen Intelligent-Sound.",
        en: "Pendulum is one of the best-known dancefloor acts: big lead synths, catchy hooks and drops. LTJ Bukem stands for the calm intelligent sound.",
      },
    },
    {
      id: "darkstep-sound",
      draft: true,
      question: { de: "Was ist typisch für Darkstep / Crossbreed?", en: "What is typical of Darkstep / Crossbreed?" },
      options: [
        { de: "Extrem harte, verzerrte Breaks, Horror-Samples, teils Gabber-Kicks", en: "Extremely hard, distorted breaks, horror samples, sometimes gabber kicks" },
        { de: "Ein komplexer, sauber produzierter Mitten-Bass", en: "A complex, cleanly produced mid-range bass" },
      ],
      explain: {
        de: "Darkstep ist das härteste Ende von DnB: „misshandelte“, stark verzerrte Amen-Breaks, aggressiver Bass und Horror-Samples. Crossbreed mischt das zusätzlich mit den harten Kicks aus Gabber und Hardcore.",
        en: "Darkstep is the hardest end of DnB: “abused”, heavily distorted Amen breaks, aggressive bass and horror samples. Crossbreed also mixes in the hard kicks of gabber and hardcore.",
      },
    },
    {
      id: "foghorn",
      draft: true,
      question: { de: "Was ist ein „Foghorn“-Bass im Drum & Bass?", en: "What is a “foghorn” bass in drum & bass?" },
      options: [
        { de: "Ein tiefer, hupenartiger Bass-Sound, der vor allem im Jump Up um 2015–2019 angesagt war", en: "A deep, horn-like bass sound that was big in Jump Up around 2015–2019" },
        { de: "Ein Bass, der nur halb so schnell spielt wie die Drums", en: "A bass that plays at half the speed of the drums" },
      ],
      explain: {
        de: "„Foghorn“ heißt Nebelhorn – genau so klingt dieser Bass: tief, laut und hupend. Rund um 2015–2019 wurde er im Jump Up zu einer eigenen Welle, etwa durch Kings of the Rollers, Bou oder Serum. Umstritten ist, ob solche Tracks als „Rollers“ gelten: Für viele müssen dabei die Drums rollen, nicht der Bass.",
        en: "“Foghorn” is exactly what this bass sounds like: deep, loud and honking. Around 2015–2019 it became its own wave in Jump Up, e.g. through Kings of the Rollers, Bou or Serum. Whether such tracks count as “rollers” is debated: for many, the drums have to roll, not the bass.",
      },
    },
    {
      id: "liquid-vs-intelligent",
      draft: true,
      question: { de: "Was unterscheidet Liquid meist von Intelligent / Atmospheric?", en: "What usually sets Liquid apart from Intelligent / Atmospheric?" },
      options: [
        { de: "Liquid hat öfter Gesang und klarere Songstrukturen", en: "Liquid more often has vocals and clearer song structures" },
        { de: "Liquid hat immer einen großen Drop", en: "Liquid always has a big drop" },
      ],
      explain: {
        de: "Beide sind melodisch und warm. Intelligent setzt aber auf lange, schwebende Flächen und Jazz-Akkorde mit kaum Gesang, Liquid klingt eher nach Song – oft mit Gesang, Strophe und Refrain.",
        en: "Both are melodic and warm. Intelligent relies on long, floating pads and jazz chords with hardly any vocals, while Liquid sounds more like a song – often with vocals, verse and chorus.",
      },
    },
    {
      id: "deep-sound",
      draft: true,
      question: { de: "Was macht Deep / Minimal aus?", en: "What defines Deep / Minimal?" },
      options: [
        { de: "Fast nur Drums und tiefer Sub-Bass, viel Raum dazwischen", en: "Almost only drums and deep sub-bass, lots of space in between" },
        { de: "Die Snare kommt nur auf der 3", en: "The snare only hits on the 3" },
      ],
      explain: {
        de: "Deep / Minimal ist reduziert und kühl: Drums und tiefer Sub-Bass stehen im Zentrum, kaum Mitten oder Melodie, sehr sauber produziert. Typische Namen sind dBridge, Instra:mental, Alix Perez und Survival.",
        en: "Deep / Minimal is stripped back and cool: drums and deep sub-bass take centre stage, with little mid-range or melody and a very clean production. Typical names are dBridge, Instra:mental, Alix Perez and Survival.",
      },
    },
    {
      id: "intelligent-artist",
      draft: true,
      question: { de: "Welcher Künstler steht für Intelligent / Atmospheric DnB?", en: "Which artist stands for intelligent / atmospheric DnB?" },
      options: [
        { de: "LTJ Bukem", en: "LTJ Bukem" },
        { de: "High Contrast", en: "High Contrast" },
      ],
      explain: {
        de: "LTJ Bukem und sein Label Good Looking prägten Mitte der 1990er den ruhigen, jazzigen Intelligent-Sound. High Contrast steht dagegen für Liquid – melodischer und mit mehr Gesang.",
        en: "LTJ Bukem and his label Good Looking shaped the calm, jazzy intelligent sound in the mid-1990s. High Contrast stands for liquid instead – more melodic and with more vocals.",
      },
    },
    {
      id: "techstep-vs-neurofunk",
      draft: true,
      question: { de: "Was unterscheidet Techstep meist von Neurofunk?", en: "What usually sets Techstep apart from Neurofunk?" },
      options: [
        { de: "Ein einfacherer, roher Beat mit kaltem, verzerrtem Bass", en: "A simpler, raw beat with cold, distorted bass" },
        { de: "Ein aufwendigerer Bass, der ständig „spricht“ und sich verändert", en: "A more elaborate bass that keeps “talking” and changing" },
      ],
      explain: {
        de: "Techstep klingt rauer und einfacher: harter, reduzierter Beat, kalter verzerrter Bass. Neurofunk hat daraus ein viel aufwendigeres Bassdesign gemacht – der Bass knurrt, „spricht“ und bewegt sich ständig.",
        en: "Techstep sounds rawer and simpler: a hard, stripped-back beat and cold, distorted bass. Neurofunk turned that into far more elaborate bass design – the bass growls, “talks” and keeps moving.",
      },
    },
    {
      id: "roller",
      draft: true,
      question: { de: "Was meint man in der DnB-Szene mit einem „Roller“?", en: "What does the DnB scene mean by a “roller”?" },
      options: [
        { de: "Einen Track mit gleichmäßig rollenden Drums, durchgehendem Groove und ohne großen Drop", en: "A track with evenly rolling drums, a steady groove and no big drop" },
        { de: "Einen Track mit langem Aufbau und riesigem Drop", en: "A track with a long build-up and a huge drop" },
      ],
      explain: {
        de: "Ein Roller ist eher eine Spielart als ein Subgenre und kommt in vielen Stilen vor, besonders in Deep/Minimal, Techstep und modernem Jump Up. Die Drums treiben den Track: viele Hi-Hats, Shaker und Ghost Notes zwischen Kick und Snare, kaum Variation. Es gibt keinen großen Drop, die Energie bleibt konstant.",
        en: "A roller is more a way of playing than a subgenre and shows up in many styles, especially Deep/Minimal, Techstep and modern Jump Up. The drums drive the track: lots of hi-hats, shakers and ghost notes between kick and snare, little variation. There is no big drop, the energy stays constant.",
      },
    },
    {
      id: "drumfunk-sound",
      draft: true,
      question: { de: "Was steht bei Drumfunk im Mittelpunkt?", en: "What is at the heart of drumfunk?" },
      options: [
        { de: "Von Hand aufwendig neu geschnittene Breakbeats, die oft wie live gespielt klingen", en: "Breakbeats painstakingly re-cut by hand, often sounding like they're played live" },
        { de: "Schwebende Flächen, die Drums bleiben im Hintergrund", en: "Floating pads with the drums in the background" },
      ],
      explain: {
        de: "Bei Drumfunk sind die Drums der Star: Breaks wie Amen oder Apache werden Schlag für Schlag neu arrangiert und ständig variiert. Anders als beim wilden Jungle wirkt das oft organisch, als säße jemand live am Schlagzeug.",
        en: "In drumfunk the drums are the star: breaks like the Amen or Apache are rearranged hit by hit and constantly varied. Unlike wild jungle, it often feels organic, as if someone were playing a live drum kit.",
      },
    },
  ],
}
