# Los Santos Dating

SPA-прототип dating portal для GTA 5 RP сервера.

## Стек

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion
- Zustand
- Axios

## Запуск

```bash
npm install
npm run dev
```

По умолчанию фронтенд ожидает API на `http://localhost:4000`. Можно изменить через `NEXT_PUBLIC_API_URL`.

## Быстрое превью без npm

В репозитории есть автономный `index.html`, который можно открыть напрямую в браузере.

Также можно поднять простой static preview:

```bash
node preview-server.js
```

После запуска страница будет доступна на `http://localhost:4173`.

## Реализовано в прототипе

- адаптивная dark/neon главная рабочая панель;
- карточки анкет с лайком и пропуском;
- фильтры поиска;
- блоки матчей, чата, гостей, уведомлений и VIP;
- мок-данные профилей;
- базовый Axios-клиент для JWT;
- Zustand-store для swipe/like состояния.

## План backend API

- `POST /auth/login`
- `POST /auth/register`
- `POST /auth/logout`
- `GET /profile`
- `PUT /profile`
- `POST /likes`
- `GET /likes`
- `GET /matches`
- `GET /messages`
- `POST /messages`

## Интеграция GTA сервера

- `GET /api/player/:id`
- `POST /api/auth/game`
- `GET /api/player/status`
