# Crowd LDAP

A LDAP adapter in front of Atlassian Crowd.

## Usage

	export CROWD_URL=...
	export APP_NAME=...
	export APP_PWD=...
	npm install
	node app.js

Or with the docker image:

	sudo docker run -d -p 1389:1389 -e CROWD_URL=http://mycrowd-server -e APP_NAME=app APP_PWD=azerty zippy1978/crowd-ldap


## Parameters

 * CROWD_URL: URL of the crowd server
 * APP_NAME: name of the crowd application
 * APP_PWD: application password
 
## Connecting to LDAP

DN suffix is based on Crowd application name.
For example, connect and retrieve data of user **bart.simpson** on a Crowd application named **springfield**:

	ldapsearch -H ldap://localhost:1389 -x -D uid=bart.simpson,ou=crowd,o=springfield -W -b ou=crowd,o=springfield uid=bart.simpson
 
