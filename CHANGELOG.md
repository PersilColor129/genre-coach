# Changelog Genre Coach

Was wann passiert ist – nach Tagen, neueste oben. Details zu Plänen und Entscheidungen stehen in [`plan.md`](plan.md), die einzelnen Änderungen in der Git-Historie (Commit-Kürzel in Klammern).

**Branches:** `main` = live (genre-coach.vercel.app) · `phase-3-6-levels-5-questions` = aktuelle Testversion (6 Level, Runden mit 5 Fragen) · `phase-3-levels-test` = vorherige Testversion mit Level-Auswahl (zum Vergleich) – beide als Vercel-Vorschau

---

## 17.11.2026 – Hörcheck Techno

**Gemacht**
- **Techno-Hörcheck ausgewertet** (126 Tracks): 51 raus, 56 neue Startzeiten, 10 passen. Hard Techno: 5 von 12 Kandidaten bleiben (Sara Landry „Riot“, „ADHD“, Nico Moreno „Techno Crari“, „This Is For My Haters“, 999999999 „Power to the Raver“). Speedcore noch offen (3 Tracks).
- Breakcore im Hörcheck ausgeblendet.
- **58 Ersatz-Kandidaten** gesucht (alle bei Apple Music mit Vorschau) und in den Hörcheck gestellt: Detroit 8 (gezielt mit Strings/Flächen statt Electro), Progressive 8, Schranz 7, Industrial 6, Happy Hardcore 5, Trancecore 5, Speedcore 5, Dub-Techno 4, Gabber 4, Hardstyle 3, Hard Techno 3.
- **Zweiter Hörcheck** (63 Kandidaten): 22 Tracks ins Spiel übernommen (Detroit 4, Schranz 4, Dub 3, Gabber 3, Speedcore 3, Hardstyle 2, Industrial 2, Happy Hardcore 1), Hard Techno jetzt 7 Tracks (warten auf den Level-Einbau), 28 raus, 6 noch offen. Progressive Techno: alle 8 Kandidaten raus (klangen nach Tech House, House oder Acid).
- **Progressive Techno bleibt** (Philipp). 12 neue Kandidaten in Richtung des heutigen Progressive-Sounds, nach Philipps Beispielen: Konfusia (5), Karla Blum (3), Anna Reusch (3), Stil & Bense (1).
- **Dritter Hörcheck:** 5 Tracks ins Spiel (Schranz 2, Speedcore 2, Industrial 1), Hard Techno jetzt 8, 11 raus. Progressive: nur Konfusia „Pressure“ und Karla Blum „Enter Ecstasy“ bleiben. Karla Blum wird überwiegend als Peak-Time/Driving bzw. Acid Techno beschrieben, nicht als Progressive.
- 11 weitere Progressive-Kandidaten aus dem Umfeld von Konfusia (Konfusia, Lampe, TiM TASTE, Hi-Boo, Justus Reim).
- **Vierter Hörcheck** (111 Tracks): Progressive jetzt 7 Tracks – die alten 2 (Monika Kruse, Ben Sims) plus Konfusia „Pressure“, „No Reason“, „Darkness“ und Lampe „Crystal Cave“, „Change It“. Alle anderen Konfusia-Tracks und Features raus (nicht zu viel von einer Künstlerin), Karla Blum raus. Speedcore entschieden: alle 8 bleiben. Hard Techno bleibt bei 7. Startzeiten bestätigt.
- **13 neue Kandidaten** für die dünnen Subgenres: Happy Hardcore 7 (u. a. Charly Lownoise & Mental Theo „Stars“, Dune „Are You Ready to Fly“, Force & Styles „Pretty Green Eyes“), Trancecore 6 (u. a. Scott Brown „Elysium“, Kevin Energy, Dougal & Gammer „The 6th Gate“).
- Progressive Techno recherchiert: Eine feste Definition gibt es nicht. Beatport führt es als eigenes Techno-Subgenre, Konfusia wird als Mischung aus Minimal, Progressive und Psytrance beschrieben. Entwurf für einen gemeinsamen Steckbrief (90er + heute) liegt vor.
- **Progressive-Steckbrief neu gefasst** (Philipp: „eintragen“): 90er und heutiger Sound zusammen – Schicht für Schicht steigern, kein Drop. Hör-Merkmal, Tipp, Wissensfrage 13 und die Spielbeschreibung (DE/EN) angepasst.
- **Fünfter Hörcheck:** Happy Hardcore jetzt 10 Tracks, Trancecore 6, Hard Techno 7. Alle Subgenres haben mindestens 5 Tracks.
- **Level-Modus für Techno eingebaut** (wie DnB): 6 Level, Cybergrind und Breakcore raus, Hard Techno neu → 17 Subgenres, 112 Tracks. Alle Subgenres haben Hör-Merkmal, Hör-Tipp und Verwechslungspaare (DE/EN), dazu 15 Wissensfragen (ab Level 4, drei davon ab Level 5). Speedcore-Frage: falsche Antwort ohne Breakcore neu formuliert. Die Datentests prüfen jetzt DnB und Techno.
- **Techno-Level live** seit 17.11.2026 (PR #3).
- **`favicon.ico`** aus dem Rave-Smiley ergänzt: Bisher gab es nur `favicon.svg`, deshalb zeigte das Vercel-Dashboard noch das alte Herz.
- Hörcheck: Auswahl **„Nur dieses Subgenre“**, um die Tracks eines Subgenres direkt zu vergleichen.
- Hörcheck: In der Zeitleiste kann man jetzt **spulen** – Marker mit der Maus/dem Finger ziehen oder Zeitleiste anklicken (startet die ganze Vorschau an der Stelle), mit Tastatur per Pfeiltasten.

**Entschieden**
- **Breakcore fliegt aus dem Techno-Spiel** (wird mit dem Level-Modus umgesetzt). Dann 17 Subgenres, Level 5 bekommt nur 3 neue.

**Offen**
- Nächster Branch: Pfeile beim Namen tauschen, Streak raus (Entscheidung zur Bestenliste offen).

## 16.11.2026 – Level-Plan für Techno

**Gemacht**
- Steckbriefe für alle 18 Techno-Subgenres geschrieben (`docs/fragenkatalog-techno.md`, Branch `techno-levels`), von Philipp geprüft; unsichere Details im Netz nachgeprüft (u. a. Tempo bei Tech House, Speedcore, Hard Techno) oder gestrichen.
- Entwurf für die Spielinhalte geschrieben: Hör-Merkmal, Hör-Tipp und Verwechslungspaare für alle 18 Subgenres, dazu 15 Wissensfragen (im Fragenkatalog, noch nicht im Spiel).
- Drum & Bass: die beiden Künstlerfragen (Pendulum, LTJ Bukem) aus dem Spiel entfernt, jetzt 13 Wissensfragen.
- Entwurf der Spielinhalte von Philipp geprüft und freigegeben.
- **Hörcheck für alle Spiele:** `/hoercheck/techno` und `/hoercheck/psytrance` (ohne Zusatz weiter DnB), mit Umschalter zwischen den Spielen. Cybergrind wird dort schon ausgeblendet.
- 12 Hard-Techno-Kandidaten gesucht (Sara Landry, I Hate Models, Nico Moreno, 999999999; alle bei Apple Music mit Vorschau) und in den Hörcheck gestellt.
- Nachgetragen: **Phase 3 ist seit 10.11.2026 live** (PR #2, Merge `e0a04d8`).

**Entschieden**
- **Cybergrind fliegt aus dem Techno-Spiel** (eher Metal als Club). Wird erst zusammen mit dem Level-Modus umgesetzt.
- Alle Spiele bekommen gleich viele Level: **6**, Level 6 = Meister (nur ähnliche Paare). Bei Techno kommen pro Level **3 neue Subgenres** dazu (bei DnB 2), in Level 5 vier.
- **Keine Künstler- oder Song-Fragen mehr** – in keinem Spiel. Wissensfragen nur noch zum Sound (gilt ab jetzt auch für DnB).
- Name **Trancecore bleibt**, obwohl es auch eine Metalcore-Spielart so heißt.
- Level-Aufteilung Techno: 1 = Tech House, Acid, Dub-Techno, Hardstyle · 2 = + Detroit, Gabber, Hard Techno · 3 = + Minimal, Gabberpop, Schranz, Happy Hardcore · 4 = + Frenchcore, Speedcore, Ghetto Tech · 5 = + Progressive, Industrial Hardcore, Breakcore, Trancecore.
- **Hard Techno kommt neu dazu** (braucht noch Tracks). Progressive Techno bleibt. **Nicht aufgenommen:** Peak Time und Raw / Deep / Hypnotic – das sind Beatport-Kategorien, die sich im Spiel nicht sauber heraushören lassen.

**Offen**
- Techno-Hörcheck machen (Philipp): alle 126 Techno-Tracks inkl. 12 Hard-Techno-Kandidaten.
- Danach Level einbauen (inkl. Cybergrind raus, Hard Techno rein, englische Texte).

## 10.11.2026 – Inhalte freigegeben

**Gemacht**
- Halftime ohne Schlagzahlen neu formuliert („Die Snare kommt nur halb so oft“) – in Beschreibung, Hör-Merkmal, Hör-Tipp, Wissensfrage und Steckbrief. Grund: „auf der 3“ ist je nach Zählweise missverständlich; Quelle Wikipedia „Half-time (music)“.
- Alle 12 Steckbriefe, Hör-Merkmale, Hör-Tipps und die 15 Wissensfragen **geprüft und freigegeben**; das TEST-Etikett ist von den Wissensfragen entfernt.

**Offen**
- Entscheiden, welche Version live geht (Empfehlung: `phase-3-6-levels-5-questions` per Pull Request in `main`).
- Klären, ob die DnB-Bestenliste vor dem Live-Gang geleert wird.

## 31.10.2026 – Hörcheck ausgewertet, neues Spielprinzip entschieden

**Gemacht**
- **Umbau auf das neue Spielprinzip** (Branch `phase-3-6-levels-5-questions`, abgezweigt von `phase-3-levels-test`): Runden mit 5 Fragen, Schwierigkeit passt sich nach jeder Runde an, 3 Fehler insgesamt beenden das Spiel, Punkte und Bestenliste wie im Endlos-Modus. Level-Auswahl und Finale entfernt. „LEVEL n“ in der Kopfzeile, blinkt beim Aufstieg. Rundenauswertung mit ✓/✗ pro Frage. Nur Drum & Bass; Techno und Psytrance unverändert.
- Neuer Fragetyp **„Was hörst du hier?“** (Clip + zwei Hör-Merkmale); Hör-Merkmal und Hör-Tipp für alle 12 DnB-Subgenres.
- **6 Level statt 3**, jedes mit einer Neuerung (neue Subgenres, „Welcher Clip ist …?“, „Was hörst du hier?“, Wissensfragen); Level 6 „Meister“ nur mit ähnlich klingenden Paaren und knapperem Speed-Bonus (6 s). Verwechslungs-Paare je Subgenre aus den Steckbriefen übernommen.
- Nach Test: Hör-Tipp **nicht** mehr nach jeder Antwort, sondern in **„Deine Fehler“** – die gibt es jetzt auch in jeder Rundenauswertung (nur die Fehler dieser Runde).
- Wissensfragen auf **2 Antworten** umgestellt und auf Sound/Künstler beschränkt: 15 statt 17 (Label- und Amen-Break-Frage raus, Techstep vs. Neurofunk als Sound-Frage).
- Hörcheck-Seite `/hoercheck` gebaut (nur in Vorschauen, nie live): spielt exakt den Clip wie im Spiel, pro Track „Passt / ab Sekunde X / Raus“ + Notiz, Ergebnis zum Kopieren (`d7a9a76`).
- Tracks können eine eigene Startzeit für ihren Clip bekommen; das Spiel nutzt sie (`d7a9a76`).
- Hörcheck von allen 106 DnB-Tracks ausgewertet: 47 Tracks raus (inkl. Grenzfall Origin Unknown „Truly One“), 49 Startzeiten gesetzt, bei Deep / Minimal „Watching You“ und „Tugboat“ neu dazu, Survival und dBridge wieder raus.

- 41 Ersatz-Kandidaten gesucht (alle bei Apple Music mit Vorschau) und in den Hörcheck gestellt: Neurofunk 7, Halftime 7, Jump Up 6, Ragga 6, Dancefloor 6, Drumfunk 9 (gezielt eindeutigere Tracks).
- Zweiter Hörcheck (41 Kandidaten): 23 ins Spiel übernommen, 18 raus. Jetzt mindestens 6 Tracks pro Subgenre außer Dancefloor (5) und Techstep (4).
- Dritte Kandidatenrunde (8 Dancefloor, 5 Techstep): Pendulum „Granite“, DJ Fresh „Gold Dust“ und Dom & Roland „Imagination“ übernommen. **Hörcheck abgeschlossen:** Dancefloor 7, Techstep 5 (bleibt vorerst so, Techstep kommt nur auf der höchsten Stufe), alle anderen 6–9.

**Entschieden**
- **Neues Spielprinzip im Stil von Googles Word Coach:** keine Level-Auswahl mehr, die Schwierigkeit passt sich unsichtbar an. Runden mit **5 Fragen**, Punkte zählen über alle Runden, **3 Fehler insgesamt** beenden das Spiel, der Punktestand geht in die Bestenliste.
- Das **Finale fällt weg**, ebenso die sichtbare Level-Auswahl.
- **Level-Anzeige** in der Kopfzeile wird doch ausprobiert („LEVEL 3“, blinkt beim Aufstieg).
- **Fragen:** überall 2 Antworten; Wissensfragen nur noch zu Sound und Künstlern; neuer Fragetyp „Was hörst du hier?“; Hör-Tipp nach jeder Antwort.
- Idee für später: tägliche Challenge.

**Offen**
- Neues Spielprinzip in der Vercel-Vorschau ausprobieren.

## 30.10.2026 – Faktencheck und Drumfunk

- Steckbriefe im Fragenkatalog mit thecatrave.com abgeglichen: bestätigte Fakten übernommen (Logical Progression ab 1996, Fabios „Liquid Funk“), unbestätigte gestrichen; keine *(prüfen)*-Stellen mehr (`6adefb6`).
- **Drumfunk** als 12. DnB-Subgenre (nur Level 3) mit 10 Tracks und einer Wissensfrage ergänzt (`6adefb6`).
- Interaktive Hör-Checkliste als Claude-Artifact mit Apple-Music-Links – später durch die Hörcheck-Seite ersetzt, weil sie nicht den echten Spiel-Clip abspielen konnte.

## 23.10.2026

- Favicon: pinkes Pixel-Herz durch den grünen Rave-Smiley ersetzt, erzeugt vom Icon-Skript (`eabf797`).

## 22.10.2026 – Phase 3: Planung und erste Testversion

**Planung** (`7a7646f`, `13f1d95`, `966d3f4`)
- Entscheidungen: 3 Level pro Genre, Level-Runden mit 10 Fragen ohne Leben, 70 % zum Freischalten, Bestenliste nur im Endlos-Modus, Genre-Mix als Idee für später.
- DnB-Recherche (SampleFocus-Guide, RYM, Forum zu Rollers): neue Subgenres Intelligent, Darkstep, Techstep; Deep → Deep / Minimal; Grenzfall-Tracks raus; Rollers, Autonomic, Microfunk nicht aufnehmen.
- Fragenkatalog `docs/fragenkatalog-dnb.md` mit Steckbriefen für alle DnB-Subgenres und Szene-Begriffen.
- Halftime-Beschreibung korrigiert („Snare nur auf der 3 statt auf 2 und 4“).

**Testversion** auf `phase-3-levels-test` (`6bf418b`, `d08c47f`, `202b33a`)
- Level-Auswahl nur für DnB, Level-Runden, Ergebnis mit 70-%-Marke, Fortschritt im Browser gespeichert.
- Endlos-Modus wird zum **Finale** nach Level 3; Zurück-Knopf zur Startseite.
- 11 DnB-Subgenres mit 28 neuen Tracks, 16 Wissensfragen (als TEST markiert).
- Test, der verhindert, dass ein Track in zwei Subgenres steht.

## 21.10.2026 – Phase 1 abgeschlossen, Phase 2 (PWA) live

**Phase 1 – Umbau** (`2383491`, `f5b58d3`, `5270bf5`, `2d05338`, `4b79991`)
- Genre Coach als React + Vite + TypeScript neu gebaut, Hosting auf Vercel, alte Netlify-Adressen leiten weiter, alte HTML-Dateien entfernt.

**Phase 2 – PWA** (`c086769`, `cd51ffe`, `6bcc5c2`, `d25728c`, `2617c07`, `eb2d2c4`, Merge `e4f0d80` = PR #1)
- App installierbar (Manifest, Service Worker mit automatischen Updates), Rave-Smiley als App-Icon, Icon-Skript `npm run icons`.
- Offline-Leiste „KEINE VERBINDUNG“.
- Installations-Hinweis gebaut und bewusst abgeschaltet.
- Auf iPhone und Android getestet, per Pull Request #1 live gegangen.

## 19.10.2026 – Start

- Git-Repository angelegt und mit GitHub verbunden (`495b2c7`).
- Vorschaubild für geteilte Links ergänzt (`12c70a9`).
