# Remix Indie Stack

![The Remix Indie Stack](https://repository-images.githubusercontent.com/465928257/a241fa49-bd4d-485a-a2a5-5cb8e4ee0abf)

Learn more about [Remix Stacks](https://remix.run/stacks).

```
npx create-remix --template remix-run/indie-stack
```

## What's in the stack

- [Fly app deployment](https://fly.io) with [Docker](https://www.docker.com/)
- Production-ready [SQLite Database](https://sqlite.org)
- Healthcheck endpoint for [Fly backups region fallbacks](https://fly.io/docs/reference/configuration/#services-http_checks)
- [GitHub Actions](https://github.com/features/actions) for deploy on merge to production and staging and release environments
- Email/Password Authentication with [cookie-based sessions](https://remix.run/docs/en/v1/api/remix#createcookiesessionstorage)
- Database ORM with [Prisma](https://prisma.io)
- Styling with [Charka && SCSS](https://chakra-ui.com/)(https://sass-lang.com/)
- End-to-end testing with [Cypress](https://cypress.io)
- Local third party request mocking with [MSW](https://mswjs.io)
- Unit testing with [Vitest](https://vitest.dev) and [Testing Library](https://testing-library.com)
- Code formatting with [Prettier](https://prettier.io)
- Linting with [ESLint](https://eslint.org)
- Static Types with [TypeScript](https://typescriptlang.org)

Not a fan of bits of the stack? Fork it, change it, and use `npx create-remix --template your/repo`! Make it your own.

## Quickstart

Click this button to create a [Gitpod](https://gitpod.io) workspace with the project set up and Fly pre-installed

[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/from-referrer/)

## Development

- Initial setup: _If you just generated this project, this step has been done for you._

You will also need to add the following to your .env file

```.env
SANITY_STUDIO_API_PROJECT_ID=<project-id>
SANITY_STUDIO_API_DATASET=<project-dataset>
SANITY_STUDIO_API_TOKEN=<project-api-token>

SHOPIFY_STORE_URL="openstudydev.myshopify.com"
SHOPIFY_STOREFRONT_API_ACCESS_TOKEN=<access-token>
SHOPIFY_API_KEY=<public-api-key>
SHOPIFY_SECRET_KEY=<secret-api-key>
```

```sh
npm run setup
```

- Start dev server:

  ```sh
  npm run dev
  ```

## Developing with Sanity V3

Unlike Sanity V2 we don't need to run Sanity on `localhost:3333` as it can run directly through Remix, with a little bit of setup.

To access the studio start the dev server (if you haven't already) and navigate to `localhost:3000/studio`

### Accessing `.env` variables

_This should be done already and is merely here for reference._

Make sure you have at least the `SANITY_STUDIO_API_PROJECT_ID` and `SANITY_STUDIO_API_DATASET` in your `.env` file. You will also need to make sure that you are exporting them from the `loader()` function in `root.tsx`.

Next import them into you main `App` component and assign them to the `document` object through a `script` tag.

**A contrived example below:**

```ts
export const loader: LoaderFunction = async ({ request }) => {
  return json<LoaderData>({
    SANITY_STUDIO_API_PROJECT_ID: process.env.SANITY_STUDIO_API_PROJECT_ID,
    SANITY_STUDIO_API_DATASET: process.env.SANITY_STUDIO_API_DATASET,
  });
};

export default function App() {
  const { SANITY_STUDIO_API_PROJECT_ID, SANITY_STUDIO_API_DATASET } =
    useLoaderData();

  return (
    <Document>
      <script
        dangerouslySetInnerHTML={{
          __html: `document.env = ${JSON.stringify({
            SANITY_STUDIO_API_PROJECT_ID,
            SANITY_STUDIO_API_DATASET,
          })}`,
        }}
      />
      <Outlet />
    </Document>
  );
}
```

This is required because the project ID and the dataset from Sanity need to be accessed by both the server and the client. By assigning them to the docuemnt object we can reference them safely like this:

```ts
export const SANITY_STUDIO_API_PROJECT_ID =
  typeof document !== "undefined"
    ? document.env.SANITY_STUDIO_API_PROJECT_ID
    : process.env.SANITY_STUDIO_API_PROJECT_ID;
```

See [document guard](https://remix.run/docs/en/v1/guides/constraints#document-guard) in Remix for more details on this approach to accessing secrets in the client bundle.

## Deployment

This Remix Stack comes with two GitHub Actions that handle automatically deploying your app to production and staging and release environments.

Prior to your first deployment, you'll need to do a few things:

- [Install Fly](https://fly.io/docs/getting-started/installing-flyctl/)

- Sign up and log in to Fly

  ```sh
  fly auth signup
  ```

  > **Note:** If you have more than one Fly account, ensure that you are signed into the same account in the Fly CLI as you are in the browser. In your terminal, run `fly auth whoami` and ensure the email matches the Fly account signed into the browser.

- Create three apps on Fly, one for staging and one for release and one for production:

  ```sh
  fly create osc-sanity-remix
  fly create osc-sanity-remix
  ```

  - Initialize Git.

  ```sh
  git init
  ```

- Create a new [GitHub Repository](https://repo.new), and then add it as the remote for your project. **Do not push your app yet!**

  ```sh
  git remote add origin <ORIGIN_URL>
  ```

- Add a `FLY_API_TOKEN` to your GitHub repo. To do this, go to your user settings on Fly and create a new [token](https://web.fly.io/user/personal_access_tokens/new), then add it to [your repo secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets) with the name `FLY_API_TOKEN`.

- Add a `SESSION_SECRET` to your fly app secrets, to do this you can run the following commands:

  ```sh
  fly secrets set SESSION_SECRET=$(openssl rand -hex 32) --app osc-sanity-remix
  fly secrets set SESSION_SECRET=$(openssl rand -hex 32) --app osc-sanity-remix-staging
  fly secrets set SESSION_SECRET=$(openssl rand -hex 32) --app osc-sanity-remix-release
  ```

  If you don't have openssl installed, you can also use [1password](https://1password.com/password-generator/) to generate a random secret, just replace `$(openssl rand -hex 32)` with the generated secret.

- Create a persistent volume for the sqlite database for both your staging and production and release environments. Run the following:

  ```sh
  fly volumes create data --size 1 --app osc-sanity-remix
  fly volumes create data --size 1 --app osc-sanity-remix-staging
  fly volumes create data --size 1 --app osc-sanity-remix-release
  ```

Now that everything is set up you can commit and push your changes to your repo. Every commit to your `main` branch will trigger a deployment to your production environment, and every commit to your `dev` branch will trigger a deployment to your staging environment and every commit to your `release` branch will trigger a deployment to your release enviroment

- When cloning the repo, do not forget to run the "flyctl auth token" and place the value iinside github secrets for ci/cd to work (FLY_API_TOKEN), furthermore, you should create (CHROMATIC_PROJECT_TOKEN) by starting a new project in chromatic and place it inside github secrets, finally, create a FLY_PR_BRANCH_SESSION_SECRET (any value) and place it inside github secrets

### Connecting to your database

The sqlite database lives at `/data/sqlite.db` in your deployed application. You can connect to the live database by running `fly ssh console -C database-cli`.

### Getting Help with Deployment

If you run into any issues deploying to Fly, make sure you've followed all of the steps above and if you have, then post as many details about your deployment (including your app name) to [the Fly support community](https://community.fly.io). They're normally pretty responsive over there and hopefully can help resolve any of your deployment issues and questions.

## GitHub Actions

We use GitHub Actions for continuous integration and deployment. Anything that gets into the `main` branch will be deployed to production after running tests/build/etc. Anything in the `dev` branch will be deployed to staging.

## Testing

### Cypress

We use Cypress for our End-to-End tests in this project. You'll find those in the `cypress` directory. As you make changes, add to an existing file or create a new file in the `cypress/e2e` directory to test your changes.

We use [`@testing-library/cypress`](https://testing-library.com/cypress) for selecting elements on the page semantically.

To run these tests in development, run `npm run test:e2e:dev` which will start the dev server for the app as well as the Cypress client. Make sure the database is running in docker as described above.

We have a utility for testing authenticated features without having to go through the login flow:

```ts
cy.login();
// you are now logged in as a new user
```

We also have a utility to auto-delete the user at the end of your test. Just make sure to add this in each test file:

```ts
afterEach(() => {
  cy.cleanupUser();
});
```

That way, we can keep your local db clean and keep your tests isolated from one another.

### Vitest

For lower level tests of utilities and individual components, we use `vitest`. We have DOM-specific assertion helpers via [`@testing-library/jest-dom`](https://testing-library.com/jest-dom).

### Type Checking

This project uses TypeScript. It's recommended to get TypeScript set up for your editor to get a really great in-editor experience with type checking and auto-complete. To run type checking across the whole project, run `npm run typecheck`.

### Linting

This project uses ESLint for linting. That is configured in `.eslintrc.js`.

### Formatting

We use [Prettier](https://prettier.io/) for auto-formatting in this project. It's recommended to install an editor plugin (like the [VSCode Prettier plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)) to get auto-formatting on save. There's also a `npm run format` script you can run to format all files in the project.
