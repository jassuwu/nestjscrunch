# Setup
Setting up a new project is quite simple with the Nest CLI. With npm installed, you can create a new Nest project with the following commands in your OS terminal:
```
    npm i -g @nestjs/cli
    nest new project-name
```

To start the app

```
    npm run start:dev
```

Then we included Prisma in our project

```
    npm i prisma
    npm i @prisma/client
    npx prisma init
```

We wrote our schema in the schema.prisma file and then we ran the following command to generate the client

```
    npx prisma migrate dev --name init
```



