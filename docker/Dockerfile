# Usa uma imagem oficial e leve do Node.js
FROM node:18-alpine

# Define o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copia os arquivos de definição de dependência
COPY package*.json ./

# Instala as dependências dentro da imagem
RUN npm install

# Copia o restante do código-fonte
COPY . .

# Expõe a porta em que a aplicação escuta
EXPOSE 3000

# Comando para iniciar a aplicação quando o contêiner subir
CMD ["node", "app.js"]
