import CreateMember from './CreateMember';
import useMembers from '../../hooks/useMembers';
import Member from './Member';

export default function MemberList() {

    const {members,memberCount} = useMembers();
    
    return(
        <div className="member-list-container">
            <h3 className="member-title">Haza</h3>
            <p>총 할일 : {memberCount}</p>
            <CreateMember/>
            <ul>
            <table className="member-table">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>NAME</td>
                        <td>수정</td>
                        <td>삭제</td>
                    </tr>
                </thead>
                <tbody>
                {members.map((member)=>{
                    return (
                        <Member key={member.id} member={member} />
                    );
                })}
                </tbody>              
            </table>
            </ul>
        </div>
    );

}



