# GraphQL & Sequelize Demo Project

## Getting the database set up

You will need Docker in order to sinstall a containerised MySQL dev
environment. After getting docker, run the following command anywhere:

```sh
docker run \
-p 0.0.0.0:7999:3306 \
--name nightly-graphql \
-e MYSQL_ROOT_PASSWORD=password \
-e MYSQL_USER=nightly-dev \
-e MYSQL_PASSWORD=password \
-e MYSQL_DATABASE=nightly-db \
-d mysql:5.7.20
```

This will create a Docker instance called `nightly-graphql`, running MySQL v5.7.20, with the root password being `password`. It also creates a database called `nightly-db`, creates a user called `nightly-dev` (with password `password`), and
assings that user full persmission onto the `nightly-db` database.
