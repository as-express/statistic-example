# Statistic Usage in ExpressJs and MongoDB

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGODB`

## Installation and Running

```bash
  pnpm install
```

```bash
  pnpm start
```

## Routes

#### Get Total Statistics

```
  GET http://localhost:3000/api/total/
```

#### Set increment and decrement

```
  POST http://localhost:3000/api/set
```

| Parameter | Type     | Description                                             |
| :-------- | :------- | :------------------------------------------------------ |
| `type`    | `string` | **Required**. Type need be <b>increment<b> or decrement |

| Parameter | Type     | Description                                |
| :-------- | :------- | :----------------------------------------- |
| `value`   | `number` | **Required**. Increment or Decrement value |

#### Get Year Statistics

```
  GET http://localhost:3000/api/year/
```

| Parameter | Type    | Description                  |
| :-------- | :------ | :--------------------------- |
| `year`    | `query` | **Required**. Year like 2024 |

#### Get Month Statistics

```
  GET http://localhost:3000/api/month/
```

| Parameter | Type    | Description                  |
| :-------- | :------ | :--------------------------- |
| `year`    | `query` | **Required**. Year like 2024 |

| Parameter | Type    | Description                       |
| :-------- | :------ | :-------------------------------- |
| `month`   | `query` | **Required**. Year 2024 and month |

#### Get Day Statistics

```
  GET http://localhost:3000/api/day/
```

| Parameter | Type    | Description                  |
| :-------- | :------ | :--------------------------- |
| `year`    | `query` | **Required**. Year like 2024 |

| Parameter | Type    | Description                       |
| :-------- | :------ | :-------------------------------- |
| `month`   | `query` | **Required**. Year 2024 and month |

| Parameter | Type    | Description              |
| :-------- | :------ | :----------------------- |
| `day`     | `query` | **Required**. Day like 1 |
