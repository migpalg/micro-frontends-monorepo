# Monorepo Scripts

This sections have many utils that can improve your workflow and keep things
simple

## API

To use this command you only need `node >= 12` and run the following command
followed by the subcommands defined below:

```bash
node scripts/admin/admin [command]
```

Or you can use `pnpm` to run commands:

```bash
pnpm admin -- [command]
```

If you need help directly from the CLI just use the following command:

```bash
node scripts/admin/admin --help
```

### `create`

Creates a new package

#### Usage

```bash
admin create [package-name]
```

#### Args

|       Arg        | Description                           | Default     |
| :--------------: | ------------------------------------- | ----------- |
| `[package-name]` | Name for the new package              | `undefined` |
|   `--template`   | Project template that you want to use | `vanilla`   |

### `remove`

Safely remove a package. Checks if any other package depends on the package that
will remove and will don't allow remove package untils is not necessary to make
other packages work.

#### Usage

```bash
admin remove [package-name]
```

#### Args

|       Arg        | Description                                       | Default     |
| :--------------: | ------------------------------------------------- | ----------- |
| `[package-name]` | Name of the package to remove                     | `undefined` |
|    `--verify`    | If true, verifies other packages to remove safely | `true`      |
