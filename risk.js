class Relation {
  constructor(inclusives, exclusives) {
    /* 
        
        - inclusives 를 superset 기준으로 정렬해서 같은 superset을 가지는 것끼리 모은다. 

        - inclusive를 totalSet 에 넣는다. 

           - _totalSet 이 비어있으면 새로운 배열을 만들어서 inclusive 의 superset, subset 으로 할당된 것을 넣는다. 

           - _totalSet 이 비어있지 않으면, inclusive 의 superset, subset 이 _totalSet 

        */

    this._totalSet = [];

    for (const { superset, subset } of inclusives) {
      if (!this._totalSet.length) {
        this._totalSet.push([superset, subset]);
        continue;
      }

      let riskExist = false;

      for (const riskList of this._totalSet) {
        const supersetPointer = riskList.findIndex((risk) => risk === superset);
        const subsetPointer = riskList.findIndex((risk) => risk === subset);

        // 두 요소중 하나라도 없는경우
        if (supersetPointer === -1 && subsetPointer === -1) {
          break;
        }
        riskExist = true;

        // 두 요소가 이미 추가된 경우
        if (supersetPointer !== -1 && subsetPointer !== -1) {
          // 정렬 순서가 올바르지 않을 경우 두 요소의 위치를 변경한다.
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

        if (!riskExist) {
          this._totalSet.push([risk]);
        }
      }
    }
  }

  getInclusive(risk, risks) {
    // console.log("this._totalSet", this._totalSet);
    const originRiskList = this._totalSet.find((riskList) =>
      riskList.includes(risk)
    );

    const tatalRisks = [risk, ...risks];
    const inclusive = [...originRiskList];

    for (let i = 0; i < inclusive.length; i++) {
      if (!tatalRisks.includes(inclusive[i])) {
        inclusive.splice(i, 1);
      }
    }

    if (inclusive.length === 1) {
      inclusive.pop();
    }
    return inclusive;
  }

  getExclusive(risk, riskList) {}
}

const inclusives = [
  { superset: "q1", subset: "q2" },
  { superset: "q2", subset: "q3" },
  { superset: "q4", subset: "q5" },
];

const exclusives = [new Set(["q2", "q4"]), new Set(["q2", "q6"])];

const relations = new Relation(inclusives, exclusives);

console.log(relations.getInclusive("q1", ["q2", "q4"]));
console.log(relations.getInclusive("q2", ["q1", "q3"]));
console.log(relations.getInclusive("q2", ["q1"]));
console.log(relations.getInclusive("q4", ["q1"]));
