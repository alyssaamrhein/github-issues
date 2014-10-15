var apiurl = 'https://api.github.com/repos/alyssaamrhein/weekend-js/issues';


var ajaxCall = function () {
  $.ajax({url: apiurl}).done(function(data) {
    $('.newNew').text(JSON.stringify(data));
      setIssueInfo(data);
  }).fail(function (data) {

    $('.error').removeClass('fade').text(data.responseJSON.message);

    setTimeout(function () {
      $('.error').addClass('fade');
    }, 1000);

  });
};

var setIssueInfo = function (data) {
  _.each(data, function (issue) {
    var issueTemplateString = $('#theTemplate').html();
    var issueTemplate = _.template(issueTemplateString);
    var finishedIssueTemplate = issueTemplate(issue);
    $('#target').append(finishedIssueTemplate);
  });
};

setInterval(function() {
    $.ajax({
      url: apiurl
    }).done(function (data) {
      $(data.length).text(data.length);
    });
    // ^^^ Call the api url and update the count to the data.length
  }, 1000);
  // ^^^ Using setInterval to repeat every second


ajaxCall();
setIssueInfo();
setInterval();

console.log('The Iron Yard Rocks');
