# OpenSpaceHack - Куб Кублет
Чат-бот для хакатона Банка «Открытие»
## Что мы сделали за хакатон:
* Преобразовали "База знаний.xlsx" в удобный JSON 
```
type Database = Array<{
  type: string;
  subType?: string;
  question: string;
  linkVideo?: string;
  linkFAQ?: string;
  linkSite?: string;
  steps: Array<string>;
}>
```
* Составили базу синонимов на основе API https://synonymonline.ru/assets/json/synonyms.json для замены слов и словосочетаний в запросах пользователя на слова, знакомые нашему боту
  https://github.com/MrCheater/OpenSpaceHack_kube-kubelet/blob/main/src/cache.ts#L1404 
  (код генерации базы синонимов https://github.com/MrCheater/OpenSpaceHack_kube-kubelet/blob/main/src/ml.ts#L54)
* Составили список малозначимых слов https://github.com/MrCheater/OpenSpaceHack_kube-kubelet/blob/main/src/cache.ts#L1 , чтобы присваивать им меньший вес
* Преобразовали вопросы из базы данных в начальную форму для лучшего поиска https://github.com/MrCheater/OpenSpaceHack_kube-kubelet/blob/main/src/cache.ts#L37
* Написали алгоритм ранжирования результатов поиска с весами, который в наших тестах показывает 84.4% правильных ответов 
* Настроили запуск в Docker-контейнере

## Стек технологий
Node.js + React
## Требования к системе
* Node.js 12+
## Установка
```sh
git clone https://github.com/MrCheater/OpenSpaceHack_kube-kubelet.git
cd OpenSpaceHack_kube-kubelet
npm install
npm start
```
Результат:
```sh
Example app listening at http://localhost:3000/api/chat/v1/bot?question=
```
## Запуск в Docker
```sh
docker build -t open-space-hack-kube-kubelet .
```
```sh
Sending build context to Docker daemon  265.8MB
Step 1/6 : FROM mhart/alpine-node:14.14.0
 ---> 10a4785fb073
Step 2/6 : WORKDIR /app
 ---> Using cache
 ---> 8ec3ecc46f96
Step 3/6 : COPY . .
 ---> c3026764fb00
Step 4/6 : RUN npm install
 ---> 7486ce73996a
Step 5/6 : EXPOSE 3000
 ---> Running in 9b094066a1bf
Removing intermediate container 9b094066a1bf
 ---> bdcc6b0cac8e
Step 6/6 : CMD ["node", "./lib/index.js"]
 ---> Running in beb8e3ee3557
Removing intermediate container beb8e3ee3557
 ---> 0b4edae97d47
Successfully built 0b4edae97d47
Successfully tagged open-space-hack-kube-kubelet:latest
```
```sh
docker run -p 3000:3000 --name open-space-hack-kube-kubelet open-space-hack-kube-kubelet
```
```sh
Example app listening at http://localhost:3000/api/chat/v1/bot?question=
```
## Бенчмарк / Автоматизированное тестирование
```sh
npm run test
```
Результат:
```sh
QUALITY = 84.4%

Test Suites: 1 failed, 1 total
Tests:       45 failed, 245 passed, 290 total
Snapshots:   0 total
Time:        2.675 s, estimated 3 s
```
## Ручное тестирование 
![WEB](https://user-images.githubusercontent.com/5055654/97077660-2f021f00-15ee-11eb-8b08-d3d6b88f822e.png)
![CLI](https://user-images.githubusercontent.com/5055654/97078005-560e2000-15f1-11eb-8175-70674798e621.png)
