/** @type {import('drizzle-kit').Config} */
module.exports = {
  schema: './configs/schema.js',
  dialect: 'postgresql', 
  dbCredentials: {
    url: 'postgresql://neondb_owner:npg_J9BvchlzaK8I@ep-square-paper-ae0fh6fk-pooler.c-2.us-east-2.aws.neon.tech/VIGENAI?sslmode=require&channel_binding=require',
  },
};
