#!/bin/bash -e

HOME="/home/ubuntu/react-portfolio"
cd $HOME
sudo killall node || true
# sudo pm2 stop all
sudo pm2 start server/index.js
# sudo nohup node server/index.js &
# sudo npm run prod-server
