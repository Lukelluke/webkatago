import React from "react";
import GoAI from "./GoAI";
import { Tabs ,Button,PageHeader,Layout } from 'antd';
import { GithubOutlined,ExclamationCircleOutlined } from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;
const { TabPane } = Tabs;
class App extends React.Component{
  render(){
    return (
        <div>
            <Layout>
            <PageHeader
                className="site-page-header-responsive"
                title="KataGo In Browser"
                subTitle="based on new3Rs/react-lizzie"
                extra={[
                    <GithubOutlined style={{ fontSize: '20px', color: '#08c' }}/>,
                    <Button key="1" href="https://github.com/lintonfirst/react-lizzie" type="primary">
                        项目地址
                    </Button>,
                    <Button key="3" href="https://github.com/new3Rs/react-lizzie">相关项目：new3Rs/react-lizzie</Button>,
                    <Button key="2" href="https://github.com/y-ich/KataGo/">相关项目：y-ich/KataGo</Button>,
                ]}
            >
            </PageHeader>
            <GoAI gtp="katago"/>
            <Footer style={{ textAlign: 'center' }}>
                <a>react-katago with tensorflowjs and webassembly&nbsp;&nbsp;</a>
                <ExclamationCircleOutlined/>
                <a>&nbsp;&nbsp;建议使用新版本的edge、chrome、firefox浏览器 &nbsp;&nbsp;</a>
                <ExclamationCircleOutlined/>
                <a>&nbsp;&nbsp;AI通过webGL进行硬件加速，AI算力依赖于显卡性能</a>
            </Footer>
            </Layout>
        </div>
    );
  }
}

export default App;
