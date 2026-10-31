# Genre Coach – Umbauplan

Stand: 21.10.2026 · Status: **Phase 2 abgeschlossen** (Branch `phase-2-pwa`, noch nicht in `main`) · nächster Schritt: Phase 2 live schalten, dann Plan für Phase 3

## Fortschritt Phase 1 ✅

- [x] 1 Projekt aufsetzen · [x] 1b CLAUDE.md · [x] 2 Daten · [x] 3 Design + Design-System · [x] 4 Startseite · [x] 5 Übersetzungen · [x] 6 Spiellogik + Tests · [x] 7 Audio · [x] 8 Spielbildschirm
- [x] 9 Bestenliste (Supabase-Regel angepasst, Test-Bestenliste funktioniert)
- [x] 10 Vergleich alt/neu (von Claude und dir getestet, `legacy/` gelöscht)
- [x] 11 Vercel – live unter https://genre-coach.vercel.app (Preview getestet, `VITE_LEADERBOARD_ENV=production` nur für Production)
- [x] 12 Netlify-Weiterleitung – alle vier alten Adressen leiten per 301 auf Vercel um (inkl. `?lang=`)

---

## Überblick: drei Phasen

Der Umbau ist in drei Phasen aufgeteilt, die nacheinander abgeschlossen werden. Jede Phase endet mit einer funktionierenden, deployten App.

| Phase | Ziel | Detailgrad in diesem Plan |
|---|---|---|
| **1. Technischer Umbau** | Gleiches Spiel, neue Basis: React + Vite, Deployment auf Vercel | ausführlich |
| **2. PWA** | App installierbar machen (Homescreen, Icon, schneller Start) | ausführlich |
| **3. Neue Spielstruktur** | Wissensfragen, Level, Punkte | Grobentwurf, eigener Plan folgt |

**Grundregel für Phase 1:** Erst 1:1 umziehen, dann verbessern. Nach Phase 1 soll sich das Spiel genauso anfühlen wie heute. Neue Features kommen erst danach, sonst weiß man bei Fehlern nicht, ob sie vom Umzug oder vom neuen Feature kommen.

---

## Ausgangslage (Ist-Zustand)

- 4 einzelne HTML-Dateien: `index.html` (Startseite) plus je eine Datei für DnB, Techno und Psytrance (jeweils 1.000–1.700 Zeilen).
- Die drei Spieldateien enthalten **fast identischen Code** (CSS, Spiellogik, Bestenliste, Übersetzungen). Nur die Genre-Daten und ein paar Einstellungen unterscheiden sich. Jede Änderung an der Spiellogik muss also dreimal gemacht werden.
- Audio: 30-Sekunden-Vorschauen von iTunes (Apple), direkt per URL abgespielt.
- Bestenliste: Supabase (Tabelle `highscores`, Spalte `game` = `dnb` / `techno` / `psytrance`).
- Sprachen: Deutsch und Englisch, gespeichert in `localStorage`.
- Hosting: aktuell Netlify (`bejewelled-sorbet-021429.netlify.app`).

---

## 1. Empfohlener Tech-Stack und warum

| Baustein | Wahl | Warum |
|---|---|---|
| Build-Tool | **Vite** | Schneller Dev-Server mit Live-Reload, Standard für neue React-Projekte, sehr einfache Konfiguration. |
| UI | **React 19** | Wie gewünscht. Ermöglicht wiederverwendbare Komponenten: Ein Spiel-Bildschirm für alle Genres statt dreier Kopien. |
| Sprache | **TypeScript** | Fehler (z. B. ein Tippfehler in einem Genre-Datensatz oder eine vergessene Übersetzung) werden schon beim Schreiben erkannt. Besonders hilfreich, wenn später viele Fragen und Level dazukommen. |
| Routing | **React Router** | Eigene URLs pro Genre (`/dnb`, `/techno`, `/psytrance`), damit Links wie heute teilbar bleiben. Später auch für Level-Auswahl. |
| Styling | **Normales CSS (CSS-Dateien pro Komponente)** | Das bestehende Retro-Design ist schon gutes, sauberes CSS mit Variablen. Es kann fast unverändert übernommen werden; ein Framework wie Tailwind würde nur Umschreibarbeit bedeuten. |
| Zustand (Spielstand) | **React-eigene Mittel** (`useReducer`, Context) | Das Spiel ist klein genug, eine extra Bibliothek (Redux, Zustand) ist nicht nötig. |
| Übersetzungen | **Eigene kleine Lösung** (ein Objekt pro Sprache + `useT()`-Hook) | Es gibt nur 2 Sprachen und wenige Texte; eine Bibliothek wie i18next wäre überdimensioniert. |
| Bestenliste | **Supabase bleibt** (über `@supabase/supabase-js` oder weiter per `fetch`) | Funktioniert bereits, die Daten bleiben erhalten. |
| Hosting | **Vercel** | Erkennt Vite automatisch, jeder Push auf GitHub wird automatisch deployt, Vorschau-Links für jede Änderung. |
| PWA | **vite-plugin-pwa** | Standard-Plugin für Vite: erzeugt Manifest und Service Worker fast automatisch. |
| Tests (leicht) | **Vitest** | Gehört zu Vite, um die Spiellogik (Punkte, Multiplikator, Leben) abzusichern, bevor Phase 3 sie umbaut. |

