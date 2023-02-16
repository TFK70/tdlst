# Todolist

## Architecture

### DDD

**core** - слой с бизнес-логикой
**adapters** - слой с адаптерами для вендоров
**entrypoints** - слой с "точками входа" для приложения. Там находятся все необходимые инструкции для запуска сервиса
**core/comain** - описание бизнесовых сущностей и их поведения
**core/infrastructure** - связывает слой core со слоем adapters. Использует интерфейсы адаптеров для имплементации инфраструктурной логики (например, имплементация репозиториев или мапперы)
**core/application** - связывает слой domain со слоем infrastructure и описывает основные флоу в приложении

### Стек

- **yarn3** - пакетный менеджер
- **yarn workspaces** - с помощью yarn cli мы управляем этими самыми воркспейсами, вместо той же лерны
- **esbuild** - собирает приложение в бандл (dist/index.js). Быстрая и удобная штука, почти zero-configuration, используется в том же самом [yarn3](https://github.com/yarnpkg/berry/blob/master/packages/yarnpkg-builder/sources/commands/build/bundle.ts#L116) чтобы собирать бандл ярна
