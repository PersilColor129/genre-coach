# Fragenkatalog Techno

Grundlage für Level, Hör-Merkmale, Hör-Tipps, Verwechslungspaare und Wissensfragen im Techno-Spiel (gleicher Ablauf wie `fragenkatalog-dnb.md`).

**Ablauf**
1. Steckbriefe fachlich prüfen und abhaken. ✅ (16.11.2026)
2. Aus geprüften Steckbriefen leitet Claude die Fragen ab. ✅ (Entwurf 16.11.2026, siehe „Schritt 2“ unten)
3. Fragen prüfen und freigeben. ✅ (16.11.2026)

**Legende:** *(prüfen)* = Detail, bei dem sich Claude nicht ganz sicher ist – bitte besonders genau ansehen.

Stand: 16.11.2026 · 18 Subgenres (Cybergrind fällt raus, Hard Techno kommt dazu) · **18 von 18 geprüft** · unsichere Details nachgeprüft oder gestrichen

**Level-Aufteilung (abgestimmt 16.11.2026)**

| Level | Neu dazu | Subgenres gesamt |
|---|---|---|
| 1 | Tech House, Acid Techno, Dub-Techno, Hardstyle | 4 |
| 2 | Detroit Techno, Gabber, Hard Techno | 7 |
| 3 | Minimal Techno, Gabberpop, Schranz, Happy Hardcore | 11 |
| 4 | Frenchcore, Speedcore, Ghetto Tech | 14 |
| 5 | Progressive Techno, Industrial Hardcore, Breakcore, Trancecore | 18 |
| 6 | Meister: alle 18, nur ähnlich klingende Paare | 18 |

Hard Techno neu dazu (16.11.2026), Happy Hardcore dafür von Level 2 nach Level 3. Peak Time und Raw / Deep / Hypnotic bewusst nicht aufgenommen (Beatport-Kategorien, zu unscharf).

Die Steckbriefe stehen in dieser Level-Reihenfolge. Die Beschreibung im Spiel (`desc` in `src/data/techno.ts`) ist schon da; die Steckbriefe gehen darüber hinaus.

---

# Level 1

## Tech House *(Level 1)*
- [x] fachlich geprüft

- **Kurzprofil:** groovig, locker, tanzbar
- **Rhythmus:** ca. 120–130 BPM, die meisten Tracks um 124–128; gerade 4/4-Kick mit leicht swingenden Hi-Hats und Percussion wie im House
- **Bass:** rollende, oft funkige Basslines, die den Groove tragen
- **Sounds:** Techno-Klänge, kurze Vocal-Schnipsel und Sprach-Samples, kaum Flächen
- **Herkunft:** Mitte der 1990er in London (u. a. Club The End)
- **Schlüsselnamen:** FISHER, Chris Lake, Green Velvet, Patrick Topping, Michael Bibi, Dom Dolla
- **Verwechslungsgefahr:** Minimal Techno (auch groovig, aber viel leerer und trockener), Ghetto Tech (auch Vocal-Loops, aber viel schneller)
- **Erkennungstipp:** Ein lockerer, swingender Groove mit Vocal-Schnipsel, bei dem man eher mitwippt als stampft → Tech House.

## Acid Techno *(Level 1)*
- [x] fachlich geprüft

- **Kurzprofil:** quietschig, treibend, hypnotisch
- **Rhythmus:** ca. 130–150 BPM, treibende 4/4-Kick
- **Bass:** die Roland TB-303: eine Basslinie, deren Filter ständig auf- und zugedreht wird, dadurch blubbert, quietscht und kreischt sie
- **Sounds:** wenig außer Drums und 303; oft mehrere 303-Linien übereinander
- **Herkunft:** Die 303 wurde Anfang der 1980er gebaut und floppte zunächst; 1987 entstand in Chicago Acid House (Phuture „Acid Tracks“). Acid Techno als härtere Spielart in den 1990ern, u. a. in Deutschland (Hardfloor „Acperience“, 1992) und UK
- **Schlüsselnamen:** Hardfloor, Josh Wink, Emmanuel Top, Regal, Charlotte de Witte
- **Verwechslungsgefahr:** Detroit Techno (gleiche Ära, Drumcomputer, aber Flächen statt 303), Schranz (genauso treibend, aber ohne die quietschende Bassline)
- **Erkennungstipp:** Eine blubbernde, sich windende Bassline, die wie ein Synthesizer „spricht“ → Acid Techno.

## Dub-Techno *(Level 1)*
- [x] fachlich geprüft

