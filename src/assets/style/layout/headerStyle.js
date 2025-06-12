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
    width : 5rem;

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

export const HeaderAllMenu = styled.div`   
    display : block;
    position : fixed;
    top : 0;
    right : -100%;
    padding : 20px;
    width : 20vw;
    height : 100%;
    background : #323228;
    opacity : 0;
    transition : all .8s;

    &.on{
        right : 0;
        opacity : 1;
    }

    .remove{
        display : block;
        position : relative;
        margin-left : auto;
        width : 25px;
        height : 25px;
        color : #fff;

        span{
            display : block;
            position : absolute;
            top : 50%;
            left : 50%; 
            transform : translate(-50% , -50%) rotate(-45deg);
            width : 80%;
            height : 2px;
            background : #fff;
            border-radius : 30px;

            &:first-of-type{
                transform : translate(-50% , -50%) rotate(45deg);
            }
        }
    }

    ul{
        margin-top : 10px;
        padding-top : 10px;
        border-top : 1px solid rgba(255,255,255,.5);

        li{
            margin-bottom : 10px;

            a{
                color : #fff;   
                font-size : 1.1em;              
            }
        }
    }
`
export const HeaderNavList = styled.ul`
`