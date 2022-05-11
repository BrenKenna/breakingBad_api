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


# Create service
ionic g service services/api


# Serve app
ioninc serve