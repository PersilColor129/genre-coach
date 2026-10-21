# Genre Coach – Umbauplan

Stand: 20.10.2026 · Status: **Phase 1 abgeschlossen** · nächster Schritt: Phase 2 (PWA)

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

### Phase 2 – Progressive Web App

13. **vite-plugin-pwa einbauen**
    Manifest mit Name, Farben (`#0C0A18`) und Startseite. Service Worker cacht nur die App selbst (Code, Schrift, Bilder), **nicht** die Audio-Clips (Urheberrecht, außerdem wechseln die Apple-URLs gelegentlich).
    - **Automatische Updates:** Service Worker im Modus `autoUpdate`, damit nach einem Deploy niemand tagelang eine alte Version sieht.
    - **Farben:** Das Manifest kann keine CSS-Variablen lesen, deshalb stehen dort feste Werte. Sie werden aus `tokens.css` übernommen; dort kommt ein Kommentar hin, dass das Manifest bei Farbänderungen mit angepasst werden muss.
    ✅ Erledigt: Konfiguration in `vite.config.ts`, Apple-Touch-Icon in `index.html`. Google Fonts werden mitgecacht, Clips und Bestenliste nicht. Lokal mit dem gebauten Stand geprüft (`npm run build && npm run preview`): Service Worker aktiv, Manifest und Icons werden geladen.

14. **App-Icons erstellen**
    ~~Pixel-Herz-Logo~~ → **Rave-Smiley-Maske** (Acid-House-Smiley in `--color-lime` mit Maskenband) in den nötigen Größen (192, 512, maskable, Apple-Touch-Icon).
    ✅ Erstellt: `public/icons/` – erzeugt mit `npm run icons` (`scripts/generate-icons.mjs`, Farben kommen aus `tokens.css`). Noch nicht im Manifest eingebunden (→ Schritt 13).

15. **Offline-Hinweis**
    Ohne Internet eine freundliche Meldung statt kaputter Clips anzeigen – auf Deutsch **und** Englisch (`de.tsx` + `en.tsx`).

15b. **Installations-Hinweis im Spiel**
    Kurze Erklärung, wie man Genre Coach auf den Homescreen legt. iPhone: Anleitung „Teilen → Zum Home-Bildschirm“ (Safari hat keinen Installieren-Knopf). Android/Chrome: eigener „Installieren“-Knopf über das Browser-Ereignis `beforeinstallprompt`. Wird nicht angezeigt, wenn die App schon installiert ist; lässt sich dauerhaft wegklicken.
    - **Ablauf:** Karte erscheint nach der ersten fertigen Runde (Game Over) und später auf der Startseite. Nur auf Handys, nie wenn schon installiert. „×“ blendet sie für ein paar Tage aus, „Nicht mehr zeigen“ dauerhaft.
    - **Design:** Pixel-Karte in Orange (`--color-orange`), gleiche Karte auf Startseite und Game Over. „SO GEHT'S ▸“ öffnet auf dem iPhone eine Anleitung in 3 Schritten mit Pfeil auf die Safari-Leiste; auf Android heißt der Knopf „INSTALLIEREN ▸“ und öffnet direkt den Android-Dialog.
    - **Text (DE):** Überschrift „★ ALS APP SPIELEN“ · „Hol dir Genre Coach auf den Homescreen und starte die nächste Runde mit einem Tipp.“
    - **Text (EN):** „★ PLAY AS AN APP“ · „Add Genre Coach to your home screen and start your next round with one tap.“

16. **Testen**
    Installation auf iPhone (Safari → „Zum Home-Bildschirm“) und Android (Chrome) prüfen, Lighthouse-PWA-Check.
    ✔ *Fertig, wenn:* Die App sich auf dem Handy installieren lässt und wie eine eigene App startet.

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

**Offene Fragen für Phase 3**
- Wie viele Level pro Genre?
- Gibt es weiterhin auch einen „Endlos-Modus“ wie heute?
- Soll es genreübergreifende Level geben (DnB vs. Techno vs. Psy)?

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
