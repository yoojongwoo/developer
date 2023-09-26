module.exports = {
    printWidth: 130, // 코드의 가로 폭은 130칸으로 제한 합니다.
    tabWidth: 4,
    useTabs: false,
    semi: true, // 세미콜론이 없으면 세미콜론 을 마지막에 찍습니다.
    singleQuote: true, // 쌍따옴표가 아닌 외따옴표로 사용합니다.
    quoteProps: 'consistent', // object 에 따옴표가 하나라도 있으면 다 따옴표 있는걸로, 없으면 없는걸로 강제 합니다.
    trailingComma: 'es5', // 객체 , 배열이 여러줄일때 마지막에 콤마가 오는 기준으로 es5 에 부합되면 콤마 찍음.
};
