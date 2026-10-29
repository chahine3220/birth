
// Universal Floating Emoji Burst Utility
function spawnFloatingEmojiArray(emojis, x, y) {
  emojis.forEach((emoji, idx) => {
    setTimeout(() => {
      const el = document.createElement('div');
      el.className = 'floating-pop-tag';
      el.textContent = emoji;
      el.style.left = `${x + (Math.random() * 60 - 30)}px`;
      el.style.top = `${y - 15 - idx * 10}px`;
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 850);
    }, idx * 75);
  });
}
// =========================================================
// ULTRA-PRO WEB AUDIO SYNTHESIZER & SOUND EFFECTS SUITE
// =========================================================
class UltraSoundFX {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.droneGain = null;
  }

  ensureContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // 1. Crystal Bubble Pop (for all buttons & interactions)
  playBubblePop(freq = 620) {
    if (!this.enabled) return;
    this.ensureContext();
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.8, now + 0.08);

      gain.gain.setValueAtTime(0.14, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.08);
    } catch(e) {}
  }

  // 2. Vinyl Needle Drop / Tape Start Click
  playNeedleDrop() {
    if (!this.enabled) return;
    this.ensureContext();
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(90, now);
      osc.frequency.exponentialRampToValueAtTime(30, now + 0.07);

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.07);

      setTimeout(() => this.playTapeSizzle(), 30);
    } catch(e) {}
  }

  playTapeSizzle() {
    try {
      const now = this.ctx.currentTime;
      const bufferSize = this.ctx.sampleRate * 0.12;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(2800, now);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);
      noise.start(now);
    } catch(e) {}
  }

  // 3. Realistic Candle Blow Whoosh + Sizzle
  playCandleBlow() {
    if (!this.enabled) return;
    this.ensureContext();
    try {
      const now = this.ctx.currentTime;
      const bufferSize = this.ctx.sampleRate * 0.45;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(800, now);
      filter.frequency.exponentialRampToValueAtTime(60, now + 0.45);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);
      noise.start(now);
    } catch(e) {}
  }

  // 4. Wax Seal Break / Crack Sound
  playWaxSnap() {
    if (!this.enabled) return;
    this.ensureContext();
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(110, now + 0.12);

      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.12);
    } catch(e) {}
  }

  // 5. Love Sparkle / Heart Chime (High chord arpeggio)
  playHeartSparkle() {
    if (!this.enabled) return;
    this.ensureContext();
    const chords = [523.25, 659.25, 783.99, 1046.50]; // C Major
    chords.forEach((freq, idx) => {
      setTimeout(() => {
        try {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          const now = this.ctx.currentTime;

          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now);

          gain.gain.setValueAtTime(0.12, now);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.25);

          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(now);
          osc.stop(now + 0.25);
        } catch(e) {}
      }, idx * 60);
    });
  }

  // 6. Cat Meow Inflection
  playCatMeow() {
    if (!this.enabled) return;
    this.ensureContext();
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.linearRampToValueAtTime(820, now + 0.18);
      osc.frequency.exponentialRampToValueAtTime(540, now + 0.45);

      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.18, now + 0.12);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.45);
    } catch(e) {}
  }

  // 7. Cinematic Low-Bass Transition Whoosh
  playCinematicWhoosh() {
    if (!this.enabled) return;
    this.ensureContext();
    try {
      const now = this.ctx.currentTime;
      // Sub-bass sweep
      const osc = this.ctx.createOscillator();
      const oscGain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(40, now);
      osc.frequency.exponentialRampToValueAtTime(140, now + 0.3);
      osc.frequency.exponentialRampToValueAtTime(30, now + 0.7);

      oscGain.gain.setValueAtTime(0.001, now);
      oscGain.gain.linearRampToValueAtTime(0.35, now + 0.25);
      oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.7);

      osc.connect(oscGain);
      oscGain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.7);

      // Filtered noise sweep
      const bufferSize = this.ctx.sampleRate * 0.7;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.Q.value = 2;
      filter.frequency.setValueAtTime(200, now);
      filter.frequency.exponentialRampToValueAtTime(1800, now + 0.3);
      filter.frequency.exponentialRampToValueAtTime(300, now + 0.7);

      const noiseGain = this.ctx.createGain();
      noiseGain.gain.setValueAtTime(0.001, now);
      noiseGain.gain.linearRampToValueAtTime(0.2, now + 0.25);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.7);

      noise.connect(filter);
      filter.connect(noiseGain);
      noiseGain.connect(this.ctx.destination);
      noise.start(now);
    } catch(e) {}
  }

  // 8. Bongo Cat Drum Thump
  playBongo(high = false) {
    if (!this.enabled) return;
    this.ensureContext();
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const freq = high ? 320 : 180;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);
      osc.frequency.exponentialRampToValueAtTime(freq * 0.4, now + 0.12);

      gain.gain.setValueAtTime(0.28, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.12);
    } catch(e) {}
  }

  // 9. Funky Jam Bass Pluck
  playFunkyJam() {
    if (!this.enabled) return;
    this.ensureContext();
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const filter = this.ctx.createBiquadFilter();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(110, now); // A2
      osc.frequency.exponentialRampToValueAtTime(165, now + 0.08);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1400, now);
      filter.frequency.exponentialRampToValueAtTime(200, now + 0.22);
      filter.Q.value = 5;

      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.22);
    } catch(e) {}
  }

  // 10. Pop Cat Pop Sound (Dynamic Pitch & Harmonic Pop)
  playPopCat(pitchMult = 1) {
    if (!this.enabled) return;
    this.ensureContext();
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const startF = Math.min(2600, 680 * pitchMult);
      const endF = Math.min(5200, 1950 * pitchMult);

      osc.type = 'sine';
      osc.frequency.setValueAtTime(startF, now);
      osc.frequency.exponentialRampToValueAtTime(endF, now + 0.04);

      gain.gain.setValueAtTime(0.38, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.06);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.06);
    } catch(e) {}
  }

  // 11. Emotional Cat Meow Cry
  playEmotionalCat() {
    if (!this.enabled) return;
    this.ensureContext();
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(587.33, now); // D5
      osc.frequency.linearRampToValueAtTime(783.99, now + 0.2); // G5
      osc.frequency.exponentialRampToValueAtTime(392.00, now + 0.65); // G4

      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.22, now + 0.15);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.65);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.65);
    } catch(e) {}
  }

  // 12. Realistic Parchment Paper Rustle
  playPaperRustle() {
    if (!this.enabled) return;
    this.ensureContext();
    try {
      const now = this.ctx.currentTime;
      const bufferSize = this.ctx.sampleRate * 0.4;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) data[i] = (Math.random() * 2 - 1) * Math.sin(i / 100);

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'highpass';
      filter.frequency.setValueAtTime(1200, now);
      filter.frequency.exponentialRampToValueAtTime(3500, now + 0.2);
      filter.frequency.exponentialRampToValueAtTime(800, now + 0.4);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.22, now + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);
      noise.start(now);
    } catch(e) {}
  }

  // 13. Vintage Quill Pen Writing Scratch
  playQuillScratch() {
    if (!this.enabled) return;
    this.ensureContext();
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(1400 + Math.random() * 400, now);
      osc.frequency.exponentialRampToValueAtTime(900 + Math.random() * 300, now + 0.09);

      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.09);
    } catch(e) {}
  }

  // 14. Deep Soothing Cat Purr Oscillator
  // 6. Ultra-Realistic Granular "Grrrr" Cat Purr Synthesizer
  playPurrRumble() {
    if (!this.enabled) return;
    this.ensureContext();
    try {
      const sampleRate = this.ctx.sampleRate;
      const duration = 2.4; // 2.4s realistic breathing purr cycle
      const numSamples = Math.floor(sampleRate * duration);
      const buffer = this.ctx.createBuffer(1, numSamples, sampleRate);
      const data = buffer.getChannelData(0);

      const purrFreq = 26.5; // Real feline laryngeal oscillation (26.5 Hz)
      
      for (let i = 0; i < numSamples; i++) {
        const t = i / sampleRate;
        
        // Two-cycle breathing envelope (inhale at t=0..1.1s, exhale at t=1.2..2.3s)
        const breathAmp = Math.max(0, Math.sin(t * Math.PI / duration)) * 0.9;

        // 26.5 Hz throat flutter pulses (grr-grr-grr vibration)
        const pulse = Math.pow(Math.max(0, Math.sin(2 * Math.PI * purrFreq * t)), 3);

        // Core resonant cat chest tone (68 Hz fundamental + 136 Hz harmonic)
        const tone1 = Math.sin(2 * Math.PI * 68 * t);
        const tone2 = 0.5 * Math.sin(2 * Math.PI * 136 * t + 0.3);

        // Soft velvet throat noise texture
        const noise = (Math.random() * 2 - 1) * 0.18;

        data[i] = (tone1 + tone2 + noise) * pulse * breathAmp;
      }

      const source = this.ctx.createBufferSource();
      source.buffer = buffer;

      // Lowpass filter for deep chest warmth
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(140, this.ctx.currentTime);
      filter.Q.setValueAtTime(2.2, this.ctx.currentTime);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.75, this.ctx.currentTime);

      source.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      source.start();
    } catch(err) {
      console.warn("Real Purr FX error:", err);
    }
  }

  // 18. Cute Feline Trill / Chirp ("Brrr-Meow!")
  playCatChirp() {
    if (!this.enabled) return;
    this.ensureContext();
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(580, now);
    osc.frequency.exponentialRampToValueAtTime(950, now + 0.08);
    osc.frequency.linearRampToValueAtTime(720, now + 0.18);
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.24);
  }

  // 12. Party Kitty Fanfare
  playPartyFanfare() {
    if (!this.enabled) return;
    this.ensureContext();
    const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51];
    notes.forEach((f, idx) => {
      setTimeout(() => {
        try {
          const now = this.ctx.currentTime;
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(f, now);
          gain.gain.setValueAtTime(0.18, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(now);
          osc.stop(now + 0.25);
        } catch(e) {}
      }, idx * 75);
    });
  }

  // 8. Ethereal Ambient Pad Drone (Subtle background warmth)
  startAmbientDrone() {
    if (!this.enabled || this.droneGain) return;
    this.ensureContext();
    try {
      const now = this.ctx.currentTime;
      this.droneGain = this.ctx.createGain();
      this.droneGain.gain.setValueAtTime(0.001, now);
      this.droneGain.linearRampToValueAtTime(0.035, now + 3);
      this.droneGain.connect(this.ctx.destination);

      const freqs = [130.81, 164.81, 196.00, 246.94]; // C-E-G-B warm maj7 pad
      freqs.forEach(f => {
        const osc = this.ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(f, now);
        osc.connect(this.droneGain);
        osc.start(now);
      });
    } catch(e) {}
  }

  // 15. Electronic Kick Drum (808 style punch)
  playKickDrum() {
    if (!this.enabled) return;
    this.ensureContext();
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(155, now);
      osc.frequency.exponentialRampToValueAtTime(32, now + 0.18);

      gain.gain.setValueAtTime(0.55, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.22);
    } catch(e) {}
  }

  // 16. Snappy Snare Drum (Bandpass filtered burst)
  playSnareDrum() {
    if (!this.enabled) return;
    this.ensureContext();
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const oscGain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(190, now);
      osc.frequency.exponentialRampToValueAtTime(75, now + 0.08);
      oscGain.gain.setValueAtTime(0.3, now);
      oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
      osc.connect(oscGain);
      oscGain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.1);

      const bufferSize = this.ctx.sampleRate * 0.14;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (this.ctx.sampleRate * 0.035));
      }
      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1600, now);
      filter.Q.setValueAtTime(1.8, now);

      const noiseGain = this.ctx.createGain();
      noiseGain.gain.setValueAtTime(0.42, now);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);

      noise.connect(filter);
      filter.connect(noiseGain);
      noiseGain.connect(this.ctx.destination);
      noise.start(now);
    } catch(e) {}
  }

  // 17. Hi-Hat Crisp Tick
  playHiHat() {
    if (!this.enabled) return;
    this.ensureContext();
    try {
      const now = this.ctx.currentTime;
      const bufferSize = this.ctx.sampleRate * 0.05;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (this.ctx.sampleRate * 0.012));
      }
      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'highpass';
      filter.frequency.setValueAtTime(7500, now);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.28, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);
      noise.start(now);
    } catch(e) {}
  }

  // 18. Sci-Fi Laser Pop
  playLaserPop(freq = 1100) {
    if (!this.enabled) return;
    this.ensureContext();
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq * 1.6, now);
      osc.frequency.exponentialRampToValueAtTime(120, now + 0.09);

      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.09);
    } catch(e) {}
  }

  // 19. Duet Harmonizer Chords (BTS Still With You Voicing)
  playDuetHarmonizer() {
    if (!this.enabled) return;
    this.ensureContext();
    const chord = [277.18, 329.63, 415.30, 493.88, 622.25, 830.61];
    chord.forEach((freq, idx) => {
      setTimeout(() => {
        try {
          const now = this.ctx.currentTime;
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();

          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now);

          gain.gain.setValueAtTime(0.001, now);
          gain.gain.linearRampToValueAtTime(0.14, now + 0.06);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);

          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(now);
          osc.stop(now + 1.2);
        } catch(e) {}
      }, idx * 45);
    });
  }

  // 20. Stadium Crowd Cheering & Applause
  playCrowdCheer() {
    if (!this.enabled) return;
    this.ensureContext();
    try {
      const now = this.ctx.currentTime;
      const duration = 2.4;
      const bufferSize = this.ctx.sampleRate * duration;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);

      let b0 = 0, b1 = 0, b2 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        let pink = b0 + b1 + b2 + white * 0.5362;
        const clapWave = Math.sin((i / this.ctx.sampleRate) * 18 * Math.PI) > 0.6 ? 1.4 : 0.8;
        data[i] = (pink * 0.12) * clapWave;
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1100, now);
      filter.Q.setValueAtTime(0.9, now);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.4, now + 0.4);
      gain.gain.linearRampToValueAtTime(0.35, now + 1.6);
      gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);
      noise.start(now);
      noise.stop(now + duration);
    } catch(e) {}
  }

  // 21. Royal Coronation Brass Fanfare
  playRoyalTrumpet() {
    if (!this.enabled) return;
    this.ensureContext();
    const notes = [
      { f: 261.63, d: 0.18, delay: 0 },
      { f: 329.63, d: 0.18, delay: 180 },
      { f: 392.00, d: 0.22, delay: 360 },
      { f: 523.25, d: 0.65, delay: 580 },
      { f: 659.25, d: 0.75, delay: 800 }
    ];

    notes.forEach(n => {
      setTimeout(() => {
        try {
          const now = this.ctx.currentTime;
          const osc1 = this.ctx.createOscillator();
          const osc2 = this.ctx.createOscillator();
          const gain = this.ctx.createGain();

          osc1.type = 'sawtooth';
          osc2.type = 'triangle';
          osc1.frequency.setValueAtTime(n.f, now);
          osc2.frequency.setValueAtTime(n.f * 1.003, now);

          gain.gain.setValueAtTime(0.01, now);
          gain.gain.linearRampToValueAtTime(0.24, now + 0.04);
          gain.gain.exponentialRampToValueAtTime(0.001, now + n.d);

          osc1.connect(gain);
          osc2.connect(gain);
          gain.connect(this.ctx.destination);

          osc1.start(now);
          osc2.start(now);
          osc1.stop(now + n.d);
          osc2.stop(now + n.d);
        } catch(e) {}
      }, n.delay);
    });
  }

  // 22. Celebration Firework (Launch Whistle + Deep Boom)
  playCelebrationFirework() {
    if (!this.enabled) return;
    this.ensureContext();
    try {
      const now = this.ctx.currentTime;
      const whistle = this.ctx.createOscillator();
      const whistleGain = this.ctx.createGain();
      whistle.type = 'sine';
      whistle.frequency.setValueAtTime(320, now);
      whistle.frequency.exponentialRampToValueAtTime(1450, now + 0.24);

      whistleGain.gain.setValueAtTime(0.18, now);
      whistleGain.gain.exponentialRampToValueAtTime(0.001, now + 0.26);

      whistle.connect(whistleGain);
      whistleGain.connect(this.ctx.destination);
      whistle.start(now);
      whistle.stop(now + 0.26);

      setTimeout(() => {
        try {
          const boomNow = this.ctx.currentTime;
          const sub = this.ctx.createOscillator();
          const subGain = this.ctx.createGain();
          sub.type = 'sine';
          sub.frequency.setValueAtTime(140, boomNow);
          sub.frequency.exponentialRampToValueAtTime(38, boomNow + 0.35);

          subGain.gain.setValueAtTime(0.5, boomNow);
          subGain.gain.exponentialRampToValueAtTime(0.001, boomNow + 0.4);

          sub.connect(subGain);
          subGain.connect(this.ctx.destination);
          sub.start(boomNow);
          sub.stop(boomNow + 0.4);

          const bufferSize = this.ctx.sampleRate * 0.4;
          const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
          const data = buffer.getChannelData(0);
          for (let i = 0; i < bufferSize; i++) {
            data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (this.ctx.sampleRate * 0.08));
          }
          const crackle = this.ctx.createBufferSource();
          crackle.buffer = buffer;
          const crackleGain = this.ctx.createGain();
          crackleGain.gain.setValueAtTime(0.28, boomNow);
          crackleGain.gain.exponentialRampToValueAtTime(0.001, boomNow + 0.4);

          crackle.connect(crackleGain);
          crackleGain.connect(this.ctx.destination);
          crackle.start(boomNow);
        } catch(e) {}
      }, 240);
    } catch(e) {}
  }

  // 23. Magic Starlight Twinkle (Pentatonic harp sweep)
  playMagicTwinkle() {
    if (!this.enabled) return;
    this.ensureContext();
    const freqs = [587.33, 659.25, 880.00, 987.77, 1174.66, 1318.51, 1567.98];
    freqs.forEach((f, idx) => {
      setTimeout(() => {
        try {
          const now = this.ctx.currentTime;
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(f, now);

          gain.gain.setValueAtTime(0.16, now);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.4);

          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(now);
          osc.stop(now + 0.4);
        } catch(e) {}
      }, idx * 40);
    });
  }

  // 15. Funky Vinyl DJ Scratch Effect (Modulated FM synthesis)
  playDJScratch() {
    if (!this.enabled) return;
    this.ensureContext();
    const now = this.ctx.currentTime;
    
    // Scratch 1
    const osc1 = this.ctx.createOscillator();
    const gain1 = this.ctx.createGain();
    osc1.type = 'sawtooth';
    osc1.frequency.setValueAtTime(280, now);
    osc1.frequency.exponentialRampToValueAtTime(1400, now + 0.08);
    osc1.frequency.exponentialRampToValueAtTime(320, now + 0.16);
    gain1.gain.setValueAtTime(0.2, now);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
    osc1.connect(gain1);
    gain1.connect(this.ctx.destination);
    osc1.start(now);
    osc1.stop(now + 0.2);

    // Scratch 2 (Back-spin)
    const osc2 = this.ctx.createOscillator();
    const gain2 = this.ctx.createGain();
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(800, now + 0.1);
    osc2.frequency.exponentialRampToValueAtTime(220, now + 0.22);
    gain2.gain.setValueAtTime(0.18, now + 0.1);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
    osc2.connect(gain2);
    gain2.connect(this.ctx.destination);
    osc2.start(now + 0.1);
    osc2.stop(now + 0.26);
  }

  // 16. Cute Baby Kitten Squeak
  playKittenSqueak() {
    if (!this.enabled) return;
    this.ensureContext();
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(1200, now);
    osc.frequency.linearRampToValueAtTime(1850, now + 0.09);
    osc.frequency.exponentialRampToValueAtTime(1300, now + 0.18);
    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.22);
  }

  // 17. Birthday Party Horn Buzz
  playPartyHorn() {
    if (!this.enabled) return;
    this.ensureContext();
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(240, now);
    osc.frequency.linearRampToValueAtTime(320, now + 0.25);
    gain.gain.setValueAtTime(0.22, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.5);
  }

  playDuetHarmonizer() {
    try { this.playHeartSparkle(); } catch(e) {}
  }
  playMagicChimeCascade() {
    try { this.playHeartSparkle(); } catch(e) {}
  }
  playMagicTwinkle() {
    try { this.playHeartSparkle(); } catch(e) {}
  }
  playPartyFanfare() {
    try { this.playHeartSparkle(); } catch(e) {}
  }
  playPartyHorn() {
    try { this.playHeartSparkle(); } catch(e) {}
  }
  playRoyalTrumpet() {
    try { this.playHeartSparkle(); } catch(e) {}
  }
  playKittenSqueak() {
    try { this.playCatMeow(); } catch(e) {}
  }
  playCatChirp() {
    try { this.playCatMeow(); } catch(e) {}
  }
  playDJScratch() {
    try { this.playNeedleDrop(); } catch(e) {}
  }
  playKickDrum() {
    try { this.playBongo(); } catch(e) {}
  }
  playSnareDrum() {
    try { this.playBongo(); } catch(e) {}
  }
  playHiHat() {
    try { this.playBubblePop(900); } catch(e) {}
  }
  startAmbientDrone() {
    // Ambient drone
  }
}

