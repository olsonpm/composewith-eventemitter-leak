#! /usr/bin/env bash

for D in *testing*/; do
    pushd $D
    npm unlink &
    popd
done

wait
