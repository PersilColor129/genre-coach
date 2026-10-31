import type { Track } from '../../data/types'

/**
 * Tracks that are not in the game yet – only listed in the listening check,
 * per subgenre key. Kept ones move into src/data/dnb.ts, dropped ones are deleted here.
 * Round 3 (31.10.2026): classic Dancefloor tracks with a clear drop, and 90s Techstep.
 */
export const CANDIDATES: Record<string, Track[]> = {
  dancefloor: [
    { appleId: 899158991, artist: "Pendulum", title: "Slam", previewPath: "AudioPreview221/v4/5b/4c/76/5b4c76ff-8760-6712-b98f-219dedc82c67/mzaf_2779273035029915923.plus.aac.p.m4a" },
    { appleId: 267035370, artist: "Pendulum", title: "Granite", previewPath: "AudioPreview125/v4/9e/7b/c2/9e7bc21e-6301-9d88-c7d2-90d4484f0e92/mzaf_4290163843084913230.plus.aac.p.m4a" },
    { appleId: 1409828895, artist: "Sub Focus", title: "Timewarp", previewPath: "AudioPreview221/v4/b7/f0/7f/b7f07f25-0ab5-3dc8-b2c3-e16a5ade1ffe/mzaf_3364767693184567291.plus.aac.p.m4a" },
    { appleId: 1445176898, artist: "Sub Focus", title: "Tidal Wave (feat. Alpines)", previewPath: "AudioPreview115/v4/44/13/6c/44136cc6-c141-cc1b-613d-14ebf62c637c/mzaf_15072364855809816968.plus.aac.p.m4a" },
    { appleId: 1440717191, artist: "Chase & Status", title: "No Problem", previewPath: "AudioPreview221/v4/d9/5b/0b/d95b0b04-bc82-a856-efd0-45b13b45713f/mzaf_8375020334938450736.plus.aac.p.m4a" },
    { appleId: 1445299261, artist: "Chase & Status", title: "Count On Me (feat. Moko)", previewPath: "AudioPreview125/v4/41/27/9a/41279a9a-431a-4e2b-71ea-a8cca93ceab6/mzaf_9216163758260771538.plus.aac.p.m4a" },
    { appleId: 1527298280, artist: "DJ Fresh", title: "Gold Dust (Radio Edit)", previewPath: "AudioPreview221/v4/07/b3/59/07b35954-64da-d518-db7e-2d2646eccd23/mzaf_4516575332748345382.plus.aac.p.m4a" },
    { appleId: 1444905954, artist: "Delta Heavy", title: "Ghost", previewPath: "AudioPreview211/v4/39/11/71/391171c4-e59c-e2f9-4f76-68d787005b76/mzaf_1268676354097688681.plus.aac.p.m4a" },
  ],
  techstep: [
    { appleId: 106217488, artist: "Dom & Roland", title: "Imagination", previewPath: "AudioPreview125/v4/14/30/3a/14303a49-92ac-5d95-6232-6cc7de13905f/mzaf_16494939726096054885.plus.aac.p.m4a" },
    { appleId: 1533749221, artist: "Nasty Habits", title: "Shadow Boxing", previewPath: "AudioPreview115/v4/06/3b/8d/063b8d3b-2661-dc48-9058-7b97d5482504/mzaf_6130998920325544480.plus.aac.p.m4a" },
    { appleId: 1884390537, artist: "Matrix", title: "Mute", previewPath: "AudioPreview221/v4/8d/60/ba/8d60ba22-ca61-0546-96ad-63ccbc9d76e7/mzaf_15578380045350179672.plus.aac.p.m4a" },
    { appleId: 1884390535, artist: "Optical", title: "Grey Odyssey", previewPath: "AudioPreview221/v4/82/f8/9b/82f89b1a-e229-6613-8fa0-731795fa6b1e/mzaf_7710853750035704397.plus.aac.p.m4a" },
    { appleId: 1884390539, artist: "Dillinja", title: "Silver Blade", previewPath: "AudioPreview211/v4/87/e3/37/87e33745-8047-b567-25e2-509a1a8a19fa/mzaf_4041020087022890426.plus.aac.p.m4a" },
  ],
}
