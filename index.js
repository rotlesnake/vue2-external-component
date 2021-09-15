export async function externalComponent(name, url) {
  const name = url.split('/').reverse()[0].match(/^(.*?)\./)[1];
  if (window[name]) return window[name];

  window[name] = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.async = true;
    script.addEventListener('load', () => {
      resolve(window[name]);
    });
    script.addEventListener('error', () => {
      reject(new Error(`Error loading ${url}`));
    });
    script.src = url;
    document.head.appendChild(script);
  });

  return window[name];
}

export function externalCSS(url) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = "text/css";
  link.href = url;
  document.head.appendChild(link);
}