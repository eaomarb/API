# API REST de Chat con Node.js y Docker

---

## Índice  
1. [Descripción](#descripción)  
2. [Tecnologías](#tecnologías)  
3. [Requisitos](#requisitos)  
4. [Instalación](#instalación)  
5. [Uso en local](#uso-en-local)  
6. [Despliegue con Docker](#despliegue-con-docker)

---

## Descripción  
API REST de chat hecha con Node.js, Express y `@google/generative-ai`.  
Proyecto personal desplegado en mi propio servidor usando Docker Compose. Aprendí a montar rutas y controladores, gestionar variables de entorno y organizar todo con contenedores. También probé cómo integrar modelos generativos en una API sencilla y funcional.

---

## Tecnologías  
- Node.js 18+  
- Express  
- `@google/generative-ai`  
- Nodemon (dev)  
- Docker  
- Docker Compose

---

## Requisitos  
- Node.js 18 o superior  
- Docker y Docker Compose  
- Clave de API de Google Generative AI (`API_KEY`)

---

## Instalación

```bash
git clone https://github.com/eaomarb/API.git
cd API
npm install
```

---

## Uso en local

```bash
export API_KEY=tu_clave_aqui
npm run dev     # nodemon con autoreload
npm start       # node server.js en modo producción
```

La API quedará escuchando en [http://localhost:8081](http://localhost:8081) (o el puerto que definas en `docker-compose.yml`).

---

## Despliegue con Docker

1. Abre `docker-compose.yml` y añade tu clave en la sección `environment`:

```yaml
services:
  api:
    environment:
      - PORT=8081
      - API_KEY={clave}
```

2. Ejecuta:

```bash
docker-compose up -d
```

El servicio `api` quedará accesible en:  
```bash
http://<tu-servidor>:8081
```
