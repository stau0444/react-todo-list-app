import useActions from '../../hooks/useActions';
import useMembers from '../../hooks/useMembers';
export default function CreateMember(){
    const {onSubmit} = useActions();
    const {nameInput} = useMembers();
    return(
        <div>
            <input className="member-nameInput" ref={nameInput} type="text" placeholder="할 일"/>
            <button className="member-nameButton" onClick={onSubmit}>추가</button>
        </div>
    );
}