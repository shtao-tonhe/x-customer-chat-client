
// 页面顶部显示在线客服的头像
const OnlineCustomer = () => {
  return (
    <div style={styles.container}>
      <div style={styles.row}>
        <div style={styles.users}>
          <div style={styles.photo}>
            <img src="/public/logo-white.svg" alt="logo" style={styles.logo} />
          </div>
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    padding: '10px',
    borderRadius: '5px',
    margin: '10px',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  users: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  photo: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    marginRight: '10px',
    background: 'linear-gradient(to bottom, #c493f3ff, #aa4cfe)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid white',
  },
  logo:{
    width: '40px',
    height: '40px',
  },
}

export default OnlineCustomer;

