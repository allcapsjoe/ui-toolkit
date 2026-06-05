import React, { useState } from 'react';
import { RetroAudio, SoundPreset } from '../utils/audio';
import { Button } from '../components/Button';
import { Slider } from '../components/Slider';
import { SelectDropdown } from '../components/SelectDropdown';
import { Toggle } from '../components/Toggle';
import { Panel } from '../components/Panel';

export const RetroAudioConsole: React.FC = () => {
  const [isMuted, setIsMuted] = useState(false);
  
  // Custom tone states
  const [freq, setFreq] = useState(440);
  const [duration, setDuration] = useState(0.15);
  const [volume, setVolume] = useState(5); // 0-10 scale mapped to 0-0.1
  const [oscType, setOscType] = useState<OscillatorType>('sine');

  const handlePlayPreset = (preset: SoundPreset) => {
    RetroAudio.play(preset);
  };

  const handlePlayCustom = () => {
    RetroAudio.playTone(freq, duration, oscType, volume / 100);
  };

  const handleToggleMute = (checked: boolean) => {
    setIsMuted(checked);
    RetroAudio.setMute(checked);
  };

  return (
    <div style={{ padding: '1rem', background: 'rgba(0,0,0,0.1)', borderRadius: '6px', border: '1px solid var(--ads-color-border)' }}>
      {/* Header controls */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px dashed var(--ads-color-border)', paddingBottom: '0.75rem' }}>
        <div>
          <span style={{ fontSize: '0.7rem', color: 'var(--ads-color-secondary)', fontWeight: 'bold' }}>SYSTEM AUDIO UTILITY</span>
          <h3 style={{ margin: 0, fontSize: '1.2rem', color: 'var(--ads-color-primary)' }}>RETRO AUDIO DECK</h3>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--ads-color-text-muted)' }}>MUTE SYSTEM:</span>
          <Toggle checked={isMuted} onChange={handleToggleMute} />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        {/* Preset Sounds Sandbox */}
        <div>
          <h4 style={{ margin: '0 0 1rem 0', fontSize: '0.9rem', color: 'var(--ads-color-primary)', textTransform: 'uppercase' }}>
            🔊 Preset Sound Effects
          </h4>
          <p style={{ fontSize: '0.8rem', color: 'var(--ads-color-text-muted)', lineHeight: '1.4', marginBottom: '1.25rem' }}>
            Trigger pre-configured retro hardware sound envelopes mapped to standard UI interaction types.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.02)', padding: '0.5rem', border: '1px solid var(--ads-color-border)', borderRadius: '4px' }}>
              <div>
                <strong style={{ fontSize: '0.8rem', display: 'block' }}>CLICK preset</strong>
                <span style={{ fontSize: '0.7rem', color: 'var(--ads-color-text-muted)' }}>Tactile mechanical click (buttons/toggles)</span>
              </div>
              <Button size="sm" onClick={() => handlePlayPreset('click')}>PLAY</Button>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.02)', padding: '0.5rem', border: '1px solid var(--ads-color-border)', borderRadius: '4px' }}>
              <div>
                <strong style={{ fontSize: '0.8rem', display: 'block' }}>CONFIRM preset</strong>
                <span style={{ fontSize: '0.7rem', color: 'var(--ads-color-text-muted)' }}>Quick success double-tone</span>
              </div>
              <Button size="sm" onClick={() => handlePlayPreset('confirm')}>PLAY</Button>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.02)', padding: '0.5rem', border: '1px solid var(--ads-color-border)', borderRadius: '4px' }}>
              <div>
                <strong style={{ fontSize: '0.8rem', display: 'block' }}>ERROR preset</strong>
                <span style={{ fontSize: '0.7rem', color: 'var(--ads-color-text-muted)' }}>Low buzzer warning sound</span>
              </div>
              <Button size="sm" onClick={() => handlePlayPreset('error')}>PLAY</Button>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.02)', padding: '0.5rem', border: '1px solid var(--ads-color-border)', borderRadius: '4px' }}>
              <div>
                <strong style={{ fontSize: '0.8rem', display: 'block' }}>BOOT preset</strong>
                <span style={{ fontSize: '0.7rem', color: 'var(--ads-color-text-muted)' }}>Rising sine warm booting arpeggio</span>
              </div>
              <Button size="sm" onClick={() => handlePlayPreset('boot')}>PLAY</Button>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.02)', padding: '0.5rem', border: '1px solid var(--ads-color-border)', borderRadius: '4px' }}>
              <div>
                <strong style={{ fontSize: '0.8rem', display: 'block' }}>CHIME preset</strong>
                <span style={{ fontSize: '0.7rem', color: 'var(--ads-color-text-muted)' }}>Crystalline triple-tone chime</span>
              </div>
              <Button size="sm" onClick={() => handlePlayPreset('chime')}>PLAY</Button>
            </div>
          </div>
        </div>

        {/* Custom Sound Synthesizer */}
        <div style={{ background: 'rgba(0,0,0,0.15)', padding: '1rem', border: '1px solid var(--ads-color-border)', borderRadius: '6px' }}>
          <h4 style={{ margin: '0 0 1rem 0', fontSize: '0.9rem', color: 'var(--ads-color-primary)', textTransform: 'uppercase' }}>
            🎹 Custom Synth Board
          </h4>
          <p style={{ fontSize: '0.8rem', color: 'var(--ads-color-text-muted)', lineHeight: '1.4', marginBottom: '1.25rem' }}>
            Design your own 8-bit sound by setting custom frequency oscillators and envelopes.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '4px', fontWeight: 'bold' }}>
                <span>FREQUENCY (Hz):</span>
                <span style={{ color: 'var(--ads-color-primary)' }}>{freq} Hz</span>
              </div>
              <Slider min={80} max={3000} value={freq} onChange={setFreq} />
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '4px', fontWeight: 'bold' }}>
                <span>ENVELOPE DURATION:</span>
                <span style={{ color: 'var(--ads-color-primary)' }}>{duration.toFixed(2)}s</span>
              </div>
              <Slider min={0.01} max={1.5} step={0.01} value={duration} onChange={setDuration} />
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '4px', fontWeight: 'bold' }}>
                <span>VOLUME LEVEL:</span>
                <span style={{ color: 'var(--ads-color-primary)' }}>{volume * 10}%</span>
              </div>
              <Slider min={0} max={10} value={volume} onChange={setVolume} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '0.75rem', alignItems: 'end' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '4px' }}>
                  WAVE OSCILLATOR:
                </label>
                <SelectDropdown
                  value={oscType}
                  onChange={(e) => setOscType(e.target.value as OscillatorType)}
                  options={[
                    { value: 'sine', label: 'Sine (Mellow)' },
                    { value: 'square', label: 'Square (Buzzy)' },
                    { value: 'sawtooth', label: 'Sawtooth (Aggressive)' },
                    { value: 'triangle', label: 'Triangle (Tactile)' }
                  ]}
                />
              </div>
              <Button variant="primary" isFullWidth onClick={handlePlayCustom}>
                PLAY SYNTH
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
