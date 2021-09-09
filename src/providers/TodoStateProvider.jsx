import {useState,useRef,useMemo,useEffect} from 'react';
import TodoStateContext from '../contexts/TodoStateContext';

const TodoStateProvider = ({children})=>{
    const [members , setMembers] = useState([
        {id:0 , name:'ugo'},
        {id:1 , name:'hwang'},
        {id:2 , name:'kokaka'},
    ]);
    
    //이름 수정 input toggle
    const [updateState ,setUpdateState] = useState([{id:0 , update : false}]);

    //현재 멤버수 관리 function
    const totalCount = () => {
    console.log('count');
    console.log(members.length);
    return members.length;
    };

    //현재 멤버수 (members.length를 디펜던시로 줘서 해당 값이 변경될 때만 함수가 호출된다.)
    const memberCount = useMemo(totalCount, [members.length]);

    useEffect(()=>{
    return()=>{console.log('cleanUp');};
    },[]);


    // const onFocusOut = useCallback((id) =>{
    // setUpdateState([{id:id , update : false}]);
    // },[]);

    const onModify = (id,updateName) => {
    const updateMember = members.find(member=>member.id === id);
    const index =members.indexOf(updateMember);
    members[index] = {id:updateMember.id , name: updateName};
    //setMembers([...members]);
    setUpdateState([{id:updateMember.id , update : false}]);
    };
    //할일 삭제
    const onRemove = (id) =>{
    const remainMember = members.filter(member => member.id !== id); 
    setMembers([...remainMember]);
    };
    
    //수정 버튼후 인풋창 opne
    const changeForm = (id) => {
        const updateMember = members.find(member=>member.id === id);
        setUpdateState({id:updateMember.id , update:true});
    };
    //할일 등록 함수
    const idCount = useRef(3);
    const nameInput = useRef('');
    const onSubmit = () => {
        const name = nameInput.current.value;
        if(name === ''){
            alert("할일을 적어주세요");
            return;
        }
        setMembers([...members,{id:idCount.current ,name:name }]);
        nameInput.current.value='';
        idCount.current++;
    };
    return<TodoStateContext.Provider
            value={{
                members,
                updateState,
                memberCount,
                nameInput,
                onModify,
                onRemove,
                changeForm,
                onSubmit,
            }}
            >
            {children}
        </TodoStateContext.Provider>;
};

export default TodoStateProvider;
