const { defineConfig } = require("@vue/cli-service");
const Components = require("unplugin-vue-components/webpack");
const resolvers = require("unplugin-vue-components/resolvers");
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    devtool: "source-map",
    plugins: [
      require("unplugin-auto-import/webpack")({
        dts: true,
        imports: [
          // presets
          "vue",
          "vue-router",
          // custom
          {
            axios: [
              // default imports
              ["default", "axios"], // import { default as axios } from 'axios',
            ],
            "naive-ui": ["useDialog", "useMessage", "useNotification", "useLoadingBar"],
          },
        ],

        eslintrc: {
          enabled: true, // <-- this
        },
      }),
      Components({
        dts: true,
        types: [
          {
            from: "vue-router",
            names: ["RouterLink", "RouterView"],
          },
        ],
        resolvers: [resolvers.NaiveUiResolver()],
        dirs: [],
      }),
    ],
  },
});
