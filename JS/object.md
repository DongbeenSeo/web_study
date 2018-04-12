# TIL

---

## 객체(Object)

### 객체 생성

```js
const grades = { 'egoing': 80, 'k88': 70, 'sori': 90 };
```

객체를 생성하면 'egoing'은 key가 되고 80은 value가 된다.

```js
var grades = new Object();
grades['egoing'] = 10;
grades['k8805'] = 6;
grades['sorialgi'] = 80;
```

new라는 생성자를 통해 객체를 생성할 수도 있다.

### 반복문을 통한 객체 접근

for ~ in 문을 통해 반복적으로 객체에 접근할수 있다.

```js
for (key in grades) {
    document.write(`<li>key: ${key}, values: ${grades[key]}</li>`)
}
```

### 특징

* 객체안에 객체를 가질수도 있고, 함수또한 가질수 있다.
* 이때 이 함수를 메소드라 한다.

```js
let grades = {
            'list': {'egoing': 80, 'k88': 70, 'sori': 90},
            'show': function() {
                for (key in this.list) {
                    console.log(key, this.list[key]);
                }
            }
        }
```

* 메소드에서 this를 사용하면 객체에 접근할수 있고 예시와 같이 객체 속성에 접근할수도 있다