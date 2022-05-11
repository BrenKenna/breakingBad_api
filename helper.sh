#!/bin/bash

######################################
# 
# Easily forgotten things
# 
######################################

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


# Sanity checks on api
curl 'https://www.breakingbadapi.com/api/characters' | less
curl 'https://www.breakingbadapi.com/api/death-count?name=Walter+White'
curl 'https://www.breakingbadapi.com/api/episodes' | less


# Get a bunch of results??? => Just use ids 
curl 'https://www.breakingbadapi.com/api/quotes?author=Derp+Atron' | less
curl 'https://www.breakingbadapi.com/api/quotes?author=Jimmy McGill' | less