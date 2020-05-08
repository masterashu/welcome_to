import * as github from '@actions/github'
import {Context} from '@actions/github/lib/context'
import {WebhookPayload} from '@actions/github/lib/interfaces'

export class PrService {
  constructor(
    private _octokit: github.GitHub,
    private _githubContext: Context,
    private welcomeMessage: string
  ) {}

  getPr(): WebhookPayload {
    const pr = this._githubContext.payload
    if (pr.pull_request) {
      return pr
    } else {
      throw new Error('Not a PR')
    }
  }

  async addCommentToPr(): Promise<void> {
    await this._octokit.issues.createComment({
      ...github.context.repo,
      // eslint-disable-next-line @typescript-eslint/camelcase
      issue_number: this.getPr().pull_request?.number ?? 0,
      body: this.welcomeMessage
    })
  }
}
