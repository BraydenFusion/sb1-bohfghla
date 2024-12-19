declare global {
  interface Window {
    Cal?: any;
  }
}

export const initializeCalendar = () => {
  (function (C: any, A: string, L: string) {
    let p = function (a: any, ar: any) {
      a.q.push(ar);
    };
    let d = C.document;
    C.Cal =
      C.Cal ||
      function () {
        let cal = C.Cal;
        let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement('script')).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api = function () {
            p(api, arguments);
          };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === 'string') {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ['initNamespace', namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
  })(window, 'https://app.cal.com/embed/embed.js', 'init');

  if (window.Cal) {
    window.Cal('init', 'fusion-ai', { origin: 'https://cal.com' });

    window.Cal.ns['fusion-ai']('inline', {
      elementOrSelector: '#my-cal-inline',
      config: { layout: 'month_view', theme: 'dark' },
      calLink: 'fusion-ai/fusion-ai',
    });

    window.Cal.ns['fusion-ai']('ui', {
      theme: 'dark',
      hideEventTypeDetails: false,
      layout: 'week_view',
    });
  }
};