# Pokemon App



### Декомпозиция

1 - Составление межстраничного дерева, и добавление проверки аутентификации на каждую страницу

![graph](https://i.ibb.co/6tGyBbW/Graph.png)

2 - Разработка всех страниц и отдельных компонентов по макету.
3 - Создание компоненты аутентификации, которая проверяет наличие данных с localstorage.
3 - Добавление динамической загрузки следуя [документации](https://github.com/PokemonTCG/pokemon-tcg-sdk-javascript).
4 - Обработка и рендеринг данных.

### Возникшие сложности

1 - Перерендериннг страниц и компонентов после добавления анимации [react-transition-group](https://github.com/reactjs/react-transition-group).