- **Kurzprofil:** hallig, meditativ, verschwommen
- **Rhythmus:** ca. 115–125 BPM; gedämpfte, tiefe Kick, gleichförmig
- **Bass:** tief und weich, eher gefühlt als gehört
- **Sounds:** kurze Akkord-Stabs, die in Hall und Echo verschwimmen; Rauschen und Knistern wie von einer alten Platte
- **Herkunft:** Anfang der 1990er in Berlin: Basic Channel (Moritz von Oswald und Mark Ernestus) übertrugen die Studio-Technik des jamaikanischen Dub-Reggae auf Techno; Plattenladen Hard Wax
- **Schlüsselnamen:** Basic Channel, Rhythm & Sound, Deepchord, Monolake, Porter Ricks, Gas · Labels: Basic Channel, Chain Reaction
- **Verwechslungsgefahr:** Minimal Techno (auch reduziert, aber trocken statt hallig), Detroit Techno (auch Flächen, aber klarer und melodischer)
- **Erkennungstipp:** Ein Akkord, der wie durch Nebel immer wieder nachhallt, über einer weichen Kick → Dub-Techno.

## Hardstyle *(Level 1)*
- [x] fachlich geprüft

- **Kurzprofil:** episch, hymnisch, festivalgroß
- **Rhythmus:** ca. 150 BPM, gerade 4/4-Kick
- **Bass:** die Kick selbst ist der Bass: verzerrt, mit „gezogenem“ tonalem Nachklang (Reverse Bass), der fast eine Melodie spielt
- **Sounds:** große Synth-Melodien, lange Breakdowns, Hymnen zum Mitsingen, MC-Shouts
- **Herkunft:** um 2000 in den Niederlanden, mit eigenen Szenen in Italien und Belgien; groß geworden mit Festivals wie Defqon.1 (Veranstalter Q-dance)
- **Schlüsselnamen:** Headhunterz, Showtek, Brennan Heart, Wildstylez, Da Tweekaz · Labels: Scantraxx, Q-dance Records
- **Verwechslungsgefahr:** Gabber (auch harte, verzerrte Kick, aber schneller und ohne Melodie), Trancecore (auch hymnisch, aber schneller und mit Hardcore-Kick)
- **Erkennungstipp:** Eine Kick, die „pumpt“ und nachklingt, dazu eine riesige Festival-Melodie → Hardstyle.

---

# Level 2

## Detroit Techno *(Level 2)*
- [x] fachlich geprüft

- **Kurzprofil:** futuristisch, warm, melancholisch
- **Rhythmus:** ca. 120–135 BPM; Drumcomputer-Beats (Roland TR-808/909) mit Funk-Gefühl
- **Bass:** funkig, oft vom Synthesizer gespielt
- **Sounds:** warme Synth-Flächen, Strings, Melodien; klingt nach Zukunft und Sehnsucht zugleich
- **Herkunft:** Mitte der 1980er in Detroit; der Ursprung des Techno. Prägend: die „Belleville Three“ Juan Atkins, Derrick May und Kevin Saunderson
- **Schlüsselnamen:** Juan Atkins (Cybotron, Model 500), Derrick May (Rhythim Is Rhythim), Kevin Saunderson (Inner City), Jeff Mills, Carl Craig, Underground Resistance · Labels: Metroplex, Transmat, KMS
- **Verwechslungsgefahr:** Dub-Techno (auch Flächen, aber verschwommen), Progressive Techno (auch melodisch-hypnotisch, aber später und perkussiver), Acid Techno
- **Erkennungstipp:** Strings oder Synth-Flächen über einem funkigen Drumcomputer-Beat, der nach „Retro-Zukunft“ klingt → Detroit Techno.

## Gabber *(Level 2)*
- [x] fachlich geprüft

- **Kurzprofil:** roh, aggressiv, fast nur Kick
- **Rhythmus:** ca. 160–200 BPM; extrem verzerrte, übersteuerte Kickdrum
- **Bass:** steckt in der Kick, die „zerreißt“
- **Sounds:** Shout-Samples („Hardcore!“), schrille Hoover-Synths, kaum Melodie
- **Herkunft:** Anfang der 1990er in Rotterdam; „Gabber“ ist Amsterdamer Slang für „Kumpel“
- **Schlüsselnamen:** Euromasters, Paul Elstak, Rotterdam Terror Corps, Neophyte, Angerfist · Label: Rotterdam Records
- **Verwechslungsgefahr:** Gabberpop (gleiche Kick, aber mit Pop-Melodie), Frenchcore (schneller, mit rollender Offbeat-Bassline), Industrial Hardcore (düsterer, metallischer), Hardstyle
- **Erkennungstipp:** Eine schnelle, kaputt verzerrte Kick, die alles dominiert, dazu Shouts → Gabber.

