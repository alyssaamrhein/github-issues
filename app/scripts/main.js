var issueTemplate = _.template( $('#issueTemplate').html() );
var issues = $('#issues');
var apiurl = 'https://api.github.com/repos/alyssaamrhein/weekend-js/issues';


var ajaxCall = function () {
  $.ajax({url: apiurl}).done(function(data) {
    var templates = _.map(data, function (issue) {
      return issueTemplate(issue);
    });
    issues.html(templates);
  });
};

setInterval(ajaxCall, 1000);

ajaxCall();


console.log('The Iron Yard Rocks');
