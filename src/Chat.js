import React, { useState } from 'react';
import styled from 'styled-components';
import Avatar from './Components/Avatar';
import Text from './Components/Text';
import image from '../src/assets/images/marymeeker.jpg';
import color from './Components/color';

const Container = styled.div`
    margin-top: 24px;
    display: flex;
    flex: 1;
    width: 100%;
    background-color: ${color.white};
    align-items: center;
    justify-content: center;
    height: 100vh;
`
const ChatContainer = styled.div`
    max-width: 500px;
    width: 100%;
    height: 100vh;
    background-color: ${color.white};
    display: flex;
`
const UserContainer = styled.div`
    flex: 1;
    display: flex;
    margin-left: 16px;
`
const TimeAgoContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
`
const CommentContainerOne = styled.div`
    position: absolute;
    display: flex;
    cursor: pointer;
    height: auto;
    flex: 1;
    max-width: 440px;
    width: 100%;
    background-color: ${color.whiteSmoke};
    border-radius: 6px;
    padding: 16px 16px 8px 16px;
    margin-left: 8px;
    // transition: transform 1s;
    // :hover {
    //     opacity: 1;
    //     transform: rotate(-360deg);
    // }
`
const CommentContainerTwo = styled.div`
    position: absolute;
    display: flex;
    cursor: pointer;
    height: auto;
    flex: 1;
    max-width: 440px;
    width: 100%;
    background-color: ${color.violentViolet};
    border-radius: 6px;
    padding: 16px 16px 8px 16px;
    margin-left: 8px;
    opacity: 0;
    transition: transform 1s;
    :hover {
        opacity: 1;
        transform: rotate(360deg);
    }
`
const CommentData = styled.div`
    width: 440px;
    flex: 1;
`
const Thing = styled.div`
    display: inline-flex;
    width: 100%;
`
const A = styled.div`
    position: relative;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    position: relative;
`

function Chat () {
    const [isHovered, setIsHovered] = useState(false);
    const textString = `Mary Meeker - @marymeeker`;
    return (
        <Container>
            <ChatContainer>
                <div>
                    <Avatar source={image} height={52} />
                </div>
                <CommentData>
                    <Thing>
                        <UserContainer>
                            <Text align='left' fontWeight='Regular' color={color.violentViolet} fontSize={12} text={textString} />
                        </UserContainer>
                        <TimeAgoContainer>
                            <Text align='left' fontWeight='Regular' color={color.violentViolet} fontSize={12} text='20 mins ago' />
                        </TimeAgoContainer>
                    </Thing>
                    <A>
                        <CommentContainerOne isHovered={isHovered} onMouseEnter={() => setIsHovered(!isHovered)} onMouseLeave={() => setIsHovered(!isHovered)}>
                            <Text align='left' fontWeight='Regular' color={color.violentViolet} fontSize={15} text={'Love the lamb stew from this place'} />
                        </CommentContainerOne>
                        <CommentContainerTwo onMouseEnter={() => setIsHovered(!isHovered)} onMouseLeave={() => setIsHovered(!isHovered)}>
                            <Text align='left' fontWeight='Regular' color={color.white} fontSize={15} text={'active since july 14, 2019'} />
                        </CommentContainerTwo>
                    </A>
                </CommentData>
            </ChatContainer>
        </Container>
    );
}

export default Chat;
