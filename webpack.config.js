
module.exports = {
    mode: "development",

    module: {
        rules: [{
            test: /\.PNG$/,
            use: [{loader: 'file-loader'}]
        }]
    }
}