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

#### Step 3. Set each variable on `.env.local`:

- `STRAPI_PREVIEW_SECRET` can be any random string (but avoid spaces), like `MY_SECRET` - this is used for [Preview Mode](https://nextjs.org/docs/advanced-features/preview-mode).
- `NEXT_PUBLIC_STRAPI_API_URL` should be set as `http://localhost:1337` (no trailing slash).

### Step 4. Create an `Author` collection

From **Content-Types Builder**, **create a new collection type**.

- The display name should be `Author`.

Next, add these fields (you don't have to modify the settings):

- **Text** field called **`name`** (**Short text**)
- **Media** field called **`picture`** (**Single media**)

Then click **Save**.

### Step 5. Create a `Post` collection

From **Content-Types Builder**, **create a new collection type**.

- The display name should be `Post`.

Next, add these fields (you don't have to modify the settings unless specified):

- **Text** field called **`title`** (**Short text**)
- **Rich Text** field called **`content`** (**Multiple-paragraph Text**)
- **Text** field called **`excerpt`** (**Long text**)
- **Media** field called **`coverImage`** (**Single media**)
- **Date** field called **`date`** (type should be **date**)
- **UID** field called **`slug`** (attached field should be **title**)
- **Relation** field called **`author`** (Post **has one** Author)
- **Enumeration** field `status` (the values should be **published** and **draft**)

### Step 6. Set permissions

From **Settings, Users & Permissions, Roles**, edit the **Public** role.

Then select: `count`, `find`, and `findone` permissions for both **Author** and **Post**. Click **Save**.

### Step 7. Populate Content

Select **Author** and click **Add New Author**.

- You just need **1 Author entry**.
- Use dummy data for the name.
- For the image, you can download one from [Unsplash](https://unsplash.com/).

Next, select **Posts** and click **Add New Post**.

- We recommend creating at least **2 Post records**.
- Use dummy data for the text.
- You can write markdown for the **content** field.
- For the images, you can download ones from [Unsplash](https://unsplash.com/).
- Pick the **Author** you created earlier.
- Set the **status** field to be **published**.


### Usage Run the whole project with one command. <a name = "usage"></a>

```
yarn dev
```
