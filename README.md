cli-issue
=========

demo of problem with cli and nock tests when commands are spaced

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/cli-issue.svg)](https://npmjs.org/package/cli-issue)
[![Downloads/week](https://img.shields.io/npm/dw/cli-issue.svg)](https://npmjs.org/package/cli-issue)
[![License](https://img.shields.io/npm/l/cli-issue.svg)](https://github.com/kpayson/cli-issue/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g cli-issue
$ cli-issue COMMAND
running command...
$ cli-issue (-v|--version|version)
cli-issue/0.0.0 darwin-x64 node-v14.15.4
$ cli-issue --help [COMMAND]
USAGE
  $ cli-issue COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`cli-issue hello [FILE]`](#cli-issue-hello-file)
* [`cli-issue help [COMMAND]`](#cli-issue-help-command)

## `cli-issue hello [FILE]`

describe the command here

```
USAGE
  $ cli-issue hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ cli-issue hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/kpayson/cli-issue/blob/v0.0.0/src/commands/hello.ts)_

## `cli-issue help [COMMAND]`

display help for cli-issue

```
USAGE
  $ cli-issue help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_
<!-- commandsstop -->
