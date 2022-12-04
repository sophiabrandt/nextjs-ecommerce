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
      <a href="#screenshots">Screenshots</a>
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
- [React Hook Form](https://react-hook-form.com/)
- [Keystone.js](https://www.keystonejs.com/)
- [Mongo DB](https://www.mongodb.com/cloud/atlas)
- [Chakra UI](https://chakra-ui.com/)
- [Stripe](https://stripe.com)
- [Mailgun](https://mailgun.com)

**Some features**:

- Role-based Permissions (only a user with permissions can see "Edit" and "Delete" button for a product and can perform these actions, etc.)
- Debounced Product Search with [DownshiftJS](https://github.com/downshift-js/downshift)
- [Incremental Static Site Generation](https://nextjs.org/docs/basic-features/data-fetching#incremental-static-regeneration) for product pages
- [Server-Side Rendering](https://nextjs.org/docs/basic-features/pages#server-side-rendering) for showing orders and updating products
- [Advanced Usage of Apollo Cache](https://www.apollographql.com/docs/react/caching/cache-configuration/) for a snappy user experience by manipulating the Apollo Cache with `cache.readQuery`, `cache.writeQuery`, `cache.modify` and `cache.evict`
- Form Validation with [React Hook Form](https://react-hook-form.com/)
- Automatic Deployment via Docker Swarm and GitLab CI
- Testing with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) and Jest

<!-- SCREENSHOTS  -->

## Screenshots

You can find more screenshots in the [screenshots/](screenshots/) folder.

![Main Page](screenshots/nextjs-ecommerce.png)

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

If you want to use [Caddy](https://caddyserver.com/), you can use the included [Caddyfile](Caddyfile) for automatic HTTPS certificates in local development.

```sh
sudo caddy run
```

Node.js will complain about the missing certificate issuer. For _local development_, ignore the error with `NODE_TLS_REJECT_UNAUTHORIZED = '0'`:


```sh
cd frontend
NODE_TLS_REJECT_UNAUTHORIZED = '0' yarn build
NODE_TLS_REJECT_UNAUTHORIZED = '0' yarn start
```

The frontend app is available at [https://frontend.app.localhost](https://frontend.app.localhost/orders). You can reach the backend app at [https://backend.app.localhost/](https://backend.app.localhost/).

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
- [Paulin Trognon](https://paulintrognon.fr/blog/typescript-prettier-eslint-next-js)
