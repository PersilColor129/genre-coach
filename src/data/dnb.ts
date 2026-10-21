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
      tracks: [
        { appleId: 1409332709, artist: "Origin Unknown", title: "Valley of the Shadows", previewPath: "AudioPreview221/v4/2c/9d/fb/2c9dfb11-2b81-0ff0-871d-5e1cd142d17c/mzaf_12553130356207885986.plus.aac.p.m4a" },
        { appleId: 1678881875, artist: "Remarc", title: "R.I.P. (DJ Hype Remix)", previewPath: "AudioPreview116/v4/3a/7a/ac/3a7aac16-1e77-e9ac-2e99-e2e3d0b733ec/mzaf_14087471037923864191.plus.aac.p.m4a" },
        { appleId: 1420032789, artist: "Goldie", title: "Inner City Life", previewPath: "AudioPreview221/v4/f8/53/11/f8531121-7185-6809-b5ef-b77951dc3258/mzaf_1283873732990396984.plus.aac.p.m4a" },
        { appleId: 1284005258, artist: "Dillinja", title: "The Angels Fell", previewPath: "AudioPreview221/v4/a2/00/40/a2004069-ff85-0917-de5e-15f2d9801bdc/mzaf_11371480439485186732.plus.aac.p.m4a" },
        { appleId: 1444069792, artist: "Aphrodite", title: "King of the Beats", previewPath: "AudioPreview211/v4/d2/e0/2d/d2e02d75-f521-da9e-37cb-2ae404b4759d/mzaf_13858455015394217138.plus.aac.p.m4a" },
        { appleId: 254961927, artist: "Dead Dred", title: "Dred Bass", previewPath: "AudioPreview125/v4/54/4c/5b/544c5b45-f930-561f-5c25-e7e396186467/mzaf_12879887811224967091.plus.aac.p.m4a" },
        { appleId: 1284798055, artist: "Krust", title: "Warhead (Steppa Mix)", previewPath: "AudioPreview221/v4/c7/94/f9/c794f951-0cfe-693e-ff4a-8f5ae0306491/mzaf_7295409539049989817.plus.aac.p.m4a" },
        { appleId: 119731724, artist: "Omni Trio", title: "Feel Good (Original In Demand Mix)", previewPath: "AudioPreview125/v4/37/d1/33/37d13334-3ccb-a7a1-4cf8-a1fc71d6a56c/mzaf_12287582641054949724.plus.aac.p.m4a" },
        { appleId: 1409334938, artist: "Origin Unknown", title: "Truly One", previewPath: "AudioPreview221/v4/f1/74/07/f17407b3-a401-ac96-57b2-f48ceffa4f51/mzaf_3660214501101641321.plus.aac.p.m4a" },
      ],
    },
    ragga: {
      name: { de: "Ragga / Reggae DnB", en: "Ragga / Reggae DnB" },
      desc: {
        de: "Jungle oder DnB mit starkem Reggae- und Dancehall-Einschlag: MC-Vocals im jamaikanischen Stil, Offbeat-Chops und Soundsystem-Atmosphäre.",
        en: "Jungle or DnB with a strong reggae and dancehall flavour: Jamaican-style MC vocals, offbeat chops and a sound-system vibe.",
      },
      tracks: [
        { appleId: 1476881990, artist: "UK Apache & Shy FX", title: "Original Nuttah 25", previewPath: "AudioPreview221/v4/0e/b7/76/0eb776e1-abb8-8592-dbcf-2e5c14233a6c/mzaf_15748095737790361609.plus.aac.p.m4a" },
        { appleId: 1422928404, artist: "M-Beat", title: "Incredible (feat. General Levy)", previewPath: "AudioPreview211/v4/68/fc/a5/68fca5a8-fbb4-c583-0c00-afdedd0dea59/mzaf_2188878326217957496.plus.aac.p.m4a" },
        { appleId: 1875006247, artist: "Benny Page", title: "Turn Down the Lights", previewPath: "AudioPreview211/v4/5c/e0/99/5ce09971-8cec-f398-077f-1b824f30dbc8/mzaf_10948475620863797035.plus.aac.p.m4a" },
        { appleId: 6800714639, artist: "Congo Natty", title: "Junglist (feat. Pete Bouncer)", previewPath: "AudioPreview211/v4/48/21/d1/4821d142-4e0d-e34b-1b12-23d1afdcd5bf/mzaf_7027166301269565584.plus.aac.p.m4a" },
        { appleId: 917243869, artist: "Benny Page", title: "Champion Sound (Serial Killaz Remix) [feat. Assassin]", previewPath: "AudioPreview115/v4/4c/0f/c0/4c0fc003-4bd1-4c0c-c3f3-e36f604449da/mzaf_472397727850501000.plus.aac.p.m4a" },
        { appleId: 642339705, artist: "Congo Natty", title: "Rebel (feat. Rebel MC & 2Nice)", previewPath: "AudioPreview125/v4/74/69/49/746949ae-cc48-1c02-53b9-72387b6478e9/mzaf_5348206810833810976.plus.aac.p.m4a" },
      ],
    },
    liquid: {
      name: { de: "Liquid", en: "Liquid" },
      desc: {
        de: "Smooth und melodisch, beeinflusst von Soul, Jazz und House. Oft Piano, Rhodes, warme Pads und Gesang. Die Drums rollen, wirken aber nie aggressiv.",
        en: "Smooth and melodic, influenced by soul, jazz and house. Often piano, Rhodes, warm pads and vocals. The drums roll but never feel aggressive.",
      },
      tracks: [
        { appleId: 1529147352, artist: "High Contrast", title: "If We Ever (2018 Remaster)", previewPath: "AudioPreview221/v4/03/b5/73/03b573a6-62c2-2109-9f88-fa0c61cd0633/mzaf_15815783100235776315.plus.aac.p.m4a" },
        { appleId: 410121163, artist: "London Elektricity", title: "Just One Second (Apex VIP)", previewPath: "AudioPreview125/v4/58/99/1a/58991a12-c185-a4df-e1e3-3e9f40a01092/mzaf_16109120355471335396.plus.aac.p.m4a" },
        { appleId: 1688696901, artist: "Netsky", title: "Iron Heart", previewPath: "AudioPreview211/v4/15/cc/5b/15cc5b4f-53bf-94ac-9b65-7ccfcdd80ec9/mzaf_1613768268732277963.plus.aac.p.m4a" },
        { appleId: 904521534, artist: "Calibre", title: "Even If", previewPath: "AudioPreview125/v4/ec/4a/4d/ec4a4d18-6272-5431-2c2c-41c5e0d4dae5/mzaf_18189393089789913653.plus.aac.p.m4a" },
        { appleId: 397750237, artist: "Logistics", title: "Together", previewPath: "AudioPreview211/v4/c0/b9/e8/c0b9e8e7-09b8-0148-5614-7dcf2fbd3c1d/mzaf_7508183467347764795.plus.aac.p.m4a" },
        { appleId: 1476762754, artist: "Hybrid Minds", title: "Lost", previewPath: "AudioPreview221/v4/58/33/b4/5833b461-a75e-d7e0-6ffe-fdda515403f0/mzaf_9896718075842851276.plus.aac.p.m4a" },
        { appleId: 1125766119, artist: "Calibre & High Contrast", title: "Mr Majestic", previewPath: "AudioPreview221/v4/ab/af/30/abaf3023-b9a1-75cf-39c8-ec5e99f2d343/mzaf_5741929075079033868.plus.aac.p.m4a" },
        { appleId: 409099001, artist: "Netsky", title: "Memory Lane", previewPath: "AudioPreview211/v4/f3/5e/85/f35e8581-357a-46d2-2eb2-2db987359411/mzaf_1704972533415094822.plus.aac.p.m4a" },
        { appleId: 1529149318, artist: "High Contrast", title: "Racing Green", previewPath: "AudioPreview211/v4/a5/86/64/a5866465-6b25-c155-bd69-e0ce909367c2/mzaf_14248354483110686729.plus.aac.p.m4a" },
        { appleId: 1685139277, artist: "Zara Kershaw & Etherwood", title: "Souvenirs", previewPath: "AudioPreview221/v4/df/57/47/df5747fd-05b8-14a7-5e5b-4589d37ad243/mzaf_16760205658115619962.plus.aac.p.m4a" },
      ],
    },
    dancefloor: {
      name: { de: "Dancefloor", en: "Dancefloor" },
      desc: {
        de: "Die poppigste Spielart: große Lead-Synths, eingängige Hooks und Vocals, klarer Aufbau mit Build-up und Drop. Klingt nah an EDM und Festival-Sound.",
        en: "The poppiest flavour: big lead synths, catchy hooks and vocals, a clear build-up and drop. Sounds close to EDM and festival music.",
      },
      tracks: [
        { appleId: 1440858043, artist: "Wilkinson", title: "Afterglow", previewPath: "AudioPreview211/v4/cb/8e/b0/cb8eb078-698a-6836-949f-ea33d40f8056/mzaf_13683627894145709276.plus.aac.p.m4a" },
        { appleId: 1444613177, artist: "Sub Focus", title: "Endorphins (feat. Alex Clare) [Sub Focus Vs. Fred V & Grafix Remix]", previewPath: "AudioPreview221/v4/bc/41/32/bc4132ed-8fe5-21a5-fe1e-f9db35f67d40/mzaf_2779166964207217296.plus.aac.p.m4a" },
        { appleId: 366849193, artist: "Pendulum", title: "Watercolour", previewPath: "AudioPreview115/v4/b8/eb/4e/b8eb4eaf-8f38-c940-7c5b-0f621614cefd/mzaf_13257229534686981094.plus.aac.p.m4a" },
        { appleId: 521724473, artist: "Rudimental", title: "Feel the Love (feat. John Newman)", previewPath: "AudioPreview211/v4/af/c5/26/afc526f4-a7e3-c72b-c785-3b2cb9a18231/mzaf_12623888197983404712.plus.aac.p.m4a" },
        { appleId: 1452857682, artist: "Chase & Status", title: "Blind Faith (feat. Liam Bailey) [Loadstar Remix]", previewPath: "AudioPreview211/v4/25/ad/be/25adbeed-0855-e71d-fedc-d119fabcdfb4/mzaf_200618601420941056.plus.aac.p.m4a" },
        { appleId: 1409212133, artist: "Sub Focus", title: "Rock It", previewPath: "AudioPreview125/v4/65/5f/f0/655ff068-053d-358b-1030-0dec8743f399/mzaf_8436652049309786735.plus.aac.p.m4a" },
        { appleId: 277503735, artist: "Pendulum", title: "Propane Nightmares", previewPath: "AudioPreview115/v4/80/dc/69/80dc69a0-34fd-175d-b660-f806d6df88e8/mzaf_4472172796883771812.plus.aac.p.m4a" },
        { appleId: 1442831649, artist: "Chase & Status", title: "Eastern Jam (Live At Brixton Academy)", previewPath: "AudioPreview115/v4/19/c8/6e/19c86eb4-2ef5-27bb-7a08-5b22a093c4b9/mzaf_11765348557483594533.plus.aac.p.m4a" },
        { appleId: 1434840301, artist: "Sub Focus & Dimension", title: "Desire", previewPath: "AudioPreview211/v4/6e/e7/c3/6ee7c3b2-af12-71a5-a9fa-cc7bf4857b44/mzaf_9275378630279510726.plus.aac.p.m4a" },
        { appleId: 1411339293, artist: "Delta Heavy", title: "White Flag", previewPath: "AudioPreview115/v4/34/ef/e9/34efe966-11c9-f9f7-347f-2dc198b89499/mzaf_2782424857337239134.plus.aac.p.m4a" },
      ],
    },
    neurofunk: {
      name: { de: "Neurofunk", en: "Neurofunk" },
      desc: {
        de: "Dunkel, technisch, futuristisch. Im Mittelpunkt steht ein stark bearbeiteter, gefilterter und verzerrter Bass im Mittenbereich, die Drums sind präzise und hart.",
        en: "Dark, technical, futuristic. The focus is a heavily processed, filtered and distorted mid-range bass, with tight, hard-hitting drums.",
      },
      tracks: [
        { appleId: 314391367, artist: "Noisia", title: "Stigma", previewPath: "AudioPreview115/v4/c3/48/76/c348769c-bf67-8a0d-95ec-53af7ae91a3d/mzaf_2997876393937979564.plus.aac.p.m4a" },
        { appleId: 1889578192, artist: "Black Sun Empire", title: "Arrakis (Noisia Remix)", previewPath: "AudioPreview211/v4/91/93/58/9193586b-b72b-79c8-0c8b-819065b610a1/mzaf_15791956763016931436.plus.aac.p.m4a" },
        { appleId: 1715019834, artist: "Mefjus", title: "Emulation", previewPath: "AudioPreview126/v4/05/fb/aa/05fbaa3d-62e7-bcb1-6101-d5d32bb24f0e/mzaf_13432586045890325565.plus.aac.p.m4a" },
        { appleId: 1889575596, artist: "Black Sun Empire & Noisia", title: "Hideous (LeStR Remix)", previewPath: "AudioPreview221/v4/ac/13/a1/ac13a1b8-82df-1e23-113c-0646402949a2/mzaf_12047838065813552556.plus.aac.p.m4a" },
        { appleId: 1889538912, artist: "Phace", title: "Plastic Acid", previewPath: "AudioPreview221/v4/b9/73/f6/b973f6d2-6668-a116-788f-bd76e6b8fab5/mzaf_17660885172475184267.plus.aac.p.m4a" },
        { appleId: 1127792062, artist: "Noisia", title: "Tentacles", previewPath: "AudioPreview211/v4/57/c4/b6/57c4b672-35af-375d-98d8-8f31cfa63bfd/mzaf_12791391076668300586.plus.aac.p.m4a" },
        { appleId: 1674350308, artist: "Mefjus", title: "Blitz", previewPath: "AudioPreview126/v4/d6/38/15/d63815d8-60db-a41d-ce43-76023704513e/mzaf_15643221736354168125.plus.aac.p.m4a" },
      ],
    },
    jumpup: {
      name: { de: "Jump Up", en: "Jump Up" },
      desc: {
        de: "Verspielt und auf Hype ausgelegt: simple, stampfende Beats und ein eingängiger, oft quäkender Mitten-Bass als Hook. Gemacht, um auf dem Floor durchzudrehen.",
        en: "Playful and all about hype: simple, stomping beats and a catchy, often squelchy mid-range bass as the hook. Made for going wild on the dancefloor.",
      },
      tracks: [
        { appleId: 264129961, artist: "DJ Hazard & D Minds", title: "Mr Happy", previewPath: "AudioPreview221/v4/46/96/1b/46961b2a-06b3-aa88-1d21-7a86ab4f408e/mzaf_4468526727694814616.plus.aac.p.m4a" },
        { appleId: 1282939530, artist: "Macky Gee", title: "Tour", previewPath: "AudioPreview211/v4/eb/11/47/eb114716-c5cb-3ab5-e489-2e328e30deb1/mzaf_9118328718401461655.plus.aac.p.m4a" },
        { appleId: 373589916, artist: "DJ Zinc", title: "Super Sharp Shooter", previewPath: "AudioPreview221/v4/d1/de/8e/d1de8ed8-f0ba-1c74-97b2-990f100ed50d/mzaf_3104643379087896684.plus.aac.p.m4a" },
        { appleId: 902317623, artist: "DJ Hazard", title: "Bricks Don't Roll", previewPath: "AudioPreview211/v4/ed/41/10/ed41101d-735a-12c1-4865-0740abf31133/mzaf_6375128733693759220.plus.aac.p.m4a" },
        { appleId: 1260217498, artist: "Macky Gee", title: "Aftershock (feat. Stuart Rowe)", previewPath: "AudioPreview211/v4/ac/9e/a5/ac9ea5b6-23bb-3415-37c5-1dba4ee8685e/mzaf_3092675681074132632.plus.aac.p.m4a" },
        { appleId: 275979911, artist: "DJ Hazard", title: "Machete", previewPath: "AudioPreview211/v4/e3/b7/7d/e3b77dac-1044-fd86-701c-a0ed8bbe550c/mzaf_4328044339300329047.plus.aac.p.m4a" },
        { appleId: 373654421, artist: "Dillinja", title: "Twist Em Out (feat. Skibadee)", previewPath: "AudioPreview125/v4/9d/99/c5/9d99c525-5a80-f8ac-0d0e-ed506592e9d8/mzaf_2051063231248705599.plus.aac.p.m4a" },
        { appleId: 1760817124, artist: "Bou & Trigga", title: "Veteran (VIP)", previewPath: "AudioPreview211/v4/7b/be/08/7bbe08b3-99d0-9859-c480-406e28844566/mzaf_15266326618076709747.plus.aac.p.m4a" },
        { appleId: 1686518877, artist: "Turno, Skepsis & Charlotte Plank", title: "Rave Out", previewPath: "AudioPreview221/v4/c9/cc/4f/c9cc4f7d-75f3-702a-689f-a764dd82a8b4/mzaf_17202374377434649185.plus.aac.p.m4a" },
      ],
    },
    deep: {
      name: { de: "Deep / Minimal", en: "Deep / Minimal" },
      desc: {
        de: "Reduziert und kühl: Drums und tiefer Sub-Bass stehen im Zentrum, kaum Mitten oder Melodie. Viel Raum, minimalistische Atmosphäre.",
        en: "Stripped back and cool: drums and deep sub-bass take centre stage, with little mid-range or melody. Lots of space, minimalist atmosphere.",
      },
      tracks: [
        { appleId: 6798656113, artist: "Commix", title: "Be True", previewPath: "AudioPreview221/v4/ed/5b/02/ed5b0295-80a1-91cc-6316-e0300db104b1/mzaf_147201775560157785.plus.aac.p.m4a" },
        { appleId: 1828413700, artist: "dBridge & Alix Perez", title: "Through My Eyes", previewPath: "AudioPreview211/v4/b8/9a/78/b89a7893-a0a9-1a96-e32c-8911adf1a448/mzaf_2317340662976783555.plus.aac.p.m4a" },
        { appleId: 1741980498, artist: "Skeptical", title: "Process of Elimination", previewPath: "AudioPreview221/v4/50/04/15/50041534-6530-10bc-854a-4bb23ae98fa9/mzaf_3853394428038261146.plus.aac.p.m4a" },
        { appleId: 1116438466, artist: "Calibre", title: "Drop It Down", previewPath: "AudioPreview125/v4/cf/04/73/cf0473b5-f556-6c20-5b9e-32630d0ee1d3/mzaf_3569411413296688184.plus.aac.p.m4a" },
        { appleId: 1504949011, artist: "Calibre", title: "Pillow Dub", previewPath: "AudioPreview125/v4/20/73/35/20733509-043a-acbe-7d04-598876d856f8/mzaf_6170261158939789619.plus.aac.p.m4a" },
        { appleId: 6798673101, artist: "Commix", title: "Satellite Type 2", previewPath: "AudioPreview221/v4/20/1b/89/201b89eb-077c-a8dc-d038-25520f2353d2/mzaf_10193885392405986876.plus.aac.p.m4a" },
        { appleId: 1462888687, artist: "Alix Perez", title: "1984", previewPath: "AudioPreview125/v4/97/c2/6f/97c26f9e-7de1-39d2-6f5e-d1e497bf7c1b/mzaf_7681730765099707776.plus.aac.p.m4a" },
        { appleId: 1283505993, artist: "Skeptical", title: "Blue Eyes", previewPath: "AudioPreview125/v4/24/e2/72/24e27222-8462-1dce-b4af-08d73128c553/mzaf_18251150123864121388.plus.aac.p.m4a" },
        { appleId: 1741805925, artist: "Survival", title: "Exile", previewPath: "AudioPreview211/v4/53/c7/8e/53c78e96-9717-f418-c8de-f4e5b7a75879/mzaf_728310575325244697.plus.aac.p.m4a" },
        { appleId: 1678603292, artist: "dBridge", title: "Wonder Where", previewPath: "AudioPreview116/v4/c6/c5/0f/c6c50f72-ba83-b30c-1ef1-d954b0007578/mzaf_14035693141227575728.plus.aac.p.m4a" },
      ],
    },
    halftime: {
      name: { de: "Halftime", en: "Halftime" },
      desc: {
        de: "Gleiches Tempo wie DnB, aber der Beat fühlt sich halb so schnell an: die Snare kommt nur auf der 3 statt auf 2 und 4 – eine Snare pro Takt statt zwei. Schwer und schleppend, oft mit Hip-Hop- oder Dubstep-Einflüssen.",
        en: "Same tempo as DnB, but the beat feels half as fast: the snare hits only on the 3 instead of on 2 and 4 – one snare per bar instead of two. Heavy and dragging, often with hip-hop or dubstep influences.",
      },
      tracks: [
        { appleId: 1717575045, artist: "Ivy Lab & Halogenix", title: "Sunday Crunk", previewPath: "AudioPreview126/v4/a6/c0/82/a6c08290-f301-8b6b-2e8d-1866ed9b3a8e/mzaf_5440385415138356342.plus.aac.p.m4a" },
        { appleId: 6798759316, artist: "Om Unit", title: "Parallel", previewPath: "AudioPreview211/v4/9d/5d/ed/9d5ded73-956a-1c93-d39f-d8b6ff06279f/mzaf_18127851766372322981.plus.aac.p.m4a" },
        { appleId: 1714258683, artist: "Dub Phizix & Fox", title: "Never Been", previewPath: "AudioPreview116/v4/04/b1/a3/04b1a3ea-b0a9-9668-4e17-6b45296e1c2c/mzaf_1552552184630750287.plus.aac.p.m4a" },
        { appleId: 1743481022, artist: "Ivy Lab & Halogenix", title: "Click Clack", previewPath: "AudioPreview211/v4/a1/ea/59/a1ea59d6-53b5-c838-374f-6120690840c1/mzaf_16357300487107074534.plus.aac.p.m4a" },
        { appleId: 1720361024, artist: "Martyn & Om Unit", title: "Dragonfly", previewPath: "AudioPreview116/v4/7e/16/51/7e165176-3e94-376a-b99e-212a31d453c7/mzaf_8443564564259313134.plus.aac.p.m4a" },
      ],
    },
    intelligent: {
      name: { de: "Intelligent / Atmospheric", en: "Intelligent / Atmospheric" },
      desc: {
        de: "Luftig, verträumt und jazzig: schwebende Pads, Streicher und Jazz-Akkorde über Breaks, die eher schlurfen als angreifen. Weicher Bass im Hintergrund, kaum Gesang.",
        en: "Airy, dreamy and jazzy: floating pads, strings and jazz chords over breaks that shuffle rather than attack. Soft bass in the background, hardly any vocals.",
      },
      tracks: [
        { appleId: 595853840, artist: "LTJ Bukem", title: "Music", previewPath: "AudioPreview211/v4/48/f0/9c/48f09c0a-ddb4-a80f-05cc-f58c438df961/mzaf_3209571269850311339.plus.aac.p.m4a" },
        { appleId: 595853844, artist: "LTJ Bukem", title: "Atlantis (I Need You)", previewPath: "AudioPreview211/v4/22/83/ce/2283ce94-65e1-7952-6d17-804f231f04e9/mzaf_14893177864501063246.plus.aac.p.m4a" },
        { appleId: 595779877, artist: "LTJ Bukem", title: "Journey Inwards", previewPath: "AudioPreview221/v4/a5/1e/ad/a51eadfe-0fd5-1def-68c4-f2d0d6e98b57/mzaf_9981695374530133758.plus.aac.p.m4a" },
        { appleId: 255525309, artist: "Blame", title: "Music Takes You", previewPath: "AudioPreview221/v4/3a/a6/20/3aa620c3-c16b-c628-64df-cc3bc0a198d6/mzaf_9115051196233183469.plus.aac.p.m4a" },
        { appleId: 595861917, artist: "P.F.M.", title: "One & Only 2002 Rework", previewPath: "AudioPreview221/v4/16/85/4b/16854b89-d463-6451-ebf1-18df7329e305/mzaf_7485057236890643039.plus.aac.p.m4a" },
        { appleId: 6807839742, artist: "Hidden Agenda", title: "The Flute Tune", previewPath: "AudioPreview211/v4/22/ec/65/22ec65b4-9783-21cc-0b85-49c9b650b861/mzaf_3702452099624443658.plus.aac.p.m4a" },
        { appleId: 595765554, artist: "Seba & Lo Tek", title: "Sonic Winds", previewPath: "AudioPreview211/v4/4a/69/af/4a69afde-4d04-8bba-8454-4485cb57c817/mzaf_164742100785575557.plus.aac.p.m4a" },
        { appleId: 595806952, artist: "Big Bud", title: "Darker Than Blue", previewPath: "AudioPreview221/v4/78/05/51/7805512a-ae8b-fe82-e8a4-ab7a760b18d6/mzaf_12599864410311243563.plus.aac.p.m4a" },
        { appleId: 6798669983, artist: "Peshay", title: "On the Nile (2017 Remaster)", previewPath: "AudioPreview211/v4/0c/49/7e/0c497e0c-403a-d35e-cd51-d2874f6b6681/mzaf_7152630321296484985.plus.aac.p.m4a" },
        { appleId: 724527293, artist: "Photek", title: "The Hidden Camera", previewPath: "AudioPreview115/v4/ca/46/36/ca4636ec-c6ec-9d2d-7127-02df24fb3713/mzaf_13701117067436843594.plus.aac.p.m4a" },
      ],
    },
    darkstep: {
      name: { de: "Darkstep / Crossbreed", en: "Darkstep / Crossbreed" },
      desc: {
        de: "Extrem hart und düster: stark verzerrte, „misshandelte“ Amen-Breaks, aggressiver Bass und Horror-Samples. Crossbreed mischt DnB zusätzlich mit Gabber- und Hardcore-Kicks.",
        en: "Extremely hard and dark: heavily distorted, “abused” Amen breaks, aggressive bass and horror samples. Crossbreed also mixes DnB with gabber and hardcore kicks.",
      },
      tracks: [
        { appleId: 1306932210, artist: "Limewax", title: "Everything (2017 Remaster)", previewPath: "AudioPreview125/v4/8c/d2/84/8cd284c3-0671-0b31-08ee-155caf702fe0/mzaf_5049808918605637530.plus.aac.p.m4a" },
        { appleId: 274576540, artist: "Evol Intent", title: "Middle of the Night", previewPath: "AudioPreview115/v4/0d/75/ee/0d75eecf-0ac9-41a4-89c5-14aa7e31233c/mzaf_12903970032682217625.plus.aac.p.m4a" },
        { appleId: 698009128, artist: "Technical Itch", title: "Oblivion Survival", previewPath: "AudioPreview125/v4/03/fd/57/03fd5705-a850-4935-f9a0-56cbf29d4f75/mzaf_12202491501362194799.plus.aac.p.m4a" },
        { appleId: 277133801, artist: "Technical Itch", title: "Pressure Drop (VIP)", previewPath: "AudioPreview211/v4/64/07/8d/64078d4e-bfd1-deb9-07be-27f2be09f5d0/mzaf_258511220063672561.plus.aac.p.m4a" },
        { appleId: 103806244, artist: "Gein", title: "Street Sweeper", previewPath: "AudioPreview115/v4/36/c8/e0/36c8e0e3-36a5-acbf-61b9-8e2db021f63d/mzaf_4865390669254244275.plus.aac.p.m4a" },
        { appleId: 378800543, artist: "Gein, Technical Itch & MC Jakes", title: "Killsound", previewPath: "AudioPreview125/v4/4f/ef/dc/4fefdc05-2f2e-c5c3-5fde-ac60a201c7b1/mzaf_9110342182770444955.plus.aac.p.m4a" },
        { appleId: 969466340, artist: "Cooh & Limewax", title: "Selecta", previewPath: "AudioPreview125/v4/3a/38/2d/3a382d73-a7db-c0cb-7757-5d0f8a1bfdc5/mzaf_6148671670501025349.plus.aac.p.m4a" },
        { appleId: 698139665, artist: "Hallucinator", title: "I Am the Devil", previewPath: "AudioPreview125/v4/8e/66/22/8e662205-c941-3287-6e80-988dbb33d7ae/mzaf_2677545495901231532.plus.aac.p.m4a" },
        { appleId: 453748760, artist: "Bratkilla", title: "The Marching Dead (VIP)", previewPath: "AudioPreview125/v4/31/7b/ec/317bece8-7b21-6ca6-d949-c76540ad3b60/mzaf_6006301227644348278.plus.aac.p.m4a" },
        { appleId: 1465156116, artist: "Ewun", title: "Hate Machine (Original)", previewPath: "AudioPreview115/v4/6d/3e/bd/6d3ebda4-c60f-5c4d-1168-f251bc321da7/mzaf_2820224953027545297.plus.aac.p.m4a" },
      ],
    },
    techstep: {
      name: { de: "Techstep", en: "Techstep" },
      desc: {
        de: "Kalt, metallisch, dystopisch: ein reduzierter, harter Beat statt zerhackter Breaks, dazu verzerrter Reese-Bass und Einflüsse aus Techno und Industrial. Vorläufer von Neurofunk, aber roher und einfacher.",
        en: "Cold, metallic, dystopian: a stripped-back, hard beat instead of chopped breaks, with distorted Reese bass and influences from techno and industrial. The forerunner of Neurofunk, but rawer and simpler.",
      },
      tracks: [
        { appleId: 81702111, artist: "Dom & Roland", title: "Thunder", previewPath: "AudioPreview211/v4/69/10/66/691066ca-526f-2f8f-41c5-7bca77b8b97c/mzaf_9842453187044013584.plus.aac.p.m4a" },
        { appleId: 102295342, artist: "Dom & Roland", title: "Can't Punish Me", previewPath: "AudioPreview115/v4/de/a0/44/dea044d6-0dc9-7139-ebb4-7c626f85d213/mzaf_18013448515435162446.plus.aac.p.m4a" },
        { appleId: 1849140591, artist: "Bad Company UK", title: "The Nine (Remastered)", previewPath: "AudioPreview211/v4/65/6c/5f/656c5f6f-a82c-8742-1a4b-1091b354252f/mzaf_11433313753604882466.plus.aac.p.m4a" },
        { appleId: 6805543141, artist: "Dj Trace", title: "Mutant Revisited", previewPath: "AudioPreview221/v4/68/9a/56/689a56bf-aa3d-3487-d58d-000ad1541017/mzaf_9709004178558039985.plus.aac.p.m4a" },
        { appleId: 1284142497, artist: "Usual Suspects", title: "Killa Bees", previewPath: "AudioPreview115/v4/cb/a4/b6/cba4b680-092c-c978-c32c-cec271e77b5c/mzaf_18277139040179734566.plus.aac.p.m4a" },
        { appleId: 1286217155, artist: "Optical", title: "To Shape the Future (Remix)", previewPath: "AudioPreview125/v4/6a/cc/43/6acc43c9-360b-a21e-d8bf-c06b8badf6a7/mzaf_7819275930232310607.plus.aac.p.m4a" },
      ],
    },
  },
  // Learning path – test version (Phase 3). Tracks and questions still need the listening check / fact check (plan.md).
  levels: [
    { subgenres: ["liquid", "jumpup", "halftime", "jungle"] },
    {
      subgenres: ["liquid", "jumpup", "halftime", "jungle", "dancefloor", "neurofunk", "ragga", "darkstep"],
      knowledge: ["liquid-sound", "jungle-sound", "ragga-sound", "halftime-feel", "jumpup-sound", "neurofunk-sound", "dancefloor-artist", "darkstep-sound", "foghorn"],
    },
    {
      subgenres: ["liquid", "jumpup", "halftime", "jungle", "dancefloor", "neurofunk", "ragga", "darkstep", "deep", "intelligent", "techstep"],
      knowledge: ["liquid-sound", "jungle-sound", "ragga-sound", "halftime-feel", "jumpup-sound", "neurofunk-sound", "dancefloor-artist", "darkstep-sound", "foghorn", "liquid-label", "liquid-vs-intelligent", "amen-break", "deep-sound", "intelligent-artist", "techstep-vs-neurofunk", "roller"],
    },
  ],
  knowledge: [
    {
      id: "liquid-sound",
      draft: true,
      question: { de: "In welchem Subgenre hört man oft Piano, Rhodes und Soul-Gesang über weichen, rollenden Drums?", en: "Which subgenre often has piano, Rhodes and soul vocals over soft, rolling drums?" },
      options: [
        { de: "Liquid", en: "Liquid" },
        { de: "Neurofunk", en: "Neurofunk" },
        { de: "Jump Up", en: "Jump Up" },
        { de: "Darkstep / Crossbreed", en: "Darkstep / Crossbreed" },
      ],
      explain: {
        de: "Liquid ist smooth und melodisch, beeinflusst von Soul, Jazz und House. Piano, Rhodes, warme Pads und Gesang sind typisch, die Drums rollen, wirken aber nie aggressiv.",
        en: "Liquid is smooth and melodic, influenced by soul, jazz and house. Piano, Rhodes, warm pads and vocals are typical; the drums roll but never feel aggressive.",
      },
    },
    {
      id: "liquid-label",
      draft: true,
      question: { de: "Welches Label ist besonders bekannt für Liquid Drum & Bass?", en: "Which label is especially known for liquid drum & bass?" },
      options: [
        { de: "Hospital Records", en: "Hospital Records" },
        { de: "Virus Recordings", en: "Virus Recordings" },
        { de: "Critical Music", en: "Critical Music" },
        { de: "Playaz", en: "Playaz" },
      ],
      explain: {
        de: "Hospital Records aus London steht wie kaum ein anderes Label für Liquid – mit Künstlern wie London Elektricity, High Contrast und Netsky. Virus steht eher für Neurofunk, Critical für Deep, Playaz für Jump Up.",
        en: "London’s Hospital Records stands for liquid like hardly any other label – with artists like London Elektricity, High Contrast and Netsky. Virus is more Neurofunk, Critical more Deep, Playaz more Jump Up.",
      },
    },
    {
      id: "liquid-vs-intelligent",
      draft: true,
      question: { de: "Was unterscheidet Liquid meist von Intelligent / Atmospheric?", en: "What usually sets Liquid apart from Intelligent / Atmospheric?" },
      options: [
        { de: "Liquid hat öfter Gesang und klarere Songstrukturen", en: "Liquid more often has vocals and clearer song structures" },
        { de: "Liquid ist deutlich langsamer", en: "Liquid is much slower" },
        { de: "Liquid nutzt keine Drums", en: "Liquid uses no drums" },
        { de: "Liquid hat immer einen großen Drop", en: "Liquid always has a big drop" },
      ],
      explain: {
        de: "Beide sind melodisch und warm. Intelligent setzt aber auf lange, schwebende Flächen und Jazz-Akkorde mit kaum Gesang, Liquid klingt eher nach Song – oft mit Gesang, Strophe und Refrain.",
        en: "Both are melodic and warm. Intelligent relies on long, floating pads and jazz chords with hardly any vocals, while Liquid sounds more like a song – often with vocals, verse and chorus.",
      },
    },
    {
      id: "jungle-sound",
      draft: true,
      question: { de: "Was ist typisch für Jungle?", en: "What is typical of Jungle?" },
      options: [
        { de: "Zerhackte, neu arrangierte Breakbeats und ein tiefer Dub-Bass", en: "Chopped-up, rearranged breakbeats and a deep dub bass" },
        { de: "Die Snare kommt nur auf der 3", en: "The snare only hits on the 3" },
        { de: "Ein hupenartiger Mitten-Bass", en: "A horn-like mid-range bass" },
        { de: "Große Pop-Hooks und Festival-Drops", en: "Big pop hooks and festival drops" },
      ],
      explain: {
        de: "Jungle entstand Anfang der 1990er in UK: wild zerhackte Breakbeats aus Funk- und Soul-Platten, darunter ein tiefer, ruhiger Dub-Bass, dazu Samples aus Reggae, Soul und Filmen.",
        en: "Jungle emerged in the UK in the early 1990s: wildly chopped breakbeats from funk and soul records over a deep, calm dub bass, plus samples from reggae, soul and films.",
      },
    },
    {
      id: "amen-break",
      draft: true,
      question: { de: "Aus welchem Song stammt der berühmte „Amen Break“?", en: "Which song is the famous “Amen break” taken from?" },
      options: [
        { de: "„Amen, Brother“ von The Winstons", en: "“Amen, Brother” by The Winstons" },
        { de: "„Funky Drummer“ von James Brown", en: "“Funky Drummer” by James Brown" },
        { de: "„Apache“ von der Incredible Bongo Band", en: "“Apache” by the Incredible Bongo Band" },
        { de: "„Think (About It)“ von Lyn Collins", en: "“Think (About It)” by Lyn Collins" },
      ],
      explain: {
        de: "Der Amen Break ist ein paar Sekunden langes Schlagzeug-Solo aus „Amen, Brother“ von The Winstons (1969) – einer der meistgesampelten Drumbreaks überhaupt und Grundlage unzähliger Jungle-Tracks. Die anderen drei sind übrigens ebenfalls berühmte Breaks.",
        en: "The Amen break is a few-second drum solo from “Amen, Brother” by The Winstons (1969) – one of the most sampled drum breaks ever and the basis of countless jungle tracks. The other three are famous breaks too, by the way.",
      },
    },
    {
      id: "ragga-sound",
      draft: true,
      question: { de: "Woran erkennst du Ragga / Reggae DnB?", en: "How do you recognise Ragga / Reggae DnB?" },
      options: [
        { de: "MC-Vocals im jamaikanischen Stil (Patois) über Breakbeats", en: "Jamaican-style MC vocals (patois) over breakbeats" },
        { de: "Lange Flächen und Jazz-Akkorde", en: "Long pads and jazz chords" },
        { de: "Ein verzerrter Reese-Bass im Mittelpunkt", en: "A distorted Reese bass at the centre" },
        { de: "Fast nur Drums und Sub-Bass", en: "Almost only drums and sub-bass" },
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
        { de: "Der Bass setzt komplett aus", en: "The bass drops out completely" },
        { de: "Es gibt keine Kick-Drum", en: "There is no kick drum" },
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
        { de: "Lange Flächen und Jazz-Akkorde", en: "Long pads and jazz chords" },
        { de: "Horror-Samples und Gabber-Kicks", en: "Horror samples and gabber kicks" },
        { de: "Fast nur Drums und Sub-Bass, viel Leere", en: "Almost only drums and sub-bass, lots of space" },
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
        { de: "Liquid", en: "Liquid" },
        { de: "Ragga / Reggae DnB", en: "Ragga / Reggae DnB" },
        { de: "Intelligent / Atmospheric", en: "Intelligent / Atmospheric" },
      ],
      explain: {
        de: "Neurofunk ist dunkel, technisch und futuristisch. Im Zentrum steht ein gefilterter, verzerrter Bass im Mittenbereich, der ständig in Bewegung ist; dazu präzise, harte Drums und ein sehr sauberer Mixdown.",
        en: "Neurofunk is dark, technical and futuristic. At its centre is a filtered, distorted mid-range bass that keeps moving, with precise, hard drums and a very clean mixdown.",
      },
    },
    {
      id: "dancefloor-artist",
      draft: true,
      question: { de: "Welcher Act steht für Dancefloor DnB mit großen Festival-Hooks?", en: "Which act stands for dancefloor DnB with big festival hooks?" },
      options: [
        { de: "Pendulum", en: "Pendulum" },
        { de: "LTJ Bukem", en: "LTJ Bukem" },
        { de: "Limewax", en: "Limewax" },
        { de: "dBridge", en: "dBridge" },
      ],
      explain: {
        de: "Pendulum ist einer der bekanntesten Dancefloor-Acts: große Lead-Synths, eingängige Hooks und Drops. LTJ Bukem steht für Intelligent, Limewax für Darkstep und dBridge für Deep / Minimal.",
        en: "Pendulum is one of the best-known dancefloor acts: big lead synths, catchy hooks and drops. LTJ Bukem stands for Intelligent, Limewax for Darkstep and dBridge for Deep / Minimal.",
      },
    },
    {
      id: "darkstep-sound",
      draft: true,
      question: { de: "Was ist typisch für Darkstep / Crossbreed?", en: "What is typical of Darkstep / Crossbreed?" },
      options: [
        { de: "Extrem harte, verzerrte Breaks, Horror-Samples, teils Gabber-Kicks", en: "Extremely hard, distorted breaks, horror samples, sometimes gabber kicks" },
        { de: "Piano und Soul-Gesang", en: "Piano and soul vocals" },
        { de: "MC-Vocals in Patois", en: "MC vocals in patois" },
        { de: "Luftige Pads und Jazz-Akkorde", en: "Airy pads and jazz chords" },
      ],
      explain: {
        de: "Darkstep ist das härteste Ende von DnB: „misshandelte“, stark verzerrte Amen-Breaks, aggressiver Bass und Horror-Samples. Crossbreed mischt das zusätzlich mit den harten Kicks aus Gabber und Hardcore.",
        en: "Darkstep is the hardest end of DnB: “abused”, heavily distorted Amen breaks, aggressive bass and horror samples. Crossbreed also mixes in the hard kicks of gabber and hardcore.",
      },
    },
    {
      id: "deep-sound",
      draft: true,
      question: { de: "Was macht Deep / Minimal aus?", en: "What defines Deep / Minimal?" },
      options: [
        { de: "Fast nur Drums und tiefer Sub-Bass, viel Raum dazwischen", en: "Almost only drums and deep sub-bass, lots of space in between" },
        { de: "Große Pop-Hooks und Festival-Drops", en: "Big pop hooks and festival drops" },
        { de: "MC-Vocals in Patois", en: "MC vocals in patois" },
        { de: "Gabber-Kicks und Horror-Samples", en: "Gabber kicks and horror samples" },
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
        { de: "Macky Gee", en: "Macky Gee" },
        { de: "Technical Itch", en: "Technical Itch" },
        { de: "Rudimental", en: "Rudimental" },
      ],
      explain: {
        de: "LTJ Bukem und sein Label Good Looking Records prägten Mitte der 1990er den ruhigen, jazzigen Intelligent-Sound. Macky Gee steht für Jump Up, Technical Itch für Darkstep und Rudimental für Dancefloor.",
        en: "LTJ Bukem and his label Good Looking Records shaped the calm, jazzy intelligent sound in the mid-1990s. Macky Gee stands for Jump Up, Technical Itch for Darkstep and Rudimental for Dancefloor.",
      },
    },
    {
      id: "techstep-vs-neurofunk",
      draft: true,
      question: { de: "Was unterscheidet Techstep meist von Neurofunk?", en: "What usually sets Techstep apart from Neurofunk?" },
      options: [
        { de: "Techstep ist älter, roher und einfacher produziert", en: "Techstep is older, rawer and more simply produced" },
        { de: "Techstep ist deutlich langsamer", en: "Techstep is much slower" },
        { de: "Techstep hat Soul-Gesang", en: "Techstep has soul vocals" },
        { de: "Techstep kommt ganz ohne Bass aus", en: "Techstep has no bass at all" },
      ],
      explain: {
        de: "Techstep entstand Mitte bis Ende der 1990er als kalte, dunkle Gegenbewegung zu Jungle. Neurofunk hat sich daraus entwickelt – mit aufwendigerem Bassdesign und saubererem Mixdown. Heute sind die Grenzen fließend.",
        en: "Techstep emerged in the mid-to-late 1990s as a cold, dark reaction to jungle. Neurofunk developed out of it – with more elaborate bass design and a cleaner mixdown. Today the lines are blurred.",
      },
    },
    {
      id: "roller",
      draft: true,
      question: { de: "Was meint man in der DnB-Szene mit einem „Roller“?", en: "What does the DnB scene mean by a “roller”?" },
      options: [
        {
          de: "Einen Track mit gleichmäßig rollenden Drums, durchgehendem Groove und ohne großen Drop",
          en: "A track with evenly rolling drums, a steady groove and no big drop",
        },
        { de: "Einen Track mit langem Aufbau und riesigem Drop", en: "A track with a long build-up and a huge drop" },
        { de: "Ein Subgenre aus den 90ern mit Ragga-Vocals", en: "A 90s subgenre with ragga vocals" },
        { de: "Einen Track im halben Tempo", en: "A track at half tempo" },
      ],
      explain: {
        de: "Ein Roller ist eher eine Spielart als ein Subgenre und kommt in vielen Stilen vor, besonders in Deep/Minimal, Techstep und modernem Jump Up. Die Drums treiben den Track: viele Hi-Hats, Shaker und Ghost Notes zwischen Kick und Snare, kaum Variation. Es gibt keinen großen Drop, die Energie bleibt konstant.",
        en: "A roller is more a way of playing than a subgenre and shows up in many styles, especially Deep/Minimal, Techstep and modern Jump Up. The drums drive the track: lots of hi-hats, shakers and ghost notes between kick and snare, little variation. There is no big drop, the energy stays constant.",
      },
    },
    {
      id: "foghorn",
      draft: true,
      question: { de: "Was ist ein „Foghorn“-Bass im Drum & Bass?", en: "What is a “foghorn” bass in drum & bass?" },
      options: [
        {
          de: "Ein tiefer, hupenartiger Bass-Sound, der vor allem im Jump Up um 2015–2019 angesagt war",
          en: "A deep, horn-like bass sound that was big in Jump Up around 2015–2019",
        },
        { de: "Ein Breakbeat aus alten Funk- und Soul-Platten", en: "A breakbeat from old funk and soul records" },
        { de: "Luftige Pads mit Jazz-Akkorden", en: "Airy pads with jazz chords" },
        { de: "Ein Bass, der nur halb so schnell spielt wie die Drums", en: "A bass that plays at half the speed of the drums" },
      ],
      explain: {
        de: "„Foghorn“ heißt Nebelhorn – genau so klingt dieser Bass: tief, laut und hupend. Rund um 2015–2019 wurde er im Jump Up zu einer eigenen Welle, etwa durch Kings of the Rollers, Bou oder Serum. Umstritten ist, ob solche Tracks als „Rollers“ gelten: Für viele müssen dabei die Drums rollen, nicht der Bass.",
        en: "“Foghorn” is exactly what this bass sounds like: deep, loud and honking. Around 2015–2019 it became its own wave in Jump Up, e.g. through Kings of the Rollers, Bou or Serum. Whether such tracks count as “rollers” is debated: for many, the drums have to roll, not the bass.",
      },
    },
  ],
}
