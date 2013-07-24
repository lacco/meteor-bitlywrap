Package.describe({
  summary: "Bitly API"
});

Npm.depends({bitly: '1.2.4'});

Package.on_use(function (api) {
  api.add_files(["lib/bitlywrap.js"], "server");
});