export async function externalComponent(url, exportName) {
  const name = url.split('/').reverse()[0].match(/^(.*?)\./)[1];
  exportName = exportName || name;
  if (window[exportName]) return window[exportName];

  window[exportName] = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.async = true;
    script.addEventListener('load', () => {
      resolve(window[exportName]);
    });
    script.addEventListener('error', () => {
      reject(new Error(`Error loading ${url}`));
    });
    script.src = url;
    document.head.appendChild(script);
  });

  return window[exportName];
}

export function externalCSS(url) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = "text/css";
  link.href = url;
  document.head.appendChild(link);
}