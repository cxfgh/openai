export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    url.host = "api.openai.com";
    //需要反向代理的地址
    //url.host = "modheader.com";
    // openai is already set all CORS heasders 
    return fetch(url, {
      headers: request.headers,
      method: request.method,
      body: request.body,
      redirect: 'follow'
    });
  }
}
