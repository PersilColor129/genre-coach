import type { Track } from '../../data/types'

/**
 * Tracks that are not in the game yet – only listed in the listening check,
 * per subgenre key. Kept ones move into src/data/dnb.ts, dropped ones are deleted here.
 * Round 2 (31.10.2026): replacements for the subgenres that had too few tracks left.
 */
export const CANDIDATES: Record<string, Track[]> = {
  neurofunk: [
    { appleId: 967575074, artist: "Noisia", title: "Shellshock (feat. Foreign Beggars)", previewPath: "AudioPreview125/v4/86/c8/0f/86c80f10-a410-171f-80c3-4ab9e4c3d9d4/mzaf_6455093277874086297.plus.aac.p.m4a" },
    { appleId: 1375359880, artist: "Mefjus", title: "Sinkhole", previewPath: "AudioPreview125/v4/fa/52/53/fa52535e-0d56-44ab-4b9a-6929282ac603/mzaf_18017097309495937900.plus.aac.p.m4a" },
    { appleId: 1436114315, artist: "Black Sun Empire & Noisia", title: "Hideous", previewPath: "AudioPreview221/v4/b9/38/4c/b9384c03-441e-9bb0-4e12-3e677247c613/mzaf_9286263344713158948.plus.aac.p.m4a" },
    { appleId: 1676001070, artist: "Phace", title: "Imbalanced", previewPath: "AudioPreview126/v4/76/ab/9a/76ab9a99-c8cd-569d-fa07-42d21337fddc/mzaf_107620263333162988.plus.aac.p.m4a" },
    { appleId: 513082306, artist: "Neonlight & Mefjus", title: "Puppet Master", previewPath: "AudioPreview125/v4/1a/c2/e0/1ac2e050-1773-f293-34bf-8e2bbf6550dc/mzaf_11385608751851847216.plus.aac.p.m4a" },
    { appleId: 734186285, artist: "Gridlok & Prolix", title: "Slingshot", previewPath: "AudioPreview115/v4/ab/71/0c/ab710ce9-fbfe-4f67-b895-605c41c6efa6/mzaf_4781739881879799691.plus.aac.p.m4a" },
    { appleId: 1133196107, artist: "Noisia & The Upbeats", title: "Dead Limit", previewPath: "AudioPreview221/v4/41/d7/97/41d797ce-ade1-0b1c-c0eb-df2ba4c17935/mzaf_18284053306637704006.plus.aac.p.m4a" },
  ],
  jumpup: [
    { appleId: 1680227803, artist: "Hedex", title: "MHITR (Semi-Automatic) [feat. Eksman]", previewPath: "AudioPreview211/v4/b2/19/30/b21930d8-6f55-7feb-1ca9-388790442373/mzaf_5483164715611054655.plus.aac.p.m4a" },
    { appleId: 275979915, artist: "DJ Hazard", title: "Killers Don't Die", previewPath: "AudioPreview221/v4/ea/85/3f/ea853f75-6c8c-4e91-90aa-e4eb982c6512/mzaf_14151289002853527099.plus.aac.p.m4a" },
    { appleId: 1682394429, artist: "Bou", title: "Closer (feat. Slay)", previewPath: "AudioPreview211/v4/b2/f1/71/b2f1718f-ea88-f182-9226-d8ef67fe7644/mzaf_14198373580429796506.plus.aac.p.m4a" },
    { appleId: 1684992454, artist: "Kings Of The Rollers", title: "Burnt Ends (Circuits Rewire)", previewPath: "AudioPreview221/v4/ee/27/53/ee2753e7-88e1-950a-f058-9d8d1a1df943/mzaf_14183057053129702015.plus.aac.p.m4a" },
    { appleId: 1402876064, artist: "Macky Gee", title: "Moments", previewPath: "AudioPreview221/v4/09/3e/34/093e349f-6746-87e6-f48b-4ecf88dcbeca/mzaf_6361916599449373953.plus.aac.p.m4a" },
    { appleId: 264130796, artist: "DJ Hazard & D Minds", title: "Super Drunk", previewPath: "AudioPreview211/v4/95/61/b1/9561b152-6e72-261b-2dba-a5fc3f7b99de/mzaf_17044326789884436271.plus.aac.p.m4a" },
  ],
  halftime: [
    { appleId: 1828499916, artist: "Alix Perez", title: "U", previewPath: "AudioPreview221/v4/9f/75/a0/9f75a02c-7a57-8064-2eb9-9f22c0a38b20/mzaf_13799965567933378859.plus.aac.p.m4a" },
    { appleId: 1482826646, artist: "Shades & Ivy Lab", title: "Sleaze (feat. Alix Perez & Eprom)", previewPath: "AudioPreview115/v4/c5/bd/4a/c5bd4a8d-193e-b462-35fc-ea6f1cfca85e/mzaf_13515928003881669967.plus.aac.p.m4a" },
    { appleId: 1717575042, artist: "Ivy Lab & Halogenix", title: "Missing Persons (feat. Frank Carter III)", previewPath: "AudioPreview126/v4/bd/1f/3d/bd1f3d01-d3a9-75bb-c467-8070119b832f/mzaf_3384781485395165750.plus.aac.p.m4a" },
    { appleId: 1743474458, artist: "Ivy Lab", title: "Cake", previewPath: "AudioPreview211/v4/7a/be/de/7abedec3-7974-e7be-56c5-f3df25d7dc6b/mzaf_7361061032407920084.plus.aac.p.m4a" },
    { appleId: 1714502515, artist: "Halogenix", title: "Blej", previewPath: "AudioPreview126/v4/3a/b3/53/3ab3530e-692d-5a0d-4256-428381389a6a/mzaf_9038342431720129685.plus.aac.p.m4a" },
    { appleId: 1482921625, artist: "Om Unit", title: "Fire Exit", previewPath: "AudioPreview115/v4/a7/a4/c5/a7a4c5ad-106d-8722-5be1-3b26569f5dd6/mzaf_3955570619483628178.plus.aac.p.m4a" },
    { appleId: 1714502249, artist: "Hyroglifics & Signal", title: "Make Me Feel", previewPath: "AudioPreview126/v4/b0/f0/6d/b0f06d00-fdf7-68ae-9d0b-72e6c95c03dc/mzaf_6344004892357674943.plus.aac.p.m4a" },
  ],
  ragga: [
    { appleId: 573192963, artist: "Serial Killaz", title: "Walk and Skank", previewPath: "AudioPreview115/v4/2a/a8/cf/2aa8cf11-20c1-5c52-fc7b-eff356307bff/mzaf_13784792836254730377.plus.aac.p.m4a" },
    { appleId: 573192964, artist: "Serial Killaz", title: "Put It On", previewPath: "AudioPreview125/v4/b1/91/52/b191526c-243f-09b9-63f6-c3134e56fe90/mzaf_3674196199321303216.plus.aac.p.m4a" },
    { appleId: 504919602, artist: "General Levy", title: "Champagne Body", previewPath: "AudioPreview125/v4/09/37/7a/09377a49-e583-c27c-e8f7-12c70300738b/mzaf_17831537513977789591.plus.aac.p.m4a" },
    { appleId: 1712139033, artist: "Benny Page & MC Spyda", title: "Walk Like a Junglist", previewPath: "AudioPreview221/v4/a2/3c/cd/a23ccda3-814e-234e-5fec-46cd8a464564/mzaf_5975781921420907934.plus.aac.p.m4a" },
    { appleId: 1457058144, artist: "Benny Page & Doktor", title: "Warn Dem", previewPath: "AudioPreview221/v4/74/91/37/74913754-e5a6-c56d-fe89-d3e7ab443a6c/mzaf_14859543311007225722.plus.aac.p.m4a" },
    { appleId: 1708249056, artist: "Chopstick Dubplate", title: "Bounty Hunter (feat. Cheshire Cat)", previewPath: "AudioPreview116/v4/ab/29/62/ab29626d-5379-429f-b74b-b3178c5a5180/mzaf_1669071693321314496.plus.aac.p.m4a" },
  ],
  dancefloor: [
    { appleId: 1464221004, artist: "Dimension", title: "UK", previewPath: "AudioPreview221/v4/f4/0c/6b/f40c6ba0-2ce4-34e7-ac72-6b0971d91b57/mzaf_606364738132620630.plus.aac.p.m4a" },
    { appleId: 1704393613, artist: "Kenya Grace", title: "Strangers", previewPath: "AudioPreview221/v4/76/be/6e/76be6e54-2413-1411-7563-1e52a63ac767/mzaf_4464148852433554469.plus.aac.p.m4a" },
    { appleId: 1760321175, artist: "Chase & Status & Stormzy", title: "BACKBONE", previewPath: "AudioPreview211/v4/fb/fe/a2/fbfea299-7628-98b8-cc31-0f3177a5d766/mzaf_2816882771087606044.plus.aac.p.m4a" },
    { appleId: 899159193, artist: "Pendulum", title: "Tarantula (feat. Fresh, $Pyda & Tenor Fly)", previewPath: "AudioPreview221/v4/09/f3/12/09f3128f-5c55-349e-bc7e-3f68e54a23a8/mzaf_14889421680239389409.plus.aac.p.m4a" },
    { appleId: 1473152283, artist: "Sub Focus", title: "Solar System", previewPath: "AudioPreview221/v4/87/87/11/87871118-5a38-45fb-4769-5085c9d60be5/mzaf_16591579207639247635.plus.aac.p.m4a" },
    { appleId: 1541032127, artist: "Dimension", title: "Offender", previewPath: "AudioPreview211/v4/94/42/60/9442600e-59d9-69c1-80dd-ffa1dc5ab8b9/mzaf_14679845546211014021.plus.aac.p.m4a" },
  ],
  drumfunk: [
    { appleId: 6798742583, artist: "Fanu", title: "Headgames", previewPath: "AudioPreview211/v4/32/7a/74/327a74b3-48de-f3a8-8139-1cffd0cf7139/mzaf_8484030019182187755.plus.aac.p.m4a" },
    { appleId: 1282776046, artist: "Fanu", title: "Polar Chord", previewPath: "AudioPreview115/v4/9b/16/5c/9b165cce-451d-8251-e5c4-6f9e1d9e8f31/mzaf_2254540847070227817.plus.aac.p.m4a" },
    { appleId: 1286313621, artist: "Fanu", title: "Five Ounces", previewPath: "AudioPreview128/v4/62/4f/c4/624fc456-afd4-4952-5553-e73bec72ecd4/mzaf_326981325623625259.plus.aac.p.m4a" },
    { appleId: 692570376, artist: "Phuture-T", title: "Gwarn Badman", previewPath: "AudioPreview211/v4/6c/d6/f3/6cd6f360-e925-7f39-2bc1-6590474f017e/mzaf_10965815970517421210.plus.aac.p.m4a" },
    { appleId: 470789571, artist: "Phuture-T", title: "Basement Dub", previewPath: "Music/v4/19/25/73/1925736b-3332-0e69-3bbf-73dff8790582/mzaf_8086516398004414561.plus.aac.p.m4a" },
    { appleId: 1514299401, artist: "Fracture & Neptune", title: "Continuities", previewPath: "AudioPreview113/v4/7d/f0/45/7df04586-8817-65e6-e517-0260d13e6709/mzaf_17598223447765193328.plus.aac.p.m4a" },
    { appleId: 1514299393, artist: "Fracture & Neptune", title: "Apollo", previewPath: "AudioPreview115/v4/75/f1/ee/75f1eedc-1d49-b80a-2da2-c0d45d5009dc/mzaf_10777667115421153624.plus.aac.p.m4a" },
    { appleId: 279136186, artist: "Martsman", title: "8 Bit Bouncer", previewPath: "AudioPreview125/v4/a4/68/d2/a468d2a6-8104-914d-06f7-8ff35635110c/mzaf_15182299398502579902.plus.aac.p.m4a" },
    { appleId: 725177885, artist: "Bulb", title: "Tenderness", previewPath: "AudioPreview125/v4/aa/c1/88/aac18804-6f3d-8bda-7e0a-c1338c7e7551/mzaf_16348523163771139742.plus.aac.p.m4a" },
  ],
}
