module.exports = {
    apps: [
        {
            name: "express-app",
            script: "./app.js",
            instance_var: "INSTANCE_ID",
            watch_options: {
                usePolling: true
            },
            env: {
                NODE_ENV: "development",
            },
            env_production: {
                NODE_ENV: "production",
            },
            ignore_watch : ["node_modules"]
        }
    ]
}