---

## 2. Dateistruktur (nach Phase 1 und 2)

```
genre-coach/
├── index.html                 # Einstiegspunkt für Vite (nur Grundgerüst + Meta-Tags)
├── package.json
├── vite.config.ts             # inkl. PWA-Plugin (Phase 2)
├── tsconfig.json
├── vercel.json                # Weiterleitung aller URLs auf die App (für React Router)
├── .env.example               # Vorlage für Supabase-URL und -Key
├── plan.md
├── CLAUDE.md              # Projekt-Spickzettel, den Claude in jeder Session liest
├── docs/
│   └── design-system.md   # Design-Regeln: wann welche Farbe, Buttons, Do's & Don'ts
├── public/
│   ├── og-image.png           # Vorschaubild beim Teilen
│   ├── favicon.svg
│   └── icons/                 # App-Icons für die PWA (Phase 2)
└── src/
    ├── main.tsx               # startet React
    ├── App.tsx                # Routen: Start, /dnb, /techno, /psytrance
    ├── styles/
    │   ├── tokens.css         # Design-Tokens: alle Farben, Abstände, Schriften, Schatten (einzige Quelle)
    │   └── global.css         # Grundlayout, Retro-Hintergrund (nutzt nur Tokens)
    ├── data/
    │   ├── types.ts           # Datentypen: Genre, Track, (später) Frage, Level
    │   ├── dnb.ts             # Subgenres, Beschreibungen, Tracks
    │   ├── techno.ts
    │   └── psytrance.ts
    ├── game/
    │   ├── gameReducer.ts     # Spielregeln: Punkte, Leben, Streak, Multiplikator
    │   ├── gameReducer.test.ts
    │   └── questions.ts       # wählt die nächste Frage aus
    ├── audio/
    │   └── useAudioPlayer.ts  # Abspielen/Stoppen der Vorschau-Clips
    ├── leaderboard/
    │   ├── supabase.ts        # Bestenliste laden/speichern
    │   └── Leaderboard.tsx
    ├── i18n/
    │   ├── de.ts
    │   ├── en.ts
    │   └── useT.ts            # Sprache wählen + Text holen
    ├── pages/
    │   ├── Home.tsx           # Genre-Auswahl (heutige index.html)
    │   └── Game.tsx           # EIN Spielbildschirm für alle drei Genres
    └── components/
        ├── Hud.tsx            # Punkte + Leben
        ├── StartScreen.tsx
        ├── QuestionView.tsx
        ├── AnswerFeedback.tsx # Erklärung nach der Antwort
        ├── GameOver.tsx       # Namenseingabe (Arcade-Stil)
        └── Results.tsx
```

Der wichtigste Gewinn: **Spiellogik und Inhalte sind getrennt.** Die Genre-Daten liegen in `src/data/`, die Logik existiert nur einmal. Phase 3 (Wissensfragen, Level) wird dadurch vor allem eine Frage von *neuen Daten* statt von neuem Code.

---

## 3. Externe Dienste

| Dienst | Wofür | Status | Was du tun musst |
|---|---|---|---|
| **GitHub** | Code-Ablage, Vercel deployt von dort | besteht schon (`PersilColor129/genre-coach`) | nichts |
| **Vercel** | Hosting + automatisches Deployment | neu | Kostenloses Konto (Hobby-Plan), mit GitHub verbinden, Projekt importieren |
| **Supabase** | Online-Bestenliste | besteht schon | Nur URL + Publishable Key als Umgebungsvariablen in Vercel eintragen |
| **iTunes-Vorschauen** | Audio-Clips | besteht schon | nichts |
| **Netlify** | altes Hosting | wird abgelöst | Nichts: Nach dem Umzug leitet die alte Adresse automatisch auf Vercel weiter (Schritt 12) |
| *Eigene Domain* | optional | **später** (nach Phase 3) | Domain kaufen (ca. 10 €/Jahr) und in Vercel verbinden |

Hinweise:
- Der Supabase-Key ist ein *Publishable Key*: Er darf im Browser sichtbar sein. Abgesichert wird über die Row-Level-Security-Regeln in Supabase. Diese prüfen wir beim Umzug kurz (z. B. dass niemand fremde Einträge löschen kann).
- Die iTunes-Clips werden **nicht** offline gespeichert (siehe Phase 2). Das Spiel braucht also weiterhin Internet.
- Bei einer neuen URL (Vercel statt Netlify) müssen die Open-Graph-Links (Vorschaubild beim Teilen) angepasst werden.

---

## 4. Schritt-für-Schritt-Plan

### Phase 1 – React + Vite + Vercel

1. **Projekt aufsetzen**
   Vite-React-TypeScript-Projekt im bestehenden Ordner anlegen, React Router installieren. Alte HTML-Dateien bleiben vorerst als Referenz liegen (in `legacy/` verschoben).
   ✔ *Fertig, wenn:* `npm run dev` eine leere App im Browser zeigt.

