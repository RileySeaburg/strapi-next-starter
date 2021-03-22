# Strapi Next Starter Template
## Backend & API

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Contributing](../CONTRIBUTING.md)

## About <a name = "about"></a>

This is the backend integration for the Strapi Next Starter template.

This backend integration uses docker to synchronize the services into one container. 
What does this mean for you?

A Better developer experience.

## Getting Started <a name = "getting_started"></a>
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

You can't just download this repo and get it running. 
There are a few minor requirements to run the stack. 
However for the backend all you need is Docker!

#### Install Docker

[Click Here To Install Docker](https://docs.docker.com/get-docker/)

### Get Up & Running

Navigate to the backend directory.
```
cd backend
```

Install & Run Strapi & Postgres on a docker container.
```
docker-compose up
```