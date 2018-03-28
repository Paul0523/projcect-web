#!/bin/bash

PROJECT_SRC_PATH=/home/ubuntu/web_service/projcect-web
PROJECT_PATH=/home/ubuntu/web_service/weather

cd $PROJECT_SRC_PATH

git pull --rebase

npm run build

rm -rf $PROJECT_PATH

cp -r dist ../weather
