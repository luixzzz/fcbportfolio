console.log("hello world");
//carruent date for title
const dateElement=document.getElementById('date');

console.log(dateElement);


let currentDate=new Date();
console.log(currentDate);

// dateElement.innerHTML=currentDate;

let dateOptions = {year: 'numeric', month: 'long', day:'numeric'};
dateElement.innerHTML=currentDate.toLocaleDateString('en-US', dateOptions);

//rapid api to retrieve the trending twitter topics

const url = 'https://twitter-trends5.p.rapidapi.com/twitter/request.php';
const data = new FormData();
data.append('woeid', '23424977');

const options = {
	method: 'POST',
	headers: {
		'x-rapidapi-key': '14a6565543mshf04f17a153b42b8p18362fjsnd6be29052622',
		'x-rapidapi-host': 'twitter-trends5.p.rapidapi.com'
	},
	body: data
};

//
//dummy data to comment out later(start)

// let myPost = {
// 	name: "Lee Sung Kyung",
// 	queryUrl: " searchjidijuhds98%467"
// 	volume:31799,
// 	followers:9999999
// };

// console.log(myPost);
// console.log(myPost.name);
// console.log(myPost.queryUrl);
// console.log(myPost.volume);
// console.log(myPost.followers);
// let graphData=[
// {name: "#Pordeereunion"
// }
// ]
// console.log(graphData);
// console.log(graphData[])



//dummy data to comment out later(end)
//


let graphData=[];


//fetch req allows us to retrieve the data from twitter trends API server
fetch(url,options)
.then(res=> res.json())
.then(data => {
	console.log(data);

	console.log(graphData.length);
	//for loops are used to do repititive task, in this case to print eacg individual graphdata array and their respective properties.
	for (let i = 0; i<25; i++){
	graphData.push(

	{
		"name": data.trends[i].name,
		"volume":data.trends[i].volume
	}
		)

	};

	//this allows us to return the only name of the twitter trend object.
	let topics=graphData.map(object=>{
		console.log(object);
		console.log(object.name);
		return object.name;
	})
	console.log(topics);
	let volume= graphData.map(object=>{
		return object.volume;
	});
	console.log(volume);
	//chart template from Chart JS
	const myChart = document.getElementById('myChart');

	let barChart = new Chart(myChart, {
	  type: 'bar',
	  data: {
	    labels: topics,
	    datasets: [{
	      label: '# of tweets/xeets',
	      data: volume,
	      borderWidth: 2,
	      backgroundColor: [
	      	'rgba(255, 99, 132, 0.2)',
	      	'rgba(255, 159, 64, 0.2)',
	      	'rgba(255, 205, 86, 0.2)',
	      	'rgba(75, 192, 192, 0.2)',
	      	'rgba(54, 162, 235, 0.2)',
	      	'rgba(153, 102, 255, 0)'],
		   borderColor: [
	      	'rgb(255, 99, 132)',
	      	'rgb(255, 159, 64)',
	      	'rgb(255, 205, 86)',
	      	'rgb(75, 192, 192)',
	      	'rgb(54, 162, 235)',
	      	'rgb(153, 102, 255)',
	      	'rgb(201, 203, 207)'
	      ],
	      hoverBackgroundColor: [
	      	'rgb(255, 99, 132)',
	      	'rgb(255, 159, 64)',
	      	'rgb(255, 205, 86)',
	      	'rgb(75, 192, 192)',
	      	'rgb(54, 162, 235)',
	      	'rgb(153, 102, 255)',
	      	'rgb(201, 203, 207)'
	      ]
	    }]
	  },
	   options: {
	  	indexAxis: 'y',
	    scales: {
	      y: {
	        beginAtZero: true
	      }
	    }
	  }
	});
});




//========
//copy paste to fetch request(start)
//========

// console.log(graphData.length);
// //for loops are used to do repititive task, in this case to print eacg individual graphdata array and their respective properties.
// for (let i = 0; i<2; i++){
// console.log(graphData[i])
// console.log(graphData[i].name);
// console.log(graphData[i].queryUrl);
// console.log(graphData[i].volume);

// };

// //this allows us to return the only name of the twitter trend object.
// let topics=graphData.map(object=>{
// 	console.log(object);
// 	console.log(object.name);
// 	return object.name;
// })
// console.log(topics);
// let volumes= graphData.map(object=>{
// 	return object.volume;
// });
// console.log(volume);
// //chart template from Chart JS
// const myChart = document.getElementById('myChart');

//  let barChart = new Chart(myChart, {
//    type: 'bar',
//    data: {
//      labels: topics
//        label: '# of tweets',
//        data: volumes,
//        borderWidth: 2,
//        backgroundColor: [
//        'rgba(255, 99, 132, 0.2)',
//                                'rgba(255, 159, 64, 0.2)',
//                                'rgba(255, 205, 86, 0.2)',
//                                'rgba(75, 192, 192, 0.2)',
//                                'rgba(54, 162, 235, 0.2)',
//                                'rgba(153, 102, 255, 0.2)',
//                                'rgba(201, 203, 207, 0.2)'
//        ],
//        borderColor: [
//        'rgb(255, 99, 132)',
//                                'rgb(255, 159, 64)',
//                                'rgb(255, 205, 86)',
//                                'rgb(75, 192, 192)',
//                                'rgb(54, 162, 235)',
//                                'rgb(153, 102, 255)',
//                                'rgb(201, 203, 207)'
//                                ],
//         hoverBackgroundColor: [
//         'rgb(255, 99, 132)',
//                                 'rgb(255, 159, 64)',
//                                 'rgb(255, 205, 86)',
//                                 'rgb(75, 192, 192)',
//                                 'rgb(54, 162, 235)',
//                                 'rgb(153, 102, 255)',
//                                 'rgb(201, 203, 207)'
//         ]
//      }]
//    },
//    options: {
//    	indexAxis: 'y',
//      scales: {
//        y: {
//          beginAtZero: true
//        }
//      }
//    }
//  });

//========
//copy paste to fetch request(end)
//========













