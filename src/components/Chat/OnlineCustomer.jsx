

import defaultPhoto from '../../assets/img/w1.jpg';

// 页面顶部显示在线客服的头像
const OnlineCustomer = () => {
  return (
    <div style={styles.container}>
      <div style={styles.row}>
        <div style={styles.users}>
          <div style={styles.user}>
            <div style={styles.photo}>
              <img src={defaultPhoto} alt="logo" style={styles.logo} />
            </div>
            {/* <div style={styles.time}>09:00 - 22:00</div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
  user: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  photo: {
    width: '35px',
    height: '35px',
    overflow: 'hidden',
    borderRadius: '50%',
    background: 'linear-gradient(to bottom, #c493f3ff, #aa4cfe)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid white',
  },
  time: {
    fontSize: '10px',
    color: '#ffffff',
  },
  logo:{
    width: '35px',
    height: '35px',
  },
}

export default OnlineCustomer;

