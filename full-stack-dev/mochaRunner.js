const Mocha = require('mocha')
var mocha = new Mocha({
  reporter: 'mochawesome',
  reporterOptions: {
    //reportFilename: 'customReportFilename',
    reportDir: './docs',
    //quiet: true,
  },
});
mocha.addFile('./tests/service/router.spec.js');
mocha.run(() => {
  process.exit();
})