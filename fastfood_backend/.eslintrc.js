module.exports = {
    "env": {
        "es2021": true,
        "node": true
    },
    "parser": '@typescript-eslint/parser',
    "plugins": ['@typescript-eslint'],
    "extends": [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "rules": {
    }
}
