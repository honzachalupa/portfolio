const path = require('path');
const config = require('./src/app-config');
const HtmlPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const CleanPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (/* env, argv */) => {
    // const isDevelopmentMode = argv.mode === 'development';

    // const workbox = (!isDevelopmentMode && config.caching && config.caching.strategy) ? (
    const workbox = (config.caching && config.caching.strategy) ? (
        new WorkboxPlugin.GenerateSW({
            swDest: 'sw.js',
            runtimeCaching: [{
                urlPattern: /\.(js|css|html|svg|jpg|jpeg|png|ico|json|xml|webmanifest)$/,
                handler: config.caching.strategy
            }],
            clientsClaim: true,
            skipWaiting: true
        })
    ) : null;

    return {
        entry: './src/app/App.jsx',
        devtool: 'source-map',
        devServer: {
            contentBase: path.resolve(__dirname, 'dist'),
            historyApiFallback: true
        },
        output: {
            filename: 'js/bundle.js',
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/'
        },
        plugins: [
            new CleanPlugin(['dist']),
            new HtmlPlugin({
                template: path.resolve(__dirname, 'src/index.html'),
                filename: 'index.html',
                inject: true,
                properties: {
                    title: config.name,
                    accentColor: config.accentColor
                }
            }),
            new StyleLintPlugin(),
            new CopyWebpackPlugin([
                { from: 'src/static' },
                { from: 'src/images', to: 'images' }
            ]),
            workbox,
            new WebpackPwaManifest({
                name: config.name,
                short_name: config.nameShort,
                description: config.description,
                icons: [
                    {
                        src: path.resolve('src/images/favicon/android-chrome-192x192.png'),
                        sizes: [192],
                        destination: 'images/favicon'
                    },
                    {
                        src: path.resolve('src/images/favicon/android-chrome-512x512.png'),
                        sizes: [512],
                        destination: 'images/favicon'
                    }
                ],
                background_color: config.accentColor,
                ios: {
                    'apple-mobile-web-app-status-bar-style': 'black-translucent'
                }
            })
        ].filter(Boolean),
        module: {
            rules: [
                {
                    test: /\.jsx$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: [
                                    'react',
                                    ['env', {
                                        targets: {
                                            browsers: ['last 2 versions']
                                        }
                                    }]
                                ],
                                plugins: ['transform-object-rest-spread', 'react-component-data-attribute']
                            }
                        },
                        'eslint-loader'
                    ]
                }, {
                    test: /\.scss$/,
                    exclude: /node_modules/,
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        }, {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                                data: getCssVariables()
                            }
                        },
                        'postcss-loader'
                    ]
                }, {
                    test: /\.svg$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                name: 'images/[name].[ext]'
                            }
                        }
                    ]
                }, {
                    test: /\.(png|jp(e?)g)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: 'images/[name].[ext]'
                            }
                        }
                    ]
                }
            ]
        },
        resolve: {
            extensions: ['.js', '.jsx', '.css', '.scss', '.svg', '.jpg', '.jpeg', '.png'],
            alias: {
                Components: path.resolve(__dirname, 'src/app/components/'),
                Layouts: path.resolve(__dirname, 'src/app/layouts/'),
                Pages: path.resolve(__dirname, 'src/app/pages/'),
                Images: path.resolve(__dirname, 'src/images/'),
                Icons: path.resolve(__dirname, 'src/images/icons/'),
                App: path.resolve(__dirname, 'src/app/App.jsx'),
                helpers: path.resolve(__dirname, 'src/app/helpers.js'),
                'app-config': path.resolve(__dirname, 'src/app-config.js')
            }
        }
    };
};

function getCssVariables() {
    const accentColor = `$accent-color: ${config.accentColor}`;
    const otherColors = Object.keys(config.cssVariables).map(key => {
        return `$${key}: ${config.cssVariables[key]}`;
    }).join('; ');

    return `${accentColor}; ${otherColors};`;
}
