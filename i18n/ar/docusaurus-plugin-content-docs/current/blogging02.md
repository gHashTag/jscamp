---
id: blogging-02
title: Publishing Articles to JS Camp
sidebar_label: Publishing Articles
---

import YouTube from 'react-youtube'


To create articles in JS Camp, you need to follow a few simple steps.

If you do not create articles, but want to correct an error or defect, then you can edit any article in a couple of clicks, how to do this is shown [here](https://jscamp.app/docs/blogging-00#редактирование-статьи). But first, you need to create a `GitHub` account, if not, and connect to the project. How to do this is shown below, in `Step 00` and` Step 01`.

![Step00](/img/steps/00.png)

## Sign up on GitHub

To work on a common project, you need to create an account on the [GitHub] website (https://github.com/). This is a hosting service for open IT projects that allows you to conveniently create and edit their common project for several programmers.

![01](/img/blogging/00/01.png)

![Step01](/img/steps/01.png)

## Connection to the project

After registration, go to the [library of our project (jscamp.app)](https://github.com/react-native-village/jscamp.app/tree/gh-pages) and click the Fork button in the upper right corner of the screen.

![02](/img/blogging/00/02.png)

By doing this, in your profile, you create a copy of the library of the connected project.

![03](/img/blogging/00/03.png)

![Step02](/img/steps/02.png)

## Downloading the project to your computer

There are many ways to download a project to your computer, we will use the popular program for working with repositories [GitKraken](https://www.gitkraken.com/). Download and install. At the first start, the program will offer to enter in various ways, we suggest the item `Sign in with GitHub`, to synchronize` GitKraken` with the `GitHub` account.

![04](/img/blogging/00/04.png)

In the browser window that opens, select the `Continue authorization` button to continue authorization.

![05](/img/blogging/00/05.png)

To complete registration, you will need to confirm the synchronization of accounts.

![06](/img/blogging/00/06.png)

This will link your GitHub account to GitKraken.

To work on a common project, you need to download it.
Press the key combination `Ctrl + N`, or select the item` File`-> `Clone Repo` in the main menu.

![07](/img/blogging/00/07.png)

In the window that opens, select the section `GitHub.com`. In the field `Where to clone to`, select the path where the project will be located on your computer, and in the field` Repository to clone`, select the name of the project located on GitHub, which will be copied and press the button `Clone the repo!`

![08](/img/blogging/00/08.png)

After the download of the project to your computer is complete, press the button `Open Now` - this will open the downloaded project.

![09](/img/blogging/00/09.png)

This is how the `GitKraken` interface looks when the project is open.

![10](/img/blogging/00/10.png)

![Step03](/img/steps/03.png)

## Connecting to a project branch

Now, to get started, you need to switch to the development branch - `gh-pages`.
To do this, move the mouse over the `REMOTE` item and click the` Add Remote` button.

![Branches01](/img/blogging/00/branch01.png)

The `Add Remote` menu will open.

![Branches02](/img/blogging/00/branch02.png)

In the `GitHub Repo` field, select `gHashTag/jscamp`, and in the `Name` field, enter any name for this repository.

![Branches03](/img/blogging/00/branch03.png)

Click the button `Add Remote`.

![Branches04](/img/blogging/00/branch04.png)

The repository download process begins.

![Branches05](/img/blogging/00/branch05.png)

After the download is finished, you need to switch to the `gh-pages` branch. To do this, double-click on the branch of the main repository `gh-pages`.

![Branches06](/img/blogging/00/branch06.png)

This will switch you to the `gh-pages` development branch.

![Branches07](/img/blogging/00/branch07.png)

![Step04](/img/steps/04.png)

## Подготовка к работе с кодом

Make sure you have some code editor installed on your computer (we recommend [VS Code](https://code.visualstudio.com/)). Download and install the package [Git](https://git-scm.com/downloads). It is a program for controlling the versions of compiled programs.

![11](/img/blogging/00/11.png)

After starting the installer will greet you with the start window, press the button `Next`.

![12](/img/blogging/00/12.png)

At this step of the installer, we leave everything as standard.

![13](/img/blogging/00/13.png)

Next, the installer will offer you to choose the default code editor, we recommend choosing Visual Studio Code.

![14](/img/blogging/00/14.png)

During further installation, click `Next`, leaving all the checkboxes by default (only if you do not know what they mean).

![Step05](/img/steps/05.png)

## Installing packages

For further actions, you need an installed package manager [Chocolatey](https://jscamp.app/docs/start00#install-chocolatey). Install the packages `node.js` and` yarn` using it.
To start the installation process, run the following commands in PowerShell:

```bash
choco install -y nodejs.install
```

и

```bash
choco install yarn
```

When installing `yarn`, confirm your choice with the letter `Y`.

![15](/img/blogging/00/15.png)

After the download and installation of the packages is complete, a success message appears.

![16](/img/blogging/00/16.png)

We have prepared our computer for creating and editing articles.

![Step06](/img/steps/06.png)

## Creating an article

Open the project copied from `GitHub` in step` Step 02`. In the shell `GitKraken` select the menu item` File`-> `Open Repo in ...` or open the folder with the project manually.
::: info
With the editor `Visual Studio Code` installed, select the menu item `File` -> `Open Repo in Visual Studio Code`.
:::

![17](/img/blogging/00/17.png)

The project will start in the selected editor.

![18](/img/blogging/00/18.png)

Next, go to the `docs` folder and create a new file in it. For example, `blogging00.md`
::: note
The files you create must have the extension \*.md
:::

![19](/img/blogging/00/19.png)

Now let's create a "header" for the created document. To do this, insert this code at the beginning of the document:

```jsx
---
id: ...
title:  ...
sidebar_label: ...
---
```

In the `id` line, write the unique document code. The `title` line contains the title of the article. In the line `sidebar_label` indicate the name of your article, which will be displayed in the left side menu.

To add an article to the left side menu of the site, you need to add its name to the file `sidebars.js`.
To do this, open the file `sidebars.js` in the main directory and add a new line, for example:

```jsx
['Blogging']: ['blogging-00'],
```

Where the first field is responsible for the name of the section in the left side menu, and the second parameter is the unique `id` of the article that you assigned earlier.

![20](/img/blogging/00/20.png)

Now you can start typing.

![Step07](/img/steps/07.png)

## GIF creation

To add gifs, follow the tutorial in this video.

<YouTube videoId='6lGAu4SjcrQ' />

## Running a local server

To check changes in the text in the article in real time, we will organize the launch of a local server. To do this, open the PowerShell shell, go to the folder with the project with the command `cd Full path to the folder` and execute the second command:

```bash
yarn install
```

This command will install the quick article creation wrapper, `Docasaurus`. This shell is installed one time. Thanks to it, you can start the local server at any time with the command:

```bash
yarn start
```

The local server will run in the browser at `Localhost: 3000`.
An Internet browser window with your site will open automatically and you can view the article in real time.

![Step08](/img/steps/08.png)

## Grammar check

Before submitting an article, you need to make sure that the text does not contain grammatical errors. You can check your text on the website [LanguageTool](https://www.languagetool.org/).

To check, copy the text of the article into the text field and press the button `Check Text`. Grammar errors in the text will be highlighted.

![LanguageTool](/img/blogging/00/lgtool.png)

Now, by clicking on the highlighted word, you can correct the grammatical error.

![LanguageTool01](/img/blogging/00/lgtool01.png)

![Step09](/img/steps/09.png)

## Adding article authors and Patreon

After completing the article and checking the grammar, you must mention all the people involved in the article, as shown in the picture below.

![Contributors00](/img/blogging/00/Contributors00.png)

To add authors, open `PowerShell` or` Terminal` (on MacOS) using the command `cd Full path of the project folder` go to the folder of the previously downloaded project. Then enter this command:

```bash
yarn add --dev all-contributors-cli
```

![Contributors01](/img/blogging/00/Contributors01.png)

The process of downloading and installing the `all-contributors` package will begin. This package is installed once. Thanks to this package, you can add people involved in the project and their contributions. To do this, while in the project folder, enter the command in `PowerShell`:

```bash
yarn all-contributors add Логин_GitHub Вклад
```

The types of contributions to the project are described [here](https://allcontributors.org/docs/en/emoji-key), in column Emoji/Type.

![Contributors03](/img/blogging/00/Contributors03.png)

Login can be found in the profile `GitHub`

![Contributors02](/img/blogging/00/Contributors02.png)

Example:

```bash
yarn all-contributors add KoDim-React mentoring
```

After that, you need to apply the changes with the command:

```bash
yarn all-contributors generate
```

Added authors will automatically appear at the end of the file README.md

![Contributors04](/img/blogging/00/Contributors04.png)

Now you need to copy the entire block of this code and paste it at the end of your article.

![Contributors05](/img/blogging/00/Contributors05.png)

Thus, you will copy to your project all users recorded in `README.md`
To delete users not involved in the article, you need to delete the corresponding cell `<td>`.

![Contributors06](/img/blogging/00/Contributors06.png)

It remains to add a link at the end of the article to `Patreon`:

```bash
[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)
```

The article is ready to be sent!

![Step10](/img/steps/10.png)

## Submitting an article

After you have typed and saved the text, you need to send it for review. The check allows you to understand whether it is possible to embed your work into the main project code. To do this, open the program `GitKraken` and (if the project is not open yet) open the previously downloaded project at` Step 02` with the button `Open a repo`.

![21](/img/blogging/00/21.png)

Your project window will open.

![22](/img/blogging/00/22.png)

On the right, in the `Unstaged Files` block, there are files that you have changed or added. To apply the changes, press the button `Stage all changes`.

![23](/img/blogging/00/23.png)

Further, at the bottom right, at the `Commit Message` block in the` Summary` field we indicate a brief commentary on what has been done and press the button `Commit changes to ... files`.

![24](/img/blogging/00/24.png)

To send changes to the `GitHub` server, click the button `Push`.

![25](/img/blogging/00/25.png)

Now you need to send a request to merge your version of the project code with the main repository. To do this, go to the site `GitHub` to your copy of the project and select the branch `gh-pages`.

![26](/img/blogging/00/26_00.png)

Push the button `Pull request`.

![26](/img/blogging/00/26.png)

Next, we leave a comment to the reviewer (Reviewer) and press the button `Create pull request`.

![27](/img/blogging/00/27.png)

Your project has been sent for review. When the reviewer is convinced that everything is in order, your code will be aligned with the main one. Now your article is available for viewing on any device on the Internet!

![Step11](/img/steps/11.png)

## Editing an article

Service `GitHub` allows you to quickly and conveniently edit existing articles. To do this, go to the `GitHub` site with your project.

![28](/img/blogging/00/28.png)

Then we open the required file for editing.
:::note
All articles are stored in the docs folder.
:::

![29](/img/blogging/00/29.png)

Then press the button `Edit this file`.

![30](/img/blogging/00/30.png)

Now you can make the changes you want.

![31](/img/blogging/00/31.png)

To apply the changes, you need to click on the `Commit changes` button. If necessary, add a comment to the changes.

![32](/img/blogging/00/32.png)

As a result, we create a `Pull request`, as it was shown in the previous topic" Creating an article ". The changes will go to the Reviewer for verification.

![Step12](/img/steps/12.png)

## Basic text formatting capabilities Docusaurus

All articles on this site are written using `Docusaurus`. This is a tool with which you can easily create such Internet documents. And like all other similar services, it has its own syntax.

For example, ways to highlight text:

```jsx
:::note
The note.
:::

:::tip
Hint.
:::

:::info
Information.
:::

:::caution
Warning!
:::

:::danger
Danger!
:::
```

This is how it will look on the site:
:::note
The note.
:::

:::tip
Hint.
:::

:::info
Information.
:::

:::caution
Warning!
:::

:::danger
Danger!
:::

You can also give themes to such windows, for example:

```jsx
:::note Subject
The note.
:::
```

:::note Subject
The note.
:::

To highlight the code, use the expression:

````jsx
'```jsx
Code
```'
````

(Expression is used without quotes)

You can also highlight words by adding ``, for example:

```jsx
``Example``
```

It will look like: `Example`

You can make it so that any text can be copied with one button.

````jsx
'```bash
Example
```'
````

(Expression is used without quotes)

It will look like:

```bash
Example
```

To insert a link, you must use the following syntax:

```jsx
[Text that opens a link when clicked] (Link to website)
```

[Example](https://github.com)

Images are inserted in the same way.

```jsx
![Image name to be displayed if image is not available] (Path to image)
```

To insert an image with a link, use the combined syntax of the previous two commands.

```jsx
[![Tex] (Path to the picture)] (Link)
```

These are just the most basic text formatting techniques, you can read more in the [official documentation Docusaurus](https://v2.docusaurus.io/docs/markdown-features/).

## Questions:

What is the main function of `GitHub`?

1. Forum for programmers
2. Hosting open IT projects for collaboration
3. Cloud file storage

What is the function of the `Fork` button on` GitHub`?

1. Downloads the repository
2. Makes a copy of the repository in your profile
3. Gives access to the main repository

What extension should the article file have?

1. .doc
2. .txt
3. .md

In which folder are the articles of our project stored?

1. docs
2. blog
3. src

What team are added users involved in the project?

1. yarn all-contributors add
2. yarn all-contributors generate
3. yarn all-contributors init

What does the `Pull request` button do?

1. Sends a request to merge your version of the project code with the main repository
2. Submits code changes directly to the main repository
3. Saves a copy of the repository

What is `Docusaurus`?

1. Tool for working with code
2. Tool for creating internet documents
3. Tool for creating markup

Which of the following methods is used to create a selection of text?

1. ::note ::
2. :::note :::
3. "note"

How do I insert an image?

1. `[Text] (Path to image)`
2.` (Text) (Path to image) `
3. `! [Text] (Path to image)`

## Links:

1. [GitHub](https://github.com/)
2. [Documentation Docusaurus](https://v2.docusaurus.io/docs/)
3. [Official site GitKraken](https://www.gitkraken.com/)
4. [Official site Visual Studio Code](https://code.visualstudio.com/)
5. [Grammar Checker Site LanguageTool](https://www.languagetool.org/)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/FELiX-RN"><img src="https://avatars0.githubusercontent.com/u/72006627?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Philipp Dvinyaninov</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=FELiX-RN" title="Documentation">📖</a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/KoDim-React"><img src="https://avatars1.githubusercontent.com/u/72087863?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy K.</b></sub></a><br /><a href="#mentoring-KoDim-React" title="Mentoring">🧑‍🏫</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
  </tr>
  
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)
![pullreqest](/img/blogging/00/33.png)