const rawSfx = new UltraSoundFX();
const sfx = new Proxy(rawSfx, {
  get(target, prop) {
    if (prop in target) {
      const val = target[prop];
      if (typeof val === 'function') return val.bind(target);
      return val;
    }
    return function() {
      try { target.playHeartSparkle(); } catch(e) {}
    };
  }
});

// =========================================================
// CINEMATIC TRANSITION SYSTEM (Wipe + Act reveal)
// =========================================================
class CinematicTransitionManager {
  constructor() {
    this.overlay = document.getElementById('transition-overlay') || document.getElementById('stage-transition-overlay');
    this.actLabel = document.getElementById('transition-act-label') || (this.overlay ? this.overlay.querySelector('.transition-act-label') : null);
    this.isTransitioning = false;
  }

  transitionTo(actNumber, actTitle, callback) {
    if (this.isTransitioning) {
      if (this.overlay) {
        this.overlay.className = 'transition-overlay stage-transition-overlay';
      }
      this.isTransitioning = false;
    }
    this.isTransitioning = true;

    clearTimeout(this._safetyTimer);
    this._safetyTimer = setTimeout(() => {
      this.isTransitioning = false;
      if (this.overlay) {
        this.overlay.className = 'transition-overlay stage-transition-overlay';
      }
    }, 1800);

    try { sfx.playCinematicWhoosh(); } catch(e) {}
    if (this.actLabel) {
      this.actLabel.textContent = `ACT ${actNumber} • ${actTitle.toUpperCase()}`;
    }

    if (!this.overlay) {
      if (typeof callback === 'function') callback();
      this.isTransitioning = false;
      triggerStageTitleReveal();
      return;
    }

    // 1. Wipe in curtain
    this.overlay.classList.remove('wipe-out', 'hide-label');
    this.overlay.classList.add('wipe-in', 'show-label');

    setTimeout(() => {
      // 2. Perform DOM stage swap while screen is covered
      if (typeof callback === 'function') callback();

      // 3. Reveal act text then wipe out
      setTimeout(() => {
        if (this.overlay) {
          this.overlay.classList.remove('show-label');
          this.overlay.classList.add('hide-label');
        }

        setTimeout(() => {
          if (this.overlay) {
            this.overlay.classList.remove('wipe-in');
            this.overlay.classList.add('wipe-out');
          }
          try { sfx.playHeartSparkle(); } catch(e) {}

          setTimeout(() => {
            if (this.overlay) {
              this.overlay.classList.remove('wipe-out', 'hide-label');
            }
            this.isTransitioning = false;
            triggerStageTitleReveal();
          }, 500);
        }, 200);
      }, 500);
    }, 450);
  }
}

