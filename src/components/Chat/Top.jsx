
import OnlineCustomer from './OnlineCustomer'

const Top = () => {
  return (
    <div style={styles.container}>
      <OnlineCustomer></OnlineCustomer>
      {/* 平台说明 */}
      {/* 公告 */}
      {/* 三方社媒客服渠道 */}
    </div>
  )
}

const styles = {
  container: {
    width: '100%',
    height: '50px',
    backgroundColor: '#aa4cfe',
    dsiplay: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}

export default Top;

