import {keyframes} from "@emotion/react";
import styled from "@emotion/styled";


const fall = keyframes`
  0% {
    transform: translateY(-120px);
    opacity: 0;
  }
  20% {
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
  min-height: 97vh;
  animation: ${fall} 10s linear infinite;
`;

const Star = (props) => {
    let style = {
        width: '144px',
        animationDelay: props.delay,
        opacity: 0
    }
    return (
        <Fall style={style}>
            <img src={props.pic} style={{width: 120 + "px"}}/>
            <p style={{
                fontSize: 50 + 'px',
                margin: -90 + 'px',
                fontFamily: "Arial",
                fontWeight: "bold"
            }}>{props.number}</p>
        </Fall>
    )
}

export default Star;