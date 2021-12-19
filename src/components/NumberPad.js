import React from 'react';
import '../css/numberPad.css';

export default function NumberPad({
  handleClick,
  handleDelete,
  handleReset,
  handleTotal,
}) {
  return (
    <div className="numPad">
      <div className="numBtnContainer">
        <div className="btn-div div-seven">
          <button value={7} className="btn" onClick={handleClick}>
            7
          </button>
        </div>
        <div className="btn-div div-eight">
          <button value={8} className="btn" onClick={handleClick}>
            8
          </button>
        </div>
        <div className="btn-div div-9">
          <button value={9} className="btn" onClick={handleClick}>
            9
          </button>
        </div>
        <div className="btn-div div-del">
          <button value="DEL" className="btn del" onClick={handleDelete}>
            DEL
          </button>
        </div>
        <div className="btn-div div-four">
          <button value={4} className="btn" onClick={handleClick}>
            4
          </button>
        </div>
        <div className="btn-div div-five">
          <button value={5} className="btn" onClick={handleClick}>
            5
          </button>
        </div>
        <div className="btn-div div-six">
          <button value={6} className="btn six" onClick={handleClick}>
            6
          </button>
        </div>
        <div className="btn-div div-plus">
          <button value="+" className="btn plus" onClick={handleClick}>
            +
          </button>
        </div>
        <div className="btn-div div-one">
          <button value={1} className="btn one" onClick={handleClick}>
            1
          </button>
        </div>
        <div className="btn-div div-2">
          <button value={2} className="btn two" onClick={handleClick}>
            2
          </button>
        </div>
        <div className="btn-div div-three">
          <button value={3} className="btn three" onClick={handleClick}>
            3
          </button>
        </div>
        <div className="btn-div div-minus">
          <button value="-" className="btn" onClick={handleClick}>
            -
          </button>
        </div>
        <div className="btn-div div-period">
          <button value="." className="btn period" onClick={handleClick}>
            .
          </button>
        </div>
        <div className="btn-div div-zero">
          <button value={0} className="btn zero" onClick={handleClick}>
            0
          </button>
        </div>
        <div className="btn-div div-divide">
          <button value="/" className="btn divide" onClick={handleClick}>
            &#247;
          </button>
        </div>
        <div className="btn-div div-x">
          <button value="*" className="btn x-sign" onClick={handleClick}>
            &times;
          </button>
        </div>
      </div>
      <div className="resetEqualBtn ">
        <div className="div-reset btn-div">
          <button value="RESET" className="btn reset" onClick={handleReset}>
            RESET
          </button>
        </div>
        <div className=" div-equals btn-div">
          <button value="=" className="btn equals" onClick={handleTotal}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}
