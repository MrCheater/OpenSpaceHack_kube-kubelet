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
