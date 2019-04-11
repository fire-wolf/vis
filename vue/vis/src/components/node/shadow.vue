<template>
	<div class="shadow"> 
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
					{id: 0, label: "0", group: 0},
			        {id: 1, label: "1", group: 0, shadow:{color:'green'}},
			        {id: 2, label: "2", group: 0},
			        {id: 3, label: "3", group: 1},
			        {id: 4, label: "4", group: 1},
			        {id: 5, label: "5", group: 1},
			        {id: 6, label: "6", group: 2},
			        {id: 7, label: "7", group: 2},
			        {id: 8, label: "8", group: 2},
			        {id: 9, label: "9", group: 3},
				],
				edges:[
					{from: 1, to: 0, shadow:{color:'red'}},
			        {from: 2, to: 0},
			        {from: 4, to: 3},
			        {from: 5, to: 4},
			        {from: 4, to: 0},
			        {from: 7, to: 6},
			        {from: 8, to: 7},
			        {from: 7, to: 0},
			        {from: 10, to: 9},
				],
				visData:{
					nodes:null,
					edges:null
				},
				options:{
					nodes: {
			            shape: 'dot',
			            size: 30,
			            font: {
			                size: 32
			            },
			            borderWidth: 2,
			            shadow:true
			        },
			        edges: {
			            width: 2,
			            shadow:true
			        }
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
<style scoped lang='scss'>

</style>