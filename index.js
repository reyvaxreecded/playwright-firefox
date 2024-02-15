const { firefox } = require('playwright');

(async () => {
  const browser = await firefox.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('about:blank');
  await page.goto('https://www.google.fr/search?q=google&btnK=Recherche+Google&sxsrf=ALeKk00sUDn_lsB9K9VN9YndO4gb6C5Hlw%3A1620026367177&source=hp&ei=_6OPYL3CCMnSa7DEppgN&iflsig=AINFCbYAAAAAYI-yDwVR5VsYWkmNCpzmuv4m81UgxJfA&oq=chrome+ne+cherche+qu%27avec+yahoo&gs_lcp=Cgdnd3Mtd2l6EAMyBQghEKABOgQIIxAnOgUIABCxAzoICC4QsQMQgwE6CAgAELEDEIMBOgsIABCxAxDHARCjAjoOCAAQsQMQgwEQxwEQowI6BAgAEEM6AggAOgoIABDHARCjAhBDOgQILhBDOhAIABCxAxCDARDHARCjAhBDOgcIABCxAxBDOgcIABCxAxAKOgYIABAWEB46CAgAEBYQChAeOgcIIRAKEKABOggIIRAWEB0QHlDCFVjiR2DxSWgAcAB4AIABdYgBzRaSAQQyNS42mAEAoAEBqgEHZ3dzLXdpeg&sclient=gws-wiz&ved=0ahUKEwj9vY_B_KzwAhVJ6RoKHTCiCdMQ4dUDCAc&uact=5');

})();