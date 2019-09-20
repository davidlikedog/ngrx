初始化
```angular2
  JIM.init({
               "appkey" : "<appkey>",
           "random_str" : "<random_str>",
            "signature" : "<signature>",
            "timestamp" : "<timestamp>",
            "flag" : 0
        }).onSuccess(function(data) {
           //data.code 返回码
           //data.message 描述
          }).onFail(function(data) {
            // 同上
        });
```

登录
```angular2
JIM.login({
    'username' : '<login username>',
    'password' : '<login password>'
}).onSuccess(function(data) {
     //data.code 返回码
     //data.message 描述
     //data.online_list[] 在线设备列表
     //data.online_list[].platform  Android,ios,pc,web
     //data.online_list[].mtime 最近一次登录时间
     //data.online_list[].isOnline 是否在线 true or false
     //data.online_list[].isLogin 是否登录 true or false
     //data.online_list[].flag 该设备是否被当前登录设备踢出 true or false
}).onFail(function(data){
  //同上
});
```

注册
```angular2
JIM.register({
        'username' : '<register name>',
        'password' : '<register password>',
          'is_md5' : <is_md5>,
          'extras' : {'key1':'val1','key2':'val2'},
         'address' : '深圳'
        }).onSuccess(function(data) {
            //data.code 返回码
            //data.message 描述
          }).onFail(function(data) {
            // 同上
        });
```

获取资源访问路径
```angular2
JIM.getResource({
                 'media_id' : '<media_id >',
               }).onSuccess(function(data) {
                   //data.code 返回码
                   //data.message 描述
                   //data.url 资源临时访问路径，具体超时时间expire time会包含在url中
               }).onFail(function(data) {
                   //data.code 返回码
                   //data.message 描述
               });
```

发送消息
```angular2
JIM.sendSingleMsg({
                 'target_username' : '<targetName>',
             'target_nickname' : '<targetNickname>',
                 'content' : '<textContent>',
                 'appkey' : '<targetAppkey>',
                 'extras' : 'json object'
               }).onSuccess(function(data , msg<可选>) {
                  //data.code 返回码
                  //data.message 描述
                  //data.msg_id 发送成功后的消息 id
                  //data.ctime_ms 消息生成时间,毫秒
                  //data.appkey 用户所属 appkey
                  //data.target_username 用户名
                  //msg.content 发送成功消息体,见下面消息体详情
               }).onFail(function(data) {
                  //data.code 返回码
                  //data.message 描述
               });
```

转发消息
```angular2
JIM.sendSingleMsg({
                 'target_username' : '<targetName>',
             'target_nickname' : '<targetNickname>',
                 'msg_body' : {
                              'text' : '',
                            'extras' : 'json object'
                              }, // 可以直接从已有消息体里面获取msg_body
                 'appkey' : '<targetAppkey>',
               }).onSuccess(function(data , msg<可选>) {
                  //data.code 返回码
                  //data.message 描述
                  //data.msg_id 发送成功后的消息 id
                  //data.ctime_ms 消息生成时间,毫秒
                  //data.appkey 用户所属 appkey
                  //data.target_username 用户名
                  //msg.content 发送成功消息体,见下面消息体详情
               }).onFail(function(data) {
                  //data.code 返回码
                  //data.message 描述
               });
```

发送单聊图片
```angular2
JIM.sendSinglePic({
                 'target_username' : '<targetName>',
             'target_nickname' : '<targetNickname>',
                 'image' : '<formData with image>',
                 'appkey' : '<targetAppkey>',
                 'extras' : 'json object'
               }).onSuccess(function(data , msg<可选>) {
                  //data.code 返回码
                  //data.message 描述
                  //data.msg_id 发送成功后的消息id
                  //data.ctime_ms 消息生成时间,毫秒
                  //data.appkey 用户所属 appkey
                  //data.target_username 用户名
                  //msg.content 发送成功消息体
               }).onFail(function(data) {
                  //同发送单聊文本
               });
```

发送群聊文本
```angular2
JIM.sendGroupMsg({
                 'target_gid' : '<targetGid>',
         'target_gname' : '<targetGName>',
                 'content' : '<textContent>',
                 'extras' : '<json object>',
                 'at_list' : [] //at all
               }).onSuccess(function(data , msg) {
                  //data.code 返回码
                  //data.message 描述
                  //data.msg_id 发送成功后的消息id
                  //data.ctime_ms 消息生成时间,毫秒
                  //data.target_gid 群 id
                  //data.unread_count 消息需要已读回执的时候,默认未读数
                  //msg.content 发送成功消息体
               }).onFail(function(data) {
                  //同发送单聊文本
               });
```

