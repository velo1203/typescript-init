// GenericIdentityFn 인터페이스를 구현하는 함수 identity를 정의합니다.
function identity<T>(arg: T): T {
    return arg;
}

// identity 함수의 타입을 GenericIdentityFn<string>으로 지정합니다.
let myIdentity: GenericIdentityFn<string> = identity;
