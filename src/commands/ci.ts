import { Command, flags } from '@oclif/command'
import {getWorkflowsAndJobs} from '../lib/circleci'

export default class Ci extends Command {
  static description = 'Get your last builds status'

  static examples = [
    `$ circle ci
`,
  ]

  static flags = {
    help: flags.help({ char: 'h' }),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({ char: 'n', description: 'name to print' }),
    // flag with no value (-f, --force)
    force: flags.boolean({ char: 'f' }),
  }

  static args = [{ name: 'file' }]

  async run() {
    const { args, flags } = this.parse(Ci)

    const name = flags.name || 'world'
    const data = await getWorkflowsAndJobs("47243bde-b92c-4aab-8524-a5f5869e8cdd")
    console.log(data)

    this.log(`hello ${name} from ./src/commands/hello.ts`)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }
}
