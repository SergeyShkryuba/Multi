import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const partials = {
  header: 'src/shared/ui/header/header.html',
  footer: 'src/shared/ui/footer.html',
};

export function htmlInjectPlugin() {
  return {
    name: 'html-inject',
    enforce: 'pre',
    transformIndexHtml(html) {
      return html.replace(
        /<!--\s*inject:(\w+)\s*-->/g,
        (match, key) => {
          const file = partials[key];
          if (!file) {
            console.warn(`[html-inject] partial with "${key}" doesn't exist`);
            return match;
          }
          try {
            const content = readFileSync(resolve(process.cwd(), file), 'utf-8');
            console.log(`[html-inject] Injected ${key}`);
            return content;
          } catch (e) {
            console.error(`[html-inject] Failed to read ${file}: ${e.message}`);
            return match;
          }
        }
      );
    }
  };
}