## Hard Techno *(neu, Level 2)*
- [x] fachlich geprüft

- **Kurzprofil:** hart, schnell, ravig
- **Rhythmus:** ca. 145–160 BPM; wuchtige, verzerrte Kick mit rumpelndem Nachhall
- **Bass:** steckt im Rumpeln der Kick („Rumble“)
- **Sounds:** Rave-Stabs, kurze Vocal-Samples, oft Anleihen aus Trance, Hard Dance und 90er-Rave
- **Herkunft:** Wurzeln in den 1990ern (u. a. Schranz, Birmingham-Techno)
- **Schlüsselnamen:** I Hate Models, Sara Landry, Nico Moreno, 999999999
- **Verwechslungsgefahr:** Schranz (älterer Vorläufer, scheppernde Loops statt Rumble-Kick), Industrial Hardcore (noch düsterer, Hardcore-Kick), Hardstyle (ähnlich schnell, aber mit Reverse Bass und großen Melodien)
- **Erkennungstipp:** Eine schnelle, rumpelnde Kick mit Rave-Sounds, die nach heutigem Festival klingt → Hard Techno.
- **Tracks:** noch keine im Spiel – Kandidaten kommen in den Techno-Hörcheck

---

# Level 3

## Happy Hardcore *(Level 3, verschoben aus Level 2)*
- [x] fachlich geprüft

- **Kurzprofil:** fröhlich, quietschig, euphorisch
- **Rhythmus:** ca. 160–180 BPM; harte Kick, aber weniger verzerrt als im Gabber
- **Bass:** kurz, hüpfend, oft im Offbeat
- **Sounds:** hochgepitchte Vocals („Chipmunk“-Stimmen), Piano-Riffs, euphorische Melodien
- **Herkunft:** Mitte der 1990er in UK und den Niederlanden, als fröhlicher Gegenpol zum düsteren Hardcore
- **Schlüsselnamen:** Paul Elstak, Charly Lownoise & Mental Theo, Dune, Hixxy, Sharkey
- **Verwechslungsgefahr:** Gabberpop (auch fröhlich, aber mit Gabber-Kick und Pop-Gesang), Trancecore (auch melodisch, aber ernster und hymnischer)
- **Erkennungstipp:** Hohe Mickymaus-Stimmen und Piano über schnellen Beats → Happy Hardcore.

## Minimal Techno *(Level 3)*
- [x] fachlich geprüft

- **Kurzprofil:** reduziert, trocken, hypnotisch
- **Rhythmus:** ca. 120–130 BPM; trockene Kick, Klicks und kleine Percussion-Sounds
- **Bass:** knapp, oft nur ein kurzer Ton
- **Sounds:** sehr wenige Elemente, viel Leere; Veränderungen passieren winzig und langsam
- **Herkunft:** 1994 prägte Robert Hood mit „Minimal Nation“ den Stil (Detroit); in den 2000ern groß in Berlin
- **Schlüsselnamen:** Robert Hood, Richie Hawtin (Plastikman), Ricardo Villalobos · Labels: M-Plant, Minus
- **Verwechslungsgefahr:** Dub-Techno (auch reduziert, aber hallig), Tech House (auch groovig, aber voller und mit Vocals), Progressive Techno
- **Erkennungstipp:** Fast nichts passiert, nur Kick, Klicks und Pausen, aber es zieht dich trotzdem rein → Minimal Techno.

## Gabberpop *(Level 3)*
- [x] fachlich geprüft

- **Kurzprofil:** Gabber trifft Pop, augenzwinkernd
- **Rhythmus:** meist ca. 150–180 BPM; Gabber-Kick, aber sauberer
- **Bass:** in der Kick, weniger verzerrt
- **Sounds:** eingängige, fröhliche Melodien, Pop- oder Rap-Vocals, hochgepitchte Refrains, oft Humor
- **Herkunft:** Mitte der 1990er in den Niederlanden als Chart-Ableger des Gabber; 2024 wieder bekannt durch Joost mit „Europapa“ beim Eurovision Song Contest
- **Schlüsselnamen:** Party Animals, Hakkuhbar, Technohead, Joost, Gabber Piet
- **Verwechslungsgefahr:** Gabber (gleiche Wurzel, aber roher und ohne Pop), Happy Hardcore (auch fröhlich, aber mit Piano und Mickymaus-Stimmen)
- **Erkennungstipp:** Ein schneller, harter Beat, zu dem man trotzdem mitsingen kann → Gabberpop.