const cinematicTransitions = new CinematicTransitionManager();

// =========================================================
// CINEMATIC INTRO SEQUENCE CONTROLLER
// =========================================================
function initCinematicIntro() {
  const intro = document.getElementById('cinematic-intro');
  const enterBtn = document.getElementById('enter-experience-btn') || 
                   document.getElementById('intro-enter-btn') || 
                   document.querySelector('.enter-btn');

  if (!intro) return;

  let hasEntered = false;
  window.dismissCinematicIntro = function() {
    if (hasEntered) return;
    hasEntered = true;

    try {
      sfx.ensureContext();
      sfx.playHeartSparkle();
      sfx.playCinematicWhoosh();
      sfx.startAmbientDrone();
    } catch(err) {
      console.warn("Audio warm-up note:", err);
    }

    intro.classList.add('exit');
    setTimeout(() => {
      intro.classList.add('gone');
      intro.style.display = 'none';
      triggerStageTitleReveal();
      fireworks.burst(window.innerWidth / 2, window.innerHeight * 0.4, 70);
    }, 1100);
  };

  if (enterBtn) {
    enterBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      window.dismissCinematicIntro();
    });
  }

  intro.addEventListener('click', () => {
    window.dismissCinematicIntro();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      window.dismissCinematicIntro();
    }
  });
}

// Reveal active stage titles cinematically
function triggerStageTitleReveal() {
  const activeStage = document.querySelector('.level-card-stage.active-stage');
  if (activeStage) {
    const titles = activeStage.querySelectorAll('[data-reveal]');
    titles.forEach((el, idx) => {
      el.classList.remove('revealed');
      setTimeout(() => el.classList.add('revealed'), idx * 200);
    });
  }
}

// =========================================================
// CURSOR SPARKLE TRAIL ENGINE
// =========================================================
class CursorTrailEngine {
  constructor() {
    this.canvas = document.getElementById('cursor-trail-canvas');
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.sparks = [];
    this.resize();
    window.addEventListener('resize', () => this.resize());
    window.addEventListener('mousemove', (e) => this.onMove(e));
    this.animate();
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  onMove(e) {
    for (let i = 0; i < 2; i++) {
      this.sparks.push({
        x: e.clientX + (Math.random() * 6 - 3),
        y: e.clientY + (Math.random() * 6 - 3),
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5 - 0.5,
        size: Math.random() * 3 + 1.5,
        color: Math.random() > 0.4 ? '#ff2a85' : '#ffd166',
        alpha: 1
      });
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = 0; i < this.sparks.length; i++) {
      const s = this.sparks[i];
      s.x += s.vx;
      s.y += s.vy;
      s.alpha -= 0.025;

      this.ctx.save();
      this.ctx.globalAlpha = Math.max(0, s.alpha);
      this.ctx.fillStyle = s.color;
      this.ctx.beginPath();
      this.ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.restore();
    }

    this.sparks = this.sparks.filter(s => s.alpha > 0);
    requestAnimationFrame(() => this.animate());
  }
}

// =========================================================
// SPOTIFY AUDIO ENGINE & PLAYER CONTROLLER
// =========================================================
class SpotifyPlayerEngine {
  constructor() {
    this.audio = document.getElementById('main-audio-player');
    this.playBtn = document.getElementById('main-play-btn') || document.getElementById('ctrl-play-pause');
    this.playIcon = document.getElementById('play-icon-shape') || document.getElementById('play-icon-render');
    this.equalizer = document.querySelector('.live-signal-meter') || document.getElementById('equalizer-bars');
    this.vinylPod = document.querySelector('.vinyl-spin-container');
    this.scrubberTrack = document.getElementById('scrubber-track');
    this.scrubberFill = document.getElementById('scrubber-fill');
    this.scrubberThumb = document.getElementById('scrubber-thumb');
    this.currentTimeLabel = document.getElementById('current-time-label');
    this.durationLabel = document.getElementById('duration-label') || document.getElementById('duration-time-label');
    this.volumeSlider = document.getElementById('volume-slider');
    this.muteBtn = document.getElementById('vol-mute-btn');
    this.heartBtn = document.getElementById('spotify-heart');
    this.rainBtn = document.getElementById('toggle-rain-ambience');

    this.kineticBanner = document.getElementById('song-kinetic-banner');
    this.lyricsStream = document.getElementById('lyrics-stream');
    this.lyricLines = document.querySelectorAll('.lyric-line-box');
    this.notesContainer = document.getElementById('floating-notes');
    this.statusBadge = document.getElementById('album-status-badge');

    this.isPlaying = false;
    this.duration = 239; // 3:59 for Still With You
    this.currentTime = 0;
    this.isDraggingScrub = false;
    this.rainActive = false;
    this.rainCtx = null;
    this.rainNode = null;
    this.notesInterval = null;

    this.initAudioSource();
    this.bindEvents();
    this.initCatSoundboard();
  }

  initAudioSource() {
    this.audio.loop = true;
    this.audio.volume = 0.85;

    this.audio.addEventListener('loadedmetadata', () => {
      if (this.audio.duration && !isNaN(this.audio.duration)) {
        this.duration = this.audio.duration;
        this.durationLabel.textContent = this.formatTime(this.duration);
      }
    });

    this.audio.addEventListener('timeupdate', () => {
      if (!this.isDraggingScrub && this.audio.duration) {
        this.currentTime = this.audio.currentTime;
        this.duration = this.audio.duration;
        this.updateScrubberUI();
        this.updateKaraokeLyrics();
      }
    });

    this.audio.addEventListener('play', () => {
      this.isPlaying = true;
      if (this.playIcon) this.playIcon.innerHTML = '<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>';
      this.playBtn.title = "Pause";
      this.equalizer.classList.add('active');
      if (this.vinylPod) this.vinylPod.classList.add('spinning');
      if (this.kineticBanner) this.kineticBanner.classList.remove('hidden');
      if (this.statusBadge) this.statusBadge.textContent = "🐱 JAMMING WITH HOPE!";
      this.startFloatingNotes();
    });

    this.audio.addEventListener('pause', () => {
      this.isPlaying = false;
      if (this.playIcon) this.playIcon.innerHTML = '<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>';
      this.playBtn.title = "Play Song";
      this.equalizer.classList.remove('active');
      if (this.vinylPod) this.vinylPod.classList.remove('spinning');
      if (this.statusBadge) this.statusBadge.textContent = "🐱 PAUSED";
      this.stopFloatingNotes();
    });
  }

  startFloatingNotes() {
    if (this.notesInterval) clearInterval(this.notesInterval);
    const symbols = ['♪', '♫', '♬', '💜', '🌸', '✨'];
    this.notesInterval = setInterval(() => {
      if (!this.isPlaying || !this.notesContainer) return;
      const note = document.createElement('span');
      note.className = 'floating-note';
      note.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      note.style.left = `${Math.random() * 80 + 10}%`;
      note.style.setProperty('--note-x', `${(Math.random() - 0.5) * 80}px`);
      note.style.setProperty('--note-rot', `${(Math.random() - 0.5) * 60}deg`);
      note.style.fontSize = `${Math.random() * 0.8 + 1.2}rem`;
      this.notesContainer.appendChild(note);
      setTimeout(() => note.remove(), 3000);
    }, 450);
  }

  stopFloatingNotes() {
    if (this.notesInterval) {
      clearInterval(this.notesInterval);
      this.notesInterval = null;
    }
  }

