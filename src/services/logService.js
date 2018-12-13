function init() {
  // Raven.config("https://6a8e94c295a64af3933f4873c8a910bc@sentry.io/1324958", {
  //   release: "1-0-0",
  //   environment: "development-test"
  // }).install();
}
function log(error) {
  console.error(error);
  //Raven.captureException(error);
}
export default {
  init,
  log
};
