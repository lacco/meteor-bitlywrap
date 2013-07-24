Meteor Wrapper for Bitly NPM Module
=====================================

For documentation, see the [Bitly Repo](https://github.com/tanepiper/node-bitly).

A ```Bitly``` object is exposed to the global scope so that you can directly use it like this:

    var bitly = new Bitly('<YOUR USERNAME>', '<YOUR API KEY>');
    bitly.shorten('https://github.com/tanepiper/node-bitly', function(err, response) {
      if (err) throw err;

      // See http://code.google.com/p/bitly-api/wiki/ApiDocumentation for format of returned object
      var short_url = response.data.url

      // Do something with data
    });
