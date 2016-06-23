#!/bin/sh
TAG=zippy1978/crowd-ldap:latest

docker build -t $TAG --no-cache --rm=true .
#docker push $TAG
