#!/bin/bash

cd /var/myapp
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install 6
npm install -g @angular/cli
ng build
cp ./dist /var/www/
