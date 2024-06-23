import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

// Manually define __dirname
const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
    sassOptions: {
        includePaths: [join(__dirname, 'styles')],
    },
};
