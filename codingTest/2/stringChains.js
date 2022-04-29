/* 

단어의 배열

다른 단어로 만들어 질 수 있는 지 확인

string chain 은 1부터 시작

문자가 제거 될 때마다 string chain 증가

words = ['a','and','an','bear']

and  => an => a

=>3

["a", "b", "ba", "bca", "bda", "bdca"]

가장 긴 string chain 

아래예시는 전부 4니까 4

bdca => bda => ba => a

bdca => bda => ba => b

bdca => bca => ba => b 

bdca => bca => ba => a 


모든 단어에 대해서 strign chain 을 구하면서 최대값을 update 

전부 확인하면 끝

two pointer 

o(n2)

dynamic 프로그래밍 ?? 

길이가 작은 순으로 정렬

작은거 부터 계산 => hash table 에 넣음 

hash table 에 있으면 더함 

더할 때 문자는 중복 안됨 


ba = a + b = 2

hash table 에서 찾을 때는 긴거 부터 찾음 

bda = ba => 2 

bdca = bda(2) + bca(2) = 4


사전 순이 아니라 길이순 정렬

한개짜리는 무조건 1
두개 짜리는 regex 사용 

기존에 확인 했던 거를 포함하는지 확인 

hash table 기준으로 새로운 단어에 대해서 확인


sort((a,b)=>a.length-b.length);


ba 

ba 보다 길이작은 애들 만 


chain 이 될 수 있는지 확인 


chain 을 만들어 본다. 

요소 마다 chain 을 만들면서 count 

정렬 했다고 치고 

["a", "b", 'bc','ca',"ba", "bca", "bda", "bdca"]

ba
bc
ca



*/

function longestChain(words) {
  words.sort((a, b) => a.length - b.length);

  let result = 1;

  const table = {};

  for (const word of words) {
    if (word.length === 1) {
      table[word] = 1;
    } else {
      const tableWords = Object.keys(table);
      const subWords = tableWords.filter((subWord) =>
        new RegExp(subWord).test(word)
      );

      console.log("word", word);
      console.log("subWords", subWords);
      // .sort((a, b) => b.length - a.length);

      const pivotLength = subWords.length > 0 && subWords[0].length;

      const filteredSubWords = subWords.filter(
        (word) => word.length === pivotLength
      );
      // 나보다 길이가 작아야 함
      // sort

      // 맨 첫번째 요소 길이 확인

      // 해당 길이를 가지는 요소만 filter

      let stringChain = 0;

      // 내 길이보다 한단계 작은길이 만 더함

      console.log("word", word);
      console.log("subWords", subWords);
      console.log("filteredSubWords", filteredSubWords);

      filteredSubWords.forEach((subWord) => {
        stringChain = stringChain + table[subWord];
      });

      table[word] = stringChain;

      console.log("table", table);

      result = Math.max(result, stringChain);
    }
  }

  return result;
}

/* console.log(
  "longestChain",
  longestChain(["a", "b", "ba", "bca", "bda", "bdca"])
); */

/* 
a
zxb
ba
bca
bda
bdca
zxbe
azxbe
azxpbe

*/

console.log(
  "longestChain",
  longestChain([
    "a",
    "zxb",
    "ba",
    "bca",
    "bda",
    "bdca",
    "zxbe",
    "azxbe",
    "azxpbe",
  ])
);
// a 가 ba 안에 있니?

// zxb 가 azxbe 안에 있니?

console.log(/a/g.test("ba"));
