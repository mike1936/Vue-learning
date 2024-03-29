module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'

        // eslint缩进配置
        "indent": "off",
        "vue/script-indent": [
            "error",
            4,
            { "baseIndent": 1 }
        ]
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}
