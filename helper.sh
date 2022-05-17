#!/bin/bash

######################################
# 
# Easily forgotten things
# 
######################################

# Packages: Ionic, Cordova & Angular storage module
npm i -g ionic
npm i -g cordova
ionic cordova plugin add cordova-sqlite-storage
npm i @ionic/storage-angular


# Start blank project
ionic start breakingBad blank --type=angular


# Create pages
cd breakingBad/src/app
mkdir pages
for i in $( echo "deaths episodes characters quotes")
    do
    ionic g page pages/${i}
    ionic g page pages/${i}-details
done
ionic g page pages/tabs


# Create services
ionic g service services/queryAPI/queryAPI
ionic g service services/favourites/favourites


# Serve app
ioninc serve


# Work fine: Sanity checks on api
curl 'https://www.breakingbadapi.com/api/characters' | less
curl 'https://www.breakingbadapi.com/api/episodes' | less


# Strange result: Get a bunch of results??? => Just use ids 
curl 'https://www.breakingbadapi.com/api/quotes?author=Test+String' | less


# While main API works querying id does not
curl 'https://www.breakingbadapi.com/api/deaths/1'