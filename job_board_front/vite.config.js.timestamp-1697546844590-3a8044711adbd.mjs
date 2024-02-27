// vite.config.js
import { defineConfig } from "file:///C:/Users/u/Desktop/leonew/T-WEB-501-PAR_41/job_board_front/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/u/Desktop/leonew/T-WEB-501-PAR_41/job_board_front/node_modules/@vitejs/plugin-react/dist/index.mjs";
import tailwindcss from "file:///C:/Users/u/Desktop/leonew/T-WEB-501-PAR_41/job_board_front/node_modules/tailwindcss/lib/index.js";
import autoprefixer from "file:///C:/Users/u/Desktop/leonew/T-WEB-501-PAR_41/job_board_front/node_modules/autoprefixer/lib/autoprefixer.js";
var vite_config_default = defineConfig({
  plugins: [react()],
  ss: {
    postcss: {
      plugins: [
        tailwindcss,
        // Add Tailwind CSS plugin
        autoprefixer
        // Add Autoprefixer plugin
      ]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx1XFxcXERlc2t0b3BcXFxcbGVvbmV3XFxcXFQtV0VCLTUwMS1QQVJfNDFcXFxcam9iX2JvYXJkX2Zyb250XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx1XFxcXERlc2t0b3BcXFxcbGVvbmV3XFxcXFQtV0VCLTUwMS1QQVJfNDFcXFxcam9iX2JvYXJkX2Zyb250XFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy91L0Rlc2t0b3AvbGVvbmV3L1QtV0VCLTUwMS1QQVJfNDEvam9iX2JvYXJkX2Zyb250L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xyXG5pbXBvcnQgdGFpbHdpbmRjc3MgZnJvbSAndGFpbHdpbmRjc3MnO1xyXG5pbXBvcnQgYXV0b3ByZWZpeGVyIGZyb20gJ2F1dG9wcmVmaXhlcic7XHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtyZWFjdCgpIF0sXHJcbiAgc3M6IHtcclxuICAgIHBvc3Rjc3M6IHtcclxuICAgICAgcGx1Z2luczogW1xyXG4gICAgICAgIHRhaWx3aW5kY3NzLCAvLyBBZGQgVGFpbHdpbmQgQ1NTIHBsdWdpblxyXG4gICAgICAgIGF1dG9wcmVmaXhlciwgLy8gQWRkIEF1dG9wcmVmaXhlciBwbHVnaW5cclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBcclxufSlcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE4VyxTQUFTLG9CQUFvQjtBQUMzWSxPQUFPLFdBQVc7QUFDbEIsT0FBTyxpQkFBaUI7QUFDeEIsT0FBTyxrQkFBa0I7QUFHekIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sQ0FBRTtBQUFBLEVBQ2xCLElBQUk7QUFBQSxJQUNGLFNBQVM7QUFBQSxNQUNQLFNBQVM7QUFBQSxRQUNQO0FBQUE7QUFBQSxRQUNBO0FBQUE7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFFRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=