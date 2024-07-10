# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Deployment

Before publishing your changes to the live site, please push your changes to the `master` branch so the `master` branch stays in sync. The following script publishes your changes.

``` sh
# powershell
cmd /C 'set "GIT_USER=<GITHUB_USERNAME>" && yarn deploy'

# bash
GIT_USER=<GITHUB_USERNAME> yarn deploy

# If using SSH, replace GIT_USER=<GITHUB_USERNAME> with USE_SSH=true, like:
cmd /C 'set "USE_SSH=true" && yarn deploy'
```
