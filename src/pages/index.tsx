import { Flex, Layout } from 'antd';
import bg from '../assets/before_begining.jpg';
import logo from '../assets/logo_new.png';

import { LoginInput } from './login/components/login-input/index';

export default function HomePage() {
  const { Header, Footer, Sider, Content } = Layout;

  const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: 100,
    paddingInline: 48,
    lineHeight: '100px',
    backgroundColor: '#fff',
  };

  const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    // height: 'calc(100% - 100px - 234px)',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#fff',
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundPosition: '50% 0',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center'
  };

  const layoutStyle = {
    overflow: 'hidden',
    width: '100%',
    height: '100%',
    minHeight: '100vh',
    maxWidth: '100%',
  };

  const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    backgroundColor: '#fff',
    height: 194,
    paddingTop: 40,
    borderTop: '1px solid #ececec',
  };

  const tipList = [
    {
      title: '欧莱雅内卖客服电话：',
      content: '400-128-8832',
    },
    {
      title: '欧莱雅内卖客服邮箱',
      content: '：loreal@sfmail.sf-express.com',
    },
    {
      title: '隐私政策',
    },
    {
      title: 'cookies政策',
    },
    {
      title:
        '欧国家药监局提示您：请正确认识化妆品功效，化妆品不能代替药品，不能治疗皮肤病等疾病',
    },
  ];

  return (
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>
        <Flex
          justify="flex-start"
          align="center"
          className="w-[100%] max-w-[960px] h-[100%]"
        >
          <h1>
            <img src={logo} alt="" className="w-[96px]" />
          </h1>
        </Flex>
      </Header>
      <Content style={contentStyle}>
        <Flex justify="flex-end" align='center' className='min-h-[100%] w-[960px]'>
          <LoginInput />
        </Flex>
      </Content>
      <Footer style={footerStyle}>
        <Flex
          justify="flex-start"
          align="center"
          className="w-[100%] max-w-[960px] h-[100%]"
        >
          <Flex justify="center" wrap="wrap">
            {tipList.map((item) => {
              return (
                <li>
                  <span>{item.title}</span>
                  {item.content ? (
                    <span className="text-[#428bca]">{item.content}</span>
                  ) : (
                    ''
                  )}
                </li>
              );
            })}
          </Flex>
        </Flex>
      </Footer>
    </Layout>
  );
}