## Schranz *(Level 3)*
- [x] fachlich geprüft

- **Kurzprofil:** brachial, scheppernd, maschinell
- **Rhythmus:** ca. 145–160 BPM; stark komprimierte, gefilterte Percussion-Loops
- **Bass:** dumpf, steckt im Rumpeln der Kick
- **Sounds:** scheppernde, metallische Loops, kaum Melodie; klingt wie eine Maschine, die sich hochdreht
- **Herkunft:** Ende der 1990er in Deutschland
- **Schlüsselnamen:** Chris Liebing, Frank Kvitta, Sven Wittekind, Robert Natus, Arkus P.
- **Verwechslungsgefahr:** Progressive Techno (auch treibend und perkussiv, aber weniger hart), Acid Techno, Industrial Hardcore (auch metallisch, aber Hardcore-Kick)
- **Erkennungstipp:** Rumpelnde, scheppernde Loops ohne Melodie, die immer weiter drücken → Schranz.

---

# Level 4

## Frenchcore *(Level 4)*
- [x] fachlich geprüft

- **Kurzprofil:** rasend schnell, dramatisch, tanzbar
- **Rhythmus:** ca. 190–220 BPM
- **Bass:** nach jeder Kick eine verzerrte, „rollende“ Bassline im Offbeat
- **Sounds:** Geigen, Klassik-Samples, dramatische Melodien
- **Schlüsselnamen:** Dr. Peacock, Sefa, Billx, Angernoizer, The Sickest Squad
- **Verwechslungsgefahr:** Gabber (gleiche Härte, aber langsamer und ohne Offbeat-Bass), Speedcore (noch schneller, ohne Melodie)
- **Erkennungstipp:** Kick-Bass-Kick-Bass im Galopp, dazu Geigen → Frenchcore.

## Speedcore *(Level 4)*
- [x] fachlich geprüft

- **Kurzprofil:** extrem schnell, düster, lärmig
- **Rhythmus:** meist ab ca. 300 BPM, ältere Tracks schon ab ca. 240; die Kicks verschwimmen fast zu einem Brummen
- **Bass:** in der Kick, kaum noch einzeln hörbar
- **Sounds:** Horror-Samples, Schreie, Noise, düstere Synths
- **Schlüsselnamen:** DJ Sharpnel, m1dy, Disciples of Annihilation, Noizefucker
- **Verwechslungsgefahr:** Frenchcore (auch sehr schnell, aber melodisch), Breakcore (auch extrem, aber mit Breakbeats statt gerader Kick), Industrial Hardcore
- **Erkennungstipp:** So schnell, dass du die einzelnen Kicks nicht mehr zählen kannst → Speedcore.

## Ghetto Tech *(Level 4)*
- [x] fachlich geprüft

- **Kurzprofil:** schnell, frech, partytauglich
- **Rhythmus:** ca. 145–170 BPM; 808- und 909-Drumcomputer-Beats mit Einflüssen aus Miami Bass und Ghetto House
- **Bass:** wummernder 808-Bass
- **Sounds:** kurze, ständig wiederholte und oft anzügliche Vocal-Loops
- **Herkunft:** 1990er in Detroit
- **Schlüsselnamen:** DJ Assault, DJ Godfather, DJ Funk (Chicago)
- **Verwechslungsgefahr:** Tech House (auch Vocal-Schnipsel, aber langsamer und lockerer), Detroit Techno (gleiche Stadt, aber ernst und melodisch)
- **Erkennungstipp:** Ein schneller 808-Beat mit einer frechen Vocal-Zeile, die immer wieder kommt → Ghetto Tech.

---

# Level 5

## Progressive Techno *(Level 5)*
- [x] fachlich geprüft – neu gefasst 17.11.2026 (90er und heutiger Sound zusammen)

