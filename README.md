# Matematyczny Mistrz Realu – aplikacja PWA

## Instalacja na GitHub / Vercel

1. W repozytorium GitHub usuń stare pliki projektu i prześlij **zawartość tego folderu**, nie sam plik ZIP.
2. Zachowaj strukturę: `index.html`, `package.json`, `vite.config.js`, `vercel.json`, foldery `src` i `public`.
3. Na Vercel ustaw **Root Directory** na katalog główny repozytorium, **Framework Preset: Vite**, **Build Command: npm run build**, **Output Directory: dist**.
4. Po udanym wdrożeniu otwórz stronę w Chrome na Androidzie, wybierz menu ⋮ → **Dodaj do ekranu głównego / Zainstaluj aplikację**.
5. Uruchom z ikony na ekranie głównym, obróć telefon poziomo. Przycisk ⛶ próbuje włączyć pełny ekran i orientację poziomą (zależnie od przeglądarki).

## Grafiki

- `public/menu.png` – zatwierdzona grafika menu.
- `public/twarz.jpg` – wycinek twarzy chłopca z zatwierdzonej grafiki; można go później zastąpić dokładniejszym portretem.
- `public/strzal.gif` – referencyjna animacja (nie jest jeszcze dynamicznym awatarem do przebierania).

## Stan wersji

Działa: 3 etapy po 50 działań, odpowiedzi/gole/obrony, odblokowywanie etapów, puchary, monety, sklep, zmiana kolorów koszulek i korków na wspólnej postaci, zapisywanie postępów na urządzeniu, ekran poziomy, instalacja PWA.

**Ważne:** zawodnik jest obecnie animowaną postacią 2D z warstwami stroju, a nie pełnym modelem 3D. Animacja strzału jest uproszczona. Realistyczny ruch nogi, bramkarza i animowane wręczenie pucharu przez Cristiano wymagają kolejnych osobnych klatek postaci. Plik `strzal.gif` jest przygotowany jako materiał poglądowy, lecz nie można w nim zmieniać koszulek. Dane zapisują się w pamięci lokalnej telefonu (nie synchronizują się między urządzeniami).
