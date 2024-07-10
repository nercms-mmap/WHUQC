# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Deployment

``` sh
# powershell
cmd /C 'set "GIT_USER=<GITHUB_USERNAME>" && yarn deploy'

# bash
GIT_USER=<GITHUB_USERNAME> yarn deploy

# If using SSH, replace GIT_USER=<GITHUB_USERNAME> with USE_SSH=true
```
