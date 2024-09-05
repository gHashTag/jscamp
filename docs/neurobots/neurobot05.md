---
id: neurobot05
title: Setting up the working environment
sidebar_label: Setting up the working environment
---

import YouTube from 'react-youtube'

# Setting Up a Development Environment with Supabase, Docker, and ngrok

![neurocoder](/img/neurobots/neuro5.png)

Creating a development environment for building applications using Supabase, Docker, and ngrok is an essential step for effective work. In this article, we will discuss how to install and configure each of these technologies.

<YouTube videoId='ahD6pr87l0M' />

## 1. Supabase: Install Supabase CLI

Supabase CLI provides tools for developing your project locally and deploying it on the Supabase platform.

### Installing Supabase CLI

To install Supabase CLI, run the following command:

```bash
npm install supabase --save-dev
```

After installation, you can run CLI commands using npx:

```bash
npx supabase <command>
```

To check the installed version of Supabase CLI, use the command:

```bash
supabase -v
```

This will ensure that you are using the latest version of the CLI compatible with the required features. It is recommended to use version v1.46.4 or higher for the best experience.

## 2. Docker Desktop: Install Docker Desktop

Docker Desktop is an application that allows you to develop and test applications in containers. Installing Docker is necessary for the Supabase CLI to work, as it uses containers to manage the local environment.

### Installing Docker Desktop

1. Go to the official Docker website and download the installer for your operating system.
2. Follow the on-screen instructions to complete the installation.
3. After installation, launch Docker Desktop and ensure it is running correctly.

## 3. ngrok: Install ngrok Using Chocolatey

ngrok is a tool for creating secure tunnels to local servers. It allows you to share local web applications with others via a public URL.

### Installing ngrok

If you have Chocolatey installed, you can install ngrok using the following command:

```bash
choco install ngrok
```

If you do not have Chocolatey, you can download ngrok from the official website and follow the installation instructions.

## Conclusion

Now you have set up a development environment with Supabase, Docker, and ngrok. These tools will help you effectively develop and test your applications. Supabase provides powerful capabilities for working with databases, Docker allows you to manage dependencies in containers, and ngrok simplifies access to your local applications. Good luck with your development!

