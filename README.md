# Docker Compose Examples

This purpose of the repo is to create a space to work with `docker-compose`. So this will spin up 3 docker container that need to talk with each other for everything to work. We have a web server (Nginx), an app server (Sinatra), and a database (MySQL). When all is working well, you can visit [localhost](http://localhost) and see data pulled from the database and rendered to the screen.

## Commands

So here are the command lines you need to know...

### Building and running all containers

To get everything up and going, run this command...

```
 $ docker-compose -d up 
```

It should build all 3 docker containers and start them up. The `-d` is optional, it'll run it in the background as a daemon.

There is one caveat. Sinatra is using `activerecord` which will need to migrate and seed your database before you'll have anything to show. To do that, you'll need to jump into the running docker container and run the migrate and seed commands.

```
$ docker ps
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                                      NAMES
...
9a9e91064bf1        mysql:5.7.22        "docker-entrypoint.s…"   11 seconds ago      Up 3 seconds        0.0.0.0:3306->3306/tcp                     db
b1e0e2c52dce        foo_app             "bundle exec rackup"     11 seconds ago      Up 3 seconds        0.0.0.0:4567->4567/tcp                     app
6bdf11948aab        nginx:alpine        "nginx -g 'daemon of…"   11 seconds ago      Up 3 seconds        0.0.0.0:80->80/tcp, 0.0.0.0:443->443/tcp   web
...

$ docker exec -it b1e0e2c52dce /bin/bash
root@b1e0e2c52dce:/app# bundle exec rake db:migrate db:seed
...
```
Now you should be able to visit [localhost](http://localhost) and see the site.

### Stopping everything

So at some point you'll want to shut it down. If you started it without the `-d` optional, you can just type `CTR-C`. But if you did use the `-d` option, it's running in the background, so you'll need to run this...

```
$ docker-compose down
```

### Rebuilding

If you make some changes to the application server, Docker doesn't necessarily know that something changed and so it won't rebuild the image. To force a rebuild, you can run this command.

```
$ docker-compose up --force-recreate --build
```

## Future Things

So since this is a place for learning, I thought I'd start a list of things I'd like to explore in the future...

* Enabling a better local development model (restarting all the containers everytime there's a change is not ideal)
* Using `terraform` to push this out to AWS
* Throw in a more interesting JS example (React or Angular or something)
* Do the migration/seeding of the database automatically

