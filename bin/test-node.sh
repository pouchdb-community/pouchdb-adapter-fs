#!/bin/bash

: ${TIMEOUT:=50000}
: ${REPORTER:="spec"}
: ${BAIL:=1}

if [ $BAIL -eq 1 ]; then
    BAIL_OPT="--bail"
else
    BAIL_OPT=""
fi

TESTS_PATH="tests/integration/test.*.js"

./node_modules/.bin/mocha \
    $BAIL_OPT \
    --timeout $TIMEOUT \
    --require=./tests/integration/node.setup.js \
    --reporter=$REPORTER \
    --grep=$GREP \
    $TESTS_PATH
