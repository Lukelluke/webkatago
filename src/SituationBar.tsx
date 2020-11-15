/**
 * @preserve Copyright 2019 ICHIKAWA, Yuji (New 3 Rs)
 */

import React from "react";
import {Progress} from "antd";
import { Row, Col, Divider } from 'antd';

interface Props {
    width: string;
    blackPercent: number;
}

function SituationBar(props: Props) {
    const style = {
        width: props.width,
        height: "15px",
    } as const;
    return (
        <div style={style}>
            <a>黑棋胜率</a>
            <Progress style={{marginBottom:"8px"}} strokeColor="black" percent={props.blackPercent} status="active" />
            <a>白棋胜率</a>
            <Progress strokeColor="silver" percent={100-props.blackPercent} status="active" />
        </div>
    );
}

export default SituationBar;