发送群聊图片
```angular2
JIM.sendGroupPic({
                 'target_gid' : '<targetGid>',
         'target_gname' : '<targetGName>',
                 'image' : '<formData with image>',
                 'extras' : 'json object'
               }).onSuccess(function(data , msg) {
                  //data.code 返回码
                  //data.message 描述
                  //data.msg_id 发送成功后的消息id
                  //data.ctime_ms 消息生成时间,毫秒
                  //data.target_gid 群 id
                  //data.unread_count 消息需要已读回执的时候,默认未读数
                  //msg.content 发送成功消息体
               }).onFail(function(data) {
                  //同发送单聊文本
               });
```

创建群组
```angular2
JIM.createGroup({
                 'group_name' : '<groupName>',
          'group_description' : '<groupDescription>'
               }).onSuccess(function(data) {
                  //data.code 返回码
                  //data.message 描述
                  //data.gid 群组id
                  //data.group_name 群名
                  //data.group_descriptin 群描述
               }).onFail(function(data) {
                    //data.code 返回码
                    //data.message 描述
               });
```

退出群组
```angular2
JIM.exitGroup({
                  'gid' : '<exit gid>'
               }).onSuccess(function(data) {
                    //data.code 返回码
                    //data.message 描述
                    //data.gid 群组id
                    //data.group_name 群名
               }).onFail(function(data) {
                    //data.code 返回码
                    //data.message 描述
               });
```

增加群组成员
```angular2
JIM.addGroupMembers({
                  'gid' : '<gid>',
          'member_usernames' : [{'username':'name1'},{'username':'name2','appkey':'appkey2'}...]
               }).onSuccess(function(data) {
                  //data.code 返回码
                  //data.message 描述
               }).onFail(function(data) {
                  //同上
               });
```

删除群组成员
```angular2
JIM.delGroupMembers({
                  'gid' : '<gid>',
          'member_usernames' : [{'username':'name1'},{'username':'name2','appkey':'appkey2'}...]
               }).onSuccess(function(data) {
                  //data.code 返回码
                  //data.message 描述
               }).onFail(function(data) {
                  // 同上
               });
```

获取群组列表
```angular2
JIM.getGroups().onSuccess(function(data) {
                  //data.code 返回码
                  //data.message 描述
                  //data.group_list[] 群组列表，如下示例
                  //data.group_list[0].gid 群id
                  //data.group_list[0].name 群名
                  //data.group_list[0].desc 群描述
                  //data.group_list[0].appkey 群所属appkey
                  //data.group_list[0].ctime 群创建时间
                  //data.group_list[0].mtime 最近一次群信息修改时间
                  //data.group_list[0].avatar 群头像
                  //data.group_list[0].group_type 公开群:2,私有群:0或者1
               }).onFail(function(data) {
                  //data.code 返回码
                  //data.message 描述
               });
```

获取群信息
```angular2
JIM.getGroupInfo({
                  'gid' : '<gid>'
               }).onSuccess(function(data) {
                  //data.code 返回码
                  //data.message 描述
                  //data.group_info.gid 群id
                  //data.group_info.name 群名
                  //data.group_info.desc 群描述
                  //data.group_info.appkey 群所属appkey
                  //data.group_info.ctime 群创建时间
                  //data.group_info.mtime 最近一次群信息修改时间
                  //data.group_list[0].avatar 群头像
                  //data.group_list[0].group_type 公开群:2,私有群:0或者1
               }).onFail(function(data) {
                   //data.code 返回码
                   //data.message 描述
               });
```

更新群信息
```angular2
JIM.updateGroupInfo({
                  'gid' : '<gid>',
                  'group_name' : '<new group name>',
                  'group_description' : '<new group description>' 
               }).onSuccess(function(data) {
                   //data.code 返回码
                   //data.message 描述
               }).onFail(function(data) {
                   // 同上
               });
```

获取群成员
```angular2
JIM.getGroupMembers({
                  'gid' : '<gid>'
               }).onSuccess(function(data) {
                  //data.code 返回码
                  //data.message 描述
                  //data.member_list[] 成员列表，如下示例
                  //data.member_list[0].username 用户名
                  //data.member_list[0].appkey 用户所属 appkey
                  //data.member_list[0].nickname 用户昵称
                  //data.member_list[0].avatar 用户头像 id
                  //data.member_list[0].flag  0：普通成员 1：群主 2：管理员
                  //data.member_list[0].keep_silence 是否被禁言true|false
               }).onFail(function(data) {
                   //data.code 返回码
                   //data.message 描述
               });
```

添加管理员
```angular2
JIM.addGroupKeeper({
                  'gid' : '<gid>',
                   'member_usernames' : [{'username':'name1'},{'username':'name2','appkey':'appkey2'}...]
               }).onSuccess(function(data) {
                  //data.code 返回码
                  //data.message 描述
               }).onFail(function(data) {
                   //data.code 返回码
                   //data.message 描述
               });
```