1b. **CLAUDE.md anlegen**
   Kurzer Projekt-Spickzettel (ca. 10–20 Zeilen), den Claude in jeder Session automatisch liest: was das Projekt ist, Tech-Stack, wo Daten/Logik liegen, Regeln (Test-Bestenliste, Deutsch im Chat / Englisch im Code, Design nur aus Tokens). Wird nach jeder Phase kurz aktualisiert.
   ✔ *Fertig, wenn:* Eine neue Claude-Session das Projekt ohne Erklärung richtig einordnet.

2. **Daten herausziehen**
   Die `GENRES`-Objekte und die Spiel-Einstellungen (Leben, Rundenzahl, Zusatzregeln) aus den drei HTML-Dateien in `src/data/*.ts` übertragen, mit Datentypen in `types.ts`.
   ✔ *Fertig, wenn:* Alle Subgenres und Tracks aller drei Spiele als Daten vorliegen und TypeScript keine Fehler meldet.

3. **Design übernehmen + Design-System anlegen**
   - Alle Farben, Abstände, Schriften und Schatten aus den alten Dateien als Variablen in `src/styles/tokens.css` sammeln (doppelte/fast gleiche Werte zusammenfassen).
   - Grundlayout und Retro-Look nach `global.css`, komponentenspezifisches CSS zu den Komponenten. Überall nur Tokens verwenden, keine frei erfundenen Werte.
   - `docs/design-system.md` schreiben: Pixel-Look, Genre-Farben und wann sie eingesetzt werden, Buttons/Karten, was wir vermeiden (z. B. weiche Verläufe, runde Ecken).
   - In CLAUDE.md auf beide Dateien verweisen.
   ✔ *Fertig, wenn:* Das Design aussieht wie vorher und keine Farbe mehr außerhalb von `tokens.css` fest eingetragen ist.
   *Abweichung:* Abstände (Paddings, Breiten) bleiben in den Komponenten. Sie sind pro Bildschirm fein abgestimmt; eine erzwungene Abstands-Skala hätte das Aussehen verändert. Begründung steht in `docs/design-system.md`.

4. **Startseite bauen** (`Home.tsx`)
   Nachbau der heutigen `index.html` mit den drei Genre-Karten, die auf `/dnb`, `/techno`, `/psytrance` verlinken.

5. **Übersetzungen** (`i18n/`)
   Alle DE/EN-Texte zusammenführen, Sprachwahl wie bisher in `localStorage` speichern.

6. **Spiellogik** (`gameReducer.ts`)
   Punkte, Leben, Streak, Multiplikator und Fragenauswahl als reine Logik ohne Darstellung. Dazu ein paar Tests mit Vitest.
   ✔ *Fertig, wenn:* Die Tests dieselben Regeln bestätigen wie im alten Spiel.

7. **Audio-Player** (`useAudioPlayer.ts`)
   Abspielen, Stoppen, nur ein Clip gleichzeitig, Aufräumen beim Seitenwechsel.

8. **Spielbildschirm** (`Game.tsx` + Komponenten)
   Start → Frage → Antwort/Erklärung → nächste Frage → Game Over → Ergebnis. Ein Bildschirm für alle drei Genres, gesteuert über die Daten.
   ✔ *Fertig, wenn:* Alle drei Genres komplett durchspielbar sind.

9. **Bestenliste** (`leaderboard/`)
   Supabase-Anbindung übernehmen, Zugangsdaten in `.env.local` statt im Code.
   ⚠️ **Supabase-Regel anpassen:** Die Tabelle `highscores` hat eine Prüfregel (`highscores_game_check`), die nur `dnb`, `techno`, `psy` erlaubt. Für die Test-Bestenliste müssen `dnb-test`, `techno-test`, `psy-test` dazukommen (einmalig im Supabase SQL-Editor).
   ⚠️ **Nicht vergessen: Test-Bestenliste getrennt halten.** Die Kennung für die Bestenliste (`game`) kommt aus einer Umgebungsvariable. Testversionen (Vercel-Previews und lokal) speichern unter `<genre>-test`, z. B. `techno-test`, damit Testpunkte nie in der echten Bestenliste landen.
   ✔ *Fertig, wenn:* Bestehende Highscores angezeigt werden, neue gespeichert werden und Testpunkte nur in der Test-Bestenliste auftauchen.

10. **Vergleich alt gegen neu**
    Jedes Genre im Browser durchspielen, Desktop und Handy-Breite, beide Sprachen. Abweichungen zur alten Version beheben. Danach `legacy/` löschen.

11. **Vercel einrichten**
    Das bestehende GitHub-Repository in Vercel importieren, Umgebungsvariablen eintragen, `vercel.json` für die Routen. Open-Graph-URLs auf die neue Adresse umstellen.
    ⚠️ **Nicht vergessen:** Die Umgebungsvariable für die Test-Bestenliste (Schritt 9) in Vercel getrennt setzen: *Production* = echte Bestenliste, *Preview* = Test-Bestenliste.
    ✔ *Fertig, wenn:* Die App unter der Vercel-URL läuft, jeder Push auf `main` automatisch deployt wird und ein Test-Branch eine eigene Preview-Adresse bekommt.

