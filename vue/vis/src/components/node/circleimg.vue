<template>
	<div class="circleimg">
		<network id='netWork' class="network" ref="network" :nodes="network.nodes" :edges="network.edges" >
        </network>
	</div>
</template>
<script >
import {Network,DataSet } from 'vue2vis'
export default{
	components:{
		Network
	},
	data(){
		return{
			network:{
				nodes:[
					{id: 1,  shape: 'circularImage', image: '/static/image/1.png'},
			        {id: 2,  shape: 'circularImage', image: '/static/image/2.png'},
			        {id: 3,  shape: 'circularImage', image: '/static/image/3.png'},
			        {id: 4,  shape: 'circularImage', image: '/static/image/4.png', label:"pictures by this guy!"},
			        {id: 5,  shape: 'circularImage', image: '/static/image/5.png'},
			        {id: 6,  shape: 'circularImage', image: '/static/image/6.png'},
			        {id: 7,  shape: 'circularImage', image: '/static/image/7.png'},
			        {id: 8,  shape: 'circularImage', image: '/static/image/8.png'},
			        {id: 9,  shape: 'circularImage', image: '/static/image/9.png'},
			        {id: 10, shape: 'circularImage', image: '/static/image/10.png'},
			        {id: 11, shape: 'circularImage', image: '/static/image/11.png'},
			        {id: 12, shape: 'circularImage', image: '/static/image/12.png'},
			        {id: 13, shape: 'circularImage', image: '/static/image/13.png'},
			        {id: 14, shape: 'circularImage', image: '/static/image/14.png'},
			        {id: 15, shape: 'circularImage', image: '/static/image/missing.png', brokenImage: '/static/image/11.png', label:"when images\nfail\nto load"},
			        {id: 16, shape: 'circularImage', image: '/static/image/anotherMissing.png', brokenImage: '/static/image/9.png', label:"fallback image in action"}
				],
				edges:[
					{from: 1, to: 2},
			        {from: 2, to: 3},
			        {from: 2, to: 4},
			        {from: 4, to: 5},
			        {from: 4, to: 10},
			        {from: 4, to: 6},
			        {from: 6, to: 7},
			        {from: 7, to: 8},
			        {from: 8, to: 9},
			        {from: 8, to: 10},
			        {from: 10, to: 11},
			        {from: 11, to: 12},
			        {from: 12, to: 13},
			        {from: 13, to: 14},
			        {from: 9, to: 16}
				]
			}
		}
	} 
}
</script>
<style>
</style>