#install http server 

npm install http-server -g
npm run generate 
## command to run 

http-server dist

test
"server-start": "http-server -a dist -p 80"
http-server dist -p 80 --silent

http-server dist -p 3000 
http-server dist


netstat  -ano  |  findstr : 80
taskkill /F /PID 21816

#

pm2 start app.js
# Or set an application name with --name
pm2 start web.js --name "web-interface"

pm2 stop web-interface

pm2 restart web-interface



pm2 start http-server  --name nuxt_frontend -- -p 3000 -d false

pm2 stop nuxt_frontend

pm2 start '/root/.nvm/versions/node/v14.17.0/bin/http-server  dist -p 3000' --name nuxt_frontend_test

sudo ufw allow 3306

sudo ufw enable


material design link
https://materialdesignicons.com/
