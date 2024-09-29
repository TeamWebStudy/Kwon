# #3 STATE
## #3.6 State Practice part One


<h3>1. state 생성 (setState의 결과 : array)</h3>

<p>
  setState default 값(React.useState(0)) : 0 <br />
  -> default 값(minutes 부분) : 0 <br />
</p>

```
const [minutes, setMinutes] = React.useState(0);
//   -> 첫 번째 요소 : 데이터 , 두 번째 요소 : 데이터를 수정하기 위한 함수
```

<h3>2. input의 value를 state로 연결</h3>
<p>
  -> 어디서든 input의 value 수정 가능하다(+)
</p>

<h3>3. onChange 함수 : 데이터(input에서 리스닝하는 데이터)를 업데이트 해주는 역할</h3>

- input은 스스로 업데이트 한다.
- change 이벤트 발생 시(사용자가 input에 뭔가를 써넣을 때) onChange 함수 실행

<h4>onChange 함수</h4>

- event.target.value를 얻게 된다.(input value)
- setMinutes의 데이터(minutes)가 업데이트 된다.
- input이 업데이트 된다.


```
const onChange = (event) => {
  setMinutes(event.target.value);
};

...

<div>
  <label htmlFor="minutes">Minutes</label>
  <input
    value="{minutes}"
    id="minutes"
    placeholder="Minutes"
    type="number"
    onChange="{onChange}"
  />
</div>
```
