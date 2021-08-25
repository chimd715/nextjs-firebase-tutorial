# Create Next.js Project

### 1. check node version

[![badge-node]][node-download-link] ![badge-windows] ![badge-mac] ![badge-linux]

next.js requires [node][node-download-link] version 12.0 or higher

- check node version

```Shell
node --version
```

### 2. create your project

- using npx

```Shell
npx create-next-app {project_name}

ex) npx create-next-app example_project
```

- using yarn  

```Shell
yarn create-next-app {project_name}

ex) yarn create-next-app example_project
```

if you want to use typescript, add option --ts or --typescript

```Shell
npx create-next-app --ts {project_name}

npx create-next-app --typescript {project_name}

* if you are using yarn instead of npx, then replace npx with yarn
ex) yarn create-next-app --ts {project_name}
```

### 3. start project

- move to your project directory

```Shell
cd {project_directory}
```

- run project

```Shell
npm run dev
```

- check in [browser](http://localhost:3000)

> http://localhost:3000


[badge-node]: https://img.shields.io/badge/node-v12.0-green?style=flat
[badge-windows]: https://img.shields.io/badge/windows-blue?style=flat
[badge-mac]: https://img.shields.io/badge/mac-purple?style=flat
[badge-linux]: https://img.shields.io/badge/linux-red?style=flat


[node-download-link]: https://nodejs.org/ko/download/
