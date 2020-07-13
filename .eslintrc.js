module.exports = {
    root: true,
    env: {
        es6: true,
        // browser: true,
        node: true,
    },
    parserOptions: {
        ecmaVersion: 2017,
    },
    extends: ["eslint:recommended", "plugin:prettier/recommended"],
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    },
};
