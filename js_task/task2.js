var person = {
    name: "홍길동",      
    birthday: "030219",  
    age: 30,
    pId: "1234567",      
    fullId: function() {
        return this.birthday + this.pId;
    },
};

console.log(person.fullId());

// this는 현재 객체를 참조한다. 
// 위의 예시코드에서는 this.birthday와 this.pId가 각각 person 객체의 birthday와 pId 속성을 참조한다. 
// 이 속성들이 person 객체 내에서 정의되어 있어서 this는 문제가 되지 않는다.
// 따라서 위의 예시코드는 에러없이 정상적으로 작동한다. 