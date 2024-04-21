module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "standard-with-typescript"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "project": 'tsconfig.json',

        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        // "@typescript-eslint/restrict-template-expressions": "error",
        // "jsx-a11y/anchor-is-valid": "off"


    }
}
