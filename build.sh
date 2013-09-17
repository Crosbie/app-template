
cd client/dev
sencha app build testing
cd ..
echo 'deleting default...'
rm default/*
cd default
echo 'deleting resources...'
rm -R resources/
echo 'deleting ux...'
rm -R ux/ 
echo 'copying testing files into client/default...'
cp -R testing/* .
echo 'removing testing...'
rm -R testing/
echo 'copying iOS icons...'
cd ../dev
cp Icon-72.png ../default
cp Icon.png ../default
cp Icon@2x.png ../default
cp Icon@2x~ipad.png ../default