删除管理员
```angular2
JIM.delGroupKeeper({
                  'gid' : '<gid>',
                   'member_usernames' : [{'username':'name1'},{'username':'name2','appkey':'appkey2'}...]
               }).onSuccess(function(data) {
                  //data.code 返回码
                  //data.message 描述
               }).onFail(function(data) {
                   //data.code 返回码
                   //data.message 描述
               });
```

添加群组免打扰
```angular2
JIM.addGroupNoDisturb({
                     'gid' : '<targetGid>'
               }).onSuccess(function(data) {
                   //data.code 返回码
                   //data.message 描述
               }).onFail(function(data) {
                   // 同上
               });
```

关闭群组免打扰
```angular2
JIM.delGroupNoDisturb({
                     'gid' : '<targetGid>'
               }).onSuccess(function(data) {
                   //data.code 返回码
                   //data.message 描述
               }).onFail(function(data) {
                   // 同上
               })
```

好友列表
```angular2
JIM.getFriendList().onSuccess(function(data) {
                   //data.code 返回码
                   //data.message 描述
                   //data.friend_list[] 好友列表，示例如下
                   //data.friend_list[0].username
                   //data.friend_list[0].appkey
                   //data.friend_list[0].nickname
                   //data.friend_list[0].avatar 头像
                   //data.friend_list[0].memo_nam 好友备注
                   //data.friend_list[0].memo_others 其他备注
                   //data.friend_list[0].birthday 生日，默认空
                   //data.friend_list[0].gender 性别 0 未知， 1 男 ，2 女
                   //data.friend_list[0].signature 用户签名
                   //data.friend_list[0].region 用户所属地区
                   //data.friend_list[0].address 用户地址
                   //data.friend_list[0].mtime 用户信息最后修改时间
               }).onFail(function(data) {
                   //data.code 返回码
                   //data.message 描述
               });
```

添加好友
```angular2
JIM.addFriend({
             'target_name' : '< username >' ,
                     'why' : '< why >',
                  'appkey' : '<appkey>'
               }).onSuccess(function(data) {
                   //data.code 返回码
                   //data.message 描述
               }).onFail(function(data) {
                   // 同上
               });
```

同意好友请求
```angular2
JIM.acceptFriend({
             'target_name' : '< username >' ,
                  'appkey' : '<appkey>'
               }).onSuccess(function(data) {
                   //data.code 返回码
                   //data.message 描述
               }).onFail(function(data) {
                   // 同上
               });
```

拒绝好友请求
```angular2
JIM.declineFriend({
             'target_name' : '< username >' ,
                     'why' : '< why >',
                  'appkey' : '<appkey>'
               }).onSuccess(function(data) {
                   //data.code 返回码
                   //data.message 描述
               }).onFail(function(data) {
                   // 同上
               });
```

删除好友
```angular2
JIM.delFriend({
              'target_name' : '< username >' ,
              'appkey' : '< appkey >'
               }).onSuccess(function(data) {
                   //data.code 返回码
                   //data.message 描述
               }).onFail(function(data) {
                   // 同上
               });
```

聊天消息实时监听
```angular2
JIM.onMsgReceive(function(data) {
   // data.messages[]
   // data.messages[].ctime_ms
   // data.messages[].msg_type 会话类型
   // data.messages[].msg_id
   // data.messages[].from_appey 单聊有效
   // data.messages[].from_username 单聊有效
   // data.messages[].from_gid 群聊有效
   // data.messages[].need_receipt
   // data.messages[].content
   // data.messages[].custom_notification.enabled
   // data.messages[].custom_notification.title
   // data.messages[].custom_notification.alert
   // data.messages[].custom_notification.at_prefix
});
```

离线消息同步监听
```angular2
JIM.onSyncConversation(function(data) {
   // data[]
   // data[].msg_type 会话类型
   // data[].from_appey 单聊有效
   // data[].from_username 单聊有效
   // data[].from_gid 群聊有效
   // data[].unread_msg_count 消息未读数
   // 消息已读回执状态，针对自己发的消息
   // data[].receipt_msgs[]
   // data[].receipt_msgs[].msg_id
   // data[].receipt_msgs[].unread_count
   // data[].receipt_msgs[].mtime
   // 消息列表
   // data[].msgs[]
   // data[].msgs[].msg_id
   // data[].msgs[].content
   // data[].msgs[].msg_type
   // data[].msgs[].ctime_ms
   // data[].msgs[].need_receipt
   // data[].msgs[].custom_notification.enabled
   // data[].msgs[].custom_notification.title
   // data[].msgs[].custom_notification.alert
   // data[].msgs[].custom_notification.at_prefix
});
```
