circleci-cli
============

CLI for checking CircleCI build statuses with workflows support&#34;

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/circleci-cli.svg)](https://npmjs.org/package/circleci-cli)
[![CircleCI](https://circleci.com/gh/UseFedora/circleci-cli/tree/master.svg?style=shield)](https://circleci.com/gh/UseFedora/circleci-cli/tree/master)
[![Downloads/week](https://img.shields.io/npm/dw/circleci-cli.svg)](https://npmjs.org/package/circleci-cli)
[![License](https://img.shields.io/npm/l/circleci-cli.svg)](https://github.com/UseFedora/circleci-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g circleci-cli
$ circle COMMAND
running command...
$ circle (-v|--version|version)
circleci-cli/0.0.1 darwin-x64 node-v12.14.0
$ circle --help [COMMAND]
USAGE
  $ circle COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`circle hello [FILE]`](#circle-hello-file)
* [`circle help [COMMAND]`](#circle-help-command)

## `circle hello [FILE]`

describe the command here

```
USAGE
  $ circle hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ circle hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/UseFedora/circleci-cli/blob/v0.0.1/src/commands/hello.ts)_

## `circle help [COMMAND]`

display help for circle

```
USAGE
  $ circle help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_
<!-- commandsstop -->
