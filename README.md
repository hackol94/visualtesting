# visualtesting
Visual Testing with BackStop and Cucumber integration
Ejecutar los Test con el archivo index.js con el siguente comando

´´´ node index.js --backstop=test --envTest=stg para usar yargs variables y tener control sobre el framework ´´´

Los valores de --backstop pueden ser  ‘approve’ | ‘init’ | ‘reference’ | ‘test’

backstop init: Set up a new BackstopJS instance -- specify URLs, cookies, screen sizes, DOM selectors, interactions etc. (see examples directory)
backstop test: BackstopJS creates a set of test screenshots and compares them with your reference screenshots. Any changes show up in a visual report. (Run this after making CSS changes as many times as needed.)
backstop approve: If the test you ran looks good, then go ahead and approve it. Approving changes will update your reference files with the results from your last test. Future tests are compared against your most recent approved test screenshots.
backstop reference: You can create reference files (without previewing) by using the command backstop reference. By default this command calls the url property specified in your config. Optionally, you can add a referenceUrl property to your scenario configuration. If found, BackstopJS will use referenceUrl for screen grabs when running $ backstop reference.

Los valores de --envTest depende de los escenarios y ambientes que definas dentro de la carpeta de ./environment es el nombre del archivo ahí definido.