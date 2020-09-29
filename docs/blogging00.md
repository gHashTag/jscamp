---
id: blogging-00
title:  Публикация статей в Sumerian School
sidebar_label: Публикация статей
---
Для того что бы начать создавать и редактировать статьи в Sumerian School нужно выполнить несколько простых шагов.
## Регистрация на GitHub
Что бы начать работать над общим проектом нужно создать аккаунт на сайте [GitHub](https://github.com/). Этот сервис хостинга IT-прокетов позволяет удобно редактировать и создавать общие проекты.

![01](/img/blogging/00/01.jpg)

После того как вы зарегистрируетесь, перейдите к [библиотеке нашего проекта](https://github.com/react-native-village/react-native-village.github.io/tree/gh-pages) и нажмите кнопку Fork в правом верхнем углу экрана. 

![02](/img/blogging/00/02.jpg)

Таким образом вы создадите копию библиотеки в своем профиле.

![03](/img/blogging/00/03.jpg)

## Скачивание проекта на свой компьютер
Есть много различных способов скачать проект на свой компьютер, мы воспользуемся программой [GitKraken](https://www.gitkraken.com/), в дальнейшем она нам еще понадобиться. Скачиваем и устанавливаем её. После установки программа предложит войти различными способами, выбираем ``Sign in with GitHub`` 

![04](/img/blogging/00/04.jpg)

В открывшемся сайте нажимаем кнопку ``Continue authorization`` 

![05](/img/blogging/00/05.jpg)

Таким образом мы связали аккаунт GitHub с GitKraken. 

![06](/img/blogging/00/06.jpg)

Теперь что бы скачать наш проект нажимаем сочетание клавиш ``Ctrl + N``, либо выбираем пункт меню ``Clone Repo`` 

![07](/img/blogging/00/07.jpg)

В открывшемся окне выбираем раздел GitHub.com. В поле ``Where to clone to`` выбираем куда будет скачан проект, а в поле ``Repository to clone`` выбираем наш проект который мы хотим скопировать и нажимаем кнопку ``Clone the repo!`` 

![08](/img/blogging/00/08.jpg)

После завершения загрузки нажимаем кнопку ``Open Now`` это откроет наш проект.

![09](/img/blogging/00/09.jpg)

![10](/img/blogging/00/10.jpg)

## Подготовка к работе с кодом
Для того что бы начать работать с кодом нужно убедиться что на компьютере установлен какой-либо редактор кода, а также нужно скачать и установить [Git](https://git-scm.com/downloads). 

![11](/img/blogging/00/11.jpg)

После запуска установщик встретит вас стартовым окном, нажимаем кнопку ``Next`` 

![12](/img/blogging/00/12.jpg)

Здесь оставляем все по стандарту, нам важен следующий шаг.

![13](/img/blogging/00/13.jpg)

Далее установщик предложит вам выбрать редактор кода по умолчанию, настоятельно рекомендуем выбрать Visual Studio Code.

![14](/img/blogging/00/14.jpg)

При дальнейшей установке лучше оставить все чекбоксы в стандартном положении (только если вы не знаете что они означают)

Для дальнейших действий нам нужен установленный менеджер пакетов [Chocolatey](https://react-native-village.github.io/docs/start00#установка-chocolatey). Он потребуется нам чтобы установить ``node.js`` и ``yarn``.
Чтобы начать процесс установки последовательно вставьте и выполните в PowerShell команды
```bash
choco install -y nodejs.install
```
и
```bash
choco install yarn
```
При установке yarn подтвердите свой выбор буквой ``Y``. 

![15](/img/blogging/00/15.jpg)

После завершения загрузки и установки появится сообщение об успешном завершении процесса установки.

![16](/img/blogging/00/16.jpg)

Теперь мы можем приступать к созданию и редактированию статей.

## Создание статьи
Для того что бы создать статью нам потребуется открыть в редакторе кода папку с нашим скопированным проектом. Например, открываем папку проекта в VS Code. 

![17](/img/blogging/00/17.jpg)

![18](/img/blogging/00/18.jpg)

Далее переходим к папке ``docs`` и создаем в ней новый файл, например, ``blogging00``, обязательно с расширением ``.md`` 

![19](/img/blogging/00/19.jpg)

Теперь нужно сделать "шапку" нашему документу, для этого вставляем в начало документа данный код.
```jsx
---
id: ...
title:  ...
sidebar_label: ...
---
```
В строке ``id`` пишем уникальный код документа. В строке ``title`` пишем заголовок статьи и в строке ``sidebar_label`` указываем название нашей статьи которое будет отображаться в боковом меню. Чтобы статья появилась в боковой панели сайта необходимо добавить её в файл ``sidebars.js``.
Для этого в основном каталоге открываем файл ``sidebars.js`` и добавляем новую строку, например
```jsx
['Blogging']: ['blogging-00'],
```

![20](/img/blogging/00/20.jpg)

Первое поле отвечает за название раздела в боковом меню, а второе поле это уникальный ``id`` статьи который мы присвоили ранее. 

Теперь можно приступать к набору текста.
Чтобы в режиме реального времени смотреть как выглядит текст на сайте, необходимо открыть PowerShell и перейти в папку с проектом при помощи команды ``cd`` и написать команду 
```bash
yarn start
```
Это запустит локальный сервер на котором можно проверять свои изменения в документе. Окно интернет-браузера откроется автоматически.

## Отправка статьи
После того как вы набрали и сохранили текст его нужно отправить на проверку, чтобы понять можно ли вставлять вашу работу в основной код. Для этого откроем программу GitKraken и в ней откроем нашу папку со скаченным проектом. Открывается проект кнопкой ``Open a repo``

![21](/img/blogging/00/21.jpg)

Откроется окно проекта.

![22](/img/blogging/00/22.jpg)

Справа, в окне ``Unstaged Files`` находятся файлы которые вы изменили или добавили. Что бы применить изменения нажимаем кнопку ``Stage all changes``. 

![23](/img/blogging/00/23.jpg)

Далее, справа внизу, в поле ``Summary`` пишем краткий комментарий того что было сделано и нажимаем кнопку ``Commit changes to ... files``. 

![24](/img/blogging/00/24.jpg)

И нажимаем кнопку ``Push``

![25](/img/blogging/00/25.jpg)

Теперь нужно отправить запрос на объединение нашей версии и основной. Для этого переходим на сайте GitHub к нашей копии проекта и нажимаем кнопку ``Pull request``

![26](/img/blogging/00/26.jpg)

Далее оставляем комментарий (по желанию) и нажимаем кнопку ``Create pull request``

![27](/img/blogging/00/27.jpg)

Всё, ваш проект отправлен на проверку (вдруг что то сломали). Когда проверяющий убедится что все в порядке, то ваш код будет совмещен с основным.

## Редактирование статьи
Сервис GitHub позволяет быстро и удобно редактировать уже существующие статьи. Для этого переходим на сайт GitHub с вашим проектом.

![28](/img/blogging/00/28.jpg)

Затем открываем тот файл, который хотим отредактировать (Все статьи хранятся в папке docs)

![29](/img/blogging/00/29.jpg)

Далее нажимаем кнопку ``Edit this file``

![30](/img/blogging/00/30.jpg)

Теперь можно внести нужные изменения.

![31](/img/blogging/00/31.jpg)

Для того что бы применить изменения нужно нажать на кнопку ``Commit changes``. Там же можно добавить комментарий к изменениям.

![32](/img/blogging/00/32.jpg)

Теперь можно создавать ``Pull request`` как было показано в предыдущей теме. Изменения уйдут на проверку.

## Базовые возможности форматирования текста Docusaurus
Все статьи на этом сайте пишутся при помощи Docusaurus. Это инструмент при помощи которого можно легко создавать такие вот интернет-документы. И как у всех прочих подобных сервисов, он имеет свой синтаксис.

Например, способы выделения текста:
```jsx
:::note
Заметка.
:::

:::tip Опциональная тема подсказки.
Подсказка.
:::

:::info
Информация.
:::

:::caution
Предупреждение!
:::

:::danger
Опасность!
:::
```
Вот так это будет выглядеть на сайте:
:::note
Заметка.
:::

:::tip
Подсказка.
:::

:::info
Информация.
:::

:::caution
Предупреждение!
:::

:::danger
Опасность!
:::

Также можно давать темы таким окнам, например:
```jsx
:::note Тема
Заметка.
:::
```
:::note Тема
Заметка.
:::

Чтобы выделить код, используется выражение: 
```jsx
'```jsx
Код
```'
```
(Выражение используется без кавычек)

Также можно выделять слова путем добавления ``, например:
```jsx
``Пример``
```
Будет выглядеть как: ``Пример``

Можно сделать так что бы любой текст можно было скопировать одной кнопкой.
```jsx
'```bash
Пример
```'
```
(Выражение используется без кавычек)

Будет выглядеть как: 
```bash
Пример
```

Чтобы вставить ссылку нужно использовать данный синтаксис:
```jsx
[Текст при нажатии на который открывается ссылка](Ссылка на вебсайт)
```
[Пример](https://github.com)

Аналогично вставляются изображения.
```jsx
[Имя изображения, которое будет отображаться если иозображение недоступно](Путь до изображения)
```
Это только самые базовые методы форматирования текста, больше можно узнать в [официальной документации Docusaurus](https://v2.docusaurus.io/docs/markdown-features/).
## Ссылки
1. [GitHub](https://github.com/)
2. [Документация Docusaurus](https://v2.docusaurus.io/docs/)
3. [Официальный сайт GitKraken](https://www.gitkraken.com/)