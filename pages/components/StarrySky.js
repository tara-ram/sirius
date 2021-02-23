import Head from 'next/head'
import styled from '@emotion/styled'
import {keyframes} from "@emotion/react";


const StarBg = styled.div`
    background-image: url('/images/bg.png');
    background-size: cover;
    background-position: center;
    min-height: 97vh;
    text-align: center;
`

const fall = keyframes`
  0% {
    opacity: 0;
  }
  3% {
  opacity: 0.9;
   }

    90% {
    opacity: 0.9;
    }
    100% {
    transform: translate(0, 97vh);
    opacity: 0;
    }
`;

const Fall = styled.div`
  display: inline-block;
  min-height: 97vh;
  animation: ${fall} 2s linear infinite;
  
`;

const StarFields = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60%;
    margin: 0 auto;
    padding: 0;
    border: 2px solid red;
    overflow: hidden;
`


export default function StarrySky() {
    return (
        <div>
            <StarBg>
                <Head>
                    <title>Тестовое Sirius</title>
                </Head>
                <StarFields>
                    <Fall>
                       <Star
                           pic={"/images/star.png"}
                           height={100}
                           width={100}
                       />
                    </Fall>
                </StarFields>
            </StarBg>

        </div>
    )
}
