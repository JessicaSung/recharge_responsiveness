# API Draft

This is a draft "flask" api.
First install flask by following the instructions:


To run flask, follow instructions to do "pip install flask"

Then:

> export FLASK_APP=api.py".
On windows, this may be 
> set FLASK_APP=api.py".

Finally, to start the service on port 5000:

> flask run

To prepare to run the tests, install some node packages:

> npm install mocha
> npm install chai
> npm install chai-http

To run the tests, from the commandline in the directory
where this readme resides, execute:

> mocha

