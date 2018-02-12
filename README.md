# Jest code-along template

### Getting started
- Fork and clone the repo, `cd` into the repo
- Run `yarn install`
    - this will install the dependencies listed in `package.json`
- To run the tests, run `yarn test` in your terminal.
    - Inside `package.json`, we have defined `yarn test` to execute the `jest` command, which will run all the tests in the project.
    - We have also defined 2 additional commands:
        - `yarn test:watch`, which is executing the `jest --watch` command. The `--watch` option will rerun the tests everytime you save a file.
        - `yarn test:coverage`, which is executing the `jest --coverage` command. The `--coverage` option produces a test coverage report after running the tests
- To quit the test runner, hit `q` in the terminal where `jest` is running.