  updateKaraokeLyrics() {
    if (!this.lyricLines.length) return;
    const cur = this.currentTime;
    let foundActive = false;

    this.lyricLines.forEach((line) => {
      const start = parseFloat(line.getAttribute('data-start') || 0);
      const end = parseFloat(line.getAttribute('data-end') || 9999);

      if (cur >= start && cur < end && !foundActive) {
        foundActive = true;
        if (!line.classList.contains('active-line')) {
          this.lyricLines.forEach(l => l.classList.remove('active-line'));
          line.classList.add('active-line');
          line.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }
    });
  }

  initCatSoundboard() {
    const bongo = document.getElementById('mascot-bongo');
    const popcat = document.getElementById('mascot-popcat');

    if (bongo) {
      let bongoT = false;
      bongo.addEventListener('click', () => {
        bongoT = !bongoT;
        sfx.playBongo(bongoT);
        bongo.classList.add('bumped');
        setTimeout(() => bongo.classList.remove('bumped'), 300);
      });
    }

    if (popcat) {
      popcat.addEventListener('click', () => {
        sfx.playPopCat();
        popcat.classList.add('bumped');
        setTimeout(() => popcat.classList.remove('bumped'), 300);
      });
    }
  }

  bindEvents() {
    this.playBtn.addEventListener('click', () => {
      sfx.playNeedleDrop();
      this.togglePlay();
    });

    this.heartBtn.addEventListener('click', () => {
      this.heartBtn.classList.toggle('active');
      sfx.playHeartSparkle();
      fireworks.burst(this.heartBtn.getBoundingClientRect().x, this.heartBtn.getBoundingClientRect().y, 25);
    });

    // Click on any lyric line to jump to that timestamp
    this.lyricLines.forEach(line => {
      line.addEventListener('click', () => {
        const start = parseFloat(line.getAttribute('data-start') || 0);
        this.currentTime = start;
        this.audio.currentTime = start;
        this.updateScrubberUI();
        this.updateKaraokeLyrics();
        sfx.playBubblePop(700);
        if (!this.isPlaying) this.play();
      });
    });

    this.scrubberTrack.addEventListener('click', (e) => {
      sfx.playBubblePop(720);
      this.seekByEvent(e);
    });

    this.scrubberTrack.addEventListener('mousedown', () => { this.isDraggingScrub = true; });
    window.addEventListener('mouseup', () => { this.isDraggingScrub = false; });
    window.addEventListener('mousemove', (e) => {
      if (this.isDraggingScrub) this.seekByEvent(e);
    });

    this.scrubberTrack.addEventListener('touchstart', (e) => {
      this.isDraggingScrub = true;
      if (e.touches[0]) this.seekByEvent(e.touches[0]);
    }, { passive: true });
    window.addEventListener('touchend', () => { this.isDraggingScrub = false; });
    window.addEventListener('touchmove', (e) => {
      if (this.isDraggingScrub && e.touches[0]) this.seekByEvent(e.touches[0]);
    }, { passive: true });

    this.volumeSlider.addEventListener('input', (e) => {
      const val = e.target.value / 100;
      this.audio.volume = val;
      this.muteBtn.textContent = val === 0 ? '🔇' : '🔊';
      sfx.playBubblePop(400 + val * 400);
    });

    this.muteBtn.addEventListener('click', () => {
      sfx.playBubblePop(550);
      if (this.audio.volume > 0) {
        this.prevVol = this.audio.volume;
        this.audio.volume = 0;
        this.volumeSlider.value = 0;
        this.muteBtn.textContent = '🔇';
      } else {
        const restore = this.prevVol || 0.85;
        this.audio.volume = restore;
        this.volumeSlider.value = restore * 100;
        this.muteBtn.textContent = '🔊';
      }
    });

    this.rainBtn.addEventListener('click', () => {
      sfx.playBubblePop(600);
      this.toggleRain();
    });

    const toggleEmbedBtn = document.getElementById('toggle-official-embed');
    const embedFrame = document.getElementById('official-spotify-frame-container');
    if (toggleEmbedBtn && embedFrame) {
      toggleEmbedBtn.addEventListener('click', () => {
        sfx.playBubblePop(650);
        embedFrame.classList.toggle('hidden');
      });
    }
  }

  togglePlay() {
    if (!this.isPlaying) {
      this.play();
    } else {
      this.pause();
    }
  }

  play() {
    this.isPlaying = true;
    if (this.playIcon) this.playIcon.innerHTML = '<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>';
    this.playBtn.title = "Pause";
    this.equalizer.classList.add('active');
    if (this.vinylPod) this.vinylPod.classList.add('spinning');

    // Clean VIP message: "Sing with me, Hope! 🎤💜"
    const singBanner = document.getElementById('sing-with-me-banner');
    if (singBanner) {
      singBanner.classList.remove('hidden');
      sfx.playHeartSparkle();
    }

    this.audio.play().catch(e => console.warn("Audio play prevented:", e));
  }

  pause() {
    this.isPlaying = false;
    if (this.playIcon) this.playIcon.innerHTML = '<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>';
    this.playBtn.title = "Play Song";
    this.equalizer.classList.remove('active');
    if (this.vinylPod) this.vinylPod.classList.remove('spinning');
    this.audio.pause();
  }

  seekByEvent(e) {
    const rect = this.scrubberTrack.getBoundingClientRect();
    const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    this.currentTime = pos * (this.audio.duration || this.duration);
    this.audio.currentTime = this.currentTime;
    this.updateScrubberUI();
  }

  updateScrubberUI() {
    const pct = (this.currentTime / this.duration) * 100;
    this.scrubberFill.style.width = pct + '%';
    this.scrubberThumb.style.left = pct + '%';
    this.currentTimeLabel.textContent = this.formatTime(this.currentTime);
  }

  formatTime(sec) {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  }

  toggleRain() {
    this.rainActive = !this.rainActive;
    if (this.rainActive) {
      this.rainBtn.classList.add('active');
      this.rainBtn.textContent = '🌧️ Rain FX: On';
      this.startRainSynth();
    } else {
      this.rainBtn.classList.remove('active');
      this.rainBtn.textContent = '🌧️ Rain FX: Off';
      this.stopRainSynth();
    }
  }

  startRainSynth() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!this.rainCtx) this.rainCtx = new AudioCtx();
      if (this.rainCtx.state === 'suspended') this.rainCtx.resume();

      const bufferSize = this.rainCtx.sampleRate * 2;
      const buffer = this.rainCtx.createBuffer(1, bufferSize, this.rainCtx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;

      const noise = this.rainCtx.createBufferSource();
      noise.buffer = buffer;
      noise.loop = true;

      const filter = this.rainCtx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(650, this.rainCtx.currentTime);

      const gain = this.rainCtx.createGain();
      gain.gain.setValueAtTime(0.08, this.rainCtx.currentTime);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.rainCtx.destination);
      noise.start();
      this.rainNode = noise;
    } catch(e) {}
  }

  stopRainSynth() {
    if (this.rainNode) {
      try {
        this.rainNode.stop();
        this.rainNode.disconnect();
      } catch(e) {}
        this.rainNode = null;
    }
  }
}

