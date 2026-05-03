import { describe, it, expect, vi, beforeEach } from 'vitest';
import { getBrowserLanguage, getUrlLanguage, getInitialLanguage } from './I18nProvider';

describe('I18n Logic (Level 1 - Pure Functions)', () => {
  beforeEach(() => {
    // Limpiamos los mocks globales antes de cada prueba para evitar interferencias
    vi.stubGlobal('navigator', { language: 'es' });
    vi.stubGlobal('window', {
      location: { search: '' },
      localStorage: {
        getItem: vi.fn(),
        setItem: vi.fn(),
      }
    });
  });

  describe('getUrlLanguage', () => {
    it('debe retornar "en" cuando se pasa la query string "?lang=en"', () => {
      expect(getUrlLanguage('?lang=en')).toBe('en');
    });

    it('debe retornar "es" cuando se pasa la query string "?lang=es"', () => {
      expect(getUrlLanguage('?lang=es')).toBe('es');
    });

    it('debe retornar null para idiomas no soportados (ej. francés)', () => {
      expect(getUrlLanguage('?lang=fr')).toBeNull();
    });

    it('debe retornar null cuando no existe el parámetro "lang"', () => {
      expect(getUrlLanguage('?user=admin')).toBeNull();
      expect(getUrlLanguage('')).toBeNull();
    });
  });

  describe('getBrowserLanguage', () => {
    it('debe detectar "en" si el navegador está en inglés (en-US)', () => {
      vi.stubGlobal('navigator', { language: 'en-US' });
      expect(getBrowserLanguage()).toBe('en');
    });

    it('debe detectar "es" si el navegador está en español (es-ES)', () => {
      vi.stubGlobal('navigator', { language: 'es-ES' });
      expect(getBrowserLanguage()).toBe('es');
    });

    it('debe por defecto usar "es" si el idioma del navegador no es soportado', () => {
      vi.stubGlobal('navigator', { language: 'it-IT' });
      expect(getBrowserLanguage()).toBe('es');
    });
  });

  describe('getInitialLanguage', () => {
    it('debe dar prioridad máxima al idioma definido en la URL', () => {
      vi.stubGlobal('window', {
        location: { search: '?lang=en' },
        localStorage: { getItem: () => 'es' }
      });
      expect(getInitialLanguage()).toBe('en');
    });

    it('debe usar localStorage si la URL no tiene idioma definido', () => {
      vi.stubGlobal('window', {
        location: { search: '' },
        localStorage: { getItem: () => 'en' }
      });
      expect(getInitialLanguage()).toBe('en');
    });

    it('debe usar el idioma del navegador como último recurso', () => {
      vi.stubGlobal('window', {
        location: { search: '' },
        localStorage: { getItem: () => null }
      });
      vi.stubGlobal('navigator', { language: 'en' });
      expect(getInitialLanguage()).toBe('en');
    });
  });
});