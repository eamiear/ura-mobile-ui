var domainMap = {
  'www-dev.myutopa.com': 'api-dev.myutopa.com',
  'www-test.myutopa.com': 'api-test.myutopa.com',
  'www-pre.myutopa.com':  'api-pre.myutopa.com',
  'www.myutopa.com': 'api.myutopa.com'
}

var domainRegExp = /:\/\/([^\/]+)\//i

function getDomain(url){
  var domian = '';
  try{
    domian = url.match(domainRegExp)[1];
  } catch {}
  return domain;
}

function getRequestBaseUrl() {
    var domain = getDomain(document.location.href);
    return 'https://'+ (domainMap[domain] || 'api.myutopa.com') + '/app.do'
}

window.Utopa = {
  SysConfig: {
    BASE_API: getRequestBaseUrl()
  }
}