12. **Netlify auf Vercel weiterleiten**
    Wenn alles läuft: Ein letztes Deployment bei Netlify, das jeden Besucher auf die neue Vercel-Adresse weiterleitet. **Achtung: Es sind vier Netlify-Seiten**, die alle weitergeleitet werden müssen:
    - Startseite `bejewelled-sorbet-021429.netlify.app` → `/`
    - DnB `eclectic-yeot-5a7d9e.netlify.app` → `/dnb`
    - Techno `funny-kitsune-016651.netlify.app` → `/techno`
    - Psytrance `tourmaline-paletas-cd8834.netlify.app` → `/psytrance` Alte, geteilte Links funktionieren so weiter.
    ✔ *Fertig, wenn:* Die alte Netlify-Adresse automatisch auf der neuen Version landet.

### Phase 2 – Progressive Web App ✅

13. **vite-plugin-pwa einbauen**
    Manifest mit Name, Farben (`#0C0A18`) und Startseite. Service Worker cacht nur die App selbst (Code, Schrift, Bilder), **nicht** die Audio-Clips (Urheberrecht, außerdem wechseln die Apple-URLs gelegentlich).
    - **Automatische Updates:** Service Worker im Modus `autoUpdate`, damit nach einem Deploy niemand tagelang eine alte Version sieht.
    - **Farben:** Das Manifest kann keine CSS-Variablen lesen, deshalb stehen dort feste Werte. Sie werden aus `tokens.css` übernommen; dort kommt ein Kommentar hin, dass das Manifest bei Farbänderungen mit angepasst werden muss.
    ✅ Erledigt: Konfiguration in `vite.config.ts`, Apple-Touch-Icon in `index.html`. Google Fonts werden mitgecacht, Clips und Bestenliste nicht. Lokal mit dem gebauten Stand geprüft (`npm run build && npm run preview`): Service Worker aktiv, Manifest und Icons werden geladen.

14. **App-Icons erstellen**
    ~~Pixel-Herz-Logo~~ → **Rave-Smiley-Maske** (Acid-House-Smiley in `--color-lime` mit Maskenband) in den nötigen Größen (192, 512, maskable, Apple-Touch-Icon).
    ✅ Erstellt: `public/icons/` – erzeugt mit `npm run icons` (`scripts/generate-icons.mjs`, Farben kommen aus `tokens.css`). Im Manifest eingebunden (Schritt 13). Dasselbe Skript erzeugt auch das Browser-Tab-Icon `public/favicon.svg` (Smiley auf dunkler Kachel, ersetzt das alte Pink-Herz).

15. **Offline-Hinweis**
    Ohne Internet eine freundliche Meldung statt kaputter Clips anzeigen – auf Deutsch **und** Englisch (`de.tsx` + `en.tsx`).
    ✅ Umgesetzt: Leiste „KEINE VERBINDUNG“ oben auf jeder Seite (`src/components/OfflineNotice.tsx`), verschwindet von selbst, sobald das Netz zurück ist.

15b. **Installations-Hinweis im Spiel**
    Kurze Erklärung, wie man Genre Coach auf den Homescreen legt. iPhone: Anleitung „Teilen → Zum Home-Bildschirm“ (Safari hat keinen Installieren-Knopf). Android/Chrome: eigener „Installieren“-Knopf über das Browser-Ereignis `beforeinstallprompt`. Wird nicht angezeigt, wenn die App schon installiert ist; lässt sich dauerhaft wegklicken.
    - **Ablauf:** Karte erscheint nach der ersten fertigen Runde (Game Over) und später auf der Startseite. Nur auf Handys, nie wenn schon installiert. „×“ blendet sie für ein paar Tage aus, „Nicht mehr zeigen“ dauerhaft.
    - **Design:** Pixel-Karte in Orange (`--color-orange`), gleiche Karte auf Startseite und Game Over. „SO GEHT'S ▸“ öffnet auf dem iPhone eine Anleitung in 3 Schritten mit Pfeil auf die Safari-Leiste; auf Android heißt der Knopf „INSTALLIEREN ▸“ und öffnet direkt den Android-Dialog.
    - **Text (DE):** Überschrift „★ ALS APP SPIELEN“ · „Hol dir Genre Coach auf den Homescreen und starte die nächste Runde mit einem Tipp.“
    - **Text (EN):** „★ PLAY AS AN APP“ · „Add Genre Coach to your home screen and start your next round with one tap.“
    ✅ Umgesetzt: `src/components/InstallHint.tsx`, Logik in `src/pwa/` (mit Tests). Im Browser (Handy-Ansicht, Android und iPhone simuliert) geprüft.
    ⏸ **Abgeschaltet (Entscheidung 21.10.2026):** Der Hinweis wird vorerst auf keinem Gerät gezeigt. Android zeigt dann Chromes eigene Installieren-Leiste, auf dem iPhone geht es über Safaris Teilen-Menü. Der Code bleibt drin; wieder einschalten mit `INSTALL_HINT_ENABLED = true` in `src/pwa/installHint.ts`.

