import * as core from '@actions/core'
import {PrService} from './pr'
import * as github from '@actions/github'
import {readGithubToken} from './token'

async function run(): Promise<void> {
  try {
    const message: string = core.getInput('welcome_message', {required: true})
    const _prService = new PrService(
      new github.GitHub(readGithubToken()),
      github.context,
      message
    )
    // Comment on PR
    await _prService.addCommentToPr()
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
