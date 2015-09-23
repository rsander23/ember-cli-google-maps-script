/* jshint node: true */
'use strict';

var url = '//maps.googleapis.com/maps/api/js?sensor=false';

module.exports = {
  name: 'ember-cli-google-maps-script',
  contentFor: function(type, config) {
    var env = config.environment;
    var configuration = config['google-maps-script'];
    var clientId = configuration.clientId;
    var key = configuration.key;

    if (type === 'head-footer' && env !== 'test') {
      if (clientId) {
        url += '&client=' + clientId;
      }

      if (key) {
        url += '&key=' + key;
      }

      return '<script src="' + url + '"></script>';
    }
  }
};
