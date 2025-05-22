# Etapa 1: Construir a aplicação React
FROM node:18-alpine AS build

# Define o diretório de trabalho
WORKDIR /app

# Copia package.json e package-lock.json (ou yarn.lock)
COPY package*.json ./
# Se estiver usando yarn:
# COPY yarn.lock ./

# Instala as dependências
RUN npm install
# Se estiver usando yarn:
# RUN yarn install

# Copia o restante dos arquivos da aplicação
COPY . .

# Constrói a aplicação para produção
RUN npm run build
# Se estiver usando yarn:
# RUN yarn build

# Etapa 2: Servir a aplicação com Nginx
FROM nginx:stable-alpine

# Copia os arquivos de build da etapa anterior para o diretório padrão do Nginx
COPY --from=build /app/build /usr/share/nginx/html

# (Opcional) Copia uma configuração personalizada do Nginx, se necessário
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expõe a porta 80
EXPOSE 80

# Comando para iniciar o Nginx quando o contêiner for iniciado
CMD ["nginx", "-g", "daemon off;"]