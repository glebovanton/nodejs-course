import { config } from './common/config';
import app from './app';
import { tryDbConnect } from './helpers/db';

const { PORT } = config;

tryDbConnect(() => {
  app.listen(PORT, () =>
    process.stdout.write(`App is running on http://localhost:${PORT} \n`)
  );
});
