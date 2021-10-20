class MyURL {
  #url;
  constructor(urlStr) {
    this.#url = new URL(urlStr);
  }

  printAsObject() {
    let result = {};
    result.domain = this.getDomain();
    result.protocol = this.getProtocol();
    result.TLD = this.getTLD();
    result.isActive = this.isURLActive();
    result.uri = this.getURI();
    result.Query_String = this.getQueryString();


    return console.log(result);
  }

  getDomain() {
    return this.#url.hostname.includes('www.')
      ? this.#url.hostname
      : 'www.' + this.#url.hostname;
  }

  getProtocol() {
    return this.#url.protocol.split(':')[0];
  }

  getTLD() {
    return this.getDomain() // www.example.eu.com
      .split('.')           // ["www", "example", "eu", "com"]
      .splice(2)            // ["eu", "com"]
      .join('.');           // "eu.com"
  }

  getURI() {
    return this.#url.pathname === '/'
      ? "There's no URL available!"
      : this.#url.pathname;
  }

  getQueryString() {
    // const queryArray = this.#url.search.split('?')[1].split('&');

    const obj = {};

    this.#url.search // return query section of my URL
      .split('?')[1]
      .split('&') // an array of query strings: ["a=b", "c=d", "z=t"]
      .forEach((item) => {
        const temp = item.split('=');
        obj[temp[0]] = temp[1];
      });

    return obj;
  }

  isURLActive() {
    return true;
  }
}


const urlStr = new MyURL(
  `https://www.google.com/books/edition/Algorithmic_Thinking/eY4HEAAAQBAJ?hl=en&gbpv=1&dq=algorithmic+thinking+a+problem-based+introduction`
);

console.log(urlStr.getDomain());
console.log(urlStr.getProtocol());
console.log(urlStr.getURI());
console.log(urlStr.getQueryString());
console.log(urlStr.getTLD());
console.log(urlStr.isURLActive());
urlStr.printAsObject();
