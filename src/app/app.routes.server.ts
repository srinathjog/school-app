import { RenderMode, ServerRoute } from '@angular/ssr';

// Only prerender the root path to avoid prerendering dynamic API-driven pages
// (e.g. /students) which may perform outgoing HTTP requests during build.
export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender
  }
];
