// @ts-ignore
import rehypePrism from '@mapbox/rehype-prism';
import html from 'rehype-stringify';
import gfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import lazyLoadPlugin from 'rehype-plugin-image-native-lazy-loading'
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

export async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(gfm)
    .use(remarkRehype)
    .use(rehypePrism)
    // @ts-ignore
    .use(lazyLoadPlugin)
    .use(html)
    .process(markdown);


  const replacedResult = result.toString().replace(/@@baseUrl@@/g, process.env.baseUrl || '')

  return replacedResult




}
