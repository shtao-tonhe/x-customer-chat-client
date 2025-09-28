
import OnlineCustomer from './OnlineCustomer'

const Top = () => {
  return (
    <div style={styles.container}>
      <OnlineCustomer></OnlineCustomer>
    </div>
  )
}

const styles = {
  container: {
    backgroundColor: '#aa4cfe',
    dsiplay: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}

export default Top;

