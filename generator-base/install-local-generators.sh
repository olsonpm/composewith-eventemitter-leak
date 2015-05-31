#! /usr/bin/env bash

#--execute=/bin/bash--

DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

for D in "${DIR}/../"*testing*; do
    npm install --save "${D}" &
done

wait
