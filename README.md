# Skrzepij Portfolio Page

![Dev Build Status](https://github.com/skrzepij/skrzepij.github.io/actions/workflows/main.yml/badge.svg?branch=develop)

This is the repo for my personal website: 

Available online versions:
- https://skrzepij.github.io - staging (latest develop build)
- http://skrzepij.pl - production

## Development

Website is created with latest Gatsby build (3.4)

All source files should be placed on `develop` branch.

Every new feature should be created on new `feature` branch,
which should be merged (via PR) to `develop` branch after finishing the work.

## Build & deploy

Linting, testing, building and deploying process is automated by ~~[Travis CI](https://travis-ci.org/)~~ [Github Actions](https://github.com/features/actions).

It will be activated every time, when changes affect `develop` branch.

After merging feature branch to develop, new staging version will be created. 
This version is hosted on [GitHub Pages](https://pages.github.com/) and all hosted files can be found on `staging` branch.

## Contribution

You can contribute to the website by submitting pull requests or creating issues.
