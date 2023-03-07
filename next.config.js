/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
module.exports = nextConfig


module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/fonts/',
          outputPath: 'static/fonts/',
          name: '[name].[ext]',
          esModule: false,
        },
      },
    });
    return config;
  },
  images:{
    domains:["res.cloudinary.com"]
  },
  env: {
    MONGODB_URI:
      "mongodb+srv://vince75019:vince75019@food.v6wdjjn.mongodb.net/foodOrder?retryWrites=true&w=majority",
    ADMIN_USERNAME: "admin",
    ADMIN_PASSWORD: "vince",
    TOKEN: "SWdw4CV||663Z{p3|ZXtP%0k6Ejj;F",
  },
};



