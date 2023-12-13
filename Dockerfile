# вказуємо на якому образі буде працювати докер контейнер
FROM node:20.9

# вказуємо робочу директорію
WORKDIR /app

# копіюємо в робочу директорію pack.json pack-lock.json
COPY package*.json ./

# щоб встановити всі залежності
RUN npm install

# скопіюємо всі файли
COPY . .

# перекидаємо папку dist
COPY ./dist ./dist

# цей докер файл буде для розробки а не для продакшна, тому такі команди
CMD [ "npm", "run", "start:dev" ]