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
      tracks: [
        { appleId: 286769112, artist: "Hardfloor", title: "Acperience 1", previewPath: "AudioPreview211/v4/b6/ab/29/b6ab2960-b400-0a61-5e92-d254242fa807/mzaf_9924453691037160278.plus.aac.p.m4a" },
        { appleId: 1437597408, artist: "Josh Wink", title: "Higher State of Consciousness (Dirty South & TV Rock Radio Edit)", previewPath: "AudioPreview116/v4/90/9c/90/909c905d-4d0b-ac3a-bda4-ec98abb316dd/mzaf_17279896093978417271.plus.aac.p.m4a" },
        { appleId: 409359822, artist: "Emmanuel Top", title: "Acid Phase", previewPath: "AudioPreview211/v4/94/80/4e/94804eb4-391e-4c69-85ca-3dc4dd16aa67/mzaf_16091894385033363985.plus.aac.p.m4a" },
        { appleId: 1678835626, artist: "Charlotte de Witte", title: "Doppler", previewPath: "AudioPreview221/v4/2b/c4/3a/2bc43a68-0fa9-960f-b7ff-14af1df16d41/mzaf_7584869013869934298.plus.aac.p.m4a" },
        { appleId: 1575034512, artist: "Regal", title: "Acid Is the Answer (Dub Mix)", previewPath: "AudioPreview221/v4/93/5b/7a/935b7ad9-07f6-04e8-e652-409e9b940c1d/mzaf_3576611829451187551.plus.aac.p.m4a" },
        { appleId: 164881534, artist: "Hardfloor", title: "Funalogue", previewPath: "AudioPreview125/v4/42/0e/f9/420ef976-381a-59dd-d2d8-29ae400df890/mzaf_17203987656880354107.plus.aac.p.m4a" },
        { appleId: 1822395919, artist: "Josh Wink", title: "Don't Laugh", previewPath: "AudioPreview221/v4/19/28/a1/1928a1af-37e5-e85a-fd19-9b806a756a1d/mzaf_11612604587129035947.plus.aac.p.m4a" },
      ],
    },
    breakcore: {
      name: { de: "Breakcore", en: "Breakcore" },
      desc: {
        de: "Zerhackte, extrem schnell geschnittene Breakbeats (oft der Amen Break), chaotische Edits und wilde Genre-Mixe von Klassik bis Metal. Kein gerader 4/4-Kick, sondern ein Gewitter aus Snares, oft 160–300 BPM.",
        en: "Chopped, extremely fast-cut breakbeats (often the Amen break), chaotic edits and wild genre mash-ups from classical to metal. No straight 4/4 kick – a storm of snares, often 160–300 BPM.",
      },
      tracks: [
        { appleId: 1046224796, artist: "Venetian Snares", title: "Szamár Madár", previewPath: "AudioPreview221/v4/36/c2/17/36c217b4-f3fe-2bcb-b77b-26ec62e38d09/mzaf_8616999220581870878.plus.aac.p.m4a" },
        { appleId: 1046224793, artist: "Venetian Snares", title: "Hajnal", previewPath: "AudioPreview221/v4/dc/4d/33/dc4d330d-4520-7199-504c-64f0b1a3cfb6/mzaf_15977103419376447163.plus.aac.p.m4a" },
        { appleId: 6797939719, artist: "Machine Girl", title: "Ghost", previewPath: "AudioPreview211/v4/28/ec/b5/28ecb5ec-ba1a-91e7-b59b-54ea2dc296c9/mzaf_474426962227078206.plus.aac.p.m4a" },
        { appleId: 1046227528, artist: "Venetian Snares", title: "Vida", previewPath: "Music3/v4/a3/4b/12/a34b12d0-c8ad-92e7-8049-abe277cb6f4a/mzaf_3465405585372924758.plus.aac.p.m4a" },
        { appleId: 1491968187, artist: "Igorrr", title: "Very Noise", previewPath: "AudioPreview221/v4/ec/bc/6a/ecbc6a8a-eaf9-bee1-59a9-efb7280a52e0/mzaf_5274559302033484070.plus.aac.p.m4a" },
        { appleId: 1891410166, artist: "Kid606", title: "Ecstasy Motherfucker", previewPath: "AudioPreview221/v4/1a/12/ee/1a12eece-a52e-7649-8232-ed7df35e9bc6/mzaf_3628093804160873768.plus.aac.p.m4a" },
        { appleId: 265396265, artist: "Bong-Ra", title: "666MPH", previewPath: "AudioPreview125/v4/4d/88/6b/4d886b6c-28fc-2a63-08a2-969e26c0d39a/mzaf_363385041572356260.plus.aac.p.m4a" },
        { appleId: 265396771, artist: "Bong-Ra", title: "Can You Dig It?", previewPath: "AudioPreview115/v4/31/64/91/31649175-f23b-7ee8-cfc0-70d951e7b903/mzaf_1094480702787665220.plus.aac.p.m4a" },
      ],
    },
    cybergrind: {
      name: { de: "Cybergrind", en: "Cybergrind" },
      desc: {
        de: "Grindcore mit Drumcomputer und Elektronik: maschinelle Blastbeats, verzerrte Gitarren und Schreigesang, dazu Synths und Noise. Sehr kurz, brutal und eher Metal als Club.",
        en: "Grindcore with drum machines and electronics: machine-gun blast beats, distorted guitars and screamed vocals, plus synths and noise. Very short, brutal and closer to metal than to the club.",
      },
      tracks: [
        { appleId: 42257245, artist: "The Berzerker", title: "Reality", previewPath: "AudioPreview125/v4/a4/c5/b2/a4c5b2d1-d0c9-a188-3f5a-b6824cb706e8/mzaf_7319992291996714750.plus.aac.p.m4a" },
        { appleId: 268842111, artist: "Genghis Tron", title: "Board Up the House", previewPath: "AudioPreview125/v4/10/bc/94/10bc94ec-1cad-284e-b332-3b8a610ccb75/mzaf_4191519048997260250.plus.aac.p.m4a" },
        { appleId: 308198511, artist: "Agoraphobic Nosebleed", title: "Agorapocalypse Now", previewPath: "AudioPreview211/v4/27/86/a7/2786a7e1-d88b-65f2-cd5f-aba697acd3ce/mzaf_1747557900440863770.plus.aac.p.m4a" },
        { appleId: 268842260, artist: "Genghis Tron", title: "Endless Teeth", previewPath: "AudioPreview125/v4/a2/2a/a8/a22aa814-979d-fa68-dfa8-d2bac8e86bed/mzaf_15063093181192446659.plus.aac.p.m4a" },
        { appleId: 405337125, artist: "The Berzerker", title: "No One Wins (Live)", previewPath: "AudioPreview62/v4/ee/fd/aa/eefdaa86-12e4-ea99-fb9c-5bff62cef93e/mzaf_9154183261278496549.plus.aac.p.m4a" },
        { appleId: 268842714, artist: "Genghis Tron", title: "Relief", previewPath: "AudioPreview125/v4/0f/be/8b/0fbe8bbf-b195-a5a3-bcde-c942a553a1b5/mzaf_16446078978245500822.plus.aac.p.m4a" },
        { appleId: 42257241, artist: "The Berzerker", title: "Forever", previewPath: "AudioPreview115/v4/da/4c/f0/da4cf0a1-6024-d60d-4254-828a1894ecdc/mzaf_1798792681788108367.plus.aac.p.m4a" },
      ],
    },
    detroit: {
      name: { de: "Detroit Techno", en: "Detroit Techno" },
      desc: {
        de: "Der Ursprung des Techno (Detroit, Mitte der 80er): warme, futuristische Synth-Flächen und Strings, Funk- und Soul-Gefühl, Drumcomputer-Beats um 120–135 BPM. Klingt melancholisch und hoffnungsvoll zugleich.",
        en: "Where techno began (Detroit, mid-80s): warm, futuristic synth pads and strings, a funk and soul feel, drum-machine beats around 120–135 BPM. Melancholic and hopeful at the same time.",
      },
      tracks: [
        { appleId: 1678920653, artist: "Derrick May, Mayday & Rhythim Is Rhythim", title: "Strings Of Life", previewPath: "AudioPreview116/v4/74/66/a9/7466a931-cee5-e8e5-b327-66ff9c559187/mzaf_5214720034261436593.plus.aac.p.m4a" },
        { appleId: 1539427286, artist: "Model 500", title: "No Ufo's (Vocal)", previewPath: "AudioPreview115/v4/26/e4/ce/26e4ce7e-9e3c-33e6-ead7-e444b5565e78/mzaf_13260541276506300995.plus.aac.p.m4a" },
        { appleId: 598481975, artist: "Jeff Mills", title: "The Bells", previewPath: "AudioPreview221/v4/b4/fa/49/b4fa4996-cfac-2963-c8e8-1b9407d761c9/mzaf_16317093109182960379.plus.aac.p.m4a" },
        { appleId: 257002397, artist: "Galaxy 2 Galaxy", title: "Hi-Tech Jazz", previewPath: "AudioPreview125/v4/87/c4/f0/87c4f0b6-9eff-5e88-8f67-995a45d93232/mzaf_16220279533466312568.plus.aac.p.m4a" },
        { appleId: 1216984095, artist: "Carl Craig", title: "At Les", previewPath: "AudioPreview211/v4/f1/86/c3/f186c3a6-bd75-ec26-b5f6-b9f0b8b85a7f/mzaf_10832889872839104230.plus.aac.p.m4a" },
        { appleId: 1533732263, artist: "Cybotron", title: "Clear", previewPath: "AudioPreview211/v4/54/97/19/54971977-db75-bc88-b8a0-cc56c4420d77/mzaf_17394881565509842410.plus.aac.p.m4a" },
        { appleId: 1538154522, artist: "Model 500", title: "Night Drive (Thru-Babylon)", previewPath: "AudioPreview125/v4/84/17/81/8417810c-fcce-83ab-9233-e3a0cf331fc2/mzaf_11266688950824186022.plus.aac.p.m4a" },
        { appleId: 724914276, artist: "Inner City", title: "Big Fun", previewPath: "AudioPreview211/v4/a8/42/cf/a842cf99-1cda-37c4-9e88-af44345f424b/mzaf_4940792745567137103.plus.aac.p.m4a" },
        { appleId: 1678920667, artist: "Derrick May, Mayday & Rhythim Is Rhythim", title: "Nude Photo", previewPath: "AudioPreview116/v4/0d/52/72/0d527211-bb0a-0f7f-a816-93711ede4835/mzaf_11845064249147890315.plus.aac.p.m4a" },
      ],
    },
    dub: {
      name: { de: "Dub-Techno", en: "Dub Techno" },
      desc: {
        de: "Kurze Akkord-Stabs verschwimmen in Hall und Echo, darunter eine gedämpfte, tiefe Kick, oft Rauschen und Knistern. Meditativ, gleichförmig und stark vom Dub-Reggae beeinflusst, etwa 115–125 BPM.",
        en: "Short chord stabs dissolve into reverb and echo over a muffled, deep kick, often with hiss and crackle. Meditative, steady and strongly influenced by dub reggae, around 115–125 BPM.",
      },
      tracks: [
        { appleId: 286664872, artist: "Basic Channel", title: "Phylyps Trak", previewPath: "AudioPreview211/v4/6a/7e/58/6a7e587b-90b1-d774-a9d0-77672bf01cb8/mzaf_15156818288839217117.plus.aac.p.m4a" },
        { appleId: 49295017, artist: "Rhythm & Sound", title: "Mango Drive", previewPath: "AudioPreview125/v4/93/7e/ca/937eca58-ff61-6c90-315f-6a227a258e05/mzaf_9643411864425378245.plus.aac.p.m4a" },
        { appleId: 304764022, artist: "Deepchord", title: "Vantage Isle (Convextion Remix)", previewPath: "AudioPreview125/v4/6f/c4/15/6fc415ba-91e0-1f04-8364-bfd02c6b21c1/mzaf_6542814211850402673.plus.aac.p.m4a" },
        { appleId: 282384877, artist: "Monolake", title: "Cyan", previewPath: "AudioPreview221/v4/bc/7b/1d/bc7b1d0d-b2b9-82c6-bd68-0c27f66a2ec7/mzaf_12405682535461260797.plus.aac.p.m4a" },
        { appleId: 496491077, artist: "Porter Ricks", title: "Port Gentil", previewPath: "AudioPreview125/v4/32/de/7c/32de7cc6-a0fc-d180-bb27-8f6cf79c5175/mzaf_13220684934037285551.plus.aac.p.m4a" },
        { appleId: 276360156, artist: "Basic Channel", title: "Quadrant Dub II", previewPath: "AudioPreview125/v4/3a/8e/59/3a8e5989-e250-0158-f3ea-698591465d70/mzaf_3359260221505794094.plus.aac.p.m4a" },
        { appleId: 563824296, artist: "Rhythm & Sound", title: "Smile", previewPath: "AudioPreview115/v4/f3/4d/a1/f34da1c4-81a7-c109-a06a-698819467b57/mzaf_14467196806308308204.plus.aac.p.m4a" },
        { appleId: 1510823404, artist: "Monolake", title: "Gobi (The Long Edit 2020)", previewPath: "AudioPreview125/v4/82/91/37/8291370a-5b14-7487-23e1-95e2d0abe2e1/mzaf_13006919011868546642.plus.aac.p.m4a" },
        { appleId: 1208655403, artist: "Gas", title: "Königsforst 6", previewPath: "AudioPreview211/v4/44/5f/42/445f421f-d95c-7168-f29e-1271963ac91e/mzaf_542830845142078006.plus.aac.p.m4a" },
      ],
    },
    frenchcore: {
      name: { de: "Frenchcore", en: "Frenchcore" },
      desc: {
        de: "Sehr schneller Hardcore (etwa 190–220 BPM), bei dem nach jeder Kick eine verzerrte, »rollende« Bassline im Offbeat folgt. Häufig mit Geigen, Klassik-Samples und dramatischen Melodien.",
        en: "Very fast hardcore (around 190–220 BPM) where every kick is followed by a distorted, rolling offbeat bassline. Often with violins, classical samples and dramatic melodies.",
      },
      tracks: [
        { appleId: 1443764365, artist: "Angernoizer & Dr. Peacock", title: "Trip to Mexico", previewPath: "AudioPreview125/v4/94/c9/67/94c967c2-f711-8558-04e5-3df95896d3e0/mzaf_13368911681088210804.plus.aac.p.m4a" },
        { appleId: 970285172, artist: "Dr. Peacock", title: "Vive la Frenchcore Anthem", previewPath: "AudioPreview125/v4/0b/0f/e8/0b0fe84c-b7fa-3b40-3b42-5d9ad9db6e47/mzaf_11601585918060453549.plus.aac.p.m4a" },
        { appleId: 1566829725, artist: "Dr. Peacock & Sefa", title: "Incoming", previewPath: "AudioPreview125/v4/2b/f0/24/2bf02470-f241-a177-0db0-6dfe9388489d/mzaf_7128743537416681618.plus.aac.p.m4a" },
        { appleId: 1889787135, artist: "Frenchcore Familia, Dr. Peacock, Billx & The Sickest Squad", title: "Chaos", previewPath: "AudioPreview211/v4/e9/98/0d/e9980db0-011b-bfe6-d832-2c05e0b2e56c/mzaf_5126376704601820829.plus.aac.p.m4a" },
        { appleId: 1553179410, artist: "Dr. Peacock", title: "Trip to Valhalla", previewPath: "AudioPreview211/v4/e9/cf/39/e9cf394b-49f4-a65b-6c2b-dff1b94f7461/mzaf_17945735577961340163.plus.aac.p.m4a" },
        { appleId: 1892397784, artist: "Dr. Peacock & Da Mouth of Madness", title: "Frenchcore Worldwide", previewPath: "AudioPreview211/v4/b9/d6/8b/b9d68b76-643e-c59c-9f1f-20826753d6a8/mzaf_11436758480995594522.plus.aac.p.m4a" },
      ],
    },
    gabber: {
      name: { de: "Gabber", en: "Gabber" },
      desc: {
        de: "Rotterdamer Hardcore der 90er: extrem verzerrte, hart übersteuerte Kickdrum, 160–200 BPM, Shout-Samples und schrille Hoover-Synths. Roh, aggressiv und fast nur Kick.",
        en: "Rotterdam hardcore from the 90s: an extremely distorted, heavily overdriven kick drum, 160–200 BPM, shouted samples and shrill hoover synths. Raw, aggressive and almost all kick.",
      },
      tracks: [
        { appleId: 339721602, artist: "Euromasters", title: "Alles Naar de Klote", previewPath: "AudioPreview115/v4/e4/a0/3d/e4a03dd1-b056-ec76-7c8f-e5e27135d9cb/mzaf_6981844569447930809.plus.aac.p.m4a" },
        { appleId: 942444895, artist: "Angerfist", title: "Raise Your Fist", previewPath: "AudioPreview221/v4/9a/59/25/9a592551-5e51-d852-62fc-bb18458d5238/mzaf_7820835979875298216.plus.aac.p.m4a" },
        { appleId: 293426795, artist: "Neophyte", title: "Army of Hardcore", previewPath: "AudioPreview125/v4/a9/29/f5/a929f59b-a21d-0cd7-d039-e4ffe2ff49d0/mzaf_202590208019854121.plus.aac.p.m4a" },
        { appleId: 1749636768, artist: "DJ Paul Elstak & Teenage Warning", title: "If Da Kidz Are United (DJ Isaac Remix)", previewPath: "AudioPreview211/v4/d7/a9/7b/d7a97b3d-1f9b-b95f-1d17-31e6f928a76e/mzaf_12350752490678736467.plus.aac.p.m4a" },
        { appleId: 1444661464, artist: "Rotterdam Terror Corps", title: "God is a Gabber (2019 Refix)", previewPath: "AudioPreview122/v4/a3/dc/94/a3dc94b1-7e8a-7e21-3a8e-58d903adc903/mzaf_659511218930000362.plus.aac.p.m4a" },
        { appleId: 942444833, artist: "Rotterdam Terror Corps", title: "We're Gonna Blow Your Mind", previewPath: "AudioPreview211/v4/07/20/56/0720562b-8f5f-24fe-4e3b-d955bc503c1e/mzaf_8937183968942714275.plus.aac.p.m4a" },
      ],
    },
    gabberpop: {
      name: { de: "Gabberpop", en: "Gabberpop" },
      desc: {
        de: "Gabber trifft Pop: eingängige, fröhliche Melodien, Pop- oder Rap-Vocals und hochgepitchte Refrains, dazu sauberere Kicks als im Gabber. Augenzwinkernd und charttauglich, meist 150–180 BPM.",
        en: "Gabber meets pop: catchy, happy melodies, pop or rap vocals and pitched-up hooks, with cleaner kicks than gabber. Tongue-in-cheek and chart-friendly, usually 150–180 BPM.",
      },
      tracks: [
        { appleId: 1739901345, artist: "Party Animals", title: "Have You Ever Been Mellow (Tempo Team Radio Mix)", previewPath: "AudioPreview221/v4/79/c2/81/79c281b2-2e0c-72a0-6c9c-e253a1b624d4/mzaf_9399394697471255964.plus.aac.p.m4a" },
        { appleId: 391801015, artist: "Hakkuhbar", title: "Super Gabber (Radio Mix)", previewPath: "AudioPreview125/v4/0e/c4/c4/0ec4c4b6-dc50-3375-aba3-8019d0bc0f1f/mzaf_2836789288546332108.plus.aac.p.m4a" },
        { appleId: 1732041802, artist: "Joost", title: "Europapa", previewPath: "AudioPreview211/v4/4a/76/8f/4a768fb6-1ccc-539c-cb75-1d0e84345e0a/mzaf_10046446371916706924.plus.aac.p.m4a" },
        { appleId: 1828864569, artist: "Technohead", title: "I Wanna Be a Hippy", previewPath: "AudioPreview211/v4/55/99/d2/5599d2df-25c5-4644-99e8-73fbc3ee984b/mzaf_17522551627260870670.plus.aac.p.m4a" },
        { appleId: 1750731948, artist: "Party Animals", title: "Wazzup (Flamman & Abraxas Mix)", previewPath: "AudioPreview221/v4/bc/8c/41/bc8c4114-0616-20e4-6ee9-fa2230ccf7e1/mzaf_8629314622244473592.plus.aac.p.m4a" },
        { appleId: 1822360469, artist: "Gabber Piet", title: "Hakke & Zage", previewPath: "AudioPreview211/v4/35/8a/97/358a97d9-8196-e88d-9835-00f6e5a0ac58/mzaf_7848886908469671533.plus.aac.p.m4a" },
      ],
    },
    ghettotech: {
      name: { de: "Ghetto Tech", en: "Ghetto Tech" },
      desc: {
        de: "Detroiter Clubsound der 90er: schnelle 808- und 909-Drumcomputer-Beats (etwa 145–170 BPM) mit Einflüssen aus Miami Bass und Ghetto House, dazu kurze, ständig wiederholte und oft anzügliche Vocal-Loops.",
        en: "Detroit club sound from the 90s: fast 808 and 909 drum-machine beats (around 145–170 BPM) with Miami bass and ghetto house influences, plus short, endlessly repeated and often cheeky vocal loops.",
      },
      tracks: [
        { appleId: 1656449786, artist: "DJ Funk", title: "Pump It Up", previewPath: "AudioPreview112/v4/54/86/7f/54867fe2-dca8-5b14-e4f9-4172ad11a75f/mzaf_15510232221458993316.plus.aac.p.m4a" },
        { appleId: 4376852, artist: "DJ Godfather", title: "Player Haters in Dis House", previewPath: "AudioPreview125/v4/00/29/17/002917a7-aff8-aef6-ccfb-eb048c13a137/mzaf_5107893795573050527.plus.aac.p.m4a" },
        { appleId: 972921367, artist: "DJ Assault", title: "Sex On the Beach", previewPath: "AudioPreview221/v4/c1/c8/e2/c1c8e209-00f6-6ba7-ad7e-1b3504d36375/mzaf_12766675510344690375.plus.aac.p.m4a" },
        { appleId: 972920878, artist: "DJ Assault", title: "Livin' the (Good Life)", previewPath: "AudioPreview221/v4/16/46/93/16469331-d84e-f6f4-ec15-5e613263314a/mzaf_1133701286848921171.plus.aac.p.m4a" },
        { appleId: 1065198533, artist: "DJ Assault", title: "I Say Uuuuah", previewPath: "AudioPreview115/v4/38/fd/af/38fdaf47-f28c-105c-140f-7a019f8712a9/mzaf_3147075799747015651.plus.aac.p.m4a" },
        { appleId: 1860528456, artist: "DJ Godfather", title: "Algorythm", previewPath: "AudioPreview211/v4/ab/7f/55/ab7f551b-c51d-899c-f8c7-ff54cdb0b977/mzaf_12001618140387627614.plus.aac.p.m4a" },
        { appleId: 264067209, artist: "DJ Godfather", title: "Crank Dat", previewPath: "AudioPreview115/v4/22/d0/31/22d03142-cc4b-02bc-8bca-1e8ebbde234c/mzaf_7014964046752399563.plus.aac.p.m4a" },
      ],
    },
    happy: {
      name: { de: "Happy Hardcore", en: "Happy Hardcore" },
      desc: {
        de: "Fröhlicher Hardcore mit 160–180 BPM: hochgepitchte, quietschige Vocals, Piano-Riffs und euphorische Melodien. Die Kick ist hart, aber weniger verzerrt und düster als im Gabber.",
        en: "Cheerful hardcore at 160–180 BPM: pitched-up, squeaky vocals, piano riffs and euphoric melodies. The kick is hard, but less distorted and dark than in gabber.",
      },
      tracks: [
        { appleId: 1749651466, artist: "DJ Paul Elstak", title: "Luv U More (DJ Paul's Forze Remix)", previewPath: "AudioPreview221/v4/c1/12/57/c1125740-4c3f-229b-0c52-d5a92fa0a3cc/mzaf_9512362242190712595.plus.aac.p.m4a" },
        { appleId: 1803633859, artist: "Dune", title: "Hardcore Vibes", previewPath: "AudioPreview211/v4/c4/14/5f/c4145fe7-9bf1-e9d0-3e3e-b4f3a4d66e97/mzaf_11655188274565496416.plus.aac.p.m4a" },
        { appleId: 1781315904, artist: "DJ Paul Elstak", title: "Rainbow in the Sky (Mixed)", previewPath: "AudioPreview221/v4/6b/df/e1/6bdfe12f-7c6c-dce1-8ab2-d61f467f9f8b/mzaf_13600165165187069152.plus.aac.p.m4a" },
        { appleId: 1723346064, artist: "Hixxy, Sharkey & Bönkers", title: "Toytown (Bass-D, F. Noize, Potato Remix)", previewPath: "AudioPreview126/v4/e9/a2/fb/e9a2fb2d-e165-301a-2832-e8acaa8733b7/mzaf_6353709787664464669.plus.aac.p.m4a" },
        { appleId: 1753098134, artist: "Charly Lownoise & Mental Theo", title: "Wonderful Days (Radio Edit)", previewPath: "AudioPreview221/v4/b9/9f/b8/b99fb81a-85d6-b5e2-b8bc-48e3b30a3fa7/mzaf_1732178925248881140.plus.aac.p.m4a" },
        { appleId: 1711277591, artist: "Hixxy & Jomarijan", title: "More & More", previewPath: "AudioPreview116/v4/5a/4e/22/5a4e2227-35ca-518a-50c9-d471ef20a6bc/mzaf_14173898816466561336.plus.aac.p.m4a" },
      ],
    },
    hardstyle: {
      name: { de: "Hardstyle", en: "Hardstyle" },
      desc: {
        de: "Niederländisch, um 150 BPM: Erkennungsmerkmal ist die verzerrte, »gezogene« Kick mit tonalem Nachklang (Reverse Bass), dazu epische Synth-Melodien, lange Breakdowns und große Hymnen.",
        en: "Dutch, around 150 BPM: the trademark is the distorted, pitched kick with a tonal tail (reverse bass), plus epic synth melodies, long breakdowns and big anthems.",
      },
      tracks: [
        { appleId: 506651335, artist: "Headhunterz", title: "Dragonborn (Original Mix)", previewPath: "AudioPreview211/v4/ec/66/13/ec661371-9b1b-5415-f8e8-615a15dca4b9/mzaf_9356909856131840187.plus.aac.p.m4a" },
        { appleId: 446464618, artist: "Showtek", title: "FTS", previewPath: "AudioPreview125/v4/1a/1a/78/1a1a78f2-67f4-b3a8-1857-31583725a46a/mzaf_15327524994892061061.plus.aac.p.m4a" },
        { appleId: 1447117600, artist: "Da Tweekaz", title: "Jägermeister", previewPath: "AudioPreview211/v4/39/5e/e2/395ee299-4ab0-032a-9318-a1b69f978692/mzaf_9732489835575518498.plus.aac.p.m4a" },
        { appleId: 573957043, artist: "Wildstylez", title: "Year of Summer (Radio Edit)", previewPath: "AudioPreview115/v4/af/22/13/af2213ee-0bf9-662b-bc91-885a083325e3/mzaf_1518411649081110693.plus.aac.p.m4a" },
        { appleId: 705102122, artist: "Brennan Heart & Jonathan Mendelsohn", title: "Imaginary", previewPath: "AudioPreview211/v4/91/ce/ed/91ceedd5-8514-a97f-fc7f-103a35d9dfe8/mzaf_2157011361334774385.plus.aac.p.m4a" },
        { appleId: 529461465, artist: "Brennan Heart & Wildstylez", title: "Lose My Mind (Original Mix)", previewPath: "AudioPreview125/v4/11/f8/b2/11f8b2cd-99d8-3b97-3a9f-6309a4cbe25f/mzaf_10488574974875303165.plus.aac.p.m4a" },
        { appleId: 446464606, artist: "Headhunterz", title: "Scrap Attack (Defqon.1 2009 Anthem)", previewPath: "AudioPreview125/v4/7b/d7/37/7bd737fa-aab0-51b3-bf2f-4c7f8149e663/mzaf_7068218463206197721.plus.aac.p.m4a" },
      ],
    },
    industrial: {
      name: { de: "Industrial Hardcore", en: "Industrial Hardcore" },
      desc: {
        de: "Düsterer Hardcore, oft langsamer als Gabber (130–180 BPM): stark verzerrte Kick, metallische Maschinengeräusche und Noise, kaum Melodie. Im Vordergrund stehen Sound-Experimente und Härte.",
        en: "Dark hardcore, often slower than gabber (130–180 BPM): heavily distorted kick, metallic machine sounds and noise, hardly any melody. The focus is on sound experiments and harshness.",
      },
      tracks: [
        { appleId: 1302358788, artist: "Mescalinum United", title: "We Have Arrived (The Mover Remix)", previewPath: "AudioPreview115/v4/b9/d3/61/b9d361d9-83f8-8948-f320-70da49221f23/mzaf_11610518125632950602.plus.aac.p.m4a" },
        { appleId: 1178630496, artist: "N-Vitral", title: "Ghettocore (Mad Dog Remix)", previewPath: "AudioPreview71/v4/0d/6d/cf/0d6dcfbf-2736-cecf-bbbe-c0b2875203db/mzaf_2195769744227652773.plus.aac.p.m4a" },
        { appleId: 6763048700, artist: "Ophidian & Dj Ruffneck", title: "Noisemaker (Straightbackward VIP)", previewPath: "AudioPreview211/v4/f0/20/b8/f020b888-3d82-423e-5be5-8b5b880517ff/mzaf_3291535167882557000.plus.aac.p.m4a" },
        { appleId: 1484354717, artist: "The Outside Agency", title: "The Opposites", previewPath: "AudioPreview221/v4/00/d5/4d/00d54d29-8bae-ca42-6ebb-1ee71588ba7d/mzaf_17925521663118406879.plus.aac.p.m4a" },
        { appleId: 1793053661, artist: "Ophidian", title: "Theory of Nothing", previewPath: "AudioPreview221/v4/18/cd/7a/18cd7a4a-1d72-d999-b256-faf622425c9b/mzaf_13899069474409056263.plus.aac.p.m4a" },
        { appleId: 1302349028, artist: "Ophidian", title: "Inception By Sound (QORE 3.0 OST 2011)", previewPath: "AudioPreview115/v4/a5/65/e3/a565e317-67b2-0d12-87b9-4b48c0fd7ef2/mzaf_6125183219057321746.plus.aac.p.m4a" },
      ],
    },
    minimal: {
      name: { de: "Minimal Techno", en: "Minimal Techno" },
      desc: {
        de: "Auf wenige Elemente reduziert: trockene Kick, Klicks und kleine Percussion-Sounds, die sich über lange Zeit nur minimal verändern. Viel Leere, hypnotisch, etwa 120–130 BPM.",
        en: "Reduced to a few elements: dry kick, clicks and small percussion sounds that change only slightly over a long time. Lots of space, hypnotic, around 120–130 BPM.",
      },
      tracks: [
        { appleId: 1621738415, artist: "Robert Hood", title: "Minus", previewPath: "AudioPreview122/v4/7c/b0/ae/7cb0ae29-630f-e9a7-8017-2d601fdfaeeb/mzaf_16145924275243680253.plus.aac.p.m4a" },
        { appleId: 1501456261, artist: "Plastikman", title: "Spastik (Dubfire Rework)", previewPath: "AudioPreview115/v4/ed/92/d6/ed92d619-e4fc-0ba9-9d84-28c71b3034ac/mzaf_16902065523129971697.plus.aac.p.m4a" },
        { appleId: 335267199, artist: "Robert Hood", title: "The Pace", previewPath: "AudioPreview115/v4/ee/67/36/ee673616-45a3-a005-a909-e549b911bad0/mzaf_4166773666051810911.plus.aac.p.m4a" },
        { appleId: 1494252359, artist: "Richie Hawtin", title: "Minus/Orange 1", previewPath: "AudioPreview115/v4/4f/28/35/4f28357f-251b-3d88-de04-5f574857aa2d/mzaf_8170801509341968188.plus.aac.p.m4a" },
        { appleId: 1822365597, artist: "Ricardo Villalobos", title: "Dexter", previewPath: "AudioPreview211/v4/73/dd/54/73dd540c-20bf-e398-d667-31e77862dd64/mzaf_16700577905651580972.plus.aac.p.m4a" },
        { appleId: 1886460435, artist: "Ricardo Villalobos & goat (JP)", title: "Orin (Ricardo Villalobos Variation)", previewPath: "AudioPreview211/v4/f4/ef/05/f4ef059a-2ee0-0d3a-82d5-09ab4068ae0d/mzaf_547687175721977409.plus.aac.p.m4a" },
        { appleId: 1507828058, artist: "Plastikman", title: "Consumed", previewPath: "AudioPreview115/v4/7a/d8/91/7ad89159-13eb-b3d4-9a7a-bc4f73e69c5d/mzaf_1427543699548819897.plus.aac.p.m4a" },
        { appleId: 1678680774, artist: "Robert Hood", title: "Face In The Water", previewPath: "AudioPreview126/v4/e2/32/0c/e2320cb5-3423-578d-264d-83b36bb6ee33/mzaf_3806528815065449820.plus.aac.p.m4a" },
      ],
    },
    progressive: {
      name: { de: "Progressive Techno", en: "Progressive Techno" },
      desc: {
        de: "Lange, treibende Tracks, die sich durch kleinste Änderungen der Klangfarbe langsam steigern und auf einen Höhepunkt zulaufen. Perkussiv und hypnotisch, typisch für Peaktime-Techno der späten 90er und frühen 2000er.",
        en: "Long, driving tracks that build slowly towards a peak through tiny changes in timbre. Percussive and hypnotic, typical of peak-time techno from the late 90s and early 2000s.",
      },
      tracks: [
        { appleId: 1548686358, artist: "Monika Kruse", title: "Solid State (Balthazar & Jackrock Remix)", previewPath: "AudioPreview114/v4/af/ea/57/afea57d6-76af-418c-2e38-ca412668ffa3/mzaf_2769835748226935688.plus.aac.p.m4a" },
        { appleId: 83063929, artist: "Funk D'Void", title: "Diabla (Heavenly Mix)", previewPath: "AudioPreview116/v4/ee/50/6b/ee506bd7-f011-a858-d998-79ef4d664c0d/mzaf_623563963130090484.plus.aac.p.m4a" },
        { appleId: 1656796131, artist: "Ben Sims", title: "Unity", previewPath: "AudioPreview112/v4/4a/b0/ec/4ab0ec2a-ba6a-6fec-fed1-8c6d25158304/mzaf_7591976084021590972.plus.aac.p.m4a" },
        { appleId: 903355767, artist: "Ben Sims", title: "Raw Hide", previewPath: "AudioPreview115/v4/f9/15/ce/f915ce37-6985-0b76-55ca-d35b1c676bb1/mzaf_13769916525201558365.plus.aac.p.m4a" },
        { appleId: 901732145, artist: "Monika Kruse", title: "Namaste", previewPath: "AudioPreview115/v4/cf/e6/da/cfe6da1d-0903-a7fd-6846-ab4049aaac47/mzaf_17139017761210978347.plus.aac.p.m4a" },
        { appleId: 6771024563, artist: "Oxia", title: "Domino", previewPath: "AudioPreview221/v4/8c/49/3e/8c493e69-2c90-a4e3-f645-d97a34037913/mzaf_16625466660388123177.plus.aac.p.m4a" },
      ],
    },
    schranz: {
      name: { de: "Schranz", en: "Schranz" },
      desc: {
        de: "Deutscher Hardtechno, etwa 145–160 BPM: stark komprimierte, gefilterte und scheppernde Percussion-Loops, brachial und kaum melodisch. Klingt wie eine Maschine, die sich immer weiter hochdreht.",
        en: "German hard techno, around 145–160 BPM: heavily compressed, filtered and clattering percussion loops, brutal and barely melodic. Sounds like a machine revving higher and higher.",
      },
      tracks: [
        { appleId: 1707029464, artist: "Chris Liebing & Andre Walter", title: "Kronos A1 (Stigmata 10)", previewPath: "AudioPreview126/v4/b8/f6/94/b8f6945b-802a-cbc3-97f7-45bc960fc1f8/mzaf_12646050414454900587.plus.aac.p.m4a" },
        { appleId: 1619072321, artist: "Robert Natus", title: "Schranz Desaster", previewPath: "AudioPreview122/v4/2e/db/a7/2edba784-2929-15f7-4600-33dbf5f851f6/mzaf_17319619338818819733.plus.aac.p.m4a" },
        { appleId: 689921925, artist: "Frank Kvitta", title: "Balanced", previewPath: "AudioPreview71/v4/77/55/e9/7755e915-8de8-d447-1847-17e64cd24f7f/mzaf_2416751534232039655.plus.aac.p.m4a" },
        { appleId: 206769937, artist: "Sven Wittekind", title: "Sunstorm", previewPath: "AudioPreview115/v4/7c/5c/c2/7c5cc2f4-7838-0cca-1de9-4d2be3944914/mzaf_11855980467786805679.plus.aac.p.m4a" },
        { appleId: 320704641, artist: "Sven Wittekind", title: "Voices In My Head", previewPath: "AudioPreview125/v4/a1/57/3b/a1573bdb-4eeb-808a-0efd-1cc93f4cc77f/mzaf_12967727492155130541.plus.aac.p.m4a" },
        { appleId: 1031230819, artist: "Viper XXL", title: "Hardtechno Anthem", previewPath: "AudioPreview125/v4/2e/9d/f3/2e9df392-727e-f9be-3f52-812eb0aba8f4/mzaf_2833555620093807307.plus.aac.p.m4a" },
        { appleId: 1031230611, artist: "Arkus P. & Sepromatiq", title: "Visions", previewPath: "AudioPreview125/v4/4b/81/c1/4b81c19c-b53f-4164-3c86-84376e86169e/mzaf_15557569840221550174.plus.aac.p.m4a" },
        { appleId: 685394242, artist: "Arkus P.", title: "Don't Look Back", previewPath: "Music4/v4/52/ac/6b/52ac6b65-51b3-4068-3295-0e30e599f89a/mzaf_9093727953558010945.plus.aac.p.m4a" },
      ],
    },
    speedcore: {
      name: { de: "Speedcore", en: "Speedcore" },
      desc: {
        de: "Extrem schnell, meist über 250 BPM: Die Kicks verschwimmen fast zu einem durchgehenden Brummen. Dazu Horror-Samples, Schreie, Noise und düstere Synths.",
        en: "Extremely fast, usually over 250 BPM: the kicks almost blur into one continuous drone. Plus horror samples, screams, noise and dark synths.",
      },
      tracks: [
        { appleId: 1656380098, artist: "M1dy", title: "M1dy Is Sexy", previewPath: "AudioPreview112/v4/f8/98/b6/f898b6e2-43f0-e284-52b4-4f115609505d/mzaf_10552466274724905483.plus.aac.p.m4a" },
        { appleId: 1104458534, artist: "M1dy", title: "Cold Pizza", previewPath: "AudioPreview115/v4/c9/9d/43/c99d43cb-6eb2-2975-1652-1fc1de6637b2/mzaf_9818289383371495290.plus.aac.p.m4a" },
        { appleId: 449996996, artist: "Noizefucker", title: "Transformerz", previewPath: "Music/ed/c5/cc/mzm.slvhizqv.aac.p.m4a" },
        { appleId: 672758422, artist: "Noizefucker", title: "End of Time", previewPath: "Music6/v4/92/1d/d2/921dd226-e136-3a0b-9b0d-314ee2dc2285/mzaf_252868003116439273.plus.aac.p.m4a" },
      ],
    },
    techhouse: {
      name: { de: "Tech House", en: "Tech House" },
      desc: {
        de: "Die Brücke zwischen House und Techno: groovige, leicht swingende House-Rhythmen um 124–128 BPM mit Techno-Sounds, rollenden Basslines und oft kurzen Vocal-Schnipseln. Locker und tanzbar statt hart.",
        en: "The bridge between house and techno: groovy, slightly swinging house rhythms around 124–128 BPM with techno sounds, rolling basslines and often short vocal snippets. Loose and danceable rather than hard.",
      },
      tracks: [
        { appleId: 1408454985, artist: "FISHER", title: "Losing It", previewPath: "AudioPreview211/v4/5e/73/3e/5e733e6a-ddae-6081-dbbd-0be7e9542e60/mzaf_15726405558792372151.plus.aac.p.m4a" },
        { appleId: 64919292, artist: "Green Velvet", title: "La La Land", previewPath: "AudioPreview115/v4/f2/28/b2/f228b251-73d8-6dd5-916d-7e602ab395be/mzaf_2565779647566439496.plus.aac.p.m4a" },
        { appleId: 1772333125, artist: "Chris Lake & Alexis Roberts", title: "Turn off the Lights", previewPath: "AudioPreview221/v4/65/1d/79/651d7930-5e56-9240-9de4-ff8a4b089811/mzaf_12506928955334432124.plus.aac.p.m4a" },
        { appleId: 1673189256, artist: "Michael Bibi & KinAhau", title: "Different Side", previewPath: "AudioPreview116/v4/78/83/05/788305dc-13dd-d065-e414-e3ecc621859f/mzaf_12981899925940365638.plus.aac.p.m4a" },
        { appleId: 1645283575, artist: "Mau P", title: "Drugs From Amsterdam", previewPath: "AudioPreview211/v4/c5/a8/bb/c5a8bb36-1dba-f4af-e743-99906173c817/mzaf_7750262380525476484.plus.aac.p.m4a" },
        { appleId: 1454818194, artist: "Dom Dolla", title: "Take It", previewPath: "AudioPreview211/v4/7c/6b/5a/7c6b5aea-9397-84bd-d0bd-9883689bdd22/mzaf_6172376446877393878.plus.aac.p.m4a" },
        { appleId: 1346852711, artist: "Patrick Topping", title: "Be Sharp Say Nowt", previewPath: "AudioPreview211/v4/51/bc/84/51bc84a1-cfaa-a0a7-325d-b8017e2be743/mzaf_5466065062613882733.plus.aac.p.m4a" },
      ],
    },
    trancecore: {
      name: { de: "Trancecore", en: "Trancecore" },
      desc: {
        de: "Britischer Hardcore der späten 90er mit Trance-Elementen: hymnische Synth-Leads, Arpeggios und lange Breakdowns, aber im Hardcore-Tempo um 170 BPM und mit harter Kick.",
        en: "British hardcore from the late 90s with trance elements: anthemic synth leads, arpeggios and long breakdowns, but at hardcore tempo around 170 BPM with a hard kick.",
      },
      tracks: [
        { appleId: 828085356, artist: "Marc Smith", title: "Pump Up the Noize", previewPath: "Music/v4/17/e1/63/17e1635a-3455-46c1-f13d-71031ac51395/mzaf_4657947097616646783.plus.aac.p.m4a" },
        { appleId: 714130922, artist: "Marc Smith", title: "Hardcore Never Dies", previewPath: "AudioPreview71/v4/08/ea/aa/08eaaa0f-d02d-928d-0d33-1908257680a5/mzaf_4680168499513689074.plus.aac.p.m4a" },
        { appleId: 446079556, artist: "Scott Brown", title: "Taking Drugs?", previewPath: "AudioPreview125/v4/e1/97/46/e197460b-2145-153f-3d28-1a238d6b8dff/mzaf_9201129314552156839.plus.aac.p.m4a" },
        { appleId: 1536439134, artist: "Kevin Energy & Jasmine Knight", title: "Universal Energy", previewPath: "AudioPreview115/v4/cd/81/4c/cd814c4f-2317-a985-e648-8717ecd68f4b/mzaf_505078626002705447.plus.aac.p.m4a" },
      ],
    },
  },
}
