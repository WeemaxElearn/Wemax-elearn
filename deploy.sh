cd client
npm install
npm run build
rm -r /var/www/html/build/
cp -r build/ /var/www/html/
cd ..
npm install
pm2 stop "Weemax Api"
pm2 delete "Weemax Api"
pm2 start server.js "Weemax Api"
echo "Deployed Successfully"