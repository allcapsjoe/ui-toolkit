import React, { useState } from 'react';
import { Panel } from '../Panel';
import { ProgressBar } from '../ProgressBar';
import { Checkbox } from '../Checkbox';
import { Button } from '../Button';
import { Stack } from '../Stack';

/**
 * SetupWizardLayout
 * 
 * A multi-step vintage installation wizard template integrating 
 * license agreements, segmented progress loaders, and final success modals.
 */
export const SetupWizardLayout: React.FC = () => {
  const [step, setStep] = useState(1);
  const [licenseAgreed, setLicenseAgreed] = useState(false);
  const [installProgress, setInstallProgress] = useState(0);
  const [isInstalling, setIsInstalling] = useState(false);

  const startInstallation = () => {
    setIsInstalling(true);
    setStep(3);
    let current = 0;
    const timer = setInterval(() => {
      current += 10;
      setInstallProgress(current);
      if (current >= 100) {
        clearInterval(timer);
        setIsInstalling(false);
        setStep(4);
      }
    }, 300);
  };

  const resetWizard = () => {
    setStep(1);
    setLicenseAgreed(false);
    setInstallProgress(0);
    setIsInstalling(false);
  };

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--ads-color-bg)',
      minHeight: '100vh',
      padding: '2rem',
      boxSizing: 'border-box',
      fontFamily: 'var(--ads-font-mono)'
    }}>
      <div style={{ width: '480px' }}>
        <Panel 
          title={`INSTALLATION WIZARD - STEP ${step} OF 4`} 
          eyebrow="SETUP.EXE"
        >
          <div style={{ minHeight: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            {step === 1 && (
              <Stack gap="0.75rem">
                <h3 style={{ margin: 0, color: 'var(--ads-color-primary)' }}>WELCOME OPERATOR</h3>
                <p style={{ margin: 0, fontSize: '0.85rem', lineHeight: 1.4, color: 'var(--ads-color-text)' }}>
                  THIS WIZARD WILL INSTALL THE ALLCAPS SYSTEM ENGINE ON YOUR DEVICE.
                </p>
                <p style={{ margin: 0, fontSize: '0.85rem', lineHeight: 1.4, color: 'var(--ads-color-text)' }}>
                  PLEASE CLOSE ALL OTHER APPLICATIONS BEFORE RUNNING THE SETUP UTILITY.
                </p>
              </Stack>
            )}

            {step === 2 && (
              <Stack gap="1rem">
                <h3 style={{ margin: 0, color: 'var(--ads-color-primary)' }}>LICENSE CONTRACT</h3>
                <div style={{
                  height: '100px',
                  border: '1px solid var(--ads-color-border)',
                  background: 'var(--ads-color-bg)',
                  padding: '8px',
                  fontSize: '0.75rem',
                  overflowY: 'scroll',
                  textTransform: 'uppercase',
                  lineHeight: 1.4,
                  color: 'var(--ads-color-text)'
                }}>
                  THE SOFTWARE IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY. IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY.
                </div>
                <Checkbox 
                  label="I ACCEPT ALL TERMS OF LICENSE CONTRACT" 
                  checked={licenseAgreed}
                  onChange={() => setLicenseAgreed(!licenseAgreed)}
                />
              </Stack>
            )}

            {step === 3 && (
              <Stack gap="1rem" style={{ textAlign: 'center' }}>
                <h3 style={{ margin: 0, color: 'var(--ads-color-primary)' }}>UNPACKING SECTORS...</h3>
                <ProgressBar value={installProgress} isSegmented />
                <p style={{ fontSize: '0.8rem', opacity: 0.6, color: 'var(--ads-color-text-muted)' }}>WRITING SYSTEM DISK SECTOR {installProgress * 8}/800...</p>
              </Stack>
            )}

            {step === 4 && (
              <Stack gap="0.75rem" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3rem' }}>🎉</div>
                <h3 style={{ margin: 0, color: 'var(--ads-color-primary)' }}>SETUP COMPLETE</h3>
                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--ads-color-text)' }}>THE SYSTEM HAS BEEN INSTALLED SUCCESSFULLY.</p>
              </Stack>
            )}
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid var(--ads-color-border)', margin: '1rem 0' }} />
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Button 
              variant="outline" 
              onClick={resetWizard}
              disabled={isInstalling || step === 1}
            >
              RESTART
            </Button>
            
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {step < 3 && (
                <>
                  <Button 
                    variant="outline" 
                    onClick={() => setStep(s => Math.max(1, s - 1))}
                    disabled={step === 1}
                  >
                    BACK
                  </Button>
                  {step === 2 ? (
                    <Button 
                      variant="primary" 
                      onClick={startInstallation}
                      disabled={!licenseAgreed}
                    >
                      INSTALL
                    </Button>
                  ) : (
                    <Button 
                      variant="primary" 
                      onClick={() => setStep(s => s + 1)}
                    >
                      NEXT
                    </Button>
                  )}
                </>
              )}
              {step === 4 && (
                <Button variant="primary" onClick={resetWizard}>FINISH</Button>
              )}
            </div>
          </div>
        </Panel>
      </div>
    </div>
  );
};
