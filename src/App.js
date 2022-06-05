import { getBalance, readCount, setCount } from "./api/UseCaver";
import QRCode from "qrcode.react";
import "./App.css";
import { useState } from "react";
import * as KlipAPI from "./api/UseKlip";

const DEFAULT_QR_VALUE = "DEFAULT";

function App() {
  const [balance, setBalance] = useState("0");
  const [qrvalue, setQrvalue] = useState(DEFAULT_QR_VALUE);
  const onClickGetAddress = () => {
    KlipAPI.getAddress(setQrvalue);
  };
  const onClickSetCount = () => {
    KlipAPI.setCount(2000, setQrvalue);
  };
  //readCount();
  //getBalance("0xd447219B2f515faF1C03f43DF82975Ae7f1F2eF0");
  return (
    <div className="App">
      <header className="App-header">
        <button
          onClick={() => {
            onClickGetAddress();
          }}
        >
          주소가져오기
        </button>
        <button
          title={"카운트 변경"}
          onClick={() => {
            onClickSetCount();
          }}
        >
          카운트 값 변경
        </button>
        <br />
        <QRCode value={qrvalue} />
        <p>{balance}</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
