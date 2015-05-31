#! /usr/bin/env bash

for D in *testing*/; do 
    pushd $D
    npm link &
    popd
done

wait
