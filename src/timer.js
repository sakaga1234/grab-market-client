import React from 'react';

function TimerComponent() {
    //1. time에는 기본 값으로 0이 들어간다.
    const [time, setTime] = React.useState(0)
    console.log('Component 업데이트');
    React.useEffect(
        function() {
            setTime(time+1);
            console.log('딱 한번 실행 됩니다.')
        },
        []
    );
    return (
        <div>
            <h3>{time}초</h3>
            <button>1씩 올려주세요.</button>
        </div>
    )
 }
 export default TimerComponent