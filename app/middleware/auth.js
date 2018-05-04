'use strict';

module.exports = options => {
  return async function verify(ctx, next) {
    let sess = ctx.cookies.get('sess');
    console.log(sess);
    if(!sess) {
      ctx.status = 401;
      return;
    }
    // next写的位置不同，调用的时候就不同，写在最后会先运行中间的内容，再执行控制器，否则会现在执行控制器
    await next();
  }
}
