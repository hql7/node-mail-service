const nodemailer = require("nodemailer");
const { default: Axios } = require("axios");

// 邮件配置及发送
function sendMail(text, title = "亲爱的小宝贝") {
  const user = "你的163邮箱"; // 自己的邮箱
  const pass = "你的授权码"; // 邮箱授权码
  const to = "对方的邮箱"; // 对方的邮箱
  const transporter = nodemailer.createTransport({
    service: '163',
    host: "smtp.163.com",
    port: 994,
    secure: true,
    auth: {
      user: user, // 用户账号
      pass: pass, //授权码
    },
  });
  console.log('即将发出');
  transporter.sendMail({
    from: user,
    to: to,
    subject: title,
    text: text,
  }).then(res => {
    console.log('发送成功:', res);
  }).catch(err => {
    console.log('发送失败:', err);
  });
}

// 获取情话
function getLoverPrattle() {
  return Axios.get('https://chp.shadiao.app/api.php')
}

// 爱心花射
function loveToSend() {
  getLoverPrattle().then(res => {
    console.log('see what are u say: ', res.data);
    sendMail(res.data)
  })
}

loveToSend()