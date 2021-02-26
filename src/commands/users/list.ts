import { Command, flags } from '@oclif/command'

export default class List extends Command {
    static description = 'describe the command here'

    static examples = [
        `$ cli-issue users:list`,
    ]

    static flags = {
        help: flags.help({ char: 'h' }),
        // flag with a value (-n, --name=VALUE)
        name: flags.string({ char: 'n', description: 'name to print' }),
        // flag with no value (-f, --force)
        force: flags.boolean({ char: 'f' }),
    }

    // static args = [{name: 'file'}]

    async run() {
        // const {args, flags} = this.parse(List)

        const users = [
            { id: 1, first: 'John', last: 'Smith' },
            { id: 2, first: 'Mike', last: 'Jones' },
        ]

        this.log(JSON.stringify(users))
    }
}
