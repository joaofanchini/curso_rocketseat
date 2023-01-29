// noinspection JSUnusedGlobalSymbols

import { defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(() => {
    return {
        build:{
            minify:'terser'
        },
        plugins: [react()],
    };
});
