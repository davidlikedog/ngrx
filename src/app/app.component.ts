import {Component, OnInit} from '@angular/core';
import {Md5} from 'ts-md5';
import {Store} from '@ngrx/store';
import {Lsy} from '../reducers/app.model';
import {Observable, Subscription} from 'rxjs';

declare const JMessage: any;

interface Talk {
  sender: string;
  time: Date;
  content: string;
  type: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'im2';
  jim: any;
  appData = {
    appkey: 'f97053853b378b68519351cd',
    random_str: '404',
    key: 'f56bf7c060ea66c83acc16ac'
  };
  talkList: Array<Talk> = [];
  content = '123';
  lsy: Lsy;
  tagState$: Observable<Lsy>;
  private tagStateSubscription: Subscription;

  constructor(
    private $store: Store<Lsy>
  ) {
    this.tagState$ = $store.select('lsy');
    this.jim = new JMessage({
      debug: true
    });
  }

  ngOnInit() {
    this.receiveMessage();
    this.tagStateSubscription = this.tagState$.subscribe((state) => {
      this.lsy = state;
    });
  }

  init() {
    const time = new Date();
    const seconds = time.getTime();
    this.jim.init({
      appkey: this.appData.appkey,
      random_str: this.appData.random_str,
      signature: Md5.hashStr(`appkey=${this.appData.appkey}&timestamp=${seconds}&random_str=${this.appData.random_str}&key=${this.appData.key}`),
      timestamp: seconds,
      flag: 1
    }).onSuccess((data) => {
      console.log('success:', data);
    }).onFail((data) => {
      console.log('error:', data);
    });
  }

  receiveMessage() {
    this.jim.onMsgReceive((data) => {
      console.log('1msg_receive:', data);
      this.transformMsg(data, 'receive');
    });
  }

  transformMsg(data, msgType: string) {
    if (msgType === 'receive') {
      data.messages.forEach(item => {
        this.talkList.push({
          sender: item.content.from_name,
          time: item.content.create_time,
          content: item.content.msg_body.text,
          type: msgType
        });
      });
    } else {
      this.talkList.push({
        sender: data.sender,
        time: data.time,
        content: data.content,
        type: msgType
      });
    }
    // todo: sort by time
    this.talkList = this.talkList.sort((a, b) => {
      return a.time > b.time ? 1 : -1;
    });
  }

  login() {

    this.jim.login({
      username: 'test',
      password: '1234'
    }).onSuccess((data) => {
      console.log('success:', data);
    }).onFail((data) => {

      console.log('error:', data);
    }).onTimeout((data) => {
      console.log('timeout:', data);
    });
  }

  isLogin() {
    console.log('isLogin:' + this.jim.isLogin());
  }

  sendSingleMsg() {
    this.jim.sendSingleMsg({
      target_username: 'david',
      appkey: this.appData.appkey,
      content: this.content,
      no_offline: false,
      no_notification: false,
      need_receipt: true
    }).onSuccess((data, msg) => {
      console.log('success data:', data);
      this.transformMsg({
        time: data.ctime_ms,
        sender: 'test',
        content: this.content
      }, 'send');
    }).onFail((data) => {
      console.log('error:', data);
    });
  }

  sendSinglePic() {
    this.jim.sendSinglePic({
      target_username: 'david',
      target_nickname: 'david',
      appkey: this.appData.appkey,
      image: this.getFile(),
      nead_receipt: true
    }).onSuccess((data, msg) => {
      console.log('success:', data);
      console.log('successssssss:', msg);
      this.getResource(msg.content.msg_body.media_id);
    }).onFail((data) => {
      console.log('error:' + JSON.stringify(data));
    });
  }

  getFile() {
    const fd = new FormData();
    const file: any = document.getElementById('file_box');
    if (!file.files[0]) {
      throw new Error('获取文件失败');
    }
    fd.append(file.files[0].name, file.files[0]);
    return fd;
  }

  getResource(id) {
    // const id = 'qiniu/file/j/348F9C1DAD3A98849BEADE006B70CEF8.txt';
    this.jim.getResource({media_id: id})
      .onSuccess((data) => {
        console.log('success:' + JSON.stringify(data));
      }).onFail((data) => {
      console.log('error:' + JSON.stringify(data));
    });

  }

}
