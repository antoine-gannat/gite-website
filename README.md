# Project for a cotage in Brittany, France.

[Live website](https://gite-piscine.com)

## Requirements

- NodeJS
- Yarn

## Usage:

### Install dependencies

`yarn`

### Development run

`yarn dev`

You can then access the website from: localhost:3000

### Build

`yarn build`

### Serve

`yarn start`

### Apache conf

To serve with apache using a reverse-proxy:

```
<IfModule mod_expires.c>
          ExpiresActive on

          ExpiresByType image/jpg "access plus 1 years"
          ExpiresByType image/png "access plus 1 years"
          ExpiresByType image/gif "access plus 1 years"
          ExpiresByType image/jpeg "access plus 1 years"
          ExpiresByType image/webp "access plus 1 years"

          ExpiresByType text/css "access plus 1 month"

          ExpiresByType image/x-icon "access plus 1 month"

          ExpiresByType application/pdf "access plus 1 month"
          ExpiresByType audio/x-wav "access plus 1 month"
          ExpiresByType audio/mpeg "access plus 1 month"
          ExpiresByType video/mpeg "access plus 1 month"
          ExpiresByType video/mp4 "access plus 1 month"
          ExpiresByType video/quicktime "access plus 1 month"
          ExpiresByType video/x-ms-wmv "access plus 1 month"
          ExpiresByType application/x-shockwave-flash "access 1 month"

          ExpiresByType text/javascript "access plus 1 week"
          ExpiresByType application/x-javascript "access plus 1 week"
          ExpiresByType application/javascript "access plus 1 week"
</IfModule>

<VirtualHost *:80>
    ServerName gite-piscine.com
    ServerAlias gite-piscine.com
    Redirect permanent / https://gite-piscine.com/
</VirtualHost>

<VirtualHost *:443>
    ServerName gite-piscine.com
    ServerAlias gite-piscine.com

    SSLEngine On
    RewriteEngine On
    RewriteCond %{HTTP_HOST} ^www.gite-piscine.com [NC]
    RewriteRule ^(.*)$ https://gite-piscine.com/$1 [L,R=301]


    RedirectMatch 404 /\.git

    # Set the path to SSL certificate
    SSLCertificateFile /etc/letsencrypt/live/gite-piscine.com/fullchain.pem
    SSLCertificateKeyFile /etc/letsencrypt/live/gite-piscine.com/privkey.pem

    ProxyPass / http://127.0.0.1:3000/
    ProxyPassReverse / http://127.0.0.1:3000/
</VirtualHost>


```
