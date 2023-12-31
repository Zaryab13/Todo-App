import styles from './Button.module.css';

// import styled from 'styled-components';

// const Button = styled.button`
//     width: 100%;
//     margin: 10px 0;
//     font-family: inherit;
//     padding: 7px 30px;
//     border-radius: 50px;
//     border: 0;
//     background-color: rgb(0 0 0 / 20%);
//     box-shadow: rgb(0 0 0 / 10%) 0 0 8px;
//     letter-spacing: 1.5px;
//     text-transform: uppercase;
//     font-size: 10px;
//     transition: all .5s ease;
//     cursor: pointer;
//     @media (min-width: 768px){
//         width: auto;
//     }
    
//     &:hover {
//     letter-spacing: 3px;
//     background-color: hsl(27, 80%, 48%);
//     color: hsl(0, 0%, 100%);
//     box-shadow: rgb(220, 113, 24) 0px 7px 29px 0px;
//    }
   
//     &:active {
//     letter-spacing: 3px;
//     background-color: hsl(27, 80%, 48%);
//     color: hsl(0, 0%, 100%);
//     box-shadow: rgb(220, 113, 24) 0px 0px 0px 0px;
//     transform: translateY(10px);
//     transition: 100ms;
// }
// `;

const Button = (props) => {
  return (
    <button className={styles['button']} type={props.type}>
        {props.children}
    </button>
  )
}

export default Button;