setInterval(function(){

      var time = new Date();
      var second = time.getSeconds();
      var minute = time.getMinutes();
      var hour = time.getHours();

      var seconds = document.getElementById('second');
      var minutes = document.getElementById('minute');
      var hours = document.getElementById('hour');

      seconds.style.transform = 'rotateZ('+ ((360 /60) * second) + 'deg)';
      minutes.style.transform = 'rotateZ('+ ((360 /60) * minute) + 'deg)';
      hours.style.transform = 'rotateZ('+ ((360 /12) * hour) + 'deg)';

},1000);


setInterval(function(){

      var time = new Date();
      var day = time.getDay();
      var month = time.getMonth();
      var year = time.getFullYear();
      var hour = time.getHours();
      var minute = time.getMinutes();
      var second = time.getSeconds();
      var date = time.getDate();

      var monthNames = [ 'Jan',
                         'Feb',
                         'Mar',
                         'Apr',
                         'May',
                         'Jun',
                         'Jul',
                         'Aug',
                         'Sep',
                         'Oct',
                         'Nov',
                         'Dec' ];

      var dayNames = [ 'Sun',
                       'Mon',
                       'Tue',
                       'Wed',
                       'Thu',
                       'Fri',
                       'Sat'];


      var ordinalDate = '';

      if(date === 1 || date === 21 || date === 31 ){
        ordinalDate = date + 'st';
      }else if(date === 2 || date === 22){
        currentDate = date + 'nd';
      }else if(date === 3 || date === 23){
        currentDate = date + 'rd';
      }else {
        currentDate = date + 'th';
      }


      var currentDayName = dayNames[day];
      var currentMonthName = monthNames[month];

      var currentTime ='<p>' + (hour < 10 ? '0' : '') + hour + ':' + (minute < 10 ? '0' : '') + minute + ':' + (second < 10 ? '0' : '') + second + ' ' + ( hour < 12 ? 'AM' : 'PM')+ '</p>';
      var currentDate = '<p>' + currentDayName + ' ' + currentMonthName + ' '+ (date < 10 ? '0' : '') + currentDate + ' ' + year + '</p>';

      var digitalWatch = document.getElementById('digital');
      digitalWatch.innerHTML =currentTime + currentDate;

},1000);



