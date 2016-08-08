var fsdown = require('fsdown');
var CoreLevelPouch = require('pouchdb-adapter-leveldb-core');
var extend = require('js-extend').extend;
function LevelDownPouch(opts, callback) {
  var _opts = extend({
    db: fsdown,
    migrate: false
  }, opts);
  CoreLevelPouch.call(this, _opts, callback);
}
// overrides for normal LevelDB behavior on Node
LevelDownPouch.valid = function () {
  return true;
};

LevelDownPouch.use_prefix = false;
module.exports = function (PouchDB) {
  PouchDB.adapter('fs', LevelDownPouch, true);
};
