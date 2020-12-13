#### Install Dependencies

```bash
npm ci
```

## Database

#### Run Migrations

```bash
npm run typeorm:cli -- schema:sync
```

#### Run Migrations

```bash
npm run typeorm:cli -- migration:run
```

#### Generate Migration

```bash
npm run typeorm:cli -- migration:generate -n migrationNameHere
```
