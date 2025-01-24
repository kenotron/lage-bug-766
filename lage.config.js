module.exports = {
  npmClient: "yarn",
  pipeline: {
    "#install-all": {
      type: "npmScript",
      inputs: [],
      cache: false,
    },
    build: ["#install-all"],
    test: ["#install-all", "^build"],
    "echo-something": [],
    "b#build": { dependsOn: ["#install-all", "echo-something"], cache: false }
  },
};
