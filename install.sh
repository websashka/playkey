#!/bin/bash

echo "Install...";
echo "Copy script...";
cp -r ./bin ~/playkey/;
echo "Copy desktop entry...";
cp playkey.desktop ~/.local/share/applications/;
xdg-mime default playkey.desktop x-scheme-handler/playkey;
echo "Done.";