16. **Testen**
    Installation auf iPhone (Safari → „Zum Home-Bildschirm“) und Android (Chrome) prüfen, Lighthouse-PWA-Check.
    ✔ *Fertig, wenn:* Die App sich auf dem Handy installieren lässt und wie eine eigene App startet.
    - [x] Claude, lokal mit gebautem Stand: Manifest vollständig (Name, Farben, Icons 192/512/maskable, `start_url`, `standalone`), alle Icons laden, Service Worker aktiv, App öffnet sich bei gestopptem Server aus dem Cache (auch Unterseiten wie `/psytrance`), Offline-Leiste erscheint/verschwindet. (Lighthouse hat keinen eigenen PWA-Check mehr – deshalb von Hand.)
    - [x] Du, iPhone + Android: Installation und Vollbild-Start (nach Schritt 13 getestet)
    - [x] Du, auf dem Handy: Flugmodus an → installierte App öffnen → Leiste „KEINE VERBINDUNG“ erscheint; Flugmodus aus → Leiste verschwindet
    - [x] Du, auf dem Handy: Spiel einmal komplett durchspielen (Clips, Bestenliste) in der installierten App

### Phase 3 – Neue Spielstruktur (Grobentwurf)

Dafür schreiben wir nach Phase 2 einen **eigenen Plan**, wenn die Ideen konkreter sind. Erste Struktur zur Diskussion:

**Fragetypen** (werden in einer Runde gemischt)
- *Hörfrage* (wie heute): Clip hören → Subgenre wählen.
- *Wissensfrage*: z. B. „In welchem Subgenre steht die TB-303-Bassline im Mittelpunkt?“ oder „Wie klingt die Bassline typischerweise im Neurofunk?“ → Multiple Choice.
- *Kombi-Frage* (optional): Clip hören → „Was ist das typische Merkmal, das du hier hörst?“

**Level**
- Level pro Genre-Welt, die aufeinander aufbauen. Beispiel Techno:
  Level 1 = 3–4 sehr unterschiedliche Subgenres, nur Hörfragen →
  Level 2 = mehr Subgenres + erste Wissensfragen →
  Level 3 = ähnliche Subgenres (schwer zu unterscheiden) + Kombi-Fragen.
- Nächstes Level wird freigeschaltet bei z. B. 70 % richtigen Antworten. Fortschritt im Browser gespeichert (`localStorage`), kein Login nötig.

**Punkte**
- Bisheriges System (Multiplikator, Leben) bleibt.
- Bestenliste pro Genre wie heute; ob zusätzlich pro Level, entscheiden wir in Phase 3.

**Inhalte – der eigentliche Aufwand**
- Wissensfragen müssen geschrieben und fachlich geprüft werden. Vorschlag: Claude erstellt Entwürfe auf Basis der vorhandenen Subgenre-Beschreibungen, du prüfst und korrigierst sie.

**Entscheidungen für Phase 3** (getroffen 21./22.10.2026)
1. ~~Wie viele Level pro Genre?~~ → **3 Level** (Einstieg, Fortgeschritten, Profi). Beispiel DnB: Level 1 = Liquid, Jump Up, Halftime, Jungle (nur Hörfragen) · Level 2 = + Dancefloor, Neurofunk, Ragga, Darkstep (+ erste Wissensfragen) · Level 3 = + Deep / Minimal, Intelligent, Techstep (ähnliche Paare, alle Fragetypen). Genaue Aufteilung wird noch abgestimmt.
2. ~~Endlos-Modus?~~ → **Wird zum „Finale“ nach Level 3** (geändert 22.10.2026, vorher „von Anfang an offen“): ein durchgehender Weg Level 1 → 2 → 3 → Finale. Das Finale spielt sich wie der heutige Endlos-Modus (alle Subgenres, 3 Leben, Bestenliste) und öffnet sich erst, wenn Level 3 geschafft ist. Grund: Mit jeder neuen Version starten alle bei null, auf bisherige Spieler wird keine Rücksicht genommen. `leaderboardId`s bleiben unverändert.
3. ~~Genreübergreifende Level?~~ → **Nicht in Phase 3.** Idee für später: „Genre-Mix“ (DnB, Techno oder Psy?) – wenn, dann als Teil von **Level 1**.
4. ~~Bestenliste pro Level?~~ → **Nein.** Bestenliste nur für den Endlos-Modus (pro Genre wie heute). Level zeigen stattdessen den **persönlichen Rekord** (im Browser gespeichert, kein Login).
5. **Level-Runden:** feste **10 Fragen, keine Leben**. Ergebnis in Prozent; ab **70 %** wird das nächste Level freigeschaltet.

