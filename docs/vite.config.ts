import { defineConfig } from 'vite';
import path from 'path';
export default defineConfig(async ({ mode }) => {
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
