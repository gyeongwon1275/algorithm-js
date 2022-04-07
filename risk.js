/**
 *
 * @param inclusives {superset: string, subset: string}[]
 * @param exclusives Set<string>[]
 *
 */
class Relation {
  constructor(inclusives, exclusives) {
    /* 
        
      inclusives, exclusives 를 가지고 포함관계, 배반관계를 나타내는 집합을 생성함

      getInclusive, getExclusive 메서드 호출 시 해당 집합을 사용하여 결과값을 반환함

      일차적으로 inclusives 를 가지고 집합을 생성한 다음 exclusives 에서 빠트린 부분을 보충하여
  
      집합을 생성함

      getInclusive 에서 포함관계이면 정렬된 결과를 반환하도록 했기 때문에 포함관계인 위험률들은 위험률 간의 포함관계가 있는 것으로 가정함 

      위험률의 포함관계가 linkedList 형태로 가정함 

      ex> q1 ⊃ q2, q1 ⊃ q3 일경우 q2, q3 간의 포함관계가 존재한다고 가정함

        */

    /*  superset 이 같은 inclusive 들을 모음 

   ex > inclusives 가 아래 처럼 들어올 경우 
  { superset: "q1", subset: "q2" },
  { superset: "q3", subset: "q4" },
  { superset: "q1", subset: "q3" },
  { superset: "q2", subset: "q3" },
   
[q1,q2], [q3,q4] 로 분리되는 것을 방지하기 위해 정렬을 통해 같은 superset 을 가진 것들 끼리 모음

  { superset: "q1", subset: "q2" },
  { superset: "q1", subset: "q3" },
  { superset: "q2", subset: "q3" },
  { superset: "q3", subset: "q4" },
  
   */

    inclusives.sort((a, b) => a.superset - b.superset);

    this._totalSet = [];

    for (const { superset, subset } of inclusives) {
      if (!this._totalSet.length) {
        this._totalSet.push([superset, subset]);
        continue;
      }

      let riskExist = false;
      // 기존의 위험률 목록에 새로운 위험률를 추가하는 과정
      for (const riskList of this._totalSet) {
        const supersetPointer = riskList.findIndex((risk) => risk === superset);
        const subsetPointer = riskList.findIndex((risk) => risk === subset);

        // 두 위험률 중 둘다 없는경우
        if (supersetPointer === -1 && subsetPointer === -1) {
          break;
        }
        riskExist = true;

        // 두 요소가 이미 있는 경우
        if (supersetPointer !== -1 && subsetPointer !== -1) {
          // 포함 관계가 올바르지 않을 경우 두 요소의 위치를 변경한다.
          if (supersetPointer > subsetPointer) {
            const temp = riskList[supersetPointer];
            riskList[supersetPointer] = riskList[subsetPointer];
            riskList[subsetPointer] = temp;

            break;
          }
        }
        // riskList 안에 superset 은 없는데 subset 은 있는 경우
        if (supersetPointer === -1 && subsetPointer !== -1) {
          // superset을 subsetPointer 왼쪽에 넣는다.

          riskList.splice(subsetPointer, 0, superset);

          break;
        }
        // riskList 안에 subset 은 없는데 superset 은 있는 경우
        if (supersetPointer !== -1 && subsetPointer === -1) {
          // subset 을 supersetPointer 오른쪽에 넣는다.
          riskList.splice(supersetPointer + 1, 0, subset);

          break;
        }
      }

      // 기존 list 에 없는 조합이면 추가한다.
      if (!riskExist) {
        this._totalSet.push([superset, subset]);
      }
    }

    for (const exclusive of exclusives) {
      for (const risk of exclusive.values()) {
        let riskExist = false;

        for (const riskList of this._totalSet) {
          if (riskList.includes(risk)) {
            riskExist = true;
            break;
          }
        }
        // inclusives 를 가지고 만든 집합안에 없는 요소가 있으면 추가한다.
        if (!riskExist) {
          this._totalSet.push([risk]);
        }
      }
    }
  }

  getInclusive(risk, risks) {
    // 인자로 받은 risk 가 속한 list 를 찾는다.
    const originRiskList = this._totalSet.find((riskList) =>
      riskList.includes(risk)
    );

    const tatalRisks = [risk, ...risks];
    const inclusive = [...originRiskList];

    // risk, risks 에 없는 risk 일 경우 제거한다.
    for (let i = 0; i < inclusive.length; i++) {
      if (!tatalRisks.includes(inclusive[i])) {
        inclusive.splice(i, 1);
      }
    }

    // 포함관계가 없을 경우 빈배열 반환하기 위함
    if (inclusive.length === 1) {
      inclusive.pop();
    }
    return inclusive;
  }

  getExclusive(risk, risks) {
    const exclusive = [];

    const riskList = this._totalSet.find((riskList) => riskList.includes(risk));

    risks.forEach((risk) => {
      if (!riskList.includes(risk)) {
        exclusive.push(risk);
      }
    });

    return exclusive;
  }
}

const inclusives = [
  { superset: "q1", subset: "q2" },
  { superset: "q2", subset: "q3" },
  { superset: "q4", subset: "q5" },
];

const exclusives = [new Set(["q2", "q4"]), new Set(["q2", "q6"])];

const relations = new Relation(inclusives, exclusives);

console.log(relations.getInclusive("q1", ["q2", "q4"])); // [ 'q1', 'q2' ]
console.log(relations.getInclusive("q2", ["q1", "q3"])); // [ 'q1', 'q2', 'q3' ]
console.log(relations.getInclusive("q2", ["q1"])); // [ 'q1', 'q2' ]
console.log(relations.getInclusive("q4", ["q1"])); // []

console.log(relations.getExclusive("q3", ["q6", "q5"])); // [ 'q6', 'q5' ]
console.log(relations.getExclusive("q1", ["q2", "q4"])); // [ 'q4' ]

const relations2 = new Relation(
  [
    { superset: "q1", subset: "q2" },
    { superset: "q2", subset: "q3" },
    { superset: "q2", subset: "q5" },
    { superset: "q1", subset: "q3" },
  ],
  exclusives
);

console.log(relations2.getExclusive("q1", ["q2", "q4", "q6", "q3", "q5"])); // [ 'q4', 'q6' ]
