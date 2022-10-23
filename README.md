## Cypress + Cucumber
[![cypress-cucumber-demo-qa](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/count/gbfmax&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/gbfmax/runs)
## Visual Studio Code Extension
- Add Only
- Cucumber (Gherkin) Full Support
- Cypress Helper

## Command
Open Cypress IDE
```sh
npx cypress open 
```

Run test and record
```sh
npx cypress run --record --key <record-keys>
```

Run spesific tag
```sh
npx cypress -e TAGS='@case=CaseId'
```

Run spesific spec
```sh
npx cypress run --spec <spec-file-path> --browser chrome
```

## Create New Test Project
For new test project
#### Installing Cypress
Install Cypress in the test project root
```sh
npm install cypress --save-dev
```

#### Installing Cucumber
Install the @badeball/cypress-cucumber-preprocessor using the command 
```sh
npm install -D @badeball/cypress-cucumber-preprocessor
```

and install one more dependencies ‘@bahmutov/cypress-esbuild-preprocessor’ using the commands 
```sh
npm install -D @bahmutov/cypress-esbuild-preprocessor
```

Then create cypress.config.js for cucumber preprocessor
```sh
const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
    require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
    require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
    e2e: {
        async setupNodeEvents(on, config) {
            const bundler = createBundler({
                plugins: [createEsbuildPlugin(config)],
            });

            on("file:preprocessor", bundler);
            await addCucumberPreprocessorPlugin(on, config);

            return config;
        },
        specPattern: [
            "cypress/e2e/features/*.feature",
            "cypress/e2e/features/*/*.feature"],
    }
});
```