// =========================================================
// 3D TILT EFFECT & MAGNETIC BUTTONS
// =========================================================
function init3DTiltAndMagnetics() {
  const cards = document.querySelectorAll('[data-tilt]');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.015, 1.015, 1.015)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  });

  // Magnetic button pull
  const magneticButtons = document.querySelectorAll('.magnetic-btn');
  magneticButtons.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px) scale(1.04)`;
      btn.style.setProperty('--mouse-x', `${(e.clientX - rect.left)}px`);
      btn.style.setProperty('--mouse-y', `${(e.clientY - rect.top)}px`);
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0px, 0px) scale(1)';
    });
  });
}

// =========================================================
// AMBIENT SAKURA & STARDUST PARTICLES ENGINE
// =========================================================
class AmbientVisualsEngine {
  constructor() {
    this.canvas = document.getElementById('ambient-canvas');
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.resize();
    this.initParticles();
    window.addEventListener('resize', () => this.resize());
    this.animate();
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  initParticles() {
    const total = 45;
    for (let i = 0; i < total; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        radius: Math.random() * 4 + 2,
        speedY: Math.random() * 0.8 + 0.3,
        speedX: Math.random() * 0.6 - 0.3,
        isGold: Math.random() > 0.6,
        alpha: Math.random() * 0.6 + 0.2,
        rotation: Math.random() * 360,
        rotSpeed: Math.random() * 0.02 - 0.01
      });
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      p.y += p.speedY;
      p.x += p.speedX;
      p.rotation += p.rotSpeed;

      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate(p.rotation);
      this.ctx.globalAlpha = p.alpha;

      if (p.isGold) {
        this.ctx.fillStyle = '#ffd166';
        this.ctx.beginPath();
        this.ctx.arc(0, 0, p.radius * 0.7, 0, Math.PI * 2);
        this.ctx.fill();
      } else {
        this.ctx.fillStyle = '#ffb3c6';
        this.ctx.beginPath();
        this.ctx.ellipse(0, 0, p.radius, p.radius * 1.6, 0, 0, Math.PI * 2);
        this.ctx.fill();
      }

      this.ctx.restore();

      if (p.y > this.canvas.height + 10) {
        p.y = -10;
        p.x = Math.random() * this.canvas.width;
      }
    }

    requestAnimationFrame(() => this.animate());
  }
}

// =========================================================
// FIREWORKS CELEBRATION ENGINE
// =========================================================
class FireworksEngine {
  constructor() {
    this.canvas = document.getElementById('fireworks-canvas');
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.sparks = [];
    this.animId = null;
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  burst(x, y, count = 60) {
    const colors = ['#ff2a85', '#ffd166', '#ff758f', '#ffccd5', '#ff0055', '#ffffff'];
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 5 + 2;
      this.sparks.push({
        x: x || this.canvas.width / 2,
        y: y || this.canvas.height / 2,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: Math.random() * 4 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 1
      });
    }

    if (!this.animId) this.loop();
  }

  loop() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = 0; i < this.sparks.length; i++) {
      const s = this.sparks[i];
      s.x += s.vx;
      s.y += s.vy;
      s.vy += 0.08;
      s.alpha -= 0.014;

      this.ctx.save();
      this.ctx.globalAlpha = Math.max(0, s.alpha);
      this.ctx.fillStyle = s.color;
      this.ctx.beginPath();
      this.ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.restore();
    }

    this.sparks = this.sparks.filter(s => s.alpha > 0);

    if (this.sparks.length > 0) {
      this.animId = requestAnimationFrame(() => this.loop());
    } else {
      this.animId = null;
    }
  }
}

const fireworks = new FireworksEngine();

// =========================================================
// GUIDED LEVEL PROGRESSION MANAGER (Cinematic Wipes)
// =========================================================
class JourneyLevelManager {
  constructor() {
    this.currentLevel = 1;
    this.maxLevels = 5;
    this.unlockedLevels = 1;
    this.actTitles = {
      1: "The Secret Wish",
      2: "Our Song",
      3: "Our Kitten Sushi",
      4: "The Confession & Us",
      5: "The Coronation"
    };

    this.progressFill = document.getElementById('stepper-progress');
    this.bindEvents();
    this.render();
  }

  unlockAndGo(lvl) {
    if (lvl > this.unlockedLevels) {
      this.unlockedLevels = lvl;
    }
    if (cinematicTransitions) {
      cinematicTransitions.isTransitioning = false;
    }
    this.goTo(lvl);
  }

  goTo(lvl) {
    if (lvl > this.unlockedLevels) {
      this.unlockedLevels = lvl;
    }

    const actName = this.actTitles[lvl] || "Act";
    cinematicTransitions.transitionTo(lvl, actName, () => {
      this.currentLevel = lvl;

      document.querySelectorAll('.level-card-stage').forEach(stage => stage.classList.remove('active-stage'));
      const target = document.getElementById(`level-${lvl}`);
      if (target) target.classList.add('active-stage');

      this.render();
      window.scrollTo({ top: 0, behavior: 'instant' });

      if (lvl === 5) {
        fireworks.burst(window.innerWidth / 2, window.innerHeight * 0.35, 120);
        sfx.playRoyalTrumpet();
      }
    });
  }

  render() {
    const pct = ((this.currentLevel - 1) / (this.maxLevels - 1)) * 100;
    if (this.progressFill) this.progressFill.style.width = pct + '%';

    for (let i = 1; i <= this.maxLevels; i++) {
      const btn = document.getElementById(`step-btn-${i}`);
      if (!btn) continue;
      btn.classList.remove('current', 'active', 'locked');

      if (i === this.currentLevel) {
        btn.classList.add('current', 'active');
      } else if (i <= this.unlockedLevels) {
        btn.classList.add('active');
        btn.style.cursor = 'pointer';
      } else {
        btn.classList.add('locked');
        btn.style.cursor = 'not-allowed';
      }
    }
  }

  bindEvents() {
    for (let i = 1; i <= this.maxLevels; i++) {
      const btn = document.getElementById(`step-btn-${i}`);
      if (btn) {
        btn.addEventListener('click', () => {
          if (i <= this.unlockedLevels) {
            sfx.playBubblePop(600);
            this.goTo(i);
          }
        });
      }
    }

    document.getElementById('proceed-to-level-2')?.addEventListener('click', () => this.unlockAndGo(2));
    document.getElementById('proceed-to-level-3')?.addEventListener('click', () => triggerAutomaticBouquetDelivery(() => this.unlockAndGo(3)));
    document.getElementById('proceed-to-level-4')?.addEventListener('click', () => this.unlockAndGo(4));
    document.getElementById('proceed-to-level-5')?.addEventListener('click', () => this.unlockAndGo(5));
    document.getElementById('replay-journey-btn')?.addEventListener('click', () => this.goTo(1));
  }
}

// =========================================================
// LEVEL 1: CAKE CANDLES BLOW & WISHMAKER CONSTELLATION
// =========================================================
function initLevel1Cake(journey) {
  const candles = document.querySelectorAll('.luxe-candle');
  const blowBtn = document.getElementById('blow-candles-btn');
  const gate = document.getElementById('level-1-gate');

  // Wishmaker Constellation
  const wishBtns = document.querySelectorAll('.wish-star-btn');
  const wishAnnounce = document.getElementById('wish-announcement');
  const wishText = document.getElementById('wish-text');
  let wishesCount = 0;

  wishBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (!btn.classList.contains('wished')) {
        btn.classList.add('wished');
        wishesCount++;
        sfx.playMagicTwinkle();
        const rect = btn.getBoundingClientRect();
        fireworks.burst(rect.left + rect.width / 2, rect.top + rect.height / 2, 25);

        const wishVal = btn.getAttribute('data-wish');
        if (wishText && wishAnnounce) {
          wishText.textContent = `✦ Wish Sealed For Hope: "${wishVal}" ✨`;
          wishAnnounce.classList.remove('hidden');
        }

        if (wishesCount >= 3) {
          sfx.playPartyFanfare();
          fireworks.burst(window.innerWidth / 2, window.innerHeight * 0.35, 60);
          journey.unlockedLevels = Math.max(journey.unlockedLevels, 2);
          journey.render();
        }
      }
    });
  });

  function checkCandles() {
    const allOut = Array.from(candles).every(c => c.getAttribute('data-lit') === 'false');
    if (allOut) {
      sfx.playCandleBlow();
      sfx.playHeartSparkle();
      fireworks.burst(window.innerWidth / 2, window.innerHeight * 0.4, 80);
      gate.classList.remove('hidden');
      blowBtn.style.display = 'none';
      journey.unlockedLevels = Math.max(journey.unlockedLevels, 2);
      journey.render();
    }
  }

  candles.forEach(candle => {
    candle.addEventListener('click', () => {
      if (candle.getAttribute('data-lit') === 'true') {
        candle.setAttribute('data-lit', 'false');
        sfx.playCandleBlow();
        const r = candle.getBoundingClientRect();
        fireworks.burst(r.left + r.width / 2, r.top + r.height / 2, 18);
        checkCandles();
      }
    });
  });

  if (blowBtn) {
    blowBtn.addEventListener('click', () => {
      candles.forEach(c => c.setAttribute('data-lit', 'false'));
      checkCandles();
    });
  }
}

// =========================================================
// LEVEL 3: ROYAL ENVELOPE 3D UNFOLDING & TYPEWRITER CASCADE
// =========================================================
function initLevel3Letter() {
  const sealBtn = document.getElementById('wax-seal-btn');
  const envelopeChamber = document.getElementById('envelope-chamber');
  const letter = document.getElementById('royal-letter');
  const topFlap = document.getElementById('envelope-top-flap');
  const letterSheet = document.getElementById('envelope-letter-peeker');
  const paragraphs = document.querySelectorAll('.typewriter-paragraph');

  if (!sealBtn) return;

  sealBtn.addEventListener('click', () => {
    // 1. Wax crack sound & melting sparks
    sfx.playWaxSnap();
    sfx.playPaperRustle();
    sfx.playHeartSparkle();

    // 2. 3D flap unfolds
    if (topFlap) topFlap.classList.add('open');
    sealBtn.style.pointerEvents = 'none';
    sealBtn.style.opacity = '0';

    // 3. Peeker sheet slides up
    setTimeout(() => {
      if (letterSheet) letterSheet.classList.add('slide-up');
      sfx.playPaperRustle();
    }, 300);

    // 4. Reveal royal stationery parchment
    setTimeout(() => {
      envelopeChamber.style.display = 'none';
      letter.classList.remove('hidden');
      fireworks.burst(window.innerWidth / 2, window.innerHeight * 0.45, 90);

      // 5. Cursive ink typewriter cascade on paragraphs
      paragraphs.forEach((p, idx) => {
        setTimeout(() => {
          p.classList.add('typed');
          sfx.playQuillScratch();
        }, 500 + idx * 600);
      });
    }, 1100);
  });
}

// =========================================================
// RANDOM SURPRISE ANIMAL MEMES ENGINE (POPULAR VIRAL STARS)
// =========================================================
class RandomSurpriseCatsEngine {
  constructor() {
    this.layer = document.getElementById('random-cat-layer');
    this.summonBtn = document.getElementById('summon-cat-btn');
    this.animals = [
      { img: 'cats/cute-bouquet-cat.png', text: 'Delivering a bouquet of pink tulips for Hope! 🌷💖', sfx: 'sparkle' },
      { img: 'cats/cute-cap-cat.png', text: 'Cool cap wink for Queen Hope! 😉✨', sfx: 'meow' },
      { img: 'cats/cute-shy-cat.png', text: 'Is it okay if I say Happy Birthday, Hope? 👉👈🌸', sfx: 'purr' },
      { img: 'cats/cute-heart-cat.png', text: 'Making heart paws with endless love for Hope! 🫶💕', sfx: 'harmonizer' },
      { img: 'cats/cute-smile-cat.png', text: 'Looking up at Hope with the happiest smile! 😸✨', sfx: 'fanfare' },
      { img: 'cats/popcat.gif', text: 'POP! 100/10 unanimous score for Hope! 🎈', sfx: 'pop' },
      { img: 'cats/bongo-cat.gif', text: 'Live drum solo for Birthday Queen Hope! 🥁', sfx: 'bongo' },
      { img: 'cats/cat-jam.gif', text: 'Vibing to Still With You for Hope! 🎧💜', sfx: 'harmonizer' }
    ];
    this.lastSpawn = 0;
    this.init();
  }

  init() {
    if (this.summonBtn) {
      this.summonBtn.addEventListener('click', () => {
        this.spawnAnimal(true);
      });
    }

    // Auto spawn disabled to prevent obscuring controls; triggered on user click of Surprise Kitty button
    // (User can click "Surprise Kitty ✦" anytime for funny popups)

    // Clicking ambient background has 10% chance to spawn an animal meme
    window.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON' || e.target.closest('button') || e.target.closest('.cat-companion-roam') || e.target.closest('.spotify-pink-card')) return;
      if (Math.random() < 0.10) {
        this.spawnAnimal(false, e.clientX, e.clientY);
      }
    });
  }

  spawnAnimal(manual = false, clickX = null, clickY = null) {
    if (!this.layer) return;
    this.lastSpawn = Date.now();
    const item = this.animals[Math.floor(Math.random() * this.animals.length)];

    // Sound effect
    if (item.sfx === 'pop') sfx.playPopCat();
    else if (item.sfx === 'bongo') sfx.playBongo();
    else if (item.sfx === 'trumpet') sfx.playRoyalTrumpet();
    else if (item.sfx === 'purr') sfx.playPurrRumble();
    else if (item.sfx === 'fanfare' || item.sfx === 'party') sfx.playPartyFanfare();
    else if (item.sfx === 'meow') sfx.playCatMeow();
    else if (item.sfx === 'harmonizer') sfx.playDuetHarmonizer();
    else if (item.sfx === 'sparkle') sfx.playHeartSparkle();
    else sfx.playHeartSparkle();

    const popup = document.createElement('div');
    popup.className = 'random-cat-popup';

    if (clickX !== null && clickY !== null) {
      const left = Math.min(window.innerWidth - 220, Math.max(20, clickX - 100));
      const top = Math.min(window.innerHeight - 150, Math.max(60, clickY - 120));
      popup.style.left = `${left}px`;
      popup.style.top = `${top}px`;
    } else {
      const isRight = Math.random() > 0.5;
      const bottom = Math.random() * 200 + 40;
      popup.style.bottom = `${bottom}px`;
      if (isRight) {
        popup.style.right = `${Math.random() * 60 + 30}px`;
      } else {
        popup.style.left = `${Math.random() * 60 + 30}px`;
      }
    }

    popup.innerHTML = `
      <div class="popup-cat-bubble">${item.text}</div>
      <div class="popup-cat-avatar">
        <img src="${item.img}" alt="Animal Meme">
      </div>
    `;

    popup.addEventListener('click', (e) => {
      e.stopPropagation();
      sfx.playHeartSparkle();
      sfx.playPurrRumble();
      fireworks.burst(e.clientX, e.clientY, 30);
      popup.classList.add('exit');
      setTimeout(() => popup.remove(), 400);
    });

    this.layer.appendChild(popup);

    setTimeout(() => {
      if (popup.parentNode) {
        popup.classList.add('exit');
        setTimeout(() => popup.remove(), 500);
      }
    }, 5500);

    if (manual) {
      fireworks.burst(window.innerWidth - 100, 80, 25);
    }
  }
}

// =========================================================
// ACT IV: VIRAL ANIMAL MEME SAFARI (ZERO REPEATS)
// =========================================================
function initAnimalMemeSafari() {
  let galleryPopCount = 0;
  let popCombo = 0;
  let lastPopTime = 0;

  // 1. Interactive Button Handlers
  const actionButtons = document.querySelectorAll('.meme-interact-btn');
  actionButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const action = btn.getAttribute('data-action');
      const card = btn.closest('.animal-meme-card');
      const rect = btn.getBoundingClientRect();

      if (action === 'bouquet') {
        sfx.playHeartSparkle();
        const status = document.getElementById('status-bouquet');
        if (status) status.classList.remove('hidden');
        spawnFloatingEmojiArray(['🌷', '🌸', '💐', '💖'], rect.left + rect.width / 2, rect.top);
        fireworks.burst(rect.left + rect.width / 2, rect.top - 20, 25);
      }
      else if (action === 'wink') {
        sfx.playCatMeow();
        const status = document.getElementById('status-wink');
        if (status) status.classList.remove('hidden');
        spawnFloatingEmojiArray(['⭐', '✨', '🌟', '😉'], rect.left + rect.width / 2, rect.top);
        fireworks.burst(rect.left + rect.width / 2, rect.top - 20, 25);
      }
      else if (action === 'shy') {
        sfx.playEmotionalCat();
        const status = document.getElementById('status-shy');
        if (status) status.classList.remove('hidden');
        const img = card ? card.querySelector('.blushing-target') : null;
        if (img) {
          img.classList.add('blushing-glow');
          setTimeout(() => img.classList.remove('blushing-glow'), 1800);
        }
        spawnFloatingEmojiArray(['🌸', '💖', '👉👈', '✨'], rect.left + rect.width / 2, rect.top);
        fireworks.burst(rect.left + rect.width / 2, rect.top - 20, 25);
      }
      else if (action === 'heart') {
        sfx.playDuetHarmonizer();
        const status = document.getElementById('status-heart');
        if (status) status.classList.remove('hidden');
        // Cascade 20 floating hearts across screen
        for (let i = 0; i < 20; i++) {
          setTimeout(() => {
            const h = document.createElement('div');
            h.className = 'floating-pop-tag';
            h.textContent = Math.random() > 0.5 ? '🫶' : '💖';
            h.style.left = `${Math.random() * window.innerWidth}px`;
            h.style.top = `${Math.random() * (window.innerHeight * 0.7) + 80}px`;
            document.body.appendChild(h);
            setTimeout(() => h.remove(), 850);
          }, i * 65);
        }
        fireworks.burst(rect.left + rect.width / 2, rect.top - 20, 35);
      }
      else if (action === 'smile') {
        sfx.playPurrRumble();
        sfx.playPartyFanfare();
        const status = document.getElementById('status-smile');
        if (status) status.classList.remove('hidden');
        spawnFloatingEmojiArray(['😸', '✨', '💖', '🎉'], rect.left + rect.width / 2, rect.top);
        fireworks.burst(rect.left + rect.width / 2, rect.top - 30, 40);
      }
      else if (action === 'pop') {
        const now = Date.now();
        if (now - lastPopTime < 450) {
          popCombo = Math.min(popCombo + 1, 20);
        } else {
          popCombo = 1;
        }
        lastPopTime = now;
        galleryPopCount++;
        const popCounter = document.getElementById('gallery-pop-count');
        if (popCounter) popCounter.textContent = galleryPopCount.toLocaleString();

        const pitchFactor = 1.0 + (popCombo * 0.08);
        sfx.playPopCat(pitchFactor);

        const popImg = document.getElementById('arcade-popcat-img');
        if (popImg) {
          popImg.classList.add('popcat-mouth-open');
          setTimeout(() => popImg.classList.remove('popcat-mouth-open'), 110);
        }

        const tag = document.createElement('div');
        tag.className = 'floating-pop-tag';
        tag.textContent = popCombo > 4 ? `MEGA POP x${popCombo}! 🔥` : '+1 POP! 🎈';
        tag.style.left = `${rect.left + rect.width / 2}px`;
        tag.style.top = `${rect.top - 10}px`;
        document.body.appendChild(tag);
        setTimeout(() => tag.remove(), 850);

        if (galleryPopCount === 10 || galleryPopCount === 25 || galleryPopCount === 50) {
          sfx.playPartyFanfare();
          fireworks.burst(rect.left + rect.width / 2, rect.top - 40, 50);
        }
      }
      else if (action === 'bongo') {
        sfx.playKickDrum();
        setTimeout(() => sfx.playSnareDrum(), 110);
        setTimeout(() => sfx.playKickDrum(), 220);
        setTimeout(() => sfx.playHiHat(), 330);

        const status = document.getElementById('status-bongo');
        if (status) status.classList.remove('hidden');

        const bongoImg = document.getElementById('arcade-bongo-img');
        if (bongoImg) {
          bongoImg.classList.add('bumped');
          setTimeout(() => bongoImg.classList.remove('bumped'), 350);
        }
        spawnFloatingEmojiArray(['🥁', '🎶', '🔥', '✨'], rect.left + rect.width / 2, rect.top);
        fireworks.burst(rect.left + rect.width / 2, rect.top - 20, 25);
      }
      else if (action === 'vibe') {
        sfx.playDuetHarmonizer();
        const status = document.getElementById('status-vibe');
        if (status) status.classList.remove('hidden');
        spawnFloatingEmojiArray(['🎵', '🎶', '💜', '🎧'], rect.left + rect.width / 2, rect.top);
        fireworks.burst(rect.left + rect.width / 2, rect.top - 20, 25);
      }

      if (card) {
        card.classList.add('bumped');
        setTimeout(() => card.classList.remove('bumped'), 300);
      }
    });
  });

  // 2. Entire Card Click Trigger
  const cards = document.querySelectorAll('.animal-meme-card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const btn = card.querySelector('.meme-interact-btn');
      if (btn) btn.click();
    });
  });

  function spawnFloatingEmojiArray(emojis, x, y) {
    emojis.forEach((emoji, idx) => {
      setTimeout(() => {
        const el = document.createElement('div');
        el.className = 'floating-pop-tag';
        el.textContent = emoji;
        el.style.left = `${x + (Math.random() * 60 - 30)}px`;
        el.style.top = `${y - 15 - idx * 10}px`;
        document.body.appendChild(el);
        setTimeout(() => el.remove(), 850);
      }, idx * 75);
    });
  }
}

// =========================================================
// ACT V: LEVEL 5 FINALE, CORONATION & INFINITE LOVE
// =========================================================
function initLevel5Finale() {
  const hugBtn = document.getElementById('boost-hugs-btn');
  const display = document.getElementById('hug-display');
  const crown = document.querySelector('.coronation-crown');
  let currentHugs = 1000000;

  if (crown) {
    crown.style.cursor = 'pointer';
    crown.addEventListener('click', () => {
      sfx.playRoyalTrumpet();
      fireworks.burst(window.innerWidth / 2, window.innerHeight * 0.35, 80);
      crown.classList.add('bumped');
      setTimeout(() => crown.classList.remove('bumped'), 400);
    });
  }

  if (hugBtn) {
    hugBtn.addEventListener('click', () => {
      currentHugs += 10000;
      if (display) {
        display.textContent = currentHugs.toLocaleString() + ' 💕';
        display.classList.add('bump');
        setTimeout(() => display.classList.remove('bump'), 300);
      }

      sfx.playHeartSparkle();
      sfx.playPurrRumble();
      fireworks.burst(window.innerWidth / 2, window.innerHeight * 0.6, 30);
    });
  }
}

// =========================================================
// ROAMING CAT COMPANION INTERACTIONS
// =========================================================
function initCatCompanion() {
  const companion = document.getElementById('cat-companion');
  const bubble = document.getElementById('companion-bubble');
  const imgEl = document.getElementById('companion-img');

  const cuteStickerCats = [
    { img: "cats/cute-bouquet-cat.png", msg: "Tulips for Queen Hope! 🌷💖", sfx: "sparkle" },
    { img: "cats/cute-cap-cat.png", msg: "Cool cap wink for Hope! 😉🧢✨", sfx: "meow" },
    { img: "cats/cute-shy-cat.png", msg: "Is it okay if I say you're the prettiest girl ever, Hope? 👉👈🌸", sfx: "purr" },
    { img: "cats/cute-heart-cat.png", msg: "Making heart paws with infinite love for Hope! 🫶💕", sfx: "harmonizer" },
    { img: "cats/cute-smile-cat.png", msg: "Queen Hope's smile is 100% sunshine! 😸✨", sfx: "fanfare" }
  ];
  let catIdx = 0;

  if (companion) {
    companion.addEventListener('click', () => {
      catIdx = (catIdx + 1) % cuteStickerCats.length;
      const current = cuteStickerCats[catIdx];

      if (current.sfx === 'meow') sfx.playCatMeow();
      else if (current.sfx === 'purr') sfx.playPurrRumble();
      else if (current.sfx === 'harmonizer') sfx.playDuetHarmonizer();
      else if (current.sfx === 'fanfare') sfx.playPartyFanfare();
      else sfx.playHeartSparkle();

      if (imgEl) {
        imgEl.style.transform = 'scale(0.8) rotate(-10deg)';
        setTimeout(() => {
          imgEl.src = current.img;
          imgEl.style.transform = 'scale(1.1) rotate(5deg)';
          setTimeout(() => imgEl.style.transform = '', 200);
        }, 120);
      }
      if (bubble) bubble.textContent = current.msg;
      fireworks.burst(window.innerWidth - 60, window.innerHeight - 60, 25);
    });
  }
}

// =========================================================
// UNIVERSAL SFX ATTACHER TO ALL INTERACTIVE BUTTONS
// =========================================================
function attachUniversalSFX() {
  document.querySelectorAll('.sfx-trigger, button, .step-point').forEach(el => {
    el.addEventListener('click', () => {
      sfx.playBubblePop(600 + Math.random() * 150);
    });
  });

  const sfxPill = document.getElementById('sfx-pill');
  if (sfxPill) {
    sfxPill.addEventListener('click', () => {
      sfx.enabled = !sfx.enabled;
      sfxPill.querySelector('.sfx-label').textContent = sfx.enabled ? 'SFX: Active 🔊' : 'SFX: Muted 🔇';
      if (sfx.enabled) sfx.playHeartSparkle();
    });
  }
}

// =========================================================
// INITIALIZE ON DOM READY
// =========================================================
document.addEventListener('DOMContentLoaded', () => {
  initCinematicIntro();
  new CursorTrailEngine();
  new AmbientVisualsEngine();
  init3DTiltAndMagnetics();
  const journey = new JourneyLevelManager();
  window.journey = journey;
  window.levelStepper = journey;
  initLevel1Cake(journey);
  new SpotifyPlayerEngine();
  initLevel3Letter();
  // initAnimalMemeSafari replaced with modern full-web Meme Party Dock
  initMemePartyDock();
  initCatVibeCrew();
  initLevel3Sushi();
  initBouquetDelivery();
  initSushiHopeCard();
  initLevel5Finale();
  initCatCompanion();
  new RandomSurpriseCatsEngine();
  attachUniversalSFX();
});
// =========================================================
// FLOATING MEME PARTY DOCK & BUTTON PEEKER CONTROLLER
// =========================================================
function initMemePartyDock() {
  const dock = document.getElementById('meme-party-dock');
  const toggleBtn = document.getElementById('dock-toggle-btn');

  if (toggleBtn && dock) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      dock.classList.toggle('minimized');
      toggleBtn.textContent = dock.classList.contains('minimized') ? '▲' : '✕';
    });
  }

  const memeData = {
    sushi: { img: 'cats/sushi.jpg', text: 'Sushi purrs with all her heart for Hope! 🍣🐾💖', sfx: 'sushi' },
    bouquet: { img: 'cats/cute-bouquet-cat.png', text: 'Tulip delivery for Queen Hope! 🌷💖', sfx: 'sparkle' },
    wink: { img: 'cats/cute-cap-cat.png', text: 'Cool cap wink for Hope! 😉🧢✨', sfx: 'meow' },
    shy: { img: 'cats/cute-shy-cat.png', text: 'You are the prettiest girl in the world! 👉👈🌸', sfx: 'purr' },
    heart: { img: 'cats/cute-heart-cat.png', text: '1,000,000 Heart Paws for Hope! 🫶💕', sfx: 'heart' },
    smile: { img: 'cats/cute-smile-cat.png', text: '100% pure sunshine joy for Hope! 😸✨', sfx: 'fanfare' },
    pop: { img: 'cats/popcat.gif', text: 'POP! 100/10 perfection for Hope! 🎈', sfx: 'pop' },
    bongo: { img: 'cats/bongo-cat.gif', text: 'Live drum solo for Birthday Queen Hope! 🥁', sfx: 'bongo' },
    jam: { img: 'cats/cat-jam.gif', text: 'Vibing to Still With You with Hope! 🎧💜', sfx: 'scratch' },
    party: { img: 'cats/cat-party.jpg', text: 'Party horn blast for Queen Hope! 🥳🎉', sfx: 'horn' },
    crown: { img: 'cats/cat-crown.jpg', text: 'Royal crown for the prettiest birthday girl! 👑✨', sfx: 'trumpet' },
    dance: { img: 'cats/cat-dance.gif', text: 'Dancing all night with Hope! 💃💜', sfx: 'scratch' },
    sleep: { img: 'cats/cat-sleep.jpg', text: 'Warmest birthday snuggles & sweet dreams! 🌙💖', sfx: 'purr' }
  };

  let popCount = 0;

  document.querySelectorAll('.dock-cat-btn, .side-dock-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const type = btn.getAttribute('data-meme');
      const data = memeData[type];
      if (!data) return;

      // SFX
      if (data.sfx === 'sparkle') sfx.playHeartSparkle();
      else if (data.sfx === 'meow') sfx.playCatMeow();
      else if (data.sfx === 'purr') sfx.playPurrRumble();
      else if (data.sfx === 'fanfare') sfx.playPartyFanfare();
      else if (data.sfx === 'scratch') {
        sfx.playDJScratch();
        setTimeout(() => sfx.playDuetHarmonizer(), 140);
      }
      else if (data.sfx === 'horn') sfx.playPartyHorn();
      else if (data.sfx === 'sushi') {
        sfx.playPurrRumble();
        sfx.playKittenSqueak();
      }
      else if (data.sfx === 'trumpet') sfx.playRoyalTrumpet();
      else if (data.sfx === 'pop') {
        popCount++;
        sfx.playPopCat(1 + (popCount % 10) * 0.08);
      }
      else if (data.sfx === 'bongo') sfx.playBongo();
      else if (data.sfx === 'harmonizer') sfx.playDuetHarmonizer();
      else if (data.sfx === 'heart') {
        sfx.playDuetHarmonizer();
        // 25 cascading hearts across screen
        for (let i = 0; i < 25; i++) {
          setTimeout(() => {
            const h = document.createElement('div');
            h.className = 'floating-pop-tag';
            h.textContent = Math.random() > 0.5 ? '🫶' : '💖';
            h.style.left = `${Math.random() * window.innerWidth}px`;
            h.style.top = `${Math.random() * (window.innerHeight * 0.7) + 60}px`;
            document.body.appendChild(h);
            setTimeout(() => h.remove(), 850);
          }, i * 50);
        }
      }

      // Spawn on-screen celebration burst
      const burst = document.createElement('div');
      burst.className = 'meme-screen-burst';
      burst.style.left = `${window.innerWidth / 2}px`;
      burst.style.top = `${window.innerHeight * 0.45}px`;

      const img = document.createElement('img');
      img.src = data.img;
      img.alt = data.text;
      img.className = 'burst-cat-img';

      const speech = document.createElement('div');
      speech.className = 'burst-speech';
      speech.textContent = data.text;

      burst.appendChild(img);
      burst.appendChild(speech);
      document.body.appendChild(burst);

      fireworks.burst(window.innerWidth / 2, window.innerHeight * 0.42, 35);
      setTimeout(() => burst.remove(), 2200);
    });
  });

  // Attach button peeker audio to all .btn-with-peeker buttons
  document.querySelectorAll('.btn-with-peeker').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      sfx.playBubblePop(700 + Math.random() * 200);
    });
  });
}

// =========================================================
// CAT VIBE CREW & CONTROLS SFX ENGINE
// =========================================================
function initCatVibeCrew() {
  // Wire Hope's Cat Vibe Crew items
  document.querySelectorAll('.vibe-cat-item').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const vibe = btn.getAttribute('data-vibe');
      const rect = btn.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top;

      btn.style.transform = 'scale(1.25) rotate(-6deg)';
      setTimeout(() => btn.style.transform = '', 250);

      if (vibe === 'jam') {
        sfx.playDJScratch();
        fireworks.burst(x, y - 20, 25);
        spawnFloatingEmojiArray(['🎧', '🎵', '💜', '✨'], x, y);
      }
      else if (vibe === 'bongo') {
        sfx.playBongo();
        setTimeout(() => sfx.playBongo(), 120);
        fireworks.burst(x, y - 20, 25);
        spawnFloatingEmojiArray(['🥁', '🔥', '🐾', '⭐'], x, y);
      }
      else if (vibe === 'bouquet') {
        sfx.playHeartSparkle();
        fireworks.burst(x, y - 20, 30);
        spawnFloatingEmojiArray(['🌷', '🌸', '💐', '💖'], x, y);
      }
      else if (vibe === 'heart') {
        sfx.playKittenSqueak();
        sfx.playDuetHarmonizer();
        // 20 cascading hearts
        for (let i = 0; i < 20; i++) {
          setTimeout(() => {
            const h = document.createElement('div');
            h.className = 'floating-pop-tag';
            h.textContent = Math.random() > 0.5 ? '🫶' : '💖';
            h.style.left = `${Math.random() * window.innerWidth}px`;
            h.style.top = `${Math.random() * (window.innerHeight * 0.7) + 60}px`;
            document.body.appendChild(h);
            setTimeout(() => h.remove(), 850);
          }, i * 55);
        }
      }
      else if (vibe === 'smile') {
        sfx.playPartyFanfare();
        fireworks.burst(x, y - 30, 35);
        spawnFloatingEmojiArray(['😸', '✨', '🎉', '💖'], x, y);
      }
    });
  });

  // Extra sound effects on player controls
  const shuffleBtn = document.getElementById('shuffle-btn');
  if (shuffleBtn) {
    shuffleBtn.addEventListener('click', () => {
      sfx.playBubblePop(950);
      sfx.playCatMeow();
      fireworks.burst(window.innerWidth / 2 - 80, window.innerHeight * 0.4, 15);
    });
  }

  const prevBtn = document.getElementById('prev-btn');
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      sfx.playBongo();
    });
  }

  const nextBtn = document.getElementById('next-btn');
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      sfx.playPurrRumble();
      sfx.playHeartSparkle();
    });
  }

  const heartBtn = document.getElementById('spotify-heart');
  if (heartBtn) {
    heartBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      sfx.playKittenSqueak();
      sfx.playHeartSparkle();
      const r = heartBtn.getBoundingClientRect();
      fireworks.burst(r.left + r.width/2, r.top + r.height/2, 35);
      for (let i = 0; i < 15; i++) {
        setTimeout(() => {
          const h = document.createElement('div');
          h.className = 'floating-pop-tag';
          h.textContent = '💖';
          h.style.left = `${r.left + (Math.random() * 80 - 40)}px`;
          h.style.top = `${r.top - 20 - i * 8}px`;
          document.body.appendChild(h);
          setTimeout(() => h.remove(), 850);
        }, i * 40);
      }
    });
  }
}

// =========================================================
// ACT III: OUR KITTEN SUSHI INTERACTIVE PETTING SANCTUARY
// =========================================================
function initLevel3Sushi() {
  const sushiPhoto = document.getElementById('sushi-main-photo');
  const sushiCard = document.getElementById('sushi-interactive-card');
  const purrRipple = document.getElementById('sushi-purr-ripples');
  const actionTag = document.getElementById('sushi-action-tag');
  const meterFill = document.getElementById('sushi-meter-fill');
  const meterVal = document.getElementById('sushi-happiness-val');

  let currentPose = 0;
  const poses = ['cats/sushi.jpg', 'cats/sushi1.jpg'];
  let petCount = 0;

  function petSushi(e) {
    petCount++;
    sfx.playPurrRumble();
    sfx.playKittenSqueak();

    // Trigger visual purr ripples & bounce
    if (sushiCard) {
      sushiCard.classList.remove('purring-bounce');
      void sushiCard.offsetWidth; // reflow
      sushiCard.classList.add('purring-bounce');
      setTimeout(() => sushiCard.classList.remove('purring-bounce'), 800);
    }

    if (purrRipple) {
      purrRipple.classList.remove('active-ripple');
      void purrRipple.offsetWidth;
      purrRipple.classList.add('active-ripple');
    }

    if (actionTag) {
      const phrases = [
        "Purr... Sushi loves Hope! 🐾💕",
        "Happy sleepy purrs... Zzz 💤",
        "Sushi made biscuits for Hope! 🥐✨",
        "Purrrrr... Coziest kitten ever! 🍣💖"
      ];
      actionTag.textContent = phrases[petCount % phrases.length];
    }

    const rect = sushiCard ? sushiCard.getBoundingClientRect() : { left: window.innerWidth/2, top: window.innerHeight/2, width: 0, height: 0 };
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    fireworks.burst(x, y - 20, 20);
    spawnFloatingEmojiArray(['🐾', '💖', '🫶', '✨'], x, y);

    if (meterFill && meterVal) {
      meterFill.style.width = '100%';
      meterVal.textContent = '100% (Purring Loudly!)';
    }
  }

  // Clicking on Sushi image directly pets Sushi
  if (sushiCard) {
    sushiCard.addEventListener('click', petSushi);
  }

  // 1. Pet button
  const petBtn = document.getElementById('pet-sushi-btn');
  if (petBtn) {
    petBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      petSushi(e);
    });
  }

  // 2. Treat button
  const treatBtn = document.getElementById('treat-sushi-btn');
  if (treatBtn) {
    treatBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      sfx.playBubblePop(1050);
      sfx.playKittenSqueak();

      if (actionTag) actionTag.textContent = "Munch munch... Delicious treat! 🍣🐟✨";

      const rect = treatBtn.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top;
      spawnFloatingEmojiArray(['🍣', '🐟', '✨', '😋'], x, y);
      fireworks.burst(x, y - 25, 25);
    });
  }

  // 3. Switch Pose button
  const poseBtn = document.getElementById('pose-sushi-btn');
  if (poseBtn) {
    poseBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      currentPose = (currentPose + 1) % poses.length;
      sfx.playPurrRumble();

      if (sushiPhoto) {
        sushiPhoto.style.opacity = '0.3';
        sushiPhoto.style.transform = 'scale(0.95)';
        setTimeout(() => {
          sushiPhoto.src = poses[currentPose];
          sushiPhoto.style.opacity = '1';
          sushiPhoto.style.transform = 'scale(1)';
        }, 200);
      }

      if (actionTag) {
        actionTag.textContent = currentPose === 1 
          ? "Sushi stretched paws & stayed cozy! 🐾🛌" 
          : "Sushi curled up into a sweet ball! 💤🍣";
      }

      const rect = poseBtn.getBoundingClientRect();
      fireworks.burst(rect.left + rect.width / 2, rect.top - 20, 20);
    });
  }

  // 4. Cuddle button
  const cuddleBtn = document.getElementById('cuddle-sushi-btn');
  if (cuddleBtn) {
    cuddleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      sfx.playDuetHarmonizer();
      sfx.playHeartSparkle();

      if (actionTag) actionTag.textContent = "Warm cuddles with baby Sushi! 💖🐾";

      for (let i = 0; i < 22; i++) {
        setTimeout(() => {
          const h = document.createElement('div');
          h.className = 'floating-pop-tag';
          h.textContent = Math.random() > 0.5 ? '🫶' : '💖';
          h.style.left = `${Math.random() * window.innerWidth}px`;
          h.style.top = `${Math.random() * (window.innerHeight * 0.7) + 60}px`;
          document.body.appendChild(h);
          setTimeout(() => h.remove(), 850);
        }, i * 45);
      }
    });
  }

  // Royal Couple (Me & Her) interactions
  const herCard = document.querySelector('#her-avatar-card, .her-portrait, .her-card');
  if (herCard) {
    herCard.addEventListener('click', () => {
      sfx.playHeartSparkle();
      sfx.playKittenSqueak();
      const r = herCard.getBoundingClientRect();
      fireworks.burst(r.left + r.width / 2, r.top + r.height / 2, 35);
      spawnFloatingEmojiArray(['👑', '💖', '✨', '🌸'], r.left + r.width / 2, r.top);
    });
  }

  const meCard = document.querySelector('#me-avatar-card, .me-portrait, .me-card');
  if (meCard) {
    meCard.addEventListener('click', () => {
      sfx.playDuetHarmonizer();
      const r = meCard.getBoundingClientRect();
      fireworks.burst(r.left + r.width / 2, r.top + r.height / 2, 30);
      spawnFloatingEmojiArray(['⚜️', '💕', '🫶', '🌟'], r.left + r.width / 2, r.top);
    });
  }
}


// =========================================================
// SPECIAL JUNG KOOK BOUQUET DELIVERY FOR HOPE
// =========================================================
// =========================================================
// BOUQUET DELIVERY CONTROLLER (FROM ME TO HOPE)
// =========================================================
let bouquetDeliveryInProgress = false;

function triggerAutomaticBouquetDelivery(onComplete) {
  const modal = document.getElementById('bouquet-modal');
  const acceptBtn = document.getElementById('accept-flowers-btn');
  const closeBtn = document.getElementById('close-bouquet-modal');

  if (!modal) {
    if (typeof onComplete === 'function') onComplete();
    else if (window.levelStepper) window.levelStepper.unlockAndGo(3);
    return;
  }

  modal.classList.remove('hidden');
  try { sfx.playHeartSparkle(); } catch(e) {}

  // Celebrate presentation
  try {
    fireworks.burst(window.innerWidth / 2, window.innerHeight * 0.45, 60);
    spawnFloatingEmojiArray(['💐', '🌸', '💜', '✨', '🌷'], window.innerWidth / 2, window.innerHeight * 0.38);
  } catch(e) {}

  let hasPassed = false;
  const passToSushi = () => {
    if (hasPassed) return;
    hasPassed = true;
    modal.classList.add('hidden');
    try { sfx.playBubblePop(720); } catch(e) {}
    try { sfx.playCatMeow(); } catch(e) {}
    if (cinematicTransitions) cinematicTransitions.isTransitioning = false;
    if (typeof onComplete === 'function') {
      onComplete();
    } else if (window.levelStepper) {
      window.levelStepper.unlockAndGo(3);
    }
  };

  if (acceptBtn) {
    acceptBtn.onclick = (e) => {
      e.stopPropagation();
      try {
        fireworks.burst(window.innerWidth / 2, window.innerHeight * 0.45, 80);
      } catch(err) {}
      passToSushi();
    };
  }

  if (closeBtn) {
    closeBtn.onclick = (e) => {
      e.stopPropagation();
      passToSushi();
    };
  }

  modal.onclick = (e) => {
    if (e.target === modal) passToSushi();
  };
}

function initBouquetDelivery() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const modal = document.getElementById('bouquet-modal');
      if (modal && !modal.classList.contains('hidden')) {
        modal.classList.add('hidden');
      }
    }
  });

  // Attach side meme clicking handlers
  document.querySelectorAll('.side-meme-card').forEach(card => {
    card.addEventListener('click', (e) => {
      e.stopPropagation();
      try { sfx.playHeartSparkle(); } catch(err) {}
      const rect = card.getBoundingClientRect();
      fireworks.burst(rect.left + rect.width / 2, rect.top + rect.height / 2, 25);
      spawnFloatingEmojiArray(['✨', '🐱', '💖', '🐾'], rect.left + rect.width / 2, rect.top);
    });
  });
}


function initSushiHopeCard() {
  const hopeCard = document.getElementById('hope-sushi-card');
  const tellBtn = document.getElementById('sushi-tell-bday-btn');
  const speechBubble = document.getElementById('sushi-bday-speech');
  const hopeImg = document.getElementById('hope-sushi-img');

  const bdayPhrases = [
    "Sushi says: Happy Birthday, Hope! 🍣🐾🎂",
    "Sushi purrs: Hope is the absolute sweetest! 💖✨",
    "Sushi made warm biscuits for Queen Hope! 🥐🐾",
    "Meow! Today is the happiest day for Hope! 👑🎉",
    "Purrrrrr... Sushi gives Hope big warm cuddles! 🍣🫶"
  ];
  let phraseIdx = 0;

  function triggerSushiBdayWish(e) {
    if (e) e.stopPropagation();
    phraseIdx = (phraseIdx + 1) % bdayPhrases.length;

    sfx.playPurrRumble();
    sfx.playCatChirp();
    sfx.playPartyFanfare();

    if (speechBubble) {
      speechBubble.style.transform = 'scale(0.9)';
      speechBubble.style.opacity = '0.5';
      setTimeout(() => {
        speechBubble.textContent = bdayPhrases[phraseIdx];
        speechBubble.style.transform = 'scale(1.05)';
        speechBubble.style.opacity = '1';
        setTimeout(() => {
          speechBubble.style.transform = 'scale(1)';
        }, 200);
      }, 150);
    }

    if (hopeImg) {
      hopeImg.style.transform = 'scale(1.12) rotate(2deg)';
      setTimeout(() => {
        hopeImg.style.transform = 'scale(1) rotate(0deg)';
      }, 350);
    }

    const rect = (tellBtn || hopeCard).getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top;

    fireworks.burst(cx, cy - 20, 30);
    spawnFloatingEmojiArray(['🍣', '🐾', '🎂', '💖', '✨', '🌸'], cx, cy);
  }

  if (tellBtn) {
    tellBtn.addEventListener('click', triggerSushiBdayWish);
  }
  if (hopeCard) {
    hopeCard.addEventListener('click', triggerSushiBdayWish);
  }
}

