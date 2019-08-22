## 1 安装

> 安装Node.js比较容易。其设计理念之一就是只维护少量的依赖，这使得编译、安装Node.js变得非常简单。
>
> 本章介绍在Windows、OS X、以及在Linux系统下安装Node.js。在Linux系统下，要以编译源代码的方式进行安装，得先确保正确安装了其依赖的软件包。

### 1.1 在Windows下安装

Windows用户要安装Node.js，只需前往其官网http://nodejs.org下载MSI安装包即可，安装包文件名遵循node-v?.?.?.msi的格式。

要验证是否安装成功，可以打开shell或者通过执行cmd.exe打开命令行工具并输入```$ node -version```，如果安装成功，就会显示安装的Node.js的版本号。

### 1.2 在OS X下安装

在Mac下和在Windows下安装类似，可通过下载PKG文件的安装包进行安装；若要通过手动编译来进行安装，需要安装XCode，然后根据Linux系统下的编译步骤进行编译安装。

 要验证是否安装成功，打开shell或者运行Terminal.app打开终端工具，输入```node -version```,如果安装成功，会显示对应的Node.js的版本号。

### 1.3 在Linux下安装

在绝大多数*nix系的系统中编译Node.js，只要确保系统中有C/C++编译器以及Open SSL库就可以了。

大部分的Linux发行版本都有自带包管理器，通过它可以很方便地进行安装。

例如，在Amazon Linux中，可以通过如下命令来安装依赖包：

```
sudo yum install gcc gcc-c++ open
```

在Ubuntu中，安装方式稍有不同，命令如下：

``` javascript
sudo apt-get install g++ libssl-dev apache2-utils curl  
```

**编译**

在操作系统终端下，运行如下命令：

```
$ curl -O http://nodejs.org/dist/node-v?.?.?.tar.gz
$ tar -xzvf node-v?.?.?.tar.gz //解压缩
$ cd node-v?.?.?
$ ./configure
$ make
$ make test
$ make install
```



## 5 命令行工具(CLI)以及FS API：首个Node应用

> 本章将介绍使用Node.js中一些重量级API：处理进程(stdio =>standard input&output )的stdin和stdout相关的API，还有那些与文件系统(fs)相关的API。(fs => file system)
>
> 第4章中介绍过，Node通过使用**回调**和**事件机制**来实现并发。这些API会让你首次接触到基于非阻塞事件的I/O编程中的流控制。
>
> 本章目标：构建首个应用，一个简单的命令行文件浏览器，其功能是允许用户**读取**和**创建**文件

### 5.1 需求

首先定义需求：

- 程序需要在命令行运行。这就意味着程序要么通过node命令来执行，要么直接执行，然后通过终端提供交互给用户进行输入、输出。
- 程序启动后，需要显示当前目录下文件列表。
- 选择某个文件时，程序需要显示该文件的内容。
- 选择一个目录时，程序需要显示该目录下的信息。
- 运行结束后程序退出。

根据上述需求，项目可细分为以下几个步骤：

1. 创建模块。
2. 决定采用同步的fs还是异步的fs。
3. 理解什么是**流**(Stream)。
4. 实现输入输出。
5. 重构。
6. 使用fs进行文件交互。
7. 完成。

### 5.2 编写首个Node程序

