pouchdb-adapter-fs
=====

PouchDB adapter using [fsdown](https://github.com/nolanlawson/fsdown) under the hood. Designed for running a quick persistent PouchDB adapter in Node.js.

**Warning: not designed for production use.** fsdown contains race conditions and is most appropriate for quick debugging and testing. It does however pass the full PouchDB test suite.

Usage
----

Install:

    npm install pouchdb-adapter-fs

Then

```js
var PouchDB = require('pouchdb-core')
  .plugin(require('pouchdb-adapter-fs'));

var db = new PouchDB('mydb', {adapter: 'fs'});
```

Testing
--------

```
COUCH_HOST=http://admin:secret@localhost:5984 npm test
```
