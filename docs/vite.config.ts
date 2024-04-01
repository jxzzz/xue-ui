import { defineConfig } from 'vite';
import path from 'path';
export default defineConfig(async ({ mode }) => {
  console.log(mode);
  console.log();
  return {
    resolve: {
      alias: [
        {
          find: /^@xue\/ui$/,
          replacement: path.resolve(__dirname, '../packages/index.ts'),
        },
      ],
    },
  };
});
