import ReactDOM from 'react-dom/client';
import type { OnRenderClientAsync } from 'vike/types';
import { PageShell } from './PageShell';

export const onRenderClient: OnRenderClientAsync = async (pageContext) => {
  const Page = pageContext.Page as any;
  if (!Page) throw new Error('Client-side render: missing Page');

  const rootEl = document.getElementById('root');
  if (!rootEl) throw new Error('Missing #root element');

  const page = (
    <PageShell>
      <Page />
    </PageShell>
  );

  if (pageContext.isHydration) {
    ReactDOM.hydrateRoot(rootEl, page);
  } else {
    ReactDOM.createRoot(rootEl).render(page);
  }
};
