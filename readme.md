# Links

[App Demo](https://gb-adviser.log1st.net) |
[Storybook Demo](https://storybook.gb-adviser.log1st.net)


* влом было заполнять атрибуты в сторибуке. Если нужно, потрачу пару часов.
* в процессе предположил, что на странице должны быть подтянуты блоки базы знаний из апи - тоже не стал делать. Пример работы с апи есть в `apps/client/src/api`
* в макетах нет состояний элементов (кроме кнопок), тоже не делал почти
* ну и тесты. в целом, если нужно, могу написать


* используется [bun](https://bun.sh/) для сборки. Можно завести под yarn, чуть поправив работу с `workspaces`.
```bash
# ставится bun:

curl -fsSL https://bun.sh/install | bash
```

# Modules
* apps/client - приложение
* packages/client - всякие вспомогательные функции.
* packages/eslint-config - конфиг линтера
* packages/form - пакет, в котором чисто надстройка над react-hook-form для более простой реализации клиентских форм
* packages/ui - элементы/компоненты/визуальные контейнеры/утилиты в сторибуке

# Dev

```bash
bun run dev

# navigate to https://localhost:5173 for app 
# and https://localhost:6006 for storybook
# ports might be changed if currently in use
```

# Build
```bash
# к сожалению, сторибук накосячили что-то в себе, поэтому он билдится только при наличии NodeJS.
# приложение же, спокойно билдится только bun
bun run build

#then

# use apps/client/dist for app static
# use packages/ui/dist for storybook static
# or
bun run start
# navigate to https://localhost:4173 for app 
# and https://localhost:8080 for storybook
# ports might be changed if currently in use
```

# Dev and Build separately
```bash
# app
cd apps/client
bun run dev
# or
bun run build

# storybook
cd packages/storybook
bun run dev
# or
bun run build
```