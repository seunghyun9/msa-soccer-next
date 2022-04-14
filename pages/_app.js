import {Layout} from "common";
import wrapper from '../redux/store.ts'
import { PropTypes } from "prop-types"
import Head from 'next/head'
const App = ({ Component, pageProps }) => {
  return (<>
    <Head>
      <meta charset="utf-8"/>
      <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"></meta>
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>Soccer App</title>
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>)
App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.any.isRequired
  }
}
export default wrapper.withRedux(App)
  /** 
  App.propTypes = {
    Component: PropTypes.elementType.isRequired, // elementType = JSX , 엘리먼트 타입으로 작성하라 
    pageProps: PropTypes.any.isRequired //any << element만 아니면 된다. 자바스크립트의 JSON은 {},[] 둘다 사용 할수 있지만. 
  }
}
export default wrapper.withRedux(MyApp) // 앱을 리덕스로 감싼다. 데이터 전송에 필요한코드
*/