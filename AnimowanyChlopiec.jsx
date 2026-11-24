import React from 'react';
import './animacja-chlopca.css';

// Używa zatwierdzonego pliku animacji, bez zastępowania go emoji.
export default function AnimowanyChlopiec({ phase = '', alt = 'Chłopiec strzela do bramki' }) {
  return (
    <div className={'animowany-chlopiec ' + (phase || '')}>
      <img src="/strzal.gif" alt={alt} draggable="false"
        onError={e => { e.currentTarget.style.display='none'; e.currentTarget.parentElement.dataset.error='Brak pliku public/strzal.gif'; }} />
    </div>
  );
}
