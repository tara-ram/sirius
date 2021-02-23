import Head from 'next/head'
import styled from '@emotion/styled'
import Star from "./components/Star"

const StarBg = styled.div`
    background-image: url('/images/bg.png');
    background-size: cover;
    background-position: center;
    min-height: 97vh;
    text-align: center;
`
const StarFields = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60%;
    margin: 0 auto;
    padding: 0;
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
                    <Star pic={"/images/star.png"} delay={"5s"} number={"3"}/>
                    <Star pic={"/images/star.png"} delay={"2s"} number={"-5"}/>
                    <Star pic={"/images/star.png"} delay={"6s"} number={"-7"}/>
                    <Star pic={"/images/star.png"} delay={"0s"} number={"4"}/>
                </StarFields>
            </StarBg>

        </div>
    )
}