**✅ Neues Spielprinzip (entschieden 31.10.2026, ersetzt Punkte 1, 2, 4 und 5 oben – umgesetzt auf Branch `phase-3-wordcoach`)**
- Im Stil von Googles Word Coach: Tipp auf ein Genre startet sofort eine Runde, **keine Level-Auswahl**, **kein Finale**.
- **Runden mit 5 Fragen**; die **Schwierigkeit passt sich unsichtbar an** (erst leichte Subgenres, dann mehr und ähnlichere, dazu Wissensfragen; bei Fehlern wieder leichter).
- **Punkte addieren sich** über alle Runden; **3 Fehler insgesamt** beenden das Spiel; der Punktestand geht in die **Bestenliste** (pro Genre, `leaderboardId` unverändert).
- Vorerst **keine Stufen-Anzeige** („Stufe 2 von 3“, „Neu freigeschaltet: Techstep“) – Idee für später.
- Die bisherige Level-Aufteilung (L1/L2/L3) bleibt als interne Schwierigkeitsstufe erhalten.
- **Regeln für die Stufen:** nach jeder Runde: 4–5 richtig → eine Stufe hoch, 0–2 richtig → eine Stufe runter, 3 richtig → bleibt. Die Stufe wird pro Genre im Browser gemerkt (nächstes Spiel startet dort). Level 1: nur Hörfragen; ab Level 2 zusätzlich „Was hörst du hier?“ (ca. 25 %) und Wissensfragen (ca. 20 %).
- Nur Drum & Bass spielt so; Techno und Psytrance bleiben im klassischen Endlos-Modus.
- **Level-Anzeige** in der Kopfzeile (z. B. „LEVEL 3“, blinkt beim Aufstieg kurz auf) – ausprobieren (31.10.2026, ersetzt das „vorerst keine Stufen-Anzeige“ oben).
- **Fragen (31.10.2026):** überall **2 Antworten**; Wissensfragen nur zu **Sound und Künstlern** (keine Labels, keine Geschichte – Hospital-Records- und Amen-Break-Frage raus, Techstep vs. Neurofunk als reine Sound-Frage); neuer Fragetyp **„Was hörst du hier?“** (Clip + zwei Merkmale aus den Steckbriefen); nach jeder Antwort ein **Hör-Tipp** (Erkennungstipp aus dem Steckbrief).
- Idee für später: **tägliche Challenge** (jeden Tag eine neue Runde).

**Anzeige (Entwurf abgestimmt)**
- *Level-Auswahl* nach Tipp auf ein Genre: pro Level ein Pixel-Balken aus 10 Blöcken + bestes Ergebnis („Level 1 ✓ GESCHAFFT · 90 %“, „Level 2 · NOCH 10 %“, Level 3 mit Schloss), als 4. Schritt „FINALE“ (Bestenliste, gesperrt bis Level 3 geschafft).
- *Ergebnis nach einer Level-Runde:* große Prozentzahl, „8 von 10 richtig“, Balken (richtig in Genre-Farbe, falsch in Pink) mit Marke bei 70 %, ggf. „★ LEVEL X FREIGESCHALTET“ und Hinweis auf neuen persönlichen Rekord, danach „Deine Fehler“ wie heute.

#### Testversion Level (Branch `phase-3-levels-test`, Stand 22.10.2026)

Nur DnB. **Stand 22.10.2026: alle geplanten DnB-Änderungen eingebaut, noch vor Hörprüfung und Faktencheck** (nachträgliche Korrekturen sind reine Datenänderungen in `src/data/dnb.ts`):
- 12 Subgenres: + Intelligent / Atmospheric, Darkstep / Crossbreed, Techstep, Drumfunk (30.10., nur Level 3); Deep → Deep / Minimal (+ Survival „Exile“, dBridge „Wonder Where“ – vorläufige Auswahl aus 6 Kandidaten)
- Grenzfälle entfernt: Omni Trio „Renegade Snares“ (Jungle), „Marka“ (Halftime), Ed Rush & Optical (Neurofunk)
- Level 1 = Liquid, Jump Up, Halftime, Jungle · Level 2 = + Dancefloor, Neurofunk, Ragga, Darkstep · Level 3 = + Deep / Minimal, Intelligent, Techstep, Drumfunk · Finale = alle
- 17 Wissensfragen (alle als TEST markiert, 9 davon schon in Level 2; + Drumfunk), nur aus Fakten ohne *(prüfen)*-Vermerk
- Ein Test stellt sicher, dass kein Track in zwei Subgenres steht.

Feedback:
- [x] **Zurück zur Startseite** auch aus der Level-Auswahl.
- [x] **Level und Endlos-Modus zusammengelegt:** Zwei Spielmodi wirkten zu kompliziert. Entschieden: Endlos wird zum **Finale nach Level 3** (siehe Entscheidung 2). Verworfen: Finale sofort spielbar; Punkte pro Level mit Summen-Bestenliste.

#### Recherche DnB (Stand 21.10.2026, noch nicht umgesetzt)

Quellen: SampleFocus „Ultimate Guide to DnB Subgenres“ (März 2026), RYM-Liste Minimal Drum and Bass, Forum-Thread zu Rollers. Techno und Psytrance: kein neuer Input, DnB zuerst.

**Geplante Änderungen an den DnB-Subgenres** (heute 8: Jungle, Ragga, Liquid, Dancefloor, Neurofunk, Jump Up, Deep, Halftime)
- ➕ **Intelligent / Atmospheric** – luftige Pads, Jazz-Akkorde, schlurfende Breaks (LTJ Bukem, Photek, Omni Trio)
- ➕ **Darkstep / Crossbreed** – extrem hart, Horror-Samples, misshandelte Amen-Breaks (Technical Itch, Limewax, Evol Intent)
- ➕ **Techstep** – nur im schweren Level 3, bewusst als Paar mit Neurofunk (Ed Rush & Optical, Dom & Roland)
- ✏️ **Deep → „Deep / Minimal“** umbenennen und auf ca. 10 Tracks aufstocken. Kandidaten: Current Value, Forest Drive West, Overlook, ASC, Pessimist, Survival, Instra:mental, dBridge
- ➖ **Grenzfälle raus** (Track darf nie für zwei Subgenres richtig sein): Omni Trio „Renegade Snares“ (Jungle vs. Intelligent), Dub Phizix & Skeptical „Marka“ (Halftime vs. Minimal)
- ✖️ **Nicht aufnehmen:** Rollers (Spielart, kein Subgenre), Autonomic und Microfunk (zu nischig), Randfälle wie Djrum, Donato Dozzy, Camo & Krooked

