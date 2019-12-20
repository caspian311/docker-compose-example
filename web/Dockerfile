FROM nginx:alpine

RUN rm -fR /usr/share/nginx/html && mkdir /usr/share/nginx/html

ADD build /usr/share/nginx/html
ADD conf/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
EXPOSE 443

