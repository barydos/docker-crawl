// For more information, see https://crawlee.dev/
import { PlaywrightCrawler } from 'crawlee';
import { router } from './routes.js';

const crawler = new PlaywrightCrawler({
    // proxyConfiguration: new ProxyConfiguration({ proxyUrls: ['...'] }),
    requestHandler: router,
    // Comment this option to scrape the full website.
    maxRequestsPerCrawl: 20,
});

export const handler = async () => {
  crawler.run(['https://crawlee.dev']);
}
