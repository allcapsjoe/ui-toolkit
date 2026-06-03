// Web Audio API Retro synthesizer for 8-bit sound effects.
// Leverages browser-native audio synthesis, bypassing external file dependencies.

export type SoundPreset = 'click' | 'confirm' | 'error' | 'boot' | 'chime';

class RetroAudio {
  private static ctx: AudioContext | null = null;
  private static isMuted = false;

  private static getContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    
    // Lazy initialize to bypass server-side rendering issues
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    return this.ctx;
  }

  /**
   * Set global mute state for the UI toolkit audio.
   */
  static setMute(mute: boolean) {
    this.isMuted = mute;
  }

  /**
   * Play a custom synthesizer tone.
   */
  static playTone(freq: number, duration: number, type: OscillatorType = 'square', volume = 0.03) {
    if (this.isMuted) return;

    try {
      const ctx = this.getContext();
      if (!ctx) return;

      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      gain.gain.setValueAtTime(volume, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) {
      // Audio playback fails silently if browser policy blocks it before user interaction
      console.debug('RetroAudio blocked or unsupported:', e);
    }
  }

  /**
   * Play preset sound effects.
   */
  static play(preset: SoundPreset) {
    switch (preset) {
      case 'click':
        // Short high-pitched tactile mechanical click
        this.playTone(1500, 0.03, 'triangle', 0.05);
        break;
      case 'confirm':
        // Quick two-tone success signal
        this.playTone(600, 0.05, 'square', 0.03);
        setTimeout(() => this.playTone(900, 0.1, 'square', 0.03), 50);
        break;
      case 'error':
        // Low frequency buzzer alarm
        this.playTone(180, 0.25, 'sawtooth', 0.05);
        break;
      case 'boot':
        // Synthesizer warm boot arpeggio
        this.playTone(220, 0.1, 'sine', 0.04);
        setTimeout(() => this.playTone(440, 0.1, 'sine', 0.04), 80);
        setTimeout(() => this.playTone(880, 0.2, 'sine', 0.04), 160);
        break;
      case 'chime':
        // High crystalline digital chime
        this.playTone(1200, 0.15, 'sine', 0.03);
        setTimeout(() => this.playTone(1600, 0.15, 'sine', 0.03), 100);
        setTimeout(() => this.playTone(2000, 0.3, 'sine', 0.02), 200);
        break;
    }
  }
}

export { RetroAudio };
