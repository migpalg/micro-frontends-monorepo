# Monorepo for Micro UIs

**⚠️This purpose is currently in development⚠️**

This repository contains a proposal for managing and creating monorepos for
micro front-ends.

In this project are tree microfrontends, one built in top on React, Angular and
Svelte, each one has his own configuratio and can be imported to any app
contained in the `./apps` folder.

----

## 🚀 Getting started

To install the dependencies, you need to use [`pnpm`](https://pnpm.io/) as package manager. Please install it and run the following command:

```bash
pnpm install
```

This command will download all dependencies listed in the projects
`package.json`.

**NOTE:** You can run this project with any node package manager but is highly
recommended to do that with `pnpm` or `yarn`.

----

## 🛫 Running an application

This repository contains a script called `run` that allow runs storybooks, and
serve applications in development mode.

To run that command, please type this in your terminal:

```bash
pnpm admin run @root/main-app
```

This command will run the project located in `./apps/main` with his own
configuration, you need to put in the command