- ➖ **Ed Rush & Optical aus Neurofunk raus** (entschieden 22.10.2026): „Pacman (Ram Trilogy Remix)“ und „Watermelon“ gelten als Wegbereiter von Techstep *und* Neurofunk → Grenzfall. Neurofunk hat danach 7 Tracks.

**Merkliste**
- [ ] 30-Sekunden-Vorschau jedes neuen Tracks selbst anhören (Hör-Checkliste unten): Bei Liquid und Dancefloor muss Melodie/Hook drin sein, bei Jump Up und Neurofunk der Drop.
- [ ] Bestehende Tracks auf weitere Grenzfälle prüfen.
- [ ] Steckbriefe im **Fragenkatalog** fachlich prüfen: [`docs/fragenkatalog-dnb.md`](docs/fragenkatalog-dnb.md). Danach leitet Claude die Fragen ab.
- [x] Halftime-Beschreibung korrigiert: „Snare nur auf der 3 statt auf 2 und 4“ (22.10.2026).

**Hörcheck-Seite (ab 30.10.2026, ersetzt das Abhaken unten):** In jeder Vorschau-Version unter `/hoercheck` (nie live). Spielt genau den Clip wie im Spiel (12 s, standardmäßig ab Sekunde 8 der Apple-Vorschau), pro Track ✓ Passt / ⏩ Ab Sekunde X / ✗ Raus + Notiz, Ergebnis kopieren und an Claude schicken. Startzeiten landen als `start` am Track in `src/data/dnb.ts`.

**Hör-Checkliste neue DnB-Tracks** (alle bei Apple Music DE mit Vorschau verfügbar, geprüft 22.10.2026; Link öffnet die Vorschau)

