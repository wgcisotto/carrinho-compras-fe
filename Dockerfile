FROM httpd:2.4

COPY .htaccess /usr/local/apache2/htdocs/

COPY httpd.conf /usr/local/apache2/conf/

COPY ./dist/carrinho-compras-fe /usr/local/apache2/htdocs/
