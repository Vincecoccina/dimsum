const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if ((phase = PHASE_DEVELOPMENT_SERVER)) {
    return {
      images: {
        domains: ["res.cloudinary.com"],
      },
      env: {
        MONGODB_URI:
          "mongodb+srv://vince75019:vince75019@food.v6wdjjn.mongodb.net/foodOrder?retryWrites=true&w=majority",
        ADMIN_USERNAME: "admin",
        ADMIN_PASSWORD: "vince",
        TOKEN: "SWdw4CV||663Z{p3|ZXtP%0k6Ejj;F",
      },
    };
  }

  return {
    images: {
      domains: ["res.cloudinary.com"],
    },
    env: {
      MONGODB_URI:
        "mongodb+srv://vince75019:vince75019@food.v6wdjjn.mongodb.net/foodOrder?retryWrites=true&w=majority",
      ADMIN_USERNAME: "admin",
      ADMIN_PASSWORD: "vince",
      TOKEN: "SWdw4CV||663Z{p3|ZXtP%0k6Ejj;F",
    },
  };
};
