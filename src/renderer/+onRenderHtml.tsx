import ReactDOMServer from 'react-dom/server';
import type { OnRenderHtmlAsync } from 'vike/types';
import { escapeInject, dangerouslySkipEscape } from 'vike/server';
import { PageShell } from './PageShell';

export const onRenderHtml: OnRenderHtmlAsync = async (pageContext) => {
  const Page = pageContext.Page as any;
  if (!Page) throw new Error('SSR render: missing Page');

  const pageHtml = ReactDOMServer.renderToString(
    <PageShell>
      <Page />
    </PageShell>,
  );

  const title =
    'Scoler Servicios | Recupero de Deuda Inteligente y Humana';
  const description =
    'Servicio integral de cobro y recuperación de deuda a comisión. Comunicación personalizada con deudores, campañas automáticas por WhatsApp y email, y reportes en tiempo real.';

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${title}</title>
        <meta name="description" content="${escapeHtmlAttr(description)}" />
        <link rel="canonical" href="https://scoler.com.ar/" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="${escapeHtmlAttr(title)}" />
        <meta property="og:description" content="${escapeHtmlAttr(description)}" />
        <meta property="og:url" content="https://scoler.com.ar/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="${escapeHtmlAttr(title)}" />
        <meta name="twitter:description" content="${escapeHtmlAttr(description)}" />
      </head>
      <body class="bg-background text-foreground transition-colors duration-300">
        <div id="root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;

  return { documentHtml };
};

function escapeHtmlAttr(s: string) {
  return s
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}
