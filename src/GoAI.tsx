/**
 * @preserve Copyright 2019 ICHIKAWA, Yuji (New 3 Rs)
 */

import React from "react";
import SituationBar from "./SituationBar";
import GoBoard from "./GoBoard";
import GoPosition, { BLACK, xy2coord, GoMove } from "./GoPosition";
import Gtp, { KataInfo } from "./Gtp";
import { Row, Col, Divider,Button } from 'antd';
import { Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import BestCandidate from "./BestCandidate";


function appendScript(URL: string, onload: (() => void) | null = null) {
	var el = document.createElement('script');
    el.src = URL;
    el.onload = onload;
	document.body.appendChild(el);
}

function updateMessage(str: string, color: string = "black") {
    const dom = document.getElementById("message")!;
    dom.innerText = str;
    dom.style.color = color;
}

declare var FS: any;

declare global {
    interface Window {
        clipboardData?: any;
        goAI: GoAI;
        Module: any;
    }
}

interface Props {
    gtp: string;
}

interface State {
    percent: number;
    black: string;
    white: string;
    model: GoPosition;
    history: (GoMove|undefined)[];
    candidates: KataInfo[];
    ownership: number[];
}

class GoAI extends React.Component<Props, State> {
    size: number;
    byoyomi: number;
    gtp!: Gtp;
    constructor(props: Props) {
        super(props)
        this.size = 19;
        this.byoyomi = 3;
        this.state = {
            percent: 50,
            black: "",
            white: "",
            model: new GoPosition(this.size, 0),
            history: [],
            candidates: [],
            ownership: []
        }

        if (this.props.gtp === "katago") {
            if (typeof SharedArrayBuffer === "undefined") {
                updateMessage("SharedArrayBuffer, which is necessary for KataGo, is not available. Trying to connect localhost websocket server...", "yellow");
                this.start("ws://localhost:5001");
            } else {
                window.goAI = this; // KataGoが準備できたら(pre_pre.js) startをコールする
                appendScript("pre_pre.js", () => {
                    appendScript("katago.js");
                });
            }
        } else {
            this.start(this.props.gtp);
        }
    }

    start(url: string) {
        try {
            this.gtp = new Gtp(url, () => {
                this.kataAnalyze();
            }, (err) => {
                updateMessage(`failed to connect ${(err?.target as WebSocket).url}`, "red");
            });
        } catch(e) {
            updateMessage(e.toString(), "red");
        }
    }


    render() {
        const size = `795px`;
        const candidatesize = `400px`;
        const afterload=async (result:any)=>{
            const sgf = result.target.result;
            const file = "tmp.sgf";
            FS.writeFile(file, sgf);
            await this.gtp.command(`loadsgf ${file}`);
            let fromsgf=GoPosition.fromSgf(sgf);
            const model=fromsgf.model;
            const history=fromsgf.history;
            console.log(this.state.model)
            this.setState({ model: model,history: history });
            this.kataAnalyze();

        }
        const uploadconfig = {
            name: 'file',
            beforeUpload(file:any){
                console.log(file)
                if (file.name.indexOf(".sgf")===-1) {
                    message.error(`${file.name} is not a sgf file`);
                    return false;
                }
                const reader=new FileReader();
                reader.readAsText(file);
                reader.onload=(result:any)=>{
                    console.log(result);

                    afterload(result);
                }
                return false;
            },
            showUploadList:false


        };
        return (
            <Row>
                <Col style={{paddingLeft:"100px"}}>
                <GoBoard
                    width={size}
                    height={size}
                    w={this.size}
                    h={this.size}
                    candidates={this.state.candidates}
                    model={this.state.model}
                    onClickIntersection={(x, y) => {
                        if (this.state.history[this.state.history.length - 1]?.point === this.state.model.xyToPoint(x, y)) {
                            this.undo();
                        } else {
                            this.play(x, y);
                        }
                    }}
                />
                </Col>

                <Col style={{paddingLeft:"40px"}}>
                    <Divider/>
                    <Row>
                        <SituationBar
                            width={size}
                            blackPercent={this.state.percent}
                        />
                    </Row>
                    <Divider style={{marginTop:"100px"}}/>


                    <Row>
                        <Button type="primary" shape="round" onClick={()=>{this.undo()}}>撤销一步</Button>
                        <a>&nbsp;&nbsp;</a>
                        <Upload {...uploadconfig} accept=".sgf" id="uploader">
                            <Button type="primary" shape="round" icon={<UploadOutlined />}>上传sgf棋谱</Button>
                        </Upload>
                        <a>&nbsp;&nbsp;</a>
                        <Button type="primary" shape="round" onClick={()=>{this.downloadsgf()}}>下载当前棋谱</Button>
                    </Row>
                    <Divider/>
                    <Row style={{paddingTop:40}}>
                        <Col style={{paddingLeft:40}}>
                        <BestCandidate width={candidatesize}
                                       height={candidatesize}
                                       w={this.size}
                                       h={this.size}
                                       candidates={this.state.candidates}
                                       model={this.state.model}
                                       order={0}
                                       />
                        </Col>
                        <Col style={{paddingLeft:40}}>
                        <BestCandidate width={candidatesize}
                                       height={candidatesize}
                                       w={this.size}
                                       h={this.size}
                                       candidates={this.state.candidates}
                                       model={this.state.model}
                                       order={1}
                        />
                        </Col>
                    </Row>


                </Col>


            </Row>
        );
    }

    pointToXy(point: any): [number, number] {
        const y = Math.floor(point / this.size);
        const x = point - y * this.size;
        return [x + 1, y + 1];
    }
    xy2str(x: number, y: number): string {
        const COORD = [ "a", "b", "c", "d", "e", "f", "g", "h", "i","j", "k", "l", "m", "n", "o", "p", "q", "r", "s"];
        return COORD[x-1] + COORD[this.size-y];
    }

    generatesgf(history:(GoMove|undefined)[]){
        let string="("
        for(let i=0;i<history.length;i++){
            let tmp="";
            if(i%2===0){
                tmp+="B[";
            }
            else{
                tmp+="W["
            }
            if(typeof history[i] === undefined){
                tmp+="@";
            }
            else{
                let point=history[i]?.point;
                tmp+=this.xy2str(this.pointToXy(point)[0],this.pointToXy(point)[1]);
            }

            tmp+="];";
            string+=tmp;
        }
        string+=")"
        return string;
    }

    downloadsgf(){
        let FileSaver=require('file-saver');
        let data=this.generatesgf(this.state.history);
        let blob = new Blob([data], {type: "text/plain;charset=utf-8"});
        FileSaver.saveAs (blob, "webkatago.sgf");
    }


    kataAnalyze() {
        this.gtp.kataAnalyze(100, result => {
            if (result.info.length === 0) {
                return;
            }
            const first = result.info[0];
            const blackWinrate = (this.state.model.turn === BLACK ? first.winrate : 1.0 - first.winrate) * 100;
            const blackScore = (this.state.model.turn === BLACK ? first.scoreMean : 1.0 - first.scoreMean).toFixed(1);
            const scoreStdev = first.scoreStdev.toFixed(1);
            let black;
            let white;
            if (blackWinrate >= 50) {
                black = `${blackWinrate.toFixed(1)}%(${blackScore}±${scoreStdev})`;
                white = `${(100 - blackWinrate).toFixed(1)}%`;
            } else {
                black = `${blackWinrate.toFixed(1)}%`;
                white = `${(100 - blackWinrate).toFixed(1)}%(${-blackScore}±${scoreStdev})`;
            }
            this.setState({
                candidates: result.info,
                ownership: result.ownership,
                percent: blackWinrate,
                black,
                white 
            });
        });
    }

    async play(x: number, y: number) {
        console.log(this.state)
        try {
            const turn = this.state.model.turn;
            this.setState((state, props) => {
                const move = state.model.play(state.model.xyToPoint(x, y));
                if (move != null) {
                    state.history.push(move);
                }
                return {
                    model: state.model,
                    history: state.history,
                    candidates: [],
                    ownership: []
                };
            });
            await this.gtp.play(turn === BLACK ? "black" : "white", xy2coord(x, y));
            this.kataAnalyze();
        } catch (e) {
            console.log(e);
        }
    }

    async undo() {
        try {
            this.setState((state, props) => {
                const move = state.history.pop();
                if (move != null) {
                    state.model.undoPlay(move);
                }
                return {
                    model: state.model,
                    history: state.history,
                    candidates: [],
                    ownership: []
                };
            });
            await this.gtp.undo();
            this.kataAnalyze();
        } catch (e) {
            console.log(e);
        }
    }
}

export default GoAI;
