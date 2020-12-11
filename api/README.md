```sh
# Install dependencies
npm ci

# Generate rc config
npm run db:migration:run

# Run migration
npm run db:migration:generate -- <migration name>
```
