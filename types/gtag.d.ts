// Google Analytics gtag.js type definitions
// This file provides TypeScript support for gtag when GA4 tracking is enabled

interface GtagEventParams {
  event_category?: string
  event_label?: string
  value?: number
  [key: string]: string | number | boolean | undefined
}

interface Window {
  gtag?: (
    command: 'event' | 'config' | 'set',
    targetId: string,
    config?: GtagEventParams | Record<string, unknown>
  ) => void
}
