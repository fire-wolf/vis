<template>
	<div class="stroke"> 
		<div ref="visualization" id='netWork'></div> 
	</div>
</template>
<script> 
	import { Network } from 'vis';
	import { mountVisData } from '@/assets/js/utils/visData';
	export default{
		 
		data(){
			return{ 
				nodes:[
			{id: 1, label: 'Node in\nthe center', shape: 'text', font:{strokeWidth:4}},
        {id: 2, label: 'Node\nwith\nmultiple\nlines', shape: 'circle'},
        {id: 3, label: 'This is a lot of text\nbut luckily we can spread\nover multiple lines', shape: 'database'},
        {id: 4, label: 'This is text\non multiple lines', shape: 'box'},
        {id: 5, label: 'Little text', shape: 'ellipse'}
				],
				edges:[
				{from: 1, to: 2, color: 'red', width: 3, length: 200}, // individual length definition is possible
        {from: 1, to: 3, dashes:true, width: 1, length: 200},
        {from: 1, to: 4, width: 1, length: 200, label:'I\'m an edge!'},
        {from: 1, to: 5, arrows:'to', width: 3, length: 200, label:'arrows\nare cool'}
				],
				visData:{
					nodes:null,
					edges:null
				},
				options:{
					 
				},
				htmlMsg:""
			}
		},
		mounted(){
			var _this = this;
			 const container = this.$refs.visualization;
		    this.visData.nodes = mountVisData(this, 'nodes');
		    this.visData.edges = mountVisData(this, 'edges');
		    var network = new Network(container, this.visData, this.options);
		    

		}
	}
</script>
<style scoped lang='scss'>

</style>