import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import App from './App';
import { I18nProvider } from './i18n/I18nProvider';
import { HelmetProvider } from 'react-helmet-async';
import React from 'react';

// Mocks necesarios para el entorno JSDOM (que no soporta video ni scroll real)
vi.mock('./hooks/useVideoSync', () => ({
  useVideoSync: vi.fn()
}));

const mockIntersectionObserver = vi.fn();
mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null
});
window.IntersectionObserver = mockIntersectionObserver;

describe('App Integration (Level 3 - Full UI Flow)', () => {
  beforeEach(() => {
    window.localStorage.clear();
    window.scrollTo = vi.fn();
    // Mockeamos métodos de HTMLVideoElement que no existen en JSDOM
    Object.defineProperty(HTMLMediaElement.prototype, 'pause', { configurable: true, value: vi.fn() });
    Object.defineProperty(HTMLMediaElement.prototype, 'play', { configurable: true, value: vi.fn().mockResolvedValue(undefined) });
  });

  const renderApp = () => {
    return render(
      <HelmetProvider>
        <I18nProvider>
          <App />
        </I18nProvider>
      </HelmetProvider>
    );
  };

  it('debe abrir el modal de detalle con la info correcta al seleccionar un plato del menú', async () => {
    renderApp();

    // 1. Buscamos y expandimos una categoría del menú
    const restaurantCategory = screen.getByText(/Restaurante/i);
    fireEvent.click(restaurantCategory);

    // 2. Seleccionamos un plato específico (datos de es.json)
    // Usamos findByText porque el contenido aparece tras la animación de Framer Motion
    const plateName = "Tiradito de Pulpo";
    const plateItem = await screen.findByText(plateName);
    fireEvent.click(plateItem);

    // 3. Verificamos que el modal se haya abierto
    // Debería haber al menos dos instancias del nombre: en la lista y en el modal
    const instances = await screen.findAllByText(plateName);
    expect(instances.length).toBeGreaterThan(1);
    
    // 4. Verificamos que el precio se muestre en el modal
    expect(screen.getByText("$22.64")).toBeInTheDocument();
  });
});