#!/bin/bash

echo "Install...";
cp -r ./bin ~/playkey/;
cp playkey.desktop ~/.local/share/applications/;
PATH=$PATH:~/playkey/bin;
xdg-mime default playkey.desktop x-scheme-handler/playkey;
echo "Done.";