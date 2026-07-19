# 💈 Barber Shop Scheduling System

<p align="center">

![Java](https://img.shields.io/badge/Java-21-orange?style=for-the-badge&logo=openjdk)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.x-6DB33F?style=for-the-badge&logo=springboot)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon-4169E1?style=for-the-badge&logo=postgresql)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38BDF8?style=for-the-badge&logo=tailwindcss)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![License](https://img.shields.io/badge/License-Academic-blue?style=for-the-badge)

</p>

Sistema web desenvolvido para gerenciamento de uma barbearia, permitindo que clientes realizem agendamentos online e que administradores gerenciem barbeiros, serviços e atendimentos.

---

## ✨ Funcionalidades

### Cliente

- 📅 Agendamento online
- ✂️ Escolha de serviços
- 💈 Escolha do barbeiro
- 🕒 Exibição de horários disponíveis
- 🚫 Bloqueio automático de horários ocupados
- 📧 Cadastro de informações pessoais

### Administrador

- 🔐 Login administrativo
- 👨‍💼 Cadastro e edição de barbeiros
- ✂️ Cadastro e edição de serviços
- 📋 Visualização dos agendamentos

---

## 🛠 Tecnologias

- Java 21
- Spring Boot
- Spring Data JPA
- PostgreSQL (Neon)
- HTML5
- Tailwind CSS
- JavaScript (ES6)
- Fetch API

---

## 🚀 Como executar

### 1. Clone o projeto

```bash
https://github.com/gabryeltomaz/barber-scheduling-system.git
```

---

### 2. Configure o banco

Crie um banco PostgreSQL (Neon ou local).

Configure o arquivo:

```text
src/main/resources/application.properties
```

com suas credenciais.

---

### 3. Execute o Spring Boot

Pela IDE ou utilizando:

```bash
./mvnw spring-boot:run
```

O backend iniciará em

```text
http://localhost:8080
```

---

### 4. Execute o Front-end

Abra a página principal utilizando um servidor local, por exemplo:

- Live Server (VS Code)

---

## 📚 Histórias de Usuário Implementadas

- ✅ Visualizar barbeiros
- ✅ Visualizar serviços
- ✅ Escolher data
- ✅ Escolher horário
- ✅ Realizar agendamento
- ✅ Login administrativo
- ✅ Cadastro de barbeiros
- ✅ Cadastro de serviços
- ✅ Visualização de agendamentos
- ✅ Bloqueio de horários ocupados

---

## 📷 Interface

O sistema possui interfaces para:

- Página inicial
- Agendamento
- Login administrativo
- Gerenciamento de barbeiros
- Gerenciamento de serviços
- Gerenciamento de agendamentos
