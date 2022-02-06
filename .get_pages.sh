#!/bin/bash

# Download the pages
LINK=http://localhost:5000/;
PAGES='projects posts galary contact';

curl "${LINK}" > index.html;

for PAGE in $PAGES
do
    curl "${LINK}${PAGE}" > "${PAGE}.html";
done

# Set the hrefs properly
FILES='index.html projects.html posts.html galary.html contact.html';
for FILE in $FILES
do
    for PAGE in $PAGES
    do
        OLD="href=\"\/${PAGE}\"";
        NEW="href=\".\/${PAGE}.html\"";
        sed s/$OLD/$NEW/ $FILE > tmp;
        cp tmp $FILE;
    done
done

rm tmp;
cp /home/shyam/projects/homepage-grid/static ./ -r;