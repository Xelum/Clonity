# Clonity — Homepage

Landing page statica pronta per GitHub Pages.

## Pubblicazione

1. Carica tutti i file del pacchetto nella root del repository GitHub.
2. In GitHub apri **Settings → Pages**.
3. Seleziona **Deploy from a branch**, branch `main`, cartella `/ (root)`.
4. Salva e attendi la pubblicazione.

## Firebase

Il sito usa Firebase Authentication e Firestore. Copia il contenuto di `firestore.rules` nella sezione **Firestore Database → Regole** della console Firebase e premi **Pubblica**.

Il clone viene salvato nel documento privato `users/{uid}/clones/main` e rimane collegato all’account. La fotografia usata per l’anteprima resta invece nel dispositivo e non viene memorizzata online.
