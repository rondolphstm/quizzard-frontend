import React from "react"
import { Form, } from "antd";

export default function Flipcards({frontcard, backcard}) {
  const Flipcards = ({ visible, onCancel, onCreate, isLoading }) => {
        const [form] = Form.useForm();
        const onclick = () => {
            form.validateFields()
                .then((values) => {
                form.resetFields();
                onCreate(values);
            }).catch(info => console.error("validate failed", info));
        };let iconArray = []; {
    let xRand = Math.floor(Math.random() * 150) - 90;
    let yRand = Math.floor(Math.random() * 75 - 50);
    let randomizedPos = { left: xRand, top: yRand };
    if (frontcard === "A") {
      iconArray.push(
        <p className="icon" style={randomizedPos}>
          🎾
        </p>
      );
    } else if (frontcard === "F") {
      iconArray.push(
        <p className="icon" style={randomizedPos}>
          🟡
        </p>
      );
    } else {
      iconArray.push(
        <p className="icon" style={randomizedPos}>
          🔵
        </p>
      );
    }
  }return(
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
        </div>
        <div className="flip-card-back">
          <h1>John Doe</h1>
          <p>Architect and Engineer</p>
          <p>We love that guy</p>
        </div>
      </div>
    </div>
  )
}
}