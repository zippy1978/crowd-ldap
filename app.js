var ldapjs = require('ldapjs');
var ldapjsCrowd = require('./crowd.js');

server = ldapjs.createServer();

var config = {
  crowd: {
      url: process.env.CROWD_URL,
      applicationName: process.env.APP_NAME,
      applicationPassword: process.env.APP_PWD,
      sslRootCertificate: null
    },
  ldap: {
    uid: 'uid',
    dnSuffix: 'o=' + process.env.APP_NAME,
    bindDn: 'cn=root',
    bindPassword: 'password',
    searchBase: 'ou=crowd',
    port: 1389
  }
};

var backend = ldapjsCrowd.createBackend({
  crowd: config.crowd,
  ldap: config.ldap
});

server.bind(config.ldap.dnSuffix, backend.bind());
server.search(config.ldap.dnSuffix, backend.search());

server.listen(config.ldap.port, function() {
   console.log('LDAP server listening at: ' + server.url);
 });
