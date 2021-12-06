/**
 * This script allows you to create a new package in the monorepo
 */

// @packages
const yargs = require('yargs');
const path = require('path');

// @json
const pkg = require('../../package.json');

const scope = /(?<=@)(.*?)(?=\/)/g.exec(pkg.name)[0];
const formatPackage = (name) => ({
  path: `${scope}-${name}`,
  name: `@${scope}/${name}`,
});

yargs
  .scriptName('admin')
  .usage('$0 <cmd> [args]')
  .command(
    'hello [name]',
    'welcome ter yargs!',
    (yargs) => {
      yargs.positional('name', {
        type: 'string',
        default: 'Foo',
        describe: 'the name to say hello to',
      });
    },
    function (argv) {
      console.log(`hello, ${argv.name}!`);
    },
  )
  .command(
    'create [package-name]',
    'Creates a new package',
    (yargs) =>
      yargs.positional('package-name', {
        type: 'string',
        describe: 'The new package name',
      }),
    function (argv) {
      const newPkg = formatPackage(argv['package-name']);
      const packagePath = path.resolve(
        __dirname,
        '../../packages/',
        newPkg.path,
      );
      console.log(
        'creating new package called ' + newPkg.name + ' on ' + packagePath,
      );
    },
  )
  .help().argv;
