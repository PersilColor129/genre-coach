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
        { appleId: 119731736, artist: "Omni Trio", title: "Renegade Snares (Foul Play Remix)", previewPath: "AudioPreview115/v4/29/b3/5f/29b35f82-d9b6-3204-a188-1368f1a55304/mzaf_16098429711826377843.plus.aac.p.m4a" },
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
        { appleId: 1282764696, artist: "Ed Rush & Optical", title: "Pacman (Ram Trilogy Remix)", previewPath: "AudioPreview115/v4/90/5f/b0/905fb06a-e55e-4236-7765-40544f423e67/mzaf_13382887079030800922.plus.aac.p.m4a" },
        { appleId: 1715019834, artist: "Mefjus", title: "Emulation", previewPath: "AudioPreview126/v4/05/fb/aa/05fbaa3d-62e7-bcb1-6101-d5d32bb24f0e/mzaf_13432586045890325565.plus.aac.p.m4a" },
        { appleId: 1889575596, artist: "Black Sun Empire & Noisia", title: "Hideous (LeStR Remix)", previewPath: "AudioPreview221/v4/ac/13/a1/ac13a1b8-82df-1e23-113c-0646402949a2/mzaf_12047838065813552556.plus.aac.p.m4a" },
        { appleId: 1283360185, artist: "Ed Rush & Optical", title: "Watermelon", previewPath: "AudioPreview125/v4/11/bd/a9/11bda904-fc84-cbf7-39cf-3db2c894dee4/mzaf_15657600230124281851.plus.aac.p.m4a" },
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
      name: { de: "Deep", en: "Deep" },
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
        { appleId: 1828403807, artist: "Dub Phizix & Skeptical", title: "Marka (feat. Strategy)", previewPath: "AudioPreview211/v4/ee/48/01/ee480118-a335-867a-c02b-aedba98cde22/mzaf_6289049291877491983.plus.aac.p.m4a" },
        { appleId: 1743481022, artist: "Ivy Lab & Halogenix", title: "Click Clack", previewPath: "AudioPreview211/v4/a1/ea/59/a1ea59d6-53b5-c838-374f-6120690840c1/mzaf_16357300487107074534.plus.aac.p.m4a" },
        { appleId: 1720361024, artist: "Martyn & Om Unit", title: "Dragonfly", previewPath: "AudioPreview116/v4/7e/16/51/7e165176-3e94-376a-b99e-212a31d453c7/mzaf_8443564564259313134.plus.aac.p.m4a" },
      ],
    },
  },
  // Learning path – test version (Phase 3). New subgenres follow after the listening check.
  levels: [
    { subgenres: ["liquid", "jumpup", "halftime", "jungle"] },
    { subgenres: ["liquid", "jumpup", "halftime", "jungle", "dancefloor", "neurofunk", "ragga"], knowledge: ["foghorn"] },
    {
      subgenres: ["liquid", "jumpup", "halftime", "jungle", "dancefloor", "neurofunk", "ragga", "deep"],
      knowledge: ["foghorn", "roller"],
    },
  ],
  knowledge: [
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
