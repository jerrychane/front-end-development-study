# 制定 node 镜像版本
FROM node:8.9-alpine
# 声明作者
MAINTAINER jerrychane
# 移动当前目录下面的文件到 app 目录下
ADD . /app/
# 进入到 app 目录下面,类似 cd
WORKDIR /app
# 安装依赖
RUN npm install
# 对外暴露接口
EXPOSE 3000
# 程序启动脚本
CMD [ "npm", "start" ]