- **Kurzprofil:** lang, treibend, steigert sich Schicht für Schicht
- **Rhythmus:** ca. 125–135 BPM, gleichmäßig und hypnotisch
- **Bass:** rollend, treibend
- **Sounds:** Spuren kommen nach und nach dazu oder verändern sich langsam, kein Drop. Früher eher perkussiv, heute oft mit trance- oder psy-artigen Synths
- **Herkunft:** Peaktime-Techno der späten 1990er; heute moderner Sound mit Psytrance-Einfluss
- **Schlüsselnamen:** Monika Kruse, Ben Sims (90er) · Konfusia, Lampe (heute)
- **Verwechslungsgefahr:** Minimal Techno (auch langsam veränderlich, aber leerer), Schranz (auch treibend, aber brachialer), Detroit Techno
- **Erkennungstipp:** Der Track fängt schlicht an und es kommt immer mehr dazu, ohne Drop → Progressive Techno.
- **Quellen:** Beatport führt Progressive Techno als eigenes Techno-Subgenre ([iMusician](https://imusician.pro/en/resources/blog/beatport-genres)); Konfusia als Mix aus Minimal, Progressive und Psytrance ([ADE](https://www.amsterdam-dance-event.nl/en/artists-speakers/konfusia/2700467)).

## Industrial Hardcore *(Level 5)*
- [x] fachlich geprüft

- **Kurzprofil:** düster, metallisch, experimentell
- **Rhythmus:** oft langsamer als Gabber, ca. 130–180 BPM; stark verzerrte Kick
- **Bass:** verzerrt, rau
- **Sounds:** metallische Maschinengeräusche, Noise, kaum Melodie
- **Herkunft:** Wurzeln Anfang der 1990er (Mescalinum United „We Have Arrived“, Marc Acardipane, Frankfurt)
- **Schlüsselnamen:** Marc Acardipane (Mescalinum United), The Outside Agency, Ophidian, N-Vitral, Mad Dog
- **Verwechslungsgefahr:** Gabber (auch verzerrte Kick, aber schneller und mit Shouts), Schranz (auch metallisch, aber Techno-Tempo), Speedcore
- **Erkennungstipp:** Eine schwere, verzerrte Kick in einer Fabrikhalle voller Maschinenlärm → Industrial Hardcore.

## Breakcore *(Level 5)*
- [x] fachlich geprüft

- **Kurzprofil:** chaotisch, zerhackt, wild
- **Rhythmus:** oft 160–300 BPM; extrem schnell geschnittene Breakbeats (oft der Amen Break), kein gerader 4/4-Kick
- **Bass:** wechselt ständig, von Sub-Bass bis Noise
- **Sounds:** wilde Genre-Mixe von Klassik bis Metal, chaotische Edits
- **Herkunft:** Ende der 1990er und 2000er, international verstreut (Kanada, Niederlande, USA, Frankreich)
- **Schlüsselnamen:** Venetian Snares, Bong-Ra, Kid606, Igorrr, Machine Girl
- **Verwechslungsgefahr:** Speedcore (auch extrem, aber gerade Kick), aus dem DnB-Spiel: Jungle und Drumfunk (gleiche Breaks, aber kontrollierter)
- **Erkennungstipp:** Ein Gewitter aus zerhackten Snares ohne geraden Beat → Breakcore.

## Trancecore *(Level 5)*
- [x] fachlich geprüft

- **Kurzprofil:** hymnisch, schnell, euphorisch
- **Rhythmus:** ca. 170 BPM; harte Hardcore-Kick
- **Bass:** im Offbeat, treibend
- **Sounds:** Trance-Elemente: hymnische Synth-Leads, Arpeggios, lange Breakdowns
- **Herkunft:** späte 1990er in UK und Schottland
- **Schlüsselnamen:** Marc Smith, Scott Brown, Kevin Energy
- **Name:** „Trancecore“ heißt auch eine Metalcore-Spielart (z. B. Enter Shikari); im Spiel ist der Hardcore-Stil gemeint. Name bleibt (entschieden 16.11.2026).
- **Verwechslungsgefahr:** Hardstyle (auch hymnisch, aber langsamer mit Reverse Bass), Happy Hardcore (auch melodisch, aber fröhlicher und quietschiger)
- **Erkennungstipp:** Eine große Trance-Melodie über einer schnellen Hardcore-Kick → Trancecore.

---

## Mögliche Verwechslungspaare für Level 6

Aus den Steckbriefen abgeleitet, wird nach der Prüfung angepasst:

- Tech House ↔ Minimal Techno
- Dub-Techno ↔ Minimal Techno
- Detroit Techno ↔ Dub-Techno, Progressive Techno
- Acid Techno ↔ Schranz
- Schranz ↔ Progressive Techno, Industrial Hardcore, Hard Techno
- Hard Techno ↔ Industrial Hardcore, Hardstyle
- Gabber ↔ Gabberpop, Frenchcore, Industrial Hardcore
- Gabberpop ↔ Happy Hardcore
- Happy Hardcore ↔ Trancecore
- Hardstyle ↔ Trancecore
- Frenchcore ↔ Speedcore
- Speedcore ↔ Breakcore
- Ghetto Tech ↔ Tech House

---

# Schritt 2: Inhalte fürs Spiel (Entwurf, 16.11.2026)

Abgeleitet aus den geprüften Steckbriefen, nach dem Muster von Drum & Bass. Nur auf Deutsch zum Prüfen; die englischen Texte schreibt Claude beim Einbauen. Alles bitte prüfen und abhaken, erst danach kommt es ins Spiel.

**Wo das im Spiel auftaucht**
- **Hör-Merkmal:** Antwortknopf bei „Was hörst du hier?“ (ab Level 3). Muss kurz sein und sich von den anderen klar unterscheiden.
- **Hör-Tipp:** steht unter „Deine Fehler“, wenn man das Subgenre verwechselt hat.
- **Verwechselbar mit:** Partner für Level 6 (Meister, nur ähnlich klingende Paare).

## Hör-Merkmale, Hör-Tipps, Verwechslungspaare

| Subgenre | Hör-Merkmal | Hör-Tipp | Verwechselbar mit | ✓ |
|---|---|---|---|---|
| Tech House | Lockerer, swingender Groove mit Vocal-Schnipseln | Achte auf den Groove: swingende Hi-Hats, eine rollende Bassline und kurze Vocal-Schnipsel. Eher mitwippen als stampfen – das ist Tech House. | Minimal Techno, Ghetto Tech | ✅ |
| Acid Techno | Quietschende, blubbernde 303-Bassline | Achte auf den Bass: Er blubbert, quietscht und windet sich, weil der Filter ständig auf- und zugedreht wird. Das ist die 303 – Acid Techno. | Detroit Techno, Schranz | ✅ |
| Dub-Techno | Akkorde, die in Hall und Echo verschwimmen | Achte auf die Akkorde: Sie hallen wie durch Nebel immer wieder nach, darunter eine weiche Kick. Das ist Dub-Techno. | Minimal Techno, Detroit Techno | ✅ |
| Hardstyle | Pumpende Kick mit Nachklang und Festival-Melodie | Achte auf die Kick: Sie ist verzerrt und klingt tonal nach (Reverse Bass), dazu große Hymnen. Das ist Hardstyle. | Hard Techno, Trancecore, Gabber | ✅ |
| Detroit Techno | Warme Synth-Flächen und Strings über Drumcomputer-Beats | Achte auf die Flächen: Strings oder Synths über einem funkigen Drumcomputer-Beat, der nach „Retro-Zukunft“ klingt. Das ist Detroit Techno. | Dub-Techno, Progressive Techno, Acid Techno | ✅ |
| Gabber | Schnelle, kaputt verzerrte Kick mit Shouts | Achte auf die Kick: schnell, extrem übersteuert, sie dominiert alles – dazu Shouts, kaum Melodie. Das ist Gabber. | Gabberpop, Frenchcore, Industrial Hardcore, Hardstyle | ✅ |
| Hard Techno | Schnelle, rumpelnde Kick mit Rave-Sounds | Achte auf die Kick: schnell und rumpelnd, mit Nachhall, dazu Rave-Stabs. Klingt nach heutigem Festival – das ist Hard Techno. | Schranz, Industrial Hardcore, Hardstyle | ✅ |
| Minimal Techno | Trockene Kick, Klicks und viel Leere | Achte auf das, was fehlt: nur Kick, Klicks und Pausen, alles ändert sich ganz langsam. Das ist Minimal Techno. | Dub-Techno, Tech House, Progressive Techno | ✅ |
| Gabberpop | Harter Beat mit Pop-Melodie zum Mitsingen | Achte auf die Melodie: Über einer Gabber-Kick liegt ein eingängiger Refrain zum Mitsingen. Das ist Gabberpop. | Gabber, Happy Hardcore | ✅ |
| Schranz | Scheppernde, rumpelnde Loops ohne Melodie | Achte auf die Percussion: scheppernde, stark komprimierte Loops, die immer weiter drücken, keine Melodie. Das ist Schranz. | Hard Techno, Progressive Techno, Acid Techno | ✅ |
| Happy Hardcore | Mickymaus-Stimmen und Piano über schnellen Beats | Achte auf die Stimmen: hochgepitcht wie Mickymaus, dazu Piano-Riffs und euphorische Melodien. Das ist Happy Hardcore. | Gabberpop, Trancecore | ✅ |
| Frenchcore | Kick und Offbeat-Bass im Galopp, oft mit Geigen | Achte auf den Rhythmus: Nach jeder Kick rollt ein verzerrter Bass im Offbeat – wie ein Galopp, oft mit Geigen. Das ist Frenchcore. | Gabber, Speedcore | ✅ |
| Speedcore | So schnell, dass die Kicks zu einem Brummen werden | Achte aufs Tempo: Du kannst die Kicks nicht mehr einzeln zählen, sie verschwimmen zu einem Brummen. Das ist Speedcore. | Frenchcore, Industrial Hardcore | ✅ |
| Ghetto Tech | Schneller 808-Beat mit frecher, wiederholter Vocal-Zeile | Achte auf die Stimme: Eine freche Vocal-Zeile kommt immer wieder, darunter ein schneller 808-Beat. Das ist Ghetto Tech. | Tech House, Detroit Techno | ✅ |
| Progressive Techno | Schlichter Start, dann kommt Schicht für Schicht mehr dazu, kein Drop | Achte auf den Verlauf: Der Track treibt gleichmäßig, und immer neue Spuren kommen dazu, ohne dass es einen Drop gibt. Das ist Progressive Techno. | Minimal Techno, Schranz, Detroit Techno | ✅ |
| Industrial Hardcore | Verzerrte Kick und Maschinenlärm, kaum Melodie | Achte auf die Geräusche: metallische Maschinen und Noise um eine schwere, verzerrte Kick – wie in einer Fabrikhalle. Das ist Industrial Hardcore. | Gabber, Hard Techno, Speedcore | ✅ |
| Breakcore | Gewitter aus zerhackten Breakbeats ohne geraden Beat | Achte auf die Drums: Es gibt keinen geraden Kick, sondern ein Gewitter aus zerhackten Snares. Das ist Breakcore. | Speedcore | ✅ |
| Trancecore | Große Trance-Melodie über schneller Hardcore-Kick | Achte auf die Melodie: hymnische Trance-Leads und Arpeggios, aber darunter eine schnelle, harte Hardcore-Kick. Das ist Trancecore. | Hardstyle, Happy Hardcore | ✅ |

## Wissensfragen (15 Entwürfe)

Wie bei DnB: 2 Antworten, die erste ist richtig (im Spiel gemischt), nur Fragen zum Sound (keine Künstler- oder Song-Fragen, entschieden 16.11.2026). Sie kommen ab Level 4; Fragen zu Subgenres, die erst in Level 5 dazukommen, auch erst ab Level 5.

1. [x] **Was ist typisch für Acid Techno?**
   ✓ Eine quietschende, blubbernde 303-Bassline · ✗ Akkorde, die in Hall und Echo verschwimmen
   *Erklärung:* Acid Techno lebt von der Roland TB-303: Ihr Filter wird ständig auf- und zugedreht, dadurch blubbert und kreischt die Bassline. Hall und Echo sind typisch für Dub-Techno.
2. [x] **In welchem Subgenre verschwimmen kurze Akkorde in Hall und Echo?**
   ✓ Dub-Techno · ✗ Minimal Techno
   *Erklärung:* Dub-Techno übertrug die Studio-Technik des Dub-Reggae auf Techno, bekannt durch Basic Channel aus Berlin. Minimal ist auch reduziert, klingt aber trocken statt hallig.
3. [x] **Welches Subgenre gilt als Brücke zwischen House und Techno?**
   ✓ Tech House · ✗ Minimal Techno
   *Erklärung:* Tech House verbindet swingende House-Grooves mit Techno-Sounds, rollenden Basslines und Vocal-Schnipseln. Minimal ist viel leerer und kommt ohne Vocals aus.
4. [x] **Was ist das Erkennungsmerkmal von Hardstyle?**
   ✓ Eine verzerrte Kick mit tonalem Nachklang (Reverse Bass) · ✗ Nach jeder Kick ein rollender Bass im Offbeat
   *Erklärung:* Bei Hardstyle ist die Kick selbst der Bass: verzerrt und mit einem gezogenen Nachklang, der fast eine Melodie spielt. Der rollende Offbeat-Bass ist typisch für Frenchcore.
5. [x] **Was ist typisch für Gabber?**
   ✓ Eine extrem verzerrte, übersteuerte Kick und Shouts · ✗ Hochgepitchte Mickymaus-Stimmen und Piano
   *Erklärung:* Gabber aus Rotterdam ist roh und aggressiv: fast nur eine kaputt verzerrte Kick, dazu Shouts und schrille Hoover-Synths. Mickymaus-Stimmen und Piano gehören zu Happy Hardcore.
6. [x] **In welchem Subgenre passiert fast nichts – trockene Kick, Klicks und viel Leere?**
   ✓ Minimal Techno · ✗ Tech House
   *Erklärung:* Minimal Techno ist auf wenige Elemente reduziert, die sich nur ganz langsam verändern. Tech House ist voller und groovt mit Vocal-Schnipseln.
7. [x] **Was unterscheidet Gabberpop von Gabber?**
   ✓ Eingängige Pop-Melodien zum Mitsingen · ✗ Eine noch stärker verzerrte Kick
   *Erklärung:* Gabberpop nimmt die Gabber-Kick, macht sie sauberer und legt fröhliche Melodien und Pop- oder Rap-Vocals darüber. Roher und verzerrter ist der klassische Gabber.
8. [x] **Was ist typisch für Schranz?**
   ✓ Scheppernde, stark komprimierte Percussion-Loops · ✗ Euphorische Trance-Melodien
   *Erklärung:* Schranz ist deutscher Hardtechno: brachial, kaum melodisch, wie eine Maschine, die sich hochdreht. Trance-Melodien über harter Kick sind typisch für Trancecore.
9. [x] **In welchem Subgenre hört man hochgepitchte Mickymaus-Stimmen und Piano-Riffs?**
   ✓ Happy Hardcore · ✗ Gabber
   *Erklärung:* Happy Hardcore entstand Mitte der 1990er als fröhlicher Gegenpol zum düsteren Hardcore. Gabber ist roh und fast ohne Melodie.
10. [x] **Was ist typisch für Frenchcore?**
    ✓ Nach jeder Kick ein rollender Bass im Offbeat, oft mit Geigen · ✗ Eine gedämpfte Kick mit viel Hall
    *Erklärung:* Frenchcore ist sehr schneller Hardcore um 190–220 BPM: Kick und Offbeat-Bass wechseln sich ab wie ein Galopp, dazu Klassik-Samples. Gedämpfte Kick und Hall gehören zu Dub-Techno.
11. [x] **Woran erkennst du Speedcore?**
    ✓ Die Kicks verschwimmen fast zu einem Brummen · ✗ Ein lockerer, swingender Groove
    *Erklärung:* Speedcore liegt meist ab etwa 300 BPM, so schnell, dass man die Kicks nicht mehr einzeln hört. Ein lockerer, swingender Groove ist typisch für Tech House. *(geändert 17.11.2026, Breakcore ist raus)*
12. [x] **Was ist typisch für Ghetto Tech?**
    ✓ Schnelle 808-Beats mit frechen, wiederholten Vocal-Loops · ✗ Lange Synth-Flächen und Strings
    *Erklärung:* Ghetto Tech ist ein Detroiter Clubsound der 1990er, z. B. von DJ Assault und DJ Godfather. Flächen und Strings sind typisch für Detroit Techno.
13. [x] **Was ist typisch für Progressive Techno?** *(ab Level 5)*
    ✓ Lange Tracks, die sich Schicht für Schicht steigern, ohne Drop · ✗ Kurze, frech wiederholte Vocal-Loops
    *Erklärung:* Progressive Techno treibt gleichmäßig und baut sich langsam auf, indem immer neue Spuren dazukommen. Freche Vocal-Loops gehören zu Ghetto Tech.
14. [x] **Was ist typisch für Industrial Hardcore?** *(ab Level 5)*
    ✓ Metallische Maschinengeräusche und Noise, kaum Melodie · ✗ Fröhliche Piano-Riffs
    *Erklärung:* Industrial Hardcore ist düster und experimentell, oft langsamer als Gabber, mit schwerer verzerrter Kick. Piano-Riffs gehören zu Happy Hardcore.
15. [x] **In welchem Subgenre treffen Trance-Melodien auf eine schnelle Hardcore-Kick?** *(ab Level 5)*
    ✓ Trancecore · ✗ Hardstyle
    *Erklärung:* Trancecore kommt aus UK und Schottland der späten 1990er, mit hymnischen Leads im Hardcore-Tempo um 170 BPM. Hardstyle ist langsamer (um 150 BPM) und hat den typischen Reverse Bass.

**Im Spiel seit 17.11.2026** (Branch `techno-levels`). Breakcore und Cybergrind sind raus, ihre Steckbriefe bleiben hier nur zur Erinnerung.
