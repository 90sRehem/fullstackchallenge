import { createConnection, getConnectionOptions } from 'typeorm';

interface IOptions {
  host: string;
}

getConnectionOptions().then(options => {
  const newOptions = options as IOptions;
  newOptions.host = 'fullstack_challenge_db'; // Essa opção deverá ser EXATAMENTE o nome dado ao service do banco de dados
  createConnection({
    ...options,
  });
});
