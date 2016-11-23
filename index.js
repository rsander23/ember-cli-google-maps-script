/* jshint node: true */
'use strict';

var url = '//maps.googleapis.com/maps/api/js?';

module.exports = {
  name: 'ember-cli-google-maps-script',
  contentFor: function(type, config) {
    var configuration = config['google-maps-script'];

    var clientId = configuration.clientId || null,
        version = configuration.version || null,
        language = configuration.language || null,
        key = configuration.key || null,
        callBack = configuration.callback || null,
        libs = configuration.libs || [];

    if (type === 'head-footer') {

      if (version) {
        url += '&v=' + version;
      }

      if (language) {
        url += '&language=' + language;
      }

      if (clientId) {
        url += '&client=' + clientId;
      }

      if (key) {
        url += '&key=' + key;
      }
      
      if (callBack) {
        url += '&callback=' + callBack;
      }

      if (libs.length) {
        libs.forEach( lib => {
          url += "&libraries=" + lib;
        });
      }

      return '<script src="' + url + '"></script>';
    }
  }
};
