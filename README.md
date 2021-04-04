<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/sophiabrandt/nextjs-ecommerce">
    <img src="logo.png" alt="Logo">
  </a>

  <h3 align="center">Next.js E-commerce</h3>

  <p align="center">
    Example web shop built with Next.js and Keystone.js
    <br />
    <a href="https://github.com/sophiabrandt/nextjs-ecommerce"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://nextjs-ecommerce-rouge.vercel.app/">View Demo</a>
    ·
    <a href="https://github.com/sophiabrandt/nextjs-ecommerce/issues">Report Bug</a>
    ·
    <a href="https://github.com/sophiabrandt/nextjs-ecommerce/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#demo">Demo</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#tests">Tests</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

**Next.js E-commerce** is an example online shop built with React.js and Keystone.js.

### Built With

- [Next.js](https://nextjs.org/) (React.js framework)
- [Typescript](https://www.typescriptlang.org/) with `strict:true`
- [Keystone.js](https://www.keystonejs.com/)
- [Mongo DB](https://www.mongodb.com/cloud/atlas)
- [Chakra UI](https://chakra-ui.com/)
- [Stripe](https://stripe.com)
- [Mailgun](https://mailgun.com)

**Some features**:

- Role-based permissions (only a user with permissions can see "Edit" and "Delete" button for a product and can perform these actions, etc.)
- [Incremental Static Site Generation](https://nextjs.org/docs/basic-features/data-fetching#incremental-static-regeneration) for product pages
- [Server-Side Rendering](https://nextjs.org/docs/basic-features/pages#server-side-rendering) for showing orders and updating products
- [Advanced Usage of Apollo Cache](https://www.apollographql.com/docs/react/caching) for a snappy user experience by manipulating the Apollo Cache with `cache.readQuery`, `cache.writeQuery`, `cache.modify` and `cache.evict`
- Dockerized Deployment via Docker Swarm
- Testing with `react-testing-library` and Jest

<!-- DEMO -->

## Demo

I've deployed a demo (via GitOps/Gitlab CI) to a $5 [Upcloud VPS](https://upcloud.com/) ([How?](https://www.rockyourcode.com/traefik-2-docker-swarm-setup-with-docker-socket-proxy-and-more/)).

Backend: [https://nextjs-ecommerce-keystone.repository.host](https://nextjs-ecommerce-keystone.repository.host/)  
GraphQL API: [https://nextjs-ecommerce-keystone.repository.host/api/graphql](https://nextjs-ecommerce-keystone.repository.host/api/graphql)  

Frontend: [https://nextjs-ecommerce.repository.host](https://nextjs-ecommerce.repository.host/)

The password reset uses a sandboxed Mailgun account and only works with one email: dzwjxgqv@sharklasers.com

To read the password reset email, go to [https://www.guerrillamail.com/](https://www.guerrillamail.com/) and set the inbox to "dzwjxgqv@sharklasers.com".

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these steps.

### Prerequisites

- yarn v1

  ```sh
  npm install yarn -g
  ```

- Docker and Docker Compose

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/sophiabrandt/nextjs-ecommerce.git
   ```

2. Install NPM packages
   ```sh
   yarn install
   ```

3. Run docker-compose:
   ```sh
   docker-compose up -d
   ```
4. Create configuration file for the backend (`backend/.env`), see [`backend/sample.env`](./backend/sample.env).

5. Create configuration file for the frontend (`frontend/.env.local`), see [`frontend/sample.env`](./frontend/sample.env).

<!-- USAGE EXAMPLES -->

## Usage

```sh
cd backend && yarn run dev
cd frontend && yarn run dev
```

Go to [http://localhost:7771](http://localhost:7771) for the Keystone CMS (backend) and [http://localhost:7777](http://localhost:7777) for the Next.js application (frontend).

<!-- TESTS -->

## Tests

```sh
cd backend && yarn run test
cd frontend && yarn run test
```

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/sophiabrandt/nextjs-ecommerce/issues) for a list of proposed features (and known issues).

<!-- CONTACT -->

## Contact

Sophia Brandt - [@hisophiabrandt](https://twitter.com/hisophiabrandt)

Project Link: [https://github.com/sophiabrandt/nextjs-ecommerce](https://github.com/sophiabrandt/nextjs-ecommerce)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [Wes Bos](https://wesbos.com/)
- [Kent C. Dodds](https://epicreact.dev/)
- [Paulin Trognon](https://paulintrognon.fr/blog/typescript-prettier-eslint-next-js)
