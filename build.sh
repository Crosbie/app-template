cd client
rm default/*
cd dev
sencha app build production
rm -R archive/ 
cp -R build/*/production/ ../default/
rm -R build/ 