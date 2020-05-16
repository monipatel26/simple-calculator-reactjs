import React from 'react';
import {BsBackspace} from 'react-icons/bs';

const userInput = (props) => {
    return (
        <div className="calc-parent">
            <div className='d-flex align-items-center calculator-table'>
                <table className="table">
                    <tr>
                        <td colSpan='2'>
                            <button type='button' className="input-buttons" value='Clear' onClick={props.clear}>Clear</button>
                        </td>
                        <td>
                            <button type='button' className="input-buttons" value='x' onClick={props.backspace}><BsBackspace/></button>
                        </td>
                        <td>
                            <button type='button' className="input-buttons" value=' + ' onClick={props.input}>+</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button type='button' className="input-buttons" value='1' onClick={props.input}>1</button>
                        </td>
                        <td>
                            <button type='button' className="input-buttons" value='2' onClick={props.input}>2</button>
                        </td>
                        <td>
                            <button type='button' className="input-buttons" value='3' onClick={props.input}>3</button>
                        </td>
                        <td>
                            <button type='button' className="input-buttons" value=' - ' onClick={props.input}>-</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button type='button' className="input-buttons" value='4' onClick={props.input}>4</button>
                        </td>
                        <td>
                            <button type='button' className="input-buttons" value='5' onClick={props.input}>5</button>
                        </td>
                        <td>
                            <button type='button' className="input-buttons" value='6' onClick={props.input}>6</button>
                        </td>
                        <td>
                            <button type='button' className="input-buttons" value=' * ' onClick={props.input}>*</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button type='button' className="input-buttons" value='7' onClick={props.input}>7</button>
                        </td>
                        <td>
                            <button type='button' className="input-buttons" value='8' onClick={props.input}>8</button>
                        </td>
                        <td>
                            <button type='button' className="input-buttons" value='9' onClick={props.input}>9</button>
                        </td>
                        <td>
                            <button type='button' className="input-buttons" value=' / ' onClick={props.input}>/</button>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan='3'>
                            <button type='button' className="input-buttons" value='0' onClick={props.input}>0</button>
                        </td>
                        <td>
                            <button type='button' className="input-buttons" value='=' onClick={props.equal}>=</button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default userInput;