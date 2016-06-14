/* jshint node: true */
'use strict';

var url = '//maps.googleapis.com/maps/api/js?';

module.exports = {
  name: 'ember-cli-google-maps-script',
  contentFor: function(type, config) {
    var configuration = config['google-maps-script'];
    var sensor = configuration.sensor || 'false';
    var clientId = configuration.clientId || null;
    var key = configuration.key || null;
    var callBack = configuration.callback || null;

    if (type === 'head-footer') {
      
      url += 'sensor=' + sensor;

      if (clientId) {
        url += '&client=' + clientId;
      }

      if (key) {
        url += '&key=' + key;
      }
      
      if (callBack) {
        url += '&callback=' + callBack;
      }

      return '<script src="' + url + '"></script>';
    }
  }
};
