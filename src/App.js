//jsx를 사용하기위해 import React 를 해줘야 했었지만
//버전이 올라가면서 index.js에만 import React 를 선언하고
//함수로 정의된 컴포넌트에서는 따로 import React를 선언하지 않아도 된다.

import "./App.scss";
import Wrapper from "./components/Wrapper";
import MemberList from "./components/MemberList/MemberList";
import TodoStateProvider from "./providers/TodoStateProvider";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <TodoStateProvider>
          <MemberList />
        </TodoStateProvider>
      </Wrapper>
    </div>
  );
}

export default App;
