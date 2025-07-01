FROM node:20-alpine

WORKDIR /app

# Instala dependências do sistema para Prisma
RUN apk add --no-cache openssl

# Copia arquivos de configuração
COPY package*.json ./
COPY tsconfig.json ./
COPY prisma ./prisma

# Instala dependências
RUN npm install

# Copia o restante do código
COPY . .

# Gera o cliente Prisma e compila TypeScript
RUN npx prisma generate
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "dev"]