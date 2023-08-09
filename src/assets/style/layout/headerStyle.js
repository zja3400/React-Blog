import * as commonStyle from '../common/commonStyle';
import styled from 'styled-components';

// Header Area
export const HeaderArea = styled.div`
    ${commonStyle.flexSideCenter};
    padding : .5em 20px;
    max-height : 50px;
    border-bottom : 2px solid rgba(50,50,40,0.5);
`

// Header Logo
export const HeaderLogo = styled.h1`
    display : block;
    width : 9rem;

    img{
        width : 100%;
    }
`

// Header ALL Menu
export const HeaderMainMenu = styled.button`
    width : 30px;
    height : 30px;

    span{
        display : block;
        margin : 0 auto;
        width : 80%;
        height : 2px;
        background : #323228;
        border-radius : 10px;

        &:first-of-type{
            margin-bottom : 5px;
        }
    }
`

export const HeaderNav = styled.div`   
`
export const HeaderNavList = styled.ul`
`