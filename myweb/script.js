// //main-nav
// let mainNav = document.getElementsByClassName("main-nav")[0];
// let mainListItems = mainNav.getElementsByTagName("li");
// let mainNewTitle = [
//   "홈",
//   "모집요강",
//   "지원",
// ];
// for (let i = 0; i < mainListItems.length; i++){
//   mainListItems[i].getElementsByTagName("a")[0].innerHTML = mainNewTitle[i];
// }
// //회사문구
// let hero = document.getElementsByClassName("home-hero")[0];
// let h2Element = hero.getElementsByTagName("h2")[0];
// h2Element.innerHTML = "열정이 있는 인재를 채용하고 있습니다";
// //직무
// let jobTitle = document.getElementsByClassName("title")[0];
// jobTitle.innerHTML = "저희와 함께 프론트엔드의 세계를 리드해보세요.";
// let homeTextDiv = document.getElementsByClassName("home-text")[0];
// let pElement = homeTextDiv.getElementsByTagName("p")[0];
// pElement.innerHTML =
//   "저희 회사는 개발 팀 내에서 프론트엔드 개발자의 비율이 가장 높습니다. 이는 사용자 경험과 인터랙티브한 디자인에 집중하는 회사 문화를 반영하고 있습니다. 저희는 프론트엔드 분야에서 능력을 발휘하고자 하는 열정적인 개발자를 찾고 있습니다. 프론트엔드 개발에 대한 당신의 열정을 저희와 함께 나누실 준비가 되셨다면, 지금 바로 지원해보세요.";
// //재택근무
// let workingHomeTitle = document.getElementsByClassName("title")[1];
// workingHomeTitle.innerHTML =
//   "각자의 생활 방식에 맞는 스타일로 일할 수 있습니다.";
// let homeTextDiv2 = document.getElementsByClassName("home-text")[1];
// let pElement2 = homeTextDiv2.getElementsByTagName("p")[0];
// pElement2.innerHTML =
//   "저희 회사는 서울, 부산 등 각지에 사무실이 있으며 재택 근무도 가능합니다. 재택 근무로 근무중인 직원은 매년 증가하고 있습니다. 재택,공유 사무실 등 원하는 곳에서 근무하시면 됩니다.";
// let homeChart = document.getElementsByClassName("home-chart")[1];
// let pElement3 = homeChart.getElementsByTagName("p")[0];
// pElement3.innerHTML = 
// "재택 근무 사원 수 추이";
// //footer-nav
// let footerNav = document.getElementsByClassName("footer-nav")[0];
// let listItems = footerNav.getElementsByTagName("li");
// let newTitles = [
//   "회사개요",
//   "서비스 내용",
//   "오시는길",
//   "문의사항",
// ];
// for (let i = 0; i < listItems.length; i++) {
//   listItems[i].getElementsByTagName("a")[0].innerHTML = newTitles[i];
// }
// for (var i = 0; i < listItems.length; i++) {
//   listItems[i].getElementsByTagName("a")[0].style.color = "#d5d7e4";
// }


// /*
// PIE CHART
// ================================================ */
// var pieData = {
//     labels: ['프론트엔드 개발자', '백엔드 개발자', '서버 엔지니어', '영업직'],
//     series: [14, 9, 8, 6]
//   };
  
//   var pieOptions = {
//     width: '100%',
//     height: '440px'
//   };
  
//   new Chartist.Pie('.pie-chart', pieData, pieOptions);
  
//   /*
//   BAR CHART
//   ================================================ */
//   var barData = {
//     labels: ['2021년', '2022년', '2023년'],
//     series: [[10, 16, 29]]
//   };
  
//   var barOptions = {
//       axisY: {
//           offset: 60,
//           scaleMinSpace: 50,
//           labelInterpolationFnc: function(value) {
//             return value + ' 명'
//           }
//       },
//       width: '100%',
//       height: '400px'
//   };
  
//   new Chartist.Bar('.bar-chart', barData, barOptions);