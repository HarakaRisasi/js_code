const makeServerRequest = new Promise((resolve, reject) => {
    let responseFromServer = false;

    if (responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});
/*
 Метод catch() возвращает Promise(обещание) и работает только в случае отклонения обещания.
 Метод catch может быть полезен для обработки ошибок в вашей структуре обещаний.
 */
makeServerRequest.catch(error => {
    console.log(error);
}); //=> 'Data not received'