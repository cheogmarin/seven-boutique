import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { useTranslation } from './useTranslation';
import { I18nProvider } from './I18nProvider';
import React from 'react';

describe('useTranslation Hook (Level 2 - Hook Integration)', () => {
  beforeEach(() => {
    window.localStorage.clear();
    vi.stubGlobal('navigator', { language: 'es' });
  });

  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <I18nProvider>{children}</I18nProvider>
  );

  it('debe lanzar un error si se usa fuera de I18nProvider', () => {
    // Ocultamos el error de consola esperado para limpiar la salida del test
    vi.spyOn(console, 'error').mockImplementation(() => {});
    
    expect(() => renderHook(() => useTranslation())).toThrow(
      "useTranslation must be used inside I18nProvider"
    );
  });

  it('debe proveer el idioma inicial "es" y sus traducciones', () => {
    const { result } = renderHook(() => useTranslation(), { wrapper });
    expect(result.current.lang).toBe('es');
    expect(result.current.t.nav.essence).toBe('La Esencia');
  });

  it('debe actualizar el idioma y persistir en localStorage al llamar a changeLanguage', () => {
    const { result } = renderHook(() => useTranslation(), { wrapper });

    act(() => {
      result.current.changeLanguage('en');
    });

    expect(result.current.lang).toBe('en');
    expect(window.localStorage.getItem('seven-boutique-lang')).toBe('en');
    
    // Verificamos que el objeto de traducción t haya cambiado 
    // (En 'es' nav.essence es 'La Esencia', al cambiar debería ser distinto)
    expect(result.current.t.nav.essence).not.toBe('La Esencia');
  });
});