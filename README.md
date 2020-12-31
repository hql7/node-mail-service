# node-mail-service
基于node的邮件服务

## 启动服务
1. 找一个你喜欢的文件夹执行 `yarn init` 创建一个package.json
2. yarn add nodemailer axios 下载要用到的两个依赖
3. 去你的邮箱开启邮件服务并获取授权码
4. node index 启动服务；依次显示你的情话、即将发出、发送成功|发送失败

## 配置邮箱服务

以163邮箱为例
```js
function sendMail(text, title = "亲爱的小宝贝") {
  const user = "你的163邮箱@163.com"; // 用163邮件服务就使用你的163邮箱，用qq邮件服务就用qq邮箱
  const pass = "你的授权码"; // 邮箱授权码，见下①
  const to = "对方的邮箱@qq.com"; // 对方的邮箱，任意邮箱
  const transporter = nodemailer.createTransport({
    service: '163',
    host: "smtp.163.com",
    port: 994, // 不同的邮箱端口号不同，见下常用邮箱服务器地址及端口②
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
```
注：
① 进入你的邮箱，找到左上角账号后面的设置，选择POP3/SMTP/IMAP设置，开启IMAP/SMTP服务、POP3/SMTP服务发个短信即可，
短信发完上面会显示你的`授权码`，163邮箱只显示一次，注意保存。
  其他邮箱步骤大致相同。

② [常用邮箱服务器地址及端口](https://wenku.baidu.com/view/c42dc4e8f4335a8102d276a20029bd64783e62c1.html)
