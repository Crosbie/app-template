Template App - Getting Started [Sencha]
===============

For sencha app, development is done in dev package.
When testing locally, run `fhc local packages=dev`

Make sure sencha cmd tools are installed, then run `sh build.sh` from the project root.
This will strip out all the Sencha 'fat', and copy the needed resources into the default package.
*None of your changes will be put in the default folder until you run `sh build.sh`*