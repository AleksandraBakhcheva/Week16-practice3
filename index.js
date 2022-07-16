// 1. Дан массив ['js', 'css', 'html']. Выведите на экран первый элемент.
const languages = ['js', 'css', 'html'];
alert(languages[0]);

// 2. Отфильтруйте массив [0, 1, false, 2, undefined, '', 3, null] от нежелательных значений, таких как false, undefined, пустые строки, 0, null с помощью метода filter.  Ожидаемый результат: [1, 2, 3].
const random = [0, 1, false, 2, undefined, '', 3, null];
const correct = random.filter(function(n) {
    if (n == 0 && n == false && n == undefined && n == '' && n == null) {
        return 0;
    }
    else {
        return n;
    }
});
alert(correct);

// 3. Дан массив [[1,2], [1,2,3], [1,2,3,4]]. Найдите индекс массива, длина которого > 3. Ожидаемый результат: 2
const array = [[1,2], [1,2,3], [1,2,3,4]];

const index = array.findIndex(findArray);
alert(index);

function findArray(n) {
    if (n.length > 3) {
        return n;
    }
    else {
        return 0;
    }  
}
