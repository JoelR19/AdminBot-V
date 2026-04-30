# AdminBot - Sistema de Gestión Educativa

![Node.js](https://img.shields.io/badge/Node.js-v18+-339933?style=for-the-badge&logo=nodedotjs)
![Express](https://img.shields.io/badge/Express-5.2-000000?style=for-the-badge&logo=express)
![MySQL](https://img.shields.io/badge/MySQL-8.0+-00758F?style=for-the-badge&logo=mysql)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge)

---

## 📌 Descripción del Proyecto

**AdminBot** es una solución integral de gestión administrativa para instituciones educativas. Centraliza la información de estudiantes, registra asistencias, gestiona cobros y pagos, y automatiza notificaciones a acudientes vía WhatsApp. Diseñada con arquitectura MVC escalable y API REST modular.

### Problemática Resuelta
- Desorganización en el registro de asistencias diarias
- Pérdida de control sobre cuentas por cobrar
- Dificultad en la comunicación con acudientes
- Falta de visibilidad en los ingresos del centro educativo

---

## 📋 Tabla de Contenidos

- [Tecnologías](#tecnologías)
- [Requisitos del Sistema](#requisitos-del-sistema)
- [Instalación](#instalación)
- [Estructura de Directorios](#estructura-de-directorios)
- [Documentación de API](#documentación-de-api)
- [Guía de Contribución](#guía-de-contribución)
- [Solución de Problemas](#solución-de-problemas)
- [Licencia](#licencia)

---

## 🛠️ Tecnologías

### Backend
- **Node.js** v18+ - Runtime JavaScript
- **Express.js** 5.2 - Framework web
- **MySQL2** - Conector MySQL con Promises
- **Bcrypt** - Encriptación de contraseñas
- **Dotenv** - Gestión de variables de entorno
- **Nodemon** - Desarrollo con auto-reload

### Frontend
- **Vanilla JavaScript** ES6+ - Sin dependencias pesadas
- **HTML5** - Semántica moderna
- **CSS3** - Diseño responsive
- **Toastify.js** - Notificaciones elegantes
- **Vite** - Bundler y servidor de desarrollo

### Base de Datos
- **MySQL** 8.0+ - Base de datos relacional
- **InnoDB** - Motor de almacenamiento con transacciones

---

## 📦 Requisitos del Sistema

| Requisito | Versión | Descripción |
|-----------|---------|-------------|
| Node.js | 18.0+ | Runtime JavaScript |
| npm | 9.0+ | Gestor de paquetes |
| MySQL | 8.0+ | Sistema de base de datos |
| Navegador | Moderno | Chrome, Firefox, Safari, Edge |

---

## 🚀 Instalación

### 1. Clonar el Repositorio

```bash
git clone https://github.com/tu-usuario/adminbot.git
cd adminbot
```

### 2. Configurar Backend

#### Instalar Dependencias

```bash
cd Backend
npm install
```

#### Variables de Entorno

Crea un archivo `.env` en la carpeta `Backend` con la siguiente configuración:

| Variable | Valor Ejemplo | Descripción |
|----------|---------------|-------------|
| `DB_HOST` | `localhost` | Host del servidor MySQL |
| `DB_USER` | `root` | Usuario de la base de datos |
| `DB_PASSWORD` | `SteamCoach` | Contraseña de acceso |
| `DB_NAME` | `adminbot` | Nombre de la base de datos |

**Archivo `.env`:**

```env
# Base de Datos
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=SteamCoach
DB_NAME=adminbot

# Servidor
PORT=3000
NODE_ENV=development
```

### 3. Configurar Frontend

#### Instalar Dependencias

```bash
cd ../Frontend
npm install
```

### 4. Crear Base de Datos

Conéctate a MySQL y ejecuta:

```sql
CREATE DATABASE IF NOT EXISTS adminbot;
USE adminbot;
```

### 5. Iniciar el Servidor

#### Desarrollo Backend

```bash
cd Backend
npm run dev
```

**Salida esperada:**
```
Servidor corriendo LocalHost... 3000
```

#### Desarrollo Frontend

```bash
cd Frontend
npm run dev
```

**Accede a:** `http://localhost:5173`

---

## 📂 Estructura de Directorios

```
AdminBot/
├── Backend/
│   ├── app.js                          # Punto de entrada
│   ├── package.json                    # Dependencias
│   ├── .env                            # Variables de entorno (gitignored)
│   ├── config/
│   │   └── db.js                       # Configuración de MySQL
│   ├── models/
│   │   ├── student.model.js            # Lógica de datos: Estudiantes
│   │   ├── usuario.model.js            # Lógica de datos: Usuarios
│   │   ├── acudiente.model.js          # Lógica de datos: Acudientes
│   │   ├── asistencia.model.js         # Lógica de datos: Asistencias
│   │   ├── pago.model.js               # Lógica de datos: Pagos
│   │   ├── notificacion.model.js       # Lógica de datos: Notificaciones
│   │   ├── dashboard.model.js          # Lógica de datos: Dashboard
│   │   └── auth.model.js               # Lógica de datos: Autenticación
│   ├── controllers/
│   │   ├── student.controller.js       # Lógica HTTP: Estudiantes
│   │   ├── usuario.controller.js       # Lógica HTTP: Usuarios
│   │   ├── acudiente.controller.js     # Lógica HTTP: Acudientes
│   │   ├── asistencia.controller.js    # Lógica HTTP: Asistencias
│   │   ├── pago.controller.js          # Lógica HTTP: Pagos
│   │   ├── notificacion.controller.js  # Lógica HTTP: Notificaciones
│   │   ├── dashboard.controller.js     # Lógica HTTP: Dashboard
│   │   └── auth.controller.js          # Lógica HTTP: Login
│   ├── routes/
│   │   ├── students.route.js           # Endpoints: Estudiantes
│   │   ├── usuarios.route.js           # Endpoints: Usuarios
│   │   ├── acudientes.route.js         # Endpoints: Acudientes
│   │   ├── asistencias.route.js        # Endpoints: Asistencias
│   │   ├── pagos.route.js              # Endpoints: Pagos
│   │   ├── notificaciones.route.js     # Endpoints: Notificaciones
│   │   ├── dashboard.route.js          # Endpoints: Dashboard
│   │   └── auth.route.js               # Endpoints: Autenticación
│   └── middleware/
│       └── auth.middleware.js          # Validación de autenticación
├── Frontend/
│   ├── index.html                      # HTML principal
│   ├── package.json                    # Dependencias
│   ├── public/                         # Archivos estáticos
│   └── src/
│       ├── assets/                     # Recursos multimedia
│       │   ├── icons/                  # Iconografía
│       │   ├── images/                 # Imágenes
│       │   ├── logos/                  # Logotipos
│       │   └── models/                 # Modelos 3D
│       ├── pages/                      # Vistas
│       │   ├── auth/
│       │   │   ├── index.html
│       │   │   ├── auth.js
│       │   │   └── styles.css
│       │   ├── dashboard/
│       │   │   ├── index.html
│       │   │   ├── dashboard.js
│       │   │   └── styles.css
│       │   ├── students/
│       │   │   ├── index.html
│       │   │   ├── students.js
│       │   │   └── styles.css
│       │   ├── attendance/
│       │   ├── payments/
│       │   ├── alerts/
│       │   └── settings/
│       └── shared/
│           ├── components/             # Componentes reutilizables
│           ├── css/
│           │   ├── global.css
│           │   ├── layout.css
│           │   ├── main.css
│           │   ├── reset.css
│           │   └── variables.css
│           └── js/
│               ├── api.js              # Cliente HTTP
│               ├── storage.js          # Gestión de localStorage
│               ├── utils.js            # Funciones auxiliares
│               └── robotScene.js       # Escena 3D
└── README.md                           # Este archivo
```

---

## 📡 Documentación de API

### URL Base

```
http://localhost:3000/api
```

### Endpoints Principales

| Método | Endpoint | Descripción | Auth |
|--------|----------|-------------|------|
| `POST` | `/login` | Autenticación de usuario | No |
| `GET` | `/student` | Obtener estudiantes | Sí |
| `POST` | `/student` | Crear estudiante | Sí |
| `GET` | `/usuario` | Obtener usuarios | Sí |
| `POST` | `/usuario` | Crear usuario | Sí |
| `GET` | `/acudiente` | Obtener acudientes | Sí |
| `POST` | `/acudiente` | Crear acudiente | Sí |
| `GET` | `/asistencia` | Obtener asistencias | Sí |
| `POST` | `/asistencia` | Registrar asistencia | Sí |
| `GET` | `/pago` | Obtener pagos | Sí |
| `POST` | `/pago` | Registrar pago | Sí |
| `GET` | `/notificacion` | Obtener notificaciones | Sí |
| `POST` | `/notificacion` | Enviar notificación | Sí |
| `GET` | `/dashboard` | Obtener datos del dashboard | Sí |

### Ejemplos de Uso

#### Autenticación

**Request:**
```http
POST /api/login HTTP/1.1
Content-Type: application/json

{
  "email": "admin@escuela.com",
  "password": "contraseña123"
}
```

**Response (200):**
```json
{
  "ok": true,
  "user": {
    "id": 1,
    "email": "admin@escuela.com",
    "first_name": "Admin"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

#### Crear Estudiante

**Request:**
```http
POST /api/student HTTP/1.1
Content-Type: application/json

{
  "student_code": "EST001",
  "first_name": "Juan",
  "last_name": "Pérez",
  "document_type": "CC",
  "document_number": "1234567890",
  "birth_date": "2005-03-15",
  "grade": "10A",
  "school_year": "2026",
  "status": "active"
}
```

**Response (201):**
```json
{
  "ok": true,
  "data": {
    "id": 1,
    "student_code": "EST001",
    "first_name": "Juan",
    "last_name": "Pérez"
  }
}
```

#### Registrar Asistencia

**Request:**
```http
POST /api/asistencia HTTP/1.1
Content-Type: application/json

{
  "student_id": 1,
  "attendance_date": "2026-04-29",
  "status": "present"
}
```

**Response (201):**
```json
{
  "ok": true,
  "data": {
    "id": 1,
    "student_id": 1,
    "attendance_date": "2026-04-29",
    "status": "present"
  }
}
```

---

## 🤝 Guía de Contribución

### Configuración del Entorno de Desarrollo

```bash
# 1. Fork el repositorio en GitHub
# 2. Clonar tu fork
git clone https://github.com/tu-usuario/adminbot.git
cd adminbot

# 3. Crear una rama para tu feature
git checkout -b feature/agregar-nueva-funcionalidad
```

### Commits con Conventional Commits

Seguimos el estándar de [Conventional Commits](https://www.conventionalcommits.org/):

```bash
# Feature
git commit -m "feat: agregar autenticación de dos factores"

# Bug fix
git commit -m "fix: corregir validación de email duplicado"

# Documentación
git commit -m "docs: actualizar guía de instalación"

# Refactorización
git commit -m "refactor: simplificar lógica de pagos"

# Tests
git commit -m "test: agregar pruebas para módulo de estudiantes"

# Performance
git commit -m "perf: optimizar consultas de asistencia"
```

### Tipos de Commits Permitidos

- **feat** - Nueva funcionalidad
- **fix** - Corrección de errores
- **docs** - Cambios en documentación
- **style** - Cambios sin afectar lógica (espacios, formato)
- **refactor** - Refactorización de código
- **perf** - Mejora de rendimiento
- **test** - Agregar o actualizar tests
- **chore** - Cambios en configuración o dependencias

### Proceso de Pull Request

1. **Implementar cambios** siguiendo el código existente
2. **Escribir commits claros** con Conventional Commits
3. **Pushear a tu rama:**
   ```bash
   git push origin feature/agregar-nueva-funcionalidad
   ```
4. **Crear Pull Request** en GitHub con descripción detallada
5. **Responder feedback** de revisores
6. **Mergear** una vez aprobado

### Estándares de Código

- Usar nombres descriptivos para variables y funciones
- Comentar lógica compleja
- Mantener consistencia con el código existente
- Validar entrada de usuarios
- Manejar errores adecuadamente
- Usar `const` por defecto, `let` si es necesario

### Antes de Hacer Push

```bash
# Verificar código de ejemplo
node Backend/app.js

# Verificar Frontend
npm run dev --prefix Frontend
```

---

## 🔧 Solución de Problemas

### Error de Conexión a MySQL

```
Error: connect ECONNREFUSED 127.0.0.1:3306
```

**Solución:**
```bash
# Verificar que MySQL está corriendo
# En Windows
net start MySQL80

# En Mac
brew services start mysql

# En Linux
sudo systemctl start mysql
```

### Credenciales Incorrectas

```
Error: Access denied for user 'root'@'localhost'
```

**Solución:**
- Verificar contraseña en `.env`
- Probar conexión manual: `mysql -u root -p`

### Puerto ya en Uso

```
Error: listen EADDRINUSE: address already in use :::3000
```

**Solución:**
```bash
# Matar proceso en puerto 3000
lsof -ti:3000 | xargs kill -9
```

---

## 📝 Scripts Disponibles

### Backend

```bash
npm run dev      # Inicia en modo desarrollo con nodemon
npm test         # Ejecuta suite de pruebas (si existe)
```

### Frontend

```bash
npm run dev      # Inicia servidor de desarrollo
npm run build    # Construye para producción
npm run preview  # Vista previa de build
```

---

## ✨ Características Principales

- ✓ Gestión integral de estudiantes (CRUD)
- ✓ Registro automático de asistencias
- ✓ Control de cobros y pagos
- ✓ Notificaciones automáticas
- ✓ Dashboard analítico
- ✓ Autenticación segura con bcrypt
- ✓ API REST modular y escalable
- ✓ Interfaz responsive y moderna
- ✓ Alertas elegantes con Toastify

---

## 🔐 Seguridad

- Las contraseñas se encriptan con **bcrypt** (10 rondas)
- Se valida entrada en servidor y cliente
- CORS habilitado para origen específico
- Uso de variables de entorno para datos sensibles
- Queries preparadas para prevenir SQL injection

---

## ⚡ Rendimiento

- Pool de conexiones MySQL para mejor eficiencia
- Índices en columnas frecuentemente consultadas
- Caché en cliente con localStorage
- Bundling y minificación en Frontend
- Compresión gzip habilitada en Express

---

## 🗂️ Roadmap

- [ ] Integración con WhatsApp API oficial
- [ ] Reportes PDF/Excel
- [ ] Dashboard con gráficos avanzados
- [ ] App móvil (React Native)
- [ ] Sistema de permisos por rol
- [ ] Auditoría completa de cambios
- [ ] Sincronización offline-first
- [ ] Tests automatizados E2E

---

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT**. Ver el archivo [LICENSE](./LICENSE) para más detalles.

```
MIT License

Copyright (c) 2026 AdminBot Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 📞 Contacto y Soporte

- **Reportar bugs:** [GitHub Issues](https://github.com/tu-usuario/adminbot/issues)
- **Discusiones:** [GitHub Discussions](https://github.com/tu-usuario/adminbot/discussions)
- **Email:** soporte@adminbot.dev

---

## 👥 Autores

- **Joel Developer** - Concepto inicial y desarrollo principal
- Agradecimientos especiales a todos los contribuidores

---

## 📚 Historial de Cambios

### v1.0.0 (2026-04-29)
- Lanzamiento inicial
- Funcionalidad completa de CRUD
- API REST operativa
- Frontend responsivo

---

**Último Actualizado:** 29 de abril de 2026  
**Versión:** 1.0.0  
**Estado:** Desarrollo Activo
  "birth_date": "2005-03-15",
  "grade": "10A",
  "school_year": "2026",
  "status": "active"
}
```

### Usuarios

**GET /usuario** - Obtener usuarios

**POST /usuario** - Crear usuario

### Acudientes

**GET /acudiente** - Obtener acudientes

**POST /acudiente** - Crear acudiente

### Asistencias

**GET /asistencia** - Obtener asistencias

**POST /asistencia** - Registrar asistencia
```json
{
  "student_id": 1,
  "attendance_date": "2026-04-29",
  "status": "present"
}
```

### Pagos

**GET /pago** - Obtener pagos

**POST /pago** - Registrar pago

### Notificaciones

**GET /notificacion** - Obtener notificaciones

**POST /notificacion** - Enviar notificación

### Dashboard

**GET /dashboard** - Obtener datos del dashboard

---

## Vistas del Sistema

- **Login** - Autenticación con validación de email y contraseña
- **Dashboard** - Resumen de KPIs y acceso rápido a funciones
- **Estudiantes** - Gestión CRUD con búsqueda y filtros
- **Asistencia** - Registro diario de presencia/ausencia
- **Pagos** - Control de recaudación y cuentas por cobrar
- **Notificaciones** - Centro de alertas y mensajes
- **Configuración** - Perfil de usuario y preferencias

---

## Uso

### Iniciar Backend

```bash
cd Backend
npm run dev
```

Servidor disponible en: `http://localhost:3000`

### Iniciar Frontend

```bash
cd Frontend
npm run dev
```

Interfaz disponible en: `http://localhost:5173`

### Flujo Típico

1. Acceder a login y autenticarse
2. Ver dashboard con resumen
3. Gestionar estudiantes (crear, editar, buscar)
4. Registrar asistencias
5. Registrar pagos
6. Enviar notificaciones

---

## Troubleshooting

**Error: "connect ECONNREFUSED 127.0.0.1:3306"**
- Solución: Verificar que MySQL está corriendo
```bash
# Windows
net start MySQL80

# Mac
brew services start mysql

# Linux
sudo systemctl start mysql
```

**Error: "Access denied for user 'root'@'localhost'"**
- Solución: Revisar credenciales en .env
- Prueba: `mysql -u root -p`

**Frontend no se conecta al Backend**
- Verificar URL en `Frontend/src/shared/js/api.js`
- Confirmar que Backend está activo en puerto 3000
- Revisar CORS está habilitado

**Nodemon no reinicia automáticamente**
```bash
kill -9 $(lsof -t -i:3000)
npm run dev
```

---

## Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el repositorio
2. Crea una rama (`git checkout -b feature/NuevaFuncion`)
3. Commit cambios (`git commit -m 'Agregar nueva función'`)
4. Push (`git push origin feature/NuevaFuncion`)
5. Abre un Pull Request

---

**Versión:** 1.0.0
**Último actualizado:** 29 de abril de 2026
