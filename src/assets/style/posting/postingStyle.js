import * as commonStyle from '../common/commonStyle';
import styled from 'styled-components';

// Posting List
export const ListArea = styled.div`
    .posting-list__ul{
        &__li{
            margin-top : 20px;
            box-shadow : 1px 1px 5px 0px rgba(50, 50, 30, 0.2);
            
            &:first-of-type{
                margin-top : 0;
            }

            &--btn{
                .info{
                    padding : 10px;
                    margin-top : 10px;

                    .category{
                        ${commonStyle.flexStartCenter}

                        p{
                            margin-right : 5px;
                            padding : 2px 15px;
                            color : #fff;
                            font-weight : 500;
                            background : #323232;
                            border-radius : 30px;

                            &:last-of-type{
                                margin-right : 0;
                            }
                        }
                    }
                    .title{
                        margin-top : 10px;

                        p{
                            font-size : 18px;
                            font-weight : 700;
                            line-height : 24px;
                        }
                    }
                    .text{
                        margin-top : 10px;

                        p{

                        }
                    }
                }
            }
        }
    }
    
    @media (min-width: ${commonStyle.mobileSize}) {
        .posting-list__ul{
            ${commonStyle.flexStartCenter};
            flex-wrap : wrap;

            &__li{
                margin-right : 20px;
                width : calc(50% - 10px);

                &:nth-of-type(-n+2){
                    margin-top : 0;
                }
                &:nth-of-type(2n){
                    margin-right : 0;
                }
            }
        }    
    }
    
    @media (min-width: ${commonStyle.middleSize}) {
        .posting-list__ul{
            ${commonStyle.flexStartCenter};
            flex-wrap : wrap;

            &__li{
                margin-right : 20px;
                width : calc((100% / 3) - 13.33px);

                &:nth-of-type(-n+3){
                    margin-top : 0;
                }
                &:nth-of-type(2n){
                    margin-right : 20px;
                }
                &:nth-of-type(3n){
                    margin-right : 0;
                }
            }
        }    
    }
`

// Posting View
export const ViewArea = styled.div`

`