*Intelligent / Atmospheric*
- [ ] [LTJ Bukem – Music](https://music.apple.com/de/song/595853840)
- [ ] [LTJ Bukem – Atlantis (I Need You)](https://music.apple.com/de/song/595853844)
- [ ] [LTJ Bukem – Journey Inwards](https://music.apple.com/de/song/595779877)
- [ ] [Blame – Music Takes You](https://music.apple.com/de/song/255525309)
- [ ] [P.F.M. – One & Only (2002 Rework)](https://music.apple.com/de/song/595861917)
- [ ] [Hidden Agenda – The Flute Tune](https://music.apple.com/de/song/6807839742)
- [ ] [Seba & Lo Tek – Sonic Winds](https://music.apple.com/de/song/595765554)
- [ ] [Big Bud – Darker Than Blue](https://music.apple.com/de/song/595806952)
- [ ] [Peshay – On the Nile](https://music.apple.com/de/song/6798669983)
- [ ] [Photek – The Hidden Camera](https://music.apple.com/de/song/724527293)

*Darkstep / Crossbreed*
- [ ] [Limewax – Everything](https://music.apple.com/de/song/1306932210)
- [ ] [Evol Intent – Middle of the Night](https://music.apple.com/de/song/274576540)
- [ ] [Technical Itch – Oblivion Survival](https://music.apple.com/de/song/698009128)
- [ ] [Technical Itch – Pressure Drop (VIP)](https://music.apple.com/de/song/277133801)
- [ ] [Gein – Street Sweeper](https://music.apple.com/de/song/103806244)
- [ ] [Gein, Technical Itch & MC Jakes – Killsound](https://music.apple.com/de/song/378800543)
- [ ] [Cooh & Limewax – Selecta](https://music.apple.com/de/song/969466340)
- [ ] [Hallucinator – I Am the Devil](https://music.apple.com/de/song/698139665)
- [ ] [Bratkilla – The Marching Dead (VIP)](https://music.apple.com/de/song/453748760)
- [ ] [Ewun – Hate Machine](https://music.apple.com/de/song/1465156116)

*Techstep (nur Level 3)*
- [ ] [Dom & Roland – Thunder](https://music.apple.com/de/song/81702111)
- [ ] [Dom & Roland – Can't Punish Me](https://music.apple.com/de/song/102295342)
- [ ] [Bad Company UK – The Nine](https://music.apple.com/de/song/1849140591)
- [ ] [DJ Trace – Mutant Revisited](https://music.apple.com/de/song/6805543141)
- [ ] [Usual Suspects – Killa Bees](https://music.apple.com/de/song/1284142497)
- [ ] [Optical – To Shape the Future (Remix)](https://music.apple.com/de/song/1286217155)

*Drumfunk (nur Level 3, ergänzt 30.10.2026 – besonders auf Abgrenzung zu Jungle achten)*
- [ ] [Fanu – From Afterlife She Speaks](https://music.apple.com/de/song/1284186032)
- [ ] [Fanu – Yin Dub](https://music.apple.com/de/song/1282771057)
- [ ] [Nucleus & Paradox – Chiron](https://music.apple.com/de/song/950997092)
- [ ] [Nucleus & Paradox – Arcopia](https://music.apple.com/de/song/6798753342)
- [ ] [Fracture & Neptune – Sky Song](https://music.apple.com/de/song/280637455)
- [ ] [Fracture & Neptune – Colemanism](https://music.apple.com/de/song/1514299397)
- [ ] [Phuture-T – Perpetual Motion](https://music.apple.com/de/song/1482839952)
- [ ] [Sileni – Cold Sweat](https://music.apple.com/de/song/1046218924)
- [ ] [MACC – Drumslut](https://music.apple.com/de/song/478178607)
- [ ] [Noraus – Seven Evil X'es](https://music.apple.com/de/song/585180384)

*Deep / Minimal (2–4 davon auswählen)*
- [ ] [Survival – Exile](https://music.apple.com/de/song/1741805925)
- [ ] [dBridge – Wonder Where](https://music.apple.com/de/song/1678603292)
- [ ] [Overlook – Smoke Signals](https://music.apple.com/de/song/1482840410)
- [ ] [Instra:mental – Watching You](https://music.apple.com/de/song/1678622218)
- [ ] [Break, DLR & Octane – Murmur (VIP)](https://music.apple.com/de/song/1746381856)
- [ ] [DLR – Tugboat (The Moneyshot VIP)](https://music.apple.com/de/song/1746381857)

Bewusst weggelassen: Makoto „Golden Girl“ (eher Liquid), Intense „Genesis“ (nur als harter Remix), Konflict „Messiah“ (Neurofunk), The Panacea feat. Current Value und Current Value „Delirium“ (Current Value gehört zu Deep / Minimal bzw. ist ein harter Roller).

**Wissensfrage-Entwurf: „Was ist ein Roller?“**
- *Frage:* Was meint man in der DnB-Szene mit einem „Roller“?
- *Antworten:* (a) Einen Track mit gleichmäßig rollenden Drums, durchgehendem Groove und ohne großen Drop ✔ · (b) Einen Track mit langem Aufbau und riesigem Drop · (c) Ein Subgenre aus den 90ern mit Ragga-Vocals · (d) Einen Track im halben Tempo
- *Lehrtext:* Ein Roller ist eher eine Spielart als ein Subgenre und kommt in vielen Stilen vor, besonders in Deep/Minimal, Techstep und modernem Jump Up. Die Drums treiben den Track: viele Hi-Hats, Shaker und Ghost Notes zwischen Kick und Snare, kaum Variation. Es gibt keinen großen Drop, die Energie bleibt konstant – DJs nutzen Rollers gern, damit die Tanzfläche durchatmen kann. Umstritten ist, ob auch „Foghorn-Rollers“ dazuzählen, bei denen statt der Drums ein fetter Bass rollt (z. B. Kings of the Rollers, Bou).
- *Beispiele:* Klassisch: Marcus Intalex, DLR, Break, Quadrant & Iris, Calyx „Collision Course“, Current Value „Delirium“. Umstritten (Foghorn): Serum „Moon in Your Eyes“, Kings of the Rollers.

**Wissensfrage-Entwurf: „Was ist ein Foghorn-Bass?“**
- *Frage:* Was ist ein „Foghorn“-Bass im Drum & Bass?
- *Antworten:* (a) Ein tiefer, hupenartiger Bass-Sound, der vor allem im Jump Up um 2015–2019 angesagt war ✔ · (b) Ein Breakbeat aus alten Funk- und Soul-Platten · (c) Luftige Pads mit Jazz-Akkorden · (d) Ein Bass, der nur halb so schnell spielt wie die Drums
- *Lehrtext:* „Foghorn“ heißt Nebelhorn – genau so klingt dieser Bass: tief, laut und hupend. Rund um 2015–2019 wurde er im Jump Up zu einer eigenen Welle, bekannt etwa durch Kings of the Rollers, Bou oder Serum. Unter Fans ist umstritten, ob solche Tracks als „Rollers“ gelten: Für viele müssen bei einem Roller die Drums rollen, nicht der Bass.
- *Hinweis:* Fakten (Zeitraum, Künstler) vor dem Einbau noch einmal prüfen.

---

## Arbeitsweise: Testversionen

- `main` = offizielle Version (Vercel *Production*), die alle spielen.
- Neue Ideen werden in einem eigenen **Branch** entwickelt. Vercel erstellt dafür automatisch eine **Preview-Adresse** zum Testen (auch auf dem Handy).
- Passt alles, wird der Branch in `main` zusammengeführt; wenn nicht, wird er gelöscht.
- ⚠️ Testversionen schreiben in die **Test-Bestenliste**, nie in die echte (siehe Schritt 9 und 11).

---

## Entscheidungen (alle getroffen)

1. ~~TypeScript oder JavaScript~~ → entschieden: **TypeScript**.
2. ~~Netlify~~ → entschieden: **Weiterleitung** auf Vercel.
3. ~~Eigene Domain~~ → entschieden: **später**.
