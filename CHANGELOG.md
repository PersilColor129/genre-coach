# Changelog Genre Coach

Was wann passiert ist – nach Tagen, neueste oben. Details zu Plänen und Entscheidungen stehen in [`plan.md`](plan.md), die einzelnen Änderungen in der Git-Historie (Commit-Kürzel in Klammern).

**Branches:** `main` = live (genre-coach.vercel.app) · `phase-3-levels-test` = aktuelle Testversion (Vercel-Vorschau)

---

## 31.10.2026 – Hörcheck ausgewertet, neues Spielprinzip entschieden

**Gemacht**
- Hörcheck-Seite `/hoercheck` gebaut (nur in Vorschauen, nie live): spielt exakt den Clip wie im Spiel, pro Track „Passt / ab Sekunde X / Raus“ + Notiz, Ergebnis zum Kopieren (`d7a9a76`).
- Tracks können eine eigene Startzeit für ihren Clip bekommen; das Spiel nutzt sie (`d7a9a76`).
- Hörcheck von allen 106 DnB-Tracks ausgewertet: 47 Tracks raus (inkl. Grenzfall Origin Unknown „Truly One“), 49 Startzeiten gesetzt, bei Deep / Minimal „Watching You“ und „Tugboat“ neu dazu, Survival und dBridge wieder raus.

**Entschieden**
- **Neues Spielprinzip im Stil von Googles Word Coach:** keine Level-Auswahl mehr, die Schwierigkeit passt sich unsichtbar an. Runden mit **5 Fragen**, Punkte zählen über alle Runden, **3 Fehler insgesamt** beenden das Spiel, der Punktestand geht in die Bestenliste.
- Das **Finale fällt weg**, ebenso die sichtbare Level-Auswahl.
- Vorerst **keine Stufen-Anzeige** („Stufe 2 von 3“, „Neu freigeschaltet“) – Idee für später.

**Offen**
- Ersatz-Tracks für die dünnen Subgenres (Neurofunk, Jump Up, Halftime, Drumfunk je 3; Ragga, Dancefloor je 4) suchen und im Hörcheck prüfen.
- Wissensfragen überarbeiten: weniger Antworten, mehr Fragen zum Sound.
- Spiel auf das neue Prinzip umbauen.

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
