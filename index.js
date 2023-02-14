var cron = require('node-cron');
require('log-timestamp');

cron.schedule("*/10 * * * * *", function() {
  console.log("Do some work");
});