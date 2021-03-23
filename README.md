# Strapi Next Starter Template
## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Contributing](./CONTRIBUTING.md)

## About <a name = "about"></a>

This is a starter template for creating fullstack javascript applications. 
The template includes technologies such as Docker, NextJS, Strapi, and PostgreSQL.
With authentication and routing built in you should have no problem getting started building.
Stop looking around for other frameworks or stacks to please your itch. 

This stack has everything you need as a javascript developer and it's here right now. 

Fork this repo today and start hacking. 

## Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

 - NodeJS [Click Here To Install](https://nodejs.org/en/download/)
 - Yarn   [Click Here To Install](https://classic.yarnpkg.com/en/docs/install/)
 - Docker [Click Here To Install](https://docs.docker.com/engine/install/) 
 - (Windows Only) WSL [Click Here To Install WSL](https://docs.microsoft.com/en-us/windows/wsl/install-win10)
> **Windows subsystem for linux must be installed for a successful windows installation! **


### Installing

A step by step series of examples that tell you how to get a development env running.

#### Step 1. Clone the repository

```
git clone https://github.com/RileySeaburg/strapi-next-starter
```

#### Step 2 Set client side environment variables
CD into the frontend client side directory holding your NexJS application.
```
cd frontend
```

Copy the `.env.local.example` file in this directory to `.env.local` (which will be ignored by Git):

```bash
cp .env.local.example .env.local
```

Then set each variable on .env.local:

- STRAPI_PREVIEW_SECRET can be any random string (but avoid spaces, like MY_SECRET - this is used for Preview Mode.
- NEXT_PUBLIC_STRAPI_API_URL should be set as http://localhost:1337 (no trailing slash).

Update Environment values
```
cp .env.local.example .env.local
```

Then set each variable on `.env.local`:

- `STRAPI_PREVIEW_SECRET` can be any random string (but avoid spaces), like `MY_SECRET` - this is used for [Preview Mode](https://nextjs.org/docs/advanced-features/preview-mode).
- `NEXT_PUBLIC_STRAPI_API_URL` should be set as `http://localhost:1337` (no trailing slash).

### The whole project can run with one command.

```
yarn dev
```



