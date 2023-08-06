# AI Companion

This is a repository for AI Companion: Next.js 13.4, React, TailwindCSS, ShadCN UI, MongoDB, Prisma.

Key Features:

- Talk with any companion of your choise
- Ability to create companion
- MongoDB with Prisma Adapter
- Credential authentication with Clerk
- Google authentication with Clerk
- Client form validation and handling using react-hook-form
- Tailwind design for sleek UI
- Tailwind animations and transition effects
- Full responsiveness for all devices

# Final Version

To visit the website, [click here.](https://ai-companion-ss.vercel.app)

### Cloning the repository

```shell
git https://github.com/ShethSamarth/ai-companion.git
```

### Install packages

```shell
npm install
```

### Setup .env file

```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

OPENAI_API_KEY=
REPLICATE_API_TOKEN=

PINECONE_API_KEY=
PINECONE_ENVIRONMENT=
PINECONE_INDEX=

UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=

DATABASE_URL=
```

### Setup prisma

```shell
npx prisma generate
npx prisma db push
```

### Setup Categories

```shell
node scripts/seed.ts
```

### Start the app

```shell
npm run dev
```
