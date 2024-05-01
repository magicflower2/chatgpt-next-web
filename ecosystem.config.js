module.exports = {
    apps: [
      {
        name: 'nextapp',
        script: 'node_modules/next/dist/bin/next',
        args: 'start -p 8088',
        // cwd: '/srv/nextjsapp',// 必须是相对路径
        instances: 1, // 实例个数
        exec_mode: 'cluster',// 集群模式
      },
    ],
  };
  