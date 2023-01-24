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

We created AuthDto interface in the src/auth/dto dir

We installed class-validator and class-transformer

```
    npm i class-validator class-transformer
```

Added validators in the AuthDto

```
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;
```

added the following to the main.ts file

```
    app.useGlobalPipes(new ValidationPipe());
```
add white list to the ValidationPipe

```
    app.useGlobalPipes(new ValidationPipe({
        whitelist: true,
    }));
```

Installed argon2 for hashing passwords

```
    npm i argon2
```


Now inside auth/auth.service.ts we added the code to do the following

1. Generate the password hash
2. Save the new user in the DB
3. Return the saved user


We installed @nestjs/config and added the following to the main.ts file to load the .env file

```
    npm i @nestjs/config
```

Now we install passport and @nestjs/passport

```
    npm i passport @nestjs/passport
```

Then we installed passport-jwt and @nestjs/jwt with types

```
    npm i passport-jwt @nestjs/jwt
    npm i -D @types/passport-jwt
```

Adding AuthGuard to the user.controller.ts and jwt.strategy.ts

```
    @UseGuards(AuthGuard('jwt'))
    PassportStrategy(Strategy, 'jwt')
```

Write a validate function in the jwt.strategy.ts

```
    async validate(payload: any) {
        return { userId: payload.sub, username: payload.username };
    }
```

Abstract the guard into a separate file


Make a get-user.decorator.ts file


Install pactumJS for e2e testing

```
    npm i -D pactum
```