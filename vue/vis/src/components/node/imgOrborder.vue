<template>
	<div class="img-boder">
		<div ref="visualization" id='netWork'></div>
	</div>
</template>
<script >
import { Network } from 'vis';
	import { mountVisData } from '@/assets/js/utils/visData';
export default{
	 
	data(){
		return{ 
			nodes:[
				{id: 1,   shape: 'image', image: '/static/image/1.png'},
		        {id: 2,   shape: 'image', image: '/static/image/2.png'},
		        {id: 3,   shape: 'image', image: '/static/image/3.png'},
		        {id: 4,   shape: 'image', image: '/static/image/4.png', label:"pictures by this guy!"},
		        {id: 5,   shape: 'image', image: '/static/image/5.png'},
		        {id: 6,   shape: 'image', image: '/static/image/6.png'},
		        {id: 7,   shape: 'image', image: '/static/image/7.png'},
		        {id: 8,   shape: 'image', image: '/static/image/8.png'},
		        {id: 9,   shape: 'image', image: '/static/image/9.png'},
		        {id: 10,  shape: 'image', image: '/static/image/10.png'},
		        {id: 11,  shape: 'image', image: '/static/image/11.png'},
		        {id: 12,  shape: 'image', image: '/static/image/12.png'},
		        {id: 13,  shape: 'image', image: '/static/image/13.png'},
		        {id: 14,  shape: 'image', image: '/static/image/14.png'},
		        {id: 15,  shape: 'image', image: '/static/image/missing.png', brokenImage: '/static/image/11.png', label:"when images\nfail\nto load"},
		        {id: 16,  shape: 'image', image: '/static/image/anotherMissing.png', brokenImage: '/static/image/9.png', label:"fallback image in action"}
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
			],
			options:{ 
		        nodes: {
		          borderWidth:4,
		          size:30,
			      color: {
		            border: '#406897',
		            background: '#6AAFFF'
		          },
		          font:{color:'#eeeeee'},
		          shapeProperties: {
		            useBorderWithImage:true
		          }
		        },
		        edges: {
		          color: 'lightgray'
		        }
		      },
			    visData:{
			    	nodes:null,
			    	edges:null
			    }
		    }
		},
		mounted(){
			const container = this.$refs.visualization;
		    this.visData.nodes = mountVisData(this, 'nodes');
		    this.visData.edges = mountVisData(this, 'edges');
		    new Network(container, this.visData, this.options);
		}
	} 

</script>
<style>
</style>