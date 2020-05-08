# Welcome to

This action will comment whenever a user creates a Pull Request.  

## Usage:

```yaml
name: you should give a changelog
on: [pull_request]

jobs:
  build:
    name: Actions
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v1.0.0
      - name: Welcome to My Repo
        uses: masterashu/welcome_to@v0.1
        with: 
          welcome_message_pr: > 
            Welcome to my repo. Thanks for creating